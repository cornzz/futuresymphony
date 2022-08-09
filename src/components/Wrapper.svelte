<script lang="ts">
    // Disclaimer: this code was written with static site generation in mind, therefore is error prone when running as a SPA.
    
    import LanguageSelector from './LanguageSelector.svelte'
    import { onMount, tick } from 'svelte'
    import { _, locale } from 'svelte-i18n'
    import { showLanding, showBack, sections, ticketsAvailable } from '../helpers/stores'
    import { initSmoothScrolling } from '../helpers'

    let landing: HTMLElement, header: HTMLElement, content: HTMLElement, back: HTMLElement, footer: HTMLElement
    let aboutlink: HTMLElement, newslink: HTMLElement, participantslink: HTMLElement, sponsorslink: HTMLElement, contactslink: HTMLElement
    let aboutpos: number, newspos: number, participantspos: number, sponsorspos: number, contactspos: number
    let landingBottom: number = 0
    let navOpen: boolean = false
    let showMobile: boolean = false
    let windowWidth: number
    let innerWidth: number = 0
    let scrollY: number = 0

    const ARROW_ICON = "data:image/svg+xml,%3Csvg viewBox='0 0 2048 2048' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1523 1212q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z' fill='%23EEEEEE'/%3E%3C/svg%3E"

    // Change Header appearance according to position
    function setHeader(): void {
        if (scrollY >= landingBottom - 1) {
            header.classList.add('active')
            setTimeout(() => header.classList.add('open'), 10)
            footer.classList.add('active')
            back?.classList.add('active')
        } else if (scrollY < landingBottom - header.clientHeight) {
            header.classList.remove('active', 'open')
            footer.classList.remove('active')
            back?.classList.remove('active')
        }
    }

    // Remove .active from all nav links and reset language link
    function removeActive(): void {
        [aboutlink, newslink, participantslink, sponsorslink, contactslink].forEach(l => l.classList.remove('active'));
        (document.activeElement as HTMLElement).blur()
    }

    // Add .active to the correct nav link and set language link
    function setActive(): void {
        removeActive()
        if (aboutpos <= scrollY && scrollY < newspos) {
            aboutlink.classList.add('active')
        } else if (newspos <= scrollY && scrollY < participantspos) {
            newslink.classList.add('active')
        } else if (participantspos <= scrollY && scrollY < sponsorspos) {
            participantslink.classList.add('active')
        } else if (sponsorspos <= scrollY && scrollY < contactspos) {
            sponsorslink.classList.add('active')
        } else if (contactspos <= scrollY) {
            contactslink.classList.add('active')
        }
    }

    function setPositions(): void {
        const getPos = (top) => Math.floor(top - 150)
        aboutpos = getPos($sections['#about'].offsetTop)
        newspos = getPos($sections['#news'].offsetTop)
        participantspos = getPos($sections['#participants'].offsetTop)
        sponsorspos = getPos($sections['#sponsors'].offsetTop)
        contactspos = getPos($sections['#contacts'].offsetTop)
    }

    function jumpToHash(): void {
        let hash = window.location.hash
        let hashpos = hash ? (document.querySelector(hash) as any)?.offsetTop : 0
        window.scrollTo(0, hashpos - header.clientHeight + 1)
    }

    // Set height of landing cover, push header up and set variables for relevant element positions
    async function init(): Promise<void> {
        showMobile = innerWidth <= 700
        await tick()

        if ($showLanding) {
            landing.style.height = window.innerHeight + 'px'
            landing.style['margin-bottom'] = -header.clientHeight - 1 + 'px'
            landingBottom = Math.floor(landing.clientHeight - 1)

            setPositions()
        }
        content.style['margin-top'] = header.offsetHeight - 1 + 'px'
        if (windowWidth !== innerWidth) {
            jumpToHash()
            initSmoothScrolling() // fix?
            windowWidth = innerWidth
        }
        setHeader()
    }
    
    onMount(() => {
        init()
        window.addEventListener('resize', init)
        
        if ($showLanding) {      
            window.addEventListener('scroll', setHeader)
            window.addEventListener('scroll', setActive)
            locale.subscribe(async () => { await tick(); setPositions(); setHeader(); setActive() })
        } else {
            header.classList.add('active', 'open')
            if (location.pathname.startsWith('/news')) {
                newslink.classList.add('active')
            } else if (location.pathname.startsWith('/registration')) {
                participantslink.classList.add('active')
            }
        }

        return () => {
            window.removeEventListener('resize', init)
            window.removeEventListener('scroll', setHeader)
            window.removeEventListener('scroll', setActive)
        } 
    })
