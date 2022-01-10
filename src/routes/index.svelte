<script lang="ts">
    import About from '../components/About.svelte'
    import News from '../components/News.svelte'
    import Participants from '../components/Participants.svelte'
    import Sponsors from '../components/Sponsors.svelte'
    import Contact from '../components/Contact.svelte'
    import { onMount } from 'svelte'
    import { showLanding, sections } from '../helpers/stores'

    let about, news, participants, sponsors, contacts
    
    showLanding.set(true)

    onMount(() => {
        sections.set({
            "#about": about, 
            "#news": news,
            "#participants": participants,
            "#sponsors": sponsors,
            "#contacts": contacts
        })
    })
</script>

<div class="tab oversize" bind:this={about} id="about">
    <About/>
</div>

<div class="tab" bind:this={news} id="news">
    <News/>
</div>

<div class="tab" bind:this={participants} id="participants">        
    <Participants/>
</div>

<div class="tab oversize" bind:this={sponsors} id="sponsors">
    <Sponsors/>
</div>

<div class="tab" bind:this={contacts} id ="contacts" style="margin-bottom: 30px">
    <Contact/>
</div>

<style lang="stylus">
    .tab
        background-color var(--color-background)
        height 95vh
        width 100%
        padding 0vh 15px 0
        overflow hidden
        font-size 3vmin
        margin-right auto
        margin-left auto
        margin-bottom 20.5vh
        box-shadow 0 0 6px 4px rgba(0,0,0,0.3)
        outline none

    .oversize
        min-height 95vh
        height auto
        overflow visible
        display inline-block

    @media (min-width: 1200px)
        .tab
            font-size 1.4vw
            padding 0vh 150px 0vh

    @media (min-width: 1200px) and (min-height: 800px)
        .tab
            font-size 1.7vw
            padding 0vh 160px 0vh

    @media (min-width: 1300px)
        .tab
            font-size 3vh
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