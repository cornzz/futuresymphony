<script lang="ts">
    import Button from '../forms/Button.svelte'
    import Gallery from '../Gallery.svelte'
    import { locale, _ } from 'svelte-i18n'
    import { deadline } from '../../helpers/stores'
</script>

<div class="content">
    <div>
        {#if $locale === 'en'}
            <!-- <b>Registration</b><br> -->
            <p>Composers who are willing to participate in the competition must submit the application form <b>by June 30<sup>th</sup> 2022</b>.</p>
            <p>Application fee – <b>50 €</b></p>
            <p>Before applying, please carefully read the <a href="/files/fsc_regulations_EN_2022-02-24.pdf" class="link" target="_blank">Regulations of the Competition</a>.</p>
        {:else if $locale === 'lt'}
            <!-- <b>Registracija</b><br> -->
            <p>Kompozitoriai, norintys dalyvauti konkurse, privalo užsiregistruoti <b>iki 2022 m. birželio 30 d.</b></p>
            <p>Registracijos mokestis – <b>50 €</b></p>
            <p>Siųsdami paraiška į konkursą Jūs sutinkate su <a href="/files/fsc_regulations_LT_2022-02-24.pdf" class="link" target="_blank">Konkurso nuostatais</a>.</p>
        {/if}
        <div class="center">
            {#if !$deadline}
                <a class="button" href="/registration" target="_blank">
                    <Button type="primary" style="padding: 0 20px">
                        {$_('participants.registration')}
                    </Button>
                </a>
            {:else}
                {$_('participants.registrationClosed')}
            {/if}
        </div>
    </div>
    <Gallery/>
</div>

<style lang="stylus">
    .content
        line-height: 1.65
        flex-grow 1

        .center
            display flex
            margin 60px 0 100px 0
            justify-content center

    @media screen and (max-device-width: 600px)
        .content .center
            margin 40px 0 80px 0
</style>

