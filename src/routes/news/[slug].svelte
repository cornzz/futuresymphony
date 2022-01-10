<script lang="ts">
    import Tab from '../../components/Tab.svelte';
    import { showLanding } from '../../helpers/stores'
    import { locale } from 'svelte-i18n'
    import { page } from '$app/stores'

    let article

    showLanding.set(false)

    function imagesource(src){
        location.replace("#show");
        document.getElementById("imgsrc").setAttribute("src", src);
        // document.getElementById("imgsrc").setAttribute("alt", "Image");
    }

    function hideimg(){
        location.replace("#/");
        setTimeout(() => document.getElementById("imgsrc").setAttribute("src", ""), 100);
        // document.getElementById("imgsrc").setAttribute("alt", "");
    }

    const imports = import.meta.globEager('./articles/*.json')
    article = imports[`./articles/${$page.params.slug}.json`]
</script>

<svelte:head>
    <title>News - Future Symphony Competition</title>
</svelte:head>

<div class="picture" id="show">
    <div on:click={hideimg}>
        <img id="imgsrc" alt="News subject">
    </div>
    <span class="picture-close" on:click={hideimg}></span>
</div>

<Tab oversize>
    {#if article}
        <h1 class="cover-heading"><b>{@html article.title[$locale]}</b></h1>
        <span style="color: rgba(100, 100, 100, 0.5);"><i>{@html article.date[$locale]}</i></span><br>
        <div on:click={() => imagesource(article.images.regular)}>
            <img class="news-img" src={article.images.small} alt={article.images.small.split('/').pop()}>
        </div>
        <div style="line-height: 1.65; overflow: hidden;">
            {@html article.content.full[$locale]}
        </div>
    {/if}
</Tab>

<style lang="stylus">
    @import "../../styles/news.styl"
</style>