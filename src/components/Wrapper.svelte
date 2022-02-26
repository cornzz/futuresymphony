<script lang="ts">
    // Disclaimer: this code was written with static site generation in mind, therefore is error prone when running as a SPA.
    
    import { onMount, tick } from 'svelte'
    import { _, locale } from 'svelte-i18n'
    import { mail } from '../helpers'
    import { showLanding, showBack, sections } from '../helpers/stores'
    import LanguageSelector from './LanguageSelector.svelte';

    let landing, header, content, back, footer,
        aboutlink, newslink, participantslink, sponsorslink, contactslink,
        aboutpos, newspos, participantspos, sponsorspos, contactspos,
        landingBottom = 0, windowWidth
    let navOpen = false
    let showMobile = false

    const windowPos = () => window.scrollY

    // Change Header appearance according to position
    function setHeader() {
        if (windowPos() >= landingBottom) {
            header.classList.add('active')
            header.style.top = 0
            footer.classList.add('active')
            back?.classList.add('active')
        } else {
            header.classList.remove('active')
            header.style.top = ''
            footer.classList.remove('active')
            back?.classList.remove('active')
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
        let hash = window.location.hash
        let hashpos = hash ? (document.querySelector(hash) as any).offsetTop : 0
        window.scrollTo(0, hashpos - header.scrollHeight + 1)
    }

    // Set height of landing cover, push header up and set variables for relevant element positions
    function init() {
        if ($showLanding) {
            landing.style.height = window.innerHeight + 'px'
            landing.style['margin-bottom'] = -header.clientHeight - 1 + 'px'
            landingBottom = Math.floor(landing.clientHeight - header.clientHeight - 1)

            setPositions()
        }
        content.style['margin-top'] = header.scrollHeight - 1 + 'px'
        if (windowWidth !== window.innerWidth) {
            jumpToHash()
            windowWidth = window.innerWidth
        }
        setHeader()
    }

    $: if (typeof window !== 'undefined') showMobile = window.innerWidth <= 700
    
    onMount(() => {
        init()
        window.addEventListener('resize', init)
        
        if ($showLanding) {      
            window.addEventListener('scroll', setHeader)
            window.addEventListener('scroll', setActive)
            locale.subscribe(async () => { await tick(); setPositions(); setHeader(); setActive() })
        } else if (window.location.pathname.startsWith('/news')) {
            newslink.classList.add('active')
        } else if (window.location.pathname.startsWith('/registration')) {
            participantslink.classList.add('active')
        }

        return () => {
            window.removeEventListener('resize', init)
            window.removeEventListener('scroll', setHeader)
            window.removeEventListener('scroll', setActive)
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
    {#if showMobile}
        <div class="mobile-nav">
            <div></div>
            <a class="title" href="/#start">
                FUTURE SYMPHONY
            </a>
            <div class="menu-icon" class:open={navOpen} on:click={() => navOpen = !navOpen}>
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>
            <div class="menu" class:active={navOpen} on:touchmove={(e) => e.preventDefault()}>
                <div class="links" on:click={() => navOpen = !navOpen}>
                    <a bind:this={aboutlink} href="/#about">{$_('nav.about')}</a>
                    <a bind:this={newslink} href="/#news">{$_('nav.news')}</a>
                    <a bind:this={participantslink} href="/#participants">{$_('nav.participants')}</a>
                    <a bind:this={sponsorslink} href="/#sponsors">{$_('nav.sponsors')}</a>
                    <a bind:this={contactslink} href="/#contacts">{$_('nav.contacts')}</a>
                </div>
                <hr>
                <div class="language">
                    <LanguageSelector big/>
                </div>
            </div>
        </div>
    {:else}
        <div class="desktop-nav">
            <nav>
                <ul class="nav masthead-nav">
                    <li bind:this={aboutlink}><a href="/#about">{$_('nav.about')}</a></li>
                    <li bind:this={newslink}><a href="/#news">{$_('nav.news')}</a></li>
                    <li bind:this={participantslink}><a href="/#participants">{$_('nav.participants')}</a></li>
                    <li bind:this={sponsorslink}><a href="/#sponsors">{$_('nav.sponsors')}</a></li>
                    <li bind:this={contactslink}><a href="/#contacts">{$_('nav.contacts')}</a></li>
                </ul>
            </nav>
            <LanguageSelector/>
        </div>
    {/if}
</div>

<!-- Page content -->
<div bind:this={content} class="content">
    <slot></slot>
</div>

{#if $showBack}
    <a href="#start" class="back" title="{$_('nav.back')}" bind:this={back}>
        <img src="/images/arr.svg" alt="arr.svg">
    </a>
{/if}
<div class="mastfoot" bind:this={footer}>
    <div class="desktop-only">
        <span on:click="{mail}" class="mail" data-user="info"></span>
        &nbsp; • &nbsp;
        <a href="https://www.facebook.com/FScompetition" class="social" target="_blank">
            <img src="/images/fb_icon.svg" alt="fb_icon.svg" width="20">
        </a>
        &nbsp; • &nbsp;
    </div>
    <a href="https://futuresymphony.lt">
        &copy; 2018 - {new Date().getFullYear()} Future Symphony Competition
    </a>
</div>

<style lang="stylus">
    @require '../styles/header.styl'
    @require '../styles/footer.styl'

    .content
        margin-top 43px
</style>
