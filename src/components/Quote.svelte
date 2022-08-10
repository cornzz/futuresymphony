<script lang="ts">
    export let quotee: string
    export let role: string
    export let mobileRight: boolean = false
</script>

<div class="quote" class:mobileRight>
    <span><slot></slot></span>
    <span>– <b>{quotee}</b>, {@html role}</span>
</div>

<style lang="stylus">
    .quote
        position relative
        background-color #E9E9E9
        padding 10px 20px
        border-radius 3px
        font-size 0.95em
        border-left solid 3px var(--color-primary)

        &:after
            content ''
            position absolute
            display block
            top 0
            left 0
            width 32px
            height 32px
            background url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='%23F5F5F5'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z'/%3E%3C/svg%3E") no-repeat center
            background-color var(--color-primary)
            border-radius 32px
            outline solid 4px var(--color-background)
            transform translate(-50%, -50%)

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
            border-radius 2px
            border-width 2px

            &:after
                width 24px
                height 24px
                background-size 18px 18px
                outline-width 3px

            &.mobileRight
                border-left none
                border-right solid 2px var(--color-primary)

                &:after
                    left unset
                    right 0
                    transform translate(50%, -50%)

            span:first-child
                padding 0 0 3px 10px

            span:last-child
                display inline-block
                line-height 1.3
</style>

