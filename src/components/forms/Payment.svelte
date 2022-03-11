<script lang="ts">
    import type { RegistrationDTO } from '../../helpers/RegistrationDTO'
    import FileInput from './FileInput.svelte'
    import { _ } from 'svelte-i18n'

    export let dto: RegistrationDTO
    export let disabled: boolean
</script>

<div>
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
    <div class="file">
        <FileInput
            name="proofOfPayment"
            label={'registration.form.proofOfPayment'}
            maxSize={2097152}
            accept="application/pdf,image/*"
            bind:value={dto.proofOfPayment}
            bind:files={dto.files.proofOfPaymentFile}
            on:input
            {disabled}
        />
    </div>
</div>

<style lang="stylus">
    div
        font-size 0.9em

    span
        float right

    .file
        margin-top 15px
</style>