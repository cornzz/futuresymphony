<script lang="ts">
    import { _ } from 'svelte-i18n'

    export let type: 'text' | 'date' | 'email'
    export let name: string
    export let label: string = ''
    export let placeholder: string = ''
    export let min: string = ''
    export let max: string = ''
    export let value: string | Date = ''
    export let disabled: boolean = false
</script>

<div>
    <label for={name} data-label={label}>{$_(label)}</label>
    {#if type === 'text'}
        <input
            id={name}
            type="text"
            {placeholder}
            bind:value
            on:input
            on:keyup
            {disabled}
            required
        />
    {:else if type === 'date'}
        <input
            id={name}
            type="date"
            {placeholder}
            {min}
            {max}
            bind:value
            on:input
            {disabled}
            required
        />
    {:else if type === 'email'}
        <input
            id={name}
            type="email"
            {placeholder}
            bind:value
            on:input
            on:keyup
            {disabled}
            required
        />
    {/if}
</div>

<style lang="stylus">
    @require 'input.styl'

    div
        width 100%
</style>