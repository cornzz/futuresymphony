<script lang="ts">
    import Tab from '../../components/Tab.svelte'
    import News from '../../components/sections/News.svelte'
    import { MetaTags } from 'svelte-meta-tags'
    import { showLanding, showBack } from '../../helpers/stores'
    import { _ } from 'svelte-i18n';

    showLanding.set(false)
    showBack.set(false)
</script>

<MetaTags 
    title={$_('news.archive.meta.title')}
    description={$_('news.archive.meta.description')}
/>

<Tab oversize>
    <h1 class="cover-heading">{$_('news.archive.title')}</h1>
    <News />
    <br>
</Tab>

<style lang="stylus">

</style>