<script lang="ts">
    import { _ } from 'svelte-i18n'

    export let name: string
    export let label: string
    export let maxlength: number
    export let value: string | Date
    export let disabled: boolean = false
</script>

<div>
    <label for={name} data-label={label}>
        {$_(label)} {maxlength ? `(${$_('registration.form.maxChars', { values: { number: maxlength } })})` : ''}
    </label>
    <textarea
        id={name}
        {maxlength}
        rows="4"
        bind:value
        on:input
        {disabled}
        required
    />
</div>

<style lang="stylus">
    @require 'input.styl'

    textarea
        resize none
        height auto
        padding 10px
</style>
