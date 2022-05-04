<script lang="ts">
    import Tab from '../components/Tab.svelte'
    import About from '../components/About.svelte'
    import News from '../components/News.svelte'
    import Participants from '../components/Participants.svelte'
    import Sponsors from '../components/Sponsors.svelte'
    import Contacts from '../components/Contacts.svelte'
    import Image from '../components/Image.svelte'
    import { MetaTags } from 'svelte-meta-tags'
    import { onMount } from 'svelte'
    import { showLanding, showBack, sections } from '../helpers/stores'
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
            <div slot="image1" class="image right">
                <Image
                    src="/images/gallery/about_1_small.jpg"
                    alt="Future Symphony Orchestra 1"
                    width="750"
                    height="500"
                    bigsrc="/images/gallery/about_1.jpg"
                    lazyLoad
                />
            </div>
            <div slot="image2" class="image left">
                <Image
                    src="/images/gallery/about_2_small.jpg"
                    alt="Future Symphony Orchestra 2"
                    width="750"
                    height="500"
                    bigsrc="/images/gallery/about_2.jpg"
                    caption="gallery.about2"
                    lazyLoad
                />
            </div>
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
        box-shadow 0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)
        border-radius 2px
        overflow hidden
        transition all 0.2s ease-out
        
        :global(img)
            height 35vmin
            width auto
    
        &.right
            float right
            margin 30px 0 25px 50px
        
        &.left
            float left
            margin 30px 50px 25px 0
        
        &:hover
            transition all 0.2s ease-in
            transform scale(101%)

    @media screen and (max-device-width: 900px)
        .image
            box-shadow 0 0 35px 15px rgba(25, 25, 25, 0.18)
            
            &.right
                margin 15px 0 10px 25px
            
            &.left
                margin 15px 25px 10px 0
</style>