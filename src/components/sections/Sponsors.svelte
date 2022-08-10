<script lang="ts">
    import { _, locale } from 'svelte-i18n'

    type Sponsors = {
        [key: string]: {
            href: { en?: string, lt: string },
            src: { en?: string, lt: string }
        }
    }

    const links: Sponsors = {
        lkt: {
            href: { en: 'https://www.ltkt.lt/en/', lt: 'https://www.ltkt.lt/' },
            src: { en: 'logo_lkt_en.png', lt: 'logo_lkt.png' }
        },
        latga: {
            href: { en: 'https://www.latga.lt/en/about-us/', lt: 'https://www.latga.lt/' },
            src: { lt: 'logo_latga.png' }
        },
        vln: {
            href: { en: 'https://vilnius.lt/en/', lt: 'https://vilnius.lt/' },
            src: { lt: 'logo_vln.png' }
        },
        lnf: {
            href: { en: 'https://www.filharmonija.lt/en/', lt: 'https://www.filharmonija.lt/' },
            src: { en: 'logo_lnf_en.png', lt: 'logo_lnf.png' }
        },
        kf: {
            href: { lt: 'http://skfoundation.com/' },
            src: { lt: 'logo_kf.png' }
        },
        tn: {
            href: { lt: 'https://www.triplenode.com/' },
            src: { lt: 'logo_tn.png' }
        },
        lrt: {
            href: { en: 'https://www.lrt.lt/en/', lt: 'https://www.lrt.lt/' },
            src: { lt: 'logo_lrt_new.png' }
        },
        iq: {
            href: { lt: 'https://iq.lt/' },
            src: { lt: 'logo_iq.png' }
        },
        pk: {
            href: { en: 'http://www.jmr.lt/?lang=en', lt: 'http://www.jmr.lt/' },
            src: { lt: 'logo_pk.png' }
        },
        cg: {
            href: { lt: 'https://www.legrande.de/' },
            src: { lt: 'logo_cg.png' }
        },
        dm: {
            href: { en: 'https://domusmaria.com/', lt: 'https://domusmaria.com/lt/' },
            src: { lt: 'logo_dm.png' }
        },
        cf: {
            href: { lt: 'https://caffeine.lt/' },
            src: { lt: 'logo_cf.png' }
        }
    }
</script>

