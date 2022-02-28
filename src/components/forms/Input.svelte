<script lang="ts">
    export let type: 'text' | 'date' | 'email'
    export let name: string
    export let label: string
    export let disabled: boolean = false
    export let value: string | Date
    export let min: string = ''
    export let max: string = ''
</script>

<div>
    <label for={name}>{label}</label>
    {#if type === 'text' }
        <input id={name} type="text" bind:value {disabled} required/>
    {:else if type === 'date'}
        <input id={name} type="date" bind:value {min} {max} {disabled} required/>
    {:else if type === 'email'}
        <input id={name} type="email" bind:value {disabled} required/>
    {/if}
</div>

<style lang="stylus">
    @require 'input.styl'
</style>