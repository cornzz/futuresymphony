<script lang="ts">
    export let type: 'text' | 'date' | 'email' | 'select'
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
        <input id={name} type="date" {min} {max} bind:value {disabled} required/>
    {:else if type === 'email'}
        <input id={name} type="email" bind:value {disabled} required/>
    {:else if type === 'select'}
        <input id={name} type="select" {disabled} />
    {/if}
</div>

<style lang="stylus">
    div
        display flex
        flex-direction column

    label
        font-size 14px
        line-height 24px

    input
        height 40px
        width 100%
        background-color #fff
        border solid 1px var(--color-border)
        border-radius var(--border-radius)
        font-size 16px
        padding 0 10px

        &[disabled]
            background-color var(--color-background)
</style>