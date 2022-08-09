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
    <div class="bio">
        <div class="bio-image">
            <Image
                src="/images/finalists/jasper_de_bock_small.jpg"
                alt="Adomas Morkunas Budrys"
                width="400"
                height="400"
                bigsrc="/images/finalists/jasper_de_bock.jpg"
                caption="Jasper De Bock - Personal archive photo"
            />
        </div>
        <p>{@html $_('bio.deBock')}</p>
    </div>
    <hr>
    <div class="bio">
        <div class="bio-image right">
            <Image
                src="/images/finalists/lukas_butkus_small.jpg"
                alt="Adomas Morkunas Budrys"
                width="400"
                height="400"
                bigsrc="/images/finalists/lukas_butkus.jpg"
                caption="Lukas Butkus - Photo by Tomas Terekas"
            />
        </div>
        <p>{@html $_('bio.butkus')}</p>
    </div>
    <hr>
    <div class="bio">
        <div class="bio-image">
            <Image
                src="/images/finalists/roman_czura_small.jpg"
                alt="Adomas Morkunas Budrys"
                width="400"
                height="400"
                bigsrc="/images/finalists/roman_czura.jpg"
                caption="Roman Czura - Personal archive photo"
            />
        </div>
        <p>{@html $_('bio.czura')}</p>
    </div>
    <hr>
    <div class="bio">
        <div class="bio-image right">
            <Image
                src="/images/finalists/david_roche_small.jpg"
                alt="Adomas Morkunas Budrys"
                width="400"
                height="400"
                bigsrc="/images/finalists/david_roche.jpg"
                caption="David Roche - Personal archive photo"
            />
        </div>
        <p>{@html $_('bio.roche')}</p>
    </div>
    <hr>
    <div class="bio">
        <div class="bio-image">
            <Image
                src="/images/finalists/przemyslaw_scheller_small.jpg"
                alt="Adomas Morkunas Budrys"
                width="400"
                height="400"
                bigsrc="/images/finalists/przemyslaw_scheller.jpg"
                caption="Przemysław Scheller - Personal archive photo"
            />
        </div>
        <p>{@html $_('bio.scheller')}</p>
    </div>
</Tab>

<style lang="stylus">
    hr
        margin 40px 30%

        &:before,
        &:after
            content ''
            display block
            position absolute
            left 50%
            transform translate(-50%, -50%) rotate(45deg)

        &:before
            width 25px
            height 20px
            background var(--color-background)

        &:after
            width 25px
            height 3px
            border-top solid 1px var(--color-primary)
            border-bottom solid 1px var(--color-primary)
    .bio
        width 100%

        &:first-of-type
            margin-top 20px

        .bio-image
            width 290px
            height 290px
            overflow hidden
            margin 10px 30px 5px 0
            float left
            border-radius 100%
            shape-outside circle()
            transition transform 0.3s ease

            &:hover
                transform scale(1.02)

            &.right
                margin 10px 0 5px 25px
                float right
            
            :global(img)
                height 100%
                width 100%
        
        & > p
            text-align justify
            margin 0

            :global(b)
                font-size 1.1em

            :global(p:last-child)
                margin 0

    @media screen and (max-device-width: 900px)
        hr
            margin 40px 20%

        .bio .bio-image
            width 145px
            height 145px
            margin 5px 10px 5px 0

            // :global(img)
            //     height 35vh
</style>