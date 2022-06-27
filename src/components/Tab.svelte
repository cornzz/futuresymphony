<script lang="ts">
    export let oversize: boolean = false
    export let justify: boolean = true
    export let fullwidth: boolean = false
    export let style: string = ''
</script>

<div class="tab" class:oversize class:justify class:fullwidth {style}>
    <slot></slot>
</div>

<style lang="stylus">
    .tab
        background-color var(--color-background)
        height 95vh
        width 100vw
        padding 2% 15px 3%
        overflow hidden
        font-size 2.3vmin
        margin-right auto
        margin-left auto
        margin-bottom 20.5vh
        box-shadow 0 0 6px 4px rgba(0,0,0,0.3)
        outline none
        display flex
        flex-direction column

        &.oversize
            min-height 95vh
            height auto

        &.justify
            justify-content space-between

        &.fullwidth
            padding-left 15px
            padding-right 15px

    /* TODO: rework this mess... */

    @media (min-width: 1200px)
        .tab
            padding 2% 150px 3%

    @media (min-width: 1200px) and (min-height: 800px)
        .tab
            padding 2% 160px 3%

    @media (min-width: 1300px)
        .tab
            padding 2% 200px 3%

    @media (min-width: 1400px) 
        .tab
            padding 2% 200px 3%

    @media (min-width: 1400px) and (max-height: 900px)
        .tab
            padding 2% 200px 3%

    @media (min-width: 1500px) and (max-height: 890px) 
        .tab
            padding 2% 240px 3%

    @media (min-width: 1600px) and (min-height: 900px)
        .tab
            padding 2% 250px 3%

    @media (min-width: 1700px) 
        .tab
            padding 2% 320px 3%

    @media screen and (max-device-width: 600px)
        .tab
            height 94vh
            font-size: 3.4vmin

            &.oversize
                min-height 94vh
                height auto

    @media screen and (max-device-width: 640px) and (orientation:landscape)
        .tab
            font-size 2.5vmin
</style>