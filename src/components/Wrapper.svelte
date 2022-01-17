<script lang="ts">
    // Disclaimer: this code was written with static site generation in mind, therefore is error prone when running as a SPA.

    import { onMount, tick } from 'svelte'
    import { _, locale } from 'svelte-i18n'
    import { mail } from '../helpers'
    import { showLanding, showBack, sections } from '../helpers/stores'

    let landing, header, content, back, footer,
        aboutlink, newslink, participantslink, sponsorslink, contactslink,
        aboutpos, newspos, participantspos, sponsorspos, contactspos,
        landingBottom = 0

    function changeLanguage(lang) {
        locale.set(lang)
    }

    const windowPos = () => window.scrollY

    // Change Header appearance according to position
    function setHeader() {
        if (windowPos() >= landingBottom) {
            header.classList.add('active')
            header.style.top = 0
            footer.classList.add('active')
            back?.classList.add('active')
            setActive()
        } else {
            header.classList.remove('active')
            header.style.top = ''
            footer.classList.remove('active')
            back?.classList.remove('active')
            removeActive()
        }
    }

    // Remove .active from all nav links and reset language link
    function removeActive() {
        [aboutlink, newslink, participantslink, sponsorslink, contactslink].forEach(l => l.classList.remove('active'));
        (document.activeElement as HTMLElement).blur()
    }

    // Add .active to the correct nav link and set language link
    function setActive() {
        removeActive()
        if ($showLanding)  {
            if (aboutpos <= windowPos() && windowPos() < newspos) {
                aboutlink.classList.add('active')
            } else if (newspos <= windowPos() && windowPos() < participantspos) {
                newslink.classList.add('active')
            } else if (participantspos <= windowPos() && windowPos() < sponsorspos) {
                participantslink.classList.add('active')
            } else if (sponsorspos <= windowPos() && windowPos() < contactspos) {
                sponsorslink.classList.add('active')
            } else if (contactspos <= windowPos()) {
                contactslink.classList.add('active')
            }
        } else if (window.location.pathname.startsWith('/news')) {
            newslink.classList.add('active')
        }
    }

    function setPositions() {
        const getPos = (top) => Math.floor(top - 150)
        aboutpos = getPos($sections['#about'].offsetTop)
        newspos = getPos($sections['#news'].offsetTop)
        participantspos = getPos($sections['#participants'].offsetTop)
        sponsorspos = getPos($sections['#sponsors'].offsetTop)
        contactspos = getPos($sections['#contacts'].offsetTop)
    }

    function jumpToHash() {
        // TODO fix this on window resize
        let hash = window.location.hash
        let hashpos = hash ? (document.querySelector(hash) as any).offsetTop : 0
        window.scrollTo(0, hashpos)
    }

    // Set height of landning cover, push header up and set variables for relevant object positions
    function init() {
        if ($showLanding) {
            landing.style.height = window.innerHeight + 'px'
            landing.style['margin-bottom'] = - header.clientHeight - 1 + 'px'
            landingBottom = Math.floor(landing.clientHeight - header.clientHeight - 1)

            setPositions()
        }
        jumpToHash()
        content.style['margin-top'] = header.scrollHeight - 1 + 'px'
        setHeader()
    }

    onMount(() => {
        init()
        window.addEventListener('resize', init)
        window.addEventListener('scroll', setHeader)

        if ($showLanding) {      
            locale.subscribe(async () => { await tick(); setPositions(); setHeader() })
        }
    })
</script>

{#if $showLanding}
    <div class="landing" bind:this={landing}>
        <span>FUTURE<br>SYMPHONY</span>
        <span class="sub">
            {@html $_('index.headline2')}
        </span>
    </div>
{/if}

<div class="masthead active" bind:this={header}>
    <div>
        <nav>
            <ul class="nav masthead-nav">
                <li bind:this={aboutlink} id="aboutlink"><a href="/#about">{$_('nav.about')}</a></li>
                <li bind:this={newslink} id="newslink"><a href="/#news">{$_('nav.news')}</a></li>
                <li bind:this={participantslink} id="participantslink"><a href="/#participants">{$_('nav.participants')}</a></li>
                <li bind:this={sponsorslink} id="sponsorslink"><a href="/#sponsors">{$_('nav.sponsors')}</a></li>
                <li bind:this={contactslink} id="contactslink"><a href="/#contacts">{$_('nav.contacts')}</a></li>
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

<!-- Page content -->
<div bind:this={content}>
    <slot></slot>
</div>

{#if $showBack}
    <a href="#start" class="icon back" title="{$_('nav.back')}" bind:this={back}>
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
