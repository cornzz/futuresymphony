<script lang="ts">
    import type { NewsArticle } from '../../helpers/types'
    import { _, locale } from 'svelte-i18n'

    export let latest = false

    const imports = import.meta.globEager('../../routes/news/articles/*.json') as { [path: string]: NewsArticle }

    let articlesShown: number = 10
    let articles: { id: string, article: NewsArticle }[] = Object.entries(imports).map(([path, article]) => ({ id: path.match(/\d+/)[0], article }))

    articles.sort((a, b) => Number(b.id) - Number(a.id))
    articles = latest ? articles.slice(0, 3) : articles
</script>

{#each articles.slice(0, articlesShown) as { article }}
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
                    {@html article.content.short ? article.content.short[$locale] : article.content.full[$locale]}
                </div>
            </div>
        </div>
    </a>
{/each}
{#if latest}
    <div class="center"><a href="/news" class="link">{$_('news.older')}</a></div>
{:else if articlesShown < articles.length}
    <span class="center link older" on:click={() => articlesShown += 5}>{$_('news.showOlder')}</span>
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
            border-radius var(--border-radius)
            background #ececec

            img
                height 100%
                width auto
                transition all 0.1s ease-in-out
                border-top-left-radius 4px
                border-bottom-left-radius 4px

            .news-content
                position relative
                font-size 0.9em
                display grid
                width 100%
                grid-template-rows 1fr 1fr 5fr
                padding 5px 10px 0
                
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

                &:after
                    content ''
                    position absolute
                    left 0
                    right 0
                    bottom 0
                    height 30%
                    background linear-gradient(
                        to bottom,
                        rgba(236, 236, 236, 0) 0%,
                        rgba(236, 236, 236, 0.013) 4.5%,
                        rgba(236, 236, 236, 0.049) 8.7%,
                        rgba(236, 236, 236, 0.104) 12.9%,
                        rgba(236, 236, 236, 0.175) 17.1%,
                        rgba(236, 236, 236, 0.259) 21.5%,
                        rgba(236, 236, 236, 0.352) 26.1%,
                        rgba(236, 236, 236, 0.45) 31.2%,
                        rgba(236, 236, 236, 0.55) 36.7%,
                        rgba(236, 236, 236, 0.648) 42.9%,
                        rgba(236, 236, 236, 0.741) 49.9%,
                        rgba(236, 236, 236, 0.825) 57.7%,
                        rgba(236, 236, 236, 0.896) 66.5%,
                        rgba(236, 236, 236, 0.951) 76.4%,
                        rgba(236, 236, 236, 0.987) 87.5%,
                        rgb(236, 236, 236) 100%
                    )

            &:before
                content ''
                position absolute
                top -1px
                bottom -1px
                left -1px
                right -1px
                opacity 0
                background-color #F5F5F5D8
                border-radius var(--border-radius)
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
    
    .older
        margin-top 15px

    @media (max-width: 600px)
        .news-link
            margin-bottom 13px
            height 27%

            .news-item:after
                font-size 16px
</style>

