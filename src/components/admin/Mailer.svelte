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
    type MailTemplate = {
        id?: number
        subject: string,
        message: string,
        status: Criterion,
        complete: Criterion,
        payment: Criterion,
        second: Criterion
    }

    let subject: string
    let message: string
    let statusCriterion: Criterion = { active: true, value: true }
    let completeCriterion: Criterion = { active: false, value: true }
    let paymentCriterion: Criterion = { active: false, value: true }
    let secondCriterion: Criterion = { active: false, value: null }
    let showPreflight: boolean = false
    let preflightConfirmation: boolean
    let recipients: string[] = []
    let templates: MailTemplate[] = []
    let currentTemplate: number

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

    async function saveTemplate(): Promise<void> {
        $loading = true
        let body = {
            save: true,
            subject,
            message,
            status: statusCriterion,
            complete: completeCriterion,
            payment: paymentCriterion,
            second: secondCriterion,
        }
        let id = currentTemplate ? { id: currentTemplate } : {}
        const response = await fetch(new URL('mail.php', $baseURL), {
            method: 'POST',
            headers: getAuth(password),
            body: JSON.stringify({
                ...body,
                ...id
            })
        })
        const responseText = await response.text()
        if (response.ok && responseText === 'Mail template saved.') {
            await getTemplates()
        } else {
            console.error('Failed saving mail template.')
        }
        $loading = false
    }

    async function deleteTemplate(template: MailTemplate): Promise<void> {
        $loading = true
        const response = await fetch(new URL('mail.php', $baseURL), {
            method: 'POST',
            headers: getAuth(password),
            body: JSON.stringify({
                delete: true,
                id: template.id
            })
        })
        const responseText = await response.text()
        if (response.ok && responseText === 'Mail template deleted.') {
            await getTemplates()
        } else {
            console.error('Failed deleting mail template.')
        }
        $loading = false
    }

    async function getTemplates(): Promise<void> {
        const response = await fetch(new URL('mail.php', $baseURL), {
            method: 'GET',
            headers: getAuth(password)
        })
        templates = await response.json()
    }

    function loadTemplate(template: MailTemplate): void {
        subject = template.subject
        message = template.message
        statusCriterion = template.status
        paymentCriterion = template.payment
        completeCriterion = template.complete
        secondCriterion = template.second
        currentTemplate = template.id
    }

    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && (show = false)

    onMount(async () => {
        document.addEventListener('keydown', closeOnEscape)
        await getTemplates()

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
        {#if templates.length}
            Templates:
            <div class="templates">
                {#each templates as template}
                    <div class:loaded={currentTemplate === template.id}>
                        <span class="subject"><b>Subject:</b> {template.subject}</span>
                        <span class="message"><b>Message:</b> {template.message}</span>
                        <span class="link" on:click={() => loadTemplate(template)}>Load</span>
                        <span class="link" on:click={() => deleteTemplate(template)}>Delete</span>
                    </div>
                {/each}
            </div>
        {/if}
    </div>
    <div class="buttons">
        <Button
            on:click={() => show = false}
        >
            {$_('registration.form.cancel')}
        </Button>
        <Button
            disabled={!subject || !message || $loading}
            on:click={saveTemplate}
        >
            {$_('admin.mailer.saveTemplate')}
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
        width 100%

        .criteria
            display grid
            grid-template-columns repeat(4, 1fr)
            align-items center
            justify-items center
            column-gap 10px
            row-gap 10px
            border-radius 5px
            background-color var(--color-background)
            padding 4px

            label
            input[type="checkbox"]
                cursor pointer

            label
                display block
                font-size 14px

        .templates
            display flex
            flex-direction column
            font-size 14px
            background-color var(--color-background)
            border-radius 5px
            max-height 130px
            overflow auto

            div
                display grid
                grid-template-columns 40% 40% 10% 10%
                border-radius 5px
                padding 4px
                border solid 1px transparent

                &.loaded
                    border-color var(--color-primary)

                .subject,
                .message
                    text-overflow ellipsis
                    white-space nowrap
                    overflow hidden

                .link
                    text-align center

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