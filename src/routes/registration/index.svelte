<script lang="ts">
    import InfoBox from '../../components/forms/InfoBox.svelte'
    import RegistrationForm from '../../components/forms/RegistrationForm.svelte'
    import Button from '../../components/forms/Button.svelte'
    import { RegistrationDTO } from '../../helpers/RegistrationDTO'
    import { MetaTags } from 'svelte-meta-tags'
    import { baseURL, loading } from '../../helpers/stores'
    import { _ } from 'svelte-i18n'
    import { dev } from '$app/env'

    export let dto: RegistrationDTO = new RegistrationDTO()

    let form
    let regulationsAccepted: boolean = false || dev

    async function submitForm() {
        if (form.reportValidity()) {
            // localStorage.removeItem('newRegistrationDto')
            $loading = true
            await fetch(new URL('/new_registration.php', $baseURL).toString(), {
                method: 'POST',
                body: JSON.stringify(dto)
            })
            $loading = false
        }
    }
</script>

<MetaTags 
    title={$_('registration.meta.title')}
    description={$_('registration.meta.description')}
/>

<InfoBox type="info">
    As a first step, please submit the following information. You will receive an email from <tt>registration@futuresymphony.lt</tt> with further instructions.
</InfoBox>
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
    <!-- <div></div> -->
    <Button
        type="primary"
        disabled={!regulationsAccepted}
        on:click={() => submitForm()}
    >
        Submit
    </Button>
</RegistrationForm>

<style lang="stylus">

</style>