<script lang="ts">
    import Tab from '../../components/Tab.svelte'
    import RegistrationForm from '../../components/forms/RegistrationForm.svelte'
    import type { RegistrationDTO } from '../../helpers/RegistrationDTO'
    import { MetaTags } from 'svelte-meta-tags'
    import { showLanding, showBack } from '../../helpers/stores'
    import { _ } from 'svelte-i18n'
    import { onMount } from 'svelte'
    import { page } from '$app/stores'

    export let dto: RegistrationDTO

    const registrationID: string = $page.params.slug

    showLanding.set(false)
    showBack.set(false)

    function saveForm() {
        console.log(`saving registration ${registrationID}`)
    }

    onMount(() => {
        console.log(`loading registration ${registrationID}`)
        dto = JSON.parse('{"firstName":"Ernst","lastName":"Haft","email":"ernsthaft@web.de","dateOfBirth":"1990-01-01"}')
    })
</script>

<MetaTags 
    title={$_('registration.meta.title')}
    description={$_('registration.meta.description')}
/>

<Tab>
    <h1 class="cover-heading"><b>{$_('registration.yourRegistration')}</b></h1>
    <div class="wrapper">
        <RegistrationForm
            disabled
            bind:dto
            on:submit={saveForm}
        />
    </div>
</Tab>

<style lang="stylus">
    .wrapper
            height 100%
</style>