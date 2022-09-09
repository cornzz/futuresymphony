<script lang="ts">
    import { _ } from 'svelte-i18n'
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition'

    export let headerHeight
    export let loaded: boolean = false

    const MUTED_ICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='48' width='48'%3E%3Cpath fill='white' d='m40.65 45.2-6.6-6.6q-1.4 1-3.025 1.725-1.625.725-3.375 1.125v-3.1q1.15-.35 2.225-.775 1.075-.425 2.025-1.125l-8.25-8.3V40l-10-10h-8V18h7.8l-11-11L4.6 4.85 42.8 43Zm-1.8-11.6-2.15-2.15q1-1.7 1.475-3.6.475-1.9.475-3.9 0-5.15-3-9.225-3-4.075-8-5.175v-3.1q6.2 1.4 10.1 6.275 3.9 4.875 3.9 11.225 0 2.55-.7 5t-2.1 4.65Zm-6.7-6.7-4.5-4.5v-6.5Q30 17 31.325 19.2q1.325 2.2 1.325 4.8 0 .75-.125 1.475-.125.725-.375 1.425Zm-8.5-8.5-5.2-5.2 5.2-5.2Zm-3 14.3v-7.5l-4.2-4.2h-7.8v6h6.3Zm-2.1-9.6Z'/%3E%3C/svg%3E"
    const PLAY_ICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='48' width='48'%3E%3Cpath fill='white' d='M16 37.85v-28l22 14Zm3-14Zm0 8.55 13.45-8.55L19 15.3Z'/%3E%3C/svg%3E"
    const videoId = '26FCkA2liTU'

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
            <div class="live">Live</div>
            <img src={PLAY_ICON} alt="play.svg" title="{$_('stream.title')}">
            <div class="text" on:click|stopPropagation>
                {@html $_('stream.consent')}
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
            <img src={MUTED_ICON} alt="muted.svg" title="{$_('stream.unmute')}">
        </div>
    {/if}
    <a class="programme" href="/files/{$_('stream.programmeFile')}" target="_blank">{$_('stream.programme')}</a>
</div>

<style lang="stylus">
    .stream
        position absolute
        width 75%
        aspect-ratio 1.77777
        opacity 0
        transition opacity 1s ease 1.2s

        &.loaded
            opacity 1
        
        > *
            border-radius var(--border-radius)

        .overlay
            position relative
            width 100%
            height 100%
            cursor pointer
            background linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))

            img
                position absolute
                left 50%
                top 50%
                transform translate(-50%, -50%)
                height 30%
                aspect-ratio 1
                filter drop-shadow(0px 0px 2px #0009)
                transition all 0.2s ease

            &:hover img
                transform translate(-50%, -50%) scale(1.04)

        .thumbnail
            background linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/images/stream/cover_web.jpg") center/cover

            .live
                display flex
                align-items center
                position absolute
                left 5px
                top 5px
                color #fe4f02
                background rgba(75, 75, 75, .4)
                font-size 20px
                padding 3px 8px
                border-radius var(--border-radius)

                &:before
                    content ''
                    width 8px
                    height 8px
                    display block
                    background #fe4f02
                    border-radius 8px
                    margin-right 6px
                    transform scale(1)
                    box-shadow 0 0 0 0 rgba(0, 0, 0, 1)
                    animation pulse-dot 2s infinite

                @keyframes pulse-dot {
                    0% {
                        transform scale(0.95)
                        box-shadow 0 0 0 0 rgba(254, 79, 2, .8)
                    }
                    
                    75% {
                        transform scale(1)
                        box-shadow 0 0 0 6px rgba(254, 79, 2, 0)
                    }
                    
                    100% {
                        transform scale(0.95)
                        box-shadow 0 0 0 0 rgba(254, 79, 2, 0)
                    }
                }

            .text
                position absolute
                width fit-content
                bottom 5%
                left 0
                right 0
                margin 0 auto
                font-family 'Jost', sans-serif
                font-size 12px
                padding 4px
                background var(--color-primary)
                border-radius var(--border-radius)

        iframe
            position absolute
            top 0
            left 0
            width 100%
            height 100%
        
        .programme
            position absolute
            display flex
            justify-content center
            align-items center
            bottom -55px
            left 0
            right 0
            color inherit
            text-decoration none
            font-size .3em
            transition filter 0.15s ease, opacity 1s ease

            &:after
                content ''
                display block
                width 48px
                height 48px
                transform scale(0.8)
                background-image url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='48' width='48'%3E%3Cpath fill='white' stroke='white' d='M28 19.3v-2.4q1.65-.7 3.375-1.05Q33.1 15.5 35 15.5q1.3 0 2.55.2 1.25.2 2.45.5v2.2q-1.2-.45-2.425-.675Q36.35 17.5 35 17.5q-1.9 0-3.65.475T28 19.3Zm0 11v-2.45q1.65-.7 3.375-1.025Q33.1 26.5 35 26.5q1.3 0 2.55.2 1.25.2 2.45.5v2.2q-1.2-.45-2.425-.675Q36.35 28.5 35 28.5q-1.9 0-3.65.45T28 30.3Zm0-5.5v-2.4q1.65-.7 3.375-1.05Q33.1 21 35 21q1.3 0 2.55.2 1.25.2 2.45.5v2.2q-1.2-.45-2.425-.675Q36.35 23 35 23q-1.9 0-3.65.475T28 24.8ZM12.4 33q2.7 0 5.225.625 2.525.625 4.975 1.875V14.15q-2.25-1.5-4.875-2.325Q15.1 11 12.4 11q-1.9 0-3.725.475Q6.85 11.95 5 12.65v21.7q1.55-.7 3.525-1.025Q10.5 33 12.4 33Zm13.2 2.5q2.5-1.25 4.9-1.875Q32.9 33 35.6 33q1.9 0 3.925.3t3.475.8V12.65q-1.7-.85-3.6-1.25-1.9-.4-3.8-.4-2.7 0-5.225.825-2.525.825-4.775 2.325ZM24.1 40q-2.55-1.9-5.55-2.925T12.4 36.05q-1.85 0-3.6.45t-3.5 1.1q-1.15.55-2.225-.15Q2 36.75 2 35.45V12.3q0-.75.35-1.375T3.4 9.95q2.1-1 4.375-1.475Q10.05 8 12.4 8q3.15 0 6.125.85t5.575 2.6q2.55-1.75 5.475-2.6Q32.5 8 35.6 8q2.35 0 4.6.475 2.25.475 4.35 1.475.7.35 1.075.975T46 12.3v23.15q0 1.4-1.125 2.125-1.125.725-2.225.025-1.7-.7-3.45-1.125-1.75-.425-3.6-.425-3.15 0-6.05 1.05T24.1 40ZM13.8 23.55Z'/%3E%3C/svg%3E")
                margin-left 10px

            &:hover
                filter drop-shadow(0 0 20px #DDD6)
                cursor pointer

    @media (max-width 600px)
        .stream
            width 90%
            height 300px

            .thumbnail
                .live
                    font-size 14px

                .text
                    font-size 8px
                    padding 2px

            .programme
                font-size 0.4em
                filter drop-shadow(0 0 20px #DDDDDDA5)

                &:after
                    margin 0
                    transform scale(0.55)
</style>
