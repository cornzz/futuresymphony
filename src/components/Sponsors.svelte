<script lang="ts">
    import { _, locale } from 'svelte-i18n'

    const path = (img: string) => `/images/sponsors/${img}`
    const links = {
        lkt: { en: 'https://www.ltkt.lt/en/', lt: 'https://www.ltkt.lt/', src: 'logo_lkt.png' },
        latga: { en: 'https://www.latga.lt/en/about-us/', lt: 'https://www.latga.lt/', src: 'logo_latga.png' },
        vln: { en: 'https://vilnius.lt/en/', lt: 'https://vilnius.lt/', src: 'logo_vln.png' },
        lnf: { en: 'https://www.filharmonija.lt/en/', lt: 'https://www.filharmonija.lt/', src: 'logo_lnf.png' },
        kf: { en: 'http://skfoundation.com/', lt: 'http://skfoundation.com/', src: 'logo_kf.png' },
        tn: { en: 'https://www.triplenode.com/', lt: 'https://www.triplenode.com/', src: 'logo_tn.png' },
        lrt: { en: 'https://www.lrt.lt/en/', lt: 'https://www.lrt.lt/', src: 'logo_lrt.png' },
        iq: { en: 'https://iq.lt/', lt: 'https://iq.lt/', src: 'logo_iq.png' },
        pk: { en: 'http://www.jmr.lt/?lang=en', lt: 'http://www.jmr.lt/', src: 'logo_pk.png' },
        cg: { en: 'https://www.legrande.de/', lt: 'https://www.legrande.de/', src: 'logo_cg.png' },
        dm: { en: 'https://domusmaria.com/', lt: 'https://domusmaria.com/lt/', src: 'logo_dm.png' },
        cf: { en: 'https://caffeine.lt/', lt: 'https://caffeine.lt/', src: 'logo_cf.png' }
    }
</script>

<div class="content">
    <div class="flex-column" style="grid-area: a">
        <h2 class="sponsor-title">{$_('sponsors.financedBy')}:</h2>
        <div class="flex-row">
            <a class="sponsor" href={links.lkt[$locale]} target="blank"><img src={path(links.lkt.src)} alt={links.lkt.src} loading="lazy"></a>
            <a class="sponsor" href={links.latga[$locale]} target="blank"><img src={path(links.latga.src)} alt={links.latga.src} loading="lazy"></a>
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
            <a class="sponsor" href={links.vln[$locale]} target="blank"><img src={path(links.vln.src)} alt={links.vln.src} loading="lazy"></a>
            <a class="sponsor" href={links.lnf[$locale]} target="blank"><img src={path(links.lnf.src)} alt={links.lnf.src} loading="lazy"></a>
        </div>
    </div>
    <div class="flex-column" style="grid-area: d">
        <h2 class="sponsor-title">{$_('sponsors.sponsors')}:</h2>
        <div class="flex-row">
            <a class="sponsor" href={links.kf[$locale]} target="blank"><img src={path(links.kf.src)} alt={links.kf.src} loading="lazy"></a>
            <a class="sponsor" href={links.tn[$locale]} target="blank"><img src={path(links.tn.src)} alt={links.tn.src} loading="lazy" class="oversize"></a>
        </div>
    </div>
    <div class="flex-column" style="grid-area: e">
        <h2 class="sponsor-title">{$_('sponsors.infSponsor')}:</h2>
        <div class="flex-row">
            <a class="sponsor" href={links.lrt[$locale]} target="blank"><img src={path(links.lrt.src)} alt={links.lrt.src} loading="lazy"></a>
            <a class="sponsor" href={links.iq[$locale]} target="blank"><img src={path(links.iq.src)} alt={links.iq.src} loading="lazy"></a>
        </div>
    </div>
    <div class="flex-column" style="grid-area: f">
        <h2 class="sponsor-title">{$_('sponsors.partners')}:</h2>
        <div class="flex-row">
            <a class="sponsor" href={links.pk[$locale]} target="blank"><img src={path(links.pk.src)} alt={links.pk.src} loading="lazy"></a>
            <a class="sponsor undersize" href={links.cg[$locale]} target="blank"><img src={path(links.cg.src)} alt={links.cg.src} loading="lazy"></a>
            <a class="sponsor undersize" href={links.dm[$locale]} target="blank"><img src={path(links.dm.src)} alt={links.dm.src} loading="lazy"></a>
            <a class="sponsor" href={links.cf[$locale]} target="blank"><img src={path(links.cf.src)} alt={links.cf.src} loading="lazy"></a>
        </div>
    </div>
</div>

<style lang="stylus">
    .content
        display grid
        grid-template-columns repeat(5, 20%)
        grid-template-rows repeat(3, 1fr)
        grid-template-areas "a a a b b" "c c d d d" "e e f f f"
        height 90%

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
                        opacity 0.7
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
            height 100%

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

