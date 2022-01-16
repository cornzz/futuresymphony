<script lang="ts">
    import { _, locale } from 'svelte-i18n'

    export let latest = false

    const imports = import.meta.globEager('../routes/news/articles/*.json')
    let articles = Object.entries(imports).map(([path, article]) => {
        return { id: path.match(/\d+/)[0], article }
    })
    articles.sort((a, b) => Number(b.id) - Number(a.id))
    if (latest) {
        articles = articles.slice(0, 3)
    }  
</script>

{#each articles as { article }}
    <a href={`/news/${article.slug}`} class="news-link">
        <div class="news-item dropshadow" class:fixed={!latest}>
            <img class="news-image-small" src={`/images/news/${article.images.small}`} alt={article.images.small}>
            <div class="news-content" data-readmore="{$_('news.readmore')}">
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

    .dropshadow
        transition all 0.1s ease
        
        &:hover
            cursor pointer
            box-shadow 0px 0px 4px 1px var(--color-boxshadow)

    .news-item
        display flex
        height 26%
        margin-bottom 1.3%
        border 1px solid #CCC
        border-radius 2px

        img
            height 100%

        .news-content
            position relative
            display grid
            grid-template-rows 1fr 1fr 3fr
            padding 5px 10px 10px
            
            & > *
                overflow hidden
                text-overflow ellipsis

            .date
                font-size 0.85em
                color rgba(100, 100, 100, 0.5)

            .title
                white-space nowrap
                overflow hidden

            .text
                line-height: 1.55

            &:before
                content ''
                position absolute
                top 0
                bottom 0
                left 0
                right 0
                opacity 0
                background-color #092749FA
                border-top-right-radius 2px
                border-bottom-right-radius 2px
                transition all 0.3s ease
            
            &:after
                content attr(data-readmore)
                position absolute
                top 50%
                left 0
                right 0
                transform translateY(-50%)
                font-size 0.85em
                opacity 0
                text-align center
                color var(--color-background)
                transition all 0.2s ease

        &:hover .news-content:before
        &:hover .news-content:after
            opacity 1
    
    .fixed
        height 25vh

    .center
        width 100%
        text-align center

    @media screen and (max-device-width: 600px)
        /* TODO !! */
        .news-image-small
            height 17%
</style>

