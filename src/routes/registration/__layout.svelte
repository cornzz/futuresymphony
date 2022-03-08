<script lang="ts">
    import Tab from '../../components/Tab.svelte'
    import { Circle2 } from 'svelte-loading-spinners'
    import { showLanding, showBack, loading } from '../../helpers/stores'
    import { _ } from 'svelte-i18n'

    showLanding.set(false)
    showBack.set(false)
</script>

<Tab oversize justify={false}>
    <h1 class="cover-heading"><b>{$_('registration.yourRegistration')}</b></h1>
    <div class="wrapper">
        {#if $loading}
            <div class="spinner">
                <div>
                    <Circle2 colorOuter="var(--color-primary)" colorCenter="var(--color-link)" />
                </div>
            </div>
        {/if}
        <slot></slot>
    </div>
</Tab>

<style lang="stylus">
    .wrapper
        min-height 90vh
        position relative

        :global(& > *)
            margin-top 15px

    .spinner
        position absolute
        z-index 1000
        display flex
        flex-direction column
        gap 10px
        align-items center
        justify-content center
        height 85px
        width 85px
        top 40%
        left 50%
        transform translate(-50%, -50%)
        background-color #fff
        border solid 1px var(--color-border)
        border-radius 50%
        box-shadow 0px 1px 5px 2px rgba(70,70,70,0.1)
</style>