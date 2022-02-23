<script lang="ts">
    import Tab from '../../components/Tab.svelte'
    import RegistrationForm from '../../components/forms/RegistrationForm.svelte'
    import type { RegistrationDTO } from '../../helpers/RegistrationDTO'
    import { MetaTags } from 'svelte-meta-tags'
    import { showLanding, showBack } from '../../helpers/stores'
    import { _ } from 'svelte-i18n'

    export let dto: RegistrationDTO

    showLanding.set(false)
    showBack.set(false)

    function submitForm() {
        console.log('submit', dto)
        localStorage.removeItem('newRegistrationForm')
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
            bind:dto
            on:submit={submitForm}
        />
    </div>
</Tab>

<style lang="stylus">
    .wrapper
        height 100%
</style>