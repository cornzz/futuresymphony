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
        color var(--color-light-gray)
        line-height 2.5

    .content
        flex-grow 1
        line-height 1.65
        margin-top 10px

    .news-image
        float right
        height 40vh
        margin 5px 0 10px 20px

    .news-image:hover
        cursor pointer

   @media screen and (max-device-width: 600px)
        .date
            line-height 2
            font-size 1.3vh

        .news-image
            height 30vh
</style>