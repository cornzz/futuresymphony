<script lang="ts">
    export let top3 = false

    let articles

    const imports = import.meta.globEager('./articles/*.json')
    articles = Object.values(imports)
</script>
<a href="/news/final_round/" class="news-link">
    <div class="news-item dropshadow">
        <img class="news-img-small" src="/images/charles_torres_small.jpg" alt="charles_torres_small.jpg">
        <div class="news-text">
            <span style="color: rgba(100, 100, 100, 0.5);"><i>September 18<sup>th</sup>, 2020 - 07:00 pm</i></span><br>
            <div style="line-height: 1.55;">
                <b>Results of the final round</b><br>
                We are excited to announce the winners of the 2<sup>nd</sup> international music composition competition "Future Symphony"!
                <span class="link">Read more</span>
            </div>
        </div>
    </div>
</a>
{#if top3}
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
</style>

