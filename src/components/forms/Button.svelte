<script lang="ts">
    export let type: 'outline' | 'primary' = 'outline'
</script>

<button class={type}>
    <slot></slot>
</button>

<style lang="stylus">
    button
        height 45px
        width 100%
        font-size 16px
        font-weight bold
        border-radius var(--border-radius)
        transition all 0.1s ease

        &:hover
            cursor pointer

    .outline
        background-color #fff
        border solid 1px var(--color-border)

        &:hover
            background-color #fafafa
    
    .primary
        background-color var(--color-primary)
        color #fff
        border none
        
        &:hover
            background-color var(--color-primary-hover)
</style>