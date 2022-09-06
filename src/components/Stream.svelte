<script lang="ts">
    import { _ } from 'svelte-i18n'
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition'

    export let headerHeight
    export let loaded: boolean = false

    const MUTED_ICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='48' width='48'%3E%3Cpath fill='white' d='m40.65 45.2-6.6-6.6q-1.4 1-3.025 1.725-1.625.725-3.375 1.125v-3.1q1.15-.35 2.225-.775 1.075-.425 2.025-1.125l-8.25-8.3V40l-10-10h-8V18h7.8l-11-11L4.6 4.85 42.8 43Zm-1.8-11.6-2.15-2.15q1-1.7 1.475-3.6.475-1.9.475-3.9 0-5.15-3-9.225-3-4.075-8-5.175v-3.1q6.2 1.4 10.1 6.275 3.9 4.875 3.9 11.225 0 2.55-.7 5t-2.1 4.65Zm-6.7-6.7-4.5-4.5v-6.5Q30 17 31.325 19.2q1.325 2.2 1.325 4.8 0 .75-.125 1.475-.125.725-.375 1.425Zm-8.5-8.5-5.2-5.2 5.2-5.2Zm-3 14.3v-7.5l-4.2-4.2h-7.8v6h6.3Zm-2.1-9.6Z'/%3E%3C/svg%3E"
    const PLAY_ICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='48' width='48'%3E%3Cpath fill='white' d='M16 37.85v-28l22 14Zm3-14Zm0 8.55 13.45-8.55L19 15.3Z'/%3E%3C/svg%3E"
    const videoId = 'FMrtjHDx9Bk'

    let stream: HTMLIFrameElement
    let muted: boolean = false
    let YTconsent: boolean = false
    let clicked: boolean = false

    onMount(() => {
        YTconsent = !!localStorage.getItem('YTconsent')
        setTimeout(() => loaded = !YTconsent, 200)
    })
</script>

<div
    class="stream"
    class:loaded
    style="margin-top: -{headerHeight}px"
>
    {#if !YTconsent}
        <div
            class="overlay thumbnail"
            on:click={() => {
                clicked = true
                YTconsent = true
                localStorage.setItem('YTconsent', `${new Date()}`)
            }}
        >
            <img src={PLAY_ICON} alt="play.svg" title="Start livestream">
            <div class="text" on:click|stopPropagation>
                {@html $_('index.streamConsent')}
            </div>
        </div>
    {:else}
        <iframe
            src="https://www.youtube.com/embed/{videoId}?rel=0&autoplay=1{!clicked ? '&enablejsapi=1&mute=1' : ''}"
            title="Future Symphony Competition Live Stream"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            bind:this={stream}
            on:load={() => {
                if (!clicked) {
                    muted = true
                    setTimeout(() => loaded = true, 200)
                }
            }}
        />
    {/if}
    {#if muted}
        <div
            class="overlay"
            transition:fade={{ duration: 100 }}
            on:click|once={() => {
                muted = false
                stream.contentWindow.postMessage(JSON.stringify({
                    event: 'command',
                    func: 'unMute'
                }), 'https://www.youtube.com')
            }}
        >
            <img src={MUTED_ICON} alt="muted.svg">
        </div>
    {/if}
</div>

<style lang="stylus">
    .stream
        position absolute
        width 75%
        aspect-ratio 1.77777
        border-radius var(--border-radius)
        overflow hidden
        opacity 0
        transition opacity 1s ease 1.2s

        &.loaded
            opacity 1

        .thumbnail
            background url("/images/stream/cover_web.jpg") center/cover

        .overlay
            position relative
            width 100%
            height 100%
            cursor pointer

            img
                position absolute
                left 50%
                top 50%
                transform translate(-50%, -50%)
                height 30%
                aspect-ratio 1
                filter drop-shadow(0px 0px 2px #0009)
                transition all 0.2s ease

            .text
                position absolute
                width fit-content
                top 75%
                left 0
                right 0
                margin 0 auto
                font-family 'Jost', sans-serif
                font-size 12px
                padding 4px
                background var(--color-primary)
                border-radius var(--border-radius)

            &:hover img
                transform translate(-50%, -50%) scale(1.04)

        iframe
            position absolute
            top 0
            left 0
            width 100%
            height 100%

    @media (max-width 600px)
        .stream
            width 90%
</style>
