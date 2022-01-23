<script lang="ts">
    import { locale } from 'svelte-i18n'

    export let bigger = false

    function changeLanguage(event) {
        locale.set(event.target.dataset.lang)
    }

    function showFlag(event) {
        let node = event.target
        node.src = node.dataset.lang === 'en' ? '/images/gb_o.svg' : '/images/lt_o.svg'
    }
    
    function hideFlag(event) {
        let node = event.target
        let lang = node.dataset.lang
        if (lang === $locale)
            return
        node.src = lang === 'en' ? '/images/gb.svg' : '/images/lt.svg'
    }
</script>

<div class="flags" class:bigger>
    <img
        on:click={changeLanguage}
        on:mouseenter={showFlag}
        on:mouseleave={hideFlag}
        class="flag"
        data-lang="en"
        src={`/images/${$locale === 'en' ? 'gb_o' : 'gb'}.svg`}
        alt="English"
    >
    <img
        on:click={changeLanguage}
        on:mouseenter={showFlag}
        on:mouseleave={hideFlag}
        class="flag"
        data-lang="lt"
        src={`/images/${$locale === 'lt' ? 'lt_o' : 'lt'}.svg`}
        alt="Lietuvių"    
    >
</div>

<style lang="stylus">
    .flags
        display flex
        height 16px
        margin 10px 0

        .flag
            margin auto
            height 100%
            transition all 0.1s ease-in-out

            &:hover
            &:focus
                box-shadow 0 0 2px 0 #BBBBBB
                cursor pointer

        .flag:first-of-type
            margin-right 20px
    
    .bigger
        height 22px
</style>

