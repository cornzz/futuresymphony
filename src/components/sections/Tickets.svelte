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
            margin 20px 0 25px
            justify-content center

    @media screen and (max-device-width: 600px)
        .content
            width 100%
            margin-bottom 5px
            padding 0 15px

            h1
                margin-top 15px

            .center
                margin 15px 0 20px
</style>