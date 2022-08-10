<script lang="ts">
    export let type: 'info' | 'success' | 'warning' | 'error' = 'info'    
</script>

<div class={type}>
    <slot></slot>
</div>

<style lang="stylus">
    div
        font-size 16px
        border solid 1px var(--color-border)
        border-radius var(--border-radius)
        background-color #FFF
        padding 5px 15px

        :global(tt)
            font-size smaller

    .info
        border-color var(--color-primary)
    
    .success
        position relative
        border-color var(--color-success)
        padding-right 45px

        &:after
            content '✔'
            position absolute
            display flex
            align-items center
            top 0
            right 15px
            height 100%
            color var(--color-success)

    .warning
        border-color var(--color-warning)

    .error
        border-color var(--color-error)

    @media screen and (max-width 525px)
        div
            font-size 14px
            padding 5px 10px
</style>