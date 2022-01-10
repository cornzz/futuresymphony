<script lang="ts">
    import { showLanding } from '../helpers/stores'

    showLanding.set(false)
</script>

<div class="error">
    Page not found.
    <a href="/" class="link">Go back</a>
</div>

<style lang="stylus">
    .error
        font-size 20px
        width 100%
        height 90vh
        display flex
        gap 10px
        flex-direction column
        align-items center
        justify-content center
        background-color var(--color-background)
</style>
