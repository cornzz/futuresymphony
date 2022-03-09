<script lang="ts">
    export let name: string
    export let label: string
    export let maxlength: number
    export let value: string | Date
    export let disabled: boolean = false
</script>

<div>
    <label for={name}>{label}</label>
    <textarea
        id={name}
        {maxlength}
        rows="6"
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
