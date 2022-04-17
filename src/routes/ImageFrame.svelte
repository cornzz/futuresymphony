<script lang="ts">

    let src: string
    let alt: string
    let caption: string
    let imageFrame: HTMLElement

    export function toggleImageFrame(event: MouseEvent): void {
        let target: HTMLElement = event.target as HTMLElement
        src = target.dataset.bigsrc ?? ''
        alt = target.dataset.bigalt ?? (target as HTMLImageElement).alt ?? ''
        caption = target.dataset.bigcaption ?? ''

        if (src || imageFrame.classList.contains('active'))
            imageFrame.classList.toggle('active')
    }
</script>

<div class="image-frame" bind:this={imageFrame} on:click={toggleImageFrame}>
    <div>
        <img {src} {alt}>
        {#if caption}
            <span class="caption">{caption}</span>
        {/if}
    </div>
    <span class="image-frame-close"></span>
</div>

<style lang="stylus">
    .image-frame
        display flex
        justify-content center
        align-items center
        position fixed
        width 100%
        height 100%
        top -100%
        background-color rgba(0, 0, 0, .7)
        opacity 0
        transition opacity .3s linear
        z-index 10

        & > div
            display inline-block
            position relative

            .caption
                position absolute
                bottom 0
                left 0
                width 100%
                background-color rgba(255, 255, 255, 0.7)
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

        &:global(.active)
            opacity 1 !important
            top 0 !important
            bottom 0 !important

            .image-frame-close
                top 0

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
            top -80px
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
</style>

