import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Footer from "../Footer";
import Header from "../Header";
import Rubrik from "../Rubrik";
import UpArrow from "../UpArrow";
import UbbidientePortrait from "../../images/rubbidiente/rubbidiente-portrait.jpg";
import GuaranaSmall from "../../images/rubbidiente/guarana_small.jpg";
import PiantaSmall from "../../images/rubbidiente/pianta_small.jpg";
import NoteamareSmall from "../../images/rubbidiente/noteamare_small.jpg";
import KulczyckiSmall from "../../images/rubbidiente/kulczycki_small.jpg";
import BottegaSmall from "../../images/rubbidiente/bottega_small.jpg";
import CanaleGrandeSmall from "../../images/rubbidiente/canale-grande_small.jpg";
import CaffeGrecoSmall from "../../images/rubbidiente/caffe-greco_small.jpg";
import AnticoCaffeGrecoSmall from "../../images/rubbidiente/antico-caffe-greco_small.jpg";
import VesuvioSmall from "../../images/rubbidiente/vesuvio_small.jpg";
import Caffettiera1Small from "../../images/rubbidiente/caffettiera-1_small.jpg";
import Caffettiera2Small from "../../images/rubbidiente/caffettiera-2_small.jpg";
import CaffeFruttaSmall from "../../images/rubbidiente/caffe-frutta_small.jpg";

const images = [
    {
        src: "https://fabio-tosques.de/images/rubbidiente/guarana.jpg",
        title: "Fig. 1",
        description: "Guarana"
    },
    {
        src: "https://fabio-tosques.de/images/rubbidiente/pianta.jpg",
        title: "Fig. 2",
        description: "Pianta di caffè"
    },
    {
        src: "https://fabio-tosques.de/images/rubbidiente/noteamare.jpg",
        title: "Fig. 3",
        description: "Enjoying Coffee"
    },
    {
        src: "https://fabio-tosques.de/images/rubbidiente/kulczycki.jpg",
        title: "Fig. 4",
        description: "Franz Koltschitzky"
    },
    {
        src: "https://fabio-tosques.de/images/rubbidiente/bottega.jpg",
        title: "Fig. 5",
        description: "Bottega del caffè di Franz Koltschitzky"
    },
    {
        src: "https://fabio-tosques.de/images/rubbidiente/canale-grande.jpg",
        title: "Fig. 6",
        description: "Il ritorno del Bucintoro"
    },
    {
        src: "https://fabio-tosques.de/images/rubbidiente/caffe-greco.jpg",
        title: "Fig. 7",
        description: "Caffè Greco: Saletta"
    },
    {
        src: "https://fabio-tosques.de/images/rubbidiente/antico-caffe-greco.jpg",
        title: "Fig. 8",
        description: "Caffè Greco: Saletta"
    },
    {
        src: "https://fabio-tosques.de/images/rubbidiente/vesuvio.jpg",
        title: "Fig. 9",
        description: "Napoli e il Golfo visti da Mergellina"
    },
    {
        src: "https://fabio-tosques.de/images/rubbidiente/caffettiera-1.jpg",
        title: "Fig. 10",
        description: "Diversi tipi di “napoletana”, dalla classica alla più moderna"
    },
    {
        src: "https://fabio-tosques.de/images/rubbidiente/caffettiera-2.jpg",
        title: "Fig. 11",
        description: "La Moka Express inventata da Alfonso Bialetti nel 1933"
    },
    {
        src: "https://fabio-tosques.de/images/rubbidiente/pianta.jpg",
        title: "Fig. 12",
        description: "Pianta di caffè"
    },
    {
        src: "https://fabio-tosques.de/images/rubbidiente/caffe-frutta.jpg",
        title: "Fig. 13",
        description: "Chicchi di caffè"
    }
];

