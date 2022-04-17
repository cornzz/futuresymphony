<script lang="ts">
    import Tab from '../components/Tab.svelte'
    import About from '../components/About.svelte'
    import News from '../components/News.svelte'
    import Participants from '../components/Participants.svelte'
    import Sponsors from '../components/Sponsors.svelte'
    import Contacts from '../components/Contacts.svelte'
    import { MetaTags } from 'svelte-meta-tags'
    import { onMount } from 'svelte'
    import { showLanding, showBack, sections, imageFrame } from '../helpers/stores'
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

<div bind:this={about} id="about">
    <Tab oversize>
        <h1 class="cover-heading"><b>{$_('about.title')}</b></h1>
        <About>
            <img
                slot="image1"
                class="image right"
                src="/images/about_1.jpg"
                alt="Future Symphony Orchestra 1"
                data-bigsrc="/images/about_1.jpg"
                on:click={$imageFrame.toggleImageFrame}
            >
            <img
                slot="image2"
                class="image left" 
                src="/images/about_2.jpg"
                alt="Future Symphony Orchestra 1"
                data-bigsrc="/images/about_2.jpg"
                on:click={$imageFrame.toggleImageFrame}
            >
        </About>
    </Tab>
</div>

<div bind:this={news} id="news">
    <Tab>
        <h1 class="cover-heading"><b>{$_('news.title')}</b></h1>
        <News latest/>
    </Tab>
</div>

<div bind:this={participants} id="participants">        
    <Tab>
        <h1 class="cover-heading"><b>{$_('participants.title')}</b></h1>
        <Participants/>
    </Tab>
</div>

<div bind:this={sponsors} id="sponsors">
    <Tab>
        <h1 class="cover-heading"><b>{$_('sponsors.title')}</b></h1>
        <Sponsors/>
    </Tab>
</div>

<div bind:this={contacts} id="contacts">
    <Tab>
        <h1 class="cover-heading"><b>{$_('contacts.title')}</b></h1>
        <Contacts/>
    </Tab>
</div>

<style lang="stylus">
    .image
        height 35vmin

        &:hover
            cursor pointer
    
        &.right
            float right
            margin 10px 0 5px 15px
        
        &.left
            float left
            margin 10px 15px 5px 0

    @media screen and (max-device-width: 900px)
        .image
            &.right
                margin 5px 0 5px 10px
            
            &.left
                margin 5px 10px 5px 0
</style>