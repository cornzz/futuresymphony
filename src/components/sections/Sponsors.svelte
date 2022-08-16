<script lang="ts">
    import Sponsor from '../Sponsor.svelte'
    import type { SponsorData } from '../../helpers/types'
    import { _, locale } from 'svelte-i18n'

    type Sponsors = {
        [key: string]: SponsorData
    }

    const links: Sponsors = {
        lkt: {
            href: { en: 'https://www.ltkt.lt/en/', lt: 'https://www.ltkt.lt/' },
            src: { en: 'logo_lkt_en.png', lt: 'logo_lkt.png' },
            alt: { en: 'Lithuanian Council for Culture', lt: 'Lietuvos kultūros taryba' }
        },
        latga: {
            href: { en: 'https://www.latga.lt/en/about-us/', lt: 'https://www.latga.lt/' },
            src: { lt: 'logo_latga.png' },
            alt: { en: 'Association LATGA', lt: 'Asociacija LATGA' }
        },
        vln: {
            href: { en: 'https://vilnius.lt/en/', lt: 'https://vilnius.lt/' },
            src: { lt: 'logo_vln.png' },
            alt: { en: 'Vilnius City Council', lt: 'Vilniaus miesto savivaldybė' }
        },
        kf: {
            href: { en: 'http://skfoundation.com/', lt: 'http://skfoundation.com/' },
            src: { lt: 'logo_kf.png' },
            alt: { en: 'Saulius Karosas Foundation', lt: 'Sauliaus Karoso fondas' }
        },
        tn: {
            href: { en: 'https://www.triplenode.com/', lt: 'https://www.triplenode.com/' },
            src: { lt: 'logo_tn.png' },
            alt: { en: 'TRIPLENODE', lt: 'TRIPLENODE' },
            oversize: true
        },
        lrt: {
            href: { en: 'https://www.lrt.lt/en/', lt: 'https://www.lrt.lt/' },
            src: { lt: 'logo_lrt_new.png' },
            alt: { en: 'Lithuanian National Radio and Television', lt: 'Lietuvos nacionalinis radijas ir televizija' }
        },
        iq: {
            href: { en: 'https://iq.lt/', lt: 'https://iq.lt/' },
            src: { lt: 'logo_iq.png' },
            alt: { en: 'IQ Magazine', lt: 'Žurnalas „IQ“' }
        },
        lnf: {
            href: { en: 'https://www.filharmonija.lt/en/', lt: 'https://www.filharmonija.lt/' },
            src: { en: 'logo_lnf_en.png', lt: 'logo_lnf.png' },
            alt: { en: 'Lithuanian National Philharmonic Society', lt: 'Lietuvos nacionalinė filharmonija' }
        },
        pk: {
            href: { en: 'http://www.jmr.lt/?lang=en', lt: 'http://www.jmr.lt/' },
            src: { lt: 'logo_pk.png' },
            alt: { en: '„Pirmoji Kava“ Agency', lt: 'Agentūra „Pirmoji Kava“' }
        },
        cg: {
            href: { en: 'https://www.legrande.de/', lt: 'https://www.legrande.de/' },
            src: { lt: 'logo_cg.png' },
            alt: { en: '„Cafè Grande“ Coffee', lt: 'Kava „Cafè Grande“' },
            undersize: true
        },
        dm: {
            href: { en: 'https://domusmaria.com/', lt: 'https://domusmaria.com/lt/' },
            src: { lt: 'logo_dm.png' },
            alt: { en: 'Hotel „Domus Maria“', lt: 'Viešbutis „Domus Maria“' },
            undersize: true
        },
        cf: {
            href: { en: 'https://caffeine.lt/', lt: 'https://caffeine.lt/'},
            src: { lt: 'logo_cf.png' },
            alt: { en: 'Cafe „Kofeinas“', lt: 'Kavinė „Kofeinas“' }
        }
    }
</script>

<div class="content">
    <div class="flex-column" style="grid-area: a">
        <h2 class="sponsor-title">{$_('sponsors.financedBy')}:</h2>
        <div class="flex-row">
            <Sponsor link={links.lkt} />
            <Sponsor link={links.latga} />
        </div>
    </div>
    <div class="flex-column" style="grid-area: b">
        <h2 class="sponsor-title">{$_('sponsors.patron')}:</h2>
        <div class="flex-row">
            <Sponsor text="Gediminas Kuprevičius" />
        </div>
    </div>
    <div class="flex-column" style="grid-area: c">
        <h2 class="sponsor-title">{$_('sponsors.mainSponsors')}:</h2>
        <div class="flex-row">
            <Sponsor link={links.vln} />
        </div>
    </div>
    <div class="flex-column" style="grid-area: d">
        <h2 class="sponsor-title">{$_('sponsors.sponsors')}:</h2>
        <div class="flex-row">
            <Sponsor link={links.kf} />
            <Sponsor link={links.tn} />
        </div>
    </div>
    <div class="flex-column" style="grid-area: e">
        <h2 class="sponsor-title">{$_('sponsors.infSponsor')}:</h2>
        <div class="flex-row">
            <Sponsor link={links.lrt} />
            <Sponsor link={links.iq} />
        </div>
    </div>
    <div class="flex-column" style="grid-area: f">
        <h2 class="sponsor-title">{$_('sponsors.partners')}:</h2>
        <div class="flex-row">
            <Sponsor link={links.lnf} />
            <Sponsor link={links.pk} />
            <div class="breaker"></div>
            <Sponsor link={links.cg} />
            <Sponsor link={links.dm} />
            <Sponsor link={links.cf} />
        </div>
    </div>
</div>

<style lang="stylus">
    .content
        display grid
        grid-template-columns repeat(9, 1fr)
        grid-template-rows repeat(3, 1fr)
        grid-template-areas "a a a a a b b c c" "d d d d d e e e e" "f f f f f f f f f"
        height 95%
        margin-top 10px

        .flex-column
            display flex
            flex-direction column
            align-self stretch
            flex-grow 1

            .sponsor-title
                margin 10px 0 5px 0
                color rgba(70, 70, 70, .85)
                font-style italic
                font-size 2.2vmin
                font-weight 300
                text-align center

            .flex-row
                display flex
                justify-content space-evenly
                height auto
                flex-grow 1
                align-items center

    .breaker
        display none
    
    @media (max-width: 1200px)
        .content
            grid-template-rows repeat(4, 1fr)
            grid-template-columns repeat(9, 1fr)
            grid-template-areas "a a a a a a b b b" "c c c c e e e e e" "d d d d d d d d d" "f f f f f f f f f"
            height 90%
            margin-top 0
            
            .flex-column
                margin-top 20px

    @media (max-width: 500px)
        .content
            grid-template-rows repeat(6, 1fr)
            grid-template-columns 1fr 1fr
            grid-template-areas "a a" "b c" "d d" "e e" "f f" "f f"
            height 87%

            .flex-column
                margin-top 10px

                &:first-child
                    margin-top 0

                .sponsor-title
                    font-size 2.9vmin

                .flex-row
                    justify-content space-around
                    flex-wrap wrap
        
        .breaker
            display block
            width 100%
    
    @media (max-width: 340px)
        .content .flex-column
            margin-top 0
</style>