function Ubbidiente(props) {

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <div id="Wrapper" className="container_14">
            <div id="Header">
                <Header id={props.author} />
                <div className="grid_9">
                    <h1 id="main_title">“Oro nero” – La cultura del caffè in
                        Italia: usi, costumi, teatro e letteratura</h1>
                    <p id="author">Roberto Ubbidiente, Berlin</p>
                </div>
                <Rubrik />
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={images}
                controller={{ closeOnBackdropClick: true }}
                plugins={[Captions]}
                captions={{ showToggle: true, descriptionMaxLines: 5, descriptionTextAlign: "center" }}
            />

            <div id="Teasers" className="clearfix">
                <div className="grid_9">
                    <h1>A mo’ di premessa</h1>
                    <figure className="imageleft">
                        <p style={{ width: "100px" }}>Fig. 1: Guarana
                        </p>
                        <button type="button" onClick={() => { setOpen(true); setIndex(0); }}>
                            <img src={GuaranaSmall} width="100"
                                height="138" alt="Guarana" />
                        </button>
                    </figure>

                    <p>
                        Parlare di caffè da un punto di vista prettamente antropologico e
                        storico-culturale non può farcene dimenticare l’aspetto meramente
                        economico-commerciale non privo di rilevanza. Se per lo studioso dei
                        <i>Cultural Studies</i> tale bevanda rappresenta un fenomeno all’origine di
                        mode e modi di consumo che hanno largamente influenzato i costumi
                        occidentali e i luoghi e le forme di sociabilità degli ultimi tre
                        secoli, per l’economista di professione il caffè resta una merce che
                        ogni anno dà vita – a livello mondiale – al più alto volume di
                        scambi dopo il petrolio. Secondo il rapporto 2011 dell’International
                        <i>Coffee Organization</i> (ICO), infatti, solo nel periodo 2010–2011 il
                        totale della produzione mondiale di caffè è stato stimato in 133,3
                        milioni di sacchi, con un incremento dell’8,2 per cento rispetto
                        all’anno precedente (cfr. <a href="http://www.ico.org"
                            target="_blank" rel="noreferrer">International Coffee
                            Organization</a>). Oltre l’86 per cento  della produzione mondiale
                        è costituito dai dieci maggiori paesi esportatori, otto dei quali
                        (Brasile, Vietnam, Colombia, Etiopia, Guatemala, Messico, Honduras e
                        Uganda) hanno registrato un significativo aumento della produzione con
                        un effetto positivo nelle relative bilance dei pagamenti. Considerando
                        che i Paesi produttori di caffè appartengono al cosiddetto “Terzo
                        mondo”, va rilevato che questo prodotto rappresenta una delle
                        principali fonti di sostentamento delle economie in via di sviluppo.
                        Parallelamente alla produzione sono aumentate anche le esportazioni a
                        livello mondiale.
                    </p>

                </div>
                <div className="grid_5">
                    <div className="abouttheauthor">
                        <img src={UbbidientePortrait} width="100"
                            height="140" alt="Roberto Ubbidiente - Portrait" />
                        <div className="abouttheauthorfont"><br /><br />
                            <b>Roberto Ubbidiente</b>, Dr., Lehrkraft für besondere
                            Aufgaben am Institut für Romanistik der
                            Humboldt-Universität zu Berlin. Studium der
                            Geisteswissenschaften an der Universität Salerno
                            (Italien), Promotion am Institut für Romanistik der
                            Universität Wien, Übersetzer- und Dolmetscherausbildung
                            an der Universität Wien, seit 1999 an der
                            Humboldt-Universität.
                        </div>
                        <div className="clearfloat"></div>
                    </div>
                </div>
            </div>

            <div id="Main">
                <div id="Articles" className="grid_14">
                    <section id="posts">
                        <article className="post">
                            <p>
                                In totale, nel periodo che va dall’aprile 2010 al marzo 2011 sono
                                stati esportati 101 milioni di sacchi da 60 kg ciascuno, toccando un
                                livello senza precedenti. Il forte aumento delle esportazioni è dovuto
                                ad un incremento della domanda mondiale, tanto che, nonostante i record
                                battuti, si teme che le esportazioni non riusciranno alla fine a
                                soddisfare l’intera domanda, in costante aumento su tutti i mercati
                                nazionali (il consumo globale per il 2010 è stato pari a 134 milioni di
                                sacchi). Tutto ciò fa del caffè un vero e proprio “oro nero” il
                                cui volume d’affari, contrariamente ad altri prodotti, anche di prima
                                necessità, non sembra conoscere crisi.
                            </p>

                            <figure className="imageright">
                                <p style={{ width: "225px" }}>Fig. 2: Pianta di caffè
                                </p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(1); }}>
                                    <img src={PiantaSmall} width="225"
                                        height="311" alt="Pianta di caffè" />
                                </button>
                            </figure>

                            <p>
                                Per quanto riguarda, invece, il consumo mondiale <i>pro capite</i>, si constata
                                non senza sorpresa che al primo posto risultano i paesi scandinavi con
                                10 kg annui, seguiti dall’Italia con 4,4 kg. Dei 400 miliardi di
                                tazzine di caffè consumate ogni anno in tutto il mondo ben 600 vengono
                                bevute pro capite in Italia. Di queste il 70 per cento viene consumato
                                in casa, il 20 per cento al bar e il 10 per cento sul posto di lavoro.
                                Ma le fredde statistiche non rendono ragione delle differenze culturali
                                e di costume. Sappiamo, infatti, che nei paesi nordici e negli USA la
                                principale funzione del caffè è quella di accompagnare, durante i
                                pasti, ogni tipo di piatto. In Italia, invece, il caffè è riservato
                                alla colazione o alle pause nel corso della giornata. E va bevuto
                                ristretto, denso e cremoso. Ciò identifica il caffè con l’espresso,
                                che per gli italiani viene ad essere sinonimo e unico modo di preparare
                                l’“oro nero”. Come regalo, il caffè ha una sua simbologia legata
                                all’amicizia e all’amore. Sin dal Seicento, infatti, era diffusa
                                l’usanza, per i corteggiatori, di regalare alle proprie adorate vassoi
                                colmi di caffè quale prezioso pegno del loro amore, mentre
                                l’accoppiata di zucchero e caffè rappresenta ancora oggi –
                                soprattutto nel costume meridionale – un classico regalo in occasione
                                di visite di condoglianza o di cortesia.
                            </p>

                            <h1>1 Dall’Oriente alla conquista dell’Europa</h1>

                            <h2>1.1 In principio era … il mistero</h2>

                            <p>
                                Come per tutte le cose buone e apprezzate in cucina (si pensi alla
                                pizza, alla pasta ecc.), anche per l’“oro nero” sono in molti a
                                vantarsi di averlo scoperto e di avergli dato i natali, con la
                                conseguenza che il caffè è oggi considerato bevanda nazionale in molti
                                Paesi, dal Brasile all’Italia. Se, dunque, non v’è dubbio che
                                l’espresso italiano sia il tipo di caffè più conosciuto al mondo,
                                resta da appurare se il caffè sia la più italiana delle bevande
                                esotiche ovvero la più esotica delle bevande italiane.
                            </p>

                            <p>
                                In realtà, poco si sa storicamente dell’origine di questa bevanda e
                                molte sono, invece, le leggende legate alla sua scoperta più o meno
                                casuale. Un aiuto a chiarire la <i>vexata quaestio</i> della sua genesi può
                                venire dall’origine della pianta e dall’analisi del suo nome: la
                                <i>Coffea arabica</i> è infatti originaria dell’Etiopia e il suo nome
                                deriverebbe dalla regione di Kaffa in cui il caffè sarebbe stato
                                originariamente scoperto.
                            </p>

                            <p>
                                Tuttavia, secondo Pellegrino Artusi (1820–1911), autore del
                                celeberrimo trattato <i>La scienza in cucina e l’arte del mangiar bene</i>
                                (1891), il miglior caffè è quello proveniente dalla città yemenita di
                                Moka e ciò potrebbe fornire la chiave per individuarne il luogo
                                d’origine. Per l’Artusi, infatti, il caffè sarebbe nato casualmente
                                dall’osservazione, fatta da alcuni monaci (altri vogliono da un
                                pastore di nome Kaldi), che le capre, dopo aver mangiato le bacche rosse
                                di un certo arbusto, diventavano più vivaci e irrequiete. Così, per
                                combattere i colpi di sonno, principale nemico delle preghiere notturne,
                                i monaci avrebbero provato a rendere commestibili anche per l’uomo le
                                bacche di quella pianta, abbrustolendole, macinandole e facendone un
                                infuso. Un’altra leggenda vuole, invece, che le bacche bollite
                                dell’arbusto abbiano salvato la vita ad un arabo di nome Omar e ai
                                suoi compagni, condannati a morire di fame nel deserto vicino alla
                                città di Moka.
                            </p>

                            <p>
                                Stando agli enciclopedisti francesi, riferimenti al caffè si
                                troverebbero addirittura nel testo dell’<i>Odissea</i>, né mancano, nella
                                leggendaria genesi del caffè, echi biblici e religiosi in genere.
                                Così, sarebbero in realtà chicchi di caffè sia il «grano tostato»
                                regalato da Abigail a David in segno di riconciliazione (cfr. 1 Sam
                                25, 18ss.) sia le «pietre [= bacche] preziose» regalate dalla regina di
                                Saba a Sansone (cfr. 1 Re 10, 2ss.). Né i riferimenti religiosi restano
                                circoscritti al solo ambito giudaico-veterotestamentario, ché di caffè
                                l’arcangelo Gabriele avrebbe fatto dono a Maometto in persona, onde
                                vincere la sonnolenza.
                            </p>

                            <p>
                                Se la leggenda fa risalire l’origine del caffè all’VIII secolo
                                a.C., le prime testimonianze storicamente accertate sulla bevanda sono
                                di molto posteriori. È infatti all’incirca intorno all’anno Mille
                                che Avicenna prescrive il <i>bunc</i> (nome abissino del caffè) come forte
                                antidepressivo e digestivo (soprattutto per cibi troppo pesanti e
                                grassi).
                            </p>

                            <p>
                                Sulla scia di Avicenna, il caffè interessò medici e scienziati
                                occidentali già prima di approdare in Europa. Essi ne studiarono le
                                caratteristiche e gli effetti sull’uomo, lasciando molti studi nella
                                trattatistica cinque-seicentesca. La prima descrizione “medica” del
                                caffè stampata in Europa fu opera di un medico di Augusta di nome
                                Leonhard Rauwolf che tra il 1573 e il 1576 visitò Gerusalemme e il
                                Medio Oriente. Nel suo diario di viaggio, pubblicato nel 1582 col titolo
                                <i>Reiß in die Morgenländer</i>, egli loda il «guet getränck» per le sue
                                proprietà curative, soprattutto per lo stomaco, offrendoci uno spaccato
                                sul modo in cui essa viene consumata in quelle terre lontane:
                            </p>

                            <p className="longcitation">
                                ein guet getränck, welliches sie hoch halten, Chaube von jnen genennet,
                                das ist gar nahe wie Dinten so schwartz vnd in Gebresten, sonderlich
                                dess Magens, gar dienstlich. Dises pflegens am Morgen frü, auch an
                                offnen orten, von jedermeniklich one alles abscheuwen zu trincken, auß
                                jrrdinen vnnd Porcellanischen tieffen Schälein, so warm alß sies
                                könden erleiden, setzen offt an, thun aber kleine trüncklein, vnd
                                lassens gleich weitter, wie sie neben einander im krayß sitzen, herumb
                                gehen. Zu dem Wasser nehmen sie Frücht Bunnu von Innwohnern genennet,
                                die außen inb jrer größe vnd farb, schier wie die Lorbeer, mit zwey
                                dünnen Schelflein umbgeben, anzusehen vnd fernerer jren alten berichten
                                nach, auss India gebracht werden [...]. Dieser Tranck ist bey jnen sehr
                                gemein, darumb dann deren, so da solches ausschencken, wie auch der
                                Krämer, so die Frücht verkauffen, in Batzar hin jnd wider nit wenig zu
                                finden; so haltens das auch wol so hoch vnd gesund seyn, als wir bey vns
                                den Wermutwein, oder noch andere Kräuterwein.<sup><a href="#fn1"
                                    name="fz1">1</a></sup>
                            </p>

                            <p>
                                Di qualche decennio successivo è, invece, la descrizione
                                dell’“acqua nera” e delle sue proprietà digestive fatta da Jean
                                de Thévenot, altro viaggiatore europeo in Vicino Oriente. In ambito
                                italiano si distinguono gli studi di Prospero Alpini e del medico
                                bolognese Angelo Rambaldi. Quest'ultimo si dedicò all’<i>Ambrosia arabica</i>
                                (1691),<sup><a href="#fn2" name="fz2">2</a></sup> rilevando che il
                                caffè
                            </p>

                            <p className="longcitation">
                                non solo teneva svegli senza diminuzioni di forze, ma corroborava lo
                                stomaco, asciugava le flussioni, preservava dai calcoli e dalla gotta,
                                sradicava le ostruzioni, quietava i tumulti delle parti naturali, cioè
                                di “affetti ipocondriaci”, sollevava gli idropici, raffrenava gli
                                isterici, apriva copiosamente le urine e le “purghe” delle donne,
                                aiutava le gravide, preservava dalle febbri intermittenti col solo fumo,
                                aguzzava la vista e faceva effetti che per essere fra di loro contrari,
                                parevan fuori dall’ordine di natura.<sup><a href="#fn3"
                                    name="fz3">3</a></sup>
                            </p>

                            <p>
                                Una diagnosi medica, sia pur non basata su cognizioni specifiche, ci
                                viene dalla cerchia degli Illuministi meneghini, sancendo la giustezza
                                della bevanda per questo tipo di intellettuale:
                            </p>

                            <p className="longcitation">
                                Il caffè rallegra l’animo, risveglia la mente, in alcuni è
                                diuretico, in molti allontana il sonno, ed è particolarmente utile alle
                                persone che fanno poco moto e che coltivano le
                                scienze.<sup><a href="#fn4" name="fz4">4</a></sup>
                            </p>

                            <figure className="imageleft">
                                <p style={{ width: "229px" }}>Fig. 3: Enjoying Coffee
                                </p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(2); }}>
                                    <img src={NoteamareSmall} width="229"
                                        height="250" alt="" />
                                </button>
                            </figure>

                            <p>
                                Nel corso del Cinquecento il caffè lascia i territori originari
                                dell’Arabia e dello Yemen per diffondersi prima in Turchia e di lì
                                conquistare l’Europa e le Colonie del Nuovo Mondo. Probabilmente al
                                1475 risalgono le prime botteghe di caffè di Costantinopoli. Pertanto,
                                nonostante l’origine araba, nell’immaginario collettivo europeo
                                sarà la Turchia ad essere associata alla bevanda nera. Ciò non a caso,
                                visto che, come avverte Maurizio Galli,
                            </p>

                            <p className="longcitation">
                                [i]n Turchia il caffè è un’istituzione che ha i suoi ministri, i suoi
                                sacerdoti e i suoi ferventi. La carica di «gran caffettiere» (<i>kahveci
                                    başı</i>) presso il Sultano è più importante di quella di primo ministro,
                                perché, se non altro, è più stabile. […] Poiché qui si beve del
                                caffè da mattina a sera, a tutte le ore del giorno, senza ragione,
                                senza contare, come si fuma una sigaretta; da tutti, dovunque. Dal moka
                                delizioso, al profumo inebbriante [<i>sic</i>], che lo schiavo vi offre nelle
                                case turche, servito in minuscole tazze introdotte negli <i>zarfs</i>
                                d’argento, al modesto caffè mescolato a ceci abbrustoliti e ridotti
                                in polvere finissima, che si vende a uno o due soldi negli innumerevoli
                                caffè della città, il consumo che si fa di questa bevanda è favoloso.
                                Nelle piazze, nei cortili delle moschee, ad ogni angolo di via –
                                propizio –, si trovano caffettieri ambulanti che in un primitivo
                                fornello fanno cuocere del caffè che servono ai numerosi clienti di
                                passaggio da mane a sera.<sup><a href="#fn5" name="fz5">5</a></sup>
                            </p>

                            <p>
                                La straordinaria diffusione del caffè nella società turca aveva del
                                resto già fatto restare a bocca aperta l’anonimo compilatore degli
                                <i>Annali Universali di Statistica</i> del 1825, allorquando notava che
                            </p>

                            <p className="longcitation">
                                [l]a passione degli Orientali per questa bevanda è al di là d’ogni
                                dire. In tutti gli ordini dello stato, gli uomini, le donne, i
                                fanciulli ne prendono ad ogni istante del giorno. Dappertutto ove si
                                vada, qualunque visita si faccia, fra i grandi, fra gli artigiani, fra
                                i Maomettani, fra i Cristiani, nelle case, negli uffici, nei
                                magazzini, nelle botteghe, alla città, alla campagna, i padroni di
                                casa cominciano sempre col presentare il caffè: se la visita è lunga,
                                si porta una seconda, una terza tazza.<sup><a href="#fn6"
                                    name="fz6">6</a></sup>
                            </p>

                            <h2>1.2 “Wiener Blut”</h2>
                            <p>
                                Dopo la diffusione in Anatolia, nel corso del Cinquecento, dovranno
                                passare quasi due secoli prima che l’“oro nero” possa diffondersi
                                in Europa. Secondo la vulgata, il caffè sarebbe arrivato in Europa nel
                                1683 in seguito al secondo assedio turco della città di Vienna.
                                Sbaragliati gli Ottomani, infatti, nel loro accampamento furono
                                rinvenuti, insieme a merci e tesori vari, sacchi di strani chicchi
                                tostati fin’allora sconosciuti agli Occidentali. Stando alle fonti
                                storiche, l’accampamento turco contava ben ventidue tende nelle quali
                                i vincitori rinvennero viveri di ogni genere, tra cui:
                            </p>

                            <p className="longcitation">
                                Tausende von Tieren – Ochsen, Kamele, Maultiere, Schafe – Tausende
                                Säcke voll Getreide und Reis. Unabsehbar die Töpfe voll der herrlich
                                orientalischen Gewürze. Vieles war darunter, was die Bürger Wiens zum
                                erstenmal sahen: exotische Tiere und so manchen Topf oder Sack,
                                angefüllt mit Dingen, deren Verwendungszweck völlig unbekannt war.
                                Unter anderem fand man zahlreiche Säcke mit Bohnen, anderen allerdings,
                                als man hierorts kannte.<sup><a href="#fn7" name="fz7">7</a></sup>
                            </p>

                            <figure className="imageright">
                                <p style={{ width: "230px" }}>Fig. 4: Franz Koltschitzky
                                </p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(3); }}>
                                    <img src={KulczyckiSmall} width="230"
                                        height="315" alt="Franz Koltschitzky" />
                                </button>
                            </figure>

                            <p>
                                Fu Franz Koltschitzky, una sorta di “turco viennese” di origine
                                polacca, poliglotta, cosmopolita e viaggiatore, a riconoscere in quei
                                «Bohnen» gli stessi chicchi che aveva visto nel corso dei suoi viaggi
                                nelle caffetterie di Istanbul. Fiutato l’affare, come ricompensa per i
                                servigi resi (aveva avuto un ruolo fondamentale nel recapitare dispacci
                                militari segreti) Koltschitzky si fece regalare i sacchi di caffè
                                dall’imperatore asburgico e, forte del <i>Privileg des Kaffeeausschanks</i>
                                concessogli dal monarca, aprì poco dopo “Zur blauen Flasche”: la
                                prima bottega in città (e, a quanto pare, in Occidente) in cui si
                                mescesse il cosiddetto “vino d’Arabia”.
                            </p>

                            <p>
                                Inizialmente, i viennesi non sembrano trovare di proprio gusto la
                                bevanda esotica, ma quando Koltschitzky vi aggiunge latte e miele, dando
                                così vita all’antenato della <i>Wiener Melange</i>, è un vero e proprio
                                trionfo.
                            </p>

                            <figure className="imageleft">
                                <p style={{ width: "275px" }}>Fig. 5: Bottega del caffè di
                                    Franz Koltschitzky
                                </p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(4); }}>
                                    <img src={BottegaSmall} width="275"
                                        height="198" alt=" Bottega del caffè di Franz Koltschitzky" />
                                </button>
                            </figure>

                            <p>
                                Se è vero, che la storia di questo primo caffettiere viennese è più
                                legata alla leggenda che alla storia, è anche vero che il primo caffè
                                di Vienna aprì i battenti proprio in quegli anni (precisamente nel
                                1685) per opera di un certo Johannes Diodato. Dopodiché le cronache
                                viennesi narrano di caffè che spuntano come funghi. Certo, queste prime
                                caffetterie sono ancora lontane dall’essere quell’istituzione
                                socio-culturale che diventerà più tardi il <i>Kaffeehaus</i> della capitale
                                asburgica. In considerazione delle ristrettezze dovute al lungo assedio
                                e che caratterizzarono ancora l’immediato dopoguerra, invano vi si
                                sarebbe cercata quella <i>G’mütlichkeit</i> che caratterizzerà più avanti
                                il tipico caffè viennese ottocentesco. Anzi, a quanto pare
                                l’arredamento era piuttosto spartano:
                            </p>

                            <p className="longcitation">
                                Es waren also, um es genauer zu bezeichnen, Kaffeekatakomben, die, nur
                                mit dem allernotwendigsten Material ausgerüstet, die Leute zum Genuß
                                dieses orientalischen Getränks einluden. Ein offenes Feuer vor der Tür
                                und türkische Embleme an der Hausmauer warben für diese ersten
                                Kaffeeschenken.<sup><a href="#fn8" name="fz8">8</a></sup>
                            </p>

                            <p>
                                In realtà, stando alle fonti storiche, i primi caffè europei aprirono
                                i battenti già alla metà del secolo e quindi ben prima delle
                                “catacombe” viennesi. Tuttavia, la diffusione della nuova bevanda
                                nell’Europa cristiana e cattolica non poteva dirsi certo
                                incontrastata. In particolare, il fatto che il “vino d’Arabia”
                                provenisse dall’Oriente islamico attraverso l’Impero ottomano
                                contribuì a generare remore e pregiudizi di natura religiosa e
                                culturale nei suoi confronti, tanto che non si tardò a definirne
                                “diabolici” gli effetti. A ciò spingevano soprattutto
                                considerazioni in merito al suo colore (nero come gli Inferi) e al suo
                                sapore (amaro e scottante come le pene e il fuoco dell’Inferno).
                                Così, il caffè fu oggetto di un vero e proprio ostracismo messo in
                                atto da ambienti conservatori che in esso vedevano un pericolo per i
                                valori e le tradizioni avite. Tracce di questa avversione, che di lì a
                                poco diventerà sinonimo di misoneismo e antimodernità, sono
                                riscontrabili nel celebre giudizio del cerusico secentista Francesco
                                Redi:
                            </p>
                            <p className="quote">
                                Beverei prima il veleno
                                <br />
                                che un bicchier che fosse pieno
                                <br />
                                dell’amaro e reo caffè!
                                <br />
                                […]
                                <br />
                                E se in Asia il musulmano
                                <br />
                                se lo cionca a precipizio
                                <br />
                                mostra aver poco giudizio!<sup><a href="#fn9" name="fz9">9</a></sup>
                            </p>

                            <p>
                                In questo “scontro tra culture” <i>ante litteram</i> si arriverà a
                                chiedere al Papa di scomunicare il caffè – bevanda “pagana” – e
                                tutti coloro che ne avrebbero fatto uso, ai quali si arrivò a predire
                                che il giorno del Giudizio universale le loro anime sarebbero uscite
                                dalla tomba nere come i fondi del caffè. Fortunatamente il <i>Pontifex
                                    maximus</i>, dopo aver assaggiato la nuova bevanda, ne dichiarò lecito il
                                gusto, aprendole le porte – anzi: i porti (Venezia, Marsiglia e
                                Amsterdam) – della Cristianità. Delle prime botteghe di caffè furono
                                quindi aperte in Italia (1645), in Inghilterra (1652) e a Parigi (1672),
                                anche se per avere il primo caffè a Berlino bisognerà attendere fino
                                al 1721.
                            </p>

                            <p>
                                Di lì a poco Johann Sebastian Bach canterà le lodi della bevanda nella
                                celebre <i>Kaffeekantate</i>, composta nel 1734–5 su testo di Picander (<i>alias</i>
                                Christian Friedrich Henrici), la cui protagonista, la giovane Liesgen,
                                è un’appassionata bevitrice di caffè, sfidando in questo il divieto
                                paterno:
                            </p>
                            <p className="quote">
                                Ei! wie schmeckt der Coffee süße,
                                <br />
                                Lieblicher als tausend Küsse,
                                <br />
                                Milder als Muskatenwein.
                                <br />
                                Coffee, Coffee muß ich haben,
                                <br />
                                Und wenn jemand mich will laben,
                                <br />
                                Ach, so schenkt mir Coffee ein!<sup><a href="#fn10"
                                    name="fz10">10</a></sup>
                            </p>
                            <p>
                                Intanto, la diffusione del caffè (e dei Caffè) in Europa sembra
                                inarrestabile, anche per merito di imprenditori italiani come il
                                palermitano Francesco Procopio dei Cutelli, che nel 1686 aprì il primo
                                caffè di Parigi, il celebre “Le Procope”.
                            </p>

                            <h2>1.3 L’oro nero della Serenissima</h2>

                            <p>
                                In Italia, il caffè fece il suo ingresso attraverso i grandi porti
                                delle rotte commerciali con l’Oriente, primo tra tutti Venezia (da
                                sempre in prima fila negli scambi commerciali con i paesi dell’Est) in
                                cui il primo carico di caffè documentato fu sbarcato nel 1624. Non è
                                perciò casuale che una delle più antiche e prestigiose
                                “caffetterie” italiane – il “Caffè Florian” – abbia visto
                                la luce proprio sotto i portici di Piazza S. Marco.
                            </p>

                            <figure className="imageright">
                                <p style={{ width: "210px" }}>Fig. 6: Il ritorno del Bucintoro
                                </p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(5); }}>
                                    <img src={CanaleGrandeSmall} width="210"
                                        height="177" alt="Il ritorno del Bucintoro" />
                                </button>
                            </figure>

                            <p>
                                La cultura del caffè a Venezia gode di secolare e radicata tradizione,
                                se è vero che ancora nel 1904 dalle pagine de «La Lettura» Pompeo
                                Molmenti si chiedeva:
                            </p>

                            <p className="longcitation">
                                Quante cose hanno veduto e udito le pareti dei caffè veneziani, dove si
                                potrebbe rintracciare la storia della vita intima della città
                                singolare, dove il commercio, la maldicenza, gli amori ordiscono ancora
                                le loro tele. d[<i>sic</i>]ove restano ancora nell’aria un po’ di profumo
                                della vecchia ilarità veneziana e un po’ della piacevolezza di
                                spirito dei nostri nonni!<sup><a href="#fn11" name="fz11">11</a></sup>
                            </p>

                            <p>
                                Finendo, poi, per constatare:
                            </p>
                            <p className="longcitation">
                                Nessuno, più del veneziano, ama trascorrere le ore nelle piccole ed
                                eleganti stanze dei suoi [= di Venezia] caffè, sorbendo a centellini
                                l’amaro succo.<sup><a href="#fn12" name="fz12">12</a></sup>
                            </p>

                            <p>
                                A quanto pare, la prima “Bottega” veneziana aprì i battenti nel
                                1683 “sotto le Procuratie nuove”, ossia sul lato Sud di Piazza San
                                Marco. Ad essa seguiranno altri ventitré caffè, tutti sulla stessa
                                Piazza, tra cui il più celebre è senz’altro “Alla Venezia
                                trionfante”, aperto nel 1720 da Floriano Francesconi e successivamente
                                diventato l’attuale “Caffè Florian”.
                            </p>

                            <p>
                                La moda del caffè non tardò ad estendersi da Venezia a tutta la
                                terraferma veneta. Tra i più celebri caffè veneti il celeberrimo
                                <i>Caffè Pedrocchi</i> di Padova fornisce un esempio di identificazione di
                                un’intera comunità urbana con il più popolare luogo di sociabilità
                                cittadina. Come, infatti, ebbe a notare Giuseppe Adami, «tutto il cuore
                                di Padova puls[a] in una bottega di
                                caffè»,<sup><a href="#fn13" name="fz13">13</a></sup> avvertendo che
                            </p>

                            <p className="longcitation">
                                [d]a noi, oramai per una ragione di abitudini che ci è venuta col
                                sangue, ogni faccenda, ogni affare, ogni movimento della vita quotidiana
                                si repercote [<i>sic</i>] e si svolge al tavolino del caffè; e ad esso
                                convengono così i minuti pettegolezzi della cronaca mondana come le
                                grandi negoziature che spostano ed agitano terre e agricoltori, come le
                                quistioni [<i>sic</i>] politiche e, nei momenti di crisi, le idee audaci e le
                                audacissime decisioni.<sup><a href="#fn14" name="fz14">14</a></sup>
                            </p>

                            <h2>1.4 All’ombra del Cupolone</h2>

                            <p>
                                Come capitale del retrogrado Stato pontificio la Città eterna non
                                possiede i presupposti per competere con le capitali europee e le altre
                                città più all’avanguardia sia strutturalmente sia dal punto di vista
                                economico e culturale. Per sua natura lo Stato ecclesiastico è
                                piuttosto restio a innovazioni e ammodernamenti e appare alquanto chiuso
                                verso possibili mode e influssi provenienti dall’estero (laddove
                                “estero” erano anche città come Venezia, Firenze, Torino e Napoli),
                                tanto più che in pieno Settecento la Chiesa si sente fortemente
                                minacciata dalla filosofia materialistica dell’Illuminismo e
                                dall’anticlericalismo che spesso accompagna le riforme dei sovrani
                                europei (risale a quest’epoca per es. la soppressione della Compagnia
                                di Gesù in molti Paesi cattolici governati da “despoti
                                illuminati”). La chiusura verso le mode e i costumi stranieri
                                riguarderà ogni aspetto della vita pubblica – e quindi anche la moda
                                delle “Botteghe del caffè”, che invece già spopolavano in altre
                                città italiane ed europee.
                            </p>

                            <p>
                                Alla fine, però, anche Roma dovrà cedere alla sempre più pressante
                                domanda proveniente soprattutto dai giovani rampolli europei che nella
                                Città eterna coronavano il loro <i>Grand tour</i> con un soggiorno di alcuni
                                mesi in cui non intendevano affatto rinunciare alla moda del caffè cui
                                li avevano abituati le città di provenienza. Il Papa autorizzò,
                                dunque, l’apertura delle “Botteghe” anche a Roma, riservandone
                                inizialmente l’uso ai soli stranieri. Una breve indagine onomastica
                                dei primi Caffè romani mostra chiaramente il carattere esotico cui il
                                nuovo tipo di locale e la bevanda in esso servita venivano associati:
                                tra le prima “Botteghe” della città troviamo il “Caffè Turco a
                                Campo Marzio”, il “Caffè degli Inglesi” o il “Caffè Greco” e
                                la “Bottega dal Caffè del Veneziano” in Piazza Sciarra, così
                                chiamato in onore ad una collaborazione avviata dai proprietari (la
                                famiglia Ricci) con un caffettiere della Serenissima. Fu in particolare
                                merito del “Caffè del Veneziano” quello di servire per la prima
                                volta lo zucchero a parte, ossia separato dalla tazzina; un uso che si
                                diffonderà ben presto in molte città.
                            </p>

                            <p>
                                Il 1860 fu un anno memorabile per la storia del “Veneziano”. Da poco
                                era stato rinnovato per l’ennesima volta l’arredamento del locale:
                                grandi specchi e lampadari a gas, divani di velluto rosso che spiccavano
                                sullo sfondo di una lussuosa tappezzeria verde. Ma proprio il rosso dei
                                divani e il verde della tappezzeria, unitamente al bianco del soffitto,
                                indussero la polizia ad aprire un’inchiesta per cospirazione contro lo
                                Stato pontificio, dal momento che la combinazione dei colori venne
                                interpretata come un sostegno al tricolore “italiano” e una forma di
                                propaganda ideologica delle idee risorgimentali e anticlericali.
                            </p>

                            <p>
                                Dieci anni dopo, all’indomani della Breccia di Porta Pia, in una Roma
                                ormai divenuta capitale del Regno, i Caffè saranno interessati dalla
                                battaglia politica tra i filopiemontesi e i sostenitori del Papa che si
                                ripercuoterà persino sul consumo e sui gusti degli avventori. Se,
                                infatti, i “Sabaudi” manifesteranno il loro appoggio al nuovo
                                Vittorio Emanuele e all’Italia unita consumando litri di
                                “piemontesissimo” vermouth (introdotto in città proprio
                                dall’esercito sabaudo) e chili di gelato “tricolore” al gusto di
                                fragola-limone-pistacchio, facendone, in tal modo, un simbolo di
                                appartenenza politica, i “papalini” da parte loro, risponderanno con
                                un gelato di nuova invenzione al gusto di limone e zabaione: i colori
                                della bandiera papale.
                            </p>

                            <h3>Un “Antico Greco” alla conquista della Città eterna</h3>
                            <p>
                                Agli occhi dei “touristi” stranieri Roma si presentava in tutta la
                                sua bellezza classica e barocca ma non offriva certo il <i>confort</i> e gli
                                standard delle altre capitali. La sia pure tardiva apertura dei Caffè
                                fu quindi salutata soprattutto dai numerosi giovani artisti stranieri
                                che trascorrevano lunghi periodi di studio in città. Una delle prime
                                testimonianze cui è legato il Caffè più celebre di Roma,
                                l’“Antico Caffè Greco”, è una lettera di Pierre Proudon che, a
                                proposito degli artisti che solevano ritrovarvisi, riferisce della
                                maldicenza e del pettegolezzo che caratterizzava i reciproci giudizi in
                                questa cerchia. Innumerevoli le carriere verbalmente stroncate,
                                altrettante le reputazioni distrutte – perfino Raffaello non si salva
                                dall’accusa di non essersi sufficientemente ispirato agli antichi. Va
                                da sé che gli autori di queste critiche sono sempre artisti mancati o
                                inetti, gente, dice Proudon, che ama perder tempo. Nell’Ottocento il
                                “Greco” godette di un successo incontrastato, rappresentando per
                                antonomasia il Caffè della capitale. Da allora la cultura del caffè a
                                Roma ha un indirizzo principe famoso in tutto il mondo: Via dei Condotti
                                86.
                            </p>

                            <figure className="imageleft">
                                <p style={{ width: "168px" }}>Fig. 7: Caffè Greco: Saletta
                                </p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(6); }}>
                                    <img src={CaffeGrecoSmall} width="188"
                                        height="250" alt="Caffè Greco: saletta" />
                                </button>
                            </figure>

                            <p>
                                Del fondatore ellenico dello storico “Caffè Greco” conosciamo solo
                                il nome italianizzato: Nicola di Maddalena. Per la sua “Bottega”
                                egli scelse un angolo di Roma – Via Condotti con l’adiacente Piazza
                                di Spagna – che nel Settecento risultava animato da artisti e
                                “touristi” stranieri, soprattutto tedeschi e scandinavi in genere,
                                che nelle immediate vicinanze avevano i loro <i>ateliers</i>. Fondato nel 1750,
                                il “Caffè Greco” fu subito un successo, tanto che il monolocale
                                iniziale risultò ben presto troppo piccolo per le orde di avventori che
                                ogni giorno lo prendevano letteralmente d’assalto. Infatti, il
                                “Greco” divenne subito meta fissa della colonia di artisti tedeschi
                                nonché letterati e musicisti stranieri di passaggio per la Città
                                eterna, tanto da renderne l’atmosfera del tutto particolare:
                            </p>

                            <figure className="imageright">
                                <p style={{ width: "224px" }}>Fig. 8: Caffè Greco: Saletta
                                </p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(7); }}>
                                    <img src={AnticoCaffeGrecoSmall} width="224"
                                        height="125" alt="Caffè Greco: saletta" />
                                </button>
                            </figure>

                            <p className="longcitation">
                                Gaie brigate di artisti vi affluivano; discussioni letterarie vi si
                                accendevano; e il Caffè […] ha veduto aggirarsi fra le sue mura, e
                                sedersi ai suoi tavoli, Goethe e Goldoni, Schopenhauer e Bizet, Böcklin
                                e Mendelssohn, Gogol e Gounod, Wagner e Lembach, Liszt e Berlioz,
                                Mickiewicz e Mark Twain, e moltissimi altri celebri artisti, musici,
                                letterati, pittori, filosofi, poeti fino a Coleman e a Cesare
                                Pascarella. Ed ognuno vi ha lasciato un’orma non banale del suo
                                passaggio: un dipinto, uno scritto, un disegno, una statuetta, una
                                caricatura, un sonetto.<sup><a href="#fn15" name="fz15">15</a></sup>
                            </p>

                            <p>
                                Ciò fa del “Greco” un piccolo museo ed una stratificazione
                                culturale della città. Il Caffè fa addirittura concorrenza ai
                                monumenti romani:
                            </p>

                            <p className="longcitation">
                                Hier [...] ist einer der atmosphäregesättigten Orte Roms, von denen
                                sich viele Reisende fast noch stärker angezogen fühlen als von den
                                römischen Kunstschätzen. Warum? »Es hängt einfach in den Wänden«,
                                schrieb der Rom-Kenner Reinhard Raffalt, »in dem verschossenen Plüsch,
                                in den mittelmäßigen Ölbildern, die aus Gründen unbezahlter
                                Rechnungen hier aufgehängt sind, an den Gipsfiguren und den
                                martervollen Stühlen – man sieht sie förmlich noch die genialischen
                                Pfeifenraucher, voll Nachlässigkeit und Einbildungskraft, in summa: es
                                ist der Hauch einer der Kunst zugeneigten Zeit, der uns anweht,
                                wohltuend verstaubt in unserer polierten
                                Epoche.«<sup><a href="#fn16" name="fz16">16</a></sup>
                            </p>

                            <h2>1.5 La celeberrima “napoletana”</h2>
                            <p>
                                Come a Milano, ma diversamente da Roma, nella Napoli settecentesca
                                aleggiava un forte spirito illuministico che non mancò di coinvolgere
                                l’uso e l’immagine del caffè, in linea con gli altri centri di
                                cultura europei. La Rivoluzione napoletana che nel 1799 portò la
                                Repubblica sotto il Vesuvio ha il suo personaggio-simbolo in una donna:
                                Eleonora Fonseca Pimentel. Di lei Vincenzo Cuoco scrive nel suo <i>Saggio
                                    sulla rivoluzione napoletana</i> del 1799:
                            </p>

                            <p className="longcitation">
                                Si spinse nella rivoluzione, come Camilla nella guerra, per solo amor
                                della patria. Giovinetta ancora, questa donna avea meritata
                                l’approvazione di Metastasio per i suoi versi. Ma la poesia formava
                                una piccola parte delle tante cognizioni che l’adornavano.
                                Nell’epoca della repubblica scrisse il Monitore napolitano, da cui
                                spira il più puro ed il più ardente amor di patria. Questo foglio le
                                costò la vita, ed essa affrontò la morte con un’indifferenza eguale
                                al suo coraggio. Prima di avviarsi al patibolo, volle bevere [<i>sic</i>] il
                                caffè, e le sue parole furono: «Forsan haec olim meminisse
                                iuvabit».<sup><a href="#fn17" name="fz17">17</a></sup>
                            </p>

                            <figure className="imageleft">
                                <p style={{ width: "350px" }}>Fig. 9: Napoli e il Golfo
                                </p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(8); }}>
                                    <img src={VesuvioSmall} width="350"
                                        height="177" alt="Napoli e il Golfo" />
                                </button>
                            </figure>

                            <p>
                                Aria del tutto diversa tirerà invece nella Napoli ottocentesca! A
                                proposito della capitale francese, Jules Michelet aveva sostenuto che
                                «Paris devient un grand café». In Italia quest’eredità viene
                                raccolta prima di tutto da Napoli, la più parigina delle città
                                italiane, dove per prima arriverà d’Oltralpe la moda del <i>Caffè
                                    chantant</i>, presto assurta a simbolo della <i>Belle Époque</i>. Ben presto,
                                però, Napoli vanterà una sua autonoma invenzione: il “Caffè
                                concerto” con un numero che sarà il prototipo del moderno
                                spogliarello! Entrambe le invenzioni hanno lo stesso padre, Luigi
                                Stellato, che in collaborazione col musicista Francesco Melber fu autore
                                della celebre canzone <i>’A cammesella</i>, un duetto tra una coppia di
                                sposini, in cui lui invita lei a denudarsi per mostrare le sue grazie.
                                In poco tempo i “Caffè concerto”, tra i quali gli eleganti
                                “Strasburgo”, “Birreria Monaco”, “Vermouth di Torino”, il
                                “Gambrinus” e il “Caffè Turco”, spuntano come i funghi, e in
                                una decina d’anni Napoli poteva vantare locali come il “Circo del
                                Varietà”, il “Salone Margherita”, l’“Eden”,
                                l’“Eldorado”, teatri che ospitarono le maggiori “chantose”
                                della <i>Belle Époque</i>, divenendo luogo preferito per il lancio delle nuove
                                canzoni. Ma il Caffè storico più famoso di Napoli doveva diventare il
                                “Gambrinus” che aprì i battenti nel 1890 e col tempo arrivò a
                                rappresentare il principale luogo di convegno di Napoli. Le sue sale,
                                impreziosite da dipinti, marmi, stucchi, divennero una piccola galleria
                                d’arte illuminata ben presto dall’energia elettrica. Le sale del
                                “Gambrinus” hanno visto passare tutti gli intellettuali e gli
                                artisti della Napoli otto-novecentesca tra cui Salvatore Di Giacomo,
                                Libero Bovio, Benedetto Croce, Eduardo De Filippo ed Enrico De Nicola.
                                Diretto concorrente del “Gambrinus” fu il “Caffè Turco”, aperto
                                nel 1885, in cui si organizzavano intrattenimenti musicali durante i
                                quali il proprietario, vestito alla turca con un <i>fez</i> rosso in testa, era
                                solito sorvegliare che tutto procedesse per il meglio.
                            </p>

                            <p>
                                Non ci volle molto perché il caffè diventasse la bevanda cittadina.
                                Anzi quello napoletano divenne presto il caffè per antonomasia! Esso
                                incarnò così bene lo spirito napoletano che fu anche oggetto di
                                celebri canzoni popolari: da <i>A tazz è cafè</i>, in cui la tazzina di
                                caffè – sotto dolce (per lo zucchero che vi si deposita) e sopra
                                amara (prima di girare col cucchiaino) – viene paragonata, in un
                                confronto volutamente a doppio senso, alla donna da conquistare,
                                anch’essa “sotto dolce” e “sopra amara” (ossia refrattaria
                                alle <i>avances</i> dello spasimante), alla più recente <i>Na tazzulelle ‘e
                                    cafè</i> di Pino Daniele, canzone-denuncia dei primi anni Ottanta contro il
                                degrado della città e il disinteresse dei politicanti.
                            </p>

                            <figure className="imageleft">
                                <p style={{ width: "318px" }}>Fig. 10: Diversi tipi di “napoletana”
                                </p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(9); }}>
                                    <img src={Caffettiera1Small} width="318"
                                        height="225" alt="Diversi tipi di “napoletana”" />
                                </button>
                            </figure>

                            <p>
                                A Napoli il caffè diventerà un vero e proprio rito, una cerimonia come
                                quella del tè in Giappone; una cerimonia con i suoi tempi, i suoi
                                ritmi, il suo officiante, i suoi strumenti “liturgici” e – perché
                                no? – i suoi trucchi per riuscire meglio. Insomma la manifestazione di
                                una vera e propria scuola di pensiero. Chi nell’immaginario comune
                                sintetizza al meglio la filosofia partenopea del caffè è senz’altro
                                Eduardo De Filippo, che nel suo <i>Questi fantasmi</i> la immortalò in un
                                memorabile monologo.
                            </p>

                            <p>
                                Ma il più celebre contributo partenopeo alla cultura del caffè in
                                Italia è senza dubbio la “napoletana”, che fu la caffettiera più
                                diffusa fin quando, nel 1933, la mente creativa dell’ingegnere
                                milanese Alfonso Bialetti non partorì la prima <i>Moka Express</i> dai chiari
                                tratti Art Decò.
                            </p>

                            <figure className="imageright">
                                <p style={{ width: "165px" }}>Fig. 11: La Moka Express
                                </p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(10); }}>
                                    <img src={Caffettiera2Small} width="165"
                                        height="150" alt="La Moka Express" />
                                </button>
                            </figure>

                            <p>
                                Il proverbiale senso di umanità e l’ospitale cordialità dei
                                napoletani hanno lasciato tracce nella loro cultura del caffè. Fu
                                infatti nei bar di Napoli che vide la luce quello che può essere
                                ritenuto il tipo più “buono” di caffè: il “sospeso”, ossia un
                                espresso non consumato da chi lo paga (consumazione “sospesa”,
                                appunto) ma destinato a qualche avventore meno abbiente di passaggio –
                                un piccolo-grande segno di solidarietà sociale.
                            </p>

                            <h1>2 Va in scena il caffè</h1>
                            <h2>2.1 La “Bottega” goldoniana</h2>
                            <p>
                                Nel Settecento il caffè, inteso sia come bevanda sia come luogo di
                                degustazione, si presenta come un’istituzione diffusa e accreditata in
                                ogni paese. Non è, perciò, strano che questa moda abbia lasciato
                                tracce nella letteratura coeva. Per l’Italia la consacrazione
                                letteraria si ha nelle commedie di Carlo Goldoni, attento osservatore
                                e critico della società veneziana. I <i>loci</i> goldoniani che riguardano la
                                bevanda più alla moda nel Settecento sono davvero numerosi. In
                                particolare, se ne parla in commedie come <i>L’uomo di mondo, La vedova
                                    scaltra, Le femmine puntigliose, La putta onorata, La buona moglie, Il
                                    cavaliere e la dama, L’avvocato veneziano, Il padre di famiglia, Il
                                    teatro comico, Il contrattempo, Le donne curiose</i>. Ma la consacrazione
                                definitiva avviene con <i>La bottega del caffè</i>.
                            </p>

                            <p>
                                L’assiduità del <i>topos</i> testimonia della moda in cui era incorso il
                                nuovo tipo di locale nella Venezia goldoniana, che – oltre ai
                                numerosissimi teatri – contava altrettante numerose “Botteghe”
                                dedite alla vendita del vino arabo. Con Goldoni il caffè riceve il suo
                                sigillo di bevanda della emergente classe borghese e imprenditoriale
                                della città, contrapposta a quella aristocratica (che beve cioccolata)
                                e al popolo (che beve vino).
                            </p>

                            <p>
                                Ma è <i>La sposa persiana</i> a contenere quella che è forse la prima
                                ricetta letteraria del caffè:
                            </p>
                            <p className="quote">
                                Ecco il caffè, signore, caffè in Arabia nato, […]
                                <br />
                                E dalle carovane in Ispaan portato.
                                <br />
                                L’arabo certamente sempre è il caffè migliore;
                                <br />
                                Mentre spunta da un lato, mette dall’altro il fiore.
                                <br />
                                Nasce in pingue terreno, vuol ombra, o poco sole.
                                <br />
                                Piantare ogni tre anni l’arboscel si suole.
                                <br />
                                Il frutto non è vero, ch’esser debba piccino,
                                <br />
                                Anzi dev’esser grosso, basta sia verdolino,
                                <br />
                                Usarlo indi conviene di fresco macinato,
                                <br />
                                in luogo caldo e asciutto, con gelosia guardato.
                                <br />
                                A farlo vi vuol poco;
                                <br />
                                Mettervi la sua dose, e non versarlo al fuoco.
                                <br />
                                Far sollevar la spuma, poi abbassarla a un tratto
                                <br />
                                Sei, sette volte almeno, il caffè presto è
                                fatto.<sup><a href="#fn19" name="fz19">19</a></sup>
                            </p>

                            <p>
                                I Caffè delle commedie goldoniane offrono uno spaccato sociale della
                                Venezia settecentesca non privo di un certo bozzettismo critico-sociale.
                                In generale, la Bottega del caffè di goldoniana memoria è già
                                attestata come luogo di sociabilità, ossia di incontro e scambio, ma
                                anche di appuntamento (cfr. <i>La vedova scaltra</i>, Atto I, sc. 3:
                                «Se non ci vedremo nell’albergo, ci troveremo al caffè»). Ben presto
                                il Caffè diventa anche luogo di seduzione e addirittura
                                adescamento. Si veda a tal proposito la <i>Vedova scaltra</i>, in cui a una
                                Beatrice preoccupata delle “ciacole” da caffè («Un affronto alla mia
                                casa? Come mai risarcirlo? Non si parlerà d’altro per i caffè. Sarò io
                                la favola di Palermo»<sup><a href="#fn20" name="fz20">20</a></sup>) si
                                accosta l’adescatrice Rosaura, assidua frequentatrice di Caffè:
                            </p>
                            <p className="quote">
                                <span style={{ fontStyle: "normal", fontVariant: "small-caps" }}>Marionette:</span> Dove troverete i vostri
                                quattro adoratori?
                                <br />
                                <span style={{ fontStyle: "normal", fontVariant: "small-caps" }}>Rosaura:</span> Al caffè. Verso sera non
                                mancano mai.
                                <br />
                                <span style={{ fontStyle: "normal", fontVariant: "small-caps" }}>Marionette:</span> Il cielo ve la mandi
                                buona.
                                <br />
                                <span style={{ fontStyle: "normal", fontVariant: "small-caps" }}>Rosaura:</span> Chi non ha coraggio di
                                procurare la sua fortuna, mostra espressamente di non
                                meritarla. (<span style={{ fontStyle: "normal" }}>parte</span>)
                                <br />
                                <span style={{ fontStyle: "normal", fontVariant: "small-caps" }}>Marionette:</span> Io vedo che in Francia,
                                in Inghilterra, in Italia e per tutto il mondo, le donne
                                sanno molto bene dove il diavolo tiene la
                                coda.<sup><a href="#fn21" name="fz21">21</a></sup>
                            </p>

                            <p>
                                Le raccomandazioni del caffettiere Ridolfo al suo cameriere Trappola
                                sono forse la prima testimonianza delle mutate abitudini degli Italiani,
                                che già a quell’epoca solevano far colazione al bar, ossia al Caffè:
                            </p>

                            <p className="quote">
                                <span style={{ fontStyle: "normal", fontVariant: "small-caps" }}>Ridolfo Animo:</span> figliuoli portatevi
                                bene; siate lesti, e pronti a servir gli avventori, con
                                civiltà, con proprietà: perché tante volte dipende il
                                credito d’una bottega, dalla buona maniera di quei che
                                servono.
                                <br />
                                <span style={{ fontStyle: "normal", fontVariant: "small-caps" }}>Trappola Caro:</span> signor padrone, per
                                dirvi la verità: questo levarsi di buon’ora non è niente
                                fatto per la mia complessione.
                                <br />
                                <span style={{ fontStyle: "normal", fontVariant: "small-caps" }}>Ridolfo Eppure:</span> bisogna levarsi
                                presto. Bisogna servir tutti. A buon’ora vengono quelli
                                che hanno da far viaggio, i lavoranti, i barcaruoli, i
                                marinai, tutta gente che si alza di buon mattino.
                                <br />
                                <span style={{ fontStyle: "normal", fontVariant: "small-caps" }}>Trappola:</span> È veramente una cosa, che
                                fa crepar di ridere, vedere anche i facchini venir a
                                bevere il loro caffè.
                                <br />
                                <span style={{ fontStyle: "normal", fontVariant: "small-caps" }}>Ridolfo:</span> Tutti cercan di fare quello
                                che fanno gli altri. Una volta correva l’acquavite,
                                adesso è in voga il caffè.
                                <br />
                                <span style={{ fontStyle: "normal", fontVariant: "small-caps" }}>Trappola:</span> E quella signora, dove
                                porto il caffè tutte le mattine, quasi sempre mi prega,
                                che io le compri quattro soldi di legna, e pur vuol
                                bevere il suo caffè.<sup><a href="#fn22"
                                    name="fz22">22</a></sup>
                            </p>

                            <p>
                                Nella loro ambizione moralistica, le riflessioni sul genere umano di
                                questo “caffettiere” veneziano ci proiettano in un altro genere di
                                caffè molto diffuso nel Settecento illuministico, ossia quello animato
                                dai <i>philosophes</i> riformisti e moralisti seguaci dei Lumi che non
                                mancarono neanche in Italia – a cominciare da uno dei centri
                                propulsori delle idee e della cultura illuministica di importazione
                                francese, ossia Milano.

                            </p>
                            <p>
                                Del fatto che in pieno Settecento i Caffè siano diventati anche luoghi
                                loschi, ricettacolo di vizi e ritrovo di ladri, imbroglioni, adescatrici
                                e lestofanti, troviamo conferma nei vari bandi e divieti con cui nei
                                diversi paesi si tentò di arginare il
                                fenomeno.<sup><a href="#fn23" name="fz23">23</a></sup> In letteratura è
                                ancora una volta il teatro goldoniano a offrire uno spaccato realistico
                                degli avventori del Caffè, come nel caso di Momolo de <i>L’uomo di
                                    mondo</i>:
                            </p>

                            <p className="quote">
                                <span style={{ fontStyle: "normal", fontVariant: "small-caps" }}>Momolo:</span> E come! poderè andar anca vu
                                in te le botteghe da caffè a parlar de le novità, a dir
                                mal del prossimo, a taggiar dei teatri, a zogar alle
                                carte, a far el generoso alle spalle de vostra sorella, e
                                far la vita de Michielazzo: come fa i pari e i fradelli
                                delle ballarine, delle virtuose e de tutte quelle povere
                                grame, che se sfadiga in teatro per mantegnir i vizi de
                                tanti e tanti, che no gh’ha voggia de
                                sfadigar.<sup><a href="#fn23" name="fz23">23</a></sup>
                            </p>

                            <p>
                                Sullo sfondo di quest’immagine del Caffè veneziano settecentesco
                                risiede una particolare versione della “Bottega” come luogo di vizi,
                                storicamente ravvisabile nella coeva normativa volta a vietare la
                                frequentazione dei Caffè alle donne nonché nelle rispettive richieste
                                di «graziosa permissione» avanzate dai proprietari volte a «tenere
                                donne nelle loro botteghe» ed essere inoltre esentati dal divieto di
                                ricevere uomini in stanzette attigue alla bottega o, per dirla con il
                                linguaggio burocratico dell’epoca, in «certi tali quali alloggi, o
                                ricoveri, volgarmente et abusivamente detti casini introdotti […] ad
                                oggetto di praticarvi in essi conversazioni o raddunanze [<i>sic</i>]
                                di uomini misti con femine [<i>sic</i>]».<sup><a href="#fn25"
                                    name="fz25">25</a></sup>
                            </p>

                            <h2>2.2 Milano: un «caffè vero verissimo»</h2>
                            <p>
                                Anche la Milano settecentesca viene interessata dalla moda dei caffè.
                                Tra i primi e più celebri figura senz’altro il “Caffè della
                                Scala” che prendeva il nome dall’attiguo teatro lirico. Tale
                                posizione garantiva a questa “bottega” una clientela di lusso che
                            </p>

                            <p className="longcitation">
                                alternava le critiche agli spettacoli al Teatro Ducale coi pettegolezzi
                                mondani della corte e della società milanese, interrotte qualche volta
                                da appassionate discussioni letterarie e filosofiche nelle quali gli
                                eroi erano Rousseau, Voltaire, l’Enciclopedia, i Franchi Muratori,
                                Parini, Verri, Beccaria.<sup><a href="#fn26" name="fz26">26</a></sup>
                            </p>

                            <p>
                                Non stupisce che il gruppo di illuministi milanesi riunitosi intorno ai
                                fratelli Verri scelse di chiamare <i>Il Caffè</i> il foglio cui diede vita per
                                diffondere le proprie idee nel Regno. Per dirla con Pietro Verri, uno
                                dei suoi fondatori insieme al fratello Alessandro, si tratta di un
                                «foglio di stampa che si pubblicherà ogni dieci
                                giorni»<sup><a href="#fn27" name="fz27">27</a></sup> su cui –
                                «con ogni stile che non annoi»<sup><a href="#fn28"
                                    name="fz28">28</a></sup> –
                                saranno scritte «cose varie, cose
                                disparatissime, cose inedite, cose fatte da diversi autori, cose tutte
                                dirette alla pubblica utilità».<sup><a href="#fn29"
                                    name="fz29">29</a></sup>  La
                                ragione del titolo risale alla
                                storia che gli illuministi milanesi inventano per ambientare i dibattiti
                                e le riflessioni riportate dalla rivista: una fittiva «bottega
                                addobbata con ricchezza ed eleganza somma»<sup><a href="#fn30"
                                    name="fz30">30</a></sup>
                                aperta a Milano dal fittivo
                                caffettiere Demetrio, un «greco originario di
                                Citera»<sup><a href="#fn31" name="fz31">31</a></sup>, in cui «si
                                beve un caffè che merita il nome veramente di caffè; caffè vero
                                verissimo di Levante e profumato col legno d’aloe, che chiunque lo
                                prova, quand’anche fosse l’uomo il più grave, l’uomo il più
                                plombeo [<i>sic</i>] della terra, bisogna che per necessità si risvegli e
                                almeno per una mezz’ora diventi uomo
                                ragionevole».<sup><a href="#fn32" name="fz32">32</a></sup>
                            </p>

                            <p>
                                L’articolo di Pietro Verri fornisce, proseguendo, un suggestivo
                                spaccato di vita di quello che è il classico ambiente del Caffè
                                settecentesco tipico dei grandi centri europei che accolsero le idee
                                provenienti d’oltralpe. Leggiamo:
                            </p>

                            <p className="longcitation">
                                In essa bottega chi vuol leggere trova sempre i fogli di novelle
                                politiche, e quei di Colonia e quei di Sciaffusa e quei di Lugano e vari
                                altri; in essa bottega chi vuol leggere trova per suo uso e il Giornale
                                enciclopedico e l’Estratto della letteratura europea e simili buone
                                raccolte di novelle interessanti, le quali fanno che gli uomini che in
                                prima erano Romani, Fiorentini, Genovesi o Lombardi, ora sieno tutti
                                presso a poco Europei; […]<sup><a href="#fn33"
                                    name="fz33">33</a></sup>
                            </p>

                            <p>
                                Come si vede, un ambiente del tutto diverso da quello della
                                “bottega” goldoniana. E poco importa se il Caffè di Verri esiste
                                solo sulla carta. Ciò che egli descrive qui è l’ambiente tipico,
                                l’atmosfera che si respirava in ogni caffè letterario dell’epoca:
                            </p>

                            <p className="longcitation">
                                […] in essa bottega per fine si radunano alcuni uomini, altri
                                ragionevoli, altri irragionevoli, si discorre, si parla, si scherza, si
                                sta sul serio; ed io, che per naturale inclinazione parlo poco, mi son
                                compiaciuto di registrare tutte le scene interessanti che vi vedo
                                accadere e tutt’i discorsi che vi ascolto degni da registrarsi; e
                                siccome mi trovo d’averne già messi in ordine vari, così li do alle
                                stampe col titolo <i>Il Caffè</i>, poiché appunto son nati in una
                                bottega di caffè.<sup><a href="#fn34" name="fz34">34</a></sup>
                            </p>

                            <p>
                                Nei due anni di vita del foglio (1764–1766) i “Caffettisti”
                                dibatterono sulle sue pagine tematiche di svariata natura e rilevanza,
                                ponderandone in primo luogo gli influssi sull’uomo e/o le implicazioni
                                sociali. In linea con lo spirito eclettico e
                                “pedagogico”-divulgativo dell’Illuminismo, gli interventi toccano
                                questioni filosofiche, metereologiche, linguistiche, agricole,
                                letterarie, giuridiche, economico-commerciali, storiche, politiche,
                                sociali, antropologiche, di costume e di pubblica
                                sanità.<sup><a href="#fn35" name="fz35">35</a></sup> Nonostante la
                                sua breve durata <i>Il Caffè</i> milanese riesce ad affermarsi quale
                                principale foglio del riformismo illuministico, contribuendo a fare di
                                Milano, insieme a Napoli, il secondo centro culturale dell’Italia
                                settecentesca e illuministico-riformatrice.
                            </p>

                            <p>
                                Il fatto che il nome della rivista si rifacesse alla bevanda in voga è
                                da leggere come attestato del grado di diffusione e consenso ormai
                                raggiunto dalle “Botteghe” come importante luogo di sociabilità
                                nonché di scambio e diffusione delle idee del riformismo illuministico
                                provenienti d’Oltralpe. Il riferimento esplicito al caffè nel titolo
                                del foglio è però anche indice della grande predilezione di cui questa
                                bevanda, che tiene attiva e sveglia la mente (a differenza per es. del
                                vino che l’offusca), godeva tra i cultori della Ragione. In questa sua
                                qualità di bevanda-simbolo della classe borghese riformatrice in ascesa
                                e dell’aristocrazia “illuminata”, il caffè viene a contrapporsi
                                da una parte al vino – che resta la bevanda più diffusa (anche
                                perché la meno cara) tra i ceti popolari nonché, nella versione del
                                “Vin santo” (= sangue di Cristo), simbolo del ceto ecclesiastico –
                                e dall’altra alla ben più raffinata e “lussuosa” cioccolata,
                                amata dall’alta aristocrazia e dai regnanti. La metaforicità del
                                caffè quale bevanda-simbolo di chi “ragiona” contrapposta ai fumi
                                dell’alcol che, invece, annebbia la mente è di indubbia origine
                                francese. Sarà, infatti, lo storico d’Oltralpe Jules Michelet che
                                nella sua <i>Histoire de France</i> darà ragione dell’«avènement du
                                café»<sup><a href="#fn36" name="fz36">36</a></sup> in termini a dir
                                poco trionfalistici:
                            </p>

                            <p className="longcitation">
                                Le café, la sobre liqueur, puissamment cérébrale, qui, tout au
                                contraire des spiritueux, augmente la netteté et la lucidité, – le
                                café qui supprime la vague et lourde poésie des funée
                                d’imagination, qui, du réel bien vu, fait jaillir l’étincelle, et
                                l’éclair de la vérité.<sup><a href="#fn37" name="fz37">37</a></sup>
                            </p>

                            <p>
                                Aggiungendo con orgoglio:
                            </p>
                            <p className="longcitation">
                                Ce fort café, celui de Saint-Domingue, plein, <i>corsé</i>, nourrissant,
                                aussi bien qu’excitant, a nourri l’âge adulte du siècle, l’âge
                                fort de l’Encyclopédie. Il fut bu par Buffon, par Diderot, Rousseau,
                                ajouta sa chaleur aux âmes chaleureuses, sa lumière à la vue
                                perçante des prophètes assemblés dans ‘l’antre de Procope’, qui
                                virent au fond du noir breuvage le futur rayon de
                                89.<sup><a href="#fn38" name="fz38">38</a></sup>
                            </p>

                            <p>
                                Tuttavia, l’attestazione letteraria del Caffè come luogo <i>princeps</i>
                                dell’Illuminismo è di origine goldoniana e trova in Ridolfo,
                                protagonista e proprietario della “Bottega del caffè”, un degno
                                rappresentante di quello spirito filantropico e “moralistico” che
                                propugna la perfettibilità illuministica – «fare del bene al
                                prossimo».<sup><a href="#fn39" name="fz39">39</a></sup>
                            </p>

                            <h2>2.3 Il caffè a Napoli tra cinema e teatro</h2>

                            <p>
                                Nel cinema e nel teatro napoletano la rappresentazione della
                                preparazione e della consumazione del caffè è strettamente legata a
                                quella della ritualità e dei costumi della cultura popolare. Sul
                                versante cinematografico, il caffè fa capolino in diversi film “di
                                cassetta”, sempre presentato come elemento integrante della dimensione
                                “casalinga” e famigliare o, se preso al bar, come momento <i>princeps</i>
                                di quotidianità nei rapporti di amicizia o di affari. È per esempio
                                consumando un caffè al bar che ne <i>La banda degli
                                    onesti</i><sup><a href="#fn40" name="fz40">40</a></sup> il
                                portiere Antonio Buonocore, alias Totò, cerca di convincere il
                                tipografo Lo Turco, alias Peppino De Filippo, a passare dalla parte
                                dei “ragionier Casoria” stampando banconote false.
                            </p>

                            <iframe width="420" height="315"
                                src="https://www.youtube.com/embed/5sntWSChia0" frameborder="0"
                                allowfullscreen title="YouTube Video">
                            </iframe>

                            <p>
                                Ed è una tipica caffettiera napoletana (tristemente e sintomaticamente
                                vuota) quella che, nella scena in cui il tipografo e il portiere
                                realizzano di essere consuoceri, fa bella mostra di sé sul tavolo di
                                cucina di casa Lo Turco, quasi a mo’ di ideale <i>trait d’union</i>
                                parentale.

                            </p>

                            <p>
                                Tanto sullo schermo quanto sulla scena il caffè diventa spesso oggetto
                                di spassoso litigio tra marito e moglie dovuto o alla di lei imperizia
                                nel prepararlo o all’avarizia nel servirlo. Celeberrima, a tal
                                proposito, è la scena di <i>Totò, Peppino e i
                                    fuorilegge</i><sup><a href="#fn41" name="fz41">41</a></sup> in cui
                                l’avara Teresa, alias Titina De Filippo, serve «mezza tazza» di caffè,
                                per giunta anche freddo, al marito.
                            </p>

                            <iframe width="420" height="315"
                                src="https://www.youtube.com/embed/zMkLTTR1a9E" frameborder="0"
                                allowfullscreen title="Youtube Video">
                            </iframe>

                            <p>
                                Dal canto suo il motivo della «ciofeca» è ricorrente sia al cinema
                                sia a teatro, in quanto fonte di sicuro effetto comico. Si pensi, per
                                esempio, alla scena della «ciofeca dello sport» ne <i>I due
                                    marescialli</i>:<sup><a href="#fn42" name="fz42">42</a></sup>
                            </p>

                            <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/7kYX0vyCTpM" frameborder="0"
                                allowfullscreen title="Youtube Video">
                            </iframe>

                            <p>
                                Per quanto riguarda il teatro, invece, memorabile è la scena iniziale
                                di <i>Natale in casa Cupiello</i> (1931) di Eduardo De Filippo, in cui la
                                tazzina di caffè, servita a letto al protagonista, diventa oggetto di
                                litigio mattutino tra questi e la moglie Concetta, rea di usare, per
                                risparmiare, caffè vecchio e stantio, rovinandogli il risveglio:
                            </p>

                            <iframe width="420" height="315"
                                src="https://www.youtube.com/embed/vCHeHFHPCg8" frameborder="0"
                                allowfullscreen title="Youtube Video">
                            </iframe>

                            <p>
                                Nonostante si tratti di un genere affatto voluttuario, nella cultura
                                partenopea il caffè è da sempre parte integrante e irrinunciabile
                                della ritualità quotidiana. Lo sa bene Amalia Jovine che in <i>Napoli
                                    milionaria</i> (1945) sfrutta l’impossibilità da parte dei napoletani a
                                rinunciarvi per arricchirsi col contrabbando e la borsa nera. Com’è
                                noto, il sipario si apre proprio sui preparativi fatti da Maria Rosaria,
                                figlia di Amalia Jovine, per allestire il quotidiano spaccio illegale di
                                caffè, mentre la madre sta litigando con una vicina per difendere il
                                proprio monopolio nel vicolo:
                            </p>

                            <iframe width="420" height="315"
                                src="https://www.youtube.com/embed/zD9RExCCh1w" frameborder="0"
                                allowfullscreen title="Youtube Video">
                            </iframe>

                            <p>
                                Nonostante la guerra in corso – anzi: proprio a causa di essa – il
                                rito quotidiano della «tazzulella ’e cafè» si carica di una
                                simbologia affatto nuova legata ad un intimo desiderio di ritorno alla
                                pace e alla normalità prebellica. D’altro canto, i materassi di casa
                                Jovine imbottiti di caffè di contrabbando diventano evidente monito
                                rispetto all’arricchimento illegale attraverso il mercato nero ed alla
                                conseguente degenerazione dei rapporti interpersonali, famigliari e di
                                classe nella società postbellica.<sup><a href="#fn43"
                                    name="fz43">43</a></sup>
                            </p>

                            <p>
                                Sarà, però, con <i>Questi fantasmi</i> (1946) che il teatro eduardiano
                                fornirà la più celebre scena di ritualità partenopea legata alla
                                preparazione ed al consumo di caffè. Si tratta della celebre scena del
                                balcone, che apre il secondo Atto della commedia, nella quale il
                                protagonista Pasquale Lojacono, conversando amabilmente con
                                l’invisibile dirimpettaio, fornisce la sua ricetta personale ed i suoi
                                suggerimenti sulla tostatura e le modalità di preparazione, non
                                mancando di rivelare il suo piccolo segreto: il «coppetiello»:
                            </p>

                            <iframe width="420" height="315"
                                src="https://www.youtube.com/embed/YllQLj0h6mo" frameborder="0"
                                allowfullscreen title="Youtube Video">
                            </iframe>

                            <p>
                                La napoletanità del protagonista si rivela nella sua indisponibilità a
                                rinunciare a quella «tazzina di caffè, presa tranquillamente qua,
                                fuori al balcone, dopo quell’oretta di sonno che uno si è fatta dopo
                                mangiato».<sup><a href="#fn44" name="fz44">44</a></sup> Nello sfogo
                                che Eduardo mette in bocca al suo protagonista
                                cogliamo una nota di amarezza dovuta alla mancata partecipazione a
                                questo rito da parte della più giovane moglie, segno evidente che
                            </p>

                            <p className="longcitation">
                                la nuova generazione ha perduto queste abitudini che, secondo me, sotto
                                un certo punto di vista, sono la poesia della vita; perché, oltre a
                                farvi occupare il tempo, vi danno pure una certa serenità di
                                spirito.<sup><a href="#fn45" name="fz45">45</a></sup>
                            </p>

                            <p>
                                La paventata scomparsa, nelle giovani generazioni, del rito pomeridiano
                                della tazzina di caffè consumata sul balcone diventa simbolo
                                dell’attaccamento dell’Autore ai costumi e alle tradizioni della sua
                                città, che egli vede sempre più messe in pericolo dalla
                                “modernità”. In questa nota nostalgica di Eduardo riecheggia
                                l’atmosfera alquanto idillica e idealizzata di una “Napoli che fu”
                                già simboleggiata dal presepe di Luca Cupiello: la grande Napoli
                                fineottocentesca, di cui il drammaturgo era culturalmente figlio,
                                destinata a dissolversi nella «nuttata» della seconda guerra mondiale.
                            </p>
                            <p>
                                Ma Eduardo non ha del tutto ragione: nonostante le “nuttate” di
                                allora e di oggi, quella Napoli sopravvivrà fintanto che nei bar della
                                Sanità o di Spaccanapoli sarà servito anche un solo caffè
                                “sospeso”.
                            </p>


                            <h1>Appendice</h1>

                            <p>
                                Pietro Verri: <i>Storia naturale del caffè</i>
                                (1764)<sup><a href="#fn46" name="fz46">46</a></sup>
                            </p>

                            <p>
                                Il caffè, signori miei, non è altrimenti una fava o un legume, non
                                nasce altrimenti nelle contrade vicine a Costantinopoli; e se siete
                                disposti a credere a me, che ho viaggiato il Levante ed ho veduto
                                nell’Arabia i campi interi coperti di caffè, vi dirò quello che egli
                                è veramente. Il caffè, che noi orientali comunemente chiamiamo <i>cauhè</i>
                                e <i>cahua</i>, è prodotto non da un legume, ma bensì da un albero, il quale
                                al suo aspetto paragonasi agli aranci ed a’ limoni quand’hanno le
                                loro radici fisse nel suolo, poiché s’alza circa quattro o cinque
                                braccia da terra; il tronco di esso comunemente s’abbraccia con ambe
                                le mani, le foglie sono disposte come quelle degli aranci, come esse
                                sempre verdi anche nell'inverno e come esse d'un verde bruno; di più
                                l’albero del caffè nella disposizione de’ suoi rami s’estende
                                presso poco come gli aranci, se non che nella sua vecchiezza i rami
                                inferiori cadono alquanto verso il pavimento. Il caffè cresce e si
                                riproduce con poca fatica anche nelle terre le quali sembrerebbero
                                sterili per altre piante; e in due maniere si moltiplica, e col seme (il
                                quale è quell’istesso che ci serve per la bevanda) e col produrne di
                                nuove pianticelle delle radici. È bensì vero che il seme del caffè
                                diventa sterile poco dopo che è distaccato dall’albero, ed alla
                                natura deve imputarsi, non alle pretese cautele degli Arabi se ei non
                                produce portato che sia da noi, poiché non è altrimenti vero che gli
                                Arabi lo disecchino ne’ forni, né nell’acqua bollente a tal fine,
                                come alcuni spacciarono. L’albero del caffè finalmente s’assomiglia
                                agli aranci anche in ciò, che nel tempo medesimo vi si vedono e fiori e
                                frutti, altri maturi, altri no, sebbene il tempo veramente della grande
                                raccolta nell’Arabia sia nel mese di maggio. I fiori somigliano i
                                gelsomini di Spagna, i frutti sembrano quei del ciriegio, verdastri al
                                bel principio, poi rossigni, indi nella maturanza d’un perfetto
                                porporino. Il nocciolo di esso frutto rinchiude due grani di caffè, i
                                quali si combaciano nella parte piana e son nodriti da un filamento che
                                passa loro al lungo, di che ne vediamo vestigio nel grano medesimo: si
                                raccolgono i frutti maturi del caffè scuotendone la pianta, essi non
                                sono grati a cibarsene, si lasciano diseccare esposti al sole, indi
                                facendo passare sopra di essi un rotolo di sasso pesante si schiudono i
                                gusci e ne esce il grano. Ogni pianta presso poco produce cinque libbre
                                di caffè all’anno, e costa sì poca cura il coltivarla ch’egli è
                                un prodotto che ci concede la terra con una generosità che poco usa
                                negli altri.
                            </p>

                            <figure className="imageright">
                                <p style={{ width: "225px" }}>Fig. 12: Pianta di caffè
                                </p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(11); }}>
                                    <img src={PiantaSmall} width="225"
                                        height="311" alt="Pianta di caffè" />
                                </button>
                            </figure>

                            <p>
                                Nell’Oriente era in uso la bevanda del caffè sino al tempo della
                                presa di Costantinopoli fatta da’ maomettani, cioè circa la metà del
                                secolo decimo quinto; ma nell’Europa non è più d’un secolo da che
                                vi è nota. La più antica memoria che sen’abbia è del 1644, anno in
                                cui ne fu portato a Marsiglia, dove si stabilì la prima bottega di
                                caffè aperta in Europa l’anno 1671. La perfezione della bevanda del
                                caffè dipende primieramente dalla perfezione del caffè medesimo, il
                                quale vuol essere arabo, e nell’Arabia stessa non ogni campo lo
                                produce d’egual bontà, come non ogni spiaggia d’una provincia
                                produce vini di forza eguale. Il migliore d’ogni altro è quello
                                ch’io uso, cioè quello che si vende al <i>Bazar</i>, ossia al mercato di
                                Betelfaguy, città distante cento miglia circa da Mocha. Ivi gli arabi
                                delle campagne vicine portano il caffè entro alcuni sacchi di paglia e
                                ne caricano i cameli [<i>sic</i>]; ivi per mezzo dei <i>banian</i> i forestieri lo
                                comprano. Comprasi pure il buon caffè al Cairo ed in Alessandria, dove
                                vi è condotto dalle caravane della Mecca. I grani del caffè piccoli e
                                di colore alquanto verdastro sono preferibili a tutti.  Dipende in
                                secondo luogo la perfezione della bevanda dal modo di prepararla, ed io
                                soglio abbrucciarlo appena quanto basti a macinarlo, indi reso ch’egli
                                è in polve, entro una caffettiera asciutta lo espongo di nuovo
                                all’azione del fuoco, e poiché lo vedo fumare copiosamente gli verso
                                sopra l’acqua bollente, cosicché la parte sulfurea e oleosa, appena
                                per l’opera del fuoco si schiude dalla droga, resti assorbita tutta
                                dall’acqua; ciò fatto lascio riposare il caffè per un minuto, tanto
                                che le parti terrestri della droga calino al fondo del vaso, indi
                                profumata altra caffettiera col fumo del legno d’aloe, verso in essa
                                il caffè che venite a prendere e che trovate sì squisito.
                            </p>

                            <figure className="imageleft">
                                <p style={{ width: "250px" }}>Fig. 13: Chicchi di caffè
                                </p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(12); }}>
                                    <img src={CaffeFruttaSmall} width="150"
                                        height="200" alt="Chicchi di caffè" />
                                </button>
                            </figure>

                            <p>
                                Il caffè rallegra l’animo, risveglia la mente, in alcuni è
                                diuretico, in molti allontana il sonno, ed è particolarmente utile alle
                                persone che fanno poco moto e che coltivano le scienze. Alcuni giunsero
                                perfino a paragonarlo al famoso nepente tanto celebrato da Omero; e si
                                raccontano de’ casi ne’ quali coll’uso del caffè si son guarite
                                delle febbri e si son liberati persino alcuni avvelenati da un veleno
                                coagulante il sangue; ed è sicura cosa che questa bibita infonde nel
                                sangue un sal volatile che ne accelera il moto, e lo dirada e lo
                                assottiglia e in certa guisa lo ravviva. Questa pianta animatrice,
                                naturale per quanto sembra al suolo dell’Arabia, fu verso il fine
                                dello scorso secolo dagli Olandesi trasportata nell’isola di Java a
                                Batavia, indi moltiplicatasi, ivi se ne dilatò dai medesimi la
                                piantagione anche nell’isola di Ceylon, poscia col tempo se ne portò
                                in Europa; e in Olanda e in Parigi per curiosità se ne coltivano le
                                piante, le quali nelle serre riscaldate l’inverno reggono e producono
                                frutti, e tanto sen’è universalizzata la cultura presentemente che
                                nell’America e nell’Indie Orientali se ne fa la raccolta, cosicché
                                abbiamo caffè di Surinam, dell’isola Bourbon, di Cayenne, della
                                Martinica, di S. Domingo, della Guadalupa, delle Antille, dell’isole
                                di Capo-Verde. Il caffè d’Arabia è il primo, quello dell’Indie
                                Orientali vien dopo, il peggiore d’ogni altro è quello d’America.
                            </p>

                            <p>
                                Così terminò di parlare <i>Demetrio</i>; ed io credetti al suo
                                discorso, poiché lo trovai conforme a quanto ne aveva letto
                                nelle <i>Memorie dell’Accademia Reale delle Scienze di Parigi</i>
                                dell’anno 1713 in un <i>Memoire</i> del signor <i>Jussieu</i>, a quanto ce ne
                                attestano i <i>Viaggi dell’Arabia felice</i> del signor <i>La
                                    Roque</i>, del cavalier di <i>Marchais</i>, le <i>Memorie</i> del
                                signor <i>Garcin</i>. Ma poiché ebbe terminato il suo
                                ragionamento <i>Demetrio</i>, s’alzò il curiale e uscì dalla bottega
                                ripetendo: <i>Gran fatto, che quel legume del caffè, quella fava, ci
                                    debba venire sino da Costantinopoli!</i>
                            </p>
                            <p className="quote">
                                P. [PIETRO VERRI]
                            </p>


                            <h1>Note</h1>

                            <p className="annotation"><sup><a href="#fz1" name="fn1">1</a></sup>
                                Leonhard Rauwolf: Reiß in die Morgenländer, 98. Cit. da: Thomas
                                Hengartner/Christoph Maria Merki (1999: 86).
                            </p>

                            <p className="annotation"><sup><a href="#fz2" name="fn2">2</a></sup>
                                Angelo Rambaldi (2001).
                            </p>

                            <p className="annotation"><sup><a href="#fz3" name="fn3">3</a></sup>
                                Angelo Rambaldi, Ambrosia arabica, cit. da: Paolo Puddu (2002: 217).
                            </p>

                            <p className="annotation"><sup><a href="#fz4" name="fn4">4</a></sup>
                                Pietro Verri: Storia naturale del caffè, in <i>«Il Caffè» 1764–1766</i>, a
                                c. di G. Franciosi e S. Romagnoli, Torino 1998, vol. I, 11–17; qui: 16.
                            </p>

                            <p className="annotation"><sup><a href="#fz5" name="fn5">5</a></sup>
                                Maurizio Galli: Il caffè turco, in: <i>La Lettura</i>, nr. 3, marzo
                                1907, 241–245; qui: 242–243 (Corsivo nel testo).
                            </p>

                            <p className="annotation"><sup><a href="#fz6" name="fn6">6</a></sup>
                                Anonimo (G. B. C.), Cenni storici su il Caffè (1), in: <i>Annali
                                    Universali di Statistica, Economia pubblica, Storia e Viaggi</i>, ser. 1,
                                vol. 5, agosto 1825, 57–64; qui: 59. Indice della estrema
                                popolarità della bevanda nera nella società turca sono le pubbliche
                                torrefazioni frequentate da ogni ceto sociale: «A Costantinopoli, come
                                in tutte le grandi città dell’impero vi è un apposito grandioso
                                magazzino, nel quale altro non si fa che abbrucciare [<i>sic</i>] e macinare
                                caffè […]. Un gran numero di persone e famiglie ve l’apportano in
                                grani e mediante alcuni <i>parà</i> o soldi, loro viene restituito torrefatto,
                                macinato e stacciato. I direttori di questi stabilimenti, chiamati
                                <i>Tahhmiss</i>, non si permettono mai la menoma soperchieria, sia nel paso
                                [<i>sic</i>], sia nel caffè che loro si porta, giacché questo è inerente
                                all’interesse loro». Anonimo (G. B. C.), Cenni storici su il Caffè
                                (1), op. cit., 60 (Corsivo nel testo).
                            </p>

                            <p className="annotation"><sup><a href="#fz7" name="fn7">7</a></sup>
                                Fritz Riha (1967: 17).
                            </p>

                            <p className="annotation"><sup><a href="#fz8" name="fn8">8</a></sup>
                                <i>Ivi</i>, 18.
                            </p>

                            <p className="annotation"><sup><a href="#fz9" name="fn9">9</a></sup>
                                Francesco Redi, <i>Bacco in Toscana</i>,
                                vv. 188–203. (Cfr. <a href="http://it.wikisource.org/wiki/Bacco_in_Tosca-na"
                                    target="_blank" rel="noreferrer">http://it.wikisource.org/wiki/Bacco_in_Toscana</a>
                                (sito visitato il 14 ottobre 2011).
                            </p>

                            <p className="annotation"><sup><a href="#fz10" name="fn10">10</a></sup>
                                Cfr. <a href="http://www.almut-fingerle.de/projekte_kaffeekante.htm"
                                    target="_blank" rel="noreferrer">http://www.almut-fingerle.de/projekte_kaffeekante.htm</a>
                                (sito visitato il 12 ottobre 2011).

                            </p>

                            <p className="annotation"><sup><a href="#fz11" name="fn11">11</a></sup>
                                Pompeo Molmenti, I caffè di Venezia, in: <i>La Lettura</i>, nr. 2,
                                febbraio 1904, 121–128; qui: 121.
                            </p>

                            <p className="annotation"><sup><a href="#fz12" name="fn12">12</a></sup>
                                <i>Ibidem</i>.
                            </p>

                            <p className="annotation"><sup><a href="#fz13" name="fn13">13</a></sup>
                                Giuseppe Adami, Il Caffè Pedrocchi nella sua vita e nella sua storia,
                                in: <i>La Lettura</i>, nr. 9, settembre 1905, 787–795; qui: 787.
                            </p>

                            <p className="annotation"><sup><a href="#fz14" name="fn14">14</a></sup>
                                <i>Ibidem</i>.
                            </p>

                            <p className="annotation"><sup><a href="#fz15" name="fn15">15</a></sup>
                                Renzo Levi Naim, Illustri clienti di un antico caffè romano, in: <i>La
                                    Lettura</i>, nr. 3, marzo 1923, 235–237; qui: 235.
                            </p>

                            <p className="annotation"><sup><a href="#fz16" name="fn16">16</a></sup>
                                Klaus Thiele-Dohrmann (1997: 204).
                            </p>

                            <p className="annotation"><sup><a href="#fz17" name="fn17">17</a></sup>
                                Cfr. Vincenzo Cuoco, <i>Saggio sulla rivoluzione napoletana del 1799</i>,
                                Cap. 50.
                            </p>

                            <p className="annotation"><sup><a href="#fz18" name="fn18">18</a></sup>
                                Jules Michelet, <i>Histoire de France</i>, Parigi
                                1876, vol. XIV: XVIIIe siècle: La Régence, 162.
                            </p>

                            <p className="annotation"><sup><a href="#fz19" name="fn19">19</a></sup>
                                Carlo Goldoni, <i>La sposa persiana</i>, 574.
                            </p>

                            <p className="annotation"><sup><a href="#fz20" name="fn20">20</a></sup>
                                Carlo Goldoni, <i>Le femmine puntigliose</i>, 1180.
                            </p>

                            <p className="annotation"><sup><a href="#fz21" name="fn21">21</a></sup>
                                Carlo Goldoni, <i>La vedova scaltra</i>, 385.
                            </p>

                            <p className="annotation"><sup><a href="#fz22" name="fn22">22</a></sup>
                                Carlo Goldoni, <i>La bottega del caffè</i>, 7.
                            </p>

                            <p className="annotation"><sup><a href="#fz23" name="fn23">23</a></sup>
                                Cfr. per esempio la tentata e non riuscita chiusura dei caffè
                                («ritrovi preferiti per oziosi e scontenti») stabilita da Carlo II
                                d’Inghilterra con regio decreto del 29 dicembre 1675, poi ritirato,
                                sotto massicce proteste della popolazione, a pochi giorni dall’entrata
                                in vigore.
                            </p>

                            <p className="annotation"><sup><a href="#fz24" name="fn24">24</a></sup>
                                Cfr. <i>L’uomo di mondo</i>, Atto II, sc. 8.
                            </p>

                            <p className="annotation"><sup><a href="#fz25" name="fn25">25</a></sup>
                                Divieto emesso dal Consiglio dei Dieci nel 1743, cit. da: Filippo
                                Maria Paladini, Sociabilità ed economia del loisir. Fonti sui caffè
                                veneziani del XVIII secolo, in: <i>Storia di Venezia – Rivista</i>, I,
                                2003, 153–281; qui: 155–156.
                            </p>

                            <p className="annotation"><sup><a href="#fz26" name="fn26">26</a></sup>
                                G. [<i>sic</i>] Morazzoni, Il caffè del Teatro alla Scala, in: <i>La
                                    Lettura</i>, nr. 4, aprile 1932, 191–194; qui: 192.
                            </p>

                            <p className="annotation"><sup><a href="#fz27" name="fn27">27</a></sup>
                                P. [Pietro Verri], “Il Caffè” [Introduzione], in: <i>Il Caffè</i>
                                1764–1766, op. cit., vol. I, 11–14; qui: 11.
                            </p>

                            <p className="annotation"><sup><a href="#fz28" name="fn28">28</a></sup>
                                <i>Ibidem</i>.
                            </p>

                            <p className="annotation"><sup><a href="#fz29" name="fn29">29</a></sup>
                                <i>Ibidem</i>.
                            </p>

                            <p className="annotation"><sup><a href="#fz30" name="fn30">30</a></sup>
                                <i>Ivi</i>, 12.
                            </p>

                            <p className="annotation"><sup><a href="#fz31" name="fn31">31</a></sup>
                                <i>Ivi</i>, 11.
                            </p>

                            <p className="annotation"><sup><a href="#fz32" name="fn32">32</a></sup>
                                <i>Ivi</i>, 12.
                            </p>


                            <p className="annotation"><sup><a href="#fz33" name="fn33">33</a></sup>
                                <i>Ibidem</i>.
                            </p>

                            <p className="annotation"><sup><a href="#fz34" name="fn34">34</a></sup>
                                <i>Ibidem</i>.
                            </p>

                            <p className="annotation"><sup><a href="#fz35" name="fn35">35</a></sup>
                                Per avere solo un’idea della varietà dei temi affrontati dai
                                <i>Caffettisti</i> si vedano, a solo mo’ di esempio, i seguenti articoli
                                tratti da <i>«Il Caffè» 1764–1766</i>, op. cit.: Alessandro Verri, “Di
                                Carneade e di Grozio”, vol. II, 705–721. Id., “Alcune idee
                                sulla filosofia morale”, <i>ibidem</i>, 685–695. Giuseppe Visconti,
                                “Osservazioni metereologiche fatte in Milano. Sul termometro. Su i
                                [<i>sic</i>] venti”, vol. I, 78–82; 96–104; 106–113. Alessandro
                                Verri, “Rinunzia avanti notaio degli autori del presente foglio
                                periodico al Vocabolario della Crusca”, vol. I, 47–50. Pietro
                                Secchi, “La coltivazione del tabacco”, vol. I, 56–58. Pietro
                                Verri, “La coltivazione del lino”, in: <i>ibidem</i>, 176–177. Pietro
                                Verri, “Sullo spirito della letteratura d’Italia”, vol. I, 211–222. Cesare Beccaria, “Frammento sullo stile”, in: <i>ibidem</i>, 277–284. Alessandro Verri, “Ragionamento sulle leggi civili”, vol.
                                II, 571–606. Pietro Verri, “Sulla spensieratezza della privata
                                economia”, vol. I, 322–330. Cesare Beccaria, “Tentativo
                                analitico su i [<i>sic</i>] contrabbandi, <i>ibidem</i>, 173–175. Alessandro
                                Verri, “Di Giustiniano e delle sue leggi”, vol. I, 177–189.
                                Gian Rinaldo, “Della patria degli Italiani”, vol. II, 421–427.
                                Sebastiano Franci, “Difesa delle donne”, vol. I, 245–256.
                                Luigi Lambertenghi, “Sull’origine e sul luogo delle sepolture”,
                                vol. II, 481–487. Pietro Verri, “Le delizie della villa”, vol.
                                I, 166–173. Giuseppe Visconti, “Della maniera di conservare
                                robusta e lungamente la sanità di chi vive nel clima milanese”, in:
                                <i>«Il Caffè» 1764–1766</i>, op. cit., vol. II, 498–532. Pietro
                                Verri, “Sull’innesto del vaiuolo”, in: <i>ibidem</i>, 756–803.
                            </p>

                            <p className="annotation"><sup><a href="#fz36" name="fn36">36</a></sup>
                                Jules Michelet, op. cit., 162.
                            </p>

                            <p className="annotation"><sup><a href="#fz37" name="fn37">37</a></sup>
                                <i>Ivi</i>, 162–163.
                            </p>

                            <p className="annotation"><sup><a href="#fz38" name="fn38">38</a></sup>
                                <i>Ivi</i>, 164.
                            </p>

                            <p className="annotation"><sup><a href="#fz39" name="fn39">39</a></sup>
                                Cfr. Carlo Goldoni (2002), 227–228. [Atto II, Scena 8]. Come ha
                                giustamente riconosciuto Cornelia Klettke, «Goldonis <i>caffettiere</i>
                                Ridolfo verkörpert den Vernunftstandpunkt und die bürgerliche Moral in
                                den Werten <i>prudente-cauto-onorato</i>. Als Versöhner der verschiedenen
                                Parteien erscheint er als eine ausgleichende, positive Figur. Die
                                <i>bottega del caffè</i> wird zur Begegnung von Vernunft und Unvernunft, zum
                                Ort, an dem das menschliche Laster (Spielleidenschaft, Geldgier und
                                Falschspielerei, Hochstapelei, üble Nachrede) korrigiert wird und die
                                Vernunft im Kampf gegen die Infamie triumphiert. Damit bildet das
                                Kaffeehaus […] einen ‚Aufklärungsort‘ <i>par excellence</i>». Cornelia
                                Klettke (2003), 133–134.
                            </p>

                            <p className="annotation"><sup><a href="#fz40" name="fn40">40</a></sup>
                                1956, regia di Camillo Mastrocinque.
                            </p>

                            <p className="annotation"><sup><a href="#fz41" name="fn41">41</a></sup>
                                1956, regia di Camillo Mastrocinque.
                            </p>

                            <p className="annotation"><sup><a href="#fz42" name="fn42">42</a></sup>
                                1962, regia di Sergio Corbucci.
                            </p>

                            <p className="annotation"><sup><a href="#fz43" name="fn43">43</a></sup>
                                Su ciò cfr. Roberto Ubbidiente (2009).
                            </p>

                            <p className="annotation"><sup><a href="#fz44" name="fn44">44</a></sup>
                                Eduardo De Filippo: Questi fantasmi, in: <i>Teatro</i>, Milano
                                2005, vol. 2, t. 1: Cantata dei Giorni dispari, 378.
                            </p>

                            <p className="annotation"><sup><a href="#fz45" name="fn45">45</a></sup>
                                <i>Ivi</i>, 378–379.
                            </p>

                            <p className="annotation"><sup><a href="#fz46" name="fn46">46</a></sup>
                                Estratto da: P. [Pietro Verri], <i>Il Caffè</i> [Introduzione], op.
                                cit., 14–17.
                            </p>

                            <h1>Bibliografia</h1>
                            <p className="bibl">
                                Adami, Giuseppe (1905): Il Caffè Pedrocchi nella sua vita e nella sua
                                storia, in: <i>La Lettura</i>, nr. 9, settembre, 787–795.
                            </p>

                            <p className="bibl">
                                Anonimo (G. B. C.) (1825): Cenni storici su il Caffè (1), in: <i>Annali
                                    Universali di Statistica</i>, Economia pubblica, Storia e Viaggi», ser. 1,
                                vol. 5, agosto, 57–64.
                            </p>

                            <p className="bibl">
                                De Filippo, Eduardo (2005): Questi fantasmi, in: <i>Teatro</i>, Milano, vol. 2,
                                t. 1: Cantata dei Giorni dispari, 353–416.
                            </p>

                            <p className="bibl">
                                Galli, Maurizio (1907): Il caffè turco, in: <i>La Lettura</i>, nr. 3,
                                marzo, 241–245.
                            </p>

                            <p className="bibl">
                                Goldoni, Carlo (<sup>2</sup>1960): La bottega del caffè, in: <i>Tutte le opere di
                                    Carlo Goldoni</i>, Milano , vol. III, 1–80.
                            </p>

                            <p className="bibl">
                                – (<sup>2</sup>1960): La sposa persiana, in: <i>Tutte le
                                    opere di Carlo Goldoni</i>, Milano, vol. IX, 515–594.
                            </p>

                            <p className="bibl">
                                – (<sup>2</sup>1960): La vedova scaltra, in: <i>Tutte le
                                    opere di Carlo Goldoni</i>, Milano, vol. II, 325–414.
                            </p>

                            <p className="bibl">
                                – (<sup>2</sup>1960): Le femmine puntigliose,
                                in: <i>Tutte le opere di Carlo Goldoni</i>, Milano, vol. II, 1107–1196.
                            </p>

                            <p className="bibl">
                                – (2002): <i>Il servitore di due padroni, La famiglia
                                    dell’antiquario, La bottega del caffè</i>, a c. di G. Davico Bonino,
                                Milano.
                            </p>

                            <p className="bibl">
                                Hengartner, Thomas/Merki, Christoph Maria (a c. di) (1999):
                                <i>Genussmittel. Ein kulturgeschichtliches Handbuch</i>. Frankfurt/New
                                York.
                            </p>

                            <p className="bibl">
                                Francioni, Gianni/Romagnoli, Sergio (a c. di) (1998): <i>Il caffè</i>
                                (1764-1766), Torino.
                            </p>

                            <p className="bibl">
                                Klettke, Cornelia (2003): Der Kaffee als Droge der Aufklärer, in:
                                <i>Die Zeitschrift «Il Caffè». Vernunftprinzip und Stimmenvielfalt in der
                                    italienischen Aufklärung</i>, a c. di Helmut C. Jacobs et al., Frankfurt,
                                131–148.
                            </p>

                            <p className="bibl">
                                Levi Naim, Renzo (1923): Illustri clienti di un antico caffè romano,
                                in: <i>La Lettura</i>, nr. 3, marzo, 235–237.
                            </p>

                            <p className="bibl">
                                Molmenti, Pompeo (1904): I caffè di Venezia, in: <i>La Lettura</i>,
                                nr. 2, febbraio, 121–128.
                            </p>

                            <p className="bibl">
                                Morazzoni, G. [<i>sic</i>] (1932): Il caffè del Teatro alla Scala,
                                in: <i>La Lettura</i>, nr. 4, aprile, 191–194.
                            </p>

                            <p className="bibl">
                                Paladini, Filippo Maria (2003): Sociabilità ed economia del loisir.
                                Fonti sui caffè veneziani del XVIII secolo, in: <i>Storia di Venezia –
                                    Rivista</i>, I, 153–281.
                            </p>

                            <p className="bibl">
                                Puddu, Paolo (2002): <i>La conoscenza del cibo: dalla preistoria ai cibi di
                                    Frankenstein</i>. Bologna.
                            </p>

                            <p className="bibl">
                                Rambaldi, Angelo (2001): <i>Ambrosia arabica ovvero della salutare bevanda
                                    caffè</i>, Bologna 1691, rist. a c. di Giancarlo Roversi, (Testi antichi di
                                gastronomia, 32), Sala Bolognese.
                            </p>

                            <p className="bibl">
                                Riha, Fritz (1967): <i>Das alte Wiener Kaffeehaus</i>, Salzburg.
                            </p>

                            <p className="bibl">
                                Thiele-Dohrmann, Klaus (1997): <i>Europäische Kaffeehauskultur</i>,
                                Düsseldorf/Zürich.
                            </p>

                            <p className="bibl">
                                Ubbidiente, Roberto (2009): Goldgrube ‘Krieg’. Zu Eduardo De Filippos
                                Sozialkritik in Napoli milionaria!, in: <i>Zibaldone</i>, n. 48,
                                99–114.
                            </p>


                            <h1>Sitografia su materiali audiovisivi</h1>

                            <h2>Canzoni:</h2>

                            <p className="bibl">
                                Roberto Murolo: <i>’A tazz ‚’e cafè</i>:
                                <a href="https://www.youtube.com/watch?v=zRV7RAg5iyA"
                                    target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=zRV7RAg5iyA</a>
                            </p>

                            <p className="bibl">
                                Fabrizio De Andrè: <i>Don Raffaè</i>:
                                <a href="https://www.youtube.com/watch?v=yp_CvmOvLoQ"
                                    target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=yp_CvmOvLoQ</a>
                            </p>

                            <p className="bibl">
                                Fiorella Mannoia: <i>Caffè nero bollente</i>:
                                <a href="https://www.youtube.com/watch?v=VAj21CIrHQ4"
                                    target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=VAj21CIrHQ4</a>
                            </p>

                            <p className="bibl">
                                Pino Daniele: <i>Na tazzulell ’e cafè</i>:
                                <a href="https://www.youtube.com/watch?v=Dqo730l_eCs"
                                    target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=Dqo730l_eCs</a>
                            </p>

                            <h2>Teatro:</h2>

                            <p className="bibl">
                                Carlo Goldoni: <i>La bottega del caffè</i> (scena):
                                <a href="https://www.youtube.com/watch?v=Qbst9hi4Jao"
                                    target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=Qbst9hi4Jao</a>
                            </p>

                            <p className="bibl">
                                Eduardo De Filippo: <i>Questi fantasmi</i>, Atto II, sc. 1:
                                <a href="https://www.youtube.com/watch?v=YllQLj0h6mo"
                                    target="_blank" rel="noreferrer">
                                    https://www.youtube.com/watch?v=YllQLj0h6mo</a>
                            </p>

                            <p className="bibl">
                                Eduardo De Filippo: <i>Considerazioni sul caffè</i>
                                <a href="https://www.youtube.com/watch?v=-rcI7sQwRe8"
                                    target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=-rcI7sQwRe8</a>
                            </p>

                            <h2>Televisione:</h2>

                            <p className="bibl">
                                Nanni Loy: <i>La zuppetta</i> (da: Specchio segreto):
                                <a href="https://www.youtube.com/watch?v=pbjtWRquNXA"
                                    target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=pbjtWRquNXA</a>
                            </p>

                            <h2>Pubblicità:</h2>

                            <p className="bibl">
                                <i>Carmensita paulista</i>:
                                <a href="https://www.youtube.com/watch?v=_elqPaI-XHQ"
                                    target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=_elqPaI-XHQ</a>
                            </p>

                            <p className="bibl">
                                <i>“Caballero” paulista</i>:
                                <a href="https://www.youtube.com/watch?v=wgbUR_WkY00&feature=watch_response"
                                    target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=wgbUR_WkY00&feature=watch_response</a>
                            </p>

                            <p className="bibl">
                                <i>Bialetti 1</i>:
                                <a href="https://www.youtube.com/watch?v=uNbXtCqDIQE"
                                    target="_blank" rel="noreferrer"> https://www.youtube.com/watch?v=uNbXtCqDIQE</a>
                            </p>

                            <p className="bibl">
                                <i>Bialetti 2</i>:
                                <a href="https://www.youtube.com/watch?v=D5A-4ZOX468"
                                    target="_blank" rel="noreferrer"> https://www.youtube.com/watch?v=D5A-4ZOX468</a>
                            </p>

                            <h2>Dalla rete:</h2>

                            <p className="bibl">
                                <i>How to make an italian coffee</i>:
                                <a href="https://www.youtube.com/watch?v=huC3E1c4SBs"
                                    target="_blank" rel="noreferrer"> https://www.youtube.com/watch?v=huC3E1c4SBs</a>
                            </p>

                            <p className="bibl">
                                <i>Cappuccino art</i>:
                                <a href="https://www.youtube.com/watch?v=UX8LXPm-Qb0"
                                    target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=UX8LXPm-Qb0</a>
                            </p>
                            <p className="bibl">
                                <i>International Coffee Organization</i>
                                <a href="http://www.ico.org/" target="_blank" rel="noreferrer">http://www.ico.org/</a>
                            </p>
                        </article>
                    </section>
                </div>
            </div>
            <UpArrow />
            <Footer />
        </div>

    )
}

export default Ubbidiente;