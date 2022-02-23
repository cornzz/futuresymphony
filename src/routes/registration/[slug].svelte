<script lang="ts">
    import Tab from '../../components/Tab.svelte'
    import { MetaTags } from 'svelte-meta-tags'
    import { showLanding, showBack } from '../../helpers/stores'
    import { _ } from 'svelte-i18n';

    showLanding.set(false)
    showBack.set(false)
</script>

<MetaTags 
    title={$_('registration.meta.title')}
    description={$_('registration.meta.description')}
/>

<Tab oversize>
    <h1 class="cover-heading"><b>{$_('registration.yourRegistration')}</b></h1>

    <br>
</Tab>

<style lang="stylus">

</style>