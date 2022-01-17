<script lang="ts">
    import Tab from '../../components/Tab.svelte'
    import { MetaTags } from 'svelte-meta-tags'
    import { showLanding, showBack } from '../../helpers/stores'
    import { _, locale } from 'svelte-i18n'
    import { page } from '$app/stores'

    let imageFrame

    showLanding.set(false)
    showBack.set(false)

    function toggleImage(){
        if (article.images.regular)
            imageFrame.classList.toggle('active')
    }

    const imports = import.meta.globEager('./articles/*.json')
    let article = Object.values(imports).find(article => article.slug === $page.params.slug)
</script>

<MetaTags
    title={$_('news.slug.meta.title')}
    description={article && article.meta ? article.meta[$locale] : ''}
/>

{#if article.images.regular}
    <div class="image-frame" bind:this={imageFrame}  on:click={toggleImage}>
        <img src={`/images/news/${article.images.regular}`} alt="News subject">
        <span class="image-frame-close"></span>
    </div>
{/if} 

<Tab oversize>
    {#if article}
        <h1 class="cover-heading"><b>{@html article.title[$locale]}</b></h1>
        <span class="date"><i>{@html article.date[$locale]}</i></span>
        <div class="content">
            <div on:click={toggleImage}>
                <img class="news-image" src={`/images/news/${article.images.small}`} alt={article.images.small}>
            </div>
            <div style="line-height: 1.65; overflow: hidden;">
                {@html article.content.full[$locale]}
            </div>
        </div>
    {/if}
</Tab>

<style lang="stylus">
    .date
        color rgba(100, 100, 100, 0.5)
        line-height 2.5

    .content
        flex-grow 1

    .news-image
        float left
        max-height 50vh
        margin 10px 20px 10px 0

    .news-image:hover
        cursor pointer

    .image-frame
        width 100%
        height 100%
        top -100%
        position fixed
        background-color rgba(0, 0, 0, .7)
        opacity 0
        transition opacity .3s linear
        z-index 10

        img
            position fixed
            top 0
            left 0
            bottom 0
            right 0
            margin auto
            border 3px solid #fff
            border-radius 3px
            box-shadow 0 0 20px rgba(0, 0, 0, .7)
            max-height 0%
            max-width 0
            text-align center
            line-height 6500%
            -ms-user-select none
            -webkit-user-select none
            user-select none

            &:hover
                cursor pointer

        :global(&.active)
            opacity 1 !important
            top 0 !important
            bottom 0 !important

            img
                max-height 100%
                max-width 100%

            .image-frame-close
                top 0

    .image-frame-close
        text-decoration none
        cursor pointer
        display block
        width 50px
        height 50px
        box-sizing border-box
        background #fff
        color #000
        position absolute
        top -80px
        right 0
        transition .2s ease-in-out

        &:hover
            background rgba(255, 255, 255, .8)

        &:after
        &:before
            content ""
            display block
            height 30px
            width 1px
            background #000
            position absolute
            left 26px
            top 10px

        &:before
            transform rotate(45deg)

        &:after
            transform rotate(-45deg)

    @media screen and (max-device-width: 600px)
        .news-image
            height 450px
            float none
            margin 25px 0

        .date
            line-height 2
            font-size 1.3vh
</style>