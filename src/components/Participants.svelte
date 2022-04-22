<script lang="ts">
    import { Splide, SplideSlide } from '@splidejs/svelte-splide'
    import '@splidejs/svelte-splide/css'
    import Button from './forms/Button.svelte'
    import { locale, _ } from 'svelte-i18n'
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

<div class="content">
    <div>
        {#if $locale === 'en'}
            <!-- <b>Registration</b><br> -->
            <p>Composers who are willing to participate in the competition must submit the application form <b>by June 30<sup>th</sup> 2022</b>.</p>
            <p>Application fee – <b>50 €</b></p>
            <p>Before applying, please carefully read the <a href="/files/fsc_regulations_EN_2022-02-24.pdf" class="link" target="_blank">Regulations of the Competition</a>.</p>
        {:else if $locale === 'lt'}
            <!-- <b>Registracija</b><br> -->
            <p>Kompozitoriai, norintys dalyvauti konkurse, privalo užsiregistruoti <b>iki 2022 m. birželio 30 d.</b></p>
            <p>Registracijos mokestis – <b>50 €</b></p>
            <p>Siųsdami paraiška į konkursą Jūs sutinkate su <a href="/files/fsc_regulations_LT_2022-02-24.pdf" class="link" target="_blank">Konkurso nuostatais</a>.</p>
        {/if}
        <div class="center">
            <a class="button" href="/registration" target="_blank">
                <Button type="primary" style="padding: 0 20px">
                    {$_('participants.registration')}
                </Button>
            </a>
        </div>
        <hr>
    </div>
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
</div>

<style lang="stylus">
    .content
        line-height: 1.65
        flex-grow 1
        display flex
        flex-direction column
        justify-content space-between

        .center
            display flex
            margin 60px 0
            justify-content center
        
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

    @media screen and (max-device-width: 600px)
        .content .center
            margin 40px 0
</style>

