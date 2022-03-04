<script lang="ts">
    import RegistrationForm from '../../components/forms/RegistrationForm.svelte'
    import Button from '../../components/forms/Button.svelte'
    import { RegistrationDTO } from '../../helpers/RegistrationDTO'
    import { MetaTags } from 'svelte-meta-tags'
    import { baseURL, loading } from '../../helpers/stores'
    import { _ } from 'svelte-i18n'

    export let dto: RegistrationDTO = new RegistrationDTO()

    let form
    let regulationsAccepted: boolean = false

    function submitForm() {
        if (form.validateForm()) {
            // localStorage.removeItem('newRegistrationDto')
            $loading = true
            fetch(new URL('/api/new-registration.php', $baseURL).toString(), {
                method: 'POST',
                body: JSON.stringify(dto)
            })
        }
    }
</script>

<MetaTags 
    title={$_('registration.meta.title')}
    description={$_('registration.meta.description')}
/>

As a first step, please submit the following information. You will receive an email from <tt>registration@futuresymphony.lt</tt> with further instructions.
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