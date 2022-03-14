<script lang="ts">
    import Input from './Input.svelte'
    import Button from './Button.svelte'
    import { locale, _ } from 'svelte-i18n'
    import { loading } from '../../helpers/stores'
    import { dev } from '$app/env'

    export let type: 'alreadyRegistered' | 'didNotReceive'
    export let error: string
    export let warning: string
    export let email: string = ''

    let clicked: boolean = false
    let success: boolean = false
    let tryAgainIn: number = 0
    let tryAgainInterval

    function startTimer(delay: number): void {
        tryAgainIn = new Date(new Date().getTime() + delay).getTime() - new Date().getTime()
        tryAgainInterval = setInterval(() => {
            if (tryAgainIn > 0) {
                tryAgainIn--
            } else {
                clearInterval(tryAgainInterval)
            }
        }, 1000)
    }

    async function resendEmail(): Promise<void> {
        error = ''
        warning = ''
        const emailInput: HTMLInputElement = document.getElementById('resendEmail') as HTMLInputElement
        if (email || emailInput && emailInput.reportValidity()) {
            $loading = true
            let searchParams = new URLSearchParams({ email, lang: $locale})
            const response = await fetch(
                new URL('new_registration.php?' + searchParams,
                dev ? 'http://localhost:8080' : `${window.location.origin}/api/`).toString()
            )
            if (response.status === 200) {
                success = true
                startTimer(5 * 60)
            } else {
                let responseText = await response.text()
                if (responseText === 'Email not found.') {
                    error = 'registration.resend.notFound'
                } else if (responseText === 'Error sending confirmation email.') {
                    error = 'registration.form.error.emailError'
                } else if (responseText === 'Too many requests.') {
                    warning = 'registration.resend.pleaseWait'
                } else {
                    error = 'registration.form.error.errorOccurred'
                }
                success = false
            }
            $loading = false
        }
    }
</script>

{#if !clicked}
    {$_(`registration.resend.${type}`)} <span on:click={() => clicked = !clicked} class="link">{$_('registration.resend.here')}</span>.
{:else}
    <hr>
    <div class="resend" class:success>
        {#if !success}
            <span>{$_('registration.resend.yourEmail')}:</span>
            <Input
                type="email"
                name="resendEmail"
                bind:value={email}
            />
            <Button
                type="primary"
                slim
                on:click={resendEmail}
            >
                {$_('registration.form.submit')}
            </Button>
        {:else}
            {$_('registration.resend.success')}
            {$_('registration.resend.sendAgain')}
            <span on:click={() => tryAgainIn <= 0 && resendEmail()} class="link" class:disabled={tryAgainIn > 0}>{$_('registration.resend.here')}</span>.
            {tryAgainIn > 0 ? `(${Math.floor(tryAgainIn / 60)}:${('0' + tryAgainIn % 60).slice(-2)})` : ''}
        {/if}
    </div>
{/if}

<style lang="stylus">
    .resend
        display grid
        grid-template-columns 2fr 2fr 1fr
        width 100%
        align-items center
        column-gap 15px
        row-gap 5px

    .success
        display block

    @media screen and (max-width 600px)
        .resend
            grid-template-columns 3fr 1fr

            & > :first-child
                grid-column span 2
</style>