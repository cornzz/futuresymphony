<script lang="ts">
    import Tab from '../../components/Tab.svelte'
    import News from '../../components/News.svelte'
    import { showLanding } from '../../helpers/stores'

    showLanding.set(false)
</script>

<svelte:head>
    <title>
        News archive - Future Symphony Competition
    </title>
</svelte:head>

<Tab oversize>
    <h1 class="cover-heading"><b>News archive</b></h1>
    <News/>
</Tab>

<style lang="stylus">

</style>