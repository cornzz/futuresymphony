<script lang="ts">
    import Tab from '../components/Tab.svelte'
    import { showLanding } from '../helpers/stores'

    showLanding.set(false)
</script>

<Tab>
    <div class="error">
        Page not found.
        <span on:click={() => history.back()} class="link">Go back</span>
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