<div class="content">
    <div class="flex-column" style="grid-area: a">
        <h2 class="sponsor-title">{$_('sponsors.financedBy')}:</h2>
        <div class="flex-row">
            <a class="sponsor" href={links.lkt.href[$locale] ?? links.lkt.href.lt} target="blank"><img src={`/images/sponsors/${links.lkt.src[$locale] ?? links.lkt.src.lt}`} alt={links.lkt.src[$locale] ?? links.lkt.src.lt} loading="lazy"></a>
            <a class="sponsor" href={links.latga.href[$locale] ?? links.latga.href.lt} target="blank"><img src={`/images/sponsors/${links.latga.src[$locale] ?? links.latga.src.lt}`} alt={links.latga.src[$locale] ?? links.latga.src.lt} loading="lazy"></a>
        </div>
    </div>
    <div class="flex-column" style="grid-area: b">
        <h2 class="sponsor-title">{$_('sponsors.patron')}:</h2>
        <div class="flex-row">
            <span class="sponsor text">Gediminas<br>Kuprevičius</span>
        </div>
    </div>
    <div class="flex-column" style="grid-area: c">
        <h2 class="sponsor-title">{$_('sponsors.mainSponsors')}:</h2>
        <div class="flex-row">
            <a class="sponsor" href={links.vln.href[$locale] ?? links.vln.href.lt} target="blank"><img src={`/images/sponsors/${links.vln.src[$locale] ?? links.vln.src.lt}`} alt={links.vln.src[$locale] ?? links.vln.src.lt} loading="lazy"></a>
            <a class="sponsor" href={links.lnf.href[$locale] ?? links.lnf.href.lt} target="blank"><img src={`/images/sponsors/${links.lnf.src[$locale] ?? links.lnf.src.lt}`} alt={links.lnf.src[$locale] ?? links.lnf.src.lt} loading="lazy"></a>
        </div>
    </div>
    <div class="flex-column" style="grid-area: d">
        <h2 class="sponsor-title">{$_('sponsors.sponsors')}:</h2>
        <div class="flex-row">
            <a class="sponsor" href={links.kf.href[$locale] ?? links.kf.href.lt} target="blank"><img src={`/images/sponsors/${links.kf.src[$locale] ?? links.kf.src.lt}`} alt={links.kf.src[$locale] ?? links.kf.src.lt} loading="lazy"></a>
            <a class="sponsor" href={links.tn.href[$locale] ?? links.tn.href.lt} target="blank"><img src={`/images/sponsors/${links.tn.src[$locale] ?? links.tn.src.lt}`} alt={links.tn.src[$locale] ?? links.tn.src.lt} loading="lazy" class="oversize"></a>
        </div>
    </div>
    <div class="flex-column" style="grid-area: e">
        <h2 class="sponsor-title">{$_('sponsors.infSponsor')}:</h2>
        <div class="flex-row">
            <a class="sponsor" href={links.lrt.href[$locale] ?? links.lrt.href.lt} target="blank"><img src={`/images/sponsors/${links.lrt.src[$locale] ?? links.lrt.src.lt}`} alt={links.lrt.src[$locale] ?? links.lrt.src.lt} loading="lazy"></a>
            <a class="sponsor" href={links.iq.href[$locale] ?? links.iq.href.lt} target="blank"><img src={`/images/sponsors/${links.iq.src[$locale] ?? links.iq.src.lt}`} alt={links.iq.src[$locale] ?? links.iq.src.lt} loading="lazy"></a>
        </div>
    </div>
    <div class="flex-column" style="grid-area: f">
        <h2 class="sponsor-title">{$_('sponsors.partners')}:</h2>
        <div class="flex-row">
            <a class="sponsor" href={links.pk.href[$locale] ?? links.pk.href.lt} target="blank"><img src={`/images/sponsors/${links.pk.src[$locale] ?? links.pk.src.lt}`} alt={links.pk.src[$locale] ?? links.pk.src.lt} loading="lazy"></a>
            <a class="sponsor undersize" href={links.cg.href[$locale] ?? links.cg.href.lt} target="blank"><img src={`/images/sponsors/${links.cg.src[$locale] ?? links.cg.src.lt}`} alt={links.cg.src[$locale] ?? links.cg.src.lt} loading="lazy"></a>
            <a class="sponsor undersize" href={links.dm.href[$locale] ?? links.dm.href.lt} target="blank"><img src={`/images/sponsors/${links.dm.src[$locale] ?? links.dm.src.lt}`} alt={links.dm.src[$locale] ?? links.dm.src.lt} loading="lazy"></a>
            <a class="sponsor" href={links.cf.href[$locale] ?? links.cf.href.lt} target="blank"><img src={`/images/sponsors/${links.cf.src[$locale] ?? links.cf.src.lt}`} alt={links.cf.src[$locale] ?? links.cf.src.lt} loading="lazy"></a>
        </div>
    </div>
</div>

<style lang="stylus">
    .content
        display grid
        grid-template-columns repeat(5, 1fr)
        grid-template-rows repeat(3, 1fr)
        grid-template-areas "a a a b b" "c c d d d" "e e f f f"
        height 95%

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

                .sponsor
                    height 9.5vmin
                    display flex
                    flex-direction column
                    justify-content center

                    .oversize
                        height 45%

                    &.undersize
                        height 13vmin

                    img
                        max-height 100%
                        opacity 0.75
                        transition transform 0.15s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s

                        &:hover
                            opacity 1
                            transform scale(104%)

                .text
                    font-family 'Audiowide', "Courier New"
                    font-size 3vmin
                    text-align center
                    -webkit-user-select none
                    user-select none
                    transition all 0.1s ease-in-out
                
                    &:hover
                        text-shadow 0 1px 1px rgba(0,0,0,.4)
                        cursor default
                        transform scale(103%)

    @media screen and (max-device-width: 600px)
        .content
            grid-template-rows repeat(5, 1fr)
            grid-template-areas "a a a a a" "b b c c c" "d d d d d" "e e e e e" "f f f f f"
            height 90%

            .flex-column
                .sponsor-title
                    font-size 2.5vmin

                .flex-row
                    justify-content space-around

                    .sponsor
                        height 11.5vmin

                        &.undersize
                            height 16vmin
            
                    .text
                        font-size 3.5vmin
</style>

