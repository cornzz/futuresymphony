<script lang="ts">
    import { locale } from 'svelte-i18n'

    export let latest = false

    const imports = import.meta.globEager('../routes/news/articles/*.json')
    let articles = Object.values(imports)
    if (latest) {
        articles = articles.slice(-3)
    }  
</script>

{#each articles as article}
    <a href={`/news/${article.slug}`} class="news-link">
        <div class="news-item dropshadow">
            <img class="news-image-small" src={`/images/${article.images.small}`} alt={article.images.small}>
            <div class="news-text">
                <span style="color: rgba(100, 100, 100, 0.5);"><i>{@html article.date[$locale]}</i></span><br>
                <div style="line-height: 1.55;">
                    <b>{@html article.title[$locale]}</b><br>
                    {@html article.content.short[$locale]}
                    <span class="link">Read more</span>
                </div>
            </div>
        </div>
    </a>
{/each}
{#if latest}
    <div class="center"><a href="/news" class="link">Older news</a></div>
{/if}

<style lang="stylus">
    .news-link
        text-decoration none
        color inherit

    .dropshadow
        transition all 0.1s ease
        
        &:hover
            cursor pointer
            box-shadow 0px 0px 4px 1px var(--color-boxshadow)

    .news-item
        height 26%
        margin-bottom 1.3%
        border 1px solid #CCC
        border-radius 2px

        img
            float left 
            height 100%

        .news-text
            height 100%
            padding 5px 10px 10px
            overflow-y hidden

    .center
        width 100%
        text-align center

    @media screen and (max-device-width: 600px)
        /* TODO !! */
        .news-image-small
            height 17%
</style>

