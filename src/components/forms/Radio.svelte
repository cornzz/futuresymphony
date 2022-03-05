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
        -webkit-appearance none
        appearance none
        min-width 14px
        min-height 14px
        margin-left -28px
        margin-right 10px
        border 2px solid #9595a2
        vertical-align sub
        padding 2px
        background-clip content-box
        border-radius 50%

        &:hover:enabled
            border-color #676774

        &:active:enabled
            border-color #484851

        &:checked
            background-color var(--color-primary)
            border-color var(--color-primary)

            &:hover:enabled
                background-color var(--color-primary-hover)
                border-color var(--color-primary-hover)

            &[disabled]
                background-color gray !important
                border-color gray !important

    label
        font-size 14px
        line-height 24px
        padding-left 28px

    label[disabled="false"]
    input:enabled
        cursor pointer
</style>