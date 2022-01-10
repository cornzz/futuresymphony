<script lang="ts">
    import Tab from '../components/Tab.svelte'
    import { showLanding } from '../helpers/stores'

    showLanding.set(false)
</script>

<Tab>
    <div class="error">
        Page not found.
        <a href="/" class="link">Go back</a>
    </div>
</Tab>

<style lang="stylus">
    .error
        height 100%
        display flex
        gap 10px
        flex-direction column
        align-items center
        justify-content center
</style>
