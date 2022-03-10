<script lang="ts">
    export let name: string
    export let label: string
    export let fullwidth: boolean = false
    export let checked: boolean = false
    export let disabled: boolean = false
    export let required: boolean = false
</script>

<div>
    <label {disabled} data-label={label} class:fullwidth>
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
        -webkit-appearance none
        appearance none
        min-width 14px
        min-height 14px
        margin-left -28px
        margin-right 10px
        border 2px solid #9595a2
        vertical-align text-bottom
        position relative
        border-radius 3px

        &:hover:enabled
            border-color #676774

        &:active:enabled
            border-color #484851

        &:checked
            background-color var(--color-primary)
            border-color transparent !important

            &:hover:enabled
                background-color var(--color-primary-hover)

            &[disabled]
                background-color gray !important

        &:after
            content ''
            display none
            width 3px
            height 7px
            border solid white
            border-width 0 2px 2px 0
            border-radius 1px
            -webkit-backface-visibility hidden  /* Prevent aliasing on chrome */
            transform skew(15deg, -15deg) rotate(50deg) translateX(38%) translateY(-18%)

        &:checked:after
            display block
    
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
        label
            font-size 12px
</style>