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
        <b>{$_('error.pageNotFound')}</b>
        {@html $_('error.notFoundText')}
        <a href="/" class="link">{$_('error.goBack')}</a>
    </div>
</Tab>

<style lang="stylus">
    .error
        height 100%
        display flex
        gap 10px
        flex-direction column
        align-items center
        text-align center
        justify-content center
</style>
