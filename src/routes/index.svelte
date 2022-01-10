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

<svelte:head>
    <title>Future Symphony Competition</title>
</svelte:head>

<div bind:this={about} id="about">
    <Tab oversize>
        <h1 class="cover-heading"><b>Welcome!</b></h1>
        <About/>
    </Tab>
</div>

<div bind:this={news} id="news">
    <Tab>
        <h1 class="cover-heading"><b>News</b></h1>
        <News top3/>
    </Tab>
</div>

<div bind:this={participants} id="participants">        
    <Tab>
        <h1 class="cover-heading"><b>For Participants</b></h1>
        <Participants/>
    </Tab>
</div>

<div bind:this={sponsors} id="sponsors">
    <Tab oversize>
        <h1 class="cover-heading"><b>Sponsors and Partners</b></h1>
        <Sponsors/>
    </Tab>
</div>

<div bind:this={contacts} id ="contacts" style="margin-bottom: 30px">
    <Tab oversize>
        <h1 class="cover-heading"><b>Contacts</b></h1>
        <Contact/>
    </Tab>
</div>
