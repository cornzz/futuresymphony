<script lang="ts">
    import { _ } from 'svelte-i18n'
</script>

<div class="content">
    <div class="flex-column sponsors">
        <div class="flex-row">
            <div class="flex-column" style="height: 100%">
                <h2 class="cover-subheading">{$_('sponsors.patron')}:</h2>
                <div class="flex-row">
                    <span class="sponsor text">Gediminas<br>Kuprevičius</span>
                </div>
            </div>
            <div class="flex-column" style="height: 100%">
                <h2 class="cover-subheading">{$_('sponsors.sponsors')}:</h2>
                <div class="flex-row">
                    <a class="sponsor" href="http://skfoundation.com/" target="blank"><img src="/images/sponsors/logo_kf.png" alt="logo_kf.png"></a>
                </div>
                <div class="flex-row">
                    <a class="sponsor" href="https://www.latga.lt/" target="blank"><img src="/images/sponsors/logo_latga.png" alt="logo_latga.png" class="oversize"></a>
                </div>
            </div>
        </div>
    </div>
    <div class="flex-column partners">
        <h2 class="cover-subheading">{$_('sponsors.partners')}:</h2>
        <div class="flex-row">
            <a class="sponsor" href="https://www.lrt.lt/" target="blank"><img src="/images/sponsors/logo_lrt.png" alt="logo_lrt.png"></a>
            <a class="sponsor" href="https://www.filharmonija.lt/" target="blank"><img src="/images/sponsors/logo_lnf.png" alt="logo_lnf.png"></a>
            <a class="sponsor" href="https://vilnius.lt/en/" target="blank"><img src="/images/sponsors/logo_v.png" alt="logo_v.png"></a>
        </div>
        <div class="flex-row">
            <a class="sponsor" href="http://bmkkc.lt/" target="blank"><img src="/images/sponsors/logo_bmkkc.png" alt="logo_bmkkc.png" style=" max-height: 80%"></a>
            <a class="sponsor undersize" href="https://domusmaria.com/" target="blank"><img src="/images/sponsors/logo_dm.png" alt="logo_dm.png"></a>
            <a class="sponsor" href="http://www.cmm.lt/" target="blank"><img src="/images/sponsors/logo_cmm.png" alt="logo_cmm.png"></a>
        </div>
    </div>
</div>

<style lang="stylus">
    .content
        display flex
        flex-direction column
        height 100%

        .flex-column
            display flex
            flex-direction column

            &.sponsors
                flex-grow 1

            &.partners
                flex-grow 5

        .flex-row
            display flex
            justify-content space-around
            height 100%
            align-items center
            /*border 1px solid black*/

        .sponsor
            height 10vmin
            display flex
            flex-direction column
            justify-content center
            /*border 1px solid #aaa*/

            .oversize
                height 45%

            &.undersize
                height 13vmin

            img
                max-height 100%
                opacity 0.55
                transition all 0.15s ease-in-out

                &:hover
                    opacity 1
        

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

    @media screen and (max-device-width: 600px)
        .content
            .sponsor
                height 13vmin

                &.undersize
                    height 16vmin
            
            .text
                font-size 4vmin
</style>

