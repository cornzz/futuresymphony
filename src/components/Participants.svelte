<script lang="ts">
    import { locale } from 'svelte-i18n'

    let button

    function focusButton() {
        button.classList.toggle('focus')
        setTimeout(() => button.classList.toggle('focus'), 1000)
    }
</script>

<div style="line-height: 1.65;">
    {#if $locale === 'en'}
        <b>Registration</b><br>
        Composers who are willing to participate in the competition must <span on:click={focusButton} class="link">submit the application form</span> <b>by June 5<sup>th</sup> 2020, 23:59 (EEST)</b>.<br>
        The participation fee until April 5th 2020 23:59 (EEST) is <b>50 EUR</b>. The participation fee from April 6th 2020 onwards is <b>80 EUR</b>.<br>
        The registration fee is returned to the composer only in the case of competition being cancelled.<br>
        By sending the application you agree with the <a href="/regulations" class="link">Regulations of the Competition</a>.
        
        <div class="center">
            <a class="button" tabindex="0" href="https://artistdb.eu/en/nousr/contests" target="_blank" bind:this={button}>
                Register
            </a>
        </div>

        <b>Score deadline</b><br>
        Every registered participant will be contacted and asked to submit <b>by July 5<sup>th</sup> 23:59 (EEST), 2020</b>:<br>
        <ul>
            <li>a composition score in PDF format (requirements of the score can be found <a href="/regulations/#score" class="link">here</a>)</li>
            <li>an MP3 audio file (created with a music notation software).</li>
        </ul>

        For more information please see <a href="/regulations" class="link">Regulations of the Competition</a>.
    {:else if $locale === 'lt'}
        <b>Registracija</b><br>
        Kompozitoriai, norintys dalyvauti konkurse, privalo <span on:click={focusButton} class="link">užsiregistruoti</span> <b>iki 2020 m. birželio 5 d. 23:59 Lietuvos laiku (EEST)</b>.<br>
        Kompozitoriams, užsiregistravusiems iki 2020 m. balandžio 5 d. 23:59 Lietuvos laiku (EEST), dalyvio mokestis – <b>50 Eur</b>.
        Nuo 2020 m. balandžio 6 d. dalyvio mokestis – <b>80 Eur</b>.<br>
        Sumokėti pinigai dalyviams grąžinami tik konkurso atšaukimo atveju.<br>
        Siųsdami paraiška į konkursą jūs sutinkate su <a href="/lt/regulations" class="link">Konkurso nuostatais</a>.

        <div class="center">
            <a class="button" tabindex="0" href="https://artistdb.eu/lt/nousr/contests" target="_blank" bind:this={button}>
                Registruotis
            </a>
        </div>
        
        <b>Kūrinio atsiuntimas</b><br>
        Su kiekvienu užsiregistravusiu dalyviu bus susisiekta ir paprašyta <b>nuo birželio 6 d. iki 2020 m. liepos 5 d.</b> 23:59 Lietuvos laiku (EEST) atsiųsti:<br>
        <ul>
            <li>kūrinio partitūrą PDF formatu (partitūros reikalavimus rasite <a href="/lt/regulations/#score" class="link">čia</a>)</li>
            <li>kūrinio audio įrašą mp3 formatu (padarytą iš notografinių programų).</li>
        </ul>

        Daugiau informacijos rasite <a href="/regulations" class="link">Konkurso nuostatuose</a>.
    {/if}
</div>

<style lang="stylus">
    .center
        width 100%
        text-align center

    .button
        width 200px
        box-sizing border-box
        font-size 0.7em
        transition background-color .1s,
                    box-shadow .1s,
                    color .1s,
                    transform .1s
        background-color var(--color-primary)
        border-radius 2px
        border 2px solid var(--color-primary)
        color #fff
        cursor pointer
        display inline-block
        font-weight 700
        padding 5px 20px
        text-decoration none !important
        outline none
        margin 25px 0

        &:hover
        &:global(.focus)
            transform translate(-2px,-2px)
            background-color #fff
            box-shadow 4px 4px 0 0 var(--color-primary)
            color var(--color-primary)
</style>

