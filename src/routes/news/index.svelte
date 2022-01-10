<script lang="ts">
    import Tab from '../../components/Tab.svelte'
    import { showLanding } from '../../helpers/stores'

    showLanding.set(false)
</script>

<Tab>
    <div style="display: flex; align-items: center; justify-content: center; height: 100%">
        News here.
    </div>
</Tab>

<style lang="stylus">

</style>