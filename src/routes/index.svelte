<script lang="ts">
    import Tab from '../components/Tab.svelte';
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

<div bind:this={about} id="about">
    <Tab oversize>
        <About/>
    </Tab>
</div>

<div bind:this={news} id="news">
    <Tab>
        <News/>
    </Tab>
</div>

<div bind:this={participants} id="participants">        
    <Tab>
        <Participants/>
    </Tab>
</div>

<div bind:this={sponsors} id="sponsors">
    <Tab oversize>
        <Sponsors/>
    </Tab>
</div>

<div bind:this={contacts} id ="contacts" style="margin-bottom: 30px">
    <Tab oversize>
        <Contact/>
    </Tab>
</div>
