<script lang="ts">
    import Tab from '../components/Tab.svelte'
    import { showLanding } from '../helpers/stores'
    import { imageFrame } from '../helpers/stores'

    showLanding.set(false)

</script>

<Tab oversize justify={false}>
    <h1 class="cover-heading"><b>Adomas Morkūnas-Budrys</b></h1>
    <div>
        <img
            class="bio-image"
            src="/images/adomas_morkunas_budrys_small.jpg"
            alt="Adomas Morkunas Budrys"
            data-bigsrc="/images/adomas_morkunas_budrys.jpg"
            on:click={$imageFrame.toggleImageFrame}
        >
        <p>Acclaimed for his analytical mind, charisma, and profound musical understanding, <b>Adomas Morkūnas-Budrys</b> stands out as one of the most promising orchestra conductors of his generation.</p>
        <p>A 23-year-old conductor Adomas has already worked with such orchestras as Thessaloniki State Symphony, Olten Philharmonic of Izmir, Südwestdeutsche Philharmonie Konstanz, Musikkolegium Winterthur, and MÁV Symphony. In masterclasses, he has had an opportunity to work with such conductors as Paavo Järvi, Bernard Haitink, Mirga Gražinytė-Tyla, Jorma Panula, Larry Rachleff, and James Lowe.</p>
        <p>Adomas has been studying orchestra conducting with Johannes Schlaefli (Zürich University of the Arts) and prof. Ole Kristian Ruud (Norwegian Academy of Music). Recently, Adomas’ concert in Zürich in which he presented all of Jean Sibelius’s symphonies was awarded the highest mark.</p>
        <p>Alongside the conductor’s career, Adomas is an active pianist, composer, and organizer of various musical events. As a composer, Adomas won the 1st prize at the National Competition of Young Composers "Mano nata". His compositions were performed by various ensembles, including the chamber choir “Aidija”, “Jauna Muzika”, and New Ideas Chamber Orchestra NICO. His piece for piano solo <i>“An Extraordinary Eggplant’s with the Bolognese Sause Night Walk in the Stomach”</i> was included in the concert tour program "Advent Calendar: 24 Encores" by the pianist Gintaras Januševičius and was performed in Zürich, New York, Rio de Janeiro, various German and Lithuanian cities. Adomas attended masterclasses and received invaluable composition experience from Gediminas Gelgotas and Peter Michael Hamel.</p>
        <p>Since 2018, Adomas is a co-organizer of the Future Symphony Competition. Being a chief conductor of the Future Symphony Orchestra, he has already premiered 14 orchestral compositions.</p>
    </div>
</Tab>

<style lang="stylus">
    .bio-image
        float left
        height 50vh
        margin 10px 15px 5px 0

        &:hover
            cursor pointer

    @media screen and (max-device-width: 900px)
        .bio-image
            height 35vh
            margin 5px 10px 5px 0
</style>