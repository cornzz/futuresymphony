<script lang="ts">
    import Button from '../forms/Button.svelte'
    import { _ } from 'svelte-i18n'
</script>

<div class="content">
    <h1 class="cover-heading tickets">{$_('tickets.title')}</h1>
    {$_('tickets.caption')}
    <div class="center">
        <a class="button" href="https://google.com" target="_blank">
            <Button type="primary" style="padding: 0 20px">
                {$_('tickets.button')}
            </Button>
        </a>
    </div>
</div>

<style lang="stylus">
    .content
        line-height 1.65
        text-align center
        background #e9e9e9
        border-radius var(--border-radius)
        margin 20px 0 15px
        padding 0 50px
        border solid 1px var(--color-primary)

        .center
            display flex
            margin 30px 0 40px
            justify-content center

    @media screen and (max-device-width: 600px)
        .content
            margin-bottom 0
            padding 0 25px

            .center
                margin 25px 0 30px
</style>