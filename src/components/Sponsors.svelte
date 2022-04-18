<script lang="ts">
    import { _ } from 'svelte-i18n'
</script>

<div class="content">
    <div class="flex-row">
        <div class="flex-column">
            <h2 class="sponsor-title">{$_('sponsors.financedBy')}:</h2>
            <div class="flex-row">
                <a class="sponsor" href="https://www.ltkt.lt/" target="blank"><img src="/images/sponsors/logo_lkt.png" alt="logo_lkt.png" loading="lazy"></a>
                <a class="sponsor" href="https://www.latga.lt/" target="blank"><img src="/images/sponsors/logo_latga.png" alt="logo_latga.png" loading="lazy"></a>
            </div>
        </div>
        <div class="flex-column">
            <h2 class="sponsor-title">{$_('sponsors.patron')}:</h2>
            <div class="flex-row">
                <span class="sponsor text">Gediminas<br>Kuprevičius</span>
            </div>
        </div>
    </div>
    <div class="flex-row break">
        <div class="flex-column">
            <h2 class="sponsor-title">{$_('sponsors.mainSponsors')}:</h2>
            <div class="flex-row">
                    <a class="sponsor" href="https://vilnius.lt/en/" target="blank"><img src="/images/sponsors/logo_v.png" alt="logo_v.png" loading="lazy" on:load={() => console.log('loaded')}></a>
                    <a class="sponsor" href="https://www.filharmonija.lt/" target="blank"><img src="/images/sponsors/logo_lnf.png" alt="logo_lnf.png" loading="lazy"></a>
            </div>
        </div>
        <div class="flex-column">
            <h2 class="sponsor-title">{$_('sponsors.sponsors')}:</h2>
            <div class="flex-row">
                <a class="sponsor" href="http://skfoundation.com/" target="blank"><img src="/images/sponsors/logo_kf.png" alt="logo_kf.png" loading="lazy"></a>
                <a class="sponsor" href="https://www.triplenode.com/" target="blank"><img src="/images/sponsors/logo_tn.png" alt="logo_tn.png" loading="lazy" class="oversize"></a>
            </div>
        </div>
    </div>
    <div class="flex-row" >
        <div class="flex-column">
            <h2 class="sponsor-title">{$_('sponsors.infSponsor')}:</h2>
            <div class="flex-row">
                <a class="sponsor" href="https://www.lrt.lt/" target="blank"><img src="/images/sponsors/logo_lrt.png" alt="logo_lrt.png" loading="lazy"></a>
            </div>
        </div>
        <div class="flex-column" style="flex-grow: 2">
            <h2 class="sponsor-title">{$_('sponsors.partners')}:</h2>
            <div class="flex-row">
                <a class="sponsor" href="https://www.jmr.lt/" target="blank"><img src="/images/sponsors/logo_pk.png" alt="logo_pk.png" loading="lazy"></a>
                <a class="sponsor undersize" href="https://domusmaria.com/" target="blank"><img src="/images/sponsors/logo_dm.png" alt="logo_dm.png" loading="lazy"></a>
            </div>
        </div>
    </div>
</div>

<style lang="stylus">

    .content
        display flex
        flex-direction column
        height 90%

        .flex-row
            display flex
            justify-content space-evenly
            height auto
            flex-grow 1
            align-items center

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
                text-align center

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
                transition all 0.15s ease-in-out

                &:hover
                    opacity 1
                    transform scale(103%)

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
            height 100%

            .flex-row
                justify-content space-around

                &.break
                    flex-wrap wrap
                    flex-grow 2

            .flex-column
                .sponsor-title
                    font-size 2.5vmin

            .sponsor
                height 11.5vmin

                &.undersize
                    height 16vmin
            
            .text
                font-size 3.5vmin
</style>

