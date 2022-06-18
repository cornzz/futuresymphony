<script lang="ts">
    import InfoBox from '../../components/forms/InfoBox.svelte'
    import RegistrationForm from '../../components/forms/RegistrationForm.svelte'
    import Button from '../../components/forms/Button.svelte'
    import Resend from '../../components/forms/Resend.svelte'
    import { RegistrationDTO } from '../../helpers/RegistrationDTO'
    import { MetaTags } from 'svelte-meta-tags'
    import { fadeHeight } from '../../helpers'
    import { baseURL, loading } from '../../helpers/stores'
    import { _, locale } from 'svelte-i18n'
    import { dev } from '$app/env'

    export let dto: RegistrationDTO = new RegistrationDTO()

    let form
    let regulationsAccepted: boolean = dev
    let warning: string = ''
    let error: string = ''
    let success: boolean = false
    let resendEmail: string = ''

    $: outlookUser = [dto.email, resendEmail].some(mail => mail.match(/outlook\.|live\.|hotmail\.|msn\.|passport\./))

    async function submitForm(): Promise<void> {
        error = ''
        warning = ''
        if (form.reportValidity()) {
            $loading = true
            dto.lang = $locale
            const response = await fetch(new URL('new_registration.php', $baseURL), {
                method: 'POST',
                body: JSON.stringify(dto)
            })
            if (response.ok) {
                success = true
                !dev && localStorage.removeItem('newRegistrationDto')
            } else {
                let responseText = await response.text()
                if (responseText === 'Email already used.') {
                    warning = 'registration.form.error.emailUsed'
                } else if (responseText === 'Invalid form.') {
                    error = 'registration.form.error.invalidForm'
                } else if (responseText === 'Error sending confirmation email.') {
                    error = 'registration.form.error.emailError'
                } else if (responseText === 'Too many requests.') {
                    warning = 'registration.form.error.pleaseWait'
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

<h1 class="cover-heading">{$_('registration.title')}</h1>
{#if success}
    <InfoBox type="success">
        {@html $_('registration.success', { values: { email: dto.email } })}
        <Resend
            type="didNotReceive"
            existingEmail={dto.email}
            bind:email={resendEmail}
            bind:error
            bind:warning
        />
    </InfoBox>
{:else}
    <InfoBox type="info">
        {@html $_('registration.firstStep')}
        {$_('registration.editingAllowedUntil')}
        <Resend
            type="alreadyRegistered"
            bind:email={resendEmail}
            bind:error
            bind:warning
        />
    </InfoBox>
{/if}
{#if outlookUser}
    <div transition:fadeHeight class="blockedInfobox">
        <InfoBox type="warning">
            {@html $_('registration.outlookBlocked')}
        </InfoBox>
    </div>
{/if}
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
{#if !success}
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
            on:click={() => submitForm()}
            disabled={!regulationsAccepted || $loading}
        >
            {$_('registration.form.submit')}
        </Button>
    </RegistrationForm>
{/if}

<style lang="stylus">
    .blockedInfobox
        margin-top 0
        
        &:before
            content ''
            display block
            height 15px
</style>