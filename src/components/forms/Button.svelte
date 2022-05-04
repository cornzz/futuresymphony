<script lang="ts">
    export let type: 'outline' | 'primary' | 'special' = 'outline'
    export let slim: boolean = false
    export let disabled: boolean = false
    export let style: string = ''
</script>

<button class={type} on:click class:slim {disabled} {style}>
    <slot></slot>
</button>

<style lang="stylus">
    button
        height 45px
        width 100%
        padding 0 10px
        font-size 16px
        font-family Arial, Helvetica, sans-serif
        border-radius var(--border-radius)
        transition all 0.1s ease

        &:enabled:hover
            cursor pointer

        &:disabled
            opacity 0.3

    .primary
        background-color var(--color-primary)
        color #fff
        border none
        
        &:hover:enabled
            background-color var(--color-primary-hover)

    .outline
        background-color #fff
        border solid 1px var(--color-border)

        &:hover:enabled
            background-color #fafafa

    .special
        box-sizing border-box
        transition background-color .1s,
                    box-shadow .1s,
                    color .1s,
                    transform .1s
        background-color var(--color-primary)
        border-radius var(--border-radius)
        border 2px solid var(--color-primary)
        color #fff
        cursor pointer
        display inline-block
        padding 5px 20px
        text-decoration none !important
        outline none

        &:hover
        &:global(.focus)
            transform translate(-2px,-2px)
            background-color #fff
            box-shadow 4px 4px 0 0 var(--color-primary)
            color var(--color-primary)

    .slim
        height 40px

    @media screen and (max-width 600px)
        button
            height 40px
</style>
