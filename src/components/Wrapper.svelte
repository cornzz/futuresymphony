<script lang="ts">
    import { onMount } from 'svelte'
    import { _, locale } from 'svelte-i18n'
    import { mail } from '../helpers'
    import { showLanding, sections } from '../helpers/stores'

    let landing, header, back, footer,
        aboutlink, newslink, participantslink, sponsorslink, contactslink,
        aboutpos, newspos, participantspos, sponsorspos, contactspos,
        landingBottom

    function changeLanguage(lang) {
        locale.set(lang)
    }

    const windowPos = () => window.scrollY

    // Change Header appearance according to position
    function setHeader() {
        if (windowPos() >= landingBottom) {
            header.classList.add('active')
            header.style.top = header.clientHeight + 2 + 'px'
            footer.classList.add('active')
            back.classList.add('active')
            setActive()
        } else {
            header.classList.remove('active')
            header.style.top = ''
            footer.classList.remove('active')
            back.classList.remove('active')
            removeActive()
        }
    }

    // Remove active from all nav links and reset language link
    function removeActive() {
        [aboutlink, newslink, participantslink, sponsorslink, contactslink].forEach(l => l.classList.remove('active'))
    }

    // Add active to the correct nav link and set language link
    function setActive() {
        removeActive();
        if (aboutpos <= windowPos() && windowPos() < newspos) {
            aboutlink.classList.add('active')
        } else if (newspos <= windowPos() && windowPos() < participantspos) {
            newslink.classList.add('active');
        } else if (participantspos <= windowPos() && windowPos() < sponsorspos) {
            participantslink.classList.add('active');
        } else if (sponsorspos <= windowPos() && windowPos() < contactspos) {
            sponsorslink.classList.add('active');
        } else if (contactspos <= windowPos()) {
            contactslink.classList.add('active');
        }
    }

    // Set height of landning cover, push header up and set variables for relevant object positions
    function init() {
        landing.style.height = window.innerHeight + 'px'
        header.style['margin-top'] = - header.clientHeight - 2 + 'px'
        landingBottom = Math.floor(landing.clientHeight - header.clientHeight - 1)

        const getPos = (top) => Math.floor(top - 150)
        aboutpos = getPos($sections['#about'].offsetTop)
        newspos = getPos($sections['#news'].offsetTop)
        participantspos = getPos($sections['#participants'].offsetTop)
        sponsorspos = getPos($sections['#sponsors'].offsetTop)
        contactspos = getPos($sections['#contacts'].offsetTop)
        setHeader()
    }

    onMount(() => {
        if ($showLanding) {
            init()
            window.addEventListener('resize', init)
            window.addEventListener('scroll', setHeader)
            let hash = window.location.hash
            let hashpos = hash ? $sections[hash].offsetTop : 0
            let headerheight = document.querySelector('.masthead').clientHeight
            window.scrollTo(0, hashpos - headerheight)
        }
    })
</script>

{#if $showLanding}
    <div id="start" class="landing" bind:this={landing}>
        <span class="headline">FUTURE SYMPHONY<br>
            <span class="headline2">
                {@html $_('headline2')}
            </span>
        </span>
    </div>
{/if}

<div class="masthead active" bind:this={header}>
    <div>
        <nav>
            <ul class="nav masthead-nav">
                <li bind:this={aboutlink} id="aboutlink"><a href="/#about">ABOUT</a></li>
                <li bind:this={newslink} id="newslink"><a href="/#news">NEWS</a></li>
                <li bind:this={participantslink} id="participantslink"><a href="/#participants">FOR PARTICIPANTS</a></li>
                <li bind:this={sponsorslink} id="sponsorslink"><a href="/#sponsors">SPONSORS & PARTNERS</a></li>
                <li bind:this={contactslink} id="contactslink"><a href="/#contacts">CONTACTS</a></li>
            </ul>
        </nav>
    </div>

    <div class="flags">
        <div on:click={() => changeLanguage('en')} class="flag" title="English">
            <img src="/images/gb.svg" alt="gb.svg">
            <img src="/images/gb_o.svg" alt="gb_o.svg" class:active={$locale === 'en'}>
        </div> 
        <div on:click={() => changeLanguage('lt')} class="flag" title="Lietuvių">
            <img src="/images/lt.svg" alt="lt.svg">
            <img src="/images/lt_o.svg" alt="lt_o.svg" class:active={$locale === 'lt'}>
        </div>
    </div>
</div>

<slot></slot>

{#if $showLanding}
<a href="/#start" class="icon back" title="Start" bind:this={back}>
    <img src="/images/arr.svg" alt="arr.svg">
</a>
{/if}
<div class="mastfoot" bind:this={footer}>
    <span on:click="{mail}" class="mail" data-user="info"></span>
    &nbsp; • &nbsp;
    <a href="https://www.facebook.com/Future-Symphony-Competition-1832551767045287/" class="social" target="_blank">
        <img src="/images/fb_icon.svg" alt="fb_icon.svg" width="20">
    </a>
    &nbsp; • &nbsp;
    <a href="https://futuresymphony.lt">
        &copy; 2018 - {new Date().getFullYear()} Future Symphony Competition
    </a>
</div>

<style global lang="stylus">
    @require '../styles/header.styl'
    @require '../styles/footer.styl'
</style>