</script>

<svelte:window bind:innerWidth bind:scrollY />

{#if $showLanding}
    <div class="landing" bind:this={landing}>
        <div>
            <span>FUTURE<br>SYMPHONY</span>
            <span class="sub">
                {@html $_('index.headline2')}
            </span>
        </div>
        {#if $ticketsAvailable}
            <a class="tickets" href="/#about">{$_('index.tickets')}</a>
        {/if}
    </div>
{/if}

<div class="masthead" bind:this={header}>
    {#if showMobile}
        <div class="mobile-nav">
            <div></div>
            <a class="title" href="/#start">
                FUTURE SYMPHONY
            </a>
            <div class="menu-icon" class:open={navOpen} on:click={() => navOpen = !navOpen}>
                <div class="icon left"></div>
                <div class="icon right"></div>
            </div>
            <div class="menu" class:active={navOpen} on:touchmove={(e) => e.preventDefault()}>
                <!-- svelte-ignore missing-declaration -->
                <div class="links" on:click={(e) => {
                    if (e.target instanceof HTMLAnchorElement && location.pathname !== e.target.pathname) return
                    navOpen = !navOpen
                }}>
                    <a bind:this={aboutlink} style="--n: 3" href="/#about">{$_($ticketsAvailable ? 'nav.ticketsAndAbout' : 'nav.about')}</a>
                    <a bind:this={newslink} style="--n: 2.5" href="/#news">{$_('nav.news')}</a>
                    <a bind:this={participantslink} style="--n: 2" href="/#participants">{$_('nav.participants')}</a>
                    <a bind:this={sponsorslink} style="--n: 1.5" href="/#sponsors">{$_('nav.sponsors')}</a>
                    <a bind:this={contactslink} style="--n: 1" href="/#contacts">{$_('nav.contacts')}</a>
                </div>
                <hr>
                <div class="language">
                    <LanguageSelector big on:localeChange={() => navOpen = false} />
                </div>
            </div>
        </div>
    {:else}
        <div class="desktop-nav">
            <nav>
                <ul class="nav masthead-nav">
                    <li bind:this={aboutlink}><a href="/#about">{$_($ticketsAvailable ? 'nav.ticketsAndAbout' : 'nav.about')}</a></li>
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
    <a id="back" href="#start" class="back" title="{$_('nav.back')}" bind:this={back}>
        <img src={ARROW_ICON} width="150" height="150" alt="arr.svg">
    </a>
{/if}
<div class="mastfoot" bind:this={footer}>
    <a href="/privacy">
        {$_('privacy.link')}
    </a>
    &nbsp; | &nbsp;
    <div class="desktop-only">
        <a href="https://www.facebook.com/FScompetition" class="social" target="_blank">
            <svg viewBox="0 0 9.95 20" width="20" height="20">
                <path d="M8.09 3.81c-1.4 0-1.58.84-1.58 1.67v1.3h3.35L9.49 11h-3v9H2.33v-9H0V6.88h2.42V3.81C2.42 1.3 3.81 0 6.6 0H10v3.81z">
                </path>
            </svg>
        </a>
        &nbsp; | &nbsp;
    </div>
    <a href="https://futuresymphony.lt">
        &copy; 2018 - {new Date().getFullYear()} {showMobile ? 'FSC' : 'Future Symphony Competition'}
    </a>
</div>

<style lang="stylus">
    @require '../styles/header.styl'
    @require '../styles/footer.styl'

    .landing
        height 100vh
        background-color rgba(0, 0, 0, 0.7)
        outline none
        display flex
        flex-direction column
        align-items center
        justify-content center
        font-family 'Audiowide', 'Courier New'
        color #fafafa
        text-shadow 2px 2px 14px #444444
        text-align center
        font-size 11vmin
        line-height 1.1
        text-decoration none    
        -webkit-user-select none
        -ms-user-select none
        user-select none

        div
            display flex
            flex-direction column

            .sub
                font-size 0.2em
                letter-spacing 0.05em

        .tickets
            position absolute
            top 75%
            color inherit
            text-decoration none
            font-size .3em
            transition filter 0.15s ease

            &:hover
                filter drop-shadow(0 0 20px #ddd6)
                cursor pointer

    .content
        margin-top 43px

    @media screen and (max-width 600px)
        .landing
            .tickets
                font-size 0.4em
                filter drop-shadow(0 0 20px #ddd6)
</style>
