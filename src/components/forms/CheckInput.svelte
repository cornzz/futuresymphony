<script lang="ts">
    export let type: 'radio' | 'checkbox'
    export let name: string
    export let label: string
    export let disabled: boolean = false
</script>

<div>
    <label for={name}>
        <input id={name} {name} {type} {disabled} required/>
        {label}
    </label>
</div>

<style lang="stylus">
    input:checked
        background-color var(--color-primary)
        border-color var(--color-primary) !important

    input[type="radio"]
    input[type="checkbox"]
        -webkit-appearance none
        appearance none
        min-width 14px
        min-height 14px
        margin-left -28px
        margin-right 10px
        border 2px solid #9595a2
        vertical-align sub

        &:hover
            border-color #676774

        &:active
            border-color #484851

        &:checked:hover
            background-color var(--color-primary-hover)
            border-color var(--color-primary-hover) !important

    input[type="radio"]
        padding 2px
        background-clip content-box
        border-radius 50%

    input[type="checkbox"]
        position relative
        border-radius 3px
    
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

    label
    input[type='radio']
    input[type='checkbox']
        cursor pointer
</style>