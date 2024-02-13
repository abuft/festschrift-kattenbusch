import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Header from "../Header";
import Rubrik from "../Rubrik";
import CoccoPortrait from "../../images/gcocco/gcocco-portrait.jpg";
import UpArrow from "../UpArrow";
import Footer from "../Footer";
import Ufe1Small from "../../images/gcocco/ufe-1_small.jpg";
import Faeto1Small from "../../images/gcocco/faeto-1_small.jpg";
import Faeto2Small from "../../images/gcocco/faeto-2_small.jpg";
import Faeto3Small from "../../images/gcocco/faeto-3_small.jpg";
import Faeto4Small from "../../images/gcocco/faeto-4_small.jpg";
import Faeto5Small from "../../images/gcocco/faeto-5_small.jpg";
import Faeto6Small from "../../images/gcocco/faeto-6_small.jpg";
import DkGc1980Small from "../../images/gcocco/dk-gc-1980_small.jpg";

const images = [
    { src: "https://festschrift-kattenbusch.de/images/gcocco/ufe-1.jpg", title: "Fig. 1", description: "Manifesto dell’Università Francoprovenzale d’Estate" },
    { src: "https://festschrift-kattenbusch.de/images/gcocco/faeto-1.jpg", title: "Fig. 2", description: "Veduta di Faeto con la Chiesa SS. Salvatore" },
    { src: "https://festschrift-kattenbusch.de/images/gcocco/faeto-2.jpg", title: "Fig. 3", description: "Faeto, pausa all'ombra" },
    { src: "https://festschrift-kattenbusch.de/images/gcocco/faeto-3.jpg", title: "Fig. 4", description: "Centro storico di Faeto" },
    { src: "https://festschrift-kattenbusch.de/images/gcocco/dk-gc-1980.jpg", title: "Fig. 5", description: "Dieter Kattenbusch e il suo informante Giuseppe Cocco a Faeto nel 1980" },
    { src: "https://festschrift-kattenbusch.de/images/gcocco/faeto-4.jpg", title: "Fig. 6", description: "Un vicolo a Faeto" },
    { src: "https://festschrift-kattenbusch.de/images/gcocco/faeto-5.jpg", title: "Fig. 7", description: "Faeto" },
    { src: "https://festschrift-kattenbusch.de/images/gcocco/faeto-6.jpg", title: "Fig. 8", description: "Faeto, Il Muncipio" },
]

