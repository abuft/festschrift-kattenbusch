import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Footer from "../Footer";
import Header from "../Header";
import Rubrik from "../Rubrik";
import UpArrow from "../UpArrow";
import MattuschPortrait from "../../images/mmattusch/mmattusch-portrait.png";
import InizioCommediaSmall1 from "../../images/mmattusch/inizio-commedia-1_small.png";
import InizioCommediaSmall2 from "../../images/mmattusch/inizio-commedia-2_small.png";

const images = [
    {
        src: "https://festschrift-kattenbusch.de/images/mmattusch/inizio-commedia-1.jpg",
        title: "Abb. 1",
        description: "Beginn der 'Commedia' im Codex 1080, Biblioteca Trivulziana, Mailand (Quelle: http://www.hs-augsburg.de/~harsch/italica/Cronologia/secolo14/Dante/dan_d000.html)",
    },
    {
        src: "https://festschrift-kattenbusch.de/images/mmattusch/inizio-commedia-2.jpg",
        title: "Abb. 2",
        description: "Beginn der <i>Commedia</i> im Codex 1080 (Detail), Biblioteca Trivulziana, Mailand (http://www.hs-augsburg.de/~harsch/italica/Cronologia/secolo14/Dante/dan_d000.html)",
    },
]

function Mattusch(props) {

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <div id="Wrapper" className="container_14">
            <div id="Header">
                <Header id={props.author} />
                <div className="grid_9">
                    <h1 id="main_title">Dante und die Sprache der Sinne – literaturwissenschaftliche
                        Reflexionen zu Dante Alighieris <i>De vulgari eloquentia</i></h1>
                    <p id="author">Michèle Mattusch, Berlin</p>
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

                <Rubrik />
                <div id="Teasers" className="clearfix">
                    <div className="grid_9">
                        <p>
                            Das, was die romanistische Literaturwissenschaft mit der Linguistik
                            verbindet, dürfte heute vor allem die Sprachreflexion sein, zumal, wenn
                            es sich um eine gemeinsame Sprache wie das Italienische handelt. So muss
                            der Gratulationsgruß einer Literaturwissenschaftlerin für einen
                            Linguisten dann auch mit dem Wort beginnen. Denn das Wort stand
                            bekanntlich am Anfang. Eben diese Beziehung zum Wort aber ist es auch,
                            die die Literaturwissenschaft von der modernen Sprachwissenschaft
                            unterscheidet. Deutlich wird dies vor allem am Zugriff auf historische
                            Texte, die man als Abhandlungen über die Sprache lesen kann. Solche
                            älteren Werke zur Sprach- und Konversationskultur – man denke etwa an
                            Castigliones <i>Il libro del Cortegiano</i> (1528) oder Pietro Bembos <i>Prose
                                della volgar lingua</i> (1525) – beziehen ihre Sprech- und Sprachnormen
                            aus einer rhetorisch modellierten Verhaltenskultur. Während die
                            Linguistik in ihnen der Frage nach der Sprachnormierung nachgeht,
                            stellen sie für die Literaturwissenschaft Zeugen eines menschlichen
                            Perfektibilitätsbemühens dar, das sich in Sprachnormen niederschlägt,
                            deren Grundlage eine ästhetische Ethik bildet.
                        </p>
                    </div>

                    <div className="grid_5">
                        <div className="abouttheauthor">
                            <img src={MattuschPortrait} width="130"
                                height="111" alt="Portrait - Michèle Mattusch" />
                            <div className="abouttheauthorfont"><br /><br />
                                <b>Michèle Mattusch</b>,
                                Prof. Dr., geb. 1958, o. Prof. für
                                rumänische, italienische und französische Literatur am Institut für
                                Romanistik der Humboldt-Universität zu Berlin. Lehr- und
                                Forschungsgebiete sind die Literatur der Frühen Neuzeit, Moderne und
                                Postmoderne, Medialität und Intermedialität, Fiktions- und
                                Metapherntheorie. Zahlreiche Aufsätze und Syntheseartikel zur
                                italienischen und zur rumänischen Literatur.
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
                                    Dante Alighieris <i>De vulgari eloquentia</i><sup><a href="#fn1"
                                        name="fz1">1</a></sup> bildet hier keine Ausnahme. Im
                                    Gegenteil: Dantes Traktat steht geradezu am Anfang dieser Tradition.
                                    Zwischen 1303 und 1305 auf Lateinisch abgefasst, um den Gelehrten der
                                    Zeit zu dienen, gilt das Werk noch heute als Begründungsgeste der
                                    italienischen Volkssprache. Dabei blieb es mehr als einhundert Jahre
                                    unbeachtet; es wurde erst 1529 von Gian Giorgio Trissino ins
                                    Italienische übersetzt und somit einer breiten Öffentlichkeit
                                    zugänglich. Das in vier Büchern geplante Traktat bricht zudem im
                                    zweiten Buch ab, sodass es Fragment geblieben ist. Die sogenannte
                                    ‚erste gelehrte Abhandlung über die Volkssprache‘ erweist sich bei
                                    einer literaturwissenschaftlichen Lektüre als eine an Cicero und Horaz
                                    geschulte Dichtungslehre mit rhetorisch-poetologischer Zielsetzung. Mit
                                    der Sprache selbst beschäftigen sich vor allem das Proömium und die
                                    historischen und sprachgeographischen Teile des ersten Buches.
                                </p>
                                <p>
                                    Diese Teile sind es dann auch, die von der modernen Linguistik immer
                                    wieder untersucht wurden, um sie mit gegenwärtigen Ergebnissen und
                                    Methoden der Sprachwissenschaft zu vergleichen. Eine gelungene und
                                    subtile Synthese hat Peter Wunderli mit seiner Frage <i>Dante – ein
                                        Linguist?</i><sup><a href="#fn2"
                                            name="fz2">2</a></sup> im Jahr 1993 geliefert. Obwohl
                                    Wunderli deutlich auf die
                                    Gefahren von Forschungen verweist, die Dante mit der modernen Linguistik
                                    verrechnen wollen, und ihn mit Pier Vincenzo Mengaldo (1979: 13) als
                                    einen genialen Dilettanten<sup><a href="#fn3" name="fz3">3</a></sup>
                                    bezeichnet, findet er doch eine
                                    bemerkenswerte Fülle von Aspekten, die Parallelen und Anschlussstellen
                                    zur modernen Linguistik bieten. Dante, so vermerkt Wunderli, habe in
                                    seinem Traktat den funktionellen und instrumentellen Charakter der
                                    Sprache über die Expressivität gestellt. Er könne deshalb
                                    kommunikationsorientiert gelesen
                                    werden.<sup><a href="#fn4" name="fz4">4</a></sup>
                                    Sprache sei für ihn –
                                    ähnlich wie bei Ferdinand de Saussure – keine Substanz, sondern eine
                                    Form. Historisch in der aristotelischen Tradition verankert, vertrete er
                                    gegen die modistische Sicht ein zweiseitiges Zeichenmodell mit
                                    arbiträrem Charakter.<sup><a href="#fn5" name="fz5">5</a></sup>
                                    Außerdem handele das Traktat vom Ursprung, der
                                    historischen Veränderlichkeit und sozialen Schichtenspezifik der
                                    Sprache. Wunderli meint damit die adamitische Sprachgabe und die
                                    <i>confusio linguarum</i> nach der babylonischen Sprachverwirrung, die
                                    sprachliche Gemeinsamkeiten nur noch bei Berufsständen und in
                                    Fachsprachen zulasse. Selbst sprachgeographische Ansätze werden von ihm
                                    ausgewiesen, zerfallen die Sprachen doch bei Dante nach dem Turmbau zu
                                    Babel im Dreischritt, sodass sich drei europäische Sprachen und drei
                                    romanische, die sogenannten oc-, oïl- und sì-Sprachen, herausbilden,
                                    die wiederum in mindestens 14 Dialekte mit den jeweiligen Subdialekten
                                    zersplittern. Insgesamt spricht Peter Wunderli dem Dilettanten Dante
                                    somit erstaunliche sprachwissenschaftliche Kenntnisse und methodische
                                    Ansätze zu. Schließlich glaubt er, sogar bei Dante einen Normbegriff
                                    auf der Basis des <i>usus</i> zu finden. Dieser Normbegriff, so Wunderli, sei
                                    der dichterischen Sprache entgegengesetzt, die Dante lediglich als eine
                                    zulässige Abweichung begreife.<sup><a href="#fn6" name="fz6">6</a></sup>
                                    Das von ihm propagierte ‚volgare
                                    illustre‘ sei als <i>tertium comparationis</i> eines nicht zu findenden
                                    Idealtypus aller Varietäten konstruiert.
                                </p>
                                <p>
                                    Peter Wunderli würdigt Dante Alighieri als einen Gelehrten, der in der
                                    Retrospektion sichtbare Anschlüsse für die moderne Linguistik bietet.
                                    Sein Katalog an Kriterien reflektiert eine Linguistik, die die Poesie in
                                    die Alterität zwingt und sich von der Einheit verabschiedet hat, die
                                    Poetik, Rhetorik und Sprache für Dante bilden. So umgeht der Linguist
                                    den rhetorisch-ethischen Normbildungsprozess, der das Modell der
                                    italienischen Dichtungssprache konstituiert. Kurzum, die moderne
                                    Linguistik hat sich – zweifellos nicht unberechtigt – von dem
                                    verabschiedet, was für Dante Alighieri eine Selbstverständlichkeit
                                    war: das Prinzip der Einheit von Sprach-, Dichtungs- und
                                    Verhaltenslehre. Dantes Traktat, zuweilen von willkürlichen,
                                    persönlichen, politischen und ästhetischen Werturteilen durchwirkt –
                                    man denke an die Invektiven gegen das Toskanische und an das Lob, das er
                                    den Sizilianern und den Staufern zollt –, ist der modernen Linguistik
                                    nicht ‚objektiv‘ genug. Und die Jagd nach einem parfümierten
                                    Panther – Dante nutzt wiederholt die Jagdmetapher (I, 16, 1) – , die
                                    Suche nach einer perfekten Sprache, die sich im Begriff des ‚volgare
                                    illustre‘ veranschaulicht, kann nur ein Idealtypus aller Varietäten
                                    sein. Wenig beachtet wird dabei die Tatsache, dass das ‚volgare
                                    illustre‘ eine ‚edle‘, ‚anschlussfähige‘, ‚hoffähige‘
                                    und ‚höfische‘ Sprache zu sein hat (I, 16, 6), die wie die guten
                                    Sitten, Gebräuche und Handlungen der Menschen keiner Stadt allein
                                    gehört, sondern allen gemeinsam ist (I, 16, 4).
                                </p>
                                <p>
                                    Schon bei Dante, nicht erst bei Castiglione oder Bembo, ist die Sprache
                                    über Vergleiche an moralische und ästhetische Werte zurückgebunden.
                                    Das ‚volgare illustre‘ wird zum Entwurf einer zu bildenden
                                    Vollkommenheit der Sprache,<sup><a href="#fn7" name="fz7">7</a></sup>
                                    die die existierende Alltagssprache
                                    aushebelt, indem sie von ihr nur das Beste nutzt. Pietro Bembo, der
                                    Dantes Traktat mit Sicherheit kannte, hat den Zusammenhang von
                                    rhetorischer Verhaltensmodellierung und Sprachnormierung dann in seinen
                                    <i>Prose della volgar lingua</i> (1525) festgeschrieben. Als Dichter, der im
                                    Kontext einer Nachahmungspoetik schrieb, hebt er auf die
                                    Perfektionierung des <i>decorum</i> ab, die Schnittstelle zwischen Rede und
                                    ethisch rückgebundenem Verhalten. So wird es im Italienischen
                                    rhetorisch-ästhetische Modelle der Sprache geben – ganz im Gegensatz
                                    zur deutschen Sprache, in der Luther bekanntlich ‚dem Volk aufs Maul
                                    schauen wollte‘. Schönheit, Magnifizenz und Wohlklang gehören zum
                                    Entwurf dieser Vollkommenheit, denn Sprache kann eben ‚schön‘ sein.
                                    Es ist nicht zuletzt wiederum ein Linguist, Jürgen Trabant, der diesen
                                    Aspekt der Sprache stets besonders betont. Die Poesie, so Trabant, sei
                                    „ein Schaffen um des Schaffens willen, eine zweckfreie Produktivität,
                                    etwas Überschüssiges, vielleicht eine Feier des Lebens
                                    selbst“.<sup><a href="#fn8" name="fz8">8</a></sup>  So
                                    viel Lob ist der poetischen Sprache seit langem nicht mehr gezollt
                                    worden. Zumal Trabant sich ausgerechnet Chomsky zum Gewährsmann nimmt:
                                    „Sprache ist als ein System angelegt, das ‚schön‘, aber im
                                    Allgemeinen unbrauchbar ist. Es ist für Eleganz geschaffen, nicht für
                                    den Gebrauch“.<sup><a href="#fn9" name="fz9">9</a></sup>
                                </p>
                                <p>
                                    Fahnden wir weiter nach den Ansätzen für das ‚volgare illustre‘
                                    bei Dante Alighieri. Dantes <i>De vulgari eloquentia</i> beginnt bekanntlich
                                    nicht mit der Zielvorstellung, sondern mit einer untergliedernden
                                    Hierarchisierung der Sprachen, wobei er eine primäre und eine
                                    sekundäre Sprache unterscheidet. Er trennt die sogenannte
                                    ‚natürliche‘ Sprache, die allen gemeinsam ist, vom Latein, das er
                                    als eine universelle, künstliche Sprache auffasst. Die Sprachen der
                                    Römer und der Griechen hält er also für künstlich konstruiert und
                                    geregelt. In seinem Traktat räumt er zunächst den ‚natürlichen‘
                                    Sprachen den Vorzug ein. Sie sind die über Tradierung entstandenen
                                    ‚edleren‘ und ursprünglicheren Sprachen. Was aber macht die Sprache
                                    schließlich zu einer edlen (illustre) Sprache, wenn man die Gegenwart
                                    betrachtet? Muss man den Begriff des ‚volgare illustre‘ nicht neu
                                    setzen? Dies tut Dante in den Abschnitten über die Sprache der Dichter.
                                    Anhand der Sprache von Cino da Pistoia klärt er über seinen Begriff
                                    auf. ‚Edel‘ ist eine Sprache, wenn sie „erleuchtend und erleuchtet
                                    strahlt“ (I, 27, 1). Macht (das Setzen eines Maßstabs), Gebildetheit
                                    und Gerechtigkeit (curialis) machen gemeinsam mit der guten Struktur das
                                    perfekte, urbane Sprachresultat aus, das er zuweilen in den eigenen
                                    Kanzonen und in denen von Cino findet. Nur bei bestimmten Dichtern also
                                    entsteht das ‚volgare illustre‘. Denn das ‚volgare illustre‘ ist
                                    eine zu schaffende Sprache.
                                </p>

                                <p>
                                    Mit dem Perfektionsmodell reagiert Dante im Wesentlichen auf seine
                                    anthropologische und seine historische Sicht auf die Sprache. Zentraler
                                    Teil des Proömiums des ersten Buches von <i>De vulgari eloquentia</i> ist
                                    nämlich die anthropologische Begründung der Sprache in den Kapiteln
                                    I–III. Ihnen folgt die Reflexion zum Ursprung der Sprache bis zur
                                    babylonischen Sprachverwirrung (IV–VII). Diese wird dann Anlass zur
                                    Sichtung des gegenwärtigen Zustands und des Vorhabens, ein ‚volgare
                                    illustre‘ zu re-konstruieren oder
                                    eben zu erfinden.<sup><a href="#fn10" name="fz10">10</a></sup>
                                </p>
                                <p>
                                    Damit werden die Prämissen der Sprache von entscheidender Bedeutung. In
                                    der Tradition von Aristoteles deklariert Dante die Sprache als den
                                    Menschen zugehörig (I, 2). Weder die Engel noch die Tiere oder Dämonen
                                    benötigen die Sprechfähigkeit (I, 2, 2). Die vom Naturinstinkt
                                    geleiteten niederen Lebewesen können die ihnen gemeinsamen
                                    Leidenschaften und Verhaltensweisen aufgrund ihrer Zugehörigkeit zur
                                    gleichen Art erkennen. Auch bedürfen sie der Sprache nicht, weil sie
                                    keinen freundlichen Kontakt untereinander haben (I, 2, 5). Die Dämonen
                                    dann kennen einander aus der Zeit vor dem Fall, zur Vermittlung ihrer
                                    gemeinsamen Bosheit bedarf es der Sprache ebenfalls nicht (I, 2, 4).
                                    Sprache, so muss man also schlussfolgern, beruht auf den Unterschieden
                                    innerhalb der Spezies Mensch. Und diese Unterschiede betreffen die
                                    unterschiedlichen Grade ihrer Vernunft. Der Mensch, so heißt es, wird
                                    von der Vernunft bewegt, und diese ist eben bei einzelnen Individuen
                                    unterschiedlich ausgeprägt (I, 3, 1). Sprache dient dem Menschen zum
                                    einen zur Pflege sozialer Kontakte, zum anderen aber zum Austausch von
                                    Wissen. Denn höchstes Bedürfnis des Menschen liegt, wie es im
                                    <i>Convivium</i> heißt, im Begehren nach Wissen und Selbstperfektionierung:
                                    „Sì come dice lo Filosofo nel principio de la Prima Filosofia, tutti
                                    li uomini naturalmente desiderano di
                                    sapere.“<sup><a href="#fn11" name="fz11">11</a></sup>
                                </p>
                                <p>
                                    Komplexer ist zweifellos die letzte Frage, die Frage nämlich, warum die
                                    Engel nicht der Sprache bedürfen. Die Engel, bekanntlich Mediatoren und
                                    Boten der anderen Welt, verfügen zur Offenlegung ihrer großartigen
                                    Gedanken – die Rede ist von einer beneidenswert „schnellen und nicht
                                    in Worte zu fassenden Fähigkeit ihres Intellekts“ (I, 2, 3) – über
                                    die Fähigkeit, sich einander vollkommen zu offenbaren. Sie verfügen
                                    über ein sprachloses Verständigungsvermögen. Zumindest „in dem
                                    glänzenden Spiegel, in dem alle reflektiert werden“, können ihre
                                    Gedanken „in ihrer ganzen Schönheit und ihrem Streben sichtbar
                                    werden“ (I, 2, 3). Engel benötigen keine sprachlichen Zeichen. Der
                                    Spiegel – Gott – ermöglicht ihnen blitzschnelle und völlige
                                    Offenbarungen ihres Intellekts. Dieser große Vorteil sagt natürlich
                                    etwas über die Sprache der Menschen aus. Sprache ist also das Medium
                                    des Nicht-völlig-Offenbaren. Sie steht für eine Abwesenheit, die sie
                                    anzeigt und verhüllt. Sprache ist für Dante ein Medium der
                                    Verlangsamung und der Verzögerung. Im Prinzip ist sie dem Menschen nur
                                    deshalb gegeben, weil die Menschen keine Engel sind. Menschen sind
                                    gewissermaßen behinderte Lebewesen, „denn der menschliche Geist ist
                                    durch Materialität und Schwerfälligkeit des sterblichen Körpers
                                    behindert“ (I, 3, 1). Der menschliche Geist, langsam und behäbig,
                                    kann die Unmittelbarkeit, Umfassendheit, Schnelligkeit und
                                    Großartigkeit der angelischen Ideen nie erreichen. Der menschliche
                                    Körper macht es schier unmöglich, einander durch ‚geistige
                                    Spiegelungen‘ zu verstehen.
                                </p>
                                <p>
                                    Sprache ist bei Dante somit als ein Hilfsmittel fehlender
                                    Unmittelbarkeit beim intellektuellen Austausch der Menschen
                                    untereinander gedacht: „Wenn wir nämlich sorgfältig überlegen, was
                                    wir mit dem Sprechen beabsichtigen, dann ist deutlich, dass es nichts
                                    anderes ist, als anderen unsere Gedanken mitzuteilen“ (I, 2, 3).
                                    Natürlich geht es hier um
                                    Kommunikation<sup><a href="#fn12"
                                        name="fz12">12</a></sup>, nur wird sehr deutlich ein
                                    ganz bestimmter Aspekt betont. Sprache dient dem Gedankenaustausch eines
                                    im Körper verhafteten Menschen. Zentral ist nicht die
                                    Mitteilungsfunktion der Sprache auf der Grundlage von Normen, sondern
                                    das Medium. Dante reflektiert im Grunde genommen über den medialen
                                    Aspekt der Sprache. Beim Übermitteln der Gedanken muss Sprache sich auf
                                    die Körperlichkeit der Menschen einstellen. Hier finden wir das, was
                                    die Linguistik die „danteske Doppelstruktur“ der Sprache nennt. Um
                                    an den Verstand des Menschen zu gelangen, bedarf die Sprache eines
                                    sinnlichen Mediums, denn der Mensch kann Gedanken nur über die Sinne
                                    aufnehmen:
                                </p>
                                <p className="longcitation">
                                    Das Menschengeschlecht brauchte also ein rational und sinnlich
                                    wahrnehmbares Zeichen zur gegenseitigen Übermittlung von Gedanken. Es
                                    musste nämlich rational sein, weil es etwas aus dem Verstand zu
                                    empfangen und an den Verstand zu senden hatte, und es musste sinnlich
                                    wahrnehmbar sein, weil nichts von einem Verstand an andere ohne ein
                                    sinnlich wahrnehmbares Medium gesendet werden kann (I, 3, 2).
                                </p>
                                <p>
                                    Die Doppelstruktur der menschlichen Sprache beruht bei Dante auf der
                                    menschlichen Doppelnatur von Körper und Geist. Sie bildet die Grundlage
                                    für den zweiwertigen Zeichenbegriff: „Dieses edle Zeichen ist es
                                    also, von dem wir sprechen. Es ist sinnlich wahrnehmbar, insofern es ein
                                    Laut ist, rational, insofern es etwas, das wir festlegen, bedeutet“
                                    (I, 3, 3).
                                </p>
                                <p>
                                    Ohne die Sinnlichkeit, so übrigens ganz nebenbei auch Wunderli, gäbe
                                    es gar keine menschliche Kommunikation. Konventionell festgelegt aber
                                    sind nur die Verbindungen des sinnlichen Sprachkörpers mit den
                                    Bedeutungen. In Dantes Sprachkonzept spielt diese notwendige
                                    Sinnlichkeit bis in die <i>Commedia</i> hinein eine entscheidende Rolle. Im
                                    Paradies, wo der reine Intellekt herrscht, muss der Künstler-Gott den
                                    Menschen zumindest Lichterscheinungen und Formspiele geben, damit der
                                    Pilger Dante, der die drei Reiche bekanntlich als lebender Mensch mit
                                    seinem Körper und seinen Sinnen erwandert, eine anschauliche Gestalt
                                    von den Ideen bekommt. Das, was dem menschlichen Zugang verschlossen
                                    ist, weil es als rein Geistiges nicht über die Sinne zu erlangen ist,
                                    muss wahrnehmbare Erscheinung
                                    werden.<sup><a href="#fn13" name="fz13">13</a></sup>
                                    Es wird deshalb, so Beatrice, in einer Sprache
                                    geformt, die der Mensch erfassen kann:
                                </p>
                                <p className="quote">
                                    Così parlar conviensi al vostro ingegno,<br />
                                    però che solo da sensato apprende<br />
                                    ciò che fa poscia d’intelletto degno.
                                    <p style={{ margin: "-20px 0 0 350px" }}>(Par. IV, 40–43)</p>
                                </p>
                                <p>
                                    Dantes Formbegriff kennt damit das Prinzip von Figuration und
                                    Defiguration eines gegebenen Materials. Er ist mit Saussure nicht
                                    vereinbar.<sup><a href="#fn14"
                                        name="fz14">14</a></sup> Denn bei Dante geht es um die
                                    intellektuelle Form- und
                                    Umformbarkeit von Buchstaben in Töne oder Bilder, den medialen
                                    Sprachcharakter, der der menschlichen Aufnahmefähigkeit und
                                    Perfektibilität entspricht. Form bedeutet deshalb, den Dingen, den
                                    Ideen, zuletzt sogar dem Unvorstellbaren, eine anschauliche Gestalt zu
                                    geben, sei es durch wohl gesetzte Worte, sei es durch Transformation in
                                    Visualität oder Wohllaut mit Hilfe der Rhetorik.
                                </p>
                                <p>
                                    Auch der sprachgeschichtliche Teil des Traktats führt letztlich zu
                                    dieser sinnlichen Sprachauffassung. Lassen wir die endlosen Debatten
                                    beiseite, die darüber spekulieren, ob Adam von Gott nur die
                                    Sprachfähigkeit oder eine ausgebaute Sprache bekommen hat. Fakt ist,
                                    dass die Sprache (oder die Sprechfähigkeit) eine göttliche Gabe ist.
                                    Nach Genesis 3,2–3 hat wohl Eva den ersten Satz gesprochen, doch
                                    dafür bringt Dante kein Verständnis auf. Für ihn ist es
                                    „vernünftiger anzunehmen, dass der Mann eine so wichtige Tat des
                                    Menschengeschlechts vollbracht hat“ (I, 4, 3). Adam erhält demzufolge
                                    die Sprache von Gott, denn für ihn gibt es noch keine menschliche
                                    Überlieferung. Diese Sprache müsste dann die eigentliche
                                    ‚natürliche Sprache‘ gewesen sein, dauerhaft und unveränderlich,
                                    wie es andererseits der ‚gramatica‘ der künstlichen Sprachen eigen
                                    ist. Es ist schwer zu sagen, ob Adam seine Sprache schon selbst formte.
                                    Deutlich jedoch ist der Zustand der Sprache nach dem Turmbau zu Babel.
                                    Die bestrafte Hybris hat den Verlust der allen gemeinsamen Ursprache zur
                                    Folge, sodass von nun an die Vielsprachigkeit herrscht und der Mensch
                                    auf die Suche nach einer perfekten Sprache geht.
                                </p>
                                <p>
                                    Diese Vielsprachigkeit ist nun keineswegs nur als soziale und
                                    geographische Ausdifferenzierung zu erfassen. Bedenkt man die
                                    Zweigliedrigkeit des sprachlichen Zeichens, führt sie nämlich dazu,
                                    dass Sinne und Sinn nun nicht mehr übereinstimmen. Nun gibt es einen
                                    Überschuss an Klängen, die mit einer Bedeutung verbunden werden
                                    können. Hans-Jost Frey hat sogar ein Schema entworfen, das für den
                                    Zusammenhang von Klang (Sinnlichkeit) und Bedeutung bei Dante möglich
                                    wäre. Nach Frey müsste es folgende Varianten geben: die Bedeutung ohne
                                    Klang, also die Sprache der Engel. Dann kann ein Klang mehrere
                                    Bedeutungen haben, was Mehrdeutigkeit entstehen lässt. Außerdem
                                    können mehrere Klänge eine gleiche Bedeutung aufweisen, so entsteht
                                    die Vielsprachigkeit. Die deutliche Zuordnung einer Bedeutung zu einem
                                    Klang wäre freilich die perfekte Ursprache. Schließlich gibt es
                                    natürlich Laute ohne Bedeutung. In der <i>Commedia</i> sind es zuweilen
                                    Teufel, die in dieser Sprache sprechen, man erinnere sich an: „Pape
                                    satan, pape satan aleppe“ (Inf. VII, I). Oder man denke an Nimrod, den
                                    Erbauer des Turms zu Babel: „Raphel maì amecche zabì almi“ (Inf.
                                    XXXI, 67). Mehrdeutigkeit und Vielsprachigkeit sind in ihrer Zuordnung
                                    spiegelverkehrte Störungen des ursprachlichen Gleichgewichts. Die
                                    Störung, so Frey, „besteht in der Auffächerung der Klänge und
                                    Bedeutungen und bewirkt eine Streuung, die Vagheit und Unsicherheit
                                    schafft“.<sup><a href="#fn15" name="fz15">15</a></sup>
                                </p>
                                <p>
                                    Davon abgesehen, dass Dante in der <i>Commedia</i> augenscheinlich die
                                    Varianten durchspielt, wobei in der Hölle die Unverständlichkeit der
                                    Laute, im Purgatorium das synästhetische ‚visibile parlare‘ und im
                                    Paradies die Schau des Unvorstellbaren dominiert, muss es dem Dichter
                                    wohl darum gehen, den Verlust der Ursprache in einen Gewinn
                                    umzuschlagen. Er ist es, der das ‚volgare illustre‘ immer neu zu
                                    schaffen hat. Er tut das freilich auf der Grundlage einer
                                    nachbabylonischen Sprachverwirrung. Primäres Fundament der Sprache aber
                                    ist ihre Sinnlichkeit, d.h. ihre dem menschlichen Körper angemessene
                                    Sensualität. Dantes Sprache kommt durchaus ohne Bedeutung aus, aber
                                    niemals ohne ein Ansprechen der Sinne. Menschliche Einsichten sind nach
                                    Dante nicht primär gedanklich, sondern sinnlich-bildlicher Natur.
                                    Selbst Gott ist für den Menschen nur in farbigen Kreisen fassbar.
                                </p>
                                <p>
                                    Es würde zu weit führen, die vielen Situationen zu schildern, in denen
                                    das Sehen oder das Lauschen in der <i>Commedia</i> dargestellt oder vom Leser
                                    eingefordert werden. Verwiesen sei nur auf die berühmteste Episode. Es
                                    handelt sich um die sogenannte Casella-Episode im zweiten Gesang des
                                    Purgatoriums. An der Küste des Läuterungsbergs treffen Dante und
                                    Vergil auf eine neu angekommene Schar von Seelen. Unter ihnen befindet
                                    sich der Sänger Casella, den Dante an seiner Stimme wiedererkennt.
                                    Dante bittet Casella um ein Lied, und dieser wählt für seinen Vortrag
                                    eine der Kanzonen des <i>Convivium</i> aus. Und so kommt es zu der Situation,
                                    dass die Seelen, Dante und Vergil, dem Gesang lauschen. Niemand denkt
                                    mehr daran, den Aufstieg auf den Läuterungsberg fortzusetzen.
                                    Entrückung und Selbstvergessenheit herrschen. Alles, was vor oder
                                    hinter den Hörenden liegt, scheint aufgehoben. Hier zeigt sich, was der
                                    Ton eines Liedes vermag. Gesang und Poesie sind für Dante somit
                                    keineswegs das Andere der Sprache, sondern die sinnliche Kraft, die der
                                    Sprache selbst eigen ist.
                                </p>
                                <p>
                                    Freilich geht es Dante nicht nur um Klang und Bild, sondern um das
                                    Schaffen eines sinnlichen Eindrucks, der sich in der menschlichen Seele
                                    vertieft. Das Haften an der sinnlichen Seite der Sprache ist eben auch
                                    gefährlich. Ausdrücklich thematisiert Dante diese Gefahr, wenn
                                    schließlich Cato, der Wächter des Purgatoriums, die selbstvergessenen,
                                    lauschenden Seelen aufscheucht, um sie an ihr Ziel, an ihr Seelenheil zu
                                    erinnern. Vor allem dort, wo vom Höchsten und Unvorstellbaren die Rede
                                    ist, genügt der bewegende Eindruck nicht. Denn hier verweist er auf die
                                    höhere, verborgene Wahrheit, die der Dichter zu vermitteln hat. Der
                                    ästhetische Zeichengebrauch soll seinen kreatürlichen Reiz der
                                    geistigen Überzeugung zugute kommen lassen und Zeuge dessen werden,
                                    worauf man nur verweisen kann.<sup><a href="#fn16"
                                        name="fz16">16</a></sup> Die Sinne, das Bild, der Ton
                                    und der Duft
                                    sind unter diesem Gesichtspunkt lediglich sinnenfällige Anhaltspunkte
                                    für übersinnliche Wesenheiten. Was die Sinne sagen, wird Anstoß und
                                    Impuls, nicht Erfüllung des Denkens. Der Impuls aber, der zur
                                    Überschreitung des Sinnlichen führt, wie das gesamte danteske Werk am
                                    Ende selbst überschritten werden
                                    will,<sup><a href="#fn17" name="fz17">17</a></sup>
                                    liegt in der Ausdrucksfähigkeit
                                    der sinnlichen Sprache begründet.
                                </p>
                                <p>
                                    Der sinnliche Impuls bildet damit die fundamentale Ebene der dantesken
                                    Sprache. Für ihn ist die Rhetorik verantwortlich, die den schriftlichen
                                    Text – Dantes Poem – in Bilder und Töne transformiert, um beim
                                    Leser eine imaginative Lektüre zu bewirken. Der Text soll Töne hörbar
                                    und Bilder sichtbar werden lassen. Bei aller Schriftlichkeit des
                                    dantesken Werkes bleibt die mittelalterliche Kultur in diesem Sinne an
                                    einer oralen und visuellen Kultur orientiert. Jacques Le Goff nennt die
                                    mittelalterliche Kultur eine Kultur der
                                    Sichtbarkeit.<sup><a href="#fn18"
                                        name="fz18">18</a></sup> Man denke nur an
                                    die öffentlichen Bauten, die Prozessionen mit ihren choreographierten
                                    Körpern und Gesten. Schon aus diesem Grund müssen für Dante die
                                    sensitive Wahrnehmung und die sinnlichen Möglichkeiten der Sprache von
                                    enormer Bedeutung sein.
                                </p>
                                <p>
                                    Auch die von Dante in der <i>Commedia</i> gewählte Form des Erzählens kann
                                    hierfür als Beweis dienen, versetzt der Autor seinen Protagonisten doch
                                    mit seinem Körper, seinem Hör- und Sehvermögen in die drei
                                    Jenseitsreiche. Sie werden durchschritten und durchlitten und vom
                                    Erzähler memorialistisch vor Augen geführt. So entsteht die der
                                    <i>Commedia</i> eigene Architektur und Landschaft und die Vor-Ort-Begegnung mit
                                    den Seelen. Der Text ist deshalb permanent darauf angelegt, sensitive
                                    Erlebensräume zu schaffen, die die Schrift ins Hörbare und ins
                                    Visuelle umschlagen lassen.
                                </p>
                                <p>
                                    So ist es letztlich nicht verwunderlich, dass die <i>Commedia</i> sehr bald mit
                                    Miniaturen versehen wurde, die die Vorstellungskraft des potenziellen
                                    Lesers wirksam stimulieren sollten. Der mittelalterliche Leser, der
                                    zweifellos mit dem Text anders umging als der moderne Leser, dürfte
                                    diese Kombination von Visualität und Schriftlichkeit genossen haben. An
                                    bestimmten Miniaturen zeigt sich sogar, wie sich die mittelalterliche
                                    Text-Bild-Kombination das Sinnliche der Sprache vorstellt. Sehen wir uns
                                    deshalb zuletzt an, was der Codex 1080 der Mailänder Biblioteca
                                    Trivulziana zum Problem der Sinnlichkeit von Schrift
                                    zu sagen hat (vgl. <a href="#abb1" name="b1">Abb. 1</a>). Das
                                    Manuskript stammt von Francesco di ser Nardo da Barberino, der Dantes
                                    <i>Commedia</i> im Jahr 1337 in Florenz kopierte. Barbarinos Manuskript, das
                                    aus 107 Blättern Pergament besteht, illuminiert die drei
                                    Eingangsgesänge der <i>Commedia</i>. Nur die Titelblätter zu den Cantiche
                                    sind mit Miniaturen versehen, bei allen weiteren Gesängen werden
                                    lediglich die Initialen rot und blau geschmückt.
                                </p>
                                <figure className="imageright">
                                    <p style={{ width: "222px" }}><a href="#b1"
                                        name="abb1">Abb. 1</a>:
                                        Beginn der <i>Commedia</i> im
                                        Codex 1080, Biblioteca
                                        Trivulziana, Mailand</p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(0) }}>
                                        <img src={InizioCommediaSmall1} width="222"
                                            height="309" alt="Beginn der Commedia im Codex 1080, Biblioteca Trivulziana, Mailand" />
                                    </button>

                                </figure>
                                <p>
                                    Der Text ist auf dem Blatt in zwei Spalten verteilt, wobei der linke
                                    Block dreigeteilt erscheint und sich unterschiedlicher Farben und
                                    Graphien bedient. Die einleitende Rubrik – <i>Incomincia la comedia di
                                        Dante</i> – ist in roter Farbe abgehoben. Die beiden Textblöcke werden
                                    umrahmt. Von oben ausgehend führt eine stilisierte Blütenborte auf dem
                                    rechten Rand nach links unten. Sie geht im unteren Teil in
                                    vegetabilisch-anthropomorph anmutende Figuren über. Geradezu
                                    gegenläufig hierzu quillt aus der gefüllten Initiale auf dem linken
                                    Rand ein dunkler Weg hervor, der sich von links nach rechts unten
                                    ausbreitet und mit der Blütenranke verbindet.
                                </p>
                                <p>
                                    Illustriert wird die Initiale N von <i>Nel mezzo del
                                        cammin di nostra vita</i> (vgl. <a href="#abb2"
                                            name="b2">Abb. 2</a>).
                                    Die gefüllte Initiale befindet sich auf dem oberen Drittel des
                                    Pergaments. Die Miniaturen der Umrandung können im Wesentlichen in
                                    einer gewissen Reihenfolge gelesen werden. Sie führen von den
                                    stilisierten Bäumen des Waldes am rechten unteren Blattrand über ein
                                    Ufer und einen Berg, auf dem eine Person erscheint, vorbei an einer
                                    zweiten Figur zurück in die Initiale. Die Randillumination vollzieht
                                    eine kreisförmige Bewegung von oben nach unten, von unten nach oben.
                                    Lesenderweise kann diese Bewegung einer Abfolge zugeordnet werden,
                                    handelt es sich doch bei der zweiten Figur, die ihren Blick aufwärts
                                    richtet, augenscheinlich um den Protagonisten des Poems. Ihm kommen dann
                                    von oben nach unten die drei allegorischen Tiere – der Panther, der
                                    Löwe und die Wölfin – entgegen. Der Blick des Lesers wird anhand der
                                    Aufwärtsbewegung Dantes entgegen der Abwärtsbewegung der Tiere
                                    schließlich immer wieder zur Initiale geführt. Sie ist es, in der sich
                                    alles versammelt und aus der alles hervorgeht.
                                </p>
                                <figure className="imageleft">
                                    <p style={{ width: "200px" }}><a href="#b2"
                                        name="abb2">Abb. 2</a>:
                                        Beginn der <i>Commedia</i> im
                                        Codex 1080 (Detail)</p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(1) }} >
                                        <img src={InizioCommediaSmall2} width="200"
                                            height="302" alt="Beginn der Commedia im Codex 1080 (Detail), Biblioteca Trivulziana, Mailand" />
                                    </button>
                                </figure>
                                <p>
                                    Der materiell hervorgehobene Buchstabe rahmt wie ein Fenster einen
                                    Durchblick, er soll transparent werden, indem er einen Schauraum
                                    eröffnet, der vom Blatt weg auf eine innere Bühne führt und den Leser
                                    einlädt, gemeinsam mit den nun versammelten Protagonisten die Welt des
                                    Poems zu betreten. Dargestellt wird in der Initiale augenscheinlich die
                                    letzte Sequenz des Gesangs. Gleichzeitig führt der Weg aus der Initiale
                                    zurück auf das Blatt, sodass man die Etappen zurückverfolgen kann, die
                                    der Protagonist zu bestreiten hatte. Der Weg des Waldes breitet sich mit
                                    seiner dunklen Farbe auf dem Blatt zum Leser hin aus. Das ist zweifellos
                                    kein Spiel, sondern es zeigt den Effekt, den hier die Sprache – die
                                    Schrift – ausüben soll. Gelenkt über die Bildfolge geht es zum
                                    Buchstaben. Der Buchstabe wird in seiner materiellen Sichtbarkeit
                                    aufgelöst, um Impuls eines Sich-Versetzens zu werden. Aus dem
                                    Buchstaben heraus entsteht eine Verbindung zum sehenden Leser.
                                </p>
                                <p>
                                    Das Bild kann der Leser nur über den Text lesen. Gleichzeitig wird er
                                    angehalten, das Gelesene zu imaginieren und zu rekapitulieren. Dabei
                                    liest und ‚hört‘ er die ‚Stimme‘ des Erzählers: <i>Nel mezzo del
                                        cammin di nostra vita.</i> Und er ‚sieht‘ das vom Erzähler Erzählte.
                                    Der Erzähler verdoppelt sich. Er gibt seine Erinnerungsbilder an den
                                    Text, sie werden durch die Miniatur realisiert. Seine Stimme aber klingt
                                    im Lesen in einer Verlaufsform nach und eröffnet Vorstellungsbilder des
                                    Erinnerten, die ihrerseits von der Miniatur gestützt werden. Im Prinzip
                                    stellt die Miniatur äußerlich einen inneren Vorgang dar. Sie ist
                                    Stimulus und Metapher der Vorstellungsbildung. So illustriert diese
                                    Miniatur die Aktivität, die die Sprache einfordert, wenn sie eine
                                    sinnlich-imaginative Lektüre anstrebt.
                                </p>
                                <p>
                                    Die Initiale selbst stellt die letzte Szene des ersten Canto dar. Hier
                                    sind Dante und Vergil vereint und beginnen ihren gemeinsamen Weg.
                                    Während die Figuren des Randes sich vom Leser abwenden, sind die
                                    Protagonisten in der Initiale auf dem dunklen Bühnenraum so arrangiert,
                                    dass sie ihren Körper dem Leser zuwenden, während ihre Blicke
                                    aufeinander gerichtet sind. Das ‚Schaubild‘ besteht aus stilisierten
                                    Bäumen vor und hinter den Figuren, der Weg öffnet sich nach oben.
                                    Vergil, in rot und blau gekleidet, ist der ältere. Größer als Dante
                                    blickt er von oben nach unten auf seinen Schützling. Dante dagegen
                                    erhebt den Blick vertrauensvoll zu seinem Meister und Führer. Wichtig
                                    ist natürlich das Motiv des Blicks, das die gesamte <i>Commedia</i>
                                    durchzieht. Vergils Zeigehand verweist auf den Weg, denn beide befinden
                                    sich schon im Aufbruch. Für den Leser aber sind die Gesten, vor allem
                                    die Hände und die Fußstellungen interessant, sie sind auffordernd,
                                    bewegungsanmutend und dynamisieren.
                                </p>
                                <p>
                                    Die szenische Entfaltung des Poems wird auf diesem Titelblatt
                                    vorgeführt. Im Wechselspiel von Bild und Buchstaben zeigt sich aber
                                    auch die Lektüreerwartung. Die Initiale ist das Medium, das zum Bild
                                    führt. Der Buchstabe verweist so auf seine Kraft, er eröffnet eine
                                    sinnlich-anschauliche Welt, wird Impuls einer imaginativen Lektüre, die
                                    die Protagonisten bei ihrer Reise begleitet. Der Illuminator hat damit
                                    die Erwartung des sinnlichen Imaginierens ins Bild gesetzt, das Dantes
                                    Poem beherrscht. Nichts tritt in den Verstand, ohne ein sinnlich
                                    wahrnehmbares Medium. Es ist diese primäre Sinnlichkeit, die Dantes
                                    Sprachreflexion beherrscht. Für Dante, so will die
                                    Literaturwissenschaftlerin am Ende schlussfolgern, ist Sprache in erster
                                    Linie ein Medium, das der menschlichen Weltbegegnung zu entsprechen hat.
                                    Weil der Mensch aber die Welt mit den Sinnen wahrnimmt, bedarf es eines
                                    Mediums, das dieser Auffassungsform entspricht. Das aber kann für Dante
                                    nur die klingende und die anschauliche Sprache sein, eine Sprache, die
                                    ihr Fundament in einer Aisthesis hat.
                                </p>

                                <h1>Anmerkungen</h1>
                                <p><sup><a href="#fz1" name="fn1">1</a></sup>
                                    Zitiert wird nach der Ausgabe Dante Alighieri (2007).</p>

                                <p><sup><a href="#fz2" name="fn2">2</a></sup>
                                    Vgl. Peter Wunderli (1993/94): 81–127.</p>
                                <p><sup><a href="#fz3" name="fn3">3</a></sup>
                                    Vgl. ebd.: 121.</p>
                                <p><sup><a href="#fz4" name="fn4">4</a></sup>
                                    Vgl. ebd.: 84ff.</p>
                                <p><sup><a href="#fz5" name="fn5">5</a></sup>
                                    Vgl. ebd.: 87.</p>
                                <p><sup><a href="#fz6" name="fn6">6</a></sup>
                                    Vgl. ebd.: 105.</p>
                                <p><sup><a href="#fz7" name="fn7">7</a></sup>
                                    Vgl. hierzu Eco (1994): 47–64.</p>
                                <p><sup><a href="#fz8" name="fn8">8</a></sup>
                                    Trabant (2009): 90.</p>
                                <p><sup><a href="#fz9" name="fn9">9</a></sup>
                                    Zitiert nach ebd.</p>
                                <p><sup><a href="#fz10" name="fn10">10</a></sup>
                                    Vgl. Eco (1994): 58.</p>
                                <p><sup><a href="#fz11" name="fn11">11</a></sup>
                                    Dante Alighieri (1996): 2.</p>
                                <p><sup><a href="#fz12" name="fn12">12</a></sup>
                                    Vgl. Wunderli (1993/94): 89.</p>
                                <p><sup><a href="#fz13" name="fn13">13</a></sup>
                                    Vgl. Frey (2008): 28.</p>
                                <p><sup><a href="#fz14" name="fn14">14</a></sup>
                                    Vgl. hierzu auch Eco (1994): 60f. Der Semiotiker meint in Dantes
                                    Formbegriff ein Sprachvermögen zu erkennen, das in der Art einer
                                    generativen Matrix allen Sprachen gemein ist. Auch Eco übergeht die
                                    Formung eines Materials zur besseren Entfaltung des Menschlichen.</p>
                                <p><sup><a href="#fz15" name="fn15">15</a></sup>
                                    Frey (2008): 76ff.</p>
                                <p><sup><a href="#fz16" name="fn16">16</a></sup>
                                    Vgl. Winfried Wehle (1992): 258.</p>
                                <p><sup><a href="#fz17" name="fn17">17</a></sup>
                                    Vgl. hierzu Stierle (2007).</p>
                                <p><sup><a href="#fz18" name="fn18">18</a></sup>
                                    Vgl. Le Goff (1970): 608.</p>


                                <h1>Literatur</h1>
                                <p className="bibl">
                                    Alighieri, Dante (1996): <i>Das Gastmahl. Erstes
                                        Buch. Italienisch-Deutsch</i>, hg. unter der
                                    Leitung von Ruedi Imbach, Hamburg.</p>
                                <p className="bibl">
                                    – (2006–2008): <i>Commedia</i>, con il commento di Anna Maria Chiavacci Leopardi, vol.
                                    I–III, Milano.</p>
                                <p className="bibl">
                                    – (2007): <i>De vulgari eloquentia mit der italienischen
                                        Übersetzung von Gian Giorgio Trissino (1529)</i>. Deutsche Übersetzung von
                                    Michael Frings und Johannes Kramer, Stuttgart.</p>
                                <p className="bibl">
                                    Eco, Umberto (1994): <i>Die Suche nach der vollkommenen Sprache</i>, München.</p>
                                <p className="bibl">
                                    Frey, Hans-Jost (2008): <i>Dante. Fünfundzwanzig Lesespäne</i>, Basel.</p>
                                <p className="bibl">
                                    Le Goff, Jacques (1970): <i>Kultur des europäischen Mittelalters</i>, München.</p>
                                <p className="bibl">
                                    Mengaldo, Pier Vincenzo (Hg.) (1979): De Vulgari Eloquentia, in: <i>Dante
                                        Alighieri, Opere minori</i>, Bd. II, Milano, Napoli, 1-237.</p>
                                <p className="bibl">
                                    Stierle, Karlheinz (2007): <i>Das große Meer des Sinns</i>, München.</p>
                                <p className="bibl">
                                    Trabant, Jürgen (2009): <i>Die Sprache</i>, München.</p>
                                <p className="bibl">
                                    Wehle, Winfried (1992): Concupiscentia signorum. Über ästhetische Erfahrung
                                    von Zeichen: Augustin, Dante, Petrarca in: Walter Haug/Dietmar Mieth
                                    (Hg.): <i>Religiöse Erfahrung. Historische Modelle in christlicher
                                        Tradition</i>, München, 247–273.</p>
                                <p className="bibl">
                                    Wunderli, Peter (1993/94): Dante – ein Linguist?, in: <i>DDJ</i> 68/69,
                                    81–127.</p>

                            </article>
                        </section>
                    </div>
                </div>
                <UpArrow />
                <Footer />
            </div>
        </div>
    )
}

export default Mattusch;