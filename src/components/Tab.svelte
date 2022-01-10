<script lang="ts">
    export let oversize = false
</script>

<div class="tab" class:oversize={oversize}>
    <slot></slot>
</div>

<style lang="stylus">
    .tab
        background-color var(--color-background)
        height 95vh
        width 100%
        padding 0vh 15px 0
        overflow hidden
        font-size 2.8vmin
        margin-right auto
        margin-left auto
        margin-bottom 20.5vh
        box-shadow 0 0 6px 4px rgba(0,0,0,0.3)
        outline none

    .oversize
        min-height 95vh
        height auto
        overflow visible
        overflow-y scroll
        display inline-block

    @media (min-width: 1200px)
        .tab
            font-size 1.6vw
            padding 0vh 150px 0vh

    @media (min-width: 1200px) and (min-height: 800px)
        .tab
            font-size 1.7vw
            padding 0vh 160px 0vh

    @media (min-width: 1300px)
        .tab
            font-size 2.8vh
            padding 0vh 200px 0vh

    @media (min-width: 1400px) 
        .tab 
            font-size 1.8vw
            padding 0vh 200px 0vh

    @media (min-width: 1400px) and (max-height: 900px)
        .tab 
            font-size 1.5vw
            padding 0vh 200px 0vh

    @media (min-width: 1500px) and (max-height: 890px) 
        .tab 
            font-size 2.9vh
            padding 0vh 240px 0vh

    @media (min-width: 1600px) and (min-height: 900px)
        .tab 
            font-size 2.5vh
            padding 0vh 250px

    @media (min-width: 1700px) 
        .tab 
            font-size 2.8vh
            padding 0vh 320px

    @media screen and (max-device-width: 600px) 
        .tab 
            font-size: 1.76vh

    @media screen and (max-device-width: 640px) and (orientation:landscape) 
        .tab 
            font-size 3vh
            padding-top 30px
</style>