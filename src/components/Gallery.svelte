<script lang="ts">
    import { Splide, SplideSlide } from '@splidejs/svelte-splide'
    import '@splidejs/svelte-splide/css'
    import { imageFrame } from '../helpers/stores'

    type CarouselImage = { src: string, alt: string, bigsrc?: string, caption?: string }

    let images: CarouselImage[] = [
        {
            src: "/images/gallery/about_1_small.jpg",
            alt: "FSO 1",
            bigsrc: "/images/gallery/about_1.jpg",
            caption: "Test caption"
        },
        {
            src: "/images/gallery/about_2_small.jpg",
            alt: "FSO 2",
            bigsrc: "/images/gallery/about_2.jpg",
            caption: "Test caption"
        },
        {
            src: "/images/gallery/about_1_small.jpg",
            alt: "FSO 1",
            bigsrc: "/images/gallery/about_1.jpg",
            caption: "Test caption"
        },
        {
            src: "/images/gallery/about_2_small.jpg",
            alt: "FSO 2",
            bigsrc: "/images/gallery/about_2.jpg",
            caption: "Test caption"
        },
    ]
    let windowWidth: number

    $: if (typeof window !== 'undefined') windowWidth = window.innerWidth
</script>

<div class="gallery">
    <Splide
        hasTrack={false}
        options={{
            perPage: windowWidth > 850 ? 3 : windowWidth > 600 ? 2 : 1,
            perMove: 1,
            speed: 800,
            gap: '15px',
            padding: { left: 50, right: 50, bottom: 50 },
            type: 'loop',
            autoplay: true,
            interval: 8000,
            resetProgress: false,
            lazyLoad: 'nearby'
        }}
    >
        <div class="splide__track">
            <ul class="splide__list">
                {#each images as image}
                    <SplideSlide>
                        <img
                            src="data:image/png;base64,..."
                            data-splide-lazy={image.src}
                            alt={image.alt}
                            data-bigsrc={image.bigsrc}
                            data-caption={image.caption}
                            on:click={$imageFrame.toggleImageFrame}
                            loading="lazy"
                        >
                    </SplideSlide>
                {/each}
            </ul>
        </div>
        <div class="splide__progress">
            <div class="splide__progress__bar">
            </div>
        </div>
    </Splide>
</div>

<style lang="stylus">
    .gallery
        flex-grow 1
        display flex
        flex-direction column
        justify-content space-around
    
        img
            width 100%

            &:hover
                cursor pointer

        .splide__progress__bar
            margin-top 10px
            height 1px
            background var(--color-primary)
        
        :global(.splide__pagination)
            bottom -25px

        :global(.splide__pagination__page.is-active)
            background var(--color-primary)
</style>

