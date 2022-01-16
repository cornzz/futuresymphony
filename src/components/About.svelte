<script lang="ts">
    import { locale } from 'svelte-i18n' 

    let showFSO = false
</script>

<div style="line-height: 1.65;">
    {#if $locale === 'en'}
        <p>
            <span class="quote">
            „Remarkably unique and youthful project that is of utmost significance. The organisational committee, the orchestra musicians and the conductor did their job superbly.“
            </span>
            – <b>Ayal Adler</b> (Israel), composer<br>
        </p>
        <p>
            <span class="quote">
                „There are no other competitions in Lithuania like this one, which is extremely important for young composers“
            </span>
            – <b>Gediminas Gelgotas</b> (Lithuania), composer and conductor<br>
        </p><br>
        
        <p>„Future Symphony“ – 2<sup>nd</sup> international composition competition for symphony orchestra – is an initiative of young musicians who care about the evolution of symphonic tradition.</p>
        <p>The main objective of the „Future Symphony“ competition is to provide an opportunity for young composers all around the globe to try themselves out in the field of symphonic music. The competition seeks to discover new talents as well as to educate the new generation of musicians and develop an international bond between different cultures.</p>
        <p>Composers from all around the world at the age of 18&ndash;35 can apply to the competition.</p>
        <p>
            <span class="link" on:click="{() => showFSO = !showFSO}">Future Symphony Orchestra</span>
            {#if showFSO}
                <hr>
                    <b>Future Symphony Orchestra (FSO)</b> – is an orchestra brought together specifically for this competition and made up of young professional Lithuanian musicians. During the 1<sup>st</sup> „Future Symphony“ competition in 2018, FSO performed 7 scores created by young composers and received praise from the jury as well as international professional musicians.<br>
                    The goal of FSO is to prepare and perform the scores of the young composers. The orchestra also strives to educate young musicians with the subtleties of contemporary music and to introduce new trends of symphonic music to the people of Lithuania.
                <hr>
            {/if}
            will perform up to 10 best scores at the final concert. <b>The concert will be held on September 17<sup>th</sup> 2020, 7:00 PM in the Lithuanian National Philharmonic hall.</b>
        </p>
        <p>
            Scores will be judged by international professional composers, conductors and musicologists:<br>
            <a href="https://www.mic.lt/en/database/classical/composers/serksnyte/" class="link" target="_blank">Raminta Šerkšnytė</a> (Lithuania)<br>
            <a href="https://ayaladler.com/" class="link" target="_blank">Ayal Adler</a> (Israel)<br>
            <a href="https://linamartinelli.wordpress.com/" class="link" target="_blank">Lina Navickaitė-Martinelli</a> (Lithuania)<br>
            <a href="https://dzenitis.webs.com" class="link" target="_blank">Andris Dzenītis</a> (Latvia)<br>
            <a href="http://www.gediminasgelgotas.com/" class="link" target="_blank">Gediminas Gelgotas</a> (Lithuania)<br>
            <a href="http://www.dobrinka.com/" class="link" target="_blank">Dobrinka Tabakova</a> (Bulgaria / UK)<br>
        </p>
        <p>
            Best scores will be awarded prizes of:<br>
            1<sup>st</sup> place – 1000 Eur<br>
            2<sup>nd</sup> place – 700 Eur<br>
            3<sup>rd</sup> place – 500 Eur
        </p>
        <p>Prizewinners will have an opportunity to work with Lithuania‘s best music festivals as well as receive professional recordings of their pieces.</p><br><br>
    {:else if $locale === 'lt'}
        <p>
            <span class="quote">„Nepaprastai unikalus, jaunatviškas ir reikšmingas projektas. Organizatoriai, muzikantai ir dirigentas atliko savo darbą puikiai“</span>
            – <b>Ayal Adler</b> (Izraelis), kompozitorius<br></p>
            <p><span class="quote">„Šis konkursas – vienintelis toks Lietuvoje. Jis labai reikšmingas jauniesiems kompozitoriams“</span>
            – <b>Gediminas Gelgotas</b> (Lietuva), kompozitorius ir dirigentas<br>
        </p><br>
    
        <p>II tarptautinis kompozicijų simfoniniam orkestrui konkursas „Future Symphony“ – tai jaunųjų kūrėjų, kuriems rūpi simfoninės tradicijos evoliucija, iniciatyva.</p>
        <p>Pagrindinis „Future Symphony“ konkurso tikslas – suteikti galimybę jauniesiems kompozitoriams išbandyti simfoninės kūrybos lauką. Konkursas siekia atskleisti naujus kompozicijos talentus, aktualiosios muzikos kūriniais ugdyti jaunąją atlikėjų kartą ir sukurti tarptautiniam bendradarbiavimui palankią kūrybinę erdvę.</p>
        <p>Į konkursą registruotis gali 18&ndash;35 m. kompozitoriai iš viso pasaulio.</p>
        <p>
            Iki 10 geriausių pateiktų partitūrų baigiamajame konkurso koncerte atliks <span class="link" on:click="{() => showFSO = !showFSO}">Future Symphony Orchestra</span>. 
            {#if showFSO}
                <hr>
                    <b>Future Symphony Orchestra  (FSO)</b> – tai lanksčios sudėties simfoninis orkestras, specialiai konkursuisuburiamas iš jaunųjų Lietuvos atlikėjų. I-ojo „Future Symphony“ konkurso metu 2018 m. rudenį FSO parengė 7-ias jaunųjų kompozitorių premjeras ir susilaukė puikių Lietuvos ir pasaulio muzikos profesionalų įvertinimų.<br>
                    FSO tikslas – rengti ir atlikti jaunųjų kompozitorių simfoninę kūrybą. Orkestras taip pat siekia supažindinti jaunosios kartos atlikėjus su šiuolaikinės muzikos ypatumais, ir Lietuvos klausytojams pristatyti aktualiosios simfoninės muzikos tendencijas.
                <hr>
            {/if}
            <b>Baigiamasis koncertas vyks 2020 m. rugsėjo 17 d. 19 val. Lietuvos nacionalinėje filharmonijoje.</b>
        </p>
        <p>
            Koncerto metu kūrinius vertins profesionali tarptautinė kompozitorių, dirigentų ir muzikologų žiuri:<br>
            <a href="https://www.mic.lt/lt/baze/klasikine-siuolaikine/kompozitoriai/serksnyte/" class="link" target="_blank">Raminta Šerkšnytė</a> (Lietuva)<br>
            <a href="https://ayaladler.com/" class="link" target="_blank">Ayal Adler</a> (Izraelis)<br>
            <a href="https://linamartinelli.wordpress.com/" class="link" target="_blank">Lina Navickaitė-Martinelli</a> (Lietuva)<br>
            <a href="https://dzenitis.webs.com" class="link" target="_blank">Andris Dzenītis</a> (Latvija)<br>
            <a href="http://www.gediminasgelgotas.com/" class="link" target="_blank">Gediminas Gelgotas</a> (Lietuva)<br>
            <a href="http://www.dobrinka.com/" class="link" target="_blank">Dobrinka Tabakova</a> (Bulgarija / JK)<br>
        </p>
        <p>
            Geriausios kompozicijos bus apdovanotos piniginiais prizais:<br>
            I vieta – 1000 Eur<br>
            II vieta – 700 Eur<br>
            III vieta – 500 Eur
        </p>
        <p>Laureatams bus pasiūlytos patrauklios kūrybinės sklaidos galimybės, bendradarbiaujant su geriausiais Lietuvos muzikos festivaliais. Konkurso nugalėtojai bus apdovanoti ir profesionaliais kūrinių premjerų įrašais.</p><br>
    {/if}
</div>

<style lang="stylus">
    .quote
        display block
        color rgba(96, 96, 97, 0.9)
        padding 5px 0 0 35px
        font-style italic

    hr
        color var(--color-primary)
</style>

