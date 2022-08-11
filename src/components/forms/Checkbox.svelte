<script lang="ts">
    export let name: string
    export let label: string
    export let fullwidth: boolean = false
    export let checked: boolean = false
    export let disabled: boolean = false
    export let required: boolean = false
</script>

<div>
    <label {disabled} data-label={label} class:fullwidth on:click>
        <input
            id={name}
            type="checkbox"
            bind:checked
            on:input
            {disabled}
            {required}
        />
        {@html label}
    </label>
</div>

<style lang="stylus">
    input
        position relative
        top -1px
        margin-left -28px
        margin-right 10px
        vertical-align text-bottom
        accent-color var(--color-primary)
    
    label
        font-size 14px
        line-height 24px
        padding-left 28px
        display block

    label[disabled="false"]
    input:enabled
        cursor pointer

    .fullwidth
        width 100%

    @media screen and (max-width 525px)
        input
            top 0

        label
            font-size 12px
</style>