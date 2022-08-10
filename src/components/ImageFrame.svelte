<script lang="ts">
    import { Moon } from 'svelte-loading-spinners'
    import { _ } from 'svelte-i18n'
    import { fade, slide } from 'svelte/transition'
    import { linear } from 'svelte/easing'
    import type { Image } from '../helpers/types'
    import { tick } from 'svelte'

    let show: boolean = false
    let src: string
    let alt: string
    let caption: string
    let images: Image[]
    let index: number
    let closeCallback: () => void
    let image: HTMLElement
    let imageWidth: number
    let loading: boolean = false

    export async function toggleImageFrame(
        imageSrc?: string,
        imageAlt?: string,
        imageCaption?: string,
        imageSeries?: Image[],
        imageSeriesIndex?: number,
        callback?: () => void
    ): Promise<void> {
        src = imageSrc ?? ''
        alt = imageAlt ?? ''
        caption = ''
        images = imageSeries ?? []
        index = imageSeriesIndex ?? 0
        if (src) {
            show = true
            loading = true
            await tick()
            image.onload = () => {
                caption = imageCaption ?? ''
                loading = false
            }
            document.addEventListener('keydown', handleKeydown)
            closeCallback = callback ?? (() => {})
        } else {
            closeImage()
        }
    }

    function closeImage(): void {
        show = false
        document.removeEventListener('keydown', handleKeydown)
        closeCallback()
    }

    function nextImage(direction: 'left' | 'right'): void {
        if (images.length > 0) {
            loading = true
            index = index + (direction === 'right' ? 1 : -1)
            index = ((index % images.length) + images.length) % images.length
            src = images[index].bigsrc
            alt = images[index].bigsrc
            caption = ''
            image.onload = () => {
                caption = images[index].caption ?? ''
                loading = false
            }
        }
    }

    function handleKeydown(event: KeyboardEvent): void {
        if (event.key === 'Escape') {
            closeImage()
        } else if (event.key === 'ArrowRight') {
            nextImage('right')
        } else if (event.key === 'ArrowLeft') {
            nextImage('left')
        }
    }
</script>

{#if show}
    <div
        class="image-frame"
        on:click={() => toggleImageFrame()}
        transition:fade={{ duration: 300, easing: linear }}
    >
        {#if loading}
            <div class="spinner" transition:fade={{ duration: 100 }}>
                <Moon color="var(--color-primary)" />
            </div>
        {/if}
        <div class="image" class:loading>
            <div bind:clientWidth={imageWidth}>
                <img {src} {alt} bind:this={image}>
                {#if images.length > 0}
                    <div class="arrow left" on:click|stopPropagation={() => nextImage('left')}></div>
                    <div class="arrow right" on:click|stopPropagation={() => nextImage('right')}></div>
                {/if}
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
        background rgba(0, 0, 0, .7)
        z-index 10

        .spinner
            position absolute
            border-radius 40px
            z-index 99
            box-shadow inset 0px 0px 0px 8px #FFFFFF99

        .image
            display inline-block
            position relative
            opacity 1
            transition opacity 0.3s ease

            &.loading
                opacity 0

            img
                border 3px solid #FFF
                border-radius 3px
                box-shadow 0 0 20px rgba(0, 0, 0, .7)
                max-width 90vw
                max-height 90vh
                text-align center
                line-height 6500%
                -ms-user-select none
                -webkit-user-select none
                user-select none

                &:hover
                    cursor pointer
                
            .arrow
                position absolute
                top: 50%
                background url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' width='15px' height='15px' focusable='false'%3E%3Cpath d='m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z'%3E%3C/path%3E%3C/svg%3E") no-repeat center
                height 25px
                width 25px
                background-color white
                opacity 0.7
                border-radius 25px
                transition all 0.15s ease
                transform translateY(-50%) rotate(var(--rotation))
                
                &.left
                    left 10px
                    --rotation 180deg

                &.right
                    right 10px
                    --rotation 0deg

                &:hover
                    cursor pointer
                    transform translateY(-50%) rotate(var(--rotation)) scale(110%)
                    opacity 0.85

            .caption
                position absolute
                bottom 3px
                width 100%
                background rgba(255, 255, 255, 0.8)
                padding 4px 3px
                text-align center
                pointer-events none

        .image-frame-close
            text-decoration none
            cursor pointer
            display block
            width 50px
            height 50px
            box-sizing border-box
            background #FFF
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

            .image
                img
                    max-width 98vw
                    max-height 98vh

                .caption
                    padding 0 3px
                    font-size 10px
</style>
