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
    let regulationsAccepted: boolean = dev
    let warning: string = ''
    let error: string = ''
    let success: boolean = false

    async function submitForm() {
        error = ''
        warning = ''
        if (form.reportValidity()) {
            $loading = true
            dto.lang = $locale
            const response = await fetch(new URL('new_registration.php', dev ? 'http://localhost:8080' : `${window.location.origin}/api/`).toString(), {
                method: 'POST',
                body: JSON.stringify(dto)
            })
            if (response.status === 200) {
                success = true
                !dev && localStorage.removeItem('newRegistrationDto')
            } else {
                let responseText = await response.text()
                if (responseText === 'Email already used.') {
                    warning = 'registration.form.error.emailUsed'
                } else if (responseText === 'Invalid form.') {
                    error = 'registration.form.error.invalidForm'
                } else if (responseText === 'Too many requests.') {
                    error = 'registration.form.error.pleaseWait'
                } else {
                    error = 'registration.form.error.errorOccurred'
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
    {@html $_('registration.success', { values: { email: dto.email } })}
</InfoBox>
{:else}
    <InfoBox type="info">
        {@html $_('registration.firstStep')}
        {$_('registration.editingAllowedUntil')}
    </InfoBox>
    {#if warning}
        <InfoBox type="warning">
            {$_(warning)}
        </InfoBox>
    {/if}
    {#if error}
        <InfoBox type="error">
            {$_(error)}
        </InfoBox>
    {/if}
    <RegistrationForm
        bind:this={form}
        newRegistration
        bind:dto
        bind:regulationsAccepted
    >
        <!-- <Button
            type="outline"
            on:click={() => form.saveForm()}
        >
            {$_('registration.form.save')}
        </Button> -->
        <div></div>
        <Button
            type="primary"
            disabled={!regulationsAccepted}
            on:click={() => submitForm()}
        >
            {$_('registration.form.submit')}
        </Button>
    </RegistrationForm>
{/if}

<style lang="stylus">

</style>