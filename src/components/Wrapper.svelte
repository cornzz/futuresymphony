<script lang="ts">
    // Disclaimer: this code was written with static site generation in mind, therefore is error prone when running as a SPA.
    
    import LanguageSelector from './LanguageSelector.svelte'
    import { onMount, tick } from 'svelte'
    import { _, locale } from 'svelte-i18n'
    import { showLanding, showBack, sections } from '../helpers/stores'

    let landing: HTMLElement, header: HTMLElement, content: HTMLElement, back: HTMLElement, footer: HTMLElement
    let aboutlink: HTMLElement, newslink: HTMLElement, participantslink: HTMLElement, sponsorslink: HTMLElement, contactslink: HTMLElement
    let aboutpos: number, newspos: number, participantspos: number, sponsorspos: number, contactspos: number
    let landingBottom: number = 0, windowWidth: number
    let navOpen: boolean = false
    let showMobile: boolean = false

    const ARROW_ICON = "data:image/svg+xml,%3Csvg viewBox='0 0 2048 2048' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1523 1212q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z' fill='%23EEEEEE'/%3E%3C/svg%3E"
    const FB_ICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='20px' viewBox='0 0 266.893 266.895' enable-background='new 0 0 266.893 266.895'%3E%3Cpath fill='%23304369' d='M248.082,262.307c7.854,0,14.223-6.369,14.223-14.225V18.812 c0-7.857-6.368-14.224-14.223-14.224H18.812c-7.857,0-14.224,6.367-14.224,14.224v229.27c0,7.855,6.366,14.225,14.224,14.225 H248.082z'/%3E%3Cpath fill='%23FFFFFF' d='M182.409,262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261,3.127-18.935,19.275-18.935 l20.596-0.009V45.045c-3.562-0.474-15.788-1.533-30.012-1.533c-29.695,0-50.025,18.126-50.025,51.413v28.684h-33.585v38.895h33.585 v99.803H182.409z'/%3E%3C/svg%3E"
    const windowPos: () => number = () => window.scrollY

    // Change Header appearance according to position
    function setHeader(): void {
        if (windowPos() >= landingBottom) {
            header.classList.add('active')
            header.style.top = '0'
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
    function removeActive(): void {
        [aboutlink, newslink, participantslink, sponsorslink, contactslink].forEach(l => l.classList.remove('active'));
        (document.activeElement as HTMLElement).blur()
    }

    // Add .active to the correct nav link and set language link
    function setActive(): void {
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
        let hashpos = hash ? (document.querySelector(hash) as any).offsetTop : 0
        window.scrollTo(0, hashpos - header.scrollHeight + 1)
    }

    // Set height of landing cover, push header up and set variables for relevant element positions
    function init(): void {
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
                    <LanguageSelector
                        big
                        on:localeChange={() => navOpen = false}
                    />
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
            <img src={FB_ICON} alt="fb_icon.svg" width="20" height="20">
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

    .content
        margin-top 43px
</style>
