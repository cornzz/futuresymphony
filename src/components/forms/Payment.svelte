<script lang="ts">
    import type { RegistrationDTO } from '../../helpers/RegistrationDTO'
    import Input from './Input.svelte'
    import FileInput from './FileInput.svelte'
    import { createEventDispatcher, tick } from 'svelte'
    import { _ } from 'svelte-i18n'

    export let dto: RegistrationDTO
    export let disabled: boolean

    const dispatch = createEventDispatcher()

    let clientHeight

    $: sanctioned = ['AF', 'BY', 'CU', 'IR', 'KP', 'SY'].includes(dto.country)
    $: ukraine = dto.country === 'UA'
    $: if (clientHeight) (async () => {
        await tick()
        dispatch('resize')
    })()
</script>

<div class="payment" bind:clientHeight>
    {#if ukraine || sanctioned}
        <div class="text">
            {ukraine ? $_('payment.ukraine') : $_('payment.sanctioned')}
        </div>
    {/if}
    <b>{$_('payment.amount')}:</b> <span style="float: right">50 €</span><br>
    <b>{$_('payment.recipient')}:</b> <span>{$_('contacts.vsi')} Muzikinis pirstas</span><br>
    <b>IBAN:</b> <span>LT39 7300 0101 5990 2690</span><br>
    <b>BIC/SWIFT:</b> <span>HABALT22</span><br>
    <b>{$_('payment.purpose')}:</b>
    <span>
        {@html dto.firstName ? dto.firstName : `<i>${$_('registration.form.firstName')}</i>`}
        {@html dto.lastName ? dto.lastName : `<i>${$_('registration.form.lastName')}</i>`}
        {$_('payment.regToFSC')}
    </span>
    <div class="address">
        <Input
            type="text"
            name="billingAddress"
            label={'registration.form.billingAddress.label'}
            placeholder={$_('registration.form.billingAddress.placeholder')}
            bind:value={dto.billingAddress}
            on:input
            {disabled}
        />
    </div>
    <div class="file">
        <FileInput
            name="proofOfPayment"
            label={'registration.form.proofOfPayment'}
            maxSize={2097152}
            accept="image/*,application/pdf"
            bind:value={dto.proofOfPayment}
            bind:files={dto.files.proofOfPaymentFile}
            on:input
            optional={sanctioned || ukraine}
            {disabled}
        />
    </div>
</div>

<style lang="stylus">
    .payment
        font-size 0.9em
    
        .text
            margin-bottom 15px

    span
        float right

    .address
    .file
        margin-top 15px
</style>