<script lang="ts">
    import Tab from '../../components/Tab.svelte'
    import { showLanding, showBack } from '../../helpers/stores'
    import { _, locale } from 'svelte-i18n'

    showLanding.set(false)
    showBack.set(true)
</script>

<Tab oversize>
    <h1 class="cover-heading"><b>{$_('regulations')}</b></h1>
    <div class="regulations">
        {#if $locale === 'en'}
            <b>I. General information</b>
            <p>The 2<sup>nd</sup> International Music Composition Competition for Symphony Orchestra “Future Symphony” is organised by “Muzikinis pirštas”, PI. Eligible for participation are students and graduates from any country aged 18–35 (born not earlier than September 18<sup>th</sup> 1984 and not later than July 5<sup>th</sup> 2002 inclusive). The students and graduates are required to be from any of the following: high schools of art, academies, conservatories, universities, and art high schools or art schools. All participants compete in the same category.</p>

            <b>II. Registration and score submission</b>
            <p>All participants must register <b>by June 5<sup>th</sup> 2020, 23:59 EEST (Lithuanian time)</b>. The registered participants must submit the score in PDF format (all the requirements are specified in paragraph IX.) and the sound recording of the composition in an MP3 format (made by notographic software) <b>till July 5th 2020, 23:59 EEST (Lithuanian time)</b>. After this date, the authors cannot correct or change the scores.</p>

            <b>III. Participation fee</b>
            <p>The participation fee until 5<sup>th</sup> April 2020 23:59 EEST is <b>50 EUR</b>. The participation fee from April 6<sup>th</sup> 2020 onwards is <b>80 EUR</b>. The payment is returned to the participants only in the event of the competition being cancelled.</p>
            <p>Since it is fully restricted to make/receive international transfers to/from countries listed below, Future Symphony Competition allows composers from these countries to participate in the Competition without any registration fee. Unless it is paid before the end of registration, they will not receive a cash prize in case of winning.<br>
            <b>The countries under international sanctions are</b>: Iran, North Korea, Syria, the Republic of Sudan, Cuba and Crimea region of Ukraine</p>

            <b>IV. Competition process</b>
            <p>1<sup>st</sup> competition round: <b>July 5–20<sup>th</sup> 2020</b>.<br>
            2<sup>nd</sup> competition round – the final concert: <b>17<sup>th</sup> September 2020, 19:00</b>.<br>
            Location of the final concert: <b>Lithuanian National Philharmonic Hall, Vilnius</b>.</p>
            <ul>
                <li><b>1<sup>st</sup> round:</b> all scores are sent in by the participants; those satisfying all the requirements are sent to the jury of the 1<sup>st</sup> round which then selects up to 10 best scores for the final concert. The results of the 1<sup>st</sup> round are sent to each contestant by e-mail and announced on the website <a href="https://futuresymphony.lt/" target="_blank" class="link">www.futuresymphony.lt</a> by July 20<sup>th</sup> 2020 (date inclusive).</li>
                <li><b>The period between the rounds:</b> participants selected for the 2<sup>nd</sup> round must submit the instrumental parts by August 5<sup>th</sup> (date inclusive). All submitted parts will be reviewed by the technical committee. If the committee evaluates that the composition contains parts technically impossible to perform, they will be cut out.</li> 
                <li><b>2<sup>nd</sup> round:</b> during the final concert the compositions of the 2<sup>nd</sup> round will be performed by <i>Future Symphony Orchestra (FSO)</i>. The 2<sup>nd</sup> round jury will evaluate and award the authors of the best compositions at the end of the concert.</li>
            </ul>

            <b>V. Competition committees</b>
            <p>The compositions will be evaluated by three committees:</p>
            <ul>
                <li><b>1<sup>st</sup> round jury</b> will evaluate the scores submitted for the 1<sup>st</sup> round. All jury members are professional composers. To ensure confidentiality, the jury members are announced with the results of the 1<sup>st</sup> round.</li>
                <li><b>The technical committee</b> will review the difficulty of the compositions selected for the 2<sup>nd</sup> round. The committee is composed of concertmasters of all the orchestra’s instrument groups and the orchestra’s conductor.</li>
                <li><b>2<sup>nd</sup> round jury</b> will evaluate the compositions performed during the final concert and will select the prize winners of the competition. Members of the jury:<br>
                <a href="https://www.mic.lt/en/database/classical/composers/serksnyte/" class="link" target="_blank">Raminta Šerkšnytė</a> (Lithuania)<br>
                <a href="https://ayaladler.com/" class="link" target="_blank">Ayal Adler</a> (Israel)<br>
                <a href="https://linamartinelli.wordpress.com/" class="link" target="_blank">Lina Navickaitė-Martinelli</a> (Lithuania)<br>
                <a href="https://dzenitis.webs.com" class="link" target="_blank">Andris Dzenītis</a> (Latvia)<br>
                <a href="http://www.gediminasgelgotas.com/" class="link" target="_blank">Gediminas Gelgotas</a> (Lithuania)<br>
                <a href="http://www.dobrinka.com/" class="link" target="_blank">Dobrinka Tabakova</a> (Bulgaria / UK)<br></li>
            </ul>
            <p>The evaluation made by the committee and both juries is final and indisputable. The members of the 2<sup>nd</sup> round jury may vary.</p>

            <b>VI. Evaluation criteria</b><br>
            The participants’ compositions are evaluated according to:
            <ul>
                <li>Artistic suggestion of the piece;</li>
                <li>professionalism of composing, informative and orderly notation;</li>
                <li>understanding of orchestration and the capabilities of instruments.</li>
            </ul>

            <b>VII. Competition prizes</b>
            <p>The authors of the best pieces written for the 2<sup>nd</sup> International Music Composition Competition for Symphony Orchestra “Future Symphony” will be awarded with a competition diploma and prizes:</p>
            <p>1<sup>st</sup> place – <b>1000 Eur</b><br>
            2<sup>nd</sup> place – <b>700 Eur</b><br>
            3<sup>rd</sup> place – <b>500 Eur</b><br>
            Special prize founded by Saulius Karosas Foundation "for the best piece written by a Lithuanian composer" - <b>300 Eur</b><br></p>
            <p>Prizewinners will have an opportunity to work with Lithuania‘s best music festivals as well as receive professional recordings of their pieces.</p>

            <b>VIII. Competition collective</b>
            <p>The compositions in the 2<sup>nd</sup> round will be performed by <i>Future Symphony Orchestra</i> (FSO), artistic director and conductor – Adomas Morkūnas-Budrys.</p>
            <p>FSO is a symphony orchestra established specifically for this competition. Members of the orchestra are professional musicians and students of Lithuanian Academy of Music and Theatre (LMTA).</p>

            <b>IX. Competition terms and conditions</b>
            <ul>
                <li>During the competition and up until the award ceremony <b>complete anonymity of the composers</b> is maintained;</li>
                <li>Each author can submit only one score;</li>
                <li>The participants agree to public disclosure of the information they provide and photos;</li>
                <li>All composers can participate in the orchestra’s rehearsals and cooperate with the conductor. <b>The rehearsals are recorded and the recordings are sent to the composers in 12 hours after the end of each rehearsal</b>. The competition reserves the right to present the public with an interpretation of the composition chosen by the conductor;</li>
                <li>FSO reserves the right to add the composition to its repertoire without transferring the right to other parties, also to broadcast it free of charge and to put it on the internet indefinitely;</li>
                <li>When registering to the competition, the participants confirm the accuracy of the provided information; those not abiding by the terms and conditions, deadlines, or acting dishonestly are disqualified from the competition;</li>
                <li>The organisers of the competition reserve the right to change the terms and conditions.</li>
            </ul>

            <div id="score"><b><i>Score requirements:</i></b></div>
            <ul>
                <li>Composition length: 8–12 min;</li>
                <li>Information about the maximum structure for the performers you will find <a href="/orchestration.txt" class="link" download>here</a>.<br>
                    
                Pieces for symphony orchestra with electronic music and pieces for a soloist and orchestra cannot take part in the competition. Any additional elements (choreography, reseating the orchestra, etc.) must be coordinated by July 5<sup>th</sup> 2020.</li>
                <li>The compositions submitted must be original, created specifically for this competition and not performed live before;</li>
                <li>To maintain the anonymity of the compositions for evaluation purposes, the composer cannot sign his name and surname in the score or in the parts.</li>
            </ul>

            <b>X. Accommodation, meals and travel</b>
            <p>Attendance of composers in the final concert of the 2<sup>nd</sup> round is optional (money prizes are transferred to the specified bank account and the recordings are sent by e-mail). All expenses for accommodation, meals, travel, etc. are paid by the participants themselves.</p><br><br>
        {:else if $locale === 'lt'}
            <b>I. Bendra konkurso informacija</b>
            <p>II tarptautinį kompozicijų simfoniniam orkestrui konkursą „Future Symphony“ rengia VšĮ „Muzikinis pirštas“. Konkurse gali dalyvauti 18–35 metų (gimę ne anksčiau kaip 1984-09-18 ir ne vėliau kaip 2002-07-05 imtinai) įvairių pasaulio šalių aukštųjų meno mokyklų, akademijų, konservatorijų, universitetų bei menų gimnazijų ar mokyklų moksleiviai, studentai ir absolventai. Visi dalyviai varžosi vienoje kategorijoje.</p>

            <b>II. Registracija ir partitūrų pateikimas</b>
            <p>Pageidaujantys dalyvauti konkurse turi registruotis sumokėję dalyvio mokestį <b>iki 2020 m. birželio 5 d. 23:59 Lietuvos laiku (EEST)</b>. Užsiregistravę dalyviai <b>iki liepos 5 d. 23:59 Lietuvos laiku (EEST)</b> privalo atsiųsti kūrinio partitūrą PDF formatu (reikalavimai partitūrai nurodyti IX. punkte) ir kūrinio garso įrašą MP3 formatu (iš notografinių programų). Po šio termino autoriai nebegali taisyti ir keisti partitūrų.</p>

            <b>III. Dalyvio mokestis</b>
            <p>Dalyvio mokestis iki 2020 m. balandžio 5 d. (imtinai) – <b>50 Eur</b>. Nuo 2020 m. balandžio 6 d. dalyvio mokestis – <b>80 Eur</b>. Sumokėti pinigai dalyviams grąžinami tik konkurso atšaukimo atveju.</p>
            <p>Kompozitoriai iš šalių, kuriose negalima atlikti/gauti tarptautinių pavedimų, gali dalyvauti konkurse nesumokėję registracijos mokesčio, tačiau piniginiai prizai nebus išmokėti prizo laimėjimo atveju (nebent registracijos mokestis bus sumokėtas iki registracijos pabaigos).<br>
            <b>Tarptautines sankcijas patiriančios šalys</b>: Iranas, Šiaurės Korėja, Sirija, Sudanas, Kuba ir Krymo sritis.</p>

            <b>IV. Konkurso eiga</b>
            <p>1-asis konkurso turas vyks <b>2020 m. nuo liepos 5 d. iki liepos 20 d</b>.<br>
            2-asis konkurso turas – baigiamasis koncertas vyks <b>2020 m. rugsėjo 17 d. 19:00</b>. Koncerto vieta – <b>Lietuvos nacionalinės filharmonijos didžioji salė</b>.</p>
            <ul>
                <li><b>1-asis turas:</b> visos atsiųstos dalyvių partitūros yra peržiūrimos; atitinkančios visus reikalavimus siunčiamos 1-ojo turo žiuri, kuri baigiamajam koncertui išrenka iki 10 geriausių partitūrų. 1-ojo turo rezultatai pranešami kiekvienam konkurso dalyviui el. paštu ir skelbiami <a href="https://futuresymphony.lt" class="link" target="_blank">www.futuresymphony.lt</a> internetinėje svetainėje iki 2020 m. liepos 20 d. imtinai</li>
                <li><b>Laikotarpis tarp abiejų turų:</b> dalyviai, patekę į 2-ąjį turą, privalo atsiųsti kūrinių instrumentų partijas, savo trumpą biografiją ir kūrinio anotaciją iki rugpjūčio 5 d. imtinai. Visas atsiųstas partijas peržiūrės techninė komisija. Jei komisijos įvertins, jog kūrinyje yra techniškai neįmanomų atlikti vietų, bus atliktos kupiūros (t.y. tos vietos iškerpamos).</li>
                <li><b>2-asis turas:</b> baigiamojo koncerto metu 2-ojo turo kūrinius atliks <i>Future Symphony Orchestra (FSO)</i>. 2-ojo turo žiuri įvertins ir koncerto pabaigoje apdovanos geriausių kūrinių autorius.</li>
            </ul>

            <b>V. Konkurso komisijos</b>
            <p>Kompozicijas vertins trys komisijos:</p>
            <ul>
                <li><b>1-ojo turo žiuri</b> vertins 1-ajam turui pateiktas partitūras. Žiuri nariai – profesionalūs kompozitoriai. Siekiant konfidencialumo, žiuri sudėtis paskelbiama kartu su 1-ojo turo rezultatais.</li>
                <li><b>Techninė komisija</b> sudaryta iš visų orkestro instrumentų grupių koncertmeisterių ir orkestro dirigento, peržiūrės į 2-ąjį turą atrinktų kūrinių muzikinės medžiagos sudėtingumą ir technines atlikimo galimybes;</li>
                <li><b>2-ojo turo žiuri</b> vertins baigiamajame konkurso koncerte skambėsiančius kūrinius ir išrinks konkurso prizininkus. Žiuri nariai:<br>
                <a href="https://www.mic.lt/lt/baze/klasikine-siuolaikine/kompozitoriai/serksnyte/" class="link" target="_blank">Raminta Šerkšnytė</a> (Lietuva)<br>
                <a href="https://ayaladler.com/" class="link" target="_blank">Ayal Adler</a> (Izraelis)<br>
                <a href="https://linamartinelli.wordpress.com/" class="link" target="_blank">Lina Navickaitė-Martinelli</a> (Lietuva)<br>
                <a href="https://dzenitis.webs.com" class="link" target="_blank">Andris Dzenītis</a> (Latvija)<br>
                <a href="http://www.gediminasgelgotas.com/" class="link" target="_blank">Gediminas Gelgotas</a> (Lietuva)<br>
                <a href="http://www.dobrinka.com/" class="link" target="_blank">Dobrinka Tabakova</a> (Bulgarija / JK)<br></li>
            </ul>
            <p>Komisijos ir abiejų žiuri vertinimas yra galutinis ir neginčijamas. 2-ojo turo žiuri sudėtis gali kisti.</p>

            <b>VI. Vertinimo kriterijai</b><br>
            Dalyvių kompozicijos vertinamos atsižvelgiant į: 
            <ul>
                <li>meninę kūrinio įtaigą;</li>
                <li>komponavimo profesionalumą, informatyvią ir tvarkingą notaciją;</li>
                <li>orkestravimo ir instrumentų techninių galimybių išmanymą.</li>
            </ul>

            <b>VII. Konkurso prizai</b>
            <p>Geriausių II-ojo tarptautinio simfoninės muzikos kompozitorių konkurso „Future Symphony“ kūrinių autoriai bus apdovanoti piniginėmis premijomis:</p>
            <p>I vieta – <b>1000 Eur</b><br>
            II vieta – <b>700 Eur</b><br>
            III vieta – <b>500 Eur</b><br>
            Sauliaus Karoso fondo įsteigtas specialus prizas „už geriausią lietuvių autoriaus kūrinį“ - <b>300 Eur</b><br></p>
            <p>Laureatams taip pat bus pasiūlytas bendradarbiavimas su geriausiais Lietuvos muzikos festivaliais. Konkurso nugalėtojams bus apdovanoti ir profesionaliais kūrinių premjerų įrašais.</p>

            <b>VIII. Konkurso kolektyvas</b>
            <p>Kompozicijas 2-ajame ture atliks Future Symphony Orchestra (FSO), meno vadovas ir dirigentas Adomas Morkūnas-Budrys.</p>
            <p>FSO – simfoninis orkestras, suburtas specialiai šiam konkursui. Orkestro nariai – profesionalūs atlikėjai ir Lietuvos Muzikos ir Teatro Akademijos (LMTA) studentai.</p>

            <b>IX. Konkurso sąlygos</b>
            <ul>
                <li>Viso konkurso metu išsaugomas visiškas kompozitorių anonimiškumas iki pat apdovanojimų ceremonijos;</li>
                <li>Vienas autorius gali pateikti tik vieną partitūrą;</li>
                <li>Konkurso dalyviai sutinka, kad bus viešinama jų pateikta informacija ir nuotraukos;</li>
                <li>Visi kompozitoriai gali dalyvauti orkestro repeticijose ir bendradarbiauti su dirigentu. <b>Repeticijos įrašomos, o įrašai atsiunčiami kompozitoriams per 12 val. po repeticijos pabaigos</b>. Konkursas pasilieka teisę publikai pristatyti dirigento pasirinktą kūrinio interpretaciją;</li>
                <li>FSO pasilieka teisę kūrinį pridėti į savo repertuarą neperduodant teisės kitiems asmenims, taip pat neatlygintinai transliuoti ir talpinti internete neribotam laikui;</li>
                <li>Dalyviai, registruodamiesi į konkursą, patvirtina savo duomenų tikslumą; nesilaikantys Konkurso nuostatų, terminų ar besielgiantys nesąžiningai – diskvalifikuojami iš konkurso;</li>
                <li>Konkurso rengėjai pasilieka teisę keisti konkurso nuostatus.</li>
            </ul>

            <div id="score"><b><i>Partitūrų reikalavimai:</i></b></div>
            <ul>
                <li>Kūrinio trukmė: 8-12 min.;</li>
                <li>Informaciją apie instrumentuotę rasite <a href="/orchestration.txt" class="link" download>čia</a>.<br>
                    Kūriniai simfoniniam orkestrui su elektronika ir kūriniai solistui ir orkestrui konkurse nedalyvauja. Bet kokie papildomi kūrinio elementai (choreografija, orkestro persodinimas ir pan.) privalo būti suderinti iki 2020 m. liepos 5 d.</li>
                <li>Siunčiami kūriniai turi būti originalūs, sukurti specialiai šiam konkursui ir prieš tai neatlikti gyvai;</li>
                <li>Siekiant išsaugoti kūrinių anonimiškumą vertinimo tikslais, kompozitorius partitūroje bei partijose negali pasirašyti savo vardu ir pavarde.</li>
            </ul>

            <b>X. Konkurso dalyvių apgyvendinimo, maitinimo ir kelionės organizavimas</b>
            <p>Kompozitorių dalyvavimas baigiamajame 2-ojo turo koncerte nėra privalomas (piniginiai prizai yra pervedami į nurodytą banko sąskaitą, įrašai atsiunčiami el. paštu). Kelionės apgyvendinimo, maitinimo ir kitas išlaidas dalyviai apmoka patys.</p><br><br>
        {/if}
    </div>
</Tab>

<style lang="stylus">
    .regulations
        line-height 1.65
        text-align justify
</style>