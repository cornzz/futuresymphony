<script lang="ts">
    import Tab from '../components/Tab.svelte'
    import Image from '../components/Image.svelte'
    import Quote from '../components/Quote.svelte'
    import { MetaTags } from 'svelte-meta-tags'
    import { showLanding } from '../helpers/stores'
    import { _, addMessages } from 'svelte-i18n'
    import adomas_en from '../locales/en/adomas.json'
    import adomas_lt from '../locales/lt/adomas.json'

    addMessages('en', adomas_en)
    addMessages('lt', adomas_lt)

    showLanding.set(false)
</script>

<MetaTags title={$_('meta.title')}/>

<Tab oversize justify={false}>
    <h1 class="cover-heading">Adomas Morkūnas-Budrys</h1>
    <div>
        <div class="quote">
            <Quote
                quotee="James Lowe"
                role={$_('quote.role')}
            >
                {$_('quote.content')}
            </Quote>
        </div>
        <div class="bio-image">
            <Image
                src="/images/adomas_morkunas_budrys_small.jpg"
                alt="Adomas Morkunas Budrys"
                width="372"
                height="558"
                bigsrc="/images/adomas_morkunas_budrys.jpg"
            />
        </div>
        <p>{@html $_('bio.1')}</p>
        <p>{@html $_('bio.2')}</p>
        <p>{@html $_('bio.3')}</p>
        <p>{@html $_('bio.4')}</p>
        <p>{@html $_('bio.5')}</p>
    </div>
</Tab>

<style lang="stylus">
    .quote
        margin 15px 0 25px

    .bio-image
        margin 10px 15px 5px 0
        float left
        
        :global(img)
            height 50vh
            width auto

    @media screen and (max-device-width: 900px)
        .bio-image
            margin 5px 10px 5px 0

            :global(img)
                height 35vh
</style>