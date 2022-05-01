<script lang="ts">
    import type { NewsArticle } from '../helpers/types';
    import { _, locale } from 'svelte-i18n'

    export let latest = false

    const imports = import.meta.globEager('../routes/news/articles/*.json') as { [path: string]: NewsArticle }
    let articles: { id: string, article: NewsArticle}[] = Object.entries(imports).map(([path, article]) => ({ id: path.match(/\d+/)[0], article }))
    articles.sort((a, b) => Number(b.id) - Number(a.id))
    articles = latest ? articles.slice(0, 3) : articles
</script>

{#each articles as { article }}
    <a href={`/news/${article.slug}`} class="news-link" class:fixed={!latest}>
        <div class="news-item dropshadow" data-readmore={$_('news.readmore')}>
            <img
                src={`/images/news/${article.images.small}`}
                alt={article.images.small}
                width="248"
                height="350"
                class="news-image-small"
                loading="lazy"
            >
            <div class="news-content">
                <div class="date"><i>{@html article.date[$locale]}</i></div>
                <span class="title"><b>{@html article.title[$locale]}</b></span>
                <div class="text">
                    {@html article.content.short[$locale]}
                </div>
            </div>
        </div>
    </a>
{/each}
{#if latest}
    <div class="center"><a href="/news" class="link">{$_('news.older')}</a></div>
{/if}

<style lang="stylus">
    .news-link
        text-decoration none
        color inherit
        height 27%
        margin-bottom 1.3%

        .news-item
            display flex
            position relative
            height 100%
            border 1px solid #CCC
            border-radius 2px

            img
                height 100%
                width auto
                transition all 0.1s ease-in-out
                border-top-left-radius 1px
                border-bottom-left-radius 1px

            .news-content
                position relative
                font-size 0.9em
                display grid
                grid-template-rows 1fr 1fr 5fr
                padding 5px 10px 10px
                
                & > *
                    overflow hidden
                    text-overflow ellipsis

                .date
                    font-size 0.85em
                    color var(--color-light-gray)

                .title
                    white-space nowrap
                    overflow hidden

                .text
                    line-height: 1.55

            &:before
                content ''
                position absolute
                top -1px
                bottom -1px
                left -1px
                right -1px
                opacity 0
                background-color #F5F5F5D8
                border-radius 2px
                transition all 0.2s ease-in-out
                z-index 5
            
            &:after
                content attr(data-readmore)
                position absolute
                top 50%
                left 0
                right 0
                opacity 0
                text-align center
                color var(--color-link)
                transition all 0.25s ease-in-out
                z-index 6

            &:hover
                border-color transparent

                img
                    transform scaleY(101%) translateX(-1px)
                    border-top-left-radius 2px
                    border-bottom-left-radius 2px

                &:before
                &:after
                    opacity 1
            
                &:after
                    transform translateY(-50%)

    .dropshadow
        transition all 0.15s ease-in-out
        
        &:hover
            cursor pointer
            box-shadow 0 1px 3px 0 rgba(60, 64, 67, .3), 0 4px 8px 3px rgba(60, 64, 67, .15)
    
    .fixed
        height 25vh !important

    .center
        width 100%
        text-align center

    @media screen and (max-device-width: 600px)
        .news-link
            margin-bottom 5px

        .news-link
            height 28%
</style>

