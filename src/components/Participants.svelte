<script lang="ts">
    import { locale } from 'svelte-i18n'

    let button, date

    function focusButton() {
        button.classList.toggle('focus')
        setTimeout(() => button.classList.toggle('focus'), 1000)
    }

    function highlightStartDate() {
        date.classList.toggle('highlight')
        setTimeout(() => date.classList.toggle('highlight'), 1000)
    }
</script>

<div class="content">
    {#if $locale === 'en'}
        <b>Registration</b><br>
        <p>Composers who are willing to participate in the competition must submit the application form <b>by June 30<sup>th</sup> 2022</b>.</p>
        <p>Application fee – <b>50 €</b></p>
        <p>Before applying, please carefully read the <b>Regulations of the Competition</b>.</p>
        
        <!-- <div class="center">
            <a class="button" tabindex="0" href="https://artistdb.eu/en/nousr/contests" target="_blank" bind:this={button}>
                Register
            </a>
        </div> -->

        <p>
            <a href="/files/fsc_regulations_EN_2022-02-24.pdf" class="link" target="_blank">Regulations of the Competition</a><br>
            <span on:click={highlightStartDate} class="link">Proceed to the Registration Platform</span>
            <span class="startDate" bind:this={date}>(will open up by 10th of March 2022)</span>
        </p>
    {:else if $locale === 'lt'}
        <b>Registracija</b><br>
        <p>Kompozitoriai, norintys dalyvauti konkurse, privalo užsiregistruoti <b>iki 2022 m. birželio 30 d.</b></p>
        <p>Registracijos mokestis – <b>50 €</b></p>
        <p>Siųsdami paraiška į konkursą Jūs sutinkate su <b>Konkurso nuostatais</b>.</p>
        
        <!-- <div class="center">
            <a class="button" tabindex="0" href="https://artistdb.eu/en/nousr/contests" target="_blank" bind:this={button}>
                Register
            </a>
        </div> -->

        <p>
            <a href="/files/fsc_regulations_LT_2022-02-24.pdf" class="link" target="_blank">Konkurso nuostatai</a><br>
            <span on:click={highlightStartDate} class="link">Pradėti registraciją</span>
            <span class="startDate" bind:this={date}>(platforma atsidarys iki 2022 m. kovo 10 d.)</span>
        </p>
    {/if}
</div>

<style lang="stylus">
    .content
        line-height: 1.65
        flex-grow 1

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

        .startDate
            transition all 0.2s ease
            border-radius 3px

            &:global(.highlight)
                background-color yellow
</style>

