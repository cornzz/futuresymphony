<script lang="ts">
    export let quotee: string
    export let role: string
</script>

<div class="quote">
    <span><slot></slot></span>
    <span>– <b>{quotee}</b>, {@html role}</span>
</div>

<style lang="stylus">
    .quote
        position relative
        background-color #e9e9e9
        padding 10px 20px
        border-radius 2px
        font-size 0.95em

        &:after
            content ''
            position absolute
            display block
            top -12px
            left -12px
            width 32px
            height 32px
            background url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='%23F5F5F5'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z'/%3E%3C/svg%3E") no-repeat center
            background-color var(--color-primary)
            border-radius 32px

        span:first-child
            display block
            color #404041
            padding 0 0 5px 17px
            font-style italic

        span:last-child
            display inline-block
            line-height 1.45


    @media screen and (max-device-width: 750px)
        .quote
            padding 5px 15px

            &:after
                width 24px
                height 24px
                top -9px
                left -9px
                background-size 18px 18px

            span:first-child
                padding 0 0 3px 10px

            span:last-child
                display inline-block
                line-height 1.3
</style>

