<script lang="ts">
    import type { SponsorData } from '../helpers/types'
    import { locale } from 'svelte-i18n'

    export let link: SponsorData = undefined
    export let text: string = ''
</script>

{#if link && text === ''}
    <a
        class="sponsor"
        class:undersize={link.undersize}
        href={link.href[$locale]}
        target="blank"
    >
        <img
            class:oversize={link.oversize}
            src={`/images/sponsors/${link.src[$locale] ?? link.src.lt}`}
            alt={link.alt[$locale]}
            title={link.alt[$locale]}
            loading="lazy"
        >
    </a>
{:else}
    <span class="sponsor text">{text}</span>
{/if}


<style lang="stylus">
    .sponsor
        height 9.5vmin
        display flex
        flex-direction column
        justify-content center


        &.text
            font-family 'Audiowide', "Courier New"
            font-size 3vmin
            word-spacing 100vw
            text-align center
            -webkit-user-select none
            user-select none
            transition all 0.1s ease-in-out
        
            &:hover
                text-shadow 0 1px 1px rgba(0,0,0,.4)
                cursor default
                transform scale(103%)

        .oversize
            height 45%

        &.undersize
            height 13vmin

        img
            max-height 100%
            opacity 0.75
            transition transform 0.15s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s

            &:hover
                opacity 1
                transform scale(104%)

    @media (max-width: 500px)
        .sponsor
            height 11.5vmin

            &.text
                font-size 3.5vmin

            &.undersize
                height 16vmin
</style>