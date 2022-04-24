<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    import { locale } from 'svelte-i18n'

    export let big: boolean = false

    const dispatch = createEventDispatcher()
    const GB = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30' width='100%25'%3E%3CclipPath id='t'%3E%3Cpath d='M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z'/%3E%3C/clipPath%3E%3Cpath d='M0,0 v30 h60 v-30 z' fill='%2300247d'/%3E%3Cpath d='M0,0 L60,30 M60,0 L0,30' stroke='%23fff' stroke-width='6'/%3E%3Cpath d='M0,0 L60,30 M60,0 L0,30' clip-path='url(%23t)' stroke='%23cf142b' stroke-width='4'/%3E%3Cpath d='M30,0 v30 M0,15 h60' stroke='%23fff' stroke-width='10'/%3E%3Cpath d='M30,0 v30 M0,15 h60' stroke='%23cf142b' stroke-width='6'/%3E%3C/svg%3E%0A"
    const GB_GS = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30' width='100%25'%3E%3CclipPath id='t'%3E%3Cpath d='M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z'/%3E%3C/clipPath%3E%3Cpath d='M0,0 v30 h60 v-30 z' fill='rgba(54, 54, 54, 1)'/%3E%3Cpath d='M0,0 L60,30 M60,0 L0,30' stroke='rgba(255, 255, 255, 1)' stroke-width='6'/%3E%3Cpath d='M0,0 L60,30 M60,0 L0,30' clip-path='url(%23t)' stroke='rgba(90, 90, 90, 1)' stroke-width='4'/%3E%3Cpath d='M30,0 v30 M0,15 h60' stroke='rgba(255, 255, 255, 1)' stroke-width='10'/%3E%3Cpath d='M30,0 v30 M0,15 h60' stroke='rgba(90, 90, 90, 1)' stroke-width='6'/%3E%3C/svg%3E%0A"
    const LT = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='3' viewBox='0 0 6 3'%3E%3Crect fill='%23C1272D' width='6' height='3'/%3E%3Crect fill='%23006A44' width='6' height='2'/%3E%3Crect fill='%23FDB913' width='6' height='1'/%3E%3C/svg%3E"
    const LT_GS = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='3' viewBox='0 0 6 3'%3E%3Crect fill='rgba(92, 92, 92, 1)' width='6' height='3'/%3E%3Crect fill='rgba(58, 58, 58, 1)' width='6' height='2'/%3E%3Crect fill='rgba(152, 152, 152, 1)' width='6' height='1'/%3E%3C/svg%3E"

    function changeLanguage() {
        locale.set(this.dataset.lang)
        dispatch('localeChange')
    }

    function showFlag() {
        this.src = this.dataset.lang === 'en' ? GB : LT
    }
    
    function hideFlag() {
        let lang = this.dataset.lang
        if (lang === $locale)
            return
        this.src = lang === 'en' ? GB_GS : LT_GS
    }
</script>

<div class="flags" class:big>
    <img
        on:click={changeLanguage}
        on:mouseenter={showFlag}
        on:mouseleave={hideFlag}
        class="flag"
        data-lang="en"
        src={$locale === 'en' ? GB : GB_GS}
        alt="English"
    >
    <img
        on:click={changeLanguage}
        on:mouseenter={showFlag}
        on:mouseleave={hideFlag}
        class="flag"
        data-lang="lt"
        src={$locale === 'lt' ? LT : LT_GS}
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
    
    .big
        height 22px
</style>

