<script lang="ts">
    export let type: 'info' | 'success' | 'warning' | 'error' = 'info'    
</script>

<div class={type}>
    <slot></slot>
</div>

<style lang="stylus">
    div
        font-size 0.75em
        border solid 1px var(--color-border)
        border-radius var(--border-radius)
        background-color #fff
        padding 10px 20px

    .info
        border-color var(--color-primary)
    
    .success
        border-color #289501

    .warning
        border-color #ffbf00

    .error
        border-color #ff6d26
</style>