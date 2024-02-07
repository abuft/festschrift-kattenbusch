import Header from "../Header";
import upArrow from "../../images/layout/up-arrow.png";
import Rubrik from "../Rubrik";
import Footer from "../Footer";

function Chiocchetti(props) {
    return (
        <div>
            <div id="Wrapper" class="container_14">
                <div id="Header">
                    <Header id={props.author} />
                    <div class="grid_9">
                        <h1 id="main_title">Ícaro non vola</h1>
                        <p id="author">Fabio Chiocchetti, Vich/Vigo di Fassa</p>
                    </div>
                    <Rubrik />
                </div>

                <div id="Teasers" class="clearfix">
                    <div class="grid_9">
                        <p class="quote">

                            Tem que viver a vida<br />
                            um dia após o outro,<br />
                            no final tudo dará certo.<br />
                        </p>
                        <p style={{ margin: "0 0 70px 200px" }}>
                            (Lédice Correia Santos)
                        </p>
                        <p>
                            Sette anni dopo, al Pelourinho
                        </p>
                        <p>
                            Ícaro non vola, e forse non volerà mai. Dopo un paio d’anni di
                            galera, oggi ha ripreso la sua vita di “<i>malandragem</i>” al Pelourinho,
                            abbordando turisti sprovveduti con il suo solito fare misurato e
                            circospetto, come un animale della foresta in cerca di preda,
                            consapevole di essere lui stesso una preda.
                        </p>
                        <p>
                            Non l’avevo più rivisto dal tempo dei fatti. Avevo chiesto in giro
                            notizie di lui, ogni volta che tornavo a Bahía, portando con me una
                            copia del libro, la copia destinata a lui, il protagonista. Non mi era
                            più capitato di incontrarlo, in nessuno dei viaggi successivi.
                        </p>
                        <p>
                            È stata la prima persona che ho incontrato risalendo Rua Portas do
                            Carmo, appena sceso in strada diretto al Terreiro de Jesus, quella
                            domenica pomeriggio dello scorso novembre, venendo da una settimana
                            trascorsa a Recife. Mi aveva fermato con i soliti pretesti, forse mi
                            aveva anche parlato in italiano, ma probabilmente non mi aveva
                            riconosciuto.
                        </p>
                        <p>
                            Aveva i crespi capelli corti pesantemente ossigenati, un look del tutto
                            inedito. Per il resto i soliti bermuda e maglietta, ma meno puliti
                            rispetto al primo incontro, sette anni addietro: corporatura più
                            robusta, non più un adolescente gracile e malnutrito, ormai un giovane
                            uomo di 26 anni. Lo riconobbi subito, gli mancavano del tutto i due
                            incisivi superiori, al mio ricordo tranciati a metà in una rissa:
                            «Você é Ícaro, né?...». Rimase sopreso dal fatto che conoscessi il
                            suo nome. Mi guardò per un momento senza parole. «Cê lembra?...».
                            «Lembro...» mormorò dopo un attimo di incertezza, «o italiano, o meu
                            amigo...». E via a precisare reciprocamente i dettagli del primo
                            incontro e del rocambolesco rincorrersi di fatti che ne era seguito: il
                            furto, la denuncia alla polizia, il contatto con i presunti ladri, il
                            millantato recupero dell’oggetto, l’estorsione...
                        </p>
                    </div>
                    <div class="grid_5">
                        <div class="abouttheauthor">
                            <img src="images/" width="100"
                                height="150" alt=" - Portrait" />
                            <div class="abouttheauthorfont"><br /><br />
                                <b>Fabio Chiocchetti</b>,
                                Direttore dell’Istitut Cultural
                                Ladin “Majon di Fascegn” a Vich/Vigo di Fassa.<br />
                                <span style={{ color: "#666666" }}>La storia di Ícaro, e del mio primo incontro con lui e con il Brasile, è narrata nel volumetto uscito nel gennaio del 2004 per i tipi di Nicolodi editore in Rovereto con il titolo “Il volo di Ícaro – Storie di ordinaria marginalità a Salvador da Bahía”. Questo breve racconto, scritto al ritorno dal mio ultimo viaggio in quella magica città, ne costituisce l’inatteso epilogo, suggello di un’avventura umana e letteraria che mi ha straordinariamente arricchito, aprendomi la via verso nuove visioni del mondo.
                                    Dedico queste pagine con grande piacere a Dieter Kattenbusch, al quale mi lega un’amicizia che risale ai primissimi anni ’80, quando io avevo appena iniziato il mio lavoro all’Istitut Cultural Ladin e lui si affacciava alle valli ladine, insieme con il prof. Hans Goebl e con il collega Thomas Stehl, per svolgere una “Tiefbohrung” preordinata alle inchieste dell’ALD-I (“Atlant Linguistich dl Ladin Dolomitich y di dialec vijins”), cui il Festeggiato in seguito avrebbe contribuito in modo continuativo e rilevante.
                                    Questa dedica va dunque al di là dei rispettivi interessi (professionali e non) per il ladino e per le minoranze linguistiche, e si proietta oltre i confini della nostra vecchia e cara Europa sull’onda di una comune fascinazione per l’America Latina e per la sua gente, che ci ha portati entrambi, per vie e destinazioni diverse, a fare l’esperienza indimenticabile di “un’altra vacanza” (cf. Dieter Kattenbusch, “CALI  – Tagebuch eines anderen Urlaubs”, Berlin 1997).</span>

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
                                    Ora ricordava tutto benissimo. Naturalmente spergiurò che i “ladri”
                                    avevano già venduto la macchina fotografica, e lui era tornato per
                                    restituirmi i soldi, ma io non c’ero più, e che poi li aveva spesi
                                    per comprarsi da mangiare... La stessa versione che diede alla polizia
                                    quando fu beccato. Stranamente non disse nulla a questo proposito.
                                    Temevo serbasse rancore, ma evidentemente gli era andata bene: dopotutto
                                    non l’avevo denunciato e lui la coscienza pulita forse non ce
                                    l’aveva proprio. Credo che i due anni di prigione li avesse avuti per
                                    ben altre bricconate...
                                </p>
                                <p>
                                    Gli dissi che avevo raccontato tutta la sua storia in un libro, che lui,
                                    Ícaro, era diventato “famoso” in Italia. Sapeva del libro, ne aveva
                                    avuto notizia dalla Delegata della Polizia con la quale aveva avuto
                                    contatti per qualche tempo, ma poi Zélia si era trasferita ed
                                    evidentemente non aveva fatto in tempo a fargli avere la copia che le
                                    avevo mandato per lui.
                                </p>
                                <p>
                                    Si mostrava fiero di tanto onore, felice di tanta considerazione.
                                    Ricominciò a chiamarmi “amigo” e a raccontarmi tutte le sue storie
                                    di bravo ragazzo, povero ma pieno di voglia di fare. Adesso voleva
                                    comprare una cassetta termica, non ricordo il nome in portoghese, quei
                                    rudimentali contenitori in polistirolo che usano i venditori ambulanti
                                    di acqua minerale. Non ce lo vedevo proprio Ícaro andare in giro sotto
                                    il sole a vendere le bottigliette “um real, um real!”...
                                </p>
                                <p>
                                    Insomma aveva bisogno di 30 reais. Finì che gliene diedi 15, credo, e
                                    protestò pure perché non gli avevo dato l’intera somma. Ci demmo
                                    appuntamento per il giorno dopo, all’ingresso dell’hotel Pelourinho
                                    (si era subito informato se ero alloggiato nello “stesso”
                                    albergo...), gli avrei dato la copia del libro, con tanto di
                                    “<i>dedicatória</i>”...
                                </p>
                                <p>
                                    Così avvenne. Sembrava commosso nel leggere il suo nome sulla copertina
                                    “Il volo di Ícaro”, <i>O vôo do Ícaro</i>, tradussi. Collegò subito il
                                    senso del titolo al contenuto del racconto mitologico che egli stesso mi
                                    aveva citato quando mi incontrò la prima volta. Era sveglio, il
                                    ragazzo, ma confessò che il libro non avrebbe potuto leggerlo: le sue
                                    conoscenze di italiano erano più limitate di quanto non volesse far
                                    credere, o forse non aveva dimestichezza con la lettura. Lo avrebbe
                                    portato a sua madre, o a sua nonna, e intanto mi chiese i soldi per
                                    l’<i>onibus</i>... Cavolo, non perde tempo questo qui. Ovviamente non aveva
                                    comprato la cassa termica, i soldi che gli avevo dato non erano
                                    abbastanza, e quindi se li era mangiati in altro modo. Nulla di nuovo.
                                    Solo che da quel giorno Ícaro si fece sempre più insistente. Mi
                                    cercava in albergo a tutte le ore, importunava il personale della
                                    reception. La direttrice mi fece capire che la sua presenza non era
                                    gradita. Mi fece chiamare una mattina mentre facevo colazione. Scesi, mi
                                    sedetti con lui sui gradini dell’atrio, e gli feci il discorsetto:
                                    «Senti Ícaro, ci siamo incontrati di nuovo, ti ho consegnato il libro,
                                    è arrivato a destinazione: l’avevo scritto per te, sperando che
                                    qualcosa potesse cambiare. La storia è finita, il finale è nelle tue
                                    mani, ora vai per la tua strada. Non puoi continuare a vivere chiedendo
                                    denaro agli altri. Io non te ne darò più. È finita».
                                </p>
                                <p>
                                    «Ma io sono tuo amico».
                                </p>
                                <p>
                                    «Ícaro, tu sei amico del mio denaro, l’amicizia è un’altra
                                    cosa...»
                                </p>
                                <p>
                                    Si adirò, come non lo avevo mai visto fare.
                                </p>
                                <p>
                                    «Eu vou botar o seu livro no fogo!...»
                                </p>
                                <p>
                                    Va’ Ícaro, va’ a buttare il mio libro nel fuoco, così come stai
                                    bruciando la tua vita e la tua gioventù. Non che non mi aspettassi
                                    questa reazione. Ormai, dopo i miei ripetuti viaggi in Brasile ero
                                    talmente disincantato che una simile conclusione della vicenda era
                                    largamente nelle previsioni. Non mi illudevo da tempo sulla possibilità
                                    di riscatto di simili personaggi, ne avevo visti tanti, e tanti mi
                                    avevano messo in guardia dai facili sentimentalismi. “È un problema
                                    sociale”, aveva detto la poliziotta. Già, figuriamoci se un
                                    raccontino, per quanto ben scritto e ben stampato, può risolvere un
                                    problema sociale, o anche solo cambiare le sorti di un ragazzo cresciuto
                                    in una favela di Bahía.
                                </p>
                                <p>
                                    Ciò nonostante, mi prese una strana malinconia nel vederlo andar via
                                    così. Davvero una storia era finita, la mia storia, quella iniziata con
                                    quel primo viaggio, con quel primo incontro, un innamoramento per una
                                    terra e per un popolo carico di fascino e di magia: la musica, la
                                    bellezza, la sensualità, la voglia di vivere, ma anche la violenza, la
                                    lotta per sopravvivere, il cinismo... Una bella storia, dopo tutto.
                                </p>
                                <p>
                                    Lo incrociai più volte al Pelourinho, mi passava accanto con faccia
                                    truce, oppure mi lanciava invettive di lontano. Lédice, cui ovviamente
                                    avevo raccontato l’accaduto, mi disse semplicemente di stare in
                                    guardia, senza nemmeno farmi pesare la cosa con commenti del tipo “te
                                    l’avevo detto io!”... Ci furono momenti in cui temetti davvero che
                                    potesse o volesse vendicarsi e tirarmi qualche brutto tiro. Ricordo
                                    però che una volta, forse meno incline al rancore, mentre passavo mi
                                    salutò dicendo sommessamente: «Você é meu amigo, um turista
                                    bom...».
                                </p>
                                <p>
                                    Ma ormai avevo deciso di non dargli più confidenza. E poi, durante quel
                                    soggiorno, tutto sembrava congiurare e indurre al disincanto. Elena, la
                                    “garota de programa” di pelle scura, non bellissima ma allegra e
                                    simpatica, quella che mi aveva abbordato già il primo anno parlando in
                                    un italiano diventato abbastanza fluente a forza di “fidanzati”
                                    italiani, si era comportata malissimo nei miei confronti: al mio
                                    ennesimo cortese rifiuto, incattivita come non l’avevo vista mai, non
                                    si era accontentata della consumazione ma mi aveva praticamente estorto
                                    i soli 20 reais che in quel momento avevo in tasca con minacce di una
                                    perfidia assoluta. Il giorno di Yansã, Santa Barbara, festa alla quale
                                    non avrei rinunciato per nulla al mondo (messa, processione e concerto
                                    in Largo do Pelourinho, con tutta la gente vestita di bianco e rosso, me
                                    compreso), i soliti ignoti approfittando della calca e della mia
                                    dabbenaggine mi avevano fregato il portafoglio, cosicché mi toccò
                                    tornare ancora una volta alla Deltur a far denuncia: la sede della
                                    polizia turistica non aveva esercitato su di me lo stesso fascino della
                                    prima volta, e non successe niente di importante. Del resto la presenza
                                    al Pelourinho della Polizia mi era sembrata molto ridotta rispetto al
                                    passato, mentre il degrado era cresciuto. Non c’era più quella folla
                                    variopinta di personaggi stravaganti, ma molte facce accigliate e torve.
                                    Non c’era più il ragazzino ricciuluto e sorridente che si esibiva in
                                    giochi con le sue noci di cocco, le <i>vendedoras de
                                        rua</i> mi sembravano meno allegre e disposte al
                                    dialogo. La “Cantina da Lua” era diventato un
                                    postaccio, <i>caipirinha</i> imbevibile e cibo da
                                    dimenticare, meglio i succhi
                                    da un real nel <i>lanchonete</i> sull’altro lato del Terreiro. Il <i>Candomblé</i>
                                    cui avevo assistito, roba da turisti, e non era nemmeno quello in onore
                                    di Yansã, come mi avevano assicurato. Una <i>baiana</i>, di quelle in costume
                                    che presidiano i negozi per attirare clienti, mi apostrofò duramente
                                    perché avevo osato fare una foto senza pagare.
                                </p>
                                <p>
                                    E a proposito di negozi: dove erano finite le gioiellerie e le
                                    boutiques? Molte erano chiuse, o rimpiazzate da mercerie dozzinali.
                                    Anche le bottegucce di artigianato e oggetti d’arte sembravano più
                                    spoglie e sfornite. Mi accontentai di frequentare qualche volta la
                                    bottega di strumenti musicali di Mestre Bimba, costruttore di tamburi e
                                    maestro di Capoeira, il quale mi raccontò che il turismo al Pelourinho
                                    era sensibilmente calato negli ultimi anni, mentre la delinquenza
                                    aumentava di giorno in giorno. Non sapeva dirmi se la latitanza della
                                    Polizia fosse la causa o la conseguenza di questa mutata situazione. Il
                                    problema della violenza era ogni giorno l’argomento di prima pagina
                                    sui principali quotidiani del paese: da lì seppi che Salvador da Bahía
                                    aveva raggiunto il terzo posto nella graduatoria delle città più
                                    violente del Brasile, oltre 800 omicidi all’anno: nel 2002 era al
                                    quindicesimo posto.
                                </p>
                                <p>
                                    E a proposito di musica, anche questa mi sembrò molto meno suggestiva
                                    che in passato: i gruppi di <i>batucada</i> poveri e approssimativi, ben
                                    lontani dai fasti di Olodum e Ilê Aiyê, le feste serali imbruttite e
                                    caotiche, specie la <i>Terça da Bença</i>, tanto alcool e troppo volume:
                                    nuove tendenze!... Per fortuna scovai un gruppo di <i>Choro</i> tradizionale
                                    che si esibiva settimanalmente al Teatro “Vila Velha”, dove tra
                                    l’altro non c’erano turisti.
                                </p>
                                <p>
                                    In più occasioni percepii un senso di malessere e di insicurezza che
                                    non avevo provato nei precedenti viaggi. Naturalmente non mi successe
                                    nulla di male (a parte il furto con destrezza), ma nemmeno incontri con
                                    persone interessanti. Seppi che Careca aveva perduto il taxi e si
                                    arrangiava alla bell’e meglio. Non mi riuscì di incontrarlo, e non
                                    rividi perciò nemmeno la mia <i>Mãe de Santos</i>. Non rividi Ilma, né Jozi,
                                    il mio maestro di <i>violão</i>, e nemmeno il genovese Evenzio, cognato di
                                    Lédice, sempre piazzato di solito al caffè del francese. Nemmeno il
                                    caffè sembrava lo stesso. Persino in hotel, dove da anni ero un cliente
                                    abituale, al momento della partenza mi trattarono senza alcun
                                    riguardo...
                                </p>
                                <p>
                                    Avevo la sensazione che non sarei più tornato, o almeno non subito, non
                                    con la stessa urgenza che avevo percepito altre volte. O quantomeno non
                                    là, nello stesso posto, non nella “stessa storia”. Quella storia
                                    era finita. L’innamoramento era finito. Il Pelourinho era cambiato, o
                                    forse semplicemente ero cambiato io: la città era la stessa, era
                                    proprio così, solo che io finalmente la vedevo come era veramente,
                                    senza più la lente deformante dell’incantamento. La realtà si era
                                    presa la sua rivincita sulla letteratura, e si faceva beffe di quella
                                    sua pretesa insana: l’illusione di poter non solo “cogliere” la
                                    realtà, ma di poterla persino cambiare.
                                </p>
                                <p>
                                    Anzi no. O meglio, questo era davvero il precipitato delle mie
                                    sensazioni alla fine di quel viaggio, ma quella magica città, <i>San
                                        Salvador da Bahía de todos os Santos</i>, mi avrebbe riservato un’ultima
                                    sorpresa, un ultimo prodigio. È vero, avevo perduto di vista molti dei
                                    personaggi equivoci che popolavano il sottobosco delle serate al
                                    Pelourinho, ai quali a parere di Lédice davo anche troppa confidenza, e
                                    verso i quali mi spingeva uno strano interesse “antropologico”, non
                                    nel senso accademico del termine, ma nel senso di De André: “se non
                                    sono gigli / sono sempre figli / vittime di questo mondo”. Ragazze di
                                    programma, musicisti di strada, danzatori di Capoeira, viados
                                    <i>trança-cabelos</i>, artisti dalle dubbie qualità che fino ad allora
                                    costituivano le componenti abituali di un panorama che mi era divenuto
                                    familiare, erano quasi spariti dalla città, insieme ai “turisti fai
                                    da te”. O forse si erano semplicemente trasferiti in altre zone della
                                    città, più “vocate” alle loro varie attività. Anche <i>meninos de
                                        rua</i> e i venditori di collanine sembravano diminuiti nel numero, e
                                    accresciuti in petulanza.
                                </p>
                                <p>
                                    Non avevo più rivisto Sara, la giovane ragazza di programma con cui
                                    avevo trascorso l’ultima serata prima della partenza nel viaggio
                                    precedente. L’avevo notata da un po’, silenziosa e discreta, poco
                                    appariscente rispetto alle compagne più chiassose. Quella sera era
                                    sola, me l’ero trovata a fianco durante un concerto in piazza Quincas
                                    Berro d’Agua, mi aveva salutato come si fa con un conoscente abituale,
                                    le avevo offerto da bere e lei mi aveva spiegato con semplicità e
                                    chiarezza la sua visione della vita: una figlia piccola a casa, nessun
                                    marito, 24 anni e la consapevolezza di una donna matura, cui non erano
                                    date molte possibilità. Mi aveva portato in un <i>botequím</i> dalle parti di
                                    Praça da Sé a bere Whisky e Cola, parlandomi di ogni cosa fino a
                                    tardi, compagnia piacevolissima, finché mi riaccompagnò all’albergo,
                                    stringendomi al braccio. Là, senza nulla chiedere, aveva atteso la mia
                                    decisione. Le allungai 50 reais per il taxi augurandole buona fortuna, e
                                    ci salutammo affettuosamente, da buoni amici. Confesso che in seguito
                                    ripensai a quell’incontro con un po’ di rimpianto...
                                </p>
                                <p>
                                    Sparita dalla circolazione anche Paula, che in realtà era un viado.
                                    Faceva parte della compagnia che fino all’anno precedente frequentava
                                    la piazza specie in occasione dei concerti. Ciarliera, elegante ma non
                                    sfacciata, viso angelico e fisico perfetto, modi gentili, ma non
                                    affettati né volgari, come invece accade spesso di vedere in simili
                                    personaggi. Mi aveva preso in simpatia e quella sera mi stava
                                    raccontando la storia penosa di un suo presunto aborto. Quando le dissi
                                    che la cosa era impossibile per questioni anatomiche si era imbronciata
                                    in modo deliziosamente infantile: «Não seja triste não, você é uma
                                    criatura maravilhosa!...», le avevo detto, e lei si era subito
                                    rinfrancata ed aveva ripreso a raccontarmi allegramente le storie più
                                    stravaganti. In realtà non se la passava molto bene. Un giorno
                                    l’avevo incontrata disperata (si fa per dire) con una scarpa in mano:
                                    le si era rotto un tacco, e non poteva mica andare al lavoro scalza!
                                    L’avevo accompagnata ad un taxi (solo 10 reais) per poter tornare a
                                    casa, giù al Porto de Barra, per cambiare le scarpe. Anche lei mi si
                                    era affezionata. Elena mi disse che successivamente aveva ripreso a
                                    tirare crack, era stata male e aveva lasciato la città. Povera
                                    “Princesa”...
                                </p>
                                <p>
                                    Avevo appena intravisto William, il <i>menino da rua</i> incontrato alcuni anni
                                    prima, a causa del quale (non mi vergogno a dirlo) avevo pianto. Ora era
                                    cresciuto, la malformazione al ginocchio era divenuta più appariscente,
                                    lo sguardo incupito. Un altro Ícaro. Solo qualche anno prima era uno
                                    strano ragazzino sorridente, di otto o nove anni, riccioli biondi:
                                    sangue di <i>gringo</i> nelle vene! concepito chissà in qual modo... Si
                                    aggirava scalzo e lacero per il Pelourinho come un animale braccato
                                    chiedendo con insistenza i soldi per mangiare. Mi aveva proprio seccato,
                                    quella volta, mentre stavo cercando di telefonare a Lédice da un
                                    <i>orelhão</i> in Terreiro de Jesus, e si sa come funzionano talvolta i
                                    telefoni in Brasile... Spazientito per conto mio, l’avevo mandato via
                                    in malo modo. Lui si era seduto sui gradini del Museo da Facultade e
                                    piangeva dirottamente: «<i>Tou com fome!</i> Ho fame! Nessuno mi aiuta...».
                                    Mi sentivo una merda per come mi ero comportato: mi sedetti accanto a
                                    lui e gli avevo parlato. Poi l’avevo accompagnato ad
                                    un <i>lanchonete</i> di Rua Portas do Carmo per farlo
                                    mangiare. Lui mi guardava con occhi
                                    riconoscenti e mi ringraziava ad ogni boccone. Quella volta doveva aver
                                    davvero fame, ma seppi in seguito che la maggior parte del denaro che
                                    “guadagnava” lo spendeva in altro modo. Ripresi la mia strada, ma al
                                    ricordo di quella scena e del mio comportamento mi venne un groppo in
                                    gola che mi fece scoppiare in lacrime, lì per strada... Ne parlai a
                                    Lédice e a padre Alfredo, con cui avevo giusto appuntamento giù a
                                    Barra, pensavo addirittura ad un’adozione a distanza. Padre Alfredo,
                                    che da anni operava con marginali e i <i>professionais
                                        do sexo</i>, mi spiegò quali e quante situazioni
                                    diverse potevano celarsi dietro a
                                    quell’episodio. Prima bisognava verificare esattamente
                                    lo stato delle cose, quindi ci eravamo accordati: io
                                    avrei dovuto “convocare” il ragazzino in un luogo
                                    certo, dove si sarebbe recata in incognito una sua
                                    assistente. Il luogo prescelto era il caffè di George, il francese,
                                    all’angolo del Cruzeiro de San Francisco, dove passavo spesso qualche
                                    oretta in compagnia di Evenzio, il cognato italiano di Lédice.
                                </p>
                                <p>
                                    Nei giorni seguenti lo avevo incontrato, William, mi si era avvicinato
                                    zoppicando: aveva una brutta ferita ad un piede, ancora sanguinante,
                                    pareva infetta. Io ed Evenzio gli facemmo una ramanzina coi fiocchi, che
                                    non si andava in giro scalzi per la città, che doveva portare i
                                    sandaletti. Lo mandammo di filato al <i>Ponto da Saúde</i> che stava proprio
                                    lì dietro a farsi medicare (per essere più sicuri lo facemmo
                                    accompagnare da un tipo del posto), dicendo che avremmo comperato per
                                    lui i <i>sandália</i>. Il francese, da trent’anni sposato in città con una
                                    baiana, si mostrò scettico: entro sera il ragazzino avrebbe rivenduto i
                                    sandali per comprarsi tutt’altra roba. Ciò nonostante acquistammo un
                                    paio di infradito a buon mercato e quando William fu di ritorno con il
                                    piede bell’e medicato, sfoggiando una <i>camiseta</i> di bucato, glieli
                                    facemmo indossare, dandogli appuntamento per il giorno dopo alla stessa
                                    ora, nello stesso luogo. Inutile dire che all’appuntamento il
                                    ragazzino non si fece vedere: aveva mangiato la foglia, e
                                    all’assistente sociale non rimase che tornarsene al suo lavoro. Dopo
                                    qualche giorno lo incontrai di nuovo, lacero e scalzo: il francese aveva
                                    azzeccato le previsioni. Padre Alfredo tornò a spiegarmi che non era
                                    facile recuperare questi ragazzini, spesso erano loro che non avevano
                                    nessuna intenzione di farsi aiutare, bisognava avere pazienza.
                                </p>
                                <p>
                                    Una sera stavo cenando in Rua das Laranjeiras, ascoltando un magnifico
                                    duo di anziani suonatori di <i>Choro</i>, William mi si era ancora avvicinato,
                                    guardingo come non mai. Si era seduto un po’ discosto sull’orlo del
                                    marciapiede e subito un cameriere era accorso per cacciarlo via. Io lo
                                    avevo fermato, dicendo che il ragazzino stava con me, non dava fastidio.
                                    William non mi sembrò del tutto tranquillizzato. Poco dopo un agente in
                                    borghese, con un grosso distintivo appuntato sulla camicia, si era
                                    avvicinato con fare noncurante e poi con mossa fulminea aveva agguantato
                                    il ragazzino trascinandolo via, senza degnare della minima attenzione le
                                    mie timide proteste, mentre quello si divincolava piangendo
                                    disperatamente. Fu ancora il paziente cameriere a spiegarmi la cosa.
                                    William era un recidivo, da tempo nel giro della droga e per questo
                                    sotto stretta sorveglianza. Gli avrebbero dato una lezioncina, ossia una
                                    carica di legnate, l’avrebbero cacciato per un po’ di tempo in una
                                    “Casa do Menor”, ossia un riformatorio, tenuto là per qualche
                                    settimana, qualche mese, poi lui sarebbe uscito e avrebbe ripreso la
                                    vita di sempre. Non c’era speranza. Era una piaga sociale, la
                                    delinquenza minorile...
                                </p>
                                <p>
                                    Avevo chiesto ad Elena notizie anche di Mónica, la
                                    ragazza <i>delgadinha</i> e
                                    riccioluta che avevo conosciuto in uno dei precedenti viaggi. «Quella
                                    con cui scopavi due anni fa?» mi disse con una punta di irritazione
                                    Elena. «Negli ultimi tempi si faceva di fumo ed altre schifezze, poi
                                    credo sia tornata nell’<i>interior</i>. È sparita dalla circolazione da
                                    tempo». Non ci avevo scopato, ma eravamo usciti insieme più di una
                                    volta, una passeggiata lungo mare, una visitina allo Shopping Barra, un
                                    concerto di samba-reggae, una <i>cervejinha</i>,
                                    una <i>caipirinha</i>... Mi aveva
                                    raccontato un sacco di storie inverosimili, della sua infanzia infelice,
                                    dei suoi amori altrettanto infelici, la vecchia nonna ammalata, i
                                    genitori poveri nel <i>sertão</i>... Recitava la parte
                                    della ragazza perbene e
                                    sfortunata, Ícaro in gonnella: «Non sono una ragazza di programma!»
                                    aveva protestato, lei lavorava, lavorava come <i>trança-cabelos</i>, ma
                                    intanto io non l’avevo mai vista all’opera. Ci stavo bene insieme,
                                    ma non credevo una parola a quello che mi raccontava. Con me faceva già
                                    la fidanzatina: «Oh, meu amor!...». Poi quando capiva che le sue
                                    lusinghe non avevano grande effetto assumeva un’aria contrita e
                                    sconsolata: «Ninguém me ama, ninguém me quer, ninguém gosta de
                                    mim...». Io le dicevo: «Ma perché non lasci perdere i turisti più
                                    vecchi di te, ti cerchi davvero un lavoro e un fidanzato della tua età,
                                    e la smetti con questa vita?». Lei continuava a negare, naturalmente...
                                    e riprendeva l’elenco delle sue necessità: l’affitto della camera
                                    in città, il materasso da cambiare, le medicine per la nonna, la
                                    cassetta con il necessario per fare le treccine afro in piazza... E poi:
                                    «Non vuoi fare un piccolo regalo alla
                                    tua <i>enamorada</i>? <i>Um presente</i>?...». Ogni
                                    tanto le allungavo 50 reais.
                                </p>
                                <p>
                                    Quando ci salutammo, il giorno prima della mia partenza, fu molto
                                    carina. Mi ringraziò per come l’avevo aiutata, per come l’avevo
                                    trattata: ero stato gentile con lei, anche se non... Io le augurai buona
                                    fortuna. Le dissi che presto avrebbe trovato un bravo giovane che le
                                    avrebbe voluto bene, me lo sentivo. L’indomani avevo il volo a
                                    mezzanotte, perciò passai ancora la giornata a fare le ultime compere,
                                    poi nel tardo pomeriggio, mentre aspettavo di prendere il taxi per
                                    l’aeroporto, mi concedetti un’ultima <i>caipirinha</i> al bar di rua Maciel
                                    de Baixo, dove di solito c’era musica dal vivo. La vidi in lontananza
                                    scendere dal Cruzeiro a passi incerti sul rozzo selciato per via dei
                                    tacchi alti, insieme ad un’amica, entrambe truccatissime e tirate da
                                    grandi occasioni: erano palesemente in battuta di caccia. Non si
                                    aspettava di incontrarmi, era certa che fossi già partito. Sarebbe
                                    passata davanti al tavolino dove ero seduto: appena mi scorse girò
                                    goffamente su se stessa e scappò di corsa, seguita dall’amica. Non
                                    voleva che la vedessi conciata in quel modo...
                                </p>
                                <p>
                                    Ciò nonostante l’avrei rivista volentieri, tornando a Bahía, ma
                                    sembrava che di tutti i personaggi che avevano popolato i miei
                                    precedenti viaggi non vi fosse più traccia al Pelourinho. Quelli che
                                    avevo rivisto avevano rivelato la loro vera natura. E nessun altro
                                    incontro degno di nota. Tutto convergeva nel farmi considerare conclusa
                                    quella vicenda all’insegna della disillusione, del crudo realismo.
                                </p>
                                <p>
                                    Eppure qualcosa di sorprendente accadde. Mi trovavo sulla terrazza di un
                                    baretto sul lungomare di Barra, uno degli ultimi giorni della mia
                                    permanenza, immerso esattamente in questo tipo di pensieri. Anzi cercavo
                                    nella memoria il nome di quella ragazza conosciuta qualche anno prima,
                                    che ora mi sfuggiva. In quel preciso istante dietro di me udii una voce
                                    nota, timbro e cantilena inconfondibile: «Mónica!?...». Il nome mi
                                    era tornato alla mente prima ancora di voltarmi per cercare con gli
                                    occhi la sua figura. «Mónica! É você?!...». Era lei, davvero. Il
                                    sorriso, lo sguardo sognante, appena un po’ più pienotta nel volto e
                                    nel fisico. Mi riconobbe, era sorpresa, e contenta di vedermi. In breve
                                    mi raccontò le sue ultime vicende. In effetti per un periodo era stata
                                    male, aveva fatto una vita disgraziata, fra alcool, fumo e tutto il
                                    resto: «Eu fiz muitas coisas ruím, tava louca...». Era arrivata
                                    vicina a rischiare la pelle, poi la svolta: aveva conosciuto un bravo
                                    ragazzo, si erano messi insieme, si erano sposati, ora avevano due
                                    figli, uno naturale ed uno adottato, e gestivano la <i>pousada</i> che stava
                                    proprio lì, sopra il bar dove mi ero seduto e dove stavo prendendo un
                                    succo di <i>açaí</i>. Cose che possono succedere solo a Bahía. Lei ormai
                                    usciva poco, non beveva più, al massimo una <i>cervezinha</i>, accudiva i
                                    figli e dava una mano a tenere la <i>pousada</i>. Non erano ricchi, ma tutto
                                    sommato non se la passavano male, non le mancava niente, stava bene.
                                </p>
                                <p>
                                    Le dissi: «Ricordi quello che ti dicevo? Che avresti trovato <i>um rapaz bom</i>, un bravo ragazzo che ti avrebbe voluto bene?». Ricordava, certo.
                                    Mi ringraziò ancora: «Você foi muito bom comigo, me ajudou...».
                                </p>
                                <p>
                                    Anche questo episodio in fondo contribuiva a segnare il compimento di
                                    quella mia esperienza brasiliana iniziata avventurosamente sette anni
                                    prima. Però qui la conclusione non era di segno negativo. A differenza
                                    di Ícaro, Mónica in qualche modo era riuscita a tirarsi fuori dalla
                                    palude. L’illusione creata dalla scrittura letteraria era presto
                                    caduta lasciando il posto al disincanto, ma ora la realtà stessa
                                    rispondeva a tono, affermando una nuova possibilità: le cose potevano
                                    cambiare, c’era sempre una speranza di riscatto. E mi piaceva pensare
                                    che là dove la parola scritta aveva fallito, poteva aver contribuito al
                                    cambiamento la parola detta: non tanto quella di una predizione un po’
                                    di circostanza, quanto il messaggio positivo che scaturiva dalla
                                    coerenza tra parole e comportamenti.
                                </p>
                                <p>
                                    Mi trovavo ancora a divincolarmi tra stereotipi di segno opposto coi
                                    quali avevo dovuto fare i conti più di una volta durante tutti quei
                                    viaggi, buonismo e luoghi comuni. Per quanti sforzi uno possa compiere,
                                    nessuno ne è del tutto esente. E la realtà, appena credi di averla
                                    colta, si rovescia nel suo contrario.
                                </p>
                                <p>
                                    Mónica si congedò molto cordialmente, ma prima di andar via mi chiese:
                                    «Non hai portato un regalo per me?» – «Quale regalo?» – «<i>Um
                                        presente, não sei, um perfume, uma camiseta...</i>». Ma benedetta ragazza,
                                    come potevo sapere che ti avrei incontrata di nuovo?... Magari la
                                    prossima volta, <i>a próxima vez, né, menina</i>?
                                </p>
                                <p class="quote">
                                    Moena, 17 ottobre 2010.
                                </p>


                            </article>
                        </section>
                    </div>
                </div>

                <div align="right">
                    <a href="#index"><img src={upArrow} alt="Up Arrow" /></a>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Chiocchetti;