import Rubrik from "../Rubrik";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Footer from "../Footer";
import ErnstPortrait from '../../images/gernst/gernst-portrait.jpg';
import Morinesio_small from '../../images/gernst/morinesio_small.jpg';
import Obacco_small from '../../images/gernst/obacco_small.jpg';
import Paias_small from '../../images/gernst/paias_small.jpg';
import Garzino_small from '../../images/gernst/garzino_small.jpg';
import Soleglio_small from '../../images/gernst/soleglio_small.jpg';
import Header from "../Header";
import UpArrow from "../UpArrow";

function Ernst(props) {

    const images = [
        { src: 'https://festschrift-kattenbusch.de/images/gernst/morinesio.jpg', caption: 'Morinesio/Mourines (CN)' },
        { src: 'https://festschrift-kattenbusch.de/images/gernst/obacco.jpg', caption: 'Obacco/L’Ubac (CN)' },
        { src: 'https://festschrift-kattenbusch.de/images/gernst/paias.jpg', caption: 'Paiàs/Palhás (CN)' },
        { src: 'https://festschrift-kattenbusch.de/images/gernst/garzino.jpg', caption: 'Garzino' },
        { src: 'https://festschrift-kattenbusch.de/images/gernst/soleglio.jpg', caption: 'Soleglio Bue/Solelha Buou (CN)' }
    ];

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <div>
            <div id="Wrapper" className="container_14">
                <div id="Header">
                    <Header id={props.author} />
                    <div className="grid_9">
                        <h1 id="main_title">Una cartolina dalla Val Maira</h1>
                        <p id="author">Gerhard Ernst, Neutraubing/Regensburg</p>
                    </div>
                    <Rubrik />
                </div>

                <Lightbox
                    index={index}
                    open={open}
                    close={() => setOpen(false)}
                    controller={{ closeOnBackdropClick: true }}
                    slides={images.slice(0)}
                />

                <div id="Teasers" className="clearfix">
                    <div className="grid_9">
                        {/* <!-- erster Abschnitt hier einfuegen --> */}
                        <p>
                            A un romanista può capitare di trovarsi casualmente e non come
                            ricercatore in una zona che presenta un interesse particolare dal punto
                            di vista linguistico. E allora, anche quando non si è specialisti della
                            situazione linguistica di quella zona, il romanista in noi si fa
                            sentire, vorrebbe subito andare in cerca d’informazioni e approfittare
                            dell’occasione per parlare con la gente del luogo ed eventualmente
                            fare una piccola inchiesta.<sup><a href="#fn1"
                                name="fz1">1</a></sup> Ma attenzione: Ci sono gli
                            specialisti della
                            materia che da anni si sono dedicati allo studio della zona, e che hanno
                            documentato con dovizia di materiali sia la relativa varietà
                            linguistica nelle sue strutture grammaticali e lessicali sia la
                            situazione (socio-)linguistica. Per un lavoro tale la presenza casuale
                            di pochi giorni non può essere sufficiente per una ricerca
                            approfondita<sup><a href="#fn2" name="fz2">2</a></sup>:
                            ci si comporterebbe come dilettanti e rischierebbe di
                            commettere errori grossolani.
                        </p>
                        <p>
                            Mi sono trovato recentemente (luglio 2011) nella situazione descritta,
                            quando ero con un gruppo di amici in Val Maira (com. Stroppo, borgata
                            Morinesio (cf. <a href="#abb1" name="b1">Fig.
                                1</a>), a circa 1500 m d’altitudine) per fare musica
                            da camera e preparare due concerti nelle chiese del
                            comune, Santa Maria di Morinesio
                            e San Peyre. Non starò qui a fare gli elogi (meritati) della bellezza
                            naturale di questa valle, di un turismo ponderato, che risparmia alla
                            valle le conseguenze negative del turismo di massa, della gentilezza
                            della gente e dell’alta qualità della gastronomia. Parliamo piuttosto
                            degli aspetti linguistici.
                        </p>

                    </div>
                    <div className="grid_5">

                        <div className="abouttheauthor">
                            {/* <!-- Authorbild --> */}
                            <img src={ErnstPortrait} width="150"
                                height="126" alt=" - Portrait" />
                            <div className="abouttheauthorfont"><br /><br />
                                {/* <!-- Authorbeschreibung (Text) --> */}
                                <b>Gerhard Ernst</b>, Prof. em. Dr., geb. 1937. Studium
                                der Romanistik und der Klassischen Philologie in Erlangen und Rom.
                                1966–74
                                Assistent am Seminar für Romanische Philologie an der Universität
                                Erlangen-Nürnberg, ab 1976 bis zur Emeritierung 2002 Professor für
                                romanische Sprachwissenschaft an der Universität Regensburg.
                                <br />
                                <span style={{ color: "#666666" }}>Herr Kattenbusch war an meinem Lehrstuhl (am Institut für Romanistik
                                    der Universität Regensburg) vom 1.11.1980 bis 31.12.1988
                                    Wissenschaftlicher Assistent (bzw. in anderer Terminologie
                                    ‚Akademischer Rat auf Zeit‘).</span>
                            </div>
                            <div className="clearfloat"></div>
                        </div>
                    </div>
                </div>

                <div id="Main">
                    <div id="Articles" className="grid_14">
                        <section id="posts">
                            <article className="post">
                                {/* <!-- Content of the article --> */}
                                <figure className="imageleft">
                                    <p style={{ width: "150px" }}>
                                        <a href="#b1"
                                            name="abb1">Fig. 1</a>:
                                        Morinesio/Mourines (CN)
                                    </p>
                                    <button type="button" onClick={() => {
                                        setIndex(0)
                                        setOpen(true)
                                    }}>
                                        <img src={Morinesio_small} width="150"
                                            height="100" alt="Morinesio" />
                                    </button>
                                </figure>

                                <p>
                                    Val Maira, insieme alle altre valli occitane della provincia di Cuneo,
                                    costituisce l’estrema parte orientale dell’Occitania. Essa non è
                                    rimasta sconosciuta ai linguisti: Grassi (1958) consacrò alla Val Maira
                                    le pagine 93–108 del suo studio classico sulle parlate provenzali e
                                    francoprovenzali delle valli cisalpine; i relativi rilievi furono fatti
                                    nel 1954 nei comuni di Elva, Stroppo, Celle di Macra, San Damiano Macra
                                    (capoluogo e frazione di Paglieres). Per la sua ricerca Grassi poteva
                                    inoltre basarsi su Biondelli (1853) (<i>Parabola del Figliuol Prodigo</i>,
                                    raccolta in una frazione di Acceglio ed a Elva) e sull’ inchiesta
                                    dell’ALI (del 1936), in cui la Val Maira è rappresentata dal punto 72
                                    (Villaro, frazione di Acceglio). L’AIS non ha nessun punto in Val
                                    Maira<sup><a href="#fn3" name="fz3">3</a></sup>; lo
                                    stesso vale per VIVALDI<sup><a href="#fn4"
                                        name="fz4">4</a></sup>. L’ALEPO invece contiene i
                                    punti 620 Cartignano nella parte inferiore e 610
                                    Canosio nella parte superiore (o meglio: in una valle
                                    laterale) della valle.
                                </p>
                                <p>
                                    Tra gli studi più recenti sulle valli occitane bisogna rilevare le
                                    ricerche di carattere prevalentemente sociolinguistico di Allasino et
                                    al. (2007) in cui si cita tra l’altro una tesi di laurea su Cartignano
                                    (p. 2, n. 7) che non ho potuto consultare. L’inchiesta fu realizzata
                                    negli anni 2005/2006; punti d’inchiesta che riguardano Val Maira sono
                                    Acceglio, Canosio, Roccabruna e – con certe riserve (v. sotto) –
                                    Dronero e Villar San Costanzo.
                                </p>
                                <p>
                                    Dal punto di vista amministrativo la Val Maira fa parte della provincia
                                    di Cuneo e costituisce con la vicina Val
                                    Grana<sup><a href="#fn5" name="fz5">5</a></sup> la
                                    Comunità Montana
                                    Valli Grana e Maira. Val Maira stessa è costituita da 14 comuni con
                                    22.006 abitanti. Tolti i 18.914 abitanti dei grandi comuni situati
                                    all’ingresso della valle e in pianura (Dronero, Villar San Costanzo e
                                    Busca) rimangono ancora 3.092 abitanti per la valle
                                    vera e propria.<sup><a href="#fn6"
                                        name="fz6">6</a></sup> Per poter dare risposte
                                    soddisfacenti alle domande del tipo ‘quanti di loro
                                    hanno l’occitano come prima lingua o madrelingua,
                                    quanti hanno appreso l’occitano più tardi, quanti
                                    hanno conoscenze passive’ ecc. il mio soggiorno è
                                    stato troppo breve. Allasino et al. 2007 risponde a
                                    queste domande solo per alcuni comuni scelti (di cui
                                    nessuna è situata in Val Maira) e per l’‘area
                                    occitanica’ nel suo insieme.<sup><a href="#fn7"
                                        name="fz7">7</a></sup>
                                </p>
                                <p>
                                    Da osservatore casuale durante i dieci giorni (pieni di altre attività)
                                    fui però colpito da tre fenomeni relativamente recenti, che meritano di
                                    essere portati alla conoscenza di un pubblico di romanisti.
                                </p>
                                <p>
                                    Chi percorre in macchina la Strada provinciale 422 del fondovalle o chi
                                    fa una passeggiata lungo uno dei percorsi alpini, scopre all’entrata
                                    dei comuni e delle borgate cartelloni come quello che si vede in <a href="#abb2" name="b2">Fig. 2</a>:<sup><a href="#fn8" name="fz8">8</a></sup>
                                </p>

                                <figure className="imageright">
                                    <p style={{ width: "197px" }}><a href="#b2"
                                        name="abb2">Fig. 2</a>:
                                        Obacco/L’Ubac (CN)</p>
                                    <button type="button" onClick={() => {
                                        setIndex(1);
                                        setOpen(true)
                                    }}>
                                        <img src={Obacco_small} width="197"
                                            height="276" alt="Obacco" />
                                    </button>
                                </figure>

                                <p>
                                    Non si tratta di un semplice cartellone bilingue, perché troviamo oltre
                                    al nome ufficiale italiano <i>Obacco</i> e quello
                                    occitano <i>L’Ubac</i> altre informazioni:
                                    l’indicazione dell’altitudine s.l.m., l’etimologia
                                    del toponimo, curiosità d’interesse naturale, architettonico,
                                    artistico, turistico, il responsabile (la Comunità Montana) e la base
                                    del finanziamento (la legge 482 del 1999). Il toponimo è dato di solito
                                    nella “grafia classica”, che è quella alibertina del 1935, come
                                    viene spiegato in nota. Questa scelta non va da sé: essa costituisce
                                    una opzione per una – relativa – unitarietà dell’occitano, almeno
                                    nella grafia, di fronte alla grafia provenzale di tipo mistraliano, che
                                    dal punto di vista geografico e del tipo di dialetto sarebbe stata più
                                    vicina. Grafie di quest’ultimo tipo sembrano però avere una certa
                                    tradizione per alcune borgate; in questi casi vengono date le due
                                    grafie: quella “classica”, ‘panoccitana’ e quella “locale”,
                                    sia di carattere del tutto particolare (“personale”) sia nella
                                    varietà propugnata dalla <i>Escolo dòu Po</i> (cf. <a href="#abb3" name="b3">Fig. 3</a>).
                                </p>
                                <p>
                                    Differenze grafiche di questo tipo esistono nei casi
                                    seguenti: <i>Lou Serre</i> (grafia locale)/<i>Lo
                                        Serre</i> (grafia classica) e casi simili con
                                    l’articolo, <i>Lou Preit/Lo Praet</i>.
                                </p>
                                <p>
                                    Il nome ufficiale italiano corrisponde di solito a quello occitano nel
                                    senso (e spesso etimologicamente): <i>Colombero
                                        /Colombièr</i>, <i>Corte/La Cort</i> ecc.
                                </p>
                                <p>
                                    Una trasposizione solo fonetica dell’origine di <i>Obacco/L’Ubac</i> (cf. <a href="#abb2" name="b2">Fig. 2</a>): una
                                    trasposizione che tiene conto del senso (anche etimologicamente) sarebbe
                                    <i>Opaco</i>. Anche per <i>Garzino Inferiore/Lou (Lo)
                                        Guercin Sotan</i> (cf. <a href="#abb4" name="b4">Fig. 4</a>) troviamo nella prima parte una
                                    trasposizione solo fonetica, nella seconda la
                                    traduzione italiana del termine occitano.
                                </p>

                                <figure className="imageleft">
                                    <p style={{ width: "197px" }}><a href="#b3"
                                        name="abb3">Fig. 3</a>:
                                        Paiàs/Palhás (CN)
                                    </p>
                                    <button type="button" onClick={() => {
                                        setIndex(2);
                                        setOpen(true)
                                    }}>
                                        <img src={Paias_small} width="197"
                                            height="276" alt="Paiàs" />
                                    </button>
                                </figure>


                                <p>
                                    Per il toponimo occitano <i>Solelha Buou</i> (cf. <a href="#abb5" name="b5">Fig. 5</a>) il
                                    commento etimologico accenna dubitativamente
                                    (“potrebbe richiamare …”) a toponimi provenzali
                                    del tipo <i>Beau Soleil</i>, <i>beu solelh</i>.
                                    Ma per la creazione del toponimo italiano <i>Soleglio
                                        Bue</i> si è pensato ovviamente a una etimologia
                                    diversa. E il Dizionario
                                    Italiano-occitano/occitano-italiano, pubblicato dalla stessa
                                    Associazione <i>Espaci Occitan</i> (Lamuela/Pellerino
                                    2008) sembra dar ragione a quest’ultima
                                    interpretazione: occ. <i>buou</i>/it. <i>bue</i>, ma
                                    it. <i>bello</i>/okz. <i>bel</i>. <i>Solelha Buou</i> sarebbe
                                    allora il “posto dove i buoi stanno al
                                    sole”.<sup><a href="#fn9" name="fz9">9</a></sup>
                                    Il controllo sui dati geografici conferma questa
                                    interpretazione: “La Borgata <i>Soleglio Bue</i> è ai
                                    piedi di un pascolo esposto a sud, quindi molto
                                    soleggiato e dove ancora oggi i margari
                                    portano le vacche ad alpeggiare” (informazione R. Colombero).
                                </p>

                                <p>
                                    Eccezionalmente una borgata ha due nomi completamente diversi in
                                    italiano e in occitano; così nel caso di <i>Gauteri/La
                                        Ruaa Gròssa</i>.
                                </p>
                                <p>
                                    Quanto ai nomi delle strade un’iniziativa interessante – e forse
                                    unica in Italia – fu realizzata nel comune di Roccabruna: un completo
                                    ribattezzamento – bilingue – della rete stradale, nell’intenzione
                                    di promuovere la conoscenza della cultura e delle tradizioni occitane.
                                    Così furono costituiti quartieri odonomastici a temi: regioni
                                    d’Occitania (p. es. <i>Strada Linguadoca – Chamin Lengadòc</i>),
                                    trovatori (p. es. <i>Piazzale dei Trovatori – Plan di
                                        Trobadors</i>; <i>Strada Beatrice di Die – Chamin
                                            Beatriz de Dia</i>), storia dell’Occitania
                                    (p. es. <i>Strada dei Catari – Chamin di Càtars</i>), personaggi
                                    dell’arte e della scienza (p. es. <i>Strada Hans Clemer – Chamin
                                        Magistre d’Elva</i>), poeti, musica, musicisti
                                    (p. es. <i>Stradina Renato Nelli – Quintana Renat
                                        Nelli</i>; <i>Stradina “Se Canta” – Quintana “Se
                                            Chanta”</i>).
                                </p>

                                <figure className="imageright">
                                    <p style={{ width: "197px" }}><a href="#b4"
                                        name="abb4">Fig. 4</a>:
                                        Garzino Inferiore/Lou (Lo)
                                        Guercin Sotan (CN)
                                    </p>
                                    <button type="button" onClick={() => {
                                        setIndex(3);
                                        setOpen(true)
                                    }}>
                                        <img src={Garzino_small} width="197"
                                            height="276" alt="Garzino Inferiore" />
                                    </button>
                                </figure>

                                <p>
                                    Sulla conoscenza e sulla pratica attiva della lingua occitana in Val
                                    Maira non oserei dare un giudizio: è difficile sentir parlare occitano
                                    nelle strade e per quanto riguarda le opinioni circa la lingua e
                                    l’antagonismo delle lingue, un visitatore in pochi giorni è soggetto
                                    alle proprie esperienze che saranno in gran parte casuali come la sua
                                    presenza sul luogo. Per questi aspetti rimando ancora una volta ad
                                    Allasino et al. 2007, che ci informa che il 40 per cento dei parlanti
                                    dell’area occitana nell’intero Piemonte occidentale dichiara di
                                    avere l’occitano come madrelingua o come una delle due madrelingue (v.
                                    nota 8). Questa cifra, però, significa anche che il 60 per cento ha una
                                    madrelingua diversa (piem. 40,2 per cento, ital. 15,3 per cento). Grazie
                                    all’insegnamento scolastico dell’italiano (e in italiano) non
                                    esistono però problemi di comunicazione e non ci sono restrizioni
                                    nell’uso. Cito ancora Roberto Colombero, che mi dice: “Qui da noi
                                    l’italiano non è mai stato considerato come una lingua imposta.”
                                </p>
                                <p>
                                    In un certo qual modo esiste però anche il desiderio di imparare la
                                    lingua tradizionale del posto. L’occitano non costituisce in nessun
                                    modo una materia obbligatoria a scuola. Tanto più sono importanti certe
                                    attività intraprese da organizzazioni culturali, dai comuni, dalle
                                    comunità montane. In questo ambito hanno un ruolo considerevole le
                                    iniziative dell’<i>Espaci Occitan</i> (con la sede a Dronero), Associazione
                                    di Enti pubblici, che si propone la promozione linguistica, culturale e
                                    turistica delle valli occitane attraverso il suo Istituto di Studi
                                    occitani (con relativa biblioteca), il museo <i>Sòn de
                                        lenga</i>, lo Sportello Linguistico e la Bottega
                                    Occitana.<sup><a href="#fn10" name="fz10">10</a></sup>
                                    I suoi corsi di cultura e lingua
                                    occitana, iniziati dal 1998/99 come corsi in presenza, dal 2004 come
                                    corsi virtuali (svolti, cioè, in modalità online) si svolgono su tre
                                    livelli consecutivi (+ un corso junior per ragazzi sotto i 14 anni).
                                    Essi sono seguiti – mi spiega Rosella Pellerino, direttrice dei corsi
                                    e autrice del materiale didattico – non tanto per assolute necessità
                                    di comunicazione, ma per motivi legati alla tradizione e alla cultura
                                    della zona: Un primo gruppo degli studenti consiste di locutori attivi
                                    che però non sanno scrivere in occitano; un secondo gruppo è
                                    costituito da persone con una conoscenza passiva dell’occitano, che
                                    però per vari motivi – come p. es. un espatrio temporario – hanno
                                    perduto il contatto con le valli occitane e desiderano riallacciarsi
                                    alle proprie radici. Un terzo gruppo, infine,
                                    cominicia <i>ex ovo</i>, seguendo i corsi per
                                    interesse culturale, un interesse culturale destato in
                                    questi ultimi anni tra l’altro da vari gruppi musicali
                                    che cantano in occitano.<sup><a href="#fn11"
                                        name="fz11">11</a></sup>
                                </p>

                                <figure className="imageleft">
                                    <p style={{ width: "197px" }}><a href="#b5"
                                        name="abb5">Fig. 5</a>:
                                        Soleglio Bue/Solelha Buou (CN)
                                    </p>
                                    <button type="button" onClick={() => {
                                        setIndex(4);
                                        setOpen(true)
                                    }}>
                                        <img src={Soleglio_small} width="197"
                                            height="276" alt="Soleglio Bue" />
                                    </button>
                                </figure>

                                <p>
                                    Resta il problema della varietà da insegnare: Le differenze
                                    linguistiche possono essere considerevoli da una località all’altra.
                                    E ciò non vale solo per località separate dalla montagna, ma anche per
                                    comuni che si susseguono lungo la strada principale di una valle:
                                    Rosella Pellerino mi fa l’esempio di Prazzo e Stroppo, situate lungo
                                    la SP 422 a una distanza di pochi chilometri. In questa situazione la
                                    soluzione data sulla pagina web di <i>Espaci
                                        Occitan</i> mi sembra ragionevole:
                                    “L’occitano alpino impiegato dai materiali dei corsi sarà quello
                                    meridionale (valli del cuneese) ma ciascuno potrà partecipare con la
                                    propria varietà” – una posizione piuttosto ‘liberale’ e lontana
                                    da una normalizzazione forzata.<sup><a href="#fn12"
                                        name="fz12">12</a></sup>
                                </p>
                                <p>
                                    Cartelloni toponomastici che danno il nome di una località non solo in
                                    due lingue ma anche in diverse grafie, creazione di una odonomastica
                                    completamente nuova in due lingue, legata alla tradizione culturale
                                    occitana, corsi di lingua (e cultura) che lasciano spazio a diverse
                                    varietà diatopiche – c’è qualcosa di comune tra questi fenomeni,
                                    una tendenza generale nell’atteggiamento dei parlanti di fronte a
                                    problemi del contatto linguistico? Sarà un’impressione soggettiva, ma
                                    ho notato presso le persone con cui ho parlato l’assoluta mancanza
                                    dello spirito di antagonismo (per una lingua a scapito di un’altra,
                                    per una norma imposta di fronte al gran numero di varietà locali) e
                                    nello stesso tempo la cura delle tradizioni e dei valori culturali
                                    (legati soprattutto ma non esclusivamente alla lingua), la premura di
                                    conservare ed eventualmente di far ritrovare alla gente delle valli la
                                    propria identità di gruppo insieme alla coscienza di appartenere a un
                                    insieme linguistico e culturale più grande, l’Occitania.
                                </p>

                                <h1>Note</h1>

                                <p><sup><a href="#fz1" name="fn1">1</a></sup>
                                    Per questa situazione particolare cf. Kattenbusch
                                    1987, 321.
                                </p>
                                <p><sup><a href="#fz2" name="fn2">2</a></sup>
                                    Per la necessaria familiarità con la gente del luogo cf. p. es.
                                    Eschmann 1979, 45.
                                </p>
                                <p><sup><a href="#fz3" name="fn3">3</a></sup>
                                    Punti dell’AIS situati nella zona occitofona si trovano nella Valle
                                    del Po, nell’Alta Valle di Susa e in Val Stura.
                                </p>
                                <p><sup><a href="#fz4" name="fn4">4</a></sup>
                                    C’è però Pontebernardo (identico con il punto 170 dell’AIS) nella
                                    vicina Alta Valle di Stura.
                                </p>
                                <p><sup><a href="#fz5" name="fn5">5</a></sup>
                                    L’unione delle due valli in un’unica Comunità Montana data del
                                    2010.
                                </p>
                                <p><sup><a href="#fz6" name="fn6">6</a></sup>
                                    Per questi dati v. Statistiche demografiche ISTAT del
                                    31 dicembre 2010.
                                </p>
                                <p><sup><a href="#fz7" name="fn7">7</a></sup>
                                    Allasino et al. 2007, 42, tab. 2.10 e 2.22: Su un campione di 288
                                    parlanti nell’area occitana: lingua materna patois 30,6 per cento, piemontese
                                    + x 2,7 per cento, italiano + x 5,0 per cento, francese + x 1,4 per cento. In queste tabelle x
                                    significa ‘lingua locale’, cioè una varietà di occitano.
                                </p>
                                <p><sup><a href="#fz8" name="fn8">8</a></sup>
                                    Ringrazio Roberto Colombero sindaco di Canosio e presidente della CM
                                    Valli Grana e Maira che mi ha messo a disposizione 16 cartelloni di
                                    questo tipo, tutti del comune di Canosio. Secondo lui tali cartelloni
                                    esistono per ca. 90–95 per cento delle borgate della Comunità
                                    montana.
                                </p>
                                <p><sup><a href="#fz9" name="fn9">9</a></sup>
                                    Cf. Astor 2002, 683, che menziona SOLEIL-BŒUF et <i>Solelha-biòu</i> comme
                                    “lieux-dits de Barcelonnette (Alpes-de-Haute-Provence) et de Briançon
                                    (Hautes Alpes)”.
                                </p>
                                <p><sup><a href="#fz10" name="fn10">10</a></sup>
                                    Cf. <a href="http://www.espaci-occitan.org/"
                                        target="_blank"
                                        rel="noreferrer">http://www.espaci-occitan.org</a>.
                                </p>
                                <p><sup><a href="#fz11" name="fn11">11</a></sup>
                                    Cf. per la Francia il fascicolo tematico di <i>Lengas</i> 67 (2010).
                                    <p><sup><a href="#fz12" name="fn12">12</a></sup>
                                        Per l’alternativa ‘normalizzazione unitaria’ vs.‘considerazione
                                        della pluralità di varietà diatopiche’ cf. la <i>Introduccion</i> di Xavier
                                        Lamuela a Comission internacionala ... (2008): “avem organizat la
                                        gramàtica e lo diccionari, presentats coma una caracterizacion de la
                                        varietat propausaa en laissant de plaça, sus ben de ponchs, a de
                                        solucions alternativas” (2). Per la grafia, invece, vale il principio
                                        dell’unitarietà: “en emplegant sempre la mesma grafia, assegurem
                                        una soleta forma gràfica per lhi divèrsi dialèctes e per lhi tèxtes
                                        de totas las èpocas. L’ortografia comuna es la manifestacion visibla
                                        e pràctica de l’unitat e de l’autonomia d’una lenga” (3). Non
                                        è qui il luogo per discutere in che misura questi principi sono
                                        realizzati nel lavoro stesso.
                                    </p>


                                    <h1>Bibliografia</h1>

                                    <p className="bibl">
                                        AIS = Jaberg, Karl/Jud, Jakob (1928–1940): <i>Sprach-und Sachatlas
                                            Italiens und der Südschweiz</i>, 8 Bde., Zofingen.
                                    </p>
                                    <p className="bibl">
                                        ALEPO = Tullio Telmon/Sabina Canobbio (a c. di) (1985): <i>Atlante
                                            linguistico ed etnografico del Piemonte occidentale. Materiali e saggi
                                            1984</i>, Torino.
                                    </p>
                                    <p className="bibl">
                                        ALI = Matteo Bartoli et al. (1973): <i>Atlante linguistico italiano. Indice
                                            delle inchieste</i>, Torino.
                                    </p>
                                    <p className="bibl">
                                        Allasino, Enrico/Ferrier, Consuelo/Scamuzzi, Sergio/Telmon, Tullio
                                        (2007): <i>Le lingue del Piemonte</i> (Quaderni di Ricerca 113), Torino.
                                    </p>
                                    <p className="bibl">
                                        Astor, Jacques (2002): <i>Dictionnaire des noms de familles et noms de
                                            lieux du Midi de la France</i>, Millau.
                                    </p>
                                    <p className="bibl">
                                        Biondelli, Bernardino (1853): <i>Saggio sui dialetti gallo-italici</i>, Milano
                                        (rist. Bologna 1970).
                                    </p>
                                    <p className="bibl">
                                        Comission internacionala per la normalizacion linguística de
                                        l’occitan alpin (2008): <i>Nòrmas ortogràficas, chausias morfològicas
                                            e vocabulari de l’occitan alpin oriental</i>, Coni/Cuneo.
                                    </p>
                                    <p className="bibl">
                                        Eschmann, Jürgen (1979): Zur Lage des Provenzalischen. Eine
                                        Untersuchung im Département Vaucluse, in: Gerhard Ernst/Arnulf
                                        Stefenelli (ed.), <i>Sprache und Mensch in der Romania. Heinrich Kuen zum 80.
                                            Geburtstag</i>, Wiesbaden, 44–60.
                                    </p>
                                    <p className="bibl">
                                        Grassi, Corrado (1958): <i>Correnti e contrasti di lingua e cultura nelle
                                            Valli cisalpine di parlata provenzale e franco-provenzale. Parte I. Le
                                            Valli del Cuneese e del Saluzzese</i>, Torino.
                                    </p>
                                    <p className="bibl">
                                        Kattenbusch, Dieter (1987) : Une micro-enquête sociolinguistique en
                                        Languedoc: Le cas de Saint-Guilhem-le-Désert (Hérault), in: Peter
                                        T. Ricketts (ed.), <i>Actes du premier congrès international de
                                            l’Association internationale d’Études Occitanes</i>, London, 321–330.
                                    </p>
                                    <p className="bibl">
                                        Lamuela, Xavier/Pellerino, Rosella (2008): <i>Dizionario
                                            italiano–occitano, occitano–italiano</i>, Cuneo.
                                    </p>
                                    <p className="bibl">
                                        <i>Lengas</i> 67 (2010): <i>Chanson occitane et chansons en occitan dans la
                                            seconde moitié du vingtième siècle.</i>
                                    </p>
                                    <p className="bibl">
                                        VIVALDI = <i>Vivaio Acustico delle Lingue e dei Dialetti d'Italia –
                                            Akustischer Sprachatlas Italiens nach Regionen 1: Sicilia, 2: Sardegna,
                                            3: Liguria, 4: Valle d'Aosta, 5: Umbria, 6: Trentino-Südtirol, 7:
                                            Molise, 8: Piemonte, [9: Toscana], [10:
                                            Puglia]</i>. Berlin : Humboldt-Universität (<a href="http//www2.hu-berlin.de/Vivaldi/"
                                                target="_blank">http://www2.hu-berlin.de/vivaldi</a>).
                                    </p>
                                </p>

                            </article>
                        </section>
                    </div>
                </div>
                <UpArrow />   
                <Footer />
            </div>
        </div>
    );
}

export default Ernst;