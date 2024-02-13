import Footer from "../Footer";
import Header from "../Header";
import Rubrik from "../Rubrik";
import UpArrow from "../UpArrow";
import BernhardPortrait from "../../images/gbernhard/gbernhard-portrait.jpg";

function Bernhard(props) {
    return (
        <div id="Wrapper" className="container_14">

            <div id="Header">
                <Header id={props.author} />
                <div className="grid_9">
                    <h1 id="main_title">Akzent, Arzneien und andere Schwierigkeiten</h1>
                    <p id="author">Gerald Bernhard, Bochum</p>
                </div>
                <Rubrik />
                <div id="Teasers" className="clearfix">
                    <div className="grid_9">
                        <p>
                            Wenn man zum 60. Geburtstag eine Festschrift erhält, kann dies durchaus
                            mehrere Gründe haben: Erstens kann der Jubilar bereits mit der
                            Vollendung des 60. Lebensjahres den Höhepunkt seiner wissenschaftlichen
                            Karriere überblicken. Zweitens erlebt der <i>Festeggiato</i> an der
                            Universität, an der er arbeitet, Feste, die schriftlich festgehalten
                            werden müssen, oder, drittens ist er trotz seines biologischen Alters
                            sozial, geistig und körperlich noch so fit, dass sich die Herausgeber
                            von Festschriften bereits auf weitere Bände dieser Textgattung freuen.
                        </p>
                        <p>
                            Bei Dieter Kattenbusch dürften alle drei der genannten Motive Anlass
                            für die Herausgabe einer Festschrift sein, ist er doch bekannt für
                            lebendige Lehrveranstaltungen, körperlich-sportliche Fitness und nicht
                            zuletzt für seine unerschütterliche Bereitschaft, große Reisen in
                            weniger ferne und sehr ferne Gegenden Italiens im Dienste der
                            Wissenschaft zu unternehmen, damit der Name <i>Vivaldi</i> nicht in
                            Vergessenheit gerät.<sup><a href="#fn1" name="fz1">1</a></sup> Gerade
                            auf den erwähnten Reisen ins alpine und
                            mediterrane romanische Sprachgebiet dürfte aber aufgrund der
                            unvermeidlichen Strapazen, die die Feldforschung sowohl in felsiger
                            Umgebung als auch unter der glühenden Sonne der Mediterraneis mit sich
                            bringt, ab und zu die Konsultation von heilkundigen Personen und
                            Apotheken notwendig sein, die Medikamente gegen Sonnenbrand,
                            Verdurstungserscheinungen und diverse Insektenstiche bereithalten.
                        </p>
                    </div>
                    <div className="grid_5">

                        <div className="abouttheauthor">
                            <img src={BernhardPortrait} width="150"
                                height="100" alt=" - Portrait" />
                            <div className="abouttheauthorfont"><br /><br />
                                <b>Gerald Bernhard</b>, Prof. Dr., seit 2002 Professor für Romanische
                                Sprach- wissenschaft an der Ruhr-Universität
                                Bochum. Forschungsschwerpunkte: Variationslinguistik, Semantik und
                                Mehrsprachigkeitsforschung.<br />
                                <span style={{ color: "#666666" }}>
                                    Dieter kenne ich seit 1982 (in Graubünden), dann nach langer Pause
                                    seit 1989 in Regensburg, wo er mich als Freund beherbergte,
                                    als ich seine Nachfolge als Assistent von Gerhard Ernst antrat.
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
                                    Jedem, der mit deutschen oder vergleichbaren germanischen Kenntnissen
                                    von Arzneimittelnamen einmal nach Italien gefahren ist, dürfte bekannt
                                    sein, dass die dortigen Namen, selbst bei graphischer Identität,
                                    bisweilen eine anderen Wortakzent aufweisen, was es nicht immer einfach
                                    macht, das gewünschte Präparat zu erhalten. Dass dann letztlich doch
                                    der zwischen Apotheker und Kunden geschlossene Kaufvertrag zur Genesung
                                    führt, ist meist dem Wiedererkennungswert der Verpackungen und der
                                    Gesprächsbereitschaft italienischer Apotheker und deutscher oder
                                    anderer ausländischer Kunden zu verdanken. Damit steht dann auch der
                                    Heilung des zu kurierenden Wehwehchens nichts mehr im Wege.
                                </p>

                                <p>
                                    Im Folgenden soll etwas näher beleuchtet werden, wie sich scheinbar
                                    gefestigte Namen im interkulturellen Kontakt lautlich ‚verhalten‘
                                    und welches Verhalten seitens interkulturell agierender Personen nötig
                                    sein kann, um die gewünschten außersprachlichen Ergebnisse zu
                                    erzielen.
                                </p>

                                <p>
                                    Der Verfasser dieser Zeilen (wie der <i>Festeggiato</i> Besitzer eines
                                    Hausgartens) hatte in den 1990er Jahren eine prägende Begegnung mit
                                    einem Besitzer eines Balkongartens in Rom, der sich angesichts seiner
                                    durch Blattläuse und anderes Ungeziefer verunstalteten Blütenpflanzen
                                    nicht anders zu helfen wusste als durch die Anwendung des von der Firma
                                    Bayer hergestellten Insektizids Baygon ['baigon]. In der Tat zeigten
                                    sich in den Tagen nach der Anwendung des entsprechenden Präparats
                                    deutliche Wachstumsschübe und eine verstärkte Blühfreudigkeit der in
                                    Mitleidenschaft gezogenen Gewächse. Nach der Heimkehr in deutsche,
                                    nicht weniger von Blattläusen und Ungeziefer heimgesuchte
                                    Gartengebiete, sollte das genannte Produkt ebenfalls ausprobiert werden.
                                    Der dafür zuständige Landhandel in einem deutschen Dorf verfügte auch
                                    über dieses  Präparat (Baygon) – das war anhand der Verpackung
                                    deutlich zu erkennen –, jedoch wollte der Betreiber des entsprechenden
                                    Geschäfts meine Bitte – ich verlangte Báigon –, nicht so recht
                                    verstehen, worum es denn eigentlich ging. Aufgrund der
                                    Gesprächsbereitschaft des Geschäftsinhabers, die durchaus mit
                                    derjenigen von italienischen Apothekern zu vergleichen ist, gelang es
                                    schließlich, das Produkt  zu erhalten und erfolgreich anzuwenden.
                                </p>

                                <p>
                                    Pragmatisch gesehen gereichte mir der zustande gekommene Kaufvertrag
                                    durchaus zur Zufriedenheit, führte mir jedoch gleichzeitig die
                                    sprachwissenschaftlichen Aspekte dieser kulturbedingten Unterschiede vor
                                    Augen, was im Folgenden etwas näher ausgeführt werden soll. Hierzu
                                    wird zunächst ein kurzer Blick in zwei gängige wissenschaftliche
                                    Grammatiken des Italienischen geworfen, um dann zu einem kleinen
                                    Ausschnitt einer interkulturellen
                                    deutsch-italienisch/italienisch-deutschen „Akzentpragmatik“ zu
                                    gelangen. Hierbei stehen Pharmazeutika im Vordergrund; zur Akzentuierung
                                    der Namen von Insektiziden und Düngern kann man sich vielleicht doch
                                    eher mit einem einzigen Informanten begnügen, um sozusagen
                                    umsatzproportional empirisch tätig zu werden.
                                </p>

                                <p>
                                    1. Im jüngeren italienischen Sprachgebrauch kann seit geraumer Zeit eine
                                    Tendenz beobachtet werden (vielleicht auch nur eine Modeerscheinung?),
                                    bestimmte dreisilbige „parole piane“ als „parole sdrucciole“
                                    auszusprechen. Wer von uns Hochschullehrern ist nicht schon dem
                                    Phänomen „Frìuli“ oder „Lago Bènaco“ begegnet? Hierzu
                                    gesellen sich „rúbrica“, das Adjektiv „sàlubre“ und des
                                    Weiteren mehr. Ohne näher auf die Modellwörter, die diesen
                                    Betonungsstrukturen zugrunde liegen könnten (z.B. Monaco), auf den
                                    Grund gehen zu wollen, lässt sich doch vielleicht kurzerhand behaupten,
                                    dass bei weniger bekannten Wörtern und Eigennamen die
                                    <i>Antepaenultima</i>-Lösung häufiger ist als bei
                                    bekannten.<sup><a href="#fn2" name="fz2">2</a></sup>
                                </p>

                                <p>
                                    Ist also schon bei romanisch-lateinischen Wörtern – mehrheitlich wohl
                                    doch eher bei Latinismen – eine Akzentverlagerung zu beobachten, so
                                    ist diese noch auffälliger, wenn es um die Wiedergabe von Lehnwörtern
                                    bzw. Kunstwörtern geht, wie beispielsweise bei
                                    Produktnamen.<sup><a href="#fn3" name="fz3">3</a></sup> Bei
                                    zahlreichen ‚gelehrten‘ Entlehnungen aus dem Englischen, auch aus
                                    dem Deutschen, ist in Italien des Öfteren eine Vorliebe für die
                                    Betonung auf der drittletzten Silbe nicht selten: so hört man in aller
                                    Regel <i>Állianz</i> statt <i>Alliánz</i>.<sup><a href="#fn4"
                                        name="fz4">4</a></sup>
                                    Ein Blick auf die Variationen des
                                    Wortakzents bei nichtitalienischen Wörtern zeigt, dass einige
                                    dreisilbige Lehn- bzw. Kunstwörter (Produktnamen), lexikographisch
                                    erfasst in Riolo 2007 (mit alphabetischer Anordnung der Lemmata),
                                    durchaus einen variablen Wortakzent aufweisen: so z.B. <i>Tètrapak</i>
                                    neben <i>Tetrapák</i>, <i>Eternít</i>
                                    neben <i>Éternit</i>, <i>Lánital</i> neben <i>Lanitál</i> etc. Relativ
                                    stabil hingegen scheint die Anfangsbetonung bzw. Paenúltima-Betonung
                                    bei zweisilbigen Produktnamen zu
                                    sein: <i>Náilon</i>, <i>Pèrlon</i>, <i>Drálon</i>, <i>Òrlon</i>, ‚eine
                                    Art Kunstharz‘ usw. Auch eine dreisilbige Kunstfaser,
                                    nämlich <i>Mèraklon</i>, hat die Betonung auf der drittletzten Silbe;
                                    hierzu gesellt sich schon frühzeitig das pharmazeutische Produkt
                                    <i>Megaton</i> (der Firma Magioli in Mailand, vgl. Serianni 1989,
                                    385). Ähnliches gilt auch für <i>Cellophane</i>
                                    oder <i>Veronal/Veronale</i> (Riolo sub <i>Veronal</i>). In jüngster
                                    Zeit findet sich neben diesen genannten
                                    ‚nomi sdruccioli‘ sogar ein genuin italienisches Wort, nämlich der
                                    Familienname <i>Benettón</i>, der im größten Teil Italiens durchaus auf
                                    „internationale Art und Weise“, nämlich <i>Bènetton</i>, ausgesprochen
                                    wird; Ausnahme hiervon ist die nähere Umgebung des Firmensitzes des
                                    Bekleidungsherstellers (Treviso), wo man sich der Etymologie des
                                    Namens <i>Benettón</i> bewusst ist und die venetische Betonung
                                    beibehält.
                                </p>

                                <p>
                                    Gibt dies zur Vermutung Anlass, dass es innerhalb Italiens regionale
                                    Betonungsunterschiede bei nichtitalienischen Wörtern gibt? Und darüber
                                    hinaus, dass vielleicht zwischen Italienern in Italien und in
                                    Deutschland lebenden Italienern eine interkulturell bedingte Variation
                                    vorliegen könnte?
                                </p>

                                <p>
                                    2. Um den beiden zuvor genannten Fragen nachgehen zu können, wurde mit
                                    vier Personen eine kurze Befragung durchgeführt. Informantin 1 lebt in
                                    Treviso, Informantin 2 (eine in Deutschland aufgewachsene
                                    Deutschtürkin) lebt seit mehreren Jahren in Catania. Informantin 3,
                                    gebürtig in Rom, ist seit mehr als 15 Jahren in Deutschland tätig,
                                    Informant 4, sizilianischer Herkunft (Provinz Trapani), lebt seit einem
                                    Jahr in Deutschland. Allen vier Personen wurden die Namen von neun
                                    bekannten Arzneimitteln vorgelegt, mit der Bitte, sich vorzustellen, sie
                                    in einer italienischen Apotheke, mit einem italienischen Rezept, zu
                                    verlangen.
                                </p>

                                <p>
                                    Das ‚Medikamenten-Überlebenspaket‘ besteht hierbei aus zwei
                                    Antiphlogistika, nämlich <i>Lasonil</i> und <i>Voltaren</i>, aus zwei
                                    Antibiotika, <i>Baktrim</i> und <i>Bimexin</i>, daneben zwei
                                    Antiemetika, nämlich <i>Plasil</i> und <i>Vomex</i>, sowie (für
                                    schwerere Fälle) das Kortisonpräparat <i>Bentelan</i>, des
                                    Weiteren <i>Fenistil</i> gegen Insektenstiche und – falls dies alles
                                    nicht helfen sollte – <i>Lexotan</i> als leichter Tranquilizer.
                                </p>

                                <p>
                                    Die folgende Tabelle zeigt die einzelnen Resultate:
                                </p>

                                <table>
                                    <tr>
                                        <th>Produkt</th>
                                        <th>1. Treviso</th>
                                        <th>2. Catania</th>
                                        <th>3. Essen/Rom</th>
                                        <th>4. Trapani/Bochum</th>
                                    </tr>
                                    <tr>
                                        <td>Bactrim <sup><a href="#a" name="aa">a)</a></sup></td>
                                        <td>Báctrim</td>
                                        <td>Bactrím</td>
                                        <td>Báctrim</td>
                                        <td>Báctrim</td>
                                    </tr>
                                    <tr>
                                        <td>Bentelan</td>
                                        <td>Bentelán</td>
                                        <td>Béntelan</td>
                                        <td>Béntelan</td>
                                        <td>Bentelán</td>
                                    </tr>
                                    <tr>
                                        <td>Bimixin</td>
                                        <td>Bimixín</td>
                                        <td>Bimixín</td>
                                        <td>Bimixín</td>
                                        <td>Bimixín</td>
                                    </tr>
                                    <tr>
                                        <td>Fenistil</td>
                                        <td>Fenistíl</td>
                                        <td>Fenistíl</td>
                                        <td>Fènistil</td>
                                        <td>Fenistíl</td>
                                    </tr>
                                    <tr>
                                        <td>Lasonil <sup><a href="#b" name="ab">b)</a></sup></td>
                                        <td>Lasoníl</td>
                                        <td>Lasónil</td>
                                        <td>Lásonil</td>
                                        <td>Lásonil</td>
                                    </tr>
                                    <tr>
                                        <td>Lexotan</td>
                                        <td>Lèxotan</td>
                                        <td>Lèxotan</td>
                                        <td>Lèxotan</td>
                                        <td>Lèxotan</td>
                                    </tr>
                                    <tr>
                                        <td>Plasil <sup><a href="#c" name="ac">c)</a></sup></td>
                                        <td>Plasil</td>
                                        <td>Plasíl</td>
                                        <td>Plasil</td>
                                        <td>Plásil</td>
                                    </tr>
                                    <tr>
                                        <td>Voltaren</td>
                                        <td>Voltarèn</td>
                                        <td>Vòltaren</td>
                                        <td>Vòltaren</td>
                                        <td>Vòltaren <sup><a href="#d" name="ad">d)</a></sup></td>
                                    </tr>
                                    <tr>
                                        <td>Vomex</td>
                                        <td>Vòmex</td>
                                        <td>Vòmex</td>
                                        <td>Vòmex</td>
                                        <td>Vómex/Vòmex</td>
                                    </tr>
                                </table>

                                <p style={{ marginLeft: "40px;" }}><span style={{ fontSize: "12pt" }}>
                                    <sup><a href="#aa" name="a">a)</a></sup>
                                    jetzt in Deutschland als Cotrim im Handel<br />
                                    <sup><a href="#ab" name="b">b)</a></sup>
                                    in Deutschland nicht mehr im Handel<br />
                                    <sup><a href="#ac" name="c">c)</a></sup>
                                    in Deutschland nicht unter diesem Namen geführt<br />
                                    <sup><a href="#ad" name="d">d)</a></sup>
                                    negli spot pubblicitari: Voltarèn
                                </span>
                                </p>

                                <p>
                                    2.1. Eine kurze Analyse der aufgelisteten Antworten zeigt, dass die
                                    Mehrheit der neun abgefragten Medikamente wenigstens zwei Varianten
                                    aufweist, nämlich entweder <i>Antepaenultima</i>- oder <i>Ultima</i>-Betonung. Im
                                    Falle von <i>Lasonil</i> sind sogar drei Varianten vorhanden, die also die
                                    Betonungsmöglichkeiten des dreisilbigen Wortes voll ausschöpfen. Bei
                                    Informantin 2 fällt auf, dass <i>Baktrim</i> und <i>Lasonil</i>
                                    individuelle Varianten darstellen könnten, die einerseits, in
                                    sprachpraktischer Hinsicht, als Kompromisslösungen angesehen werden
                                    können (<i>Lasónil</i>),
                                    andererseits aber auch keine Verständigungsschwierigkeiten darstellen,
                                    die die Heilungschancen verringern könnten. Inwieweit hier ein
                                    deutsches Substrat nachwirken mag, sei
                                    dahingestellt.<sup><a href="#fn5" name="fz5">5</a></sup> Das Augenmerk
                                    des Geolinguisten kann sich v.a. auf die Betonungsverhältnisse der
                                    Informantin 1 aus Treviso richten, bei der überdurchschnittlich häufig
                                    eine Endbetonung zu beobachten ist und wo somit vielleicht eine
                                    Annäherung an sozusagen mitteleuropäische Betonungsstandards, oder
                                    aber auch fachsprachliche Gewohnheiten, vorliegt.<sup><a href="#fn6"
                                        name="fz6">6</a></sup>
                                    Letzteres könnte der Fall von <i>Voltaren</i> verdeutlichen, da das Produkt,
                                    laut Auskunft von Informant 4 (und aufgrund eigener Beobachtungen) in
                                    Werbespots stets mit Endbetonung angepriesen wird, sich aber in den
                                    meisten Teilen Italiens mit der usuellen sprechsprachlichen
                                    <i>Antepaenultima</i>-Betonung hält.
                                </p>

                                <p>
                                    Interkulturelles zeigt sich somit nicht nur bei transnationalen
                                    Sprecherbiographien, sondern auch innerhalb einer kontinuierlichen
                                    Sprechergemeinschaft mit Bezug auf die diatopische Variationsdimension.
                                    Offenbar spielt die Motivierbarkeit von Arzneinamen, sehen wir einmal
                                    von <i>Vomex</i> ab, eine untergeordnete Rolle. Dies wird auch
                                    deutlich, wenn man in Betracht zieht, dass <i>Buscopan</i>
                                    und <i>Prospan</i>, ersteres ein Schmerzmittel, letzteres ein
                                    Hustensaft, formal nicht durch das Pseudolexem <i>pan</i> motivierbar
                                    sind.<sup><a href="#fn7" name="fz7">7</a></sup>
                                </p>

                                <p>
                                    Bei Produkten, die eine Adaption an die italienische Morphologie
                                    erfahren haben, erfolgt die Betonung hingegen regelgerecht, wie
                                    in <i>Xamamina</i> (ein Mittel gegen Übelkeit), <i>Tachipirina</i> (in
                                    Deutschland als <i>Thomapyrin</i> bekannt) oder im allgemein
                                    eingeführten Namen <i>Aspirina</i>.
                                </p>

                                <p>
                                    Mitteln, die zur Genesung der grünen oder blühenden, den gesunden
                                    Menschen umgebenden Gartenpflanzen dienen, scheint indes, zumindest in
                                    der <i>Italia mediana</i> (z.B. Castelli Romani) ein Schicksal als
                                    <i>Proparoxytona</i> sicher. Die
                                    Insektizide <i>Chrysanthol</i>, <i>Axoris</i> und <i>Wofatox</i>,
                                    Produkte der Firma Compo in Münster, ordert man am besten als
                                    <i>Chrísantol</i>, <i>Àksoris</i> und <i>Wòfatox</i>. Düngemittel wie
                                    <i>Algoflash</i> oder <i>Agrosil</i>, letzteres ein Anwachsdünger,
                                    empfehlen sich ebenfalls als
                                    <i>Àlgoflash</i> und <i>Àgrosil</i>. Vielleicht liegt es an den exotisch anmutenden,
                                    bisweilen graphisch als Anglizismen empfundenen Produktnamen selbst,
                                    die die Anfangsbetonung geradezu hervorrufen. Gerade bei schriftlich
                                    induzierter Fremdsprachigkeit bilden sich vielleicht Muster heraus, die
                                    aufgrund graphischer oder auch graphophonetischer Primärerfahrungen
                                    eine Verallgemeinerung erfahren. Die englische Initialbetonung, die
                                    jedoch bei adaptierten Namen wie z.B. bei <i>Aspirina</i>
                                    (vs. eng. <i>Áspirin</i>) nicht in Italien fußgefasst hat, könnte sich
                                    zu einem Modell für eine reguläre, sprich invariante phonische
                                    Realisation von graphisch ungewohnten Bildern
                                    erweisen.<sup><a href="#fn8" name="fz8">8</a></sup>
                                </p>

                                <p>
                                    3. Unser kurzer Überblick über die Realisationsmöglichkeiten von
                                    potenziell nicht italienischen Wörtern hat vielleicht gezeigt, dass die
                                    Teilmotivierbarkeit bzw. Anschlussfähigkeit an bekannte oder häufige
                                    Wörter des Italienischen (wie z.B. <i>Benaco</i>
                                    an <i>Monaco</i><sup><a href="#fn9" name="fz9">9</a></sup>)
                                    offenbar wichtiger für die Akzentwahl ist (‚attraction paronymique‘)
                                    als die semantische Durchdringung des Namens. In einem Fall, nämlich
                                    <i>Vomex</i>, liegt vielleicht auch eine lexematische Motivation vor, die auf
                                    <i>vomitare</i> hinweist. Demgegenüber steht das Bedürfnis nach der Kenntnis
                                    von gültigen Normen, in den vorliegenden Fällen exonymischen Normen,
                                    die der pragmatischen, sprachlichen Orientierung von
                                    Kommunikationspartnern im Alltag möglicherweise dienlicher ist als die
                                    metalinguistisch-etymologische Erklärbarkeit von Namen. Innerhalb des
                                    italienischen Phonem- und Akzentsystems sind <i>Antepaenultima</i>-Namen
                                    relativ eindeutig als solche erkennbar. Hinzu kommt die Tatsache, dass
                                    konsonantisch auslautende Wörter/Namen v.a. in Mittel- und Süditalien
                                    – abgesehen von den Dialekten – unüblich sind. Aufgrund der
                                    doppelten Merkmalsbesonderheiten von pharmazeutischen und gärtnerischen
                                    Produkten ist somit entweder volle Ausschöpfung beider exotischer
                                    Merkmalskombinationen, also der graphischen und der lautlichen, denkbar,
                                    oder auch eine Redundanz vermeidende Beschränkung auf eine der beiden
                                    Merkmalseigenschaften von Produktnamen. Zudem lässt die Betonung auf
                                    der drittletzten Silbe eines Produktnamens für die meisten Apotheker-
                                    und Gartencenterbediensteten sofort erkennen, dass es sich um Eigennamen
                                    und nicht um italienische Appellative handelt. Dass dies letztlich dazu
                                    führen kann, dass der Kunde schneller bekommt, was er möchte, und
                                    damit die Pragmatik wieder einmal die Philologie besiegt, sei in diesem
                                    Kontext als für den Nutzer vorteilhaft vermerkt.
                                </p>

                                <p className="quote">
                                    <span style={{ color: "#666666" }}><b>Caro Dieter:</b></span>
                                    <br />
                                    After all the <span style={{ color: "#444444" }}>bygone</span>
                                    <span style={{ color: "#666666" }}> years, do not drink Baygon, ma vino!
                                        Cheers!</span>
                                </p>


                                <h1>Anmerkungen</h1>

                                <p className="annotation"><sup><a href="#fz1" name="fn1">1</a></sup>
                                    In der Tat erfordert das sprechende Dialektarchiv VIVALDI,
                                    das der Jubilar seit Jahren, anfangs zusammen mit Roland Bauer,
                                    erstellt, einiges Durchhaltevermögen.
                                </p>

                                <p className="annotation"><sup><a href="#fz2" name="fn2">2</a></sup>
                                    Vgl. Dardano/Trifone, <i>Grammatica</i>
                                    (Kap. 17.9.1.). Serianni, <i>Grammatica</i>
                                    (I, 189f.) weist auf ein bereits bei Dante beobachtbares Auftreten von
                                    „varianti accentuative secondarie“ hin; so tritt z.B. <i>pieta</i> neben
                                    <i>pietà</i> auf. Auch im Deutschen ist eine bis zu einem gewissen Grade
                                    instabile, oder vielleicht besser gesagt bi-stabile, Akzentsetzung zu
                                    beobachten, wenn es um Expressivität geht: so z.B. eine „mássive
                                    Drohung“ neben der normalen Betonung „massív“. Eine stabilisiertere
                                    Akzentverlagerung ist derweil jedoch schon bei <i>Horizont</i>
                                    zu beobachten, das immer häufiger, auch in den Medien,
                                    als <i>Hórizont</i> erscheint. Ob dieser Erscheinung die metrisch und
                                    rhythmisch bedingte Betonung aus dem Song von Udo Lindenberg „Hinterm
                                    Horizont geht’s weiter…“ zugrunde liegt, kann an dieser Stelle nicht
                                    geklärt werden.
                                </p>

                                <p className="annotation"><sup><a href="#fz3" name="fn3">3</a></sup>
                                    Näheres zur Bildung von Produktnamen bei pharmazeutischen Erzeugnissen
                                    bei Patota 1985 und Serianni 1989, 381–384, Anm. 3.
                                </p>

                                <p className="annotation"><sup><a href="#fz4" name="fn4">4</a></sup>
                                    Bisweilen ist jedoch eine dem Englischen widersprechende Ultima- oder
                                    Paenultima-Betonung zu beobachten, wie z.B. in <i>juke-bóx</i> oder
                                    <i>babysítter</i>.
                                </p>

                                <p className="annotation"><sup><a href="#fz5" name="fn5">5</a></sup>
                                    Die Informantin lebt seit mehreren Jahren in Catania und spricht ein
                                    ‚near-native‘-Italienisch.
                                </p>

                                <p className="annotation"><sup><a href="#fz6" name="fn6">6</a></sup>
                                    Zur Ausbreitung des medizinischen Fachwortschatzes im Italienischen
                                    siehe beispielsweise Serianni 2005, 99–112 und 113–127.
                                </p>

                                <p className="annotation"><sup><a href="#fz7" name="fn7">7</a></sup>
                                    Auch aus der Sache ergibt sich hier freilich keine semantische
                                    Motivierbarkeit, denn es handelt sich ja augenscheinlich in beiden
                                    Fällen um alles andere als ‚pan‘ (Brot).
                                </p>


                                <p className="annotation"><sup><a href="#fz8" name="fn8">8</a></sup>
                                    Hinzu treten hier bisweilen auch phonische oder auditiv verstärkende
                                    Gewohnheiten, wie die Aussprache der deutschen Variante <i>Peter</i> im
                                    Italienischen sehr oft <i>Piter</i> hervorbringt, und dies trotz eines
                                    impliziten Wissens um die Realisation des Graphems
                                    &lt;e&gt; als <font className="ipa">[e]</font> oder
                                    <font className="ipa">[ɛ]</font>. Ähnliche Verhältnisse
                                    mögen gelten für die Wiedergabe des
                                    deutschen Ortsnamens <i>Ludwigshafen</i> als
                                    frz. <font className="ipa">[ludvigˈʃafn]</font> oder der
                                    frz. Form des Ortsnamens <i>Mulhouse</i> (Elsaß) als <i>Mülhaus</i> im
                                    Deutschen. Sowohl bei
                                    frz. <font className="ipa">[ʃ]</font> für &lt;sh&gt; als
                                    auch bei dt. <font className="ipa">[aʊ]</font>
                                    für &lt;ou&gt; werden fremdsprachliche Grapheme nach englischen
                                    Mustern verlautlicht,  es wird also übergeneralisiert.
                                </p>

                                <p className="annotation"><sup><a href="#fz9" name="fn9">9</a></sup>
                                    Hier könnte man von einer Suffixmotiviertheit sprechen, die sich
                                    reihenhaft auch in <i>austriaco</i>, <i>intonaco</i> usw. findet.
                                </p>


                                <h1>Literatur</h1>
                                <p className="bibl">
                                    Dardano, Maurizio/Trifone, Pietro (<sup>3</sup>1995): <i>Grammatica
                                        italiana. Con nozioni di linguistica</i>, Bologna.
                                </p>

                                <p className="bibl">
                                    Patota, Giuseppe (1985): Sulla formazione dei nomi dei medicinali,
                                    in: <i>Studi linguistici Italiani</i>, XI, 273–283.
                                </p>

                                <p className="bibl">
                                    Riolo, Salvatore (2007): <i>Marchionimi e nomi commerciali nella
                                        lessicografia italiana del secondo novecento</i>, Catania.
                                </p>

                                <p className="bibl">
                                    Serianni, Luca (1989): <i>Saggi di storia linguistica italiana</i>, Napoli.
                                </p>

                                <p className="bibl">
                                    – (2005): <i>Un treno di sintomi: i medici e le parole: percorsi
                                        linguistici nel passato e nel presente</i>, Milano.
                                </p>

                                <p className="bibl">
                                    – (2006): <i>Grammatica italiana. Italiano comune e lingua
                                        letteraria</i>, Torino.
                                </p>

                                <h1>Internetquellen</h1>
                                <p>
                                    VIVALDI:
                                    <a
                                        href="http://www2.rz.hu-berlin.de/Vivaldi" target="blank">http://www2.rz.hu-berlin.de/Vivaldi/</a>.
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
}

export default Bernhard;