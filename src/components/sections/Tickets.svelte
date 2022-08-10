<script lang="ts">
    import Button from '../forms/Button.svelte'
    import { _ } from 'svelte-i18n'
</script>

<div class="content">
    <h1 class="cover-heading tickets">{$_('tickets.title')}</h1>
    {@html $_('tickets.caption')}
    <div class="center">
        <a class="button" href={$_('tickets.href')} target="_blank">
            <Button type="primary" style="padding: 0 20px">
                {$_('tickets.button')}
            </Button>
        </a>
        <span class="distributor">{$_('tickets.distributor')}</span>
    </div>
</div>

<style lang="stylus">
    .content
        text-align center
        background #e9e9e9
        border-radius var(--border-radius)
        width 90%
        margin 20px auto 15px
        padding 0 50px
        border solid 1px var(--color-primary)

        .center
            display flex
            flex-direction column
            margin 25px 0
            align-items center
            justify-content center

            .distributor
                margin-top 3px
                color var(--color-light-gray)
                font-size 0.65em

    @media screen and (max-device-width: 600px)
        .content
            width 100%
            margin-bottom 5px
            padding 0 15px

            h1
                margin-top 15px

            .center
                margin 20px 0

                .distributor
                    font-size 0.7em
</style>