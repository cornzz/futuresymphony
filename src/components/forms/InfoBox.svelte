<script lang="ts">
    export let type: 'info' | 'success' | 'warning' | 'error' = 'info'    
</script>

<div class={type}>
    <slot></slot>
</div>

<style lang="stylus">
    div
        font-size 0.8em
        border solid 1px var(--color-border)
        border-radius var(--border-radius)
        background-color #fff
        padding 5px 15px

    .info
        border-color var(--color-primary)
    
    .success
        position relative
        border-color #289501
        padding-right 30px

        &:after
            content '✔'
            position absolute
            display flex
            align-items center
            top 0
            right 15px
            height 100%
            color #289501

    .warning
        border-color #ffbf00

    .error
        border-color #ff6d26

    @media screen and (max-width 525px)
        div
            font-size 0.9em
            padding 5px 10px
</style>