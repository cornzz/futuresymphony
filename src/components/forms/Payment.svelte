<script lang="ts">
    import { _ } from 'svelte-i18n'

    export let firstName: string
    export let lastName: string
</script>

<div>
    <b>{$_('payment.recipient')}:</b> VsI Muzikinis pirstas<br>
    <b>IBAN:</b> LT39 7300 0101 5990 2690<br>
    <b>BIC/SWIFT:</b> HABALT22<br>
    <b>{$_('payment.purpose')}:</b> {firstName} {lastName} {$_('payment.regToFSC')}
</div>

<style lang="stylus">
    div
        font-size 0.9em
</style>