<script lang="ts">
    import Tab from '../../components/Tab.svelte'
    import RegistrationForm from '../../components/forms/RegistrationForm.svelte'
    import Button from '../../components/forms/Button.svelte'
    import { RegistrationDTO } from '../../helpers/RegistrationDTO'
    import { MetaTags } from 'svelte-meta-tags'
    import { showLanding, showBack } from '../../helpers/stores'
    import { _ } from 'svelte-i18n'

    export let dto: RegistrationDTO = new RegistrationDTO()

    let form
    let regulationsAccepted: boolean = false

    showLanding.set(false)
    showBack.set(false)

    function submitForm() {
        if (form.validateForm()) {
            console.log('submit', dto)
            localStorage.removeItem('newRegistrationDto')
        }
    }
</script>

<MetaTags 
    title={$_('registration.meta.title')}
    description={$_('registration.meta.description')}
/>

<Tab oversize justify={false}>
    <h1 class="cover-heading"><b>{$_('registration.title')}</b></h1>
    <div class="wrapper">
        <!-- TODO: insert spinner -->
        <RegistrationForm
            bind:this={form}
            newRegistration
            bind:dto
            bind:regulationsAccepted
        >
            <Button
                type="outline"
                on:click={() => form.saveForm()}
            >
                Save
            </Button>
            <Button
                type="primary"
                disabled={!regulationsAccepted}
                on:click={() => submitForm()}
            >
                Submit
            </Button>
        </RegistrationForm>
    </div>
</Tab>

<style lang="stylus">
    .wrapper
        height 100%
</style>