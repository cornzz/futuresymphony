<script lang="ts">
    import Wrapper from '../components/Wrapper.svelte'
    import { onMount } from 'svelte'
    import { addMessages, init as init_i18n, locale } from 'svelte-i18n'
    import en from '../locales/en.json'
    import lt from '../locales/lt.json'
    import { initSmoothScrolling } from '../helpers'

    let darkicon

    addMessages('en', en)
    addMessages('lt', lt)
    init_i18n({
        initialLocale: 'en',
        fallbackLocale: 'en'
    })
    
    onMount(() => {
        locale.set(localStorage.getItem('locale') ?? 'en')
        locale.subscribe(lang => localStorage.setItem('locale', lang))

        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        document.body.classList.remove('preload')
        initSmoothScrolling()
    })
</script>

<div class="cover-picture"></div>
<div class="site-wrapper">
    <div class="site-wrapper-inner">
        <noscript class="noscript">For full functionality of this site it is necessary to enable JavaScript.<br> <a href="https://www.enable-javascript.com/" target="_blank">Here are the instructions how to enable JavaScript in your web browser</a>.</noscript>

        <Wrapper>
            <div class="cover-container">
                <slot></slot>
            </div>
        </Wrapper>
    </div>
</div>

<style global lang="stylus">
    @require '../styles/global.styl'

    .cover-picture
        height 100vh
        width 100%
        background url(/images/cover.jpg) no-repeat center center fixed
        background-size cover
        position fixed
        z-index -1

    .site-wrapper
        display table
        width 100%
        height 100%
        min-height 100%

    .site-wrapper-inner
        display table-cell
        height 100%
        vertical-align middle

    .cover-container
        background-color rgba(0, 0, 0, 0.3)
</style>
