<script lang="ts">
    import { _ } from 'svelte-i18n'
</script>

<div class="content">
    <div class="flex-column" style="grid-area: a">
        <h2 class="sponsor-title">{$_('sponsors.financedBy')}:</h2>
        <div class="flex-row">
            <a class="sponsor" href="https://www.ltkt.lt/" target="blank"><img src="/images/sponsors/logo_lkt.png" alt="logo_lkt.png" loading="lazy"></a>
            <a class="sponsor" href="https://www.latga.lt/" target="blank"><img src="/images/sponsors/logo_latga.png" alt="logo_latga.png" loading="lazy"></a>
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
            <a class="sponsor" href="https://vilnius.lt/en/" target="blank"><img src="/images/sponsors/logo_v.png" alt="logo_v.png" loading="lazy"></a>
            <a class="sponsor" href="https://www.filharmonija.lt/" target="blank"><img src="/images/sponsors/logo_lnf.png" alt="logo_lnf.png" loading="lazy"></a>
        </div>
    </div>
    <div class="flex-column" style="grid-area: d">
        <h2 class="sponsor-title">{$_('sponsors.sponsors')}:</h2>
        <div class="flex-row">
            <a class="sponsor" href="http://skfoundation.com/" target="blank"><img src="/images/sponsors/logo_kf.png" alt="logo_kf.png" loading="lazy"></a>
            <a class="sponsor" href="https://www.triplenode.com/" target="blank"><img src="/images/sponsors/logo_tn.png" alt="logo_tn.png" loading="lazy" class="oversize"></a>
        </div>
    </div>
    <div class="flex-column" style="grid-area: e">
        <h2 class="sponsor-title">{$_('sponsors.infSponsor')}:</h2>
        <div class="flex-row">
            <a class="sponsor" href="https://www.lrt.lt/" target="blank"><img src="/images/sponsors/logo_lrt.png" alt="logo_lrt.png" loading="lazy"></a>
            <a class="sponsor" href="https://iq.lt/" target="blank"><img src="/images/sponsors/logo_iq.png" alt="logo_iq.png" loading="lazy"></a>
        </div>
    </div>
    <div class="flex-column" style="grid-area: f">
        <h2 class="sponsor-title">{$_('sponsors.partners')}:</h2>
        <div class="flex-row">
            <a class="sponsor" href="https://www.jmr.lt/" target="blank"><img src="/images/sponsors/logo_pk.png" alt="logo_pk.png" loading="lazy"></a>
            <a class="sponsor undersize" href="https://www.legrande.de/" target="blank"><img src="/images/sponsors/logo_cg.png" alt="logo_cg.png" loading="lazy"></a>
            <a class="sponsor undersize" href="https://domusmaria.com/" target="blank"><img src="/images/sponsors/logo_dm.png" alt="logo_dm.png" loading="lazy"></a>
            <a class="sponsor" href="https://domusmaria.com/" target="blank"><img src="/images/sponsors/logo_cf.png" alt="logo_cf.png" loading="lazy"></a>
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

