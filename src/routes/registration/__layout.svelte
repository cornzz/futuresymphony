<script lang="ts">
    import Tab from '../../components/Tab.svelte'
    import { Circle2 } from 'svelte-loading-spinners'
    import { showLanding, showBack, loading } from '../../helpers/stores'
    import { _ } from 'svelte-i18n'

    showLanding.set(false)
    showBack.set(false)
</script>

{#if $loading}
    <div class="spinner">
        <div>
            <Circle2 colorOuter="var(--color-primary)" colorCenter="var(--color-link)" />
        </div>
    </div>
{/if}
<Tab oversize justify={false}>
    <div class="wrapper">
        <slot></slot>
    </div>
</Tab>

<style lang="stylus">
    .spinner
        position fixed
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

    .wrapper
        min-height 90vh
        position relative

        :global(.cover-heading)
            margin 20px 0 30px

        :global(& > div)
            margin-top 15px
</style>