<script lang="ts">
    import { Splide, SplideSlide } from '@splidejs/svelte-splide'
    import { Intersection } from '@splidejs/splide-extension-intersection'
    import '@splidejs/svelte-splide/css'
    import { onMount } from 'svelte'
    import { imageFrame } from '../helpers/stores'
    import type { Image } from '../helpers/types'

    let images: Image[] = [
        {
            src: "/images/gallery/orchestra_1_small.jpg",
            alt: "Future Symphony Orchestra",
            bigsrc: "/images/gallery/orchestra_1.jpg",
            caption: "gallery.orchestra_1"
        },{
            src: "/images/gallery/finalists_small.jpg",
            alt: "2020 Finalists",
            bigsrc: "/images/gallery/finalists.jpg",
            caption: "gallery.finalists"
        },{
            src: "/images/gallery/philharmonic_small.jpg",
            alt: "Lithuanian National Philharmonic",
            bigsrc: "/images/gallery/philharmonic.jpg",
            caption: "gallery.philharmonic"
        },{
            src: "/images/gallery/orchestra_2_small.jpg",
            alt: "Future Symphony Orchestra",
            bigsrc: "/images/gallery/orchestra_2.jpg"
        },{
            src: "/images/gallery/percussionist_20_small.jpg",
            alt: "Percussionist 2020",
            bigsrc: "/images/gallery/percussionist_20.jpg"
        },{
            src: "/images/gallery/cellists_20_small.jpg",
            alt: "Cellists 2020",
            bigsrc: "/images/gallery/cellists_20.jpg"
        },{
            src: "/images/gallery/orchestra_3_small.jpg",
            alt: "Future Symphony Orchestra",
            bigsrc: "/images/gallery/orchestra_3.jpg",
            caption: "gallery.orchestra_1"
        },{
            src: "/images/gallery/cellist_18_small.jpg",
            alt: "Cellist 2018",
            bigsrc: "/images/gallery/cellist_18.jpg"
        },{
            src: "/images/gallery/audience_18_small.jpg",
            alt: "Audience 2018",
            bigsrc: "/images/gallery/audience_18.jpg",
            caption: "gallery.audience_18"
        },{
            src: "/images/gallery/percussionist_18_small.jpg",
            alt: "Percussionist 2018",
            bigsrc: "/images/gallery/percussionist_18.jpg"
        },{
            src: "/images/gallery/cellists_18_small.jpg",
            alt: "Cellists 2018",
            bigsrc: "/images/gallery/cellists_18.jpg"
        },{
            src: "/images/gallery/jury_18_small.jpg",
            alt: "Jury 2018",
            bigsrc: "/images/gallery/jury_18.jpg",
            caption: "gallery.jury_18"
        }
    ]
    let splide: Splide
    let windowWidth: number

    $: if (typeof window !== 'undefined') windowWidth = window.innerWidth

    onMount(() => {
        splide.splide.on('click', (_, event) => {
            const target = event.target as HTMLImageElement
            const index = Number(target.dataset.index)
            const current = images[index]
            const closeCallback = () => windowWidth > 600 && splide.splide.Components.Autoplay.play()
            $imageFrame.toggleImageFrame(current.bigsrc, current.alt, current.caption, images, index, closeCallback)
            splide.splide.Components.Autoplay.pause()
        })
    })
</script>

<div class="gallery">
    <Splide
        hasTrack={false}
        bind:this={splide}
        extensions={{ Intersection }}
        options={{
            type: 'loop',
            rewind: true,
            speed: 800,
            perPage: windowWidth > 850 ? 3 : windowWidth > 500 ? 2 : 1,
            perMove: 1,
            gap: '10px',
            padding: { left: 50, right: 50 },
            arrows: windowWidth > 600,
            easing: 'ease',
            interval: 8000,
            flickPower: 100,
            autoplay: true,
            pauseOnFocus: false,
            intersection: {
                inView: { autoplay: windowWidth > 600 },
                outView: { autoplay: false },
            },
            resetProgress: false,
            lazyLoad: 'nearby'
        }}
    >
        <div class="splide__track">
            <ul class="splide__list">
                {#each images as image, index}
                    <SplideSlide>
                        <!-- TODO: add caption title -->
                        <img
                            src="data:image/png;base64,AAA"
                            alt={image.alt}
                            width="750"
                            height="500"
                            data-splide-lazy={image.src}
                            data-index={index}
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
            height auto

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

        :global(.splide__arrow)
            background #FFF
            opacity 0.7
            transition all 0.15s ease
            height 25px
            width 25px
        
        :global(.splide__arrow:hover)
            transform translateY(-50%) scale(110%) !important
            opacity 0.85

        :global(.splide__arrow svg)
            height 15px
            width 15px
</style>

