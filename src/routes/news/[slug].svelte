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
            <img
                class="news-image"
                src={`/images/news/${article.images.small}`}
                alt={article.images.small}
                on:click={toggleImage}
            >
            {@html article.content.full[$locale]}
        </div>
    {/if}
</Tab>

<style lang="stylus">
    @require '../../styles/image-frame.styl'

    .date
        color rgba(100, 100, 100, 0.5)
        line-height 2.5

    .content
        flex-grow 1
        line-height 1.65

    .news-image
        float right
        height 40vh
        margin 10px 0 10px 20px

    .news-image:hover
        cursor pointer

   @media screen and (max-device-width: 600px)
        .news-image
            height 450px
            float none
            margin 25px 0

        .date
            line-height 2
            font-size 1.3vh
</style>