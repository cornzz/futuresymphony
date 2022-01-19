<script lang="ts">
    import { _ } from 'svelte-i18n'
</script>

<div class="content">
    <div class="section">
        <h2 class="cover-subheading">{$_('sponsors.sponsors')}:</h2>
        <div class="section-row">
            <a href="https://www.ltkt.lt/" target="_blank"><img src="/images/sponsors/logo_ltkt.png" alt="logo_ltkt.png"></a>
            <a href="https://skfoundation.com/" target="_blank"><img src="/images/sponsors/logo_kf.png" alt="logo_kf.png"></a>
        </div>
    </div>
    <div class="section partners">
        <h2 class="cover-subheading">{$_('sponsors.partners')}:</h2>
        <div class="section-row">
            <a href="https://www.lrt.lt/" target="_blank"><img src="/images/sponsors/logo_lrt.png" alt="logo_lrt.png"></a>
            <a href="https://www.filharmonija.lt/" target="_blank"><img src="/images/sponsors/logo_lnf.png" alt="logo_lnf.png"></a>
            <a href="https://vilnius.lt/en/" target="_blank"><img src="/images/sponsors/logo_v.png" alt="logo_v.png"></a>
        </div>
        <div class="section-row">
            <a href="http://www.triplenode.com/" target="_blank"><img src="/images/sponsors/logo_tn.png" alt="logo_tn.png" class="oversize"></a>
            <a href="https://www.latga.lt/" target="_blank"><img src="/images/sponsors/logo_latga.png" alt="logo_latga.png" class="oversize"></a>
        </div>
        <div class="section-row">
            <a href="http://bmkkc.lt/" target="_blank"><img src="/images/sponsors/logo_bmkkc.png" alt="logo_bmkkc.png" style=" max-height: 80%"></a>
            <a href="https://domusmaria.com/" target="_blank" class="undersize"><img src="/images/sponsors/logo_dm.png" alt="logo_dm.png"></a>
            <a href="http://www.cmm.lt/" target="_blank"><img src="/images/sponsors/logo_cmm.png" alt="logo_cmm.png"></a>
        </div>
    </div>
</div>

<style lang="stylus">
    .content
        display flex
        flex-direction column
        height 100%

        .section
            display flex
            flex-direction column

            &.partners
                flex-grow 1

            .section-row
                display flex
                justify-content space-around
                height 100%
                align-items center
                /*border 1px solid black*/

                a
                    height 10vmin
                    display flex
                    flex-direction column
                    justify-content center
                    /*border 1px solid #aaa*/

                    .oversize
                        height 48%

                    &.undersize
                        height 13vmin

                    img
                        max-height 100%
                        opacity 0.55
                        transition all 0.15s ease-in-out

                    img:hover
                        opacity 1

    @media screen and (max-device-width: 600px)
        .content .section .section-row
            a
                height 13vmin

                &.undersize
                    height 16vmin
</style>

