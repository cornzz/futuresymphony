<script lang="ts">
    import { _ } from 'svelte-i18n'

    export let name: string
    export let label: string
    export let maxlength: number
    export let value: string | Date = ''
    export let optional: boolean = false
    export let disabled: boolean = false

    $: labelAppendix = [
        maxlength ? $_('registration.form.maxChars', { values: { number: maxlength } }) : '',
        optional ? $_('registration.form.optional') : ''
    ].filter(Boolean).join(', ')
</script>

<div>
    <label for={name} data-label={label}>
        {$_(label)} {labelAppendix ? `(${labelAppendix})` : ''}
    </label>
    <textarea
        id={name}
        {maxlength}
        rows="4"
        bind:value
        on:input
        {disabled}
        required={!optional}
    />
</div>

<style lang="stylus">
    @require 'input.styl'

    textarea
        resize none
        height auto
        padding 10px
</style>
