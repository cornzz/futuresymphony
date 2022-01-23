<script lang="ts">
    export let oversize = false
</script>

<div class="tab" class:oversize>
    <slot></slot>
</div>

<style lang="stylus">
    .tab
        background-color var(--color-background)
        height 95vh
        width 100vw
        padding 0 15px 3%
        overflow hidden
        font-size 2.5vmin
        margin-right auto
        margin-left auto
        margin-bottom 20.5vh
        box-shadow 0 0 6px 4px rgba(0,0,0,0.3)
        outline none
        display flex
        flex-direction column
        justify-content space-between

    .oversize
        min-height 95vh
        height auto

    /* TODO: rework this mess... */

    @media (min-width: 1200px)
        .tab
            padding 0 150px 3%

    @media (min-width: 1200px) and (min-height: 800px)
        .tab
            padding 0 160px 3%

    @media (min-width: 1300px)
        .tab
            padding 0 200px 3%

    @media (min-width: 1400px) 
        .tab
            padding 0 200px 3%

    @media (min-width: 1400px) and (max-height: 900px)
        .tab
            padding 0 200px 3%

    @media (min-width: 1500px) and (max-height: 890px) 
        .tab
            padding 0 240px 3%

    @media (min-width: 1600px) and (min-height: 900px)
        .tab
            padding 0 250px 3%

    @media (min-width: 1700px) 
        .tab
            padding 0 320px 3%

    @media screen and (max-device-width: 600px) 
        .tab
            height 90vh
            font-size: 3.4vmin

        .oversize
            min-height 90vh
            height auto

    @media screen and (max-device-width: 640px) and (orientation:landscape)
        .tab
            font-size 2.5vmin
</style>