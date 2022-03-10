<script lang="ts">
    import { _ } from 'svelte-i18n'

    export let type: 'text' | 'date' | 'email'
    export let name: string
    export let label: string
    export let min: string = ''
    export let max: string = ''
    export let value: string | Date
    export let disabled: boolean = false
</script>

<div>
    <label for={name} data-label={label}>{$_(label)}</label>
    {#if type === 'text' }
        <input
            id={name}
            type="text"
            bind:value
            on:input
            {disabled}
            required
        />
    {:else if type === 'date'}
        <input
            id={name}
            type="date"
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
            bind:value
            on:input
            {disabled}
            required
        />
    {/if}
</div>

<style lang="stylus">
    @require 'input.styl'
</style>