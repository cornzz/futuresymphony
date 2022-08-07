<script lang="ts">
    import Tab from '../components/Tab.svelte'
    import Tickets from '../components/sections/Tickets.svelte'
    import About from '../components/sections/About.svelte'
    import News from '../components/sections/News.svelte'
    import Participants from '../components/sections/Participants.svelte'
    import Sponsors from '../components/sections/Sponsors.svelte'
    import Contacts from '../components/sections/Contacts.svelte'
    import { MetaTags } from 'svelte-meta-tags'
    import { onMount } from 'svelte'
    import { showLanding, showBack, sections, ticketsAvailable } from '../helpers/stores'
    import { _ } from 'svelte-i18n'

    let about, news, participants, sponsors, contacts
    
    showLanding.set(true)
    showBack.set(true)

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

<MetaTags
    title={$_('index.meta.title')}
    description={$_('index.meta.description')}
/>

<div id="about"></div>
<div bind:this={about}>
    <Tab oversize style="padding-top: calc(2% + 45px);">
        {#if $ticketsAvailable}
            <Tickets/>
        {/if}
        <h1 class="cover-heading">{$_('about.title')}</h1>
        <About/>
    </Tab>
</div>

<div bind:this={news} id="news">
    <Tab justify={false}>
        <h1 class="cover-heading">{$_('news.title')}</h1>
        <News latest/>
    </Tab>
</div>

<div bind:this={participants} id="participants">        
    <Tab>
        <h1 class="cover-heading">{$_('participants.title')}</h1>
        <Participants/>
    </Tab>
</div>

<div bind:this={sponsors} id="sponsors">
    <Tab justify={false}>
        <h1 class="cover-heading">{$_('sponsors.title')}</h1>
        <Sponsors/>
    </Tab>
</div>

<div bind:this={contacts} id="contacts">
    <Tab>
        <h1 class="cover-heading">{$_('contacts.title')}</h1>
        <Contacts/>
    </Tab>
</div>

<style lang="stylus">
    #about
        position relative
        top 50px
</style>