function Cocco(props) {

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <div id="Wrapper" className="container_14">
            <div id="Header">
                <Header id={props.author} />
                <div className="grid_9">
                    <h1 id="main_title">Il Francoprovenzale di Faeto</h1>
                    <p id="author">Giuseppe Cocco, Faeto (FG). A colloquio con Fabio
                        Tosques.<br />
                        Faeto, 12 Agosto 2011.</p>
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
                captions={
                    {
                        showToggle: true,
                        descriptionMaxLines: 5,
                        descriptionTextAlign: "center"
                    }
                }
            />

            <div id="Teasers" className="clearfix">
                <div className="grid_9">
                    <p className="question">
                        Oggi si svolge la prima edizione dell’Università Francoprovenzale
                        d’Estate (UFE) a Faeto. Con questa manifestazione quali sono i fini che
                        vi siete proposti?
                    </p>
                    <p>
                        L’Università Francoprovenzale d’Estate (UFE) è un progetto, al
                        quale io, appena eletto sindaco, nel marzo 2010, ho dato grande impulso,
                        avendolo già inserito nel mio programma amministrativo. Mi sono
                        applicato in prima persona per molti mesi per la sua realizzazione,
                        avendo posto la “cultura” al primo posto nella mia agenda. Che cosa
                        significa portare l’Università Francoprovenzale a Faeto? Significa
                        che da oggi cambia radicalmente il modo di preservare e valorizzare una
                        lingua minoritaria, nel nostro caso la lingua francoprovenzale di Faeto.
                        Ossia: da oggi la lingua francoprovenzale avrà un peso di maggior
                        prestigio, sia tra la popolazione sia a livello istituzionale.
                        L’amministrazione comunale e io stesso in prima persona, in qualità di
                        Sindaco, ci crediamo fortemente nella riuscita di questo progetto, teso
                        in prospettiva decennale. Un altro obiettivo strategico è quello di
                        contribuire a far sì che tutti i Faetani si rendano consci di questo
                        loro immenso ed unico patrimonio, perché sono proprio loro i soli che
                        parlano ancora la lingua francoprovenzale. È dunque compito loro
                        attivarsi per conservare le proprie radici e alimentarle esprimendosi
                        nella lingua madre, che tutti quanti abbiamo appreso dalle nostre madri,
                        dai nostri nonni, dai nostri genitori. Naturalmente ciò sarà solo
                        possibile con grande impegno e con volontà ferrea specialmente da parte
                        degli amministratori, che dovranno elaborare e produrre atti idonei, in
                        perfetto raccordo con il Parlamento nazionale e con il Consiglio
                        regionale della Puglia. Mi preme qui rammentare che l’Italia solamente
                        nel 1999 è riuscita ad emanare la legge n. 482, con lo scopo di
                        valorizzare e tutelare le minoranze linguistiche cosiddette
                        “storiche”, mentre la regione Puglia continua a rimanere al palo.
                        Approfitterò della prima edizione dell’Università Francoprovenzale
                        estiva, per lanciare un messaggio forte ai legislatori, col fine di
                        sensibilizzarli maggiormente a questa tematica, decisiva per le nostre
                        popolazioni.
                    </p>
                </div>
                <div className="grid_5">

                    <div className="abouttheauthor">
                        <img src={CoccoPortrait} width="120"
                            height="120" alt=" - Portrait" />
                        <div className="abouttheauthorfont"><br /><br />
                            <b>Giuseppe Cocco</b>,
                            Dott., Sindaco del comune di Faeto (FG). Direttore dell'Ufficio
                            Contenzioso ed Autorizzazioni di Polizia della Questura
                            di Foggia. Giurista, poeta e scrittore, scrive
                            correntemente anche in latino. Ricercatore attento ed
                            appassionato della minoranza linguistica
                            francoprovenzale di Faeto. Negli anni settanta, Giuseppe
                            Cocco è stato tra gli informanti principali per il dottorato di
                            ricerca (“Das Frankoprovenzalische in
                            Süditalien”) di Dieter Kattenbusch.
                        </div>
                    </div>
                    <div className="clearfloat"></div>
                </div>
            </div>

            <div id="Main">
                <div id="Articles" className="grid_14">
                    <section id="posts">
                        <article className="post">
                            <figure className="imageleft">
                                <p style={{ width: "200px" }}>Fig. 1: Manifesto
                                    dell’UFE</p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(0); }}>
                                    <img src={Ufe1Small} width="200"
                                        height="270" alt="Manifesto UFE" />
                                </button>
                            </figure>

                            <p className="question">
                                Avete l’intenzione di ripetere questa manifestazione ogni dieci anni.
                                Perché proprio ogni dieci anni?
                            </p>

                            <p>
                                Non è così. Il progetto avrà cadenza annuale, nel senso che ogni anno
                                sarà riproposto, riaggiornato e ricalibrato secondo le esigenze che via
                                via dovessero emergere. Avrà, però, una prospettiva decennale, essendo
                                legato alla mia posizione istituzionale di Sindaco, che come è noto, in
                                Italia può rimanere in carica per un periodo massimo di dieci
                                anni. Voglio far presente che, in generale, qui in Italia, i fondi per i
                                progetti culturali sono molto scarsi, per cui diventa davvero difficile
                                portare avanti obiettivi ambiziosi come l’UFE. In ogni caso, un buon
                                amministratore si deve battere per far sì che attraverso la tutela
                                della lingua madre, si possa sviluppare anche un’occasione di crescita
                                occupazionale, a vantaggio soprattutto dei giovani che hanno scelto di
                                vivere a Faeto.
                            </p>

                            <p className="question">
                                La regione non vi aiuta con contributi mirati?
                            </p>
                            <p>
                                Come dicevo, la Puglia è l’unica regione d’Italia a non aver
                                ancora legiferato in materia di tutela delle lingue minoritarie, per cui
                                in assenza di qualsivoglia normativa è impossibile procedere alla
                                erogazione di finanziamenti o contributi in merito. Nei mesi scorsi,
                                tuttavia ho portato il problema delle minoranze linguistiche
                                all’attenzione dell’Assessore delegato, ricevendo ampie
                                assicurazioni d’interessamento. Speriamo bene!
                            </p>

                            <p className="question">
                                Quali lingue minoritarie esistono in Puglia?
                            </p>
                            <p>
                                Il francoprovenzale, a Faeto e Celle, l’arbëresh, a Chieuti e a
                                Casalvecchio, e il griko, in molti paesi del Salento.
                            </p>

                            <p className="question">
                                A Faeto, i giovani crescono normalmente con tre idiomi: la lingua
                                francoprovenzale, un dialetto pugliese e la lingua standard, cioè
                                l’italiano. Quale dialetto pugliese influisce la parlata dei Faetani?
                            </p>
                            <p>
                                A Faeto, in realtà, ultimamente convivono quattro lingue: nelle
                                famiglie con genitori faetani si parla quasi sempre il francoprovenzale;
                                in alcune famiglie si parla un dialetto apulo-sannitico che è comune
                                nei paesi limitrofi; si parla poi il dialetto foggiano e, naturalmente,
                                l’italiano come lingua nazionale. Nelle scuole di Faeto, poi, gli
                                alunni apprendono anche le lingue straniere: l’inglese e il francese.
                                Quindi, i bambini che vivono a Faeto oggi, in realtà hanno la
                                possibilità di parlare, sia pure a livello rudimentale, almeno quattro
                                lingue. Il mio impegno in qualità di Sindaco è e sarà quello di far
                                sì che il francoprovenzale resti la lingua di comunicazione ordinaria o
                                quantomeno prevalente.
                            </p>
                            <figure className="imageright">
                                <p style={{ width: "270px" }}>Fig. 2: Veduta di Faeto</p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(1); }}>
                                    <img src={Faeto1Small} width="270"
                                        height="200" alt="Veduta di Faeto" />
                                </button>
                            </figure>

                            <p className="question">
                                Quante persone parlano ancora attivamente il francoprovenzale a Celle
                                San Vito e Faeto?
                            </p>
                            <p>
                                Se consideriamo che a Faeto e Celle San Vito in totale vivono meno di
                                mille persone, stimo in circa 400 quelle che parlano correntemente la
                                lingua francoprovenzale.
                            </p>

                            <p className="question">
                                Tra Celle e Faeto?
                            </p>
                            <p>
                                Sì, tra Celle e Faeto.
                            </p>

                            <p className="question">
                                In quale occasione usate normalmente la lingua francoprovenzale?
                            </p>
                            <p>
                                Il francoprovenzale io lo uso sempre e senza eccezioni, parlando con i
                                miei compaesani. Più specificamente, parlo il francoprovenzale con le
                                mie sorelle, con i miei fratelli, con i miei nipoti che hanno sette e
                                dieci anni, con i miei zii e con i miei cugini.
                            </p>

                            <p className="question">
                                Significa che sia in municipio, sia in piazza si parla e si sente ancora
                                il francoprovenzale?
                            </p>
                            <p>
                                Sì, sì. Sono orgoglioso di essere un faetano “doc”: i miei
                                antenati, al seguito di Carlo I d’Angiò, vennero in Puglia e dettero
                                origine all’attuale abitato di Faeto. Tutti i dipendenti, in
                                municipio, parlano il francoprovenzale. Con loro mi esprimo sempre in
                                francoprovenzale. Nelle piazze e nelle strade si sente costantemente il
                                francoprovenzale: è sicuramente una lingua “viva”. Si sente anche
                                qualcuno che si esprime in italiano.
                            </p>
                            <figure className="imageleft">
                                <p style={{ width: "270px" }}>Fig. 3: Faeto</p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(2); }}>
                                    <img src={Faeto2Small} width="270"
                                        height="200" alt="Faeto" />
                                </button>
                            </figure>

                            <p className="question">
                                In lingua nazionale, non in un dialetto pugliese?
                            </p>
                            <p>
                                In italiano, solo in italiano.
                            </p>

                            <p className="question">
                                Sull’origine del francoprovenzale a Celle a Faeto esistono due
                                ipotesi. La prima parla di soldati angioini, raggiunti poi dalle loro
                                famiglie, dopo la battaglia del 27 agosto 1269 si siano sistemati a
                                Faeto, e la seconda sostiene, che i primi a parlare il francoprovenzale
                                a Faeto e Celle siano stati i valdesi venuti verso il 1400. Quale delle
                                due ipotesi secondo Lei è la più probabile, la più sostenibile?
                            </p>
                            <p>
                                La tesi più sostenibile oggi, stando alle ricerche che anche io, come
                                studioso, ho condotto ultimamente, rimane sempre quella che fa
                                discendere la nostra origine a quel nucleo di soldati angioini impegnati
                                nella guerra contro i saraceni a Lucera alla fine del 1269.
                            </p>

                            <p className="question">
                                Non esiste nessun documento storico che sostiene l’ipotesi dei
                                valdesi?
                            </p>
                            <p>
                                Sì, intorno al 1400 molte famiglie valdesi, perseguitate dal
                                Sant’Uffizio, trovarono rifugio a Faeto. Sostenere, però, che
                                l’origine del francoprovenzale di Faeto sia dovuta alla presenza dei
                                valdesi è senz’altro errato, dal momento che questa ipotesi, pur se
                                suggestiva, non è corroborata da idonea documentazione.
                            </p>

                            <figure className="imageright">
                                <p style={{ width: "270px" }}>Fig. 4: Centro storico di Faeto</p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(3); }}>
                                    <img src={Faeto3Small} width="270"
                                        height="200" alt="Centro storico di Faeto" />
                                </button>
                            </figure>

                            <p className="question">
                                Il professor Kattenbusch è stato a Faeto negli anni settanta per
                                studiare il francoprovenzale a Faeto e a Celle San Vito. Come risultato
                                di questa ricerca lui ha pubblicato la sua tesi di dottorato con il
                                titolo “Das Frankoprovenzalische in Süditalien”. Ormai sono passati
                                più di trent’anni. Uno studioso contemporaneo, potrebbe rifare una
                                ricerca simile o troverebbe qualche difficoltà?
                            </p>
                            <p>
                                Quando venne Kattenbusch io avevo appena 14 anni e frequentavo il primo
                                anno del liceo classico a Lucera; subito nacque tra noi una grande
                                amicizia, rimasta inalterata nel tempo.
                            </p>
                            <p>
                                Lui venne a Faeto in un periodo poco felice. Era solo e cercava
                                alloggio. Fu accolto con molta gioia dalla mia famiglia e da altre
                                famiglie del paese. Era un signore al quale si potevano confidare tutti
                                i segreti della nostra lingua. Dopo il soggiorno del ’74 e ’75 è
                                tornato più volte fino alla fine gli anni settanta, per terminare la
                                sua tesi “Das Frankoprovenzalische in Süditalien” pubblicato nel
                                1982 a Tübingen. In questo lavoro ho dato un notevole contributo sia a
                                livello sintattico, morfologico, fonetico e grammaticale, sia a livello
                                di “spontan text”, come diceva lui. Ricordo che passava intere
                                giornate a registrare e a prendere appunti.
                            </p>

                            <figure className="imageleft">
                                <p style={{ width: "245px" }}>Fig. 5: D. Kattenbusch e
                                    G. Cocco a Faeto nel 1980</p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(4); }}>
                                    <img src={DkGc1980Small} width="245"
                                        height="440" alt="Dk e GC 1980" />
                                </button>
                            </figure>

                            <p className="question">
                                Oggi qual è la situazione?
                            </p>
                            <p>
                                Se tornasse oggi uno studioso tedesco secondo me non troverebbe tante
                                difficoltà come allora. Perché, nonostante le profonde trasformazioni
                                verificatesi in questi ultimi decenni, il francoprovenzale non ha subito
                                sensibili modifiche. Certo, si stanno intensificando alcune
                                “minacce” di cui tener conto, come i matrimoni misti, la
                                denatalità, il depauperamento demografico del paese, che alla lunga
                                potrebbero ridurre il francoprovenzale ad un fatto “di nicchia”,
                                scollegato dal contesto storico sociale.
                            </p>

                            <p className="question">
                                Ciò vuol dire che ci troviamo in una fase di transizione?
                            </p>
                            <p>
                                Penso di sì. Di qui la necessità di interventi mirati, come
                                l’Università Francoprovenzale d’Estate, una incisiva
                                legislazione regionale e nazionale, la riproposizione dello sportello
                                linguistico provinciale, l’incentivazione di pubblicazioni riguardanti
                                il francoprovenzale .
                            </p>
                            <p>
                                Solo così si riuscirà ad arginare il danno che può venire invece da
                                uso distorto oppure da un “non uso” della lingua francoprovenzale.
                                Questo è l’obiettivo che io mi sono posto come attività
                                amministrativa e come attività di sindaco. E penso di riuscire, perché
                                abbiamo tutte le caratteristiche e i presupposti per fare in maniera
                                tale che la lingua non muoia e rimanga sempre un elemento vitale.
                            </p>
                            <p className="question">
                                Lei ha detto che il professor Kattenbusch è stato più volte a Faeto.
                                In tutto, quanto tempo ha trascorso a Faeto per le ricerche per il suo
                                studio?
                            </p>
                            <p>
                                Eh, è stato qua sette o otto anni sicuramente. Dal mio primo anno di
                                liceo, anno scolastico ’73/’74, fino agli inizi degli anni ottanta.
                            </p>
                            <figure className="imageright">
                                <p style={{ width: "270px" }}>Fig. 6: Centro storico di Faeto</p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(5); }}>
                                    <img src={Faeto4Small} width="270"
                                        height="200" alt="Centro storico di Faeto" />
                                </button>
                            </figure>

                            <p className="question">
                                Sette, otto anni? Di continuazione?
                            </p>
                            <p>
                                No, no. È venuto a intervalli. È venuto per un anno. Poi non è venuto
                                per due anni, poi è tornato un altro anno anche in periodi diversi.
                                Come in un periodo invernale, quando c’era tantissima neve.
                                Trascorrevamo le serate in compagnia e organizzavamo con altri giovani
                                del paese delle belle festicciole, incontri felici e gioiosi. Lui era
                                molto bravo, era molto disponibile, molto scherzoso, raccontava
                                barzellette, indovinelli; mi ricordo che parecchie sere – avevo 14
                                anni – andammo da un vecchietto del paese che si chiamava Domenico
                                Ianelli, uno di quei cittadini che conosceva meglio degli altri le
                                parole in disuso, termini che già negli anni settanta non si usavano
                                più. Questo signore invece li conservava, scriveva anche dei versi, sia
                                pure in maniera semplice, perché non aveva studiato, era un falegname.
                                E mi ricordo che Dieter ci teneva particolarmente a questi incontri con
                                il signor Domenico Iannelli. E voleva che ogni volta che andava da
                                questo signor Domenico andassi pure io. E qui, tra una parola e
                                l’altra, rigorosamente in faetano, si finiva sempre con un buon
                                bicchiere di vino e con tante domande che mi poneva: cosa fai e cosa non
                                fai, quando ti sposi, quando non ti sposi. Insomma, più che amici ci
                                sentivamo quasi fratelli.
                            </p>

                            <p className="question">
                                È stato duro a Faeto l’inverno quell’anno?
                            </p>
                            <p>
                                Durissimo, è stato durissimo. Proprio quell’anno, e precisamente alla
                                fine del 1979, ci fu una nevicata storica, che bloccò tutto il paese,
                                isolandolo per quindici giorni. Ricordo anche che il paese rimase senza
                                energia elettrica per molti giorni, e Dieter fu costretto a utilizzare
                                un piccolo registratore alimentato a batterie.
                            </p>
                            <p>
                                Durante queste registrazioni traspariva palese una grande passione, un
                                grande entusiasmo per tutto ciò che riguardasse il francoprovenzale.
                                Anche per questo motivo ho dato anima e cuore per aiutarlo.
                            </p>

                            <p className="question">
                                E da allora non ha più visto Dieter?
                            </p>
                            <p>
                                Sì, da allora non ho più visto Dieter. Mi sono sentito con lui alla
                                fine del 1998, prima che fosse pubblicato il mio volume <i>Le uaje de
                                    ciannu</i> (<i>Le voci di casa</i>), il primo testo in assoluto concepito e
                                scritto in francoprovenzale, nel quale ho utilizzato per la prima volta
                                un codice linguistico, con regole certe e precise. Letti in anteprima i
                                miei testi, Dieter mi onorò di una sua bella e appassionata prefazione,
                                nella quale ha voluto ricordare quegli anni in cui veniva a Faeto, i
                                nostri lunghi incontri, gli incontri con i miei genitori e con altri
                                amici del paese, con i quali condividemmo lunghe notti invernali.
                            </p>
                            <figure className="imageleft">
                                <p style={{ width: "200px" }}>Fig. 7: Strada decorata a Faeto</p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(6); }}>
                                    <img src={Faeto5Small} width="200"
                                        height="270" alt="Strada decorata a proposito dell’UFE a Faeto" />
                                </button>
                            </figure>

                            <p className="question">
                                Alla fine avete parlato in francoprovenzale o in italiano come
                                all’inizio?
                            </p>
                            <p>
                                All’inizio si colloquiava in italiano, ma col passar del tempo Dieter
                                riuscì a impadronirsi del nostro idioma in modo da comprendere e
                                parlare il francoprovenzale correntemente. Molti dialoghi tra me e lui,
                                tra mio padre e lui, tra mia madre e lui, si tenevano in
                                francoprovenzale. Soprattutto nei suoi ultimi soggiorni a Faeto abbiamo
                                dialogato a lungo esclusivamente in lingua francoprovenzale.
                            </p>

                            <p className="question">
                                Quindi anche uno straniero può essere in grado di imparare la lingua
                                francoprovenzale di Faeto?
                            </p>
                            <p>
                                In linea di massima sì, però ci vuole inclinazione, tempo e passione.
                                Dieter aveva queste doti, e grazie a esse riuscì ad appropriarsi della
                                nostra lingua e a parlarla in maniera sistematica.
                            </p>

                            <p className="question">
                                Da quanto tempo esistono gli sportelli linguistici e di che cosa si
                                occupano?
                            </p>
                            <p>
                                Lo sportello linguistico è nato nel 2004 per iniziativa della provincia
                                di Foggia, con fondi previsti dalla legge 482 del 1999. È stato attivo
                                per cinque anni, e ha prodotto una grammatica, un vocabolario, un
                                glossario e alcuni testi, con la lingua codificata. Nel 2010 ha esaurito
                                la sua funzione, perché sono venuti meno i finanziamenti pubblici. Oggi
                                mi sto adoperando per reperire le risorse giuste per poterlo riattivare
                                al più presto.
                            </p>

                            <p className="question">
                                Avete contatti con la Francia, col Piemonte, con la Valle d’Aosta,
                                cioè con altri territori dove si parla ancora il francoprovenzale?
                            </p>
                            <p>
                                Oggi potete constatare che a questa prima edizione dell’Università
                                Francoprovenzale d’Estate sono giunte a Faeto un centinaio di persone
                                dalla Francia, dal Piemonte, dalla Valle d’Aosta, da Teramo. Da anni
                                curiamo il gemellaggio con la Valle d’Aosta, fondamentale perché
                                coinvolge le scuole di Faeto, che partecipano con vari progetti e
                                iniziative al concorso Abbé Cerlogne. Sicuramente mi adopererò per
                                instaurare rapporti sistematici con la Francia.
                            </p>

                            <p className="question">
                                Con una Francia che da secoli ha oppresso tutte le lingue minoritarie
                                sul suo territorio?
                            </p>
                            <p>
                                In Francia queste tendenze oppressive ultimamente stanno cambiando.
                                Tant’è che costatiamo grande considerazione per il nostro
                                francoprovenzale. Tenga conto, poi, che a Faeto ci sentiamo quasi più
                                francesi che italiani. (ride)
                            </p>

                            <figure className="imageright">
                                <p style={{ width: "270px" }}>Fig. 8: Munecipje di Faeto</p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(7); }}>
                                    <img src={Faeto6Small} width="270"
                                        height="200" alt="Munecipje di Faeto" />
                                </button>
                            </figure>

                            <p className="question">
                                Secondo Lei, quanti pugliesi sanno che esiste un’isola linguistica
                                francoprovenzale in Puglia?
                            </p>
                            <p>
                                Da 60 a 70 per cento dei Pugliesi sa che esiste una colonia
                                francoprovenzale, anche perché Faeto è nota per essere il paese più
                                alto di Puglia con i suoi 866 metri sul livello del mare ed è meta di
                                un turismo estivo. Cittadini dalla provincia di Foggia e dalla provincia
                                di Bari da sempre vengono a villeggiare a Faeto. Ecco perché la platea
                                di quelli che sono a conoscenza di questa particolare enclave nel sud
                                Appennino Dauno va sempre più aumentando.
                            </p>

                            <p className="question">
                                Perché in Italia lo sanno pochi?
                            </p>
                            <p>
                                Fuori dai confini regionali, in effetti, la conoscenza è limitata.
                                Sanno della nostra minoranza linguistica quasi esclusivamente gli
                                studiosi del settore. Lo sforzo nostro è quello di far sì che una
                                platea più grande sappia di questa realtà. Ma la cosa più importante
                                oggi è che a Faeto, come ho già detto in altre occasioni, gli abitanti
                                prendano coscienza che la cura e la pratica della lingua significa
                                essere fieri della propria identità e della propria storia. L’intero
                                paese si deve attivare per non far cadere oblio la sua cultura
                                d’origine e le tradizioni, indissolubilmente legate al
                                francoprovenzale. Perché là dove dovesse morire la lingua
                                francoprovenzale, inevitabilmente morirebbe anche il paese.
                            </p>

                            <p className="question">
                                Quindi per un futuro prospero del vostro paese che cosa vi siete
                                proposto?
                            </p>
                            <p>
                                Poiché ho sempre il futuro davanti, spero con questa iniziativa di
                                persuasione di fermare l’emorragia della “nostra parlata”. Sto
                                facendo un’opera di persuasione nelle singole famiglie e presso le
                                istituzioni scolastiche, giacché considero la scuola una delle poche
                                agenzie educative, certamente decisiva per il mantenimento e l’uso del
                                francoprovenzale. L’obiettivo è che la lingua si continui a parlare,
                                in caso contrario, al massimo tra vent’anni, saremo costretti a
                                chiudere completamente il paese.
                            </p>

                            <p className="question">
                                Se io tornassi fra cinquanta anni, sentirei parlare ancora il
                                francoprovenzale a Faeto?
                            </p>
                            <p>
                                Dipende; se non ci sarà un’implosione demografica, allora credo di
                                sì. L’auspicio è che tutte le iniziative, quelle già fatte e quelle
                                in cantiere, portino alla sopravvivenza del francoprovenzale.
                            </p>

                            <p className="question">
                                C’è speranza?
                            </p>
                            <p>
                                Sì, se non fossi così convinto, non m’impegnerei con tutta questa
                                energia ed entusiasmo. Tutto il mio lavoro è avvolto da un filo di
                                speranza, che m’incita a fare il massimo per salvare la lingua madre,
                                cioè il francoprovenzale di Faeto.
                            </p>

                            <p className="question">
                                Caro sindaco, La ringrazio per il colloquio.
                            </p>
                            <p>
                                Grazie a lei.
                            </p>

                        </article>
                    </section>
                </div>
            </div>
            <UpArrow />
            <Footer />
        </div>
    );
}

export default Cocco;