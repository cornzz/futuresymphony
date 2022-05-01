<script lang="ts">
    import { imageFrame } from '../helpers/stores'

    export let src: string
    export let alt: string
    export let width: string = ''
    export let height: string = ''
    export let bigsrc: string = ''
    export let caption: string = ''
    export let lazyLoad: boolean = false

    function onclick() {
        if (bigsrc) {
            $imageFrame.toggleImageFrame(bigsrc, alt, caption)
        }
    }
</script>

<div
    class="image open"
    on:click={onclick}
>
    <img
        {width}
        {height}
        {src}
        {alt}
        loading={lazyLoad ? 'lazy' : ''}
    >
</div>

<style lang="stylus">
    .image
        position relative

        &:after
            content ''
            position absolute
            height 100%
            width 100%
            left 0
            opacity 0
            background-color rgba(0, 0, 0, .2)
            transition all 0.2s ease

        &:hover
            cursor pointer

            &:after
                opacity 1
</style>