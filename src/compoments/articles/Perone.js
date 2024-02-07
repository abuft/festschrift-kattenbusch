import Header from "../Header";
import Rubrik from "../Rubrik";
import PeronePortrait from "../../images/uperone/uperone-portrait.jpg";
import Footer from "../Footer";
import UpArrow from "../UpArrow";

function Perone(props) {
    return (
        <div>
            <div id="Wrapper" class="container_14">
                <div id="Header">
                    <Header id={props.author} />
                    <div class="grid_9">
                        <h1 id="main_title">Stile VIVALDI</h1>
                        <p id="author">Ugo Perone, Torino/Vercelli</p>
                    </div>
                    <Rubrik />
                </div>

                <div id="Teasers" class="clearfix">
                    <div class="grid_9">
                        <p>
                            Era difficile intrattenersi con Dieter Kattenbusch senza finire prima o
                            poi a parlare di Vivaldi. No, non il grande musicista italiano, ma
                            VIVALDI come acronimo (Vivaio Acustico delle Lingue e dei Dialetti
                            d’Italia) di un progetto di atlante linguistico sonoro che stava a cuore
                            allo schivo professore tedesco esperto di dialetti. Non potevi sottrarti
                            alla sua cortesia garbata e dovevi metterti al computer e giocare con
                            lui, cliccando nelle diverse regioni d’Italia la stessa parola
                            pronunciata nei luoghi più ignoti e improbabili in dialetti simili, ma
                            mai identici.
                        </p>
                        <p>
                            Dopo un po’, superata la sorpresa, ci prendevi gusto anche tu e
                            cominciavi a suonare la musica della lingua parlata apprezzandone le
                            differenze e rincorrendole da un luogo all’altro come un bene prezioso
                            da proteggere non meno che piante o animali in estinzione.
                        </p>
                    </div>

                    <div class="grid_5">
                        <div class="abouttheauthor">
                            <img src={PeronePortrait} width="150"
                                height="100" alt=" - Portrait" />
                            <div class="abouttheauthorfont"><br /><br />
                                <b>Ugo Perone</b>, Professore ordinario di Filosofia morale presso
                                l’Università del Piemonte orientale (Italia), dove dirige altresì
                                l’Istituto di Studi umanistici. Ha conosciuto Dieter Kattenbusch durante
                                il periodo della sua permanenza a Berlino come Direttore dell’istituto
                                italiano di cultura (2001–2003). Nel 2004 ha fruito di una borsa di
                                ricerca Humboldt presso la cattedra di italianistica.
                            </div>
                            <div class="clearfloat"></div>
                        </div>
                    </div>
                </div>

                <div id="Main">
                    <div id="Articles" class="grid_14">
                        <section id="posts">
                            <article class="post">
                                <p>
                                    E allora, proprio in quel momento, i pezzi mancanti del puzzle
                                    cominciavano ad apparirti per quello che sono: luoghi di un inesplorato
                                    territorio linguistico che attendono di essere salvati. E ti appassioni
                                    alle storie che Kattenbusch ritrosamente racconta. Sei anche tu con lui,
                                    metà esploratore e metà scienziato, metà dilettante che si diverte e
                                    metà professore che cataloga; giri con lui su automobili improbabili e
                                    con un’attrezzatura piuttosto rudimentale per raccogliere testimonianze
                                    e conservare suoni.  Anche tu, come lui, ti metti alla caccia di quattro
                                    soldi per finanziare un programma che le scarse risorse rendono più
                                    lungo e difficile, e persino mettono in pericolo nella sua riuscita
                                    globale.
                                </p>
                                <p>
                                    Ma ne valeva la pena? Valeva tanta fatica per raccogliere suoni dispersi
                                    minacciati dalla morte? Gli esperti diranno certo meglio di me le
                                    ragioni del sì, illustrando non solo quanto in questo modo sia stato
                                    possibile salvare e trasmettere, ma anche facendo intendere quali
                                    connessioni una raccolta così sistematica possa consentire e come essa
                                    sia in grado di gettare uno sguardo più profondo sulle leggi che
                                    presiedono alla trasformazione delle lingue. Io, profano, ne vorrei
                                    aggiungere una: in quel progetto c’è uno stile, scientifico e umano.
                                    L’attenzione al particolare e alla sua fragilità, l’amore per un fare
                                    sobrio e accogliente, che include e protegge, la schiettezza delle cose
                                    semplici.
                                </p>
                                <p>
                                    Così ho conosciuto Dieter Kattenbusch a Berlino nel tempo mai
                                    abbastanza rimpianto della mia direzione dell’istituto italiano di
                                    cultura e poi di una breve coda come borsista Humboldt presso il suo
                                    istituto. Tra gli italianisti una figura eccentrica e in qualche modo
                                    appartata, ma aperta alla collaborazione con generosità e senza
                                    riserve.
                                </p>
                                <p>
                                    Non so se l’ho apprezzato a partire da VIVALDI o ho apprezzato VIVALDI a
                                    partire lui. So che, come si dice, lo stile è l’uomo. Ed è questo che
                                    ho intravisto in lui e di cui lo ringrazio. Ma non solo. Ora che la
                                    sorte mi ha riportato a un impegno di politica culturale, come assessore
                                    alla cultura e al turismo della provincia di Torino, il lavoro di
                                    Kattenbusch mi accompagna come un’ombra lunga e benevola. Mi tocca
                                    infatti occuparmi di lingue minoritarie, un terreno di elezione del suo
                                    lavoro scientifico. Nella nostra provincia, infatti, tre (il francese,
                                    l’occitano, il francoprovenzale) sono le lingue riconosciute e
                                    tutelate da una legge nazionale del 1999 (la legge 482). E proprio a
                                    partire dalla nostra esperienza di lavoro in rete abbiamo all’inizio
                                    di luglio di quest’anno, all’interno delle celebrazione per i 150
                                    anni dell’unità d’Italia, indetto un convegno nazionale per
                                    monitorare lo stato di salute delle 12 lingue riconosciute nel nostro
                                    territorio nazionale.
                                </p>
                                <p>
                                    Nell’inaugurarlo, ancora una volta, ho avvertito un senso di
                                    fraternità con il lavoro di Kattenbusch. E mi sono tuffato fra le
                                    differenze e le contiguità dei linguaggi: oltre a quelli già citati,
                                    le lingue delle popolazioni albanesi, catalane, germaniche, greche,
                                    slovene e croate e di quelle parlanti il friulano, il ladino e il sardo.
                                    Non ho potuto sottrarmi a un’impressione di continuità, scaturita
                                    misteriosamente al di là delle rispettive competenze disciplinari e
                                    aiutata, non meno misteriosamente, dal caso. Ma la continuità maggiore,
                                    ben oltre l’incrocio dei temi, la continuità a cui vorrei davvero
                                    ispirarmi resta quella di riprenderne lo stile umano e scientifico.
                                </p>
                            </article>
                        </section>
                    </div>
                </div>
            </div>
            <UpArrow />
            <Footer />
        </div>
    )
};

export default Perone;