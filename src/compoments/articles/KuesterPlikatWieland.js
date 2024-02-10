import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Footer from "../Footer";
import UpArrow from "../UpArrow";
import Rubrik from "../Rubrik";
import Header from "../Header";
import KuesterPortrait from "../../images/kwpteam/lkuester-portrait.jpg";
import PlikatPortrait from "../../images/kwpteam/jplikat-portrait.jpg";
import WielandPortrait from "../../images/kwpteam/kwieland-portrait.jpg";
import Abb1Small from "../../images/kwpteam/abb_1_small.png";
import Abb2Small from "../../images/kwpteam/abb_2_small.png";
import Abb3Small from "../../images/kwpteam/abb_3_small.png";

const images = [
    {
        src: "https://festschrift-kattenbusch.de/images/kwpteam/abb_1.png",
        title: "Abb. 1",
        description: "Abb. 1: VIVALDI: Einzelauswahl der Stimuli"
    },
    {
        src: "https://festschrift-kattenbusch.de/images/kwpteam/abb_2.png",
        title: "Abb. 2",
        description: "Abb. 2: VIVALDI: Region Friaul"
    },
    {
        src: "https://festschrift-kattenbusch.de/images/kwpteam/abb_3.png",
        title: "Abb. 3",
        description: "Abb. 3: VIVALDI Maps"
    },
]
function KuesterPlikatWieland(props) {

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <div id="Wrapper" className="container_14">
            <div id="Header">
                <Header id={props.author} />
                <div className="grid_9">
                    <h1 id="main_title">VIVALDI – eine reiche Fundgrube für Lehramtsstudierende?
                        Fremdsprachen- und hochschuldidaktische Überlegungen</h1>

                    <p id="author">Katharina Wieland, Jochen Plikat, Lutz
                        Küster, Berlin</p>
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

                    <p>
                        Mit VIVALDI (VIVaio Acustico delle Lingue e dei Dialetti d'Italia) ist
                        der Jubilar so eng verwoben, dass man kaum an den einen denken kann,
                        ohne gleich das andere mitzudenken. Generationen von Studierenden der
                        Romanistik sind über VIVALDI an die Varietätenlinguistik herangeführt
                        worden und hatten dabei auch die Gelegenheit, Verfahren der
                        Sprachdatenerhebung kennenzulernen. Wir als Didaktiker gehen im
                        Folgenden der Frage nach, welche Potenziale diese Forschungs- und
                        Lehrinhalte für Studierende der Lehrämter und deren spätere
                        Tätigkeitsfelder in sich bergen. Unser Interesse gilt daher zum einen
                        den Möglichkeiten, die in VIVALDI gewonnenen Sprachdaten im schulischen
                        Italienischunterricht einzusetzen, zum anderen aber auch – weiter
                        gefasst – dem Beitrag, den die wissenschaftliche Auseinandersetzung
                        mit den Inhalten und Verfahren von VIVALDI für die Professionalisierung
                        künftiger Italienischlehrkräfte leisten kann.
                    </p>
                    <p>
                        Vorab möchten wir stichpunktartig jene Komponenten von VIVALDI
                        herausstellen, auf die wir uns nachfolgend näher beziehen. Daran wird
                        einerseits deutlich, dass ein Forschungsprojekt diesen Zuschnitts
                        notwendigerweise zu detaillierten Erkenntnissen in hoch differenzierten
                        Anwendungsbereichen führt, deren Relevanz für schulische Lehr- und
                        Lernkontexte nicht unmittelbar auf der Hand liegt. Andererseits soll
                        aber auch gezeigt werden, dass sich an manchen Stellen durchaus
                        Anschlussmöglichkeiten für den schulischen Italienischunterricht
                        bieten.
                    </p>

                    <h1>1 Bezugsgrößen und –felder der in VIVALDI erhobenen Sprachdaten</h1>
                    <p>
                        Im VIVALDI-Korpus sind die Sprachdaten (Einzelwörter, Teilsätze und
                        ganze Sätze) aus verschiedenen diatopischen Varietäten des
                        Italienischen bzw. aus den in Italien anzutreffenden
                        Minderheitensprachen nach folgenden Kriterien abrufbar:
                    </p>
                    <ul>
                        <li>Phonetik</li>
                        <li>Morphologie</li>
                        <li>Lexikologie</li>
                        <li>Syntax</li>
                    </ul>
                    <p>
                        Die Probanden werden gebeten, auf Grundlage einer schriftlichen,
                        standarditalienischen Vorlage (= Questionario/Fragebuch) auf Stimuli zu
                        reagieren und das <i>Gleichnis vom verlorenen Sohn</i> nachzuerzählen, so dass
                        neben den Einzelwörtern und Teilsätzen auch ein zusammenhängender
                        Text angehört und mitgelesen werden kann. Aus dem Aufbau des Fragebuchs
                        und aus der sorgfältigen phonetischen Transkription der erhobenen
                        Sprachdaten wird ersichtlich, dass VIVALDI als phonetischer Sprachatlas
                        bezeichnet werden kann.
                    </p>
                </div>
                <div className="grid_5">
                    <div className="abouttheauthor">
                        <img src={WielandPortrait} width="100"
                            height="140" alt="Katharina Wieland - Portrait" />
                        <div className="abouttheauthorfont"><br /><br />
                            <b>Katharina Wieland</b>, Dr. phil., seit 2005 Wissenschaftliche
                            Mitarbeiterin am Lehrstuhl Fachdidaktik Romanische Sprachen des
                            Instituts für Romanistik der Humboldt-Universität zu Berlin.<br />
                            <span style={{ color: "#666666" }}>Dieter war der – äußerst akribische – Zweitgutachter meiner Diss.</span>
                        </div>
                        <div className="clearfloat"></div>
                    </div>

                    <div className="abouttheauthor">
                        <img src={KuesterPortrait} width="100"
                            height="140" alt="Lutz Küster - Portrait" />
                        <div className="abouttheauthorfont"><br /><br />
                            <b>Lutz Küster</b>, Prof. Dr., Professor für Didaktik der romanischen
                            Sprachen und Literaturen am Institut für Romanistik der
                            Humboldt-Universität zu Berlin. Seit 2004 Institutskollege von Dieter
                            Kattenbusch.
                        </div>
                        <div className="clearfloat"></div>
                    </div>


                    <div className="abouttheauthor">
                        <img src={PlikatPortrait} width="100"
                            height="140" alt="Jochen Plikat - Portrait" />
                        <div className="abouttheauthorfont"><br /><br />

                            <b>Jochen Plikat</b>, seit 2008 Wissenschaftlicher Mitarbeiter am Institut für Romanistik (Didaktik der romanischen Sprachen) der Humboldt-Universität zu Berlin. Lehramtsstudium der Fächer Spanisch, Französisch und Geschichte in Freiburg im Breisgau, Barcelona und Paris.
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
                                Auf Grundlage dieser Daten bieten sich vielfältige Möglichkeiten
                                sprachwissenschaftlicher Anschlussforschung, von denen an dieser Stelle
                                nur einige exemplarisch aufgezeigt werden sollen:
                            </p>

                            <h3>Historische Phonetik</h3>
                            <ul>
                                <li>
                                    zur Unterstützung und Erklärung der verschiedenen Systeme des
                                    Quantitätenkollaps vom lateinischen Vokalsystem zum gemeinromanischen,
                                    sizilianischen, lukanischen und sardischen Vokalsystem mit auditiven
                                    Beispielen
                                </li>
                                <li>zur Unterstützung und Erklärung der möglichen Entwicklungen im
                                    Vokalsystem im Allgemeinen
                                </li>
                                <li>
                                    zur Unterstützung und Erklärung der möglichen Entwicklungen im
                                    Konsonantismus
                                </li>
                            </ul>

                            <h3>Phonetische Vielfalt der italienischen Dialekte</h3>
                            <ul>
                                <li>
                                    Rafforzamento sintattico bzw. Anlautgeminierung
                                </li>
                                <li>
                                    Geminierung (Unterschiede in Nord-, Mittel- und Süditalien)
                                </li>
                                <li>
                                    Erforschung der Isoglossenbündel La Spezia–Rimini, Roma–Ancona
                                </li>
                                <li>
                                    Orthoepie: „lingua toscana in bocca romana“ oder „lingua
                                    toscana in bocca ambrosiana“
                                </li>
                                <li>
                                    Besonderheiten im Vokalismus und Konsonantismus
                                </li>
                            </ul>
                            <h3>Morphologie</h3>
                            <ul>
                                <li>
                                    Entwicklung des bestimmten Artikels
                                </li>
                                <li>
                                    Tempora und Modi
                                </li>
                                <li>
                                    Kasussystem
                                </li>
                            </ul>
                            <h3>Lexikologie</h3>
                            <ul>
                                <li>
                                    Unterschiede im Lexikon zwischen Nord-, Mittel- und Süditalien
                                </li>
                            </ul>
                            <p>
                                Bezüglich der hochschuldidaktischen Einsatzmöglichkeiten bietet sich
                                VIVALDI hervorragend an, um einerseits historische phonetische
                                Entwicklungen darzustellen und andererseits auf die Vielzahl der
                                Variationen und Varietäten der italienischen Dialekte und
                                Minderheitensprachen einzugehen. Daneben werden – wenn auch in
                                geringerem Umfang – Möglichkeiten geboten, morphologische,
                                lexikalische und syntaktische Besonderheiten in den dialektalen Räumen
                                Italiens darzustellen. Entsprechend didaktisch aufbereitet, können
                                grundlegende Aspekte auch im schulischen Italienischunterricht zum
                                Einsatz kommen. Einige Anregungen möchten wir nun umreißen.
                            </p>


                            <h1>2 Einsatzmöglichkeiten im schulischen Italienischunterricht</h1>
                            <p>
                                Sprachgeschichtliche Phänomene sind für den schulischen
                                Italienischunterricht in der Regel irrelevant. Andererseits ist belegt,
                                dass ein Habitus forschenden Lernens auch für Sprachaneignungsprozesse
                                förderlich ist. Die Fremdsprachendidaktik hat hierfür den Begriff der
                                Sprachenbewusstheit (<i>language awareness</i>) eingeführt (vgl. Gnutzmann
                                1997, 2010), dem ein inferentielles Lernverständnis zugrunde liegt.
                                Dies bedeutet, dass Lerner über das Entwickeln und Überprüfen von
                                Hypothesen nicht nur die Regelhaftigkeit von Sprache erschließen,
                                sondern auch eine Sensibilität für soziale, kulturelle und historische
                                Phänomene entwickeln. Dies hat sogar lernförderliche Auswirkungen auf
                                die Kompetenzstände in der/den Erstsprache/n zu Folge. Für das
                                Italienische ist außerdem zu beachten, dass es häufig als dritte
                                Fremdsprache gelernt wird, so dass bei Schülerinnen und Schülern
                                bereits von einem vertieften Verständnis sprachlicher Phänomene
                                ausgegangen werden kann.
                            </p>

                            <h2>2.1 Geographische Zuordnung des Standarditalienischen</h2>
                            <p>
                                Der schulische Italienischunterricht orientiert sich an der
                                standardisierten italienischen Hochsprache, die ihrerseits auf das
                                Florentinische – eine toskanische Varietät – zurückgeht. Wie an
                                allen Erhebungsorten sind auch in der Toskana – in Vinci (Provinz
                                Firenze) und in Poggibonsi (Provinz Siena) – Daten zur Phonetik,
                                Lexik, Morphologie und Syntax aufgezeichnet worden. Die Daten sind als
                                Audiofiles sowie teilweise mit der zugehörigen phonetischen
                                Transkription verfügbar. In diesem Zusammenhang bietet VIVALDI gute
                                Möglichkeiten, um zu erkennen, dass die Hochsprache zumindest teilweise
                                der Varietät einer bestimmten Region zugeordnet werden kann. Anders
                                gesagt: Je größer der Wiedererkennungswert der lokalen Varietät im
                                Vergleich zur Hochsprache ist, desto naheliegender ist ein enger
                                sprachgeschichtlicher Zusammenhang. Schon an diesem Punkt ist mit
                                VIVALDI entdeckendes Lernen möglich.
                            </p>
                            <p>
                                Eine typische Aufgabenstellung könnte etwa wie folgt konzipiert sein:
                                Einführend werden die Lerner darauf hingewiesen, dass das
                                standardisierte Italienisch wie die anderen den Lernern bekannten
                                Sprachen (Deutsch, Französisch, Englisch ...) sprachgeschichtlich
                                regional zugeordnet werden kann. Die Aufgabe besteht darin, selbst
                                herauszufinden, welche lokale Varietät die größten phonetischen
                                Ähnlichkeiten mit der den Lernern vertrauten Hochsprache
                                aufweist.<sup><a href="#fn1" name="fz1">1</a></sup>
                            </p>
                            <p>
                                Als nötige Einschränkung kann man die Suche auf besonders
                                aussagekräftige Beispiele aus dem phonetischen Teil eingrenzen, von
                                denen die meisten den Lernern aus dem Grundwortschatz bereits bekannt
                                sein dürften, z.B.:
                            </p>
                            <ul>
                                <li>
                                    l’acqua (Casa del Diavolo/Umbrien, St. Nicolas/Aostatal,
                                    Aviano/Friaul, Kravar/Friaul, Roccella Jonica/Kalabrien, La
                                    Spezia/Ligurien, Ala di Stura/Piemont, Fonni/Sardinien, Vita/Sizilien,
                                    Issime/Aostatal, Kastelruth/Trentino-Südtirol, Costalta/Venetien)
                                </li>
                                <li>
                                    il cane
                                </li>
                                <li>
                                    diciotto
                                </li>
                                <li>
                                    giovedì
                                </li>
                                <li>
                                    il vino
                                </li>
                            </ul>

                            <p>
                                Über den Menüpunkt „Einzelauswahl von Orten und Stimuli“ besteht
                                die Möglichkeit, einen oder mehrere Orte auszuwählen (hierfür
                                Umschalttaste gedrückt halten) und sich einen oder mehrere Stimuli
                                anzeigen zu lassen. So erhält man beispielsweise eine Liste aller
                                Aussprachemöglichkeiten des Wortes „il cane“, die in VIVALDI
                                verzeichnet sind, was die Suche erheblich strafft und den direkten
                                Vergleich ohne zeitliche Unterbrechung durch eine neue Suchanfrage
                                ermöglicht (vgl. <a href="#abb1" name="b1">Abb. 1</a>). Durch Klicken
                                auf den Ortsnamen erscheint eine Karte der Region, so dass die
                                geographische Verortung des Hörbeispiels zu jedem Zeitpunkt erfolgen
                                kann.
                            </p>

                            <h2>2.2 Varietäten im Kontext der Mehrsprachigkeitsdidaktik</h2>
                            <p>
                                In der Fremdsprachendidaktik, besonders im Bereich der romanischen
                                Sprachen, hat sich in den letzten 15 Jahren das Konzept der
                                Mehrsprachigkeitsdidaktik als innovativ erwiesen. Hier wird davon
                                ausgegangen, dass das Erlernen einer romanischen Sprache den Zugang zu
                                weiteren Sprachen, insbesondere derselben Sprachfamilie, erleichtert.
                                Zwei Hauptstränge lassen sich hier unterscheiden: Der erste betont die
                                Bedeutung sprachlicher Vielfalt bereits in den Herkunftssprachen und ist
                                daher primär kulturalistisch geprägt. Ziel ist hier das bessere
                                Verständnis und die größere Akzeptanz migrationsbedingter
                                Heterogenität in deutschen Klassenzimmern. Der zweite Strang ist im
                                engeren Sinne fremdsprachendidaktisch. Er basiert auf der empirisch
                                belegten Lernförderlichkeit eines sprachenvernetzenden Lernens. Als
                                Beispiel sei hier der Bereich der Lexik genannt. Neben dem rezeptiven
                                und dem produktiven Wortschatz ist auch der potenzielle Wortschatz von
                                Belang, der sich aus den intra- und interlingualen
                                Erschließungsmöglichkeiten ergibt. Eine explizite Auseinandersetzung
                                etwa mit Regeln der Lautverschiebung kann diesen potenziellen Wortschatz
                                erheblich erweitern.
                            </p>

                            <figure className="imageleft">
                                <p style={{ width: "256px" }}><a href="#b1"
                                    name="abb1">Abb. 1</a>:
                                    VIVALDI: Einzelauswahl der Stimuli
                                </p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(0) }}>
                                    <img src={Abb1Small} width="256"
                                        height="160" alt="VIVALDI: Einzelauswahl der Stimuli" />
                                </button>
                            </figure>


                            <p>
                                VIVALDI stellt für diese beiden Richtungen der
                                Mehrsprachigkeitsdidaktik ein breit gefächertes Angebot an mehrfach
                                kodierten Daten zur Verfügung: über die standardsprachliche Graphie
                                sind die Tonaufnahmen abrufbar. Für diese steht in den meisten Fällen
                                bereits eine phonetische Transkription zur Verfügung. Alle Daten
                                können über vielfache Verknüpfungen jederzeit auf einer Italienkarte
                                situiert werden. Durch eine Einbettung in <i>Google Maps</i> („VIVALDI
                                Maps“) ist der Zugriff auf die Sprachdaten auch in umgekehrter
                                Reihenfolge möglich, also über die geographische Visualisierung.
                            </p>
                            <p>
                                Bei der Arbeit mit VIVALDI kommt nicht nur der fremdsprachendidaktische
                                Gedanke der „gezielte[n] Vernetzung von vor- und nachgelernten
                                Sprachen“ (Leitzke-Ungerer 2008: 105) zum Tragen, also etwa die
                                Nutzbarmachung von sprachlichem Wissen und Strategien aus der
                                Muttersprache bzw. L1 und früher begonnenen (Schul-)Fremdsprachen. Es
                                geht vielmehr auch um ein erweitertes kulturalistisches Konzept der
                                Mehrsprachigkeitsdidaktik, das neben dem Fremdsprachenerwerb „die
                                Entwicklung eines Bewusstseins für sprachlich-kulturelle Phänomene
                                (<i>Language Awareness</i>)“ (ebd.) anstrebt. Hierzu gehört zum einen die
                                intralinguale Mehrsprachigkeit, unter der in der Fachdidaktik das
                                Kennenlernen der Varietäten verstanden wird. Zum anderen ist damit die
                                interlinguale Mehrsprachigkeit gemeint, bei der die „Mehrsprachigkeit
                                der Zielländer, z.B. unter Berücksichtigung der Regionalsprachen“
                                (ebd.), betrachtet werden soll.
                            </p>
                            <p>
                                Für beides ist Italien ein gutes Beispiel, da hier die Koexistenz einer
                                Standardsprache mit diversen Varietäten (z.B. diatopischer Art, die
                                VIVALDI dokumentiert) sowie mit mehreren romanischen und
                                nichtromanischen Minderheitensprachen nachvollziehbar ist. Zu den
                                romanischen Minderheitensprachen gehören Katalanisch, Sardisch,
                                Frankoprovenzalisch, Okzitanisch, Ladinisch und Friaulisch; zu den
                                nichtromanischen Deutsch, Griechisch, Albanisch, Kroatisch und
                                Slowenisch.
                            </p>
                            <p>
                                Viele Lehrbücher thematisieren die regionale Vielfalt Italiens bereits
                                im Anfangsunterricht. Häufig wird auf Namen, Hauptstädte und typische
                                Gerichte der Regionen eingegangen (vgl. <i>Italiano: Pronti, Via!</i>
                                (Gruppo Lingua 2011: 22) oder <i>Azzurro</i> (Fratter/Troncarelli 2007:
                                29)). Hier kann VIVALDI eine lehrwerksergänzende Funktion zukommen,
                                etwa indem die Lerner auch für sprachliche Besonderheiten
                                sensibilisiert werden. Über die Startseite können einzelne Regionen
                                direkt angeklickt werden. In der linken Navigationsleiste kann
                                anschließend ein Wort oder ein (Teil-)Satz ausgewählt und angehört
                                werden.
                            </p>

                            <figure className="imageright">
                                <p style={{ width: "256px" }}><a href="#b2"
                                    name="abb2">Abb. 2</a>:
                                    VIVALDI: Region Friaul
                                </p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(1) }}>
                                    <img src={Abb2Small} width="256"
                                        height="160" alt="VIVALDI: Region Friaul" />
                                </button>
                            </figure>

                            <p>
                                Im Lehrbuch <i>Con piacere A2</i> (Zorzan et al. 2011) findet sich am
                                Ende jedes Kapitels ein Beitrag zum sogenannten „<i>Giro d'Italia</i>“, in
                                dem jeweils die Besonderheiten einer Region unter die Lupe genommen
                                werden. Hierbei geht es häufig wie in den oben genannten Beispielen um
                                Sehenswürdigkeiten, Gastronomie, landschaftliche Besonderheiten etc. In
                                Lektion 1 ist jedoch das Thema Sprache Gegenstand des <i>Giro
                                    d’Italia</i>: Hier wird die Region Friuli-Venezia Giulia in einem
                                bebilderten Informationstext vorgestellt, in dem es zunächst um die
                                Koexistenz des Friaulischen mit dem Italienischen geht. Auch Deutsch und
                                Slowenisch werden als Minderheitensprachen der Region erwähnt. Einzelne
                                Wörter wie die Grußformel <i>Benvignus</i> oder Eigennamen
                                wie <i>Udin</i> und <i>Tresesin</i> werden exemplarisch für das
                                Friaulische angeführt. Der
                                Herkunftsort der Erzählerin des Lektionstextes, Tresesin/Tricesimo,
                                gehört zu den in VIVALDI verzeichneten Orten – ein schöner
                                Anknüpfungspunkt für eine Beschäftigung mit einer romanischen
                                Minderheitensprache (vgl. <a href="#abb2" name="b2">Abb. 2</a>).
                            </p>

                            <p>
                                In VIVALDI Maps können die Lerner den Ort leicht finden. Oder der
                                Nutzer wählt über die Funktion „Einzelauswahl von Orten und Stimuli“
                                den Ort aus und kann sich so alle erfassten Aufzeichnungen auflisten
                                lassen. Eine mögliche Aufgabenstellung wäre hier, eine Vergleichsliste
                                Italienisch/Friaulisch zu erstellen und eine persönliche Auswahl zu
                                treffen.
                            </p>
                            <p>
                                Mögliche Leitfragen sind:
                            </p>
                            <ul>
                                <li>
                                    Welche Einträge weichen besonders stark vom Standarditalienischen ab?
                                </li>
                                <li>
                                    Welche Einträge sind besonders ähnlich?
                                </li>
                                <li>
                                    Welche Einträge findest Du besonders schön (überraschend, kurios,
                                    witzig ...)?
                                </li>
                            </ul>

                            <p>
                                Vertiefend kann über das Internetwörterbuch <i>Dizionari multilengâl</i> (<a href="http://www.friul.net/multilingue">http://www.friul.net/multilingue</a>)
                                die Graphie der gewählten Einträge
                                nachgeschlagen werden – schließlich ist es für viele Lerner sicher
                                eine überraschende Erkenntnis, dass es sich beim Friaulischen
                                tatsächlich um eine standardisierte Sprache mit eigenem Wörterbuch und
                                eigener Grammatik handelt.
                            </p>

                            <h2>2.3 Gebrauch der Vergangenheitszeiten</h2>
                            <p>
                                In den meisten romanischen Sprachen ist die Tendenz zu beobachten, die
                                Dreiteilung der Vergangenheitszeiten (imperfektiv vs. perfektiv mit
                                Gegenwartsbezug vs. perfektiv ohne Gegenwartsbezug) zugunsten einer
                                Zweiteilung (imperfektiv vs. perfektiv) zu reduzieren. Ähnlich wie im
                                Französischen (<i>passé composé</i> vs. <i>passé simple</i> → <i>passé
                                    composé</i>)
                                hat sich im Standarditalienischen zur Beschreibung abgeschlossener
                                Vorgänge in der Vergangenheit die analytische Zeitform <i>passato prossimo</i>
                                durchgesetzt, während das synthetische <i>passato remoto</i> (besonders in
                                Norditalien) häufig nur noch in literarischen Texten zu finden ist. In
                                den mittel- und süditalienischen Dialekten stellt sich die Situation
                                dagegen anders dar: Hier wird für abgeschlossene Vorgänge in der
                                Vergangenheit das <i>passato remoto</i> auch im mündlichen Sprachgebrauch
                                aktiv gebraucht und bevorzugt genutzt (vgl. Krenn 1996: 370;
                                Kirsten/Mack 2009: 36). Ein paralleles Phänomen lässt sich als Tendenz
                                in den lateinamerikanischen Varietäten des Spanischen beobachten
                                (<i>pretérito perfecto compuesto</i> vs. <i>pretérito perfecto simple</i> →
                                <i>pretérito perfecto simple</i>).
                            </p>
                            <p>
                                Für den fortgeschrittenen Italienischunterricht ist eine
                                Aufgabenstellung denkbar, die sich auf die Tendenz in den nord- bzw.
                                mittel- und süditalienischen Varietäten bezieht, zumindest in der
                                Mündlichkeit eine der beiden perfektiven Vergangenheitsformen zu
                                bevorzugen und herauszufinden, wo hier eine Grenze (Isoglosse) zu ziehen
                                wäre. Hierzu heißt es etwa in der Lerngrammatik <i>Grammatica italiana
                                    per tutti</i> von Kirsten/Mack (2009: 36, Hervorh. v. uns):
                            </p>
                            <p className="longcitation">
                                Für Vorgänge, die in sich abgeschlossen sind und einem vergangenen
                                Zeitabschnitt angehören, kann anstelle des <b>Passato remoto</b> auch das
                                <b>Passato prossimo</b> stehen, vor allem in der gesprochenen Sprache. In
                                <b>Norditalien</b> wird in diesem Fall fast ausschließlich das <b>Passato
                                    prossimo</b> gebraucht, während in <b>Süditalien</b> eher das <b>Passato remoto</b>
                                bevorzugt wird.
                            </p>
                            <p>
                                Aus diesem Zitat werden nun die Worte Norditalien/Süditalien gelöscht,
                                ggf. zusätzlich die Namen der Verbzeiten. Ziel der Aufgabe ist es, die
                                Regel selbständig korrekt zu ergänzen. Dies sollen die Schüler
                                versuchen, indem sie beispielsweise im <i>Gleichnis vom verlorenen Sohn</i>
                                zuerst die dort vorhandenen <i>passato remoto</i>-Formen finden und isolieren.
                                Im nächsten Schritt könnten dann mithilfe der „Einzelauswahl von
                                Orten und Stimuli“ für jede Region mindestens ein Ort und ein paar
                                Beispielsätze ausgewählt werden. Durch einfaches Anhören der
                                Antwortsätze sollte der Schüler einen ersten Überblick über die
                                mündliche Verwendung des <i>passato remoto</i> im italienischen Sprachraum
                                bekommen und in der Lage sein, ein aussagekräftiges Ergebnis zu
                                formulieren. Als erwünschten Nebeneffekt bekommt der
                                Italienischlernende auch gleich einen Eindruck von den jeweiligen
                                regionalen Dialekten.
                            </p>
                            <p>
                                Alternativ zur „Einzelauswahl“ könnte
                                natürlich auch in gleicher Weise VIVALDI Maps verwendet werden.
                                Mithilfe der Einzelkarten könnten die Schüler auch Region für Region
                                (z.B. von Norden nach Süden) untersuchen und auswerten, indem sie sich
                                im syntaktischen Teil von VIVALDI folgenden Satz anhören, der den
                                Probanden mit der Aufforderung vorgelegt wurde, ihn sinngemäß im
                                lokalen Dialekt wiederzugeben: <i>Un ramo marcio mi è caduto sul viso;
                                    mi ha fatto sanguinare il naso.</i> Von besonderem Interesse ist hierbei,
                                ob und wie die beiden Verbformen <i>è caduto</i> und <i>ha fatto</i>
                                transformiert werden.
                            </p>
                            <p>
                                An dieser Stelle ist anzumerken, dass die erhobenen Daten kein
                                einheitliches Bild ergeben, was vermutlich auf die leichte Steuerung
                                aufgrund des Satzimpulses im <i>passato prossimo</i> sowie den impliziten
                                Gegenwartsbezug des Satzes zurückzuführen ist. Dennoch finden sich
                                noch genügend Beispiele, anhand derer sich die Regel selbst
                                herausfinden lässt. Unser Vorschlag für eine Vorauswahl, die auch der
                                Reduzierung der Datenmenge und dem Ausschluss der hier nicht relevanten
                                Minderheitensprachen dient, umfasst folgende Orte:
                            </p>
                            <ul>
                                <li>
                                    Trentino: Delba, Canal San Bovo, Trento
                                </li>
                                <li>
                                    Venetien: Verona, Belluno, Anpez/Cortina d'Ampezzo
                                </li>
                                <li>
                                    Sizilien: Vita, Palermo, Villalba, Patti, Bronte, Catania, Vittoria,
                                    Malfa
                                </li>
                            </ul>

                            <p>
                                Auch hier ist der Zugriff auf die Daten über die „VIVALDI Maps“-Darstellung sehr komfortabel. Das Item lässt sich oben auf der Seite in einem Drop-down-Menü vorauswählen. Anschließend lassen sich die Hörbeispiele inklusive phonetischer Transkription abrufen (vgl. <a href="#abb3" name="b3">Abb. 3</a>).
                            </p>
                            <p>
                                Als weitere Möglichkeit zur Erarbeitung des regional unterschiedlichen
                                Gebrauchs der Vergangenheitszeiten ist auch das <i>Gleichnis vom verlorenen
                                    Sohn</i>, bei dem die Probanden einen längeren Text in der Vergangenheit
                                nacherzählen mussten, geeignet. Auch hier können die Beispielsätze
                                entweder direkt in VIVALDI oder über VIVALDI Maps angesteuert werden.
                            </p>

                            <figure className="imageleft">
                                <p style={{ width: "256px" }}><a href="#b3"
                                    name="abb3">Abb. 3</a>:
                                    VIVALDI Maps
                                </p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(2) }}>
                                    <img src={Abb3Small} width="256"
                                        height="160" alt="VIVALDI Maps" />
                                </button>
                            </figure>
                            <p>
                                Die oben vorgeschlagenen Ideen lassen sich je nach Vorkenntnissen der
                                Lerner selbstverständlich auch in der Hochschule einsetzen. Hierzu
                                möchten wir im Folgenden noch einige weiterführende Anregungen
                                geben.
                            </p>

                            <h1>3 Hochschuldidaktik und Lehrerbildung</h1>
                            <p>
                                Durch die wissenschaftliche Ausrichtung von VIVALDI gibt es für den
                                Einsatz in der Hochschule natürlich eine Vielzahl von
                                Verwendungsmöglichkeiten. Ein möglicher Schwerpunkt liegt dabei
                                sicherlich in der Phonetik, da VIVALDI jederzeit als Begleitmaterial zur
                                akustischen Präsentation der behandelten Phänomene herangezogen werden
                                kann. Hierbei eignen sich insbesondere die dem Standarditalienischen
                                zugrunde liegenden mittelitalienischen Varietäten wie das
                                Florentinische.
                            </p>
                            <p>
                                Wir möchten an dieser Stelle nur ein Beispiel für den
                                Phonetikunterricht herausgreifen. Bekanntermaßen lässt sich an der
                                geographischen Linie La Spezia–Rimini ein sogenanntes Isoglossenbündel
                                feststellen. Dieses markiert den Übergang zwischen Ausprägungen
                                mehrerer sprachlicher Phänomene, so dass es zu einer Varietätengrenze
                                kommt. Diese Linie ist insofern von besonderem Interesse, als sie nicht
                                nur für die romanischen Varietäten des italienischen Staatsgebiets
                                relevant ist, sondern gleichzeitig eine Einteilung der romanischen
                                Sprachen in West- und Ostromania erlaubt. Die Varietäten nördlich
                                dieser Linie weisen viele wichtige gemeinsame Merkmale mit den
                                westromanischen Sprachformen auf (z.B. Spanisch, Portugiesisch),
                                während diejenigen südlich der Linie zur Ostromania gezählt werden.
                                Ein phonetisches Phänomen, das hier eine Rolle spielt, ist die
                                Sonorisierung der intervokalischen Plosive. Konkret heißt dies, dass
                                /p/, /t/, /k/ zwischen zwei Vokalen nördlich der Linie stimmhaft als
                                <span className="ipa">[b], [d], [g]</span> oder sogar als frikativer Laut
                                <span className="ipa">[β], [δ], [γ]</span> realisiert
                                werden. Im Nordwesten kommt es häufig sogar zum vollständigen Schwund
                                des Lautes.
                            </p>
                            <p>
                                Im Unterricht kann diese Entwicklung anhand ausgewählter Beispiele aus
                                VIVALDI selbständig entdeckt und nachvollzogen werden. Aussagekräftige
                                Items aus dem VIVALDI-Korpus (phonetischer Teil) sind:
                            </p>
                            <ul>
                                <li>
                                    la ca<b>t</b>ena   (Beispiel: 	San Stino di Livenza/Venetien vs. Aidone
                                    2/Sizilien)
                                </li>
                                <li>
                                    il fuo<b>c</b>o (Beispiel: Auronzo di Cadore/Venetien
                                    vs. Giarratana/Sizilien)
                                </li>
                                <li>
                                    il ca<b>p</b>ello (Beispiel: Verona/Venetien vs. Casa del Diavolo/Umbrien)
                                </li>
                            </ul>

                            <p>
                                Die Vertrautheit mit diesen Phänomenen ist als Rüstzeug für die
                                romanische Interkomprehension nicht zu unterschätzen. VIVALDI bietet
                                hier einen großen lernpsychologischen Vorteil, denn der
                                „sprechende“ Sprachatlas erlaubt es, die Phänomene nicht nur auf
                                einer abstrakt-kognitiven und schriftlichen Ebene zu erkunden, sondern
                                sie auch auditiv und damit unter Einbeziehung eines weiteren Sinns
                                kennenzulernen.
                            </p>
                            <p>
                                Von der diatopischen und synchronen Ebene ist es nun nur noch ein
                                kleiner Schritt zur diachronen Sprachbetrachtung. Auch in Seminaren zur
                                Sprachgeschichte spielen Phänomene wie die genannten, aber auch
                                Lautentwicklungen wie Diphthongierung und Umlautung (Metaphonie), der
                                Gebrauch von <i>tenere</i> vs. <i>avere</i>, die Entwicklung der
                                Artikel usw. eine große Rolle. Da manche Varietäten einen älteren
                                Sprachstand konservieren als andere oder die standardisierte
                                Hochsprache, ist die diachrone Achse auf der diatopischen Ebene
                                teilweise nachzuvollziehen.
                            </p>

                            <h1>4 Fazit</h1>
                            <p>
                                Der Habitus forschenden Lernens, dessen Bedeutung für schulisches
                                Lernen wir oben hervorgehoben haben, ist selbstverständlich für
                                Lehramtsstudierende von noch größerer Bedeutung. Die digitale
                                Verfügbarkeit und einfache Nutzung einer Sprachdatenbank wie VIVALDI
                                bietet hier ein weites Betätigungsfeld, sie lädt buchstäblich dazu
                                ein, forschendes Lernen zu praktizieren. Wenn Studierende in diesem
                                Rahmen eine Sensibilität für den Varietätenreichtum im italienischen
                                Sprachraum entwickeln, so wird sie dies mit hoher Wahrscheinlichkeit
                                gegen ein allzu rigides Normverständnis wappnen. Dies wäre im Hinblick
                                auf jenen toleranten Umgang mit Fehlern im Fremdsprachenunterricht
                                durchaus wünschenswert, den auch der Gemeinsame Europäische
                                Referenzrahmen für Sprachen nahelegt.
                            </p>
                            <p>
                                Schließlich und letztlich ist noch zu nennen, dass besonders
                                interessierte Studierende die Möglichkeit haben, im Rahmen einer
                                Abschlussarbeit oder Dissertation selbst an der Datenerhebung
                                mitzuwirken und so einen handelnden Einblick in die Methodik der
                                Feldforschung zu gewinnen. Kurzum: Es sollte deutlich geworden sein,
                                dass VIVALDI sehr wohl didaktische Potenziale auf der Ebene schulischen
                                Italienischunterrichts wie auch der Italienischlehrerausbildung besitzt.
                                Dafür gebührt unserem Jubilar Dank!
                            </p>


                            <h1>Anmerkungen</h1>
                            <p className="annotation"><sup><a href="#fz1" name="fn1">1</a></sup>
                                Der Aufnahmepunkt Florenz war zum Zeitpunkt der Abfassung dieses Beitrags noch nicht in VIVALDI vorhanden, ist aber in der Zwischenzeit eingefügt worden.
                            </p>


                            <h1>Literatur</h1>

                            <p className="bibl">
                                Fratter, Ivana/Troncarelli, Claudia (2007): <i>Azzurro A1/A2. Italienisch
                                    Intensivkurs mit Audio-CD</i>, Stuttgart.
                            </p>
                            <p className="bibl">
                                Gnutzmann, Claus (1997): Language Awareness. Geschichte, Grundlagen,
                                Anwendungen, in: <i>Praxis des neusprachlichen Unterrichts</i> 3,
                                227–236.
                            </p>
                            <p className="bibl">
                                – (2010): Language Awareness, in: Wolfgang Hallet/Frank G. Königs (Hg.): <i>Handbuch Fremdsprachendidaktik</i>,
                                Seelze-Velber, 115–119.
                            </p>
                            <p className="bibl">
                                Gruppo Lingua (2011): <i>Italiano – Pronti, Via!</i>, Stuttgart.
                            </p>
                            <p className="bibl">
                                Kirsten, Gerhard/Mack, Barbara (2009): <i>Grammatica italiana per tutti</i>,
                                Stuttgart.
                            </p>
                            <p className="bibl">
                                Krenn, Herwig (1996): <i>Italienische Grammatik</i>, Ismaning.
                            </p>
                            <p className="bibl">
                                Leitzke-Ungerer, Eva (2008): Mehrsprachigkeitsdidaktik und
                                mehrsprachige Kommunikationssituationen in den neuen Lehrwerken für den
                                Französisch- und Spanischunterricht, in: Christiane Fäcke/Walburga
                                Hülk/Franz-Joseph Klein (Hg.): <i>Multiethnizität, Migration
                                    und Mehrsprachigkeit. Festschrift zum 65. Geburtstag von Adelheid
                                    Schumann</i>, Stuttgart, 105–124.
                            </p>
                            <p className="bibl">
                                VIVALDI = <i>Vivaio Acustico delle Lingue e dei Dialetti d’Italia</i>,
                                <a href="http://www2.hu-berlin.de/vivaldi">
                                    http://www2.hu-berlin.de/vivaldi</a>.
                            </p>
                            <p className="bibl">
                                Zorzan, Lorenza  et al. (2011): <i>Con piacere A2. Lehr- und Arbeitsbuch
                                    Italienisch mit 2 Audio-CDs</i>, Stuttgart.
                            </p>

                            <p>
                                <i>Für eine kritische Durchsicht des Manuskripts bedanken sich die Autoren
                                    bei Sara Mamprin.</i>
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

export default KuesterPlikatWieland;