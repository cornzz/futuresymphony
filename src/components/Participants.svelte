<script lang="ts">
    import Button from './forms/Button.svelte'
    import { locale, _ } from 'svelte-i18n'

</script>

<div class="content">
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
        <a class="button" href="/registration" target="_blank">
            <Button type="primary" style="width: 200px">
                {$_('participants.registration')}
            </Button>
        </a>
    </div>
</div>

<style lang="stylus">
    .content
        line-height: 1.65
        flex-grow 1

        .center
            margin 70px 0
            width 100%
            height 100%
            text-align center
</style>

