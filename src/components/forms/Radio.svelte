<script lang="ts">
    export let name: string
    export let label: string
    export let disabled: boolean = false
    export let required: boolean = false
</script>

<label {disabled}>
    <input
        id={name}
        type="radio"
        on:input
        {disabled}
        {required}
    />
    {@html label}
</label>

<style lang="stylus">
    input
        position relative
        top -1px
        vertical-align sub
        accent-color var(--color-primary)

    label
        font-size 14px
        line-height 24px
        padding-left 28px

    label[disabled="false"]
    input:enabled
        cursor pointer
</style>