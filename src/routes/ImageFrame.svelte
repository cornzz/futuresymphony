<script lang="ts">
    import { _ } from 'svelte-i18n'
    import { fade, slide } from 'svelte/transition'
    import { linear } from 'svelte/easing'

    let show: boolean = false
    let src: string
    let alt: string
    let caption: string
    let imageWidth: number

    export function toggleImageFrame(event: MouseEvent): void {
        let target: HTMLElement = event.target as HTMLElement
        src = target.dataset.bigsrc ?? ''
        alt = target.dataset.bigalt ?? (target as HTMLImageElement).alt ?? ''
        caption = target.dataset.bigcaption ?? ''
        
        if (src) {
            show = true
            document.addEventListener('keydown', handleKeydown)
        } else {
            show = false
            document.removeEventListener('keydown', handleKeydown)
        }
    }

    function handleKeydown(event: KeyboardEvent): void {
        if (event.key === 'Escape') {
            show = false
        }
    }
</script>

{#if show}
    <div
        class="image-frame"
        on:click={toggleImageFrame}
        transition:fade={{ duration: 300, easing: linear }}
    >
        <div>
            <div bind:clientWidth={imageWidth}>
                <img {src} {alt}>
            </div>
            {#if caption && imageWidth > 0}
                <span class="caption" transition:fade={{ duration: 300, easing: linear }}>
                    {$_(caption)}
                </span>
            {/if}
        </div>
        <span class="image-frame-close" transition:slide={{ duration: 300 }}></span>
    </div>
{/if}

<style lang="stylus">
    .image-frame
        display flex
        justify-content center
        align-items center
        position fixed
        width 100%
        height 100%
        top 0
        bottom 0
        background-color rgba(0, 0, 0, .7)
        z-index 10

        & > div
            display inline-block
            position relative

            .caption
                position absolute
                bottom 3px
                width 100%
                background-color rgba(255, 255, 255, 0.8)
                padding 4px 3px
                text-align center
                pointer-events none

            img
                border 3px solid #fff
                border-radius 3px
                box-shadow 0 0 20px rgba(0, 0, 0, .7)
                max-height 100vh
                max-width 100vw
                text-align center
                line-height 6500%
                -ms-user-select none
                -webkit-user-select none
                user-select none

                &:hover
                    cursor pointer

        .image-frame-close
            text-decoration none
            cursor pointer
            display block
            width 50px
            height 50px
            box-sizing border-box
            background #fff
            color #000
            position absolute
            top 0
            right 0
            transition .2s ease-in-out

            &:hover
                background rgba(255, 255, 255, .8)

            &:after
            &:before
                content ""
                display block
                height 30px
                width 1px
                background #000
                position absolute
                left 26px
                top 10px

            &:before
                transform rotate(45deg)

            &:after
                transform rotate(-45deg)

    @media screen and (max-device-width: 600px)
        .image-frame
            .image-frame-close
                width 45px
                height 45px

                &:before
                &:after
                    height 25px
                    left 22px

            div .caption
                padding 0 3px
                font-size 10px
</style>

