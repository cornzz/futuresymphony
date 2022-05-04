<script lang="ts">
    import { locale } from 'svelte-i18n'
    import { fadeHeight } from '../helpers'

    let showFSO = false
</script>

<div class="content">
    {#if $locale === 'en'}
        <div class="quotes">
            <div>
                <span class="quote">This is a competition of international standing, which highlights Lithuania’s forward-looking cultural stature and provides the best environment for cultural exchange on the highest level.</span>
                <span>– <b>Dobrinka Tabakova</b>, BBC Concert Orchestra composer-in-residence</span>
            </div>
            <div>
                <span class="quote">I find this project to be highly unique, moving, and extremely important. The organizational committee, the orchestra musicians, and the conductor did their job superbly.</span>
                <span>– <b>Ayal Adler</b>, composer & pianist</span>
            </div>
            <div>
                <span class="quote">I truly believe this competition will soon find itself firmly established as one of the great events of its type.</span>
                <span>– <b>Charles Philip Daniels Torres</b>, winner of the 2<sup>nd</sup> Future Symphony Competition</span>
            </div>
        </div>
        
        <slot name="image1"></slot>

        <p>The 3<sup>rd</sup> International Composition Competition for Symphony Orchestra “Future Symphony” is a unique initiative of young musicians, striving to stimulate the evolution of symphonic tradition.</p>
        <p>The main objective of the competition is to encourage young composers all around the globe to write symphonic music and provide an opportunity to hear their compositions live. The competition seeks to discover new talents as well as to educate the new generation of musicians and develop an international bond between different cultures.</p>
        <p>Composers from all around the world at the <b>age of 18&ndash;35</b> can apply to the competition.</p>
        <p>
            <span class="link" on:click="{() => showFSO = !showFSO}">Future Symphony Orchestra</span> will perform 5 to 7 best scores in the final concert in the Lithuanian National Philharmonic Hall <b>on September 9<sup>th</sup> 2022</b>.
            {#if showFSO}
                <div transition:fadeHeight style="overflow: hidden">
                    <hr>
                        <b>Future Symphony Orchestra (FSO)</b> is an orchestra brought together specifically for this competition and made up of young professional Lithuanian musicians. FSO has already performed 14 worldwide symphonic premiers and received acclaim from previous Competition’s finalists, jury members and Lithuanian music lovers for its versatility, high professionalism and youthful charisma.<br>
                        The goal of FSO is to prepare and perform the scores of the young composers. The orchestra also strives to educate young musicians with the subtleties of contemporary music and to introduce new trends of symphonic music to the people of Lithuania.
                    <hr>
                </div>
            {/if}
        </p>

        <slot name="image2"></slot>

        <p>
            Scores will be judged by international professional composers, conductors and musicologists:<br>
            <a href="https://www.lmic.lv/en/composers/martins-vilums-488#work" class="link" target="_blank">Mārtiņš Viļums</a> (Latvia/Lithuania)<br>
            <a href="https://www.kyriakides.com/" class="link" target="_blank">Yannis Kyriakides</a> (Cyprus/The Netherlands)<br>
            <a href="https://www.justejanulyte.com/en/about/" class="link" target="_blank">Justė Janulytė</a> (Lithuania)<br>
            <!-- <a href="https://lmta.academia.edu/RutaStaneviciute" class="link" target="_blank">Rūta Stanevičiūtė</a> (Lithuania)<br> -->
            <!-- <a href="https://zibuokle.com/" class="link" target="_blank">Žibuoklė Martinaitytė</a> (Lithuania)<br> -->
            <a href="https://www.filharmonija.lt/en/performers/modestas-pitrenas-artistic-director-and-principal-conductor-of-the-lnso18.html" class="link" target="_blank">Modestas Pitrėnas</a> (Lithuania)<br>
            <a href="http://www.gediminasgelgotas.com/" class="link" target="_blank">Gediminas Gelgotas</a> (Lithuania)<br>
            <a href="https://ayaladler.com/" class="link" target="_blank">Ayal Adler</a> (Israel)<br>
            <!-- <a href="https://www.emic.ee/helena-tulve" class="link" target="_blank">Helena Tulve</a> (Estonia)<br> -->
        </p>
        <p>The <b>Grand Prix</b> is a <b>1500 € cash prize</b> and a performance by <b>the Lithuanian National Symphony Orchestra</b> (LNSO) in the season of 2022–23. The other 2–3 best composers will be awarded Laureate diplomas and <b>will share a 1500 € prize fund</b> in equal parts. Furthermore, all finalists will receive professional recordings of their pieces.</p>
    {:else if $locale === 'lt'}
        <div class="quotes">
            <div>
                <span class="quote">Tai tarptautinio lygio konkursas, išryškinantis į ateitį orientuotą Lietuvos kultūrinį perspektyvumą, sukuriantis geriausias sąlygas aukščiausio lygio kultūriniams mainams.</span>
                <span>– <b>Dobrinka Tabakova</b>, BBC Concert Orchestra kompozitorė-rezidentė</span>
            </div>
            <div>
                <span class="quote">Nepaprastai unikalus, jaunatviškas ir reikšmingas projektas. Organizatoriai, atlikėjai ir dirigentas savo darbą atliko nepriekaištingai.</span>
                <span>– <b>Ayal Adler</b>, kompozitorius ir pianistas</span>
            </div>
            <div>
                <span class="quote">Esu įsitikinęs, jog „Future Symphony“ greitai įsitvirtins kaip vienas geriausių tokio tipo konkursų.</span>
                <span>– <b>Charles Philip Daniels Torres</b>, II <i>„Future Symphony“</i> konkurso laimėtojas</span>
            </div>
        </div>

        <slot name="image1"></slot>
        
        <p>III tarptautinis kompozicijų simfoniniam orkestrui konkursas <i>„Future Symphony“</i> – tai jaunųjų kūrėjų, kuriems rūpi simfoninės tradicijos evoliucija, iniciatyva.</p>
        <p>Pagrindinis <i>„Future Symphony“</i> konkurso tikslas – suteikti galimybę jauniesiems kompozitoriams išbandyti simfoninės kūrybos lauką. Konkursas siekia atskleisti naujus kompozicijos talentus, aktualiosios muzikos kūriniais ugdyti jaunąją atlikėjų kartą ir sukurti tarptautiniam bendradarbiavimui palankią kūrybinę erdvę.</p>
        <p>Konkurse dalyvauti gali <b>18&ndash;35 m.</b> kompozitoriai iš viso pasaulio.</p>
        <p>
            <b>2022 m. rugsėjo 9 d.</b> Lietuvos nacionalinėje filharmonijoje <b>5&ndash;7 geriausias pateiktas partitūras</b> atliks specialiai <i>„Future Symphony“</i> konkursams suburiamas <span class="link" on:click="{() => showFSO = !showFSO}">Future Symphony Orchestra</span>.
            {#if showFSO}
                <div transition:fadeHeight style="overflow: hidden">
                    <hr>
                        <b>Future Symphony Orchestra  (FSO)</b> – tai lanksčios sudėties simfoninis orkestras, specialiai konkursui suburiamas iš jaunųjų Lietuvos atlikėjų. FSO jau dovanojo net 14 simfoninių kūrinių premjerų Lietuvos klausytojams. Orkestras sulaukė puikaus praeitų konkurso finalininkų, žiuri narių ir šalies meninės muzikos gerbėjų įvertinimo už profesionalumą, lankstumą ir jaunatvišką energiją.<br>
                        FSO tikslas – rengti ir atlikti jaunųjų kompozitorių simfoninę kūrybą. Orkestras taip pat siekia supažindinti jaunosios kartos atlikėjus su šiuolaikinės muzikos ypatumais, ir Lietuvos klausytojams pristatyti aktualiosios simfoninės muzikos tendencijas.
                    <hr>
                </div>
            {/if}
        </p>

        <slot name="image2"></slot>

        <p>
            Koncerto metu kūrinius vertins profesionali tarptautinė kompozitorių, dirigentų ir muzikologų žiuri:<br>
            <a href="https://www.lmic.lv/en/composers/martins-vilums-488#work" class="link" target="_blank">Mārtiņš Viļums</a> (Latvija/Lietuva)<br>
            <a href="https://www.kyriakides.com/" class="link" target="_blank">Yannis Kyriakides</a> (Kipras/Olandija)<br>
            <a href="https://www.justejanulyte.com/en/about/" class="link" target="_blank">Justė Janulytė</a> (Lietuva)<br>
            <!-- <a href="https://lmta.academia.edu/RutaStaneviciute" class="link" target="_blank">Rūta Stanevičiūtė</a> (Lietuva)<br> -->
            <!-- <a href="https://zibuokle.com/" class="link" target="_blank">Žibuoklė Martinaitytė</a> (Lietuva)<br> -->
            <a href="https://www.filharmonija.lt/en/performers/modestas-pitrenas-artistic-director-and-principal-conductor-of-the-lnso18.html" class="link" target="_blank">Modestas Pitrėnas</a> (Lietuva)<br>
            <a href="http://www.gediminasgelgotas.com/" class="link" target="_blank">Gediminas Gelgotas</a> (Lietuva)<br>
            <a href="https://ayaladler.com/" class="link" target="_blank">Ayal Adler</a> (Izraelis)<br>
            <!-- <a href="https://www.emic.ee/helena-tulve" class="link" target="_blank">Helena Tulve</a> (Estija)<br> -->
        </p>
        <p><b>Grand Prix</b> &ndash; <b>1500 € piniginis prizas</b> ir kūrinio atlikimas <b>Lietuvos nacionalinio simfoninio orkestro</b> (LNSO) 2022–23 metų sezone. Kiti 2–3 geriausi kompozitoriai bus apdovanoti Laureato diplomais ir <b>pasidalins 1500 € prizinį fondą</b> lygiomis dalimis. Be to, visi kompozitoriai patekę į 2-ąjį turą gaus profesionalius savo kūrinių įrašus.</p>
    {/if}
</div>

<style lang="stylus">
    .content
        line-height 1.65

        & > p
            text-align justify

        .quotes
            margin 15px 0 25px
            display grid
            grid-template-columns 1.11fr 1fr
            column-gap 25px
            row-gap 22px

            div
                position relative
                background-color #e9e9e9
                padding 10px 20px
                border-radius 1px
                font-size 0.95em

                &:after
                    content ''
                    position absolute
                    display block
                    top -12px
                    left -12px
                    width 32px
                    height 32px
                    background url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='%23F5F5F5'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z'/%3E%3C/svg%3E") no-repeat center
                    background-color var(--color-primary)
                    border-radius 32px

                &:last-child
                    grid-column span 2
            
                .quote
                    display block
                    color #404041
                    padding 0 0 5px 17px
                    font-style italic

                span:not(.quote)
                    display inline-block
                    line-height 1.45

    @media screen and (max-device-width: 900px)
        .content
            & > p
                text-align start


    @media screen and (max-device-width: 750px)
        .content .quotes
            row-gap 15px

            div
                grid-column span 2
                padding 5px 15px

                &:after
                    width 24px
                    height 24px
                    top -9px
                    left -9px
                    background-size 18px 18px

                .quote
                    padding 0 0 3px 10px

                span:not(.quote)
                    display inline-block
                    line-height 1.3
</style>

