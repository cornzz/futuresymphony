<script lang="ts">
    export let name: string
    export let label: string
    export let disabled: boolean = false
</script>

<label>
    <input id={name} type="radio" {disabled} required/>
    {label}
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
        vertical-align text-bottom
        padding 2px
        background-clip content-box
        border-radius 50%

        &:hover
            border-color #676774

        &:active
            border-color #484851

        &:checked
            background-color var(--color-primary)
            border-color var(--color-primary)

            &:hover
                background-color var(--color-primary-hover)
                border-color var(--color-primary-hover)

    label
        font-size 14px
        line-height 24px
        padding-left 28px

    label
    input
        cursor pointer
</style>