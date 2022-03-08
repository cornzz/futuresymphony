<script lang="ts">
    import InfoBox from '../../components/forms/InfoBox.svelte'
    import RegistrationForm from '../../components/forms/RegistrationForm.svelte'
    import Button from '../../components/forms/Button.svelte'
    import { RegistrationDTO } from '../../helpers/RegistrationDTO'
    import { MetaTags } from 'svelte-meta-tags'
    import { baseURL, loading } from '../../helpers/stores'
    import { _, locale } from 'svelte-i18n'
    import { dev } from '$app/env'

    export let dto: RegistrationDTO = new RegistrationDTO()

    let form
    let regulationsAccepted: boolean = false || dev
    let warning: string = ''
    let error: string = ''
    let success: boolean = false

    async function submitForm() {
        if (form.reportValidity()) {
            $loading = true
            dto.lang = $locale
            const response = await fetch(new URL('new_registration.php', $baseURL).toString(), {
                method: 'POST',
                body: JSON.stringify(dto)
            })
            if (response.status === 200) {
                error = ''
                warning = ''
                success = true
                !dev && localStorage.removeItem('newRegistrationDto')
            } else {
                let responseText = await response.text()
                if (responseText !== '') {
                    if (responseText === 'Email already used.') {
                        warning = 'This email address has already been used. Please choose a different one.'
                    } else if (responseText === 'Invalid form.') {
                        error = 'An error has occured. Please check your input.'
                    } else if (responseText === 'Too many requests.') {
                        error = 'Please wait before submitting another registration.'
                    } else {
                        error = 'An error has occured. Please try again later, or contact us.'
                    }
                }
            }
            $loading = false
        }
    }
</script>

<MetaTags 
    title={$_('registration.meta.title')}
    description={$_('registration.meta.description')}
/>

<h1 class="cover-heading"><b>{$_('registration.title')}</b></h1>
{#if success}
<InfoBox type="success">
    Your registration has been submitted. Please follow the instructions that have been sent to your email address, <tt>{dto.email}</tt>.
</InfoBox>
{:else}
    <InfoBox type="info">
        As a first step, please submit the following information. You will receive an email from <tt>registration@futuresymphony.lt</tt> with further instructions.
    </InfoBox>
    {#if warning}
        <InfoBox type="warning">
            {warning}
        </InfoBox>
    {/if}
    {#if error}
        <InfoBox type="error">
            {error}
        </InfoBox>
    {/if}
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
{/if}

<style lang="stylus">

</style>