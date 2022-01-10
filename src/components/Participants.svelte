<script lang="ts">
    import { focusElement } from '../helpers'
</script>

<div style="line-height: 1.65;">
    <b>Registration</b><br>
    Composers who are willing to participate in the competition must <span on:click="{() => focusElement('register')}" class="link">submit the application form</span> <b>by June 5<sup>th</sup> 2020, 23:59 (EEST).</b><br>
    The participation fee until April 5th 2020 23:59 (EEST) is <b>50 EUR</b>. The participation fee from April 6th 2020 onwards is <b>80 EUR</b>.<br>
    The registration fee is returned to the composer only in the case of competition being cancelled.<br>
    By sending the application you agree with the <a href="/regulations" class="link">Regulations of the Competition</a>.<br>
    
    <div class="center">
        <a class="button" id="register" tabindex="0" href="https://artistdb.eu/en/nousr/contests" target="_blank">
            Register
        </a>
    </div>

    <b>Score deadline</b><br>
    Every registered participant will be contacted and asked to submit <b>by July 5<sup>th</sup> 23:59 (EEST), 2020</b>:<br>
    <ul>
        <li>
            a composition score in PDF format (requirements of the score can be found <a href="/regulations/#score" class="link">here</a>)
        </li>
        <li>
            an MP3 audio file (created with a music notation software).
        </li>
    </ul>

    For more information please see <a href="/regulations" class="link">Regulations of the Competition</a>.
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

    .button:hover
    .button.focus
        transform translate(-2px,-2px)
        background-color #fff
        box-shadow 4px 4px 0 0 var(--color-primary)
        color var(--color-primary)
</style>

