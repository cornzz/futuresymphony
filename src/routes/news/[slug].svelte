<script lang="ts">
    import Tab from '../../components/Tab.svelte'
    import Image from '../../components/Image.svelte'
    import { showLanding, showBack } from '../../helpers/stores'
    import type { NewsArticle } from '../../helpers/types'
    import { MetaTags } from 'svelte-meta-tags'
    import { _, locale } from 'svelte-i18n'
    import { page } from '$app/stores'

    showLanding.set(false)
    showBack.set(false)

    const imports = import.meta.globEager('./articles/*.json') as { [path: string]: NewsArticle }
    let article: NewsArticle = Object.values(imports).find(article => article.slug === $page.params.slug)
</script>

<MetaTags
    title={$_('news.slug.meta.title')}
    description={article && article.meta ? article.meta[$locale] : ''}
/>

<Tab oversize>
    {#if article}
        <h1 class="cover-heading">{@html article.title[$locale]}</h1>
        <span class="date"><i>{@html article.date[$locale]}</i></span>
        <div class="content">
            <div class="news-image">
                <Image
                    src={`/images/news/${article.images.small}`}
                    alt="News subject"
                    bigsrc={article.images.regular ? `/images/news/${article.images.regular}` : ''}
                    caption={article.images.caption?.[$locale]}
                />
            </div>
            {@html article.content.full[$locale]}
        </div>
    {/if}
</Tab>

<style lang="stylus">
    .date
        color var(--color-light-gray)
        line-height 2.5

    .content
        flex-grow 1
        line-height 1.65
        margin-top 10px

    .news-image
        float right
        margin 5px 0 5px 20px

        :global(img)
            height 40vh

   @media screen and (max-device-width: 600px)
        .date
            line-height 2
            font-size 1.3vh

        .news-image :global(img)
            height 30vh
</style>