<script lang="ts">
    import Tab from '../components/Tab.svelte'
    import { showLanding } from '../helpers/stores'
    import { _ } from 'svelte-i18n';

    showLanding.set(false)
</script>

<svelte:head>
    <title>{$_('error.title')}</title>
</svelte:head>

<Tab>
    <div class="error">
        {$_('error.pageNotFound')}.
        <span on:click={() => history.back()} class="link">{$_('error.goBack')}</span>
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
