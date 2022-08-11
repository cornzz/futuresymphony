<script lang="ts">
    import Button from "../forms/Button.svelte"
    import Input from "../forms/Input.svelte"
    import Textarea from "../forms/Textarea.svelte"
    import Checkbox from "../forms/Checkbox.svelte"
    import { getAuth } from '../../helpers'
    import type { Criterion } from '../../helpers/types'
    import { loading, baseURL } from '../../helpers/stores'
    import { onMount } from "svelte"
    import { _ } from 'svelte-i18n'

    export let password: string
    export let singleRecipient: string
    export let show: boolean
    export let dialog: string

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
    let paymentCriterion: Criterion = { active: false, value: true }
    let completeCriterion: Criterion = { active: false, value: true }
    let secondCriterion: Criterion = { active: false, value: null }
    let showPreflight: boolean = false
    let preflightConfirmation: boolean
    let recipients: string[] = []
    let templates: MailTemplate[] = []
    let currentTemplate: number
    let initialLoad: boolean = false

    async function sendMail(preflight: boolean = true): Promise<void> {
        $loading = true
        const response = await fetch(new URL('mail.php', $baseURL), {
            method: 'POST',
            headers: getAuth(password),
            body: JSON.stringify({
                preflight,
                subject,
                message,
                recipient: singleRecipient,
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
        // TODO: return and parse template id, set currentTemplate
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
        $loading = true
        const response = await fetch(new URL('mail.php', $baseURL), {
            method: 'GET',
            headers: getAuth(password)
        })
        templates = await response.json()
        $loading = false
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

    onMount(async () => {
        await getTemplates()
        initialLoad = true
    })
</script>

{#if initialLoad && !showPreflight}
    <dialog open>
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
            <div class="criteria" class:singleRecipient>   
                {#if singleRecipient}
                    <span>
                        <b>{$_('admin.mailer.recipient', { values: { number: 1 }})}:</b> {singleRecipient}
                    </span>
                {:else} 
                    <div>
                        <label>
                            {$_('admin.mailer.status')}
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
                {/if}
            </div>
            {#if templates.length}
                {$_('admin.mailer.templates')}:
                <div class="templates">
                    {#each templates as template}
                        <div class:loaded={currentTemplate === template.id}>
                            <span class="subject"><b>{$_('admin.mailer.subject')}:</b> {template.subject}</span>
                            <span class="message"><b>{$_('admin.mailer.message')}:</b> {template.message}</span>
                            <span class="link" on:click={() => loadTemplate(template)}>
                                {$_('admin.mailer.load')}
                            </span>
                            <span class="link" on:click={() => deleteTemplate(template)}>
                                {$_('admin.mailer.delete')}
                            </span>
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
    </dialog>
{:else if initialLoad}
    <dialog open>
        {$_('admin.mailer.sendingNMessages', { values: { number: recipients.length }})}
        <hr>
        {#if recipients.length}
            {$_('admin.mailer.recipient', { values: { number: recipients.length }})}:<br>
            {#each recipients as recipient}
                {recipient}<br>
            {/each}
        {/if}
        <hr>
        <div class="confirmation">
            <Checkbox
                name="preflightConfirmation"
                label={$_('admin.mailer.confirmRecipients', { values: { number: recipients.length }})}
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
    </dialog>
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
            font-size 14px
            border-radius var(--border-radius)
            background-color var(--color-background)
            padding 4px

            &.singleRecipient
                grid-template-columns 1fr

            label
            input[type="checkbox"]
            select:enabled
                cursor pointer

            select:disabled
                cursor initial

            label
                display block

        .templates
            display flex
            flex-direction column
            font-size 14px
            background-color var(--color-background)
            border-radius var(--border-radius)
            max-height 130px
            overflow auto

            div
                display grid
                grid-template-columns 4fr 4fr 1fr 1fr
                border-radius var(--border-radius)
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

    @media (max-width 900px)
        .mailer .criteria
            grid-template-columns 1fr 1fr

    @media (max-width 525px)
        .mailer .templates div
            grid-template-columns 7fr 1.5fr 1.5fr
        
            .message
                display none
</style>