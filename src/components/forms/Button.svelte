<script lang="ts">
    export let type: 'outline' | 'primary' = 'outline'
    export let disabled: boolean = false
</script>

<button class={type} on:click {disabled}>
    <slot></slot>
</button>

<style lang="stylus">
    button
        height 45px
        width 100%
        font-size 16px
        border-radius var(--border-radius)
        transition all 0.1s ease

        &:enabled:hover
            cursor pointer

        &:disabled
            opacity 0.3

    .outline
        background-color #fff
        border solid 1px var(--color-border)

        &:hover:enabled
            background-color #fafafa
    
    .primary
        background-color var(--color-primary)
        color #fff
        border none
        
        &:hover:enabled
            background-color var(--color-primary-hover)
    
    @media screen and (max-width 525px)
        height 40px
</style>
