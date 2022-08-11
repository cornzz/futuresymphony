<script lang="ts">
    import Quote from '../Quote.svelte'
    import Image from '../Image.svelte'
    import { _, addMessages } from 'svelte-i18n'
    import { fadeHeight } from '../../helpers'
    import about_en from '../../locales/en/about.json'
    import about_lt from '../../locales/lt/about.json'
    import { onMount } from 'svelte'

    addMessages('en', about_en)
    addMessages('lt', about_lt)

    let showFSO = false
    const toggleFSO = () => showFSO = !showFSO

    onMount(() => window.addEventListener('toggleFSO', toggleFSO))
</script>

<div class="content">
    <div class="quotes">
        <Quote
            quotee="Dobrinka Tabakova"
            role={$_('quotes.1.role')}
        >
            {$_('quotes.1.quote')}
        </Quote>
        <Quote
            quotee="Ayal Adler"
            role={$_('quotes.2.role')}
            mobileRight
        >
            {$_('quotes.2.quote')}
        </Quote>
        <Quote
            quotee="Charles Philip Daniels Torres"
            role={$_('quotes.3.role')}
        >
            {$_('quotes.3.quote')}
        </Quote>
    </div>
    
    <div class="image right">
        <Image
            src="/images/gallery/about_1_small.jpg"
            alt="Future Symphony Orchestra 1"
            width="750"
            height="500"
            bigsrc="/images/gallery/about_1.jpg"
            lazyLoad
        />
    </div>

    <p>{@html $_('sections.about')}</p>
    <p>
        {@html $_('sections.fso.teaser', { values: { span: '<span class="link" onclick="window.dispatchEvent(new Event(\'toggleFSO\'))">Future Symphony Orchestra</span>' } })}
        {#if showFSO}
            <div transition:fadeHeight style="overflow: hidden">
                <hr>
                    <b>Future Symphony Orchestra (FSO)</b> {@html $_('sections.fso.about')}
                <hr>
            </div>
        {/if}
    </p>

    <div class="image left">
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

    <p>
        {@html $_('sections.jury.first_title')}:<br>
        <a href="http://www.baltakas.net/" class="link" target="_blank">
            Vykintas Baltakas
        </a> ({$_('sections.jury.chairman')}, {$_('sections.jury.lt')})<br>
        <a href="http://janispetraskevics.com/" class="link" target="_blank">
            Jānis Petraškevičs
        </a> ({$_('sections.jury.lv')})<br>
        <a href="https://www.mic.lt/lt/baze/klasikine-siuolaikine/kompozitoriai/maciliunaite/" class="link" target="_blank">
            Rita Mačiliūnaitė
        </a> ({$_('sections.jury.lt')})<br>
        <a href="https://www.kristoforas.lt/apie-mus/orkestro-vadovai/" class="link" target="_blank">
            Modestas Barkauskas
        </a> ({$_('sections.jury.lt')})
    </p>
    <p>
        {@html $_('sections.jury.second_title')}:<br>
        <a href="https://www.lmic.lv/en/composers/martins-vilums-488#work" class="link" target="_blank">
            Mārtiņš Viļums
        </a> ({$_('sections.jury.lvlt')})<br>
        <a href="https://www.kyriakides.com/" class="link" target="_blank">
            Yannis Kyriakides
        </a> ({$_('sections.jury.cynl')})<br>
        <a href="https://www.justejanulyte.com/en/about/" class="link" target="_blank">
            Justė Janulytė
        </a> ({$_('sections.jury.lt')})<br>
        <a href="https://www.filharmonija.lt/en/performers/modestas-pitrenas-artistic-director-and-principal-conductor-of-the-lnso18.html" class="link" target="_blank">
            Modestas Pitrėnas
        </a> ({$_('sections.jury.lt')})<br>
        <a href="http://www.gediminasgelgotas.com/" class="link" target="_blank">
            Gediminas Gelgotas
        </a> ({$_('sections.jury.lt')})<br>
        <a href="https://ayaladler.com/" class="link" target="_blank">
            Ayal Adler
        </a> ({$_('sections.jury.il')})
    </p>
    <p>{@html $_('sections.prize')}</p>
</div>

<style lang="stylus">
    .content
        line-height 1.55

        & > p
            text-align justify

        .quotes
            margin 15px 0 25px
            display grid
            grid-template-columns 1.11fr 1fr
            column-gap 25px
            row-gap 25px

            :global(div:last-child)
                grid-column span 2
        
        .image
            box-shadow 0 10px 16px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .19)
            border-radius var(--border-radius)
            isolation isolate
            overflow hidden
            transition all 0.2s ease-out
            
            :global(img)
                height 35vmin
                width auto
        
            &.right
                float right
                margin 25px 5px 25px 60px
            
            &.left
                float left
                margin 25px 60px 25px 5px
            
            &:hover
                transition all 0.2s ease-in
                transform scale(101%)

    @media screen and (max-device-width: 900px)
        .content
            & > p
                text-align start
            
            .image
                box-shadow 0 10px 16px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .19)
                
                &.right
                    margin 15px 0 10px 25px
                
                &.left
                    margin 15px 25px 10px 0

    @media screen and (max-device-width: 750px)
        .content .quotes
            row-gap 18px

            :global(div)
                grid-column span 2
</style>

