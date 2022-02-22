<script lang="ts">
    export let type: 'text' | 'select' | 'date' | 'email'
    export let name: string
    export let label: string
    export let disabled: boolean = false
</script>

<div>
    <label for={name}>{label}</label>
    {#if type === 'select' }
        <input id={name} type="select">
    {:else}
        <input id={name} {name} {type} {disabled} required/>
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