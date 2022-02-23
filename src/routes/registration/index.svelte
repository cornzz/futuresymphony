<script lang="ts">
    import Tab from '../../components/Tab.svelte'
    import RegistrationForm from '../../components/forms/RegistrationForm.svelte'
    import { MetaTags } from 'svelte-meta-tags'
    import { showLanding, showBack } from '../../helpers/stores'
    import { _ } from 'svelte-i18n'

    showLanding.set(false)
    showBack.set(false)

    function submitForm(event) {
        console.log('submit', event.detail.dto)
    }
</script>

<MetaTags 
    title={$_('registration.meta.title')}
    description={$_('registration.meta.description')}
/>

<Tab>
    <h1 class="cover-heading"><b>{$_('registration.title')}</b></h1>
    <div class="wrapper">
        <RegistrationForm
            newRegistration
            on:submit={submitForm}
        />
    </div>
</Tab>

<style lang="stylus">
    .wrapper
        height 100%
</style>