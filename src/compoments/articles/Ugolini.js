import Footer from "../Footer";
import Rubrik from "../Rubrik";
import UpArrow from "../UpArrow";
import UgoliniPortrait from "../../images/gugolini/gugolini-portrait.jpg";
import Header from "../Header";

function Ugolini(props) {
    return (
        <div id="Wrapper" className="container_14">

            <div id="Header">
                <Header id={props.author} />
                <div className="grid_9">
                    <h1 id="main_title">Il primato
                        dell'italiano<a href="#fn*" name="fz*">*</a></h1>
                    <p id="author">Gherardo Ugolini, Verona</p>
                </div>
                <Rubrik />
            </div>

            <div id="Teasers" className="clearfix">
                <div className="grid_9">
                    <p>
                        Quanti hanno studiato il carattere nazionale degli italiani – storici,
                        antropologi o sociologi – hanno sovente messo in luce un aspetto, una
                        caratteristica che nei secoli passati come nell’età più recente
                        sarebbe tipica degli italiani: si tratta della debolezza
                        dell’identità nazionale. Tale caratteristica ha notoriamente
                        spiegazioni storiche: la nazione italiana è nata piuttosto tardi
                        rispetto ad altre grandi nazioni europee come per esempio la francese o
                        la spagnola; la penisola italica è stata per secoli divisa in decine di
                        piccoli stati autonomi, con una varietà e disomogeneità di governi, di
                        leggi, di usanze, di monete, e perfino di lingue, almeno se ci riferiamo
                        alle lingue parlate. Tutto questo complesso di circostanze ha fatto sì
                        che non si sia mai veramente sviluppato un vero e profondo sentimento
                        identitario nazionale.
                    </p>

                    <p>
                        Chi sostiene questa interpretazione cita le difficoltà enormi con cui
                        ha dovuto fare i conti il processo risorgimentale ottocentesco, il
                        ribellismo insito nelle plebi del Sud Italia fin dai primi anni
                        dell’unità nazionale, il senso di estraneità verso le istituzioni
                        pubbliche, avvertite come qualcosa di calato dall’alto e da fuori. A
                        tale deficit di etica pubblica farebbe da riscontro un attaccamento
                        particolare ed eccessivo nei confronti della famiglia, il cosiddetto
                        &#8220;familismo&#8221; degli italiani, un concetto spesso completato con
                        l’aggettivo &#8220;amorale&#8221;, secondo la celebre interpretazione di
                        Edward C. Banfield, laddove la famiglia costituisce – in opposizione
                        allo Stato – il luogo privilegiato degli affetti e delle motivazioni,
                        il luogo in cui l’italiano sa dare il meglio di sé con impegno,
                        sacrifico e abnegazione.<sup><a href="#fn1" name="fz1">1</a></sup>
                    </p>
                    <p>
                        Chi parla della debole identità nazionale italiana fa inevitabilmente
                        riferimento ad una data decisiva per la storia italiana del secolo
                        scorso: 1’8 settembre del 1943, il giorno in cui il governo del
                        maresciallo Badoglio, succeduto da poche settimane a Mussolini, rese
                        pubblico l’armistizio con gli Alleati anglo-americani cambiando la
                        posizione dell’Italia nello scenario bellico. Quella data avrebbe
                        segnato la &#8220;morte della Patria&#8221;, la catastrofe di una nazione intera
                        che all’improvviso si scioglie e si
                        disgrega.<sup><a href="#fn2" name="fz2">2</a></sup>
                        Ma si tratta di
                        un’idea molto controversa e da molti respinta con la considerazione
                        che in fondo quello che si disfece l’8 settembre era una determinata
                        forma politico-statale e non la patria italiana; tant’è vero che
                        subito dopo l’armistizio l’idea di patria, di una patria nuova e
                        migliore, animò molti italiani che presero le armi e combatterono, su
                        fronti contrapposti, proprio in nome della patria.
                    </p>
                    <p>
                        Ma anche nel dopoguerra l’identità italiana ha rivelato tratti di
                        debolezza estrema. Nazionalismo e patriottismo erano sentiti dalla
                        maggior parte degli italiani come concetti usurati a causa dell’uso
                        strumentale fattone durante il ventennio fascista. E così è accaduto
                        che nell’Italia post-bellica fino alla conclusione della guerra fredda
                        le patrie ideologiche fossero per molti aspetti più importanti della
                        patria nazionale.<sup><a href="#fn3" name="fz3">3</a></sup>
                        E non è certo un caso che nel territorio italiano
                        siano sorti in epoche diverse movimenti e partiti che hanno messo in
                        dubbio l’unità della nazione e che su questa base hanno conseguito
                        discreti successi: mi riferisco al separatismo siciliano nei primi anni
                        del dopoguerra e al leghismo degli anni Novanta.
                    </p>

                </div>
                <div className="grid_5">
                    <div className="abouttheauthor">
                        <img src={UgoliniPortrait} width="100"
                            height="150" alt="Gherardo Ugolini - Portrait" />
                        <div className="abouttheauthorfont"><br /><br />
                            <b>Gherardo Ugolini</b>, Dr. phil., Professore di Filologia Classica
                            all’Università di Verona.<br />
                            <span style={{ color: "#666666" }}>
                                Ho avuto il piacere di conoscere Dieter Kattenbusch nel 1999
                                quando ho preso servizio all’Istituto di Filologia Romanza
                                della Humboldt-Universität di Berlino in qualità di Lettore
                                di ruolo del Ministero Affari Esteri della Repubblica italiana.
                                Prima di conoscerlo personalmente avevo letto qualche sua
                                pubblicazione sulle minoranze linguistiche in Italia e mi ero
                                fatto un’idea del personaggio assai diversa da quella che poi
                                ho riscontrato nella realtà. Non so perché, ma mi aspettavo
                                di trovare un professore pedante e noioso, interamente assorbito
                                nelle sue ricerche e col quale era difficile interagire umanamente.
                                E invece Dieter si è rivelato da subito una persona aperta,
                                disponibile, poco burocratica, umanamente ricca e sensibile.
                                Da colleghi siamo diventati rapidamente amici. Con lui ho
                                collaborato per tanti anni: abbiamo organizzato insieme
                                manifestazioni, congressi e seminari di aggiornamento,
                                abbiamo pubblicato due volumi miscellanei. Abbiamo condiviso
                                l’idea che l’università debba aprirsi al mondo extra accademico.
                                Abbiamo lavorato insieme per rilanciare la lingua italiana a
                                Berlino cercando e spesso trovando la collaborazione dell’ambasciata
                                d’Italia e dell’Istituto italiano di cultura. Ebbene, in tanti
                                anni e con tanti progetti comuni faccio fatica a ricordare
                                un solo momento non dico di litigio, ma neppure di contrasto.
                                Anche dopo la conclusione del mio incarico alla Humboldt ho
                                continuato a frequentare Dieter e a collaborare con lui per
                                la realizzazione di progetti e ricerche.
                                Spero e conto di farlo anche in futuro.
                                Del resto la porta del suo studio al quarto piano
                                di Dorotheenstrasse 65 è notoriamente sempre aperta
                                per studenti, assistenti e colleghi. Chiunque passi e si
                                affacci può essere sicuro di ricevere un saluto
                                affettuoso e spesso anche un caffè con qualche biscotto.
                            </span>
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
                                Ancora oggi si dice e si scrive che gli italiani non hanno un
                                attaccamento troppo forte nei confronti della loro patria:
                                sull’identità nazionale prevalgono le identità locali e municipali,
                                o magari l’identità europea, percepita come un orizzonte più ampio
                                in cui cancellare le proprie debolezze e i propri difetti. I sondaggi
                                d’opinione indicano costantemente che gli italiani sono il popolo più
                                favorevole al processo d’integrazione dell’Unione Europea.
                            </p>
                            <p>
                                Chi studia queste tematiche afferma anche che il senso dell’orgoglio
                                nazionale è merce rara tra gli italiani e scatterebbe soltanto in poche
                                occasioni, in particolare quando gioca e magari vince la nazionale di
                                calcio. Ecco, allora sì che gli italiani sventolano il tricolore ed
                                esibiscono la fierezza del proprio orgoglio patrio. Ma nelle occasioni
                                della vita quotidiana questo non accade quasi mai.
                            </p>
                            <p>
                                Io non so fino a che punto queste tesi, che ho qui proposto in modo
                                sintetico, siano effettivamente valide. Certamente contengono elementi
                                di verità. Vorrei tuttavia dire che questo scenario sta cambiando. A
                                partire dalla fine degli anni Novanta, grazie anche all’azione
                                pedagogica intrapresa dal Presidente della Repubblica Carlo Azeglio
                                Ciampi, si va consolidando ed espandendo un atteggiamento inusitato, un
                                nuovo senso dell’identità nazionale. Non si tratta di un nazionalismo
                                sciovinista e arrogante, ma della costruzione di una memoria comune e
                                condivisa, della consapevolezza di appartenere ad una grande nazione,
                                con un grandissimo passato e capace di interpretare anche oggi un ruolo
                                importante nello scenario politico e culturale internazionale. Questa
                                sensazione crea identità ed è condivisa da una grande parte di
                                italiani. La reazione composta e unitaria che c’è stata in Italia dopo
                                il massacro dei carabinieri italiani a
                                Nassiriya<sup><a href="#fn4" name="fz4">4</a></sup>
                                può ben essere intesa
                                come un segnale concreto di questo nuovo &#8220;spirito nazionale&#8221; del
                                quale il Presidente Ciampi è il massimo interprete.
                            </p>
                            <p>
                                Vorrei qui ora analizzare in breve soltanto un aspetto di questa nuova
                                impostazione del nazionalismo italiano e cioè l’aspetto linguistico.
                                Non c’è nessun dubbio, credo, che l’Italia sia dal punto di vista
                                della lingua una delle principali potenze mondiali. Però spesso si
                                tende a dimenticarlo.
                            </p>
                            <p>
                                Eppure, la lingua italiana conta sempre di più, molto più di quanto
                                comunemente non si pensi. Io non voglio fare un torto agli amici
                                colleghi che qui insegnano il francese o lo spagnolo, e naturalmente non
                                mi sogno di mettere in dubbio l’egemonia assoluta che la lingua
                                inglese si è guadagnata nel mondo. Vorrei però insistere
                                sull’importanza dell’italiano all’interno di quello che i
                                linguisti chiamano &#8220;il mercato internazionale delle lingue&#8221;.
                                L’italiano è parlato come lingua madre da un numero tutto sommato
                                ristretto di persone, vale a dire gli abitanti della Penisola (56
                                milioni circa) e qualche milione di italiani sparsi per il mondo. In
                                totale gli italofoni che parlano l’italiano come lingua materna sono
                                soltanto l’uno per cento della popolazione mondiale e costituiscono il
                                diciannovesimo gruppo linguistico del mondo. Eppure sulla base di studi
                                recenti l’italiano risulta essere al quarto posto tra le lingue più
                                studiate nel mondo, subito dopo l’inglese, lo spagnolo e il francese,
                                e davanti al tedesco.<sup><a href="#fn5" name="fz5">5</a></sup>
                                La lingua si studia ovunque nel mondo, negli
                                istituti universitari di italianistica, nelle scuole private, nei corsi
                                degli Istituti italiani di cultura e in quelli dei comitati Dante
                                Alighieri, con un incremento che negli ultimi cinque anni è stato del
                                38 per cento su scala mondiale.
                            </p>
                            <p>
                                Ma perché si studia la lingua italiana oggi nel mondo? Naturalmente le
                                motivazioni prevalenti rimangono quelle più tradizionali, legate alla
                                cultura, all’archeologia, alla musica etc. L’Italia è il Paese in
                                cui si conserva, secondo i dati dell’UNESCO, oltre il 60 per cento dei beni
                                culturali di tutta l’umanità e questa eredità continua ad essere un
                                fattore di forte attrazione per gli stranieri, un fattore di cui gli
                                italiani possono ben andare orgogliosi. Ma ci sono anche motivazioni di
                                ordine pratico. Fino a qualche anno fa nessuno pensava di imparare
                                l’italiano per trovare lavoro o per perfezionare e qualificare meglio
                                il proprio profilo professionale. Oggi questo accade, soprattutto nei
                                paesi dell’Europa Orientale, nell’America Latina e in Giappone, dove
                                l’italiano sta conoscendo un boom singolare. E in questo fenomeno
                                rientra anche la grande quantità (ormai più di due milioni) di
                                immigrati che dall’Africa, dall’Albania, dalla Polonia, dalla
                                Romania e da vari altri Paesi si sono trasferiti in Italia ed hanno
                                dovuto imparare la lingua per inserirsi nel paese di accoglienza.
                                Insomma la lingua italiana non è più solo la lingua di cultura, bensì
                                anche una lingua funzionale, usata in molte aree del mondo nel campo
                                degli affari e degli scambi internazionali.
                            </p>
                            <p>
                                La rete istituzionale che lo Stato italiano, attraverso il Ministero per
                                gli Affari Esteri, organizza all’estero per la diffusione della lingua
                                e della cultura italiana è ampia e diffusa: 93 Istituti italiani di
                                cultura, i quali offrono circa 4.200 corsi di lingua con migliaia di
                                partecipanti, 266 docenti di ruolo inviati nelle università di 87 Paesi
                                del mondo come &#8220;lettori universitari di ruolo&#8221;, 181 scuole e 116
                                sezioni italiane presso scuole straniere e scuole europee, con
                                un’utenza di circa 30 mila alunni. Sono dati impressionanti, i dati di
                                una superpotenza linguistica.
                            </p>
                            <p>
                                Quando un paio di anni fa uno studio pubblicato col titolo &#8220;Italiano
                                2000&#8221; dimostrò che la lingua italiana era la quarta lingua più
                                studiata al mondo ci fu una reazione di stupore per non dire
                                d’incredulità. Eppure, a pensarci bene, questo dato del quarto posto
                                non sarebbe dovuto essere una sorpresa: in realtà si tratta di un fatto
                                normale, se solo si considera che già in passato era così.
                                L’italiano è stato infatti recepito per secoli nel contesto europeo
                                come lingua della musica, della creatività artistico-letteraria in
                                senso lato, ma anche della comunicazione scientifica (Galileo) e degli
                                scambi commerciali: una lingua d’elezione praticata nei teatri, nelle
                                corti e nelle accademie d’Europa, oltre che nei porti del
                                Mediterraneo. Il quarto posto nel mercato delle lingue non è una
                                novità degli ultimi anni, ma un dato storico di lunga durata.
                            </p>
                            <p>
                                Permettetemi ancora un paio di considerazioni: si legge spesso sulla
                                stampa, ma talora anche in pubblicazioni scientifiche, che la lingua
                                italiana è in crisi. Ricorrenti sono gli allarmi sull’impoverimento
                                lessicale, sulla regressione del congiuntivo, e sull’invasione dei
                                prestiti dall’inglese. Eppure, ad un esame più attento e
                                approfondito, non c’è dubbio che l’italiano di oggi goda di un
                                eccellente stato di salute e che quegli allarmi siano esagerati e spesso
                                infondati. Oggi l’italiano si presenta come una lingua vitale,
                                finalmente usata spontaneamente per comunicare da tutti gli abitanti
                                della Penisola. Si può affermare che all’inizio del 2000 si sia
                                definitivamente concluso il lunghissimo percorso dell’unificazione
                                linguistica del Paese. Inoltre si è via via attenuata quella netta
                                divaricazione tra lingua scritta (una lingua aulica, letteraria, sovente
                                retorica) e lingua parlata, che ha costituito per secoli una
                                caratteristica essenziale della situazione linguistica italiana
                                differenziandola dagli altri Paesi europei. E questo è un risultato
                                importante, benché conseguito con tante difficoltà e lentezze.
                            </p>
                            <p>
                                Infine, una prova del grande prestigio di cui gode oggi l’italiano è
                                costituita dalla sua presenza nelle maggiori lingue europee con
                                centinaia di prestiti. In tutto il mondo ci si saluta con il &#8220;ciao&#8221;
                                e si usano numerose parole italiane o facsimili dell’italiano. E non
                                solo i classici &#8220;pizza&#8221; e &#8220;pasta&#8221;. Non c’è caffè in Germania
                                in cui non si possa ordinare un &#8220;latte macchiato&#8221; o l’acqua
                                minerale della marca San Pellegrino. Dal Chianti all’Amarone i nomi
                                dei vini, come anche degli oli italiani hanno invaso da tempo i
                                supermercati tedeschi. Per vendere dolciumi e biscotti in Germania si
                                usa attirare i clienti con riferimenti culturali a Giotto, Raffaello o
                                Leonardo. I produttori tedeschi di aceto hanno dovuto inventarsi un
                                proprio &#8220;aceto balsamico&#8221; per non fallire. E i produttori di
                                automobili hanno da tempo ormai compreso che per vendere meglio le loro
                                macchine occorre battezzarle con nomi fantasiosi italiani o
                                italianizzati: Polo, Mondeo, Vento, Scirocco etc.
                            </p>
                            <p>
                                Ma questo non succede solo in Germania. Ovunque nel mondo si trovano per
                                esempio insegne di negozi con scritte in italiano. Insomma, si potrebbe
                                quasi dire, esagerando un po’, che le principali lingue d’Europa
                                stanno vivendo un processo di italianizzazione. Perfino l’inglese, la
                                lingua leader, ha un patrimonio lessicale costituito solo per il 10 per cento
                                circa di lessemi appartenenti al fondo linguistico proprio, cioè
                                sassone e germanico occidentale, mentre oltre i due terzi, precisamente
                                il 76,5 per cento dei lessemi sono esogeni, prestiti e adattamenti dal latino,
                                dall’italiano e dalle altre lingue romanze. E le statistiche ci dicono
                                che proprio l’italiano accanto allo spagnolo è la lingua che fornisce
                                all’inglese il maggior numero di neologismi.
                            </p>
                            <p>
                                Nel settembre del 2002 è uscito sull’autorevole quotidiano
                                <i>Frankfurter Allgemeine Zeitung</i> un articolo del
                                giornalista Dirk Schümer dall’eloquente
                                titolo <i>Spaghettisiert euch!</i>, ovvero
                                «spaghettizatevi!», nel quale il giornalista
                                contrapponeva al predominante &#8220;american way of life&#8221;,
                                ovvero alla globalizzazione nel
                                segno del cosiddetto McWord, un altro paradigma di globalizzazione, e
                                cioè quello della cultura italiana la quale, soprattutto grazie
                                all’espansione globale della sua tradizione gastronomica, ma anche
                                grazie alla moda e ai prodotti del made in Italy, si sarebbe imposta
                                nell’intero pianeta come la vera <i>Leitkultur</i> di
                                riferimento.<sup><a href="#fn6" name="fz6">6</a></sup>
                                Quell’articolo era certamente ironico e paradossale. E anch’io
                                stasera nell’esaltare il nuovo nazionalismo linguistico italiano, nel
                                parlare di un primato dell’italiano nel mondo, ho cercato di essere di
                                tanto in tanto un po’ ironico e paradossale. Anche se spesso dietro
                                l’ironia e il paradosso si nasconde la verità.
                            </p>



                            <h1>Note</h1>
                            <p><a href="#fz*" name="fn*">*</a>
                                Il presente contributo riproduce, con qualche piccola modifica, il
                                testo di una conferenza da me presentata il giorno 5 dicembre 2003 nel
                                corso di una manifestazione che si è svolta presso l’Istituto di
                                Filologia Romanza della Humboldt-Universität, organizzata per celebrare
                                i 50 anni di Romanistica all’università berlinese. Alla
                                manifestazione, promossa e diretta dal prof. Dieter Kattenbusch,
                                parteciparono tra gli altri anche l’ambasciatore d’Italia S.E.
                                Silvio Fagiolo, e il direttore dell’Istituto italiano di cultura a
                                Berlino, prof. Ugo Perone. Fu quello il primo &#8220;Dies italicus&#8221; dei
                                tanti che sono seguiti negli anni successivi.
                            </p>

                            <p><sup><a href="#fz1" name="fn1">1</a></sup>
                                Edward C. Banfield (1958): <i>The Moral Basis of a
                                    Backward Society</i>, trad. it. (1961, rist. 2006): <i>Le
                                        basi morali di una società arretrata.</i> Bologna.
                            </p>
                            <p><sup><a href="#fz2" name="fn2">2</a></sup>
                                Cfr. Ernesto Galli della Loggia (1998): <i>La morte della patria: la crisi
                                    dell’idea di nazione tra Resistenza, antifascismo e Repubblica.</i>
                                Roma-Bari.
                            </p>
                            <p><sup><a href="#fz3" name="fn3">3</a></sup>
                                Remo Bodei (1998): <i>L’io diviso: ethos e idee dell’Italia
                                    repubblicana.</i> Torino.
                            </p>
                            <p><sup><a href="#fz4" name="fn4">4</a></sup>
                                Il 12 novembre 2003 un attentato nella località di Nassiriya colpì le
                                truppe dell’esercito italiano impegnate in Iraq nella missione di pace
                                denominata &#8220;Operazione Antica Babilonia&#8221;. Restarono vittime 28
                                persone tra carabinieri, militari e civili.
                            </p>
                            <p><sup><a href="#fz5" name="fn5">5</a></sup>
                                Tullio De Mauro et al. (2002): <i>Italiano 2000. I pubblici e le
                                    motivazioni dell’italiano diffuso fra stranieri.</i> Roma.
                            </p>
                            <p><sup><a href="#fz6" name="fn6">6</a></sup>
                                <i>Frankfurter Allgemeine Zeitung.</i> 28.09.2002, 40.
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

export default Ugolini;