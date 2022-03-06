<script lang="ts">
    export let type: 'info' | 'success' | 'warning' | 'error' = 'info'    
</script>

<div class={type}>
    <slot></slot>
</div>

<style lang="stylus">
    div
        font-size 0.8em
        line-height 1.75em
        border solid 1px var(--color-border)
        border-radius var(--border-radius)
        background-color #fff
        padding 5px 15px

    .info
        border-color var(--color-primary)
    
    .success
        border-color #289501
        padding-right 30px

        &:after
            content '✔'
            position absolute
            right 15px
            color #289501

    .warning
        border-color #ffbf00

    .error
        border-color #ff6d26
</style>