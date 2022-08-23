<script lang="ts">
    import Tab from '../components/Tab.svelte'
    import Image from '../components/Image.svelte'
    import { MetaTags } from 'svelte-meta-tags'
    import { showLanding } from '../helpers/stores'
    import { _, addMessages } from 'svelte-i18n'
    import finalists_en from '../locales/en/finalists.json'
    import finalists_lt from '../locales/lt/finalists.json'

    addMessages('en', finalists_en)
    addMessages('lt', finalists_lt)

    showLanding.set(false)
</script>

<MetaTags title={$_('meta.title')}/>

<Tab oversize justify={false}>
    <h1 class="cover-heading">{$_('title')}</h1>
    <div class="bio" id="de_bock">
        <div class="bio-image">
            <Image
                src="/images/finalists/jasper_de_bock_small.jpg"
                alt="Jasper De Bock"
                width="400"
                height="400"
                bigsrc="/images/finalists/jasper_de_bock.jpg"
                caption={$_('caption.deBock')}
            />
        </div>
        <p>{@html $_('bio.deBock')}</p>
    </div>
    <hr>
    <div class="bio" id="butkus">
        <div class="bio-image right">
            <Image
                src="/images/finalists/lukas_butkus_small.jpg"
                alt="Lukas Butkus"
                width="400"
                height="400"
                bigsrc="/images/finalists/lukas_butkus.jpg"
                caption={$_('caption.butkus')}
            />
        </div>
        <p>{@html $_('bio.butkus')}</p>
    </div>
    <hr>
    <div class="bio" id="czura">
        <div class="bio-image">
            <Image
                src="/images/finalists/roman_czura_small.jpg"
                alt="Roman Czura"
                width="400"
                height="400"
                bigsrc="/images/finalists/roman_czura.jpg"
                caption={$_('caption.czura')}
            />
        </div>
        <p>{@html $_('bio.czura')}</p>
    </div>
    <hr>
    <div class="bio" id="roche">
        <div class="bio-image right">
            <Image
                src="/images/finalists/david_roche_small.jpg"
                alt="David Roche"
                width="400"
                height="400"
                bigsrc="/images/finalists/david_roche.jpg"
                caption={$_('caption.roche')}
            />
        </div>
        <p>{@html $_('bio.roche')}</p>
    </div>
    <hr>
    <div class="bio" id="scheller">
        <div class="bio-image">
            <Image
                src="/images/finalists/przemyslaw_scheller_small.jpg"
                alt="Przemysław Scheller"
                width="400"
                height="400"
                bigsrc="/images/finalists/przemyslaw_scheller.jpg"
                caption={$_('caption.scheller')}
            />
        </div>
        <p>{@html $_('bio.scheller')}</p>
    </div>
</Tab>

<style lang="stylus">
    hr
        margin 0 30%

        &:before,
        &:after
            content ''
            display block
            position absolute
            width 25px
            left 50%
            transform translate(-50%, -50%) rotate(45deg)

        &:before
            height 20px
            background var(--color-background)

        &:after
            height 3px
            border-top solid 1px var(--color-primary)
            border-bottom solid 1px var(--color-primary)
    .bio
        width 100%
        padding 40px 0

        .bio-image
            width 290px
            height 290px
            overflow hidden
            isolation isolate
            margin 10px 30px 5px 0
            float left
            border-radius 290px
            shape-outside circle()

            &.right
                margin 10px 0 5px 25px
                float right
            
            :global(img)
                height 100%
                width 100%
                transition transform 0.3s ease

            &:hover :global(img)
                transform scale(1.02)
        & > p
            text-align justify
            margin 0

            :global(b)
                font-size 1.15em

            :global(p:last-child)
                margin 0

    @media (max-width: 900px)
        hr
            margin 0 20%

            &:before,
            &:after
                width 20px

        .bio
            &:first-of-type
                padding-top 25px

            &:last-child
                padding-bottom 25px

            .bio-image
                width 145px
                height 145px
                margin 5px 10px 5px 0
</style>