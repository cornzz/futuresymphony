<script lang="ts">
    import Button from "../forms/Button.svelte"
    import Input from "../forms/Input.svelte"
    import Textarea from "../forms/Textarea.svelte"
    import Checkbox from "../forms/Checkbox.svelte"
    import { getAuth } from '../../helpers'
    import { loading, baseURL } from '../../helpers/stores'
    import { onMount } from "svelte"
    import { _ } from 'svelte-i18n'

    export let password: string
    export let show: boolean
    export let dialog: string

    type Criterion = { active: boolean, value: boolean }

    let showPreflight: boolean = false
    let preflightConfirmation: boolean
    let recipients: string[] = []
    let subject: string
    let message: string
    let statusCriterion: Criterion = { active: true, value: true }
    let completeCriterion: Criterion = { active: false, value: true }
    let paymentCriterion: Criterion = { active: false, value: true }
    let secondCriterion: Criterion = { active: false, value: null }

    async function sendMail(preflight: boolean = true): Promise<void> {
        $loading = true
        const response = await fetch(new URL('mail.php', $baseURL), {
            method: 'POST',
            headers: getAuth(password),
            body: JSON.stringify({
                preflight,
                subject,
                message,
                status: statusCriterion,
                complete: completeCriterion,
                payment: paymentCriterion,
                second: secondCriterion
            })
        })
        const responseText = await response.text()
        $loading = false
        if (preflight) {
            recipients = responseText.length ? responseText.split(',') : []
            showPreflight = true
        } else {
            dialog = responseText
            show = false
        }
    }

    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && (show = false)

    onMount(() => {
        document.addEventListener('keydown', closeOnEscape)
        return () => document.removeEventListener('keydown', closeOnEscape)
    })
</script>

{#if !showPreflight}
    <div class="mailer">
        <Input
            type="text"
            name="subject"
            label="admin.mailer.subject"
            bind:value={subject}
        />
        <Textarea
            name="message"
            label="admin.mailer.message"
            rows={10}
            bind:value={message}
        />
        {$_('admin.mailer.sendingCriteria')}:
        <div class="criteria">    
            <div>
                <label>
                    Status
                    <select bind:value={statusCriterion.value}>
                        <option value={true}>{$_('admin.mailer.confirmed')}</option>
                        <option value={false}>{$_('admin.mailer.unconfirmed')}</option>
                    </select>
                </label>
            </div>
            {#if statusCriterion.value}
                <div>
                    <label>
                        <input type="checkbox" bind:checked={paymentCriterion.active}/>
                        payment
                        <select disabled={!paymentCriterion.active} bind:value={paymentCriterion.value}>
                            <option value={true}>true</option>
                            <option value={false}>false</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" bind:checked={completeCriterion.active}/>
                        complete
                        <select disabled={!completeCriterion.active} bind:value={completeCriterion.value}>
                            <option value={true}>true</option>
                            <option value={false}>false</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" bind:checked={secondCriterion.active}/>
                        second
                        <select disabled={!secondCriterion.active} bind:value={secondCriterion.value}>
                            <option value={null}>TBD</option>
                            <option value={true}>true</option>
                            <option value={false}>false</option>
                        </select>
                    </label>
                </div>
            {/if}
        </div>
    </div>
    <div class="buttons">
        <Button
            on:click={() => show = false}
        >
            {$_('registration.form.cancel')}
        </Button>
        <Button
            type="primary"
            disabled={!subject || !message || $loading}
            on:click={() => sendMail()}
        >
            {$_('admin.mailer.send')}
        </Button>
    </div>
{:else}
    {$_('admin.mailer.sendingNMessages', { values: { number: recipients.length }})}
    <hr>
    {#if recipients.length}
        {$_('admin.mailer.recipients')}:<br>
        {#each recipients as recipient}
            {recipient}<br>
        {/each}
    {/if}
    <hr>
    <div class="confirmation">
        <Checkbox
            name="preflightConfirmation"
            label={$_('admin.mailer.confirmRecipients')}
            bind:checked={preflightConfirmation}
        />
    </div>
    <div class="buttons">
        <Button
            on:click={() => showPreflight = false}
        >
            {$_('error.goBack')}
        </Button>
        <Button
            type="primary"
            disabled={!preflightConfirmation || $loading}
            on:click={() => sendMail(false)}
        >
            {$_('admin.mailer.confirm')}
        </Button>
    </div>
{/if}

<style lang="stylus">
    .mailer
        display flex
        flex-direction column
        row-gap 15px
        width 85vw

        .criteria
            display grid
            grid-template-columns repeat(4, 1fr)
            align-items center
            justify-items center
            column-gap 40px
            row-gap 10px
            border-radius 5px
            background-color var(--color-background)
            padding 5px

            label
            input[type="checkbox"]
                cursor pointer

            label
                display block
                font-size 14px
                margin-left 5px

    .buttons
        display flex
        flex-direction row
        justify-content end
        column-gap 15px
        margin-top 15px

        &:global( > *)
            width 150px

    .confirmation
        margin-top 15px

    @media screen and (max-width 900px)
        .mailer .criteria
            grid-template-columns 1fr 1fr
</style>