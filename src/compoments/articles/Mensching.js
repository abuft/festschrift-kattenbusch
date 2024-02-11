import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Footer from "../Footer";
import Header from "../Header";
import Rubrik from "../Rubrik";
import UpArrow from "../UpArrow";
import MenschingPortrait from "../../images/gmensching/mensching_portrait.jpg";
import SardinienSyntaxOrteSmall from "../../images/gmensching/sardinien-syntax-orte_small.jpg";
import SardinienKampmannSmall from "../../images/gmensching/sardinien-kampmann_small.jpg";
import SardinienVivaldiSmall from "../../images/gmensching/sardinien-vivaldi_small.jpg";

const images = [
    {
        src: "https://festschrift-kattenbusch.de/images/gmensching/sardinien-syntax-orte.jpg",
        title: "Karte 1",
        description: "In diversen Studien und Projekten zur sardischen Syntax berücksichtigte Orte"
    },
    {
        src: "https://festschrift-kattenbusch.de/images/gmensching/sardinien-kampmann.jpg",
        title: "Karte 2",
        description: "Orte aus Kampmann (2010)"
    },
    {
        src: "https://festschrift-kattenbusch.de/images/gmensching/sardinien-vivaldi.jpg",
        title: "Karte 3",
        description: "VIVALDI-Aufnahmepunkte auf Sardinien"
    }
]

function Mensching(props) {

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <div id="Wrapper" className="container_14">

            <div id="Header">
                <Header id={props.author} />
                <div className="grid_9">
                    <h1 id="main_title">Anmerkungen zur sardischen Syntax anhand des
                        <i>Vivaio Acustico delle Lingue e dei Dialetti d’Italia</i> (VIVALDI)
                    </h1>
                    <p id="author">Guido Mensching, Berlin</p>
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
                    <h1><a href="#abschn1" name="kap1">1</a> Einleitung</h1>
                    <p>
                        Der vorliegende Beitrag versteht sich als eine
                        Skizze<sup><a href="#fn1" name="fz1">1</a></sup> zu ausgewählten
                        Aspekten der sardischen Syntax aus diatopischer Sicht, die in den
                        Materialien des <i>Vivaio Acustico delle Lingue e dei Dialetti d’Italia</i>
                        (VIVALDI) erkennbar sind. Hierbei soll auch gezeigt werden, dass die
                        zurzeit vorhandenen sardischen Aufnahmepunkte von VIVALDI die bisherigen
                        Kenntnisse der sardischen Syntax und ihrer Diatopik bestätigen bzw.
                        vermehren können. Mein Versuch, aus den sardischen VIVALDI-Daten
                        syntaktische Erkenntnisse zu extrahieren, brachte schnell eine immense
                        Menge von interessanten Phänomenen zum Vorschein, so dass sich
                        abzeichnete, dass man im Prinzip mühelos ein Buch daraus machen
                        könnte. Daher war eine Auswahl an Phänomenbereichen erforderlich, die
                        die Vielzahl der zukünftig aus diesem Material noch zu gewinnenden
                        syntaktischen Erkenntnisse nur andeuten kann. Hierbei handelt es sich um
                        exemplarische Auszüge aus der Nominalsyntax (<a href="#kap2" name="abschn2">Abschn. 2</a>,
                        Possessivadjektive), Verbalsyntax (<a href="#kap3" name="abschn3">Abschn. 3</a>, Verwendung bestimmter
                        Tempora und Modi) und Satzsyntax (<a href="#kap4" name="abschn4">Abschn. 4</a>, linke Peripherie:
                        Komplementierer, Fokus- und Fragekonstruktionen). Der Artikel endet mit
                        einem abschließenden <a href="#kap5" name="abschn5">Abschnitt 5</a>, der die Ergebnisse resümiert. Es
                        seien aber zunächst einige vorbereitende Überlegungen und
                        Informationen vorangestellt.
                    </p>
                </div>
                <div className="grid_5">
                    <div className="abouttheauthor">
                        <img src={MenschingPortrait} width="120" height="149"
                            alt=" Guido Mensching - Portrait" />
                        <div className="abouttheauthorfont"><br /><br />
                            <b>Guido Mensching</b>, Prof. Dr., geb. 1963, seit 2000 o. Professor für romanische Sprachwissenschaft an
                            der Freien Universität Berlin.
                            Studium Romanistik (span. und ital. Philologie) und Germanistik an der Universität zu Köln (1984–1989),
                            Promotion ibidem 1992 mit einer kommentierten
                            Edition eines altspanischen Medizinwörterbuchs, Habil. ibidem 1997 zu Infinitivkonstruktionen in den
                            romanischen Sprachen im Rahmen der generativen Syntax. Weiterer langjähriger Forschungsschwerpunkt Sardisch.
                            Vorher wiss.
                            Mitarbeiter/Assistent Univ. zu Köln (Computerlinguistik).
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
                                Die ernsthafte Beschäftigung mit der Syntax des Sardischen beginnt
                                erst Ende der 1980er Jahre mit der Publikation einzelner Beiträge von
                                Michael Allan Jones (1988a, b). 1993 erschien dann <i>Sardinian Syntax</i>
                                (Jones 1993), die hauptsächlich dem Ort Lula (sard. Lùvula) gewidmet
                                ist und eine ältere Form des generativen Modells nutzt. Im selben Jahr
                                wurde die Arbeit von La Fauci/Loporcaro (1993) zu Bonorva im Framework
                                der <i>Relational Grammar</i> publiziert. Im neuen Jahrtausend findet zum einen
                                hauptsächlich anhand der Syntax der Orte Bono und Buddusò in Bentley
                                (2003, 2004) ein weiteres Grammatik-Framework (die <i>Role and Reference
                                    Grammar</i>) Anwendung, zum anderen erfolgt in Remberger (2006) die erste
                                kohärente minimalistische Analyse des Sardischen, die nicht auf Daten
                                einzelner Orte beruht, sondern vor allem die in Köln gegründete und
                                seit 2000 an der FU Berlin beheimatete Mailingliste <i>sa-limba</i> als Korpus
                                nutzt. Zusammen mit Eva-Maria Remberger hat auch der Verfasser dieses
                                Artikels einige relevante Eigenschaften des linken Satzrandes im neueren
                                generativen Rahmen behandelt (Mensching/Remberger 2010a, b). Nunmehr
                                kann zwar gesagt werden, dass die wichtigsten syntaktischen Strukturen
                                des Sardischen deskriptiv erfasst wurden und aus theoretischer Sicht
                                recht gut verstanden sind, allerdings steckt die sprachgeographische
                                Erfassung der Syntax des Sardischen noch in den Kinderschuhen. Im Rahmen
                                des von Padua (Paola Benincà) aus geleiteten <i>Atlante Sintattico dei
                                    dialetti d’Italia</i> (ASIt; vgl. Benincà/Poletto 2007 u.a.) wurden zu
                                Beginn des neuen Jahrtausends vier sardische Orte experimentell auf
                                schriftlichem Wege syntaktisch exploriert und in einem Workshop, dessen
                                Resultate von Padovan/Penello (2006) publiziert wurden, behandelt. Seit
                                2009 habe ich selbst in insgesamt fünf Orten mündlich ASIt-Umfragen
                                durchgeführt, deren Auswertung allerdings noch nicht abgeschlossen ist.
                                Das Gesagte lässt sich in <a href="#abb1" name="b1">Karte 1</a>
                                zusammenfassen:
                            </p>



                            <figure className="imageleft">
                                <p style={{ width: "334px" }}><a href="#b1" name="abb1">Karte 1</a>: In
                                    diversen Studien und
                                    Projekten zur sardischen Syntax berücksichtigte Orte
                                </p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(0); }}>
                                    <img src={SardinienSyntaxOrteSmall} width="334" height="153" alt="Karte 1: In diversen Studien und Projekten zur
                                         sardischen Syntax berücksichtigte Orte" />
                                </button>
                            </figure>

                            <p>
                                Vor allem aber ist die umfangreiche Arbeit von Manzini/Savoia (2005) zur
                                Syntax der Dialekte Italiens zu erwähnen, die bisher die größte Zahl
                                an sardischen Orten (29 Punkte) umfasst. Da es auch hierbei, wie bei den
                                meisten oben genannten Arbeiten bzw. Projekten, nicht um eine
                                Gesamtdarstellung der erhobenen Daten geht, sondern um eine Beschreibung
                                und Interpretation ausgewählter Phänomene, ist dieses ansonsten
                                beeindruckende Werk aus sprachgeographischer Sicht nur bedingt zu
                                gebrauchen. Ein erster Versuch, die Ergebnisse aus Manzini/Savoia
                                (2005) bezüglich Sardiniens auf Karten darzustellen, liegt mit der
                                Magisterarbeit von Gabriel Kampmann (2010) vor, der sich allerdings mit
                                der Schwierigkeit konfrontiert sah, dass die fehlende Erwähnung eines
                                Ortes bezüglich einer bestimmten syntaktischen Struktur nicht in jedem
                                Fall bedeutet, dass die Struktur an allen anderen Orten nicht vorhanden
                                ist. Es lassen sich also nur Karten erstellen, die für eine Struktur
                                zeigen, wo sie <i>auf jeden Fall</i> belegt ist – ein Beispiel ist in
                                <a href="#kap4.1" name="abschn4.1">Abschnitt 4.1</a>, <a href="#abb4" name="b4">Karte 4</a>, gegeben. Die
                                dort sichtbaren weißen Flächen
                                sind Gebiete, über die man anhand von Manzini/Savoia (2005) bezüglich
                                der jeweils in Frage stehenden Struktur nichts aussagen
                                kann<sup><a href="#fn2" name="fz2">2</a></sup>.
                                <a href="#abb2" name="b2">Karte 2</a>
                                zeigt die in Kampmann (2010) berücksichtigten Orte. Auch ist
                                anzumerken, dass Manzini/Savoia (2005) nicht das gesamte Spektrum der
                                sardischen Syntax abdecken, so dass auch die meisten der hier in <a href="#kap2" name="abschn2">Abschn.
                                    2</a>, <a href="#kap3" name="abschn3">Abschn. 3</a> und <a href="#kap4" name="abschn4">Abschn. 4</a>
                                behandelten Phänomenbereiche dort nicht untersucht werden.
                            </p>

                            <figure className="imageleft">
                                <p style={{ width: "387px" }}><a href="#b2" name="abb2">Karte 2</a>:
                                    Orte aus Kampmann (2010)
                                </p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(1); }}>
                                    <img src={SardinienKampmannSmall} width="387" height="278"
                                        alt="Karte 2: Orte aus Kampmann (2010)" />
                                </button>
                            </figure>

                            <p>

                                Vor den genannten Hintergründen ist es sehr zu begrüßen, dass Dieter
                                Kattenbusch und sein Team in seinem webbasierten Sprachatlas VIVALDI
                                bisher 16 Orte auf Sardinien
                                (vgl. <a href="#abb3" name="b3">Karte 3</a>) in online abrufbaren
                                Tondaten erfasst haben und hierfür auch – der VIVALDI-Systematik
                                folgend – einen kleinen syntaktischen Teil erstellt haben.
                            </p>

                            <p>
                                Vergleicht man dieses bisher vorliegende VIVALDI-Punktenetz für
                                Sardinien mit der von Kampmann (2010) 
                                erstellten <a href="#abb2" name="b2">Karte 2</a>, so lässt sich
                                folgendes festhalten:<sup><a href="#fn3" name="fz3">3</a></sup>
                            </p>

                            <ol>
                                <li>
                                    Südlich der Grenze zum Sassaresischen konnte neben Ossi (P. 8, ASIt)
                                    und Ittiri (P. 13, ASIt u. M&S) noch der logudoresische Ort Ploaghe
                                    hinzugefügt werden.
                                </li>
                                <li>
                                    Weiter südlich im logudoresischen Sprachgebiet hat VIVALDI auf der
                                    Höhe des an der Westküste gelegenen Ortes Bosa (P. 16, M&S) noch den
                                    ca. 30 km östlich davon gelegenen Ort Macomer.
                                </li>
                                <li>
                                    Südlich von Santu Lussurgiu (P. 28, K), Ardauli (P. 30, M&S),
                                    Paulilatino (P. 29, M&S) verläuft eine wichtige Isoglosse, unterhalb
                                    derer der campidanesische bestimmte Artikel im Plural is (anstelle von
                                    log. <i>sos/sas</i>) lautet (vgl. Virdis 1988: 908). Die von Manzini/Savoia
                                    (2005) erfassten Orte Allai (P. 31) und Sorgono (P. 32) liegen südlich
                                    von dieser Linie und zeigen folglich schon den Artikel is. VIVALDI
                                    rückt im Westen viel näher an die Isoglosse heran, mit den nahe
                                    beieinander liegenden Orten Bonarcado (<i>sos/sas</i>) und Milis
                                    (<i>is</i>), zwischen
                                    denen diese Isoglosse genau verläuft. Östlich von Sorgono macht die
                                    Isoglosse einen „Knick“ nach Süden und erreicht dann südlich von
                                    Baunei (P. 25, ASIt) die Ostküste. Kurz vor diesem „Knick“ erfasst
                                    VIVALDI den unmittelbar nördlich der Isoglosse gelegenen Ort Fonni.
                                    Südlich von Baunei
                                    (P. 25, ASIt)<sup><a href="#fn4" name="fz4">4</a></sup> gibt es
                                    im Osten keinen von
                                    Manzini/Savoia (2005) oder bisher vom ASIt-Projekt erfassten Punkt.
                                    VIVALDI hat hier den Ort Arzana berücksichtigt, der unmittelbar
                                    südlich der genannten Isoglosse im <i>is</i>-Gebiet liegt. Die genannten Orte
                                    liegen alle in der sogenannten <i>zona grigia</i>, in der sich vor allem
                                    zahlreiche phonetische bzw. phonologische Isoglossen, die das
                                    Campidanesische vom Logudoresischen trennen, in einem breiten Streifen
                                    überkreuzen
                                    (vgl. Virdis 1988: 908).<sup><a href="#fn5" name="fz5">5</a></sup> Am
                                    südlichen Rand der <i>zona grigia</i>
                                    befindet sich der sowohl bei Manzini/Savoia (2005) als auch in VIVALDI
                                    figurierende Ort Laconi.
                                </li>
                                <li>
                                    Im campidanesischen Sprachgebiet kann VIVALDI in der Nähe der von
                                    Manzini/Savoia (2005) erfassten Orte Orroli (P. 37) und Donigala (P. 38)
                                    östlich davon noch Perdasdefogu beisteuern. Im Südwesten haben
                                    Manzini/Savoia nur die Orte Arbus (39) und Siliqua (42), während
                                    VIVALDI noch das ungefähr dazwischen liegende Villacidro bietet. Der
                                    Ort ist in <a href="#abb2" name="b2">Karte 2</a> (P. 40) deshalb
                                    enthalten, weil Kampmann (2010) im
                                    Rahmen seiner Arbeit für einige Phänomene einen Sprecher aus
                                    Villacidro interviewt hat. Dasselbe gilt für Iglesias (41).
                                </li>
                                <li>
                                    Schließlich bietet VIVALDI im extremen Süden noch die bei
                                    Manzini/Savoia (2005) nicht erfassten Orte Cagliari und Sant’Antioco,
                                    wobei letzterer Ort deshalb interessant ist, weil er neben dem
                                    ligurischsprachigen Ort Calasetta liegt und die in den anderen genannten
                                    Arbeiten nicht erfasste Region Sulcis repräsentiert.
                                </li>
                            </ol>

                            <figure className="imageleft">
                                <p style={{ width: "212px" }}><a href="#b3" name="abb3">Karte 3</a>:
                                    VIVALDI-Punkte auf Sardinien (Stand 2011)
                                </p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(2); }}>
                                    <img src={SardinienVivaldiSmall} width="212" height="223" alt="Karte 3: VIVALDI-Punkte auf
		                         Sardinien (Stand 2011)" />
                                </button>
                            </figure>


                            <p>
                                Neben dem kleinen syntaktischen Teil von VIVALDI, der vierzehn
                                Einzelsätze enthält (vgl. <a href="#anh1" name="anhang1">Anhang I</a>), sind, wie sich noch zeigen wird,
                                einige interessante Phänomene aus dem phonetischen Teil zu entnehmen.
                                Am meisten für die Syntax bietet das <i>Gleichnis vom verlorenen
                                    Sohn</i><sup><a href="#fn5" name="fz5">5</a></sup> (im
                                Folgenden GvS, vgl. <a href="#anh2" name="anhang2">Anhang II</a><sup><a href="#fn6"
                                    name="fz6">6</a></sup>), dessen
                                syntaktische Auswertung daher
                                auch prominent im vorliegenden Beitrag berücksichtigt wird. Das
                                <i>Gleichnis</i> ist in <a href="#anh3" name="anhang3">Anhang III</a> beispielhaft in der Version aus
                                Nuoro, die
                                aus VIVALDI in graphematischer Form transkribiert wurde, enthalten.
                            </p>

                            <p>
                                Im Folgenden werden nur die sardischen Varietäten im engeren Sinne
                                behandelt, d.h. die Orte Sassari (Sassarese), Tempio Pausania
                                (Gallurese), Alghero (Katalanisch) und Calasetta (Ligurisch) werden
                                nicht berücksichtigt. Die aus den Tonmaterialien entnommenen sardischen
                                Belege werden hier graphematisch wiedergegeben. In Fällen, in denen
                                sich Beispiele auf mehrere Varietäten beziehen, wird die Standardform
                                nach der <i>Limba Sarda Comuna</i> (LSC) wiedergegeben und in Kapitälchen
                                dargestellt. Ansonsten werden die lokalen Varietäten graphematisch
                                transkribiert, wobei ich mich auch an den Konventionen der LSC
                                orientiert habe.<sup><a href="#fn7" name="fz7">7</a></sup> Die
                                Darstellung ist vornehmlich deskriptiv und
                                weitestgehend theorieneutral gehalten.
                            </p>


                            <h1><a href="#abschn2" name="kap2">2</a> Possessivadjektive</h1>

                            <h2><a href="#kap2.1" name="abschn2.1">2.1</a> Grundlagen</h2>
                            <p>
                                Als Beispiel aus dem Bereich der Nominal- bzw. NP-Syntax wurden die
                                Possessivadjektive ausgewählt. Es werden hier zunächst einige
                                grundlegende Regelhaftigkeiten, die unabhängig von der Einteilung
                                Campidanesisch-Logudoresisch zu gelten scheinen, genannt. Danach wird
                                unter <a href="#abschn2.2" name="kap2.2">2.2</a> das Thema der Verwandtschaftsbezeichnungen vertieft.
                                Schließlich werden unter <a href="#abschn2.3" name="kap2.3">2.3</a> einige in den VIVALDI-Daten erkennbare
                                spezifische Besonderheiten des Campidanesischen dargestellt.
                            </p>

                            <p>
                                Nr. 1 des syntaktischen Teils (<i>mio figlio</i>) zeigt durchgehend die im
                                Sardischen obligatorische postnominale Stellung des Possessivadjektivs
                                (vgl. Manzini/Savoia 2005: III, 557–562), die auch anhand des Satzes
                                <i>(Questo è) il nostro cane/il mio cane</i> im phonetischen Teil
                                exemplifiziert werden kann. Wie im Italienischen fehlt bei
                                Verwandtschaftsbezeichnungen der bestimmte Artikel, wie (1a) vs. (1b)
                                zeigt.
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(1)</td>
                                    <td>a.</td>
                                    <td><span style={{ fontVariant: "small-caps" }}>figiu meu/miu</span><sup><a href="#fn8"
                                        name="fz8">8</a></sup></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td><span style={{ fontVariant: "small-caps" }}>Custu est su cane</span><sup><a href="#fn9"
                                        name="fz9">9</a></sup>
                                        <span style={{ fontVariant: "small-caps" }}>meu/miu/nostru</span><sup><a href="#fn10"
                                            name="fz10">10</a></sup>
                                    </td>
                                </tr>
                            </table>

                            <p>
                                Bezüglich der Koordination mehrerer durch Possessivadjektive
                                modifizierter NPen ist in der Darstellung von Lepori (2001: 167)
                                folgende Anmerkung interessant:
                            </p>

                            <p className="longcitation">
                                L’aggettivo possessivo non si ripete nella stessa frase quando si
                                riferisce alla stessa persona, animale o cosa: <i>is denghis e is
                                    isçollòrius tuus no m’interèssanta</i> (i tuoi capricci e le tue
                                sciocchezze non mi interessano).
                            </p>

                            <p>
                                Ein solcher Fall lässt sich in GvS [12] beobachten (<i>i miei porci e le
                                    mie pecore</i>): Hier wird die von Lepori berichtete Regelhaftigkeit
                                tatsächlich an den meisten Orten, die das Possessivadjektiv in der
                                Übersetzung verwenden, gewählt, und zwar unabhängig davon, ob es sich
                                um logudoresische oder campidanesische Varietäten handelt:
                            </p>


                            <table className="simple">
                                <tr>
                                    <td>(2)</td>
                                    <td>a.</td>
                                    <td>sos porcos e sas alveghes mias</td>
                                    <td>(Ploaghe)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>sos proʔos e sas ʔerveʔes meas</td>
                                    <td>(Fonni)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>c.</td>
                                    <td>is procos e is brebeis mias</td>
                                    <td>(Laconi)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>d.</td>
                                    <td>is procus e is brebeis mias</td>
                                    <td>(Cagliari)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>e.</td>
                                    <td>is porcus e berbeis mias</td>
                                    <td>(Perdasdefogu)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>f.</td>
                                    <td>is procus e brebeis mias</td>
                                    <td>(Villacidro)</td>
                                </tr>
                            </table>

                            <p>
                                Interessanterweise – mir ist nicht bekannt, dass dies in der Literatur
                                bisher beschrieben wurde – kongruiert das Possessivum mit dem zweiten
                                Nomen im Femininum, obwohl das erste Nomen (<i>porcu</i>) maskulin
                                ist.<sup><a href="#fn11" name="fz11">11</a></sup> In
                                Perdasdefogu und Villacidro (vgl. (2e), (2f)) erscheint – wenn ich
                                richtig höre – der bestimmte Artikel nur vor dem ersten Substantiv,
                                was im Campidanesischen wohl deshalb möglich ist, weil der bestimmte
                                Artikel im Plural für beide Genera dieselbe Form (<i>is</i>) zeigt. Nur zwei
                                Orte verhalten sich in Bezug auf das Possessivadjektiv anders:
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(3)</td>
                                    <td>a.</td>
                                    <td>is porcus mios e is brebeis</td>
                                    <td>(Sant’Antioco)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b. </td>
                                    <td>sos procos meos e sas arbeghes mias </td>
                                    <td>(Bonarcado)</td>
                                </tr>
                            </table>

                            <p>
                                Hierbei folgt (3a) im Prinzip auch Leporis Regel, nur dass das
                                Possessivadjektiv hier hinter dem ersten Substantiv steht. Allein der
                                Sprecher aus Bonarcado setzt zwei Possessivadjektive.
                            </p>

                            <p>
                                Ein eigenständiges Possessiv<i>pronomen</i> gibt es im Sardischen nicht, so
                                dass <i>Questo cane è il mio/nostro</i> aus dem phonetischen Teil dem
                                Italienischen entsprechend wie in (4a) wiedergegeben wird. Villacidro
                                und Perdasdefogu weichen von den anderen Orten (interessanterweise aber
                                nur in der 1. Person Singular) ab: Der Sprecher aus Perdasdefogu setzt
                                hier keinen Artikel (vgl. (4b)), während der Sprecher aus Villacidro
                                eine Konstruktion mit <i>cosa</i> (siehe hierzu 2.3) verwendet, vgl. (4c):
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(4)</td>
                                    <td>a.</td>
                                    <td><span style={{ fontVariant: "small-caps" }}>Custu cane est su
                                        meu/miu/nostru.</span></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>Custu caleddu est miu.</td>
                                    <td>(Perdasdefogu)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>c.</td>
                                    <td>Custu cãi est cosa mia.</td>
                                    <td>(Villacidro)</td>
                                </tr>
                            </table>

                            <p>
                                Jones (1993: 73) erwähnt die Struktur in (4a) unter dem Stichwort
                                ‚headless NPs‘ (vgl. auch Lepori 2001: 167), nicht aber die in (4b),
                                während Blasco Ferrer (1986: 97) sowohl für Logudoresisch als auch
                                für Campidanesisch beide erwähnt. Ob, und wenn ja in welchen Gebieten,
                                beide Möglichkeiten existieren, bleibt zukünftig durch gezielte
                                Befragungen herauszufinden. Gegen die Annahme, dass die Anwesenheit des
                                Artikels in der italienischen Vorlage das Setzen des Artikels auch im
                                Sardischen begünstigt hat, spricht die Übersetzung von <i>Datemi quello
                                    che è mio</i> in GvS [3], da hier an den meisten Orten, an denen die
                                Informanten eine analoge Struktur verwenden, der Artikel trotz des
                                Fehlens im Italienischen gesetzt wird:
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(5)</td>
                                    <td>a.</td>
                                    <td><span style={{ fontVariant: "small-caps" }}>(totu) su (chi est) su
                                        meu/miu</span></td>
                                    <td>(Macomer, Bonarcado, Nuoro, Laconi, Perdasdefogu, Villacidro)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>totu su ʔi est meu</td>
                                    <td>(Fonni)</td>
                                </tr>
                            </table>


                            <h2><a href="#kap2.2" name="abschn2.2">2.2</a> Verwandtschaftsbezeichnungen</h2>
                            <p>
                                Der erste Satz des <i>Gleichnisses vom verlorenen Sohn (Un anno fa mio
                                    nonno […] raccontò a me e a mia sorella […]</i>) scheint zunächst das
                                zu Beginn von <a href="#abschn2.1" name="kap2.1">2.1</a> bezüglich der Verwandtschaftsbezeichnungen
                                Gesagte zu
                                bestätigen: Ähnlich wie im Italienischen fehlt hier der bestimmte
                                Artikel, so dass das in VIVALDI in diesem Satz am meisten verbreitete
                                Muster wie unter (6) dargestellt lautet:
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(6)</td>
                                    <td><span style={{ fontVariant: "small-caps" }}>giaju</span><sup><a href="#fn12" name="fz12">12</a></sup>
                                        <span style={{ fontVariant: "small-caps" }}>meu/miu – sorre mia/mea</span></td>
                                </tr>
                            </table>

                            <p>
                                Zwei Typen von Abweichungen von der Form in (6) sind zu konstatieren:
                                Für den eigenen Großvater ist die Verwendung des Nomens ohne Artikel
                                und ohne Possessivum in (7a) nach den VIVALDI-Daten in Nuoro, Bonarcado
                                und Milis belegt. Für ‚meine Schwester‘ wählte allein der Sprecher
                                aus Nuoro die Konstruktion Artikel + Nomen (ohne Possessivum), vgl.
                                (7b):
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(7)</td>
                                    <td>a.</td>
                                    <td>jaju (Nuoro) a.' babbai (Bonarcado), a.'' nonnai</td>
                                    <td> (Milis)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>sa carrale</td>
                                    <td>(Nuoro)</td>
                                </tr>
                            </table>

                            <p>
                                Die Struktur (7a), also das Nomen ohne Artikel und Possessivum, ist –
                                wie aus meinen eigenen ASIt-Umfragen zu schließen ist – vielerorts
                                (zumindest im Zentralsardischen) die präferierte Option für die
                                Bezeichnungen der eigenen Eltern und Großeltern, wie auch von Jones
                                (1993: 56) für Lula bestätigt. Für die von mir befragten Sprecher
                                sind die in (6) und (7b) verwendeten Formen zumindest stark markiert;
                                die von mir befragte Sprecherin aus Bitti lehnte <i>*sa manedda</i> als
                                ungrammatisch ab. Vgl. auch Secci (2007: 44): <i>*sa mammai / *mammai mia /
                                    *sa mammai mia; *su babbai; *babbai miu; *su babbai miu</i>. Für den
                                eigenen Vater bestätigt GvS [14] die Verwendung ohne Artikel und
                                Possessivum in Nuoro, Milis und Bonarcado (<i>babbu</i>) sowie in Fonni,
                                Perdasdefogu und Villacidro
                                (<i>babbai</i><sup><a href="#fn13" name="fz13">13</a></sup>); mit
                                Possessivpronomen (<span style={{ fontVariant: "small-caps" }}>babbu
                                    meu/miu</span>) erscheint der Ausdruck hingegen in Ploaghe, Laconi, Arzana,
                                Sant’Antioco, Cagliari. Aufgrund der VIVALDI-Daten würde sich
                                ungefähr ein Bild ergeben, in dem der extreme Süden sowie das
                                Logudoresische nördlich von Macomer regelmäßig das Possessivadjektiv
                                verwendet. Allerdings zeigen die ASIt-Daten in Ossi und Ittiri (beide in
                                der Nähe von Ploaghe) ebenfalls die Verwendung ohne Possessivum (bei
                                <i>babbu, mama</i> und den betreffenden Wörtern für ‚Großmutter‘).
                                Ebenso verwundert, dass der VIVALDI-Sprecher aus Arzana die Struktur
                                ohne Possessivum nicht verwendet, während sie in dem nahegelegenen
                                Baunei von Secci (2007) als regelhaft beschrieben wird. Allerdings
                                zeigen die VIVALDI-Daten in GvS [20] zumindest einen Kontext, in dem die
                                Verwendung mit Possessivum fast überall nicht nur grammatisch ist,
                                sondern sogar die präferierte Option darstellt. Es handelt sich um <i>No,
                                    babbo mio</i>, das an fast allen Orten<sup><a href="#fn14" name="fz14">14</a></sup>
                                als <span style={{ fontVariant: "small-caps" }}>No, babbu meu/miu</span>
                                übersetzt wird. Offenbar ist das Possessivum in der direkten Anrede
                                möglich, wenn es aus affektiven Gründen fokussiert wird.
                            </p>

                            <p>
                                Die ASIt-Umfragen zeigen auch recht deutlich, dass die in den
                                VIVALDI-Daten von dem Sprecher aus Nuoro gewählte Struktur in (7b)
                                eigentlich nicht für die erste, sondern für die dritte Person üblich
                                ist (zumindest in Dorgali, Bitti und Brunella bedeutet <i>su frate</i>
                                durchgehend ‚sein/ihr Bruder‘).<sup><a href="#fn15" name="fz15">15</a></sup> Jones
                                (1993: 44) schreibt hierzu:
                            </p>

                            <p className="longcitation">
                                When the understood possessor is in the third person and anaphoric to
                                some entity prominent in the discourse, typically the subject of the
                                clause, the definite article is normally used without a possessive:
                                <i>Pretu est andatu chin su frate</i> (‘Peter went with his (Peter’s)
                                brother’).
                            </p>

                            <p>
                                Diese Verwendung wird im Gleichnis [3] (<i>il più giovane andò da suo
                                    padre</i>) bestätigt, wo <i>suo padre</i> überall mit
                                <span style={{ fontVariant: "small-caps" }}>su babbu</span>
                                übersetzt wird, vgl. ebenso
                                <span style={{ fontVariant: "small-caps" }}>sos/is figius</span>
                                in [4], in beiden Fällen mit Ausnahme von Cagliari.
                            </p>


                            <h2><a href="#kap2.3" name="abschn2.3">2.3</a> Einige Besonderheiten des Campidanesischen</h2>
                            <p>
                                Wie bereits unter <a href="#abschn2.2" name="kap2.2">2.2</a>, Satz (4c), hier wiederholt als (8a),
                                angemerkt,
                                verwendet der Sprecher aus Villacidro in der Funktion des
                                Possessiv<i>pronomens</i> (hier als Prädikatsnomen) die Konstruktion
                                <i>cosa</i> + Possessivadjektiv. Aber auch in attributiver Verwendung nennt
                                er neben (1b) dieselbe Konstruktion (vgl. (8b)):
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(8)</td>
                                    <td>a.</td>
                                    <td>Custu cãi est cosa mia.</td>
                                    <td>(Villacidro)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>Custu est su cãi cosa mi.</td>
                                    <td></td>
                                </tr>
                            </table>

                            <p>
                                Diese für das Campidanesische bekannte Struktur (vgl. Lepori 2001: 167)
                                wird in GvS [12] von dem Informanten aus Sant’Antioco in der
                                Übersetzung von <i>nel mio campo (inciu campu cosa
                                    mia</i>)<sup><a href="#fn16" name="fz16">16</a></sup>
                                verwendet. In
                                <i>Datemi quello che è mio</i> in GvS [3] (vgl. <a href="#abschn2.1" name="kap2.2">2.1</a>, Bsp. (5))
                                benutzt der
                                Informant aus Sant’Antioco die Konstruktion mit <i>cosa</i> (vgl. (9b)),
                                während der Informant aus Villacidro die Struktur aus (5a) (hier (9a))
                                verwendet.
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(9)</td>
                                    <td>a.</td>
                                    <td>Donai·mi cussu chi est su miu.</td>
                                    <td>(Villacidro)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>Dona·mi·dda su chi est cosa mia.</td>
                                    <td>(Sant’Antioco)</td>
                                </tr>
                            </table>


                            <p>
                                An derselben Stelle ist eine weitere Konstruktion erkennbar, die der
                                Informant aus Cagliari hier verwendet:
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(10)</td>
                                    <td>Donai mi su chi est <i>de mei</i>.</td>
                                    <td>(Cagliari)</td>
                                </tr>
                            </table>


                            <p>
                                Eine Präpositionalphrase mit Personalpronomen anstelle eines
                                Possessivums wird – allerdings für den attributiven Gebrauch – von
                                Lepori (2001: 167) als Strategie zur Vermeidung von Ambiguität
                                angegeben, wie auch bei Jones (1993: 44) für die zentrallogudoresische
                                Varietät von Lula angemerkt ist. Der prädikative Gebrauch wird von
                                Blasco Ferrer (1986: 96), ebenfalls als Disambiguierungsmöglichkeit,
                                genannt. Folglich sollte im Logudoresischen die Struktur nur in der
                                dritten Person vorkommen, so dass
                                <span style={{ fontVariant: "small-caps" }}>su libru suo</span> in <span style={{ fontVariant: "small-caps" }}>su
                                    libru de issu/de
                                    issa</span> disambiguiert werden kann. Im Campidanesischen, das an der
                                2. Person Plural des Personalpronomens Genus markiert, macht auch in diesen
                                Personen die Präpositionalphrase Sinn, was das Beispiel <i>sa lei de
                                    bosatrus</i> ‚Euer (m.) Gesetz‘ im Ggs. zu <i>de bosatras</i> (f.) (Lepori
                                2001: 167) erklärt. Nach Blasco Ferrer (1986: 96) ist diese Verwendung
                                in der 2. Person Plural im Campidanesischen sogar die Regel. Sie wird so
                                auch in den ASIt-Daten (Satz 99) aus Baunei verwendet. In VIVALDI findet
                                sich – allerdings als Höflichkeitsform (für den Vater) – in GvS
                                [20] ein Beleg in Milis (<i>fizu de bosaterus</i><sup><a href="#fn17" name="fz17">17</a></sup>;
                                <i>unu tzeracu de bosaterus</i>).
                                Interessant ist hierbei, dass dieser genau das Gegenteil von dem belegt,
                                was Lepori (2001: 167) anmerkt. Ihm zufolge sollte das Possessivpronomen
                                <i>bostu</i> für die Anrede an <i>eine</i> Person verwendet werden und die PP-Lösung
                                mit dem Personalpronomen für die Anrede an mehrere Personen. Konform zu
                                Leporis Angaben verhalten sich hingegen die Informanten aus Laconi (<i>fixu
                                    ‘ostu / unu de is tzeracos bostos</i>) und Villacidro (<i>fillu bostu / unu
                                        de is servidoris bostus</i>). Die Sprecher aus Arzana und Perdasdefogu
                                benutzen in der Anrede des Vaters das Possessivum der 3. Person Singular
                                (<span style={{ fontVariant: "small-caps" }}>figiu suo</span>), das in
                                Sant’Antioco mit dem speziellen
                                Höflichkeits-Personalpronomen in der 3. Person Singular und der
                                PP-Strategie disambiguiert wird: <i>fillu de vostei / unu de is serbidoris
                                    de vostei</i>.<sup><a href="#fn18" name="fz18">18</a></sup> Im Norden
                                heißt es
                                einheitlich <span style={{ fontVariant: "small-caps" }}>figiu bostru / unu
                                    de sos
                                    tzeracos bostros</span> bzw. <span style={{ fontVariant: "small-caps" }}>unu tzeracu
                                        bostru</span>.<sup><a href="#fn19" name="fz19">19</a></sup> Es
                                bleibt zu bemerken, dass
                                weder für das Beispiel <i>unu connotu de tui</i> (‚un tuo conoscente‘) bei
                                Lepori noch für die Verwendung dieser Struktur in der 1. Person
                                Singular bei dem VIVALDI-Sprecher aus Cagliari in (10)
                                Disambiguierungsgründe in Frage kommen, weil die 1. und 2. Person
                                Singular nicht disambiguiert werden können. Vermutlich handelt es sich
                                eher um eine Fokussierungsstrategie<sup><a href="#fn20" name="fz20">20</a></sup>,
                                wie im Übrigen auch die oben beschriebene Struktur
                                mit <i>cosa</i><sup><a href="#fn21" name="fz21">21</a></sup>.
                            </p>


                            <h1><a href="#abschn3" name="kap3">3</a> Tempora und Modi</h1>

                            <h2><a href="#kap3.1" name="abschn3.1">3.1</a> Anmerkungen zum Formeninventar</h2>
                            <p>
                                Bevor unter <a href="#abschn3.2" name="kap3.2">3.2</a> auf die Verwendung von Tempora und Modi in
                                Bedingungssätzen und in <a href="#abschn3.3" name="kap3.3">3.3</a> auf einige Vergangenheitstempora
                                eingegangen wird, sei zunächst die Präsenz bzw. Ausprägung einiger
                                ausgewählter Tempora und Modi an den VIVALDI-Orten behandelt.
                            </p>

                            <p>
                                Die Sätze 7 und 8 des syntaktischen Teils zeigen das analytische
                                Futur, das überall auf lat. <span style={{ fontVariant: "small-caps" }}>habere</span> + <span
                                    style={{ fontVariant: "small-caps" }}>ad</span> + Infinitiv zurückgeht, so
                                dass an allen VIVALDI-Orten einheitlich folgendes Muster zu beobachten
                                ist:<sup><a href="#fn22" name="fz22">22</a></sup>
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(11)</td>
                                    <td>a.</td>
                                    <td><span style={{ fontVariant: "small-caps" }}>Cras ap’a torrare (a
                                        benner) / ghirare a domo.</span></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td><span style={{ fontVariant: "small-caps" }}>Cando ap’
                                        (a)<sup><a href="#fn23" name="fz23">23</a></sup> esser
                                        betzu, m’ap(o) a comporare/piccare una domo […]</span></td>
                                </tr>
                            </table>

                            <p>
                                Der Konditional I ist in Satz 11 des syntaktischen Teils enthalten; da
                                es sich hier um einen Bedingungssatz handelt (siehe <a href="#abschn3.2" name="kap3.2">3.2</a>), werden an
                                den
                                im Folgenden nicht genannten Orten andere Tempora verwendet. Auch in GvS
                                [8] kann die eine oder andere Konditionalform gefunden werden. Hierbei
                                ist im Norden die bekannte Konstruktion mit Imperfekt-Kurzformen von
                                lat. DEBERE, im Süden, bereits ab Laconi und Arzana in der <i>zona grigia</i>,
                                die Konstruktion mit speziellen Imperfektformen von HABERE + AD deutlich
                                zu erkennen:
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(12)</td>
                                    <td>a.</td>
                                    <td>dimis trabbagliare </td>
                                    <td>(Ploaghe)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>diamus trabballare </td>
                                    <td>(Nuoro)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>c.</td>
                                    <td>diat bìvere</td>
                                    <td>(Bonarcado)</td>
                                </tr>
                            </table>

                            <table className="simple">
                                <tr>
                                    <td>(13)</td>
                                    <td>a.</td>
                                    <td>iaus a tribballare </td>
                                    <td>(Arzana)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>iat agatai </td>
                                    <td>(Laconi, Villacidro)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>c.</td>
                                    <td>iaus a trebballai/trabbalai </td>
                                    <td>(Laconi, Villacidro)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>d.</td>
                                    <td>emus a trabballai </td>
                                    <td>(Cagliari)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>e.</td>
                                    <td>estus<sup><a href="#fn24" name="fz24">24</a></sup> a
                                        trabballai</td>
                                    <td>(Sant’Antioco)</td>
                                </tr>
                            </table>

                            <p>
                                Hierbei zeigen Cagliari und Sant’Antioco in der 1. Person Plural
                                Formen mit <i>e-</i> statt <i>ia-</i><sup><a href="#fn25" name="fz25">25</a></sup>. Der
                                Konditional II erscheint in GvS [8] bei einigen anderen Sprechern:
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(14)</td>
                                    <td>a.</td>
                                    <td>diat aer agatadu </td>
                                    <td>(Macomer)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>iat essi bìviu</td>
                                    <td>(Laconi, Villacidro, Cagliari)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>c.</td>
                                    <td>iat essi agatau</td>
                                    <td>(Cagliari)</td>
                                </tr>
                            </table>


                            <p>
                                Bezüglich der Fortsetzung des lateinischen Perfekts gibt es auf
                                Sardinien mehrere kleinere Rückzugsgebiete, in denen dieses oder Reste
                                davon noch erhalten sind bzw. in der ersten Hälfte des 20. Jahrhunderts
                                noch erhalten waren. Wagner (1938/39: 14) nennt für das Campidanesische
                                das Sulcis, das in VIVALDI durch Sant’Antioco repräsentiert ist. Der
                                Informant verwendet allerdings keine Perfektformen. Zwei andere Gebiete,
                                die Baronia im Nordosten der Insel unterhalb des galluresischen
                                Sprachgebiets sowie die Planargia im Nordwesten unterhalb des westlichen
                                Teils des sassaresischen Sprachgebiets<sup><a href="#fn26" name="fz26">26</a></sup>,
                                sind in VIVALDI nicht erfasst.
                                Nach Wagner (1938/39: 19–21) hat sich darüber hinaus seit dem 16.
                                Jahrhundert eine Perfektform auf <i>-esi</i> herausgebildet (in Analogie zu
                                Verben mit <i>s</i>-Perfekt), die heute auf das Nordlogudoresische begrenzt ist
                                und an einigen Orten eine Variante auf <i>-ei</i> zeigt. Letztere Bildung
                                lässt sich tatsächlich für Ploaghe in VIVALDI im <i>Gleichnis vom
                                    verlorenen Sohn</i> durchgehend beobachten, vgl. z.B. die Formen 3. Person
                                Singular <i>conteit</i> [1], <i>andeit</i> [3],[5], <i>nazeit</i>
                                [3], <i>fatteit</i> [4], <i>se leit</i> [5], <i>viveit</i>
                                [6], <i>ritzeit</i> [7]; 3. Person Plural <i>mandighein, bufein,
                                    cantein</i> [22].
                            </p>

                            <p>
                                Der Konjunktiv Imperfekt lässt sich am besten in GvS [17] beobachten,
                                in dem Konzessivsatz, der mit ‚obwohl‘ (meistens
                                als <span style={{ fontVariant: "small-caps" }}>mancari</span>
                                wiedergegeben) eingeleitet wird. Die aus dem Lateinischen ererbten
                                Formen sind hier nur in Macomer und in Ploaghe zu erkennen. Im Gegensatz
                                zu Macomer hat allerdings der Sprecher aus Ploaghe den Konjunktiv
                                Imperfekt von <span style={{ fontVariant: "small-caps" }}>esser</span>,
                                gefolgt von dessen Partizip Perfekt (also im
                                Prinzip den Konjunktiv Plusquamperfekt) verwendet:
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(15)</td>
                                    <td>a.</td>
                                    <td>mancari sa domo de su babbu <i>esseret</i> meda attesu </td>
                                    <td>(Macomer)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>mancari sa domo de su babbu ch’<i>esseret istada</i> attesu
                                        meda</td>
                                    <td>(Ploaghe)</td>
                                </tr>
                            </table>

                            <p>
                                Die VIVALDI-Sprecher aus Nuoro und Fonni verwenden hingegen nach <i>mancari</i>
                                den Indikativ Imperfekt, ebenso wie die Informanten aus Milis, Arzana,
                                Perdasdefogu und Sant’Antioco. Der Konjunktiv Imperfekt taucht in
                                Bonarcado, 30 km südlich von Macomer, wieder auf, jedoch bereits in der
                                campidanesischen Form, die sich dann sporadisch in dieser Konstruktion
                                noch im Campidano wiederfindet:
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(16)</td>
                                    <td>a.</td>
                                    <td>mancari <i>fessit</i> attesu meda sa domo de su babbu</td>
                                    <td>(Bonarcado)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>anche ci sa ’omo de su babbu <i>fesset</i> aillagru meda</td>
                                    <td>(Laconi)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>c.</td>
                                    <td>mancai sa domu de su babbu (suu) <i>fessit</i> meda attesu</td>
                                    <td>(Villacidro, Cagliari) </td>
                                </tr>
                            </table>

                            <p>
                                In dem Wunschsatz in GvS [15] wird der Konjunktiv Plusquamperfekt –
                                abweichend von der Vorlage – in Fonni und
                                Villacidro<sup><a href="#fn27" name="fz27">27</a></sup> und der
                                Konjunktiv Imperfekt im äußersten Süden (Sant’Antioco, Cagliari)
                                verwendet.<sup><a href="#fn28" name="fz28">28</a></sup>
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(17)</td>
                                    <td>a.</td>
                                    <td>A su mancu <i>èssere pòtiu</i> torrare a domo!</td>
                                    <td>(Fonni)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>A su manch’<i>essi pòtziu</i> torrai anca babbai!</td>
                                    <td>(Villacidro)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>c.</td>
                                    <td>Si a su mancus <i>podessi</i> torrai anch’e is mius!</td>
                                    <td>(Sant’Antioco)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>d.</td>
                                    <td>A su mancu <i>podessi</i> torrai a undi is meus!</td>
                                    <td>(Cagliari)</td>
                                </tr>
                            </table>

                            <p>
                                Wie Pittau (1991: 137, 151) anmerkt, existiert im Logudoresischen in
                                Wunsch- und Konditionalsätzen (zu Letzteren siehe 3.2) der Konjunktiv
                                Imperfekt nur von <span style={{ fontVariant: "small-caps" }}>esser</span>
                                und <span style={{ fontVariant: "small-caps" }}>aer</span>. Bei anderen
                                Verben wird der Konjunktiv
                                Plusquamperfekt verwendet, wie auch in Mensching (2004: 90) erwähnt.
                                Dies erklärt (17a), nicht aber (17b), da Villacidro im campidanesischen
                                Sprachgebiet liegt.
                            </p>


                            <h2><a href="#kap3.2" name="abschn3.2">3.2</a> Bedingungssätze</h2>
                            <p>
                                Der Literatur zum Nuoresischen/Logudoresischen nach kann in beiden
                                Teilen von Bedingungssätzen, die eine unerfüllbare bzw.
                                unwahrscheinliche Bedingung ausdrücken, sowohl in der Apodosis als auch
                                in der Protasis der Konditional I bzw. II stehen, wobei alternativ
                                (wieder in beiden Teilen) das Imperfekt (unerfüllbare/unwahrscheinliche
                                Bedingung der Gegenwart) oder das Plusquamperfekt (unerfüllbare
                                Bedingung der Vergangenheit) erscheint (Mensching 2004: 84, Jones 1993:
                                307f u.a.). Pittau (1991: 151) nennt für erstere noch die Verwendung
                                des Konjunktivs Imperfekt in der Protasis (nur bei esser und aer) mit
                                dem Konditional I in der Apodosis. Blasco Ferrer (1986: 202) bietet eine
                                differenziertere Darstellung, die auch das Campidanesische mit
                                einbezieht. Demnach stellt der Konjunktiv Imperfekt in der Protasis mit
                                dem Konditional in der Apodosis die häufigste Konstellation dar, wobei
                                im Logudoresischen der Konjunktiv Plusquamperfekt anstelle des
                                Konjunktivs Imperfekt bevorzugt wird (siehe auch oben unter <a href="#abschn3.1" name="kap3.1">3.1</a>).
                                Der
                                Konditional und das Imperfekt in beiden Teilen wird von Blasco Ferrer
                                als Alternative genannt, wobei der Konditional von ihm als eher typisch
                                für das Logudoresische charakterisiert wird.
                            </p>

                            <p>
                                Eine unerfüllbare bzw. unwahrscheinliche Bedingung der Gegenwart wurde
                                im syntaktischen Teil von VIVALDI mittels Satz 11 elizitiert, wobei die
                                (hier nachgestellte) Protasis im Passiv steht: <i>Lavoreremmo di più, se
                                    fossimo pagati meglio</i>. Dieser Satz wird sehr heterogen wiedergegeben.
                                Die Konstruktion mit Konditional I in beiden Teilen lässt sich hierbei
                                nicht beobachten;<sup><a href="#fn29" name="fz29">29</a></sup> am
                                häufigsten ist der Konditional I in der Apodosis
                                mit dem Imperfekt in der Protasis:<sup><a href="#fn30" name="fz30">30</a></sup>
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(18)</td>
                                    <td>a.</td>
                                    <td>Noso iaus a trebballai ‘e prus, ci fustis<sup><a href="#fn31" name="fz31">31</a></sup>
                                        pagaus prus bene.</td>
                                    <td>(Laconi)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>Iaus a trabballare ‘e prus, ci fustis pagaus mellus.</td>
                                    <td>(Arzana)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>c.</td>
                                    <td>Iaus a trabballai de prus, si fiaus pagaus mellus.</td>
                                    <td>(Villacidro)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>d.</td>
                                    <td>Estus a trabballai de prus, si fustis pagaus mellus.</td>
                                    <td>(Sant’Antioco)</td>
                                    <tr>
                                        <td></td>
                                        <td>e.</td>
                                        <td>Emus a trabballai de prus, chi si paganta mellus.</td>
                                        <td>(Cagliari)</td>
                                    </tr>
                                </tr>
                            </table>

                            <p>
                                Entgegen der Angabe bei Blasco Ferrer liegen alle diese Orte im
                                campidanesischen Sprachgebiet.<sup><a href="#fn32" name="fz32">32</a></sup> Nuoro
                                und Ploaghe (Option 2)<sup><a href="#fn33" name="fz33">33</a></sup>
                                zeigen ebenfalls der Konditional nur in der Protasis, während in der
                                Apodosis der Indikativ Plusquamperfekt (der eigentlich für die
                                unerfüllbare Bedingung verwendet werden sollte) gesetzt wird
                                (vgl. (19))<sup><a href="#fn34" name="fz34">34</a></sup>. Die Lösung
                                mit Imperfekt in beiden Teilen wird nur in Milis gewählt, wie (20)
                                zeigt.<sup><a href="#fn35" name="fz35">35</a></sup>
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(19)</td>
                                    <td>a.</td>
                                    <td>Diamus trabballare de prus, si fimus istaos pagaos menzus. </td>
                                    <td>(Nuoro)</td>
                                    <tr>
                                        <td></td>
                                        <td>b.</td>
                                        <td>Si nos aian pagadu mezus, dimis trabbagliare de pius. </td>
                                        <td>(Ploaghe)</td>
                                    </tr>
                                </tr>
                            </table>

                            <table className="simple">
                                <tr>
                                    <td>(20)</td>
                                    <td>Tribballajaus<sup><a href="#fn36" name="fz36">36</a></sup> de prus
                                        se fuau pagaus mezus.</td>
                                    <td>(Milis)</td>
                                </tr>
                            </table>

                            <p>
                                Schließlich wird der Satz in Macomer und Ploaghe (Option 1) wie eine
                                unerfüllbare Bedingung der Vergangenheit
                                übersetzt,<sup><a href="#fn37" name="fz37">37</a></sup> wobei der
                                Sprecher aus Ploaghe eine unten noch zu behandelnde Konstruktion mit
                                <span style={{ fontVariant: "small-caps" }}>aer àppidu</span> +
                                Part. wählt:
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(21)</td>
                                    <td>a.</td>
                                    <td>Si nos aian pagadu menzus, aimis tribbagliadu de pius.</td>
                                    <td>(Macomer)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>Si fimis istados pagados mezus, aimis àppidu trabbagliadu de pius.</td>
                                    <td>(Ploaghe)</td>
                                </tr>
                            </table>

                            <p>
                                Die Sprecher in Fonni, Bonarcado und Perdasdefogu benutzen hier die
                                reale Bedingung, mit Präsens und/oder Futur:<sup><a href="#fn38" name="fz38">38</a></sup>
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(22)</td>
                                    <td>a. </td>
                                    <td>Amus a trabballare ‘e prus, si siemus pagaos mengius.</td>
                                    <td>(Fonni)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>Eus a tribbaglare de prus, si s’an a pagare menzus. </td>
                                    <td>(Bonarcado)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>c.</td>
                                    <td>Trabbalgiaus prus chi si pàganta prus.</td>
                                    <td>(Perdasdefogu)</td>
                                </tr>
                            </table>

                            <p>
                                Wahrscheinlich liegt diese große Heterogenität zum Teil am
                                Interpretationsspielraum dieses Satzes, d.h. an den verschiedenen Graden
                                der Wahrscheinlichkeit der Erfüllung von Bedingung bzw. Konsequenz, die
                                hier denkbar sind. Auffälligerweise ist der Konjunktiv Imperfekt bzw.
                                Plusquamperfekt in diesem Satz an keinem Ort
                                belegt.<sup><a href="#fn39" name="fz39">39</a></sup>
                            </p>

                            <p>
                                Im Gegensatz hierzu sind die Ergebnisse für die unerfüllbare
                                Bedingung der Vergangenheit weitaus einheitlicher, wobei für Satz 2 aus
                                dem syntaktischen Teil nur drei Typen erkennbar sind:
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(23)</td>
                                    <td>a.</td>
                                    <td>Si l’aia ischidu, fui ‘ènnidu.<sup><a href="#fn40" name="fz40">40</a></sup></td>
                                    <td>(Macomer)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>Si dd’iu (?) ischìpiu non che fu bènniu.</td>
                                    <td>(Bonarcado)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>c.</td>
                                    <td>Si dd’iu schìpiu, fui bènniu.</td>
                                    <td>(Milis)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>d.</td>
                                    <td>Ci dd’ia scìppiu, fui ‘ènniu. </td>
                                    <td>(Arzana)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>e.</td>
                                    <td>Ci dd’ia iscìppiu, fui ‘ennìu </td>
                                    <td>(Laconi)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>f.</td>
                                    <td>Chi dd’ia scìppiu, fui ‘ènniu. </td>
                                    <td>(Perdasdefogu)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>g.</td>
                                    <td>Chi dd’emmu scìpiu, femmu bennìu.</td>
                                    <td>(Cagliari)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>h.</td>
                                    <td>Si ddu emmu scìppiru, fui benìu.</td>
                                    <td>(Sant’Antioco)</td>
                                </tr>
                            </table>

                            <table className="simple">
                                <tr>
                                    <td>(24)</td>
                                    <td>a.</td>
                                    <td>Si l’aia àppidu ischidu, fia ’ènnidu. </td>
                                    <td>(Ploaghe)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>a.'</td>
                                    <td>Si fimis istados pagados mezus, aìmis àppidu trabbagliadu de pius.</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>Si l’ai’ischiu, fip’istau bènniu.</td>
                                    <td>(Nuoro) </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>c.</td>
                                    <td>Si l’aio iscìpiu, ub’ istau vènniu.</td>
                                    <td>(Fonni)</td>
                                </tr>
                            </table>

                            <table className="simple">
                                <tr>
                                    <td>(25)</td>
                                    <td>Chi dd’essi scìppiu, fia (femu) bennìu.</td>
                                    <td>(Villacidro)</td>
                                </tr>
                            </table>

                            <p>
                                Der am weitesten verbreitete Typ ist hier die in den Grammatiken
                                genannte Option des Indikativ Plusquamperfekt in beiden Teilen (vgl.
                                (23)).<sup><a href="#fn41" name="fz41">41</a></sup> Offenbar eher
                                Nuoresisch (d.h. Nuoro und Fonni), aber mit einem
                                Ausläufer nach Ploaghe,<sup><a href="#fn42" name="fz42">42</a></sup>
                                ist die von Jones (1993: 83) als „double
                                perfective construction“ bezeichnete Konstruktion in (24), eine Art
                                „plus-que-parfait surcomposé“, die nach Jones typischerweise in der
                                Protasis vorkommt, von einigen Sprechern aber auch in der Apodosis
                                akzeptiert wird. Letzteres wird von den VIVALDI-Sprechern in Nuoro und
                                Fonni gewählt, während der Sprecher aus Ploaghe die nach Jones
                                unmarkierte Option (mit dem <i>surcomposé</i> im Hauptsatz) liefert;
                                allerdings zeigt Satz 11 des syntaktischen Teils (vgl. oben, (19b), hier
                                wiederholt als (24a’)) genau dasselbe Muster wie in den anderen beiden
                                Orten. Schließlich verwendet der Sprecher aus Villacidro (vgl. (25)) in
                                der Protasis einen Konjunktiv Plusquamperfekt, mit dem Indikativ
                                Plusquamperfekt in der Apodosis. Dasselbe kann für Bitti (ASIt)
                                beobachtet werden, wobei beide unabhängig voneinander befragten
                                Sprecher ebenfalls in der Protasis den Konjunktiv Imperfekt verwenden.
                                Insgesamt scheint aber diese Option eher selten zu sein.
                                Auffälligerweise wird der Konditional II von den VIVALDI-Sprechern
                                nicht verwendet.<sup><a href="#fn43" name="fz43">43</a></sup>
                            </p>

                            <p>
                                GvS [14] bietet schließlich noch einen gemischten Typ von
                                Bedingungssatz mit einer unerfüllbaren Bedingung der Vergangenheit in
                                der Protasis und der in der Gegenwart nicht eingetroffenen Konsequenz:
                                <i>S’io fossi restato a casa, quanto meglio starei</i>. Auch hier wird der
                                Konditional II nicht verwendet. In der Apodosis mit Gegenwartsbezug
                                erscheint der Konditional I (vgl. (26)), begrenzt auf das
                                campidanesische Gebiet südlich von Laconi (einschließlich; mit
                                Ausnahme von Perdasdefogu: dort Imperfekt, vgl. (27)). Dies ist konform
                                mit den oben unter (18) dargestellten Daten, die im Campidanesischen der
                                Konditional I in der Apodosis zeigen.
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(26)</td>
                                    <td>a.</td>
                                    <td>Ci deo fu istàppiu in domo, cantu mengius ia istai.</td>
                                    <td>(Laconi)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>Chi fia abbarrau in domu, cant’ ia istai mellus.</td>
                                    <td>(Villacidro)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>c.</td>
                                    <td>Si fui abbarrau in domu, cantu emu a istai mellus.</td>
                                    <td>(Sant’Antioco)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>d.</td>
                                    <td>Si deo femu aturau in domu, cantu mellus emu a èssiri.</td>
                                    <td>(Cagliari)</td>
                                </tr>
                            </table>

                            <table className="simple">
                                <tr>
                                    <td>(27)</td>
                                    <td>Chi fu abbarrau in domu, ch’istaia melius.</td>
                                    <td>(Perdasdefogu)</td>
                                </tr>
                            </table>

                            <p>
                                Auffälligerweise wird in Arzana und Milis und oberhalb dieser beiden
                                Orte einheitlich in beiden Teilen der Indikativ Plusquamperfekt
                                verwendet:
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(28)</td>
                                    <td>a.</td>
                                    <td>Si mi fia imbarradu in domo, fia istadu mezus. </td>
                                    <td>(Ploaghe)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>Si fu adduradu in domo, fu istadu menzus. </td>
                                    <td>(Macomer)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>c.</td>
                                    <td>Si fipp’abbarrau in domo, àtteru che goi fipp’istau.</td>
                                    <td>(Nuoro)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>d.</td>
                                    <td>Si minche fu abbarrau in domo, mi fuit cumbèniu.</td>
                                    <td>(Bonarcado)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>e.</td>
                                    <td>Si deo ’ubi istau abbarrau in domo, comente ’ubiistau mengius. </td>
                                    <td>(Fonni)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>f.</td>
                                    <td>Si fu abbarrau in domu, fu istau mezus.</td>
                                    <td>(Milis)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>g.</td>
                                    <td>Ci fu abbarrau in domu, cantu mellus fu istau.</td>
                                    <td>(Arzana)</td>
                                </tr>
                            </table>

                            <p>
                                Hierbei sieht es so aus, als würde das Plusquamperfekt in der Protasis
                                dasselbe Tempus in der Apodosis auslösen, obwohl (zumindest für
                                Ploaghe und Nuoro, wie (19) zeigt) der Konditional in der Apodosis
                                durchaus auch im Norden verwendet wird. Allerdings handelt es sich ja
                                hier trotz des Gegenwartsbezugs um eine unerfüllbare Bedingung, was
                                möglicherweise die Auswahl begründet. Auf jeden Fall legen die
                                VIVALDI-Daten den Gedanken nahe, dass es sich hierbei um eine
                                logudoresische Konstellation handelt, die recht weit nach Süden in die
                                <i>zona grigia</i> hineinreicht.
                            </p>


                            <h2><a href="#kap3.3" name="abschn3.3">3.3</a> Zur Verwendung einiger Vergangenheitstempora</h2>
                            <p>
                                In diesem Abschnitt geht es hauptsächlich um die abgeschlossene
                                Vergangenheit ohne Gegenwartsbezug, die i.d.R. auf Sardinien mit dem
                                zusammengesetzten Perfekt ausgedrückt wird und somit, ähnlich wie in
                                Norditalien und im gesprochenen Französisch, mit der (abgeschlossenen)
                                Vergangenheit <i>mit</i> Gegenwartsbezug zusammenfällt. Nur in Ploaghe wird
                                die abgeschlossene Vergangenheit ohne Gegenwartsbezug noch mit dem
                                „historischen Perfekt“ (vgl. <a href="#abschn3.1" name="kap3.1">3.1</a>) ausgedrückt, dessen Formen an
                                allen anderen VIVALDI-Punkten verschwunden sind. So wird der Satz
                                <i>Sì – rispose il contadino – ma […]</i> aus GvS [10] in Ploaghe wie
                                in (29a), aber anderswo mehrheitlich nach dem Muster in (29b)
                                wiedergegeben:
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(29)</td>
                                    <td>a.</td>
                                    <td>„Emmo“, repondeit su massaju.</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td><span style={{ fontVariant: "small-caps" }}>„Eja“/„Emmo“/„Si“ (li/ddi)
                                        at rispostu su massaju.</span></td>
                                </tr>
                            </table>

                            <p>
                                Die Option (29b) ist in Macomer, Fonni, Laconi, Perdasdefogu zu
                                beobachten.<sup><a href="#fn44" name="fz44">44</a></sup> Hingegen wird
                                auffälligerweise von den Informanten aus Nuoro, Bonarcado und
                                Villacidro das Plusquamperfekt,
                                <span style={{ fontVariant: "small-caps" }}>aiat<sup><a href="#fn45" name="fz45">45</a></sup>
                                    rispostu</span>, verwendet. In
                                Nuoro ist dies auch bei anderen Verben regelmäßig zu beobachten
                                (z.B. <i>aiat contau</i> [1], <i>aiat fattu</i> [4], <i>s’aiat
                                    colau sas dies</i> [6], <i>fit abbarrau</i> [7] – aber
                                ibidem: <i>sinch’at gastau –, aiat pessau</i> [16]; vgl. hierzu
                                die Transkription des Gleichnisses im <a href="#anh3" name="anhang3">Anhang III</a>). An den
                                anderen genannten Orten taucht das Plusquamperfekt in dieser
                                Funktion des öfteren auf; Bonarcado: <i>aiat fattu</i>
                                [4], <i>aiat bìviu</i> [6], <i>fuit abbarrau und ch’aiat
                                    bogau</i> [7], <i>aiat pensau</i> [16]. Villacidro: <i>iat
                                        contau</i> [1], <i>iat bìviu</i> [6], <i>iat spèndiu, fiat
                                            abbarrau</i> [7], <i>iat pensau</i> [16]. Auch der Sprecher
                                aus Cagliari benutzt gelegentlich das Plusquamperfekt,
                                vgl. <i>iat contau</i> [1], <i>iat spèndiu</i> [7], meistens
                                aber das historische Präsens. Die genannte Verwendungsweise des
                                Plusquamperfekts wurde für die Varietät der Stadt Nuoro in
                                Mensching (2004: 69) angemerkt:
                            </p>

                            <p className="longcitation">
                                Neben seiner eigentlichen Funktion, die Vorzeitigkeit zu Perfekt und
                                Imperfekt auszudrücken, kann das nuoresische Plusquamperfekt auch als
                                historisches Perfekt (wie das ital. „passato remoto“ oder das frz.
                                „passé simple“) verwendet werden.
                            </p>

                            <p>
                                Die VIVALDI-Daten erlauben nun einerseits, dies für drei andere Orte zu
                                bestätigen, und lassen andererseits, da die Sätze mit den betreffenden
                                Verbformen in einen narrativen Text eingebettet sind, genauere
                                Aufschlüsse über die Systematik dieser Verwendung zu. Als Beispiel
                                hierfür sei nur genannt, dass man direkt anhand von GvS [1] zeigen
                                kann, dass das Plusquamperfekt nicht unsystematisch mit dem Perfekt
                                konkurriert:
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(30)</td>
                                    <td>a.</td>
                                    <td>Jaju, chi eris <i>at fattu</i> ottant’annos, a mime e a sa
                                        carrale <i>aiat contau</i> cust’istòria.</td>
                                    <td>(Nuoro)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>Un’annu fait, jaju miu, chi (?) eri seru (?) <i>at cumpriu</i>
                                        ottant’annus, <i>iat contau</i> a mei e a sorri mia custu contu.</td>
                                    <td>(Villacidro)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>c.</td>
                                    <td>Un’annu fai, nonnu miu, chi ari seru <i>at cumpriu</i>
                                        ott’ant’annus, <i>iat contau</i> a mei e a sorri mia custa
                                        storia.</td>
                                    <td>(Cagliari)</td>
                                </tr>
                            </table>

                            <p>
                                Die unmittelbar zurückliegende Vergangenheit bzw. Vergangenheit mit
                                Gegenwartsbezug in dem Relativsatz (vgl. das Adverb ‚gestern‘) wird
                                hier durch das zusammengesetzte Perfekt ausgedrückt, während die
                                entferntere Vergangenheit im Matrixsatz (‚vor einem Jahr‘) durch das
                                Plusquamperfekt realisiert wird. Dies entspricht in Ploaghe genau dem
                                Kontrast zwischen analytischem und synthetischem Perfekt:
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(31)</td>
                                    <td>Un’annu commo, giaiu meu, chi deris <i>at lòmpidu</i>
                                        ottant’annos, mi <i>conteit</i> a mie e a sorre mia custu
                                        contadu.</td>
                                    <td>(Ploaghe)</td>
                                    <td></td>
                                </tr>
                            </table>

                            <p>
                                Hierbei handelt es sich um eine Funktionsverschiebung, in der offenbar
                                das Plusquamperfekt die durch den Wegfall des lateinischen Perfekts
                                freigewordene Funktion übernommen hat. Es lässt sich zumindest anhand
                                der VIVALDI-Daten keine diatopisch bestimmte Verteilung ausmachen,
                                sondern das Phänomen scheint punktuell sowohl im Norden als auch im
                                Süden aufzutreten. Es wäre zukünftig zu untersuchen, ob die in 3.2
                                beobachtete Herausbildung von <i>surcomposé</i>-Formen sowie das
                                Setzen des Plusquamperfekts anstelle des Imperfekts in
                                Bedingungssätzen hiermit zusammenhängt.
                            </p>


                            <h1><a href="#abschn4" name="kap4">4</a> Anmerkungen zur linken Satzperipherie</h1>

                            <h2><a href="#abschn4.1" name="kap4.1">4.1</a> Komplementierer</h2>
                            <p>
                                Die linke Satzperipherie bildet spätestens seit der Arbeit von Rizzi
                                (1997) ein umfangreiches Arbeitsgebiet innerhalb der Syntaxforschung,
                                insbesondere auch der romanischen Sprachen. Zum Sardischen vgl. hierzu
                                Mensching/Remberger (2010a, b), Cruschina/Remberger (2009) u.a.
                                (insbes. Fokus- und Fragekonstruktionen) sowie Damonte (2006) zu den
                                Komplementierern im Sardischen, auf die hier zunächst eingegangen sei
                                (zu Fokus- und Fragekonstruktionen siehe dann <a href="#abschn4.2" name="kap4.2">4.2</a>).
                            </p>

                            <p>
                                Bereits Wagner (1951, siehe 1997: 326–328) berichtet über die
                                Existenz zweier nebensatzeinleitender Konjunktionen <i>ca</i>
                                und <i>chi</i>, einer Parallele zu ähnlichen Systemen in
                                Süditalien,<sup><a href="#fn46" name="fz46">46</a></sup>
                                wobei Wagners Darstellung hauptsächlich darauf abzielt, zu zeigen,
                                dass <i>ca</i> die aus der Vulgata bekannte Verwendung von QUIA zur
                                Einleitung der indirekten sowie auch z.T. der direkten Rede
                                fortsetzt. Bezüglich der heutigen Distribution dieses Systems sowie
                                auch der genauen Unterscheidung zwischen der Verwendung von <i>ca</i>
                                und <i>chi</i> entnimmt man dieser kurzen Darstellung praktisch
                                nichts. Es entsteht vielmehr der Eindruck, als würde <i>ca</i> immer
                                stärker durch <i>chi</i> ersetzt bzw. mit diesem verwechselt, was
                                insbesondere für die <i>dialetti campidanesi rustici</i> behauptet
                                wird, die zudem auch noch <i>ca</i> als Relativpronomen
                                verwenden. Interessanterweise bietet Wagner ein Beispiel für <i>ca</i>
                                aus einer <i>novellina bittese</i>, während heute nach den
                                ASIt-Umfragen zumindest in der Stadt Bitti selbst nur <i>chi</i> verwendet
                                wird (vgl. Damonte 2006). In der Tat lautet der Komplementierer heute
                                im Logudoresischen fast überall nur <i>chi</i>, während im Campidanesischen
                                eine Opposition von <i>ca</i> und <i>chi</i> verbreitet ist. Der
                                südlichste bisher in der Forschung berücksichtigte
                                (zentral-)logudoresische Ort, an dem diese Opposition belegt ist, ist
                                Dorgali. Die diesbezüglich in Manzini/Savoia enthaltenen Daten konnten
                                im Rahmen meiner eigenen ASIt-Umfrage bestätigt und erweitert werden.
                                Relikthaft ist <i>ca</i> in Lula (Jones 1993) und Orgosolo (ASIt)
                                belegt.
                            </p>

                            <figure className="imageleft">
                                <p style={{ width: "144px" }}><a href="#b4" name="abb4">Karte 4</a>:
                                    Komplementierer <b>ca</b> und <b>chi</b> im Sardischen
                                </p>
                                <a href="images/gmensching/sardinien-3.jpg" rel="lightbox" title="Karte 4: Komplementierer <i>ca</i> und <i>chi</i> im
                          Sardischen nach Manzini/Savoia (2005), aus
                          Kampmann (2010: 54)">
                                    <img src="images/gmensching/sardinien-3_small.jpg" width="144" height="237" alt="Karte 4: Komplementierer ca und chi im
                                         Sardischen nach Manzini/Savoia (2005), aus
                                         Kampmann (2010: 54)" />
                                </a>
                            </figure>



                            <p>
                                Nach Blasco Ferrer (1986: 195f.) wird <i>ca</i> im Campidanesischen nach <i>verba
                                    dicendi, sentiendi e putandi</i> und <i>chi</i> nach <i>verba
                                        timendi</i> und volitiven
                                Verben gesetzt. Während dies für Baunei (ASIt) nur tendenziell
                                bestätigt werden kann (hier wird zumindest z.T. die bereits von Wagner
                                konstatierte Tendenz zur Verwechselung belegt, vgl. Damonte 2006) ist
                                das System bei den von mir befragten Sprechern aus Dorgali völlig
                                stabil und zeigt eine eindeutige Korrespondenz von <i>ca</i> und Indikativ
                                sowie <i>chi</i> und Konjunktiv.
                                <a href="#abb4" name="b4">Karte 4</a>
                                zeigt die von Kampmann (2010: 54) nach den Daten von Manzini/Savoia
                                (2005: 1, 452–469) angefertigte Karte, in der die schraffierten
                                Gebiete den Orten entsprechen, an denen dieses System bekannt ist,
                                während für die gepunkteten Gebiete die ausschließliche Verwendung
                                von <i>chi</i> belegt ist:
                            </p>

                            <p>
                                Dass Laconi (Punkt 36) zu dem <i>ca/chi-</i>Gebiet gehört, kann aufgrund des
                                Satzes <i>Non sapevo che è morto</i> aus dem phonetischen Teil in VIVALDI
                                (vgl. (32)) im Kontrast zu den Sätzen 9 und 10 des syntaktischen Teils
                                (<i>Vuoi che io me ne vada?</i> / <i>È impossibile che io abbia detto questo</i>)
                                (vgl. (33)) bestätigt werden. Mit Fonni ist in demselben Satzpaar in
                                VIVALDI ein Ort direkt oberhalb der in der Einführung genannten
                                Isoglosse für den bestimmten Artikel belegt, der noch im
                                zentrallogudoresischen Sprachgebiet gelegen ist und der diese
                                Unterscheidung ebenfalls hat. Darüber hinaus kann <i>ca</i>
                                vs. <i>chi</i> auch für Arzana belegt werden:
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(32)</td>
                                    <td>a.</td>
                                    <td>No issio <i>ʔa</i> ’udi mortu.</td>
                                    <td>(Fonni)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>No iscia <i>ca</i> fut mortu.</td>
                                    <td>(Laconi)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>c.</td>
                                    <td>Non dd’iscia <i>ca</i> est mortu.</td>
                                    <td>(Arzana)</td>
                                </tr>
                            </table>

                            <table className="simple">
                                <tr>
                                    <td>(33)</td>
                                    <td>a. </td>
                                    <td>Boles <i>ʔi</i> deo mi che ande?</td>
                                    <td>(Fonni)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>a.'</td>
                                    <td>No est possibile <i>ʔi</i> deo appa nau ?ustu.</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b. </td>
                                    <td>Boles <i>ci</i> deo mi nd’andi?</td>
                                    <td>(Laconi)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.'</td>
                                    <td>No est possibili <i>ci</i> deo eppi nau custu.</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>c. </td>
                                    <td>‘Oles <i>ci</i> mi nd’andi?</td>
                                    <td>(Arzana)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>c.'</td>
                                    <td>Est impossibili <i>ci</i> appa nau custu.</td>
                                    <td></td>
                                </tr>
                            </table>

                            <p>
                                Wie man sieht, korreliert hier <i>ca</i> mit dem Indikativ
                                und <i>chi</i> mit dem Konjunktiv. In Fonni und Laconi
                                steht <i>chi</i> folgerichtig auch nach
                                <span style={{ fontVariant: "small-caps" }}>bastat</span>
                                (‚es reicht‘) (GvS [11]):
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(34)</td>
                                    <td>a.</td>
                                    <td>Bastat <i>ʔi</i> deo non morgia.</td>
                                    <td>(Fonni)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>Bastat <i>ci</i> deo non mroxa.</td>
                                    <td>(Laconi)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>c.</td>
                                    <td>Bastat <i>chi</i> non morgiu. (?)</td>
                                    <td>(Arzana)</td>
                                </tr>
                            </table>

                            <p>
                                Hingegen fällt in (34c) – wenn ich die Endung richtig höre – auf,
                                dass der Sprecher aus Arzana zwar die Konjunktion <i>chi</i> verwendet,
                                allerdings zusammen mit dem Indikativ. Darauf, dass das System zumindest
                                für diesen Sprecher aus
                                Arzana<sup><a href="#fn47" name="fz47">47</a></sup>
                                nicht stringent verwendet wird, deutet
                                auch GvS [21] hin, in welchem <i>ca</i> nach ‚wollen‘ und mit Konjunktiv
                                verwendet wird, im Kontrast zu den anderen beiden
                                Orten:<sup><a href="#fn48" name="fz48">48</a></sup>
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(35)</td>
                                    <td>a.</td>
                                    <td>poite ‘ollu <i>ca</i> tottus facant festa</td>
                                    <td>(Arzana) </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>poite <i>ʔa</i><sup><a href="#fn49" name="fz49">49</a></sup>
                                        vogio <i>ʔi</i> totus ʔaʔan ‘esta</td>
                                    <td>(Fonni)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>c.</td>
                                    <td>poita ‘oxo <i>ci</i> tottus fatzaus festa</td>
                                    <td>(Laconi)</td>
                                </tr>
                            </table>

                            <p>
                                Neben den genannten Orten ist <i>ca</i> in VIVALDI auch in Perdasdefogu belegt.
                                Der Informant verwendet nach ‚wollen‘ einmal <i>ca</i>, und zwar mit dem
                                Indikativ<sup><a href="#fn50" name="fz50">50</a></sup>
                                und ein anderes Mal <i>chi</i> mit dem Konjunktiv. Nach <i>non podit
                                    essi</i> erscheint hier interessanterweise überhaupt kein Komplementierer:
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(36)</td>
                                    <td>a. </td>
                                    <td>‘Olis <i>ca</i> mi nd’andu? </td>
                                    <td>(Perdasdefogu)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>poita ‘olgiu <i>chi</i> facant festa tottus</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>c.</td>
                                    <td>Non podit essi &empty; appa nau custu.</td>
                                </tr>
                            </table>

                            <figure className="imageright">
                                <p style={{ width: "146px" }}><a href="#b5" name="abb5">Karte 5</a>:
                                    Komplementierer <b>ca</b>/<b>chi</b>: Modifikation von
                                    <a href="#abb4" name="b4">Karte 4</a>
                                </p>
                                <a href="images/gmensching/sardinien-4.jpg" rel="lightbox"
                                    title="Karte 5: Komplementierer <i>ca</i>/<i>chi</i>: Modifikation von Karte 4">
                                    <img src="images/gmensching/sardinien-4_small.jpg" width="146" height="245" alt="Karte 5: Komplementierer
		                         ca/chi: Modifikation von Karte 4" />
                                </a>
                            </figure>
                            <p>
                                An allen anderen Orten lautet der
                                Komplementer <i>chi</i>.<sup><a href="#fn51" name="fz51">51</a></sup>
                                <a href="#abb4" name="b4">Karte 4</a> kann demnach mit
                                Hilfe der VIVALDI- und ASIt-Punkte wie in <a href="#abb5" name="b5">Karte 5</a> dargestellt modifiziert
                                werden.
                            </p>

                            <p>
                                Vorbehaltlich von Datenerhebungen an anderen Orten sieht es nun so aus,
                                dass im zentrallogudoresischen Sprachgebiet eine Linie, die Fonni und
                                Dorgali verbindet, die Isoglosse bildet, wobei westlich dieser Isoglosse
                                Bitti und Nuoro schon zum <i>chi</i>-Gebiet gehören.
                            </p>

                            <p>
                                In einem Teil der Orte, die die <i>ca/chi-</i>Unterscheidung kennen, darunter
                                auch Laconi, wird nach Manzini/Savoia (1, 452–469) <i>ca</i> auch als
                                Komplementierer in Relativsätzen
                                verwendet,<sup><a href="#fn52" name="fz52">52</a></sup> allerdings nur
                                in appositiver Funktion, während in restriktiven Relativsätzen der
                                ansonsten generalisierte Komplementierer <i>chi</i> eintritt (vgl. auch
                                Kampmann 2010: 56). Dies kann für Laconi auch in VIVALDI bestätigt
                                werden, vgl. die Beispiele in (37) im Kontrast zu (38) (aus GvS [1], [4]
                                und [14]):
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(37)</td>
                                    <td>a.</td>
                                    <td>ajaju meu, <i>ca</i> arisero at fattu ottant’annos</td>
                                    <td>(Laconi)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>su becciu, <i>ca</i> ddi boliat bene meda</td>
                                    <td></td>
                                </tr>
                            </table>

                            <table className="simple">
                                <tr>
                                    <td>(38)</td>
                                    <td>a.</td>
                                    <td>at fattu su <i>ci</i> cuddu dd’at pediu</td>
                                    <td>(Laconi)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>unu procu grassu <i>ci</i> pappada su randi</td>
                                    <td></td>
                                </tr>
                            </table>

                            <p>
                                In Perdasdefogu ist der Vokal des Komplementierers in den hier
                                relevanten Relativsätzen elidiert, so dass nicht entschieden werden
                                kann, ob <i>chi</i> oder <i>ca</i> zugrunde liegt. Ähnlich verhält es
                                sich meistens in Arzana, wo allerdings in einem Fall deutlich ca zu
                                hören ist:
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(39)</td>
                                    <td>su giovanottu, <i>ca</i> fut apodrando·si cun tuttu duas manus a
                                        sa sinistra de su babbu</td>
                                    <td>(Arzana)</td>
                                </tr>
                            </table>


                            <p>
                                Eindeutig ist in GvS [1] eine <i>ca/chi</i>-Unterscheidung noch in
                                Sant’Antioco zu hören:
                            </p>
                            <table className="simple">
                                <tr>
                                    <td>(40)</td>
                                    <td>Su beciu <i>ca</i> ddu stimabat mera, forcis ’incias (?) troppu, a is
                                        filixeddus ari fattu su <i>chi</i> su fillu ari domandau a issu […]</td>
                                    <td>(Sant’Antioco)</td>
                                </tr>
                            </table>

                            <p>
                                Da Sant’Antioco jedenfalls nach unseren Ergebnissen nicht zum
                                <i>ca/chi-</i>Gebiet in Bezug auf Komplementsätze gehört
                                (vgl. <a href="#abb5" name="b5">Karte 5</a>),
                                scheint es also zumindest einen Ort zu geben, an dem die
                                <i>ca/chi</i>-Unterscheidung in Relativsätzen, jedoch nicht in
                                Komplementsätzen zu finden ist. Umgekehrt kennt Dorgali nach
                                Manzini/Savoia (2005) sowie den ASIt-Daten eine Unterscheidung zwischen
                                <i>ca</i> vs. <i>chi</i> in Komplementsätzen, aber nicht in
                                Relativsätzen. Auch in den anderen zentrallogudoresischen Orten, in
                                denen zumindest Reste des <i>ca/chi</i>-Systems für Komplementsätze
                                belegt sind (Lula, Orgosolo), wird
                                <i>ca</i> offenbar nicht als Relativpronomen verwendet, so dass dieses
                                Phänomen nicht über das campidanesische Sprachgebiet hinausreicht. So
                                ist auch in Fonni in VIVALDI in allen Fällen, in denen der Sprecher
                                appositive Relativsätze verwendet, eindeutig <i>chi</i> zu hören.
                            </p>



                            <p>
                                Schließlich wird <i>chi</i> bekannterweise im Campidanesischen anstelle von
                                <i>si</i> als Konjunktion in Konditionalsätzen vorgezogen (vgl. z.B. Jones
                                1993: 249, 305). In Manzini/Savoia (2005: 1, 452–469) entsteht der
                                Eindruck, dass dies an fast allen Orten der Fall ist, die auch <i>ca</i> als
                                Relativpronomen kennen. Auch hier ist also eine nördliche zentrale Zone
                                (Allai, Laconi, Orroli, Punkte 31, 36 u. 38 in den
                                Karten
                                <a href="#abb4" name="b4">4</a> u. <a href="#abb5" name="b5">5</a>) zu
                                erkennen, die in der <i>zona grigia</i> und leicht südlich davon
                                situiert ist, sowie eine ebenfalls zentral gelegene südcampidanesische
                                Zone (Siliqua und Settimo, Punkte 42 u. 43). Dieses Phänomen ist
                                allerdings auch in dem ASIt-Fragebogen aus Baunei deutlich zu erkennen
                                (vgl. Damonte 2006: 84–86), was zeigt, dass es sich innerhalb
                                der <i>zona grigia</i> bis zur Ostküste erstreckt. Dies kann durch den
                                VIVALDI-Punkt Arzana nochmals bestätigt werden, der
                                eindeutig <i>chi</i> hat. Die VIVALDI-Daten (vgl.
                                <a href="#abschn3.2" name="kap3.2">Abschn. 3.2</a>) zeigen weiterhin, dass Bonarcado und Milis im Westen
                                der
                                <i>zona grigia</i> nicht mehr zu diesem Gebiet gehören, also hier die
                                Konjunktion <i>si</i> verwenden. Für Laconi bestätigt auch VIVALDI die
                                Zugehörigkeit zu diesem Gebiet. Der südlichste Punkt dieser
                                nördlichen Zone ist bei Manzini/Savoia (2005) Orroli; VIVALDI zeigt,
                                dass sich das Phänomen auf ungefähr gleicher Höhe noch bis nach
                                Perdasdefogu erstreckt. Auch die südliche Zone erweist sich aufgrund
                                der VIVALDI-Daten als weitaus größer als bei Manzini/Savoia (2005)
                                erkennbar, denn auch Villacidro, nordwestlich von Siliqua und Cagliari
                                ganz im Süden haben <i>chi</i>. Villacidro und Cagliari nehmen in den
                                VIVALDI-Daten allerdings eine Sonderstellung ein, da von den drei
                                untersuchten Sätzen jeweils in einem Falle <i>si</i> verwendet wird. Die
                                Gründe dafür können hier nicht untersucht werden. Im Folgenden seien
                                die bereits in <a href="#abschn3.2" name="kap3.2">3.2</a> bei der Darstellung der Bedingungssätze
                                verwerteten
                                Daten der genannten Orte noch einmal zusammengestellt:
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(41)</td>
                                    <td>a.</td>
                                    <td><i>Ci</i> dd’ia scìppiu, fui ’ènniu. </td>
                                    <td>(Arzana)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>Iaus a trabballare ’e prus, <i>ci</i> fustis pagaus mellus.</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>c.</td>
                                    <td><i>Ci</i> fu abbarrau in domu, cantu mellus fu istau.</td>
                                    <td></td>
                                </tr>
                            </table>

                            <table className="simple">
                                <tr>
                                    <td>(42)</td>
                                    <td>a.</td>
                                    <td><i>Ci</i> dd’ia iscìppiu, fui ’ennìu. </td>
                                    <td>(Laconi) </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>Noso iaus a trebballai ’e prus, <i>ci</i> fustis pagaus prus bene.</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>c.</td>
                                    <td><i>Ci</i> deo fu istàppiu in domo, cantu mengius ia istai. </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>(43)</td>
                                    <td>a.</td>
                                    <td><i>Chi</i> dd’ia scìppiu, fui ’ènniu. </td>
                                    <td>(Perdasdefogu)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>Trabbalgiaus prus <i>chi</i> si pàganta prus.</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>c.</td>
                                    <td><i>Chi</i> fu abbarrau in domo, ch’istaia melius. </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>(44)</td>
                                    <td>a.</td>
                                    <td><i>Chi</i> dd’emmu scìpiu, femmu bennìu. </td>
                                    <td>(Cagliari) </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>Emus a trabballai de prus, <i>chi</i> si pagànta mellus.</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>c.</td>
                                    <td><i><u>Si</u></i> deo femu aturau in domo, cantu mellus emu a essiri. </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>(45)</td>
                                    <td>a.</td>
                                    <td><i>Chi</i> dd’essi scìppiu fia (femu) bennìu. </td>
                                    <td>(Villacidro) </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>Iaus a trabballai de prus, <i><u>si</u></i> fiaus pagaus mellus.</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>c.</td>
                                    <td><i>Chi</i> fia abbarrau in domo, cant’ ia istai mellus.</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>

                            <h2><a href="#kap4.2" name="abschn4.2">4.2</a> Fokus- und Fragekonstruktionen</h2>
                            <p>
                                Neben den Komplementierern ist die linke Peripherie im Sardischen noch
                                aufgrund der Präsenz einer linksperipheren generalisierten
                                Fokusposition interessant (vgl. Mensching/Remberger 2010a, b), die sich
                                maßgeblich von der im Italienischen auf Kontrastfokus beschränkten
                                Struktur (vgl. Rizzi 1997) unterscheidet. Diese Struktur kommt in den
                                informationsstrukturell nicht bestimmbaren isolierten Aussagesätzen im
                                syntaktischen Teil nicht vor und ist auch im <i>Gleichnis vom verlorenen
                                    Sohn</i> selten, vermutlich weil die Sprecher sich allzusehr an der
                                Wortfolge der italienischen Vorlage orientieren. Gleich mehrere
                                Beispiele bietet allerdings der Sprecher aus Bonarcado in GvS [20]:
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(46)</td>
                                    <td>a.</td>
                                    <td>[<span style={{ fontVariant: "small-caps" }}><sub>foc</sub></span> Troppu malu] seu stèttiu.</td>
                                    <td>(Bonarcado)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>[<span style={{ fontVariant: "small-caps" }}><sub>foc</sub></span> Troppu mannos] sun sos peccados meos
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>c.</td>
                                    <td>[<span style={{ fontVariant: "small-caps" }}><sub>foc</sub></span> Unu tzeracu] app’a esser.</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>

                            <p>
                                Besonders häufig kommt diese Struktur, wie in Mensching/Remberger
                                (2010b) angemerkt, in Entscheidungsfragen vor, was auch im Gleichnis in
                                der Übersetzung von <i>Sei contento?</i> (GvS [12]), mit der besonders
                                charakteristischen Bewegung des Partizips in die Fokusposition,
                                zumindest in vier Orten bestätigt werden kann:
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(47)</td>
                                    <td>a.</td>
                                    <td><span style={{ fontVariant: "small-caps" }}>Cuntentu ses?</span></td>
                                    <td>(Ploaghe, Nuoro, Perdasdefogu)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>Allergu ses?</td>
                                    <td>(Bonarcado)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>

                            <p>Die Sprecher fast aller anderen
                                Orte<sup><a href="#fn53" name="fz53">53</a></sup> verwenden die
                                italienische Wortfolge, die im Sardischen ebenfalls grammatisch ist
                                (<span style={{ fontVariant: "small-caps" }}>Ses cuntentu?</span>). Die
                                Informantin aus Macomer benutzt in diesem Satz sowie in Satz 9 des
                                syntaktischen Teils<sup><a href="#fn54" name="fz54">54</a></sup> die
                                bekannte satzinitiale Fragepartikel <i>a</i> (Mensching/Remberger
                                2010a, b):
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(48)</td>
                                    <td>a. </td>
                                    <td><i>A</i> ses cuntentu?</td>
                                    <td>(Macomer)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b. </td>
                                    <td><i>A</i> cheres chi mi ch’ande?</td>
                                    <td></td>
                                </tr>
                            </table>

                            <p>
                                Dieselbe Struktur ist für Macomer sowie auch für Ploaghe in GvS [9]
                                belegt:
                            </p>
                            <table className="simple">
                                <tr>
                                    <td>(49)</td>
                                    <td>a.</td>
                                    <td><i>A</i> tenides bisonzu de unu teracu?</td>
                                    <td>(Macomer)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td><i>A</i> nd’azis bisonzu de unu teracu?</td>
                                    <td>(Ploaghe)</td>
                                </tr>
                            </table>

                            <p>
                                Während die Interrogativsatzstruktur mit Fokusbewegung nicht auf eines
                                der beiden größeren Varietätengebiete beschränkt ist, ist von der
                                Fragepartikel <i>a</i> bekannt, dass sie im Campidanesischen nicht
                                vorkommt, so dass sie im Süden auch nicht zu erwarten ist.
                            </p>

                            <p>
                                In Nuoro und Perdasdefogu ist in VIVALDI eine weitere Möglichkeit der
                                Bildung von Entscheidungsfragen belegt, nämlich die Verwendung
                                von <i>itte</i> (eigentlich das Interrogativpronomen ‚was‘) als
                                Fragepartikel:<sup><a href="#fn55" name="fz55">55</a></sup>
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(50)</td>
                                    <td>a.</td>
                                    <td><i>Itte</i> azes bisonzu de unu teraccu?</td>
                                    <td>(Nuoro)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>b.</td>
                                    <td>E <i>itte</i> tenies bisongiu de unu seracu?</td>
                                    <td>(Perdasdefogu)</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>

                            <p>
                                Im Gegensatz zu <i>a</i> ist also <i>itte</i> als Fragepartikel auch im
                                Campidanesischen vorhanden. Schließlich verwendet der Sprecher aus
                                Bonarcado noch eine verneinte Spaltsatzfrage:
                            </p>

                            <table className="simple">
                                <tr>
                                    <td>(51)</td>
                                    <td>No <i>est chi</i> s’at bisonzu de unu tzeracu?</td>
                                    <td>(Bonarcado)</td>
                                    <td></td>
                                </tr>
                            </table>

                            <p>
                                Alle anderen Orte zeigen auch hier die Wortstellung des Aussagesatzes
                                (Intonationsfrage):
                            </p>
                            <table className="simple">
                                <tr>
                                    <td>(52)</td>
                                    <td><span style={{ fontVariant: "small-caps" }}>Tenies
                                        bisongiu<sup><a href="#fn56" name="fz56">56</a></sup> de unu
                                        tzeracu/serbidore?</span></td>
                                    <td>(Fonni, Milis, Arzana, Laconi, Villacidro, Cagliari)</td>
                                    <td></td>
                                </tr>
                            </table>

                            <p>
                                Insgesamt sind alle bisher für das Sardische bekannten Konstruktionen
                                für Entscheidungsfragen in VIVALDI belegt. Über die Diatopik kann hier
                                nicht besonders viel ausgesagt werden, allenfalls lässt sich
                                feststellen, dass tendenziell die Intonationsfrage im Campidanesischen
                                häufiger ist.
                            </p>


                            <h1><a href="#abschn5" name="kap5">5</a> Zusammenfassung und Ausblick</h1>
                            <p>
                                Die vorausgehenden Ausführungen zu einzelnen Phänomenbereichen der
                                sardischen Syntax zeigen, dass die im <i>Vivaio Acustico delle Lingue e dei
                                    Dialetti d’Italia</i> bisher explorierten Orte auf Sardinien, die das
                                Sardische im engeren Sinne repräsentieren, sowie auch die online
                                verfügbaren Daten selbst wichtige Beiträge zur Erforschung der
                                sardischen Syntax liefern können. Die relativ kleine Anzahl von Stimuli
                                im syntaktischen Teil kann durch einzelne phrasen- bzw. satzhafte Daten
                                des phonetischen Teils, vor allem aber durch die vielfältigen
                                syntaktischen Strukturen im <i>Gleichnis vom verlorenen Sohn</i> ergänzt
                                werden. Es ist übrigens der VIVALDI-Menüoption „Einzelauswahl von
                                Orten und Stimuli“ zu verdanken, dass diese in verschiedenen Teilen
                                vorhandenen Phänomene für den vorliegenden Artikel zu einem virtuellen
                                syntaktischen Sprachatlas Sardiniens zusammengestellt werden konnten.
                                Das Gleichnis ist deshalb von großem Wert, weil es die Sätze im
                                Zusammenhang präsentiert und daher eine viel differenziertere Analyse
                                und insbesondere auch Untersuchungen zur Informationsstruktur erlaubt.
                            </p>

                            <p>
                                Was die Orte anbelangt, so kann festgehalten werden, dass mindestens
                                zehn von diesen bisher nicht in maßgeblichen Studien zur Syntax
                                berücksichtigt wurden und daher hier zum größten Teil erstmals
                                untersucht werden konnten. Die Orte sind zudem so verteilt, dass sie die
                                wichtigsten Untervarietäten des Sardischen abdecken. Hierbei ist es von
                                großem Vorteil, dass gleich mehrere Orte sich in der sogenannten <i>zona
                                    grigia</i> befinden, in der auch verschiedene wichtige, zukünftig noch zu
                                entdeckende oder zu präzisierende syntaktische Isoglossen verlaufen.
                                Als besonders interessant können hier die Orte Bonarcado und Milis
                                gelten. Bonarcado verhält sich lautlich, aber auch bei den meisten hier
                                nebenbei erwähnten morphologischen Phänomenen, so z.B. bezüglich des
                                bestimmten Artikels im Plural (vgl. <a href="#kap1" name="abschn1">1</a>), des Possessivpronomens der 2.
                                Person Plural (vgl. <a href="#kap2" name="abschn2">2</a>) und des Konditionals (vgl. <a href="#abschn3.1"
                                    name="kap3.1">3.1</a>) noch wie das
                                Logudoresische, zeigt aber in anderen Bereichen, z.B. beim Konjunktiv
                                Imperfekt oder den klitischen Pronomina der
                                3. Person<sup><a href="#fn57" name="fz57">57</a></sup> schon
                                campidanesische Formen. Syntaktisch zeigt Milis, das auch im lautlichen
                                und morphologischen Bereich stark zum Campidanesischen gehört, bereits
                                bei der Konstruktion PP + Personalpronomen (anstelle des Possessivums in
                                der 2. Person Plural) im Gegensatz zu Bonarcado bereits klar die
                                Zugehörigkeit zum Campidanesischen. Bezüglich der Existenz zweier
                                Komplementierer <i>ca</i> und <i>chi</i>, eines heute hauptsächlich
                                campidanesischen Phänomens, ist in
                                <a href="#abb5" name="b5">Karte 5</a> zu erkennen, dass die
                                relevante Isoglosse zwischen diesen beiden Orten und dem von
                                Manzini/Savoia (2005) identifizierten zentralen <i>ca/chi-</i>Gebiet
                                liegt. Für den Osten kann VIVALDI eine genauere Vorstellung davon
                                liefern, wie sich das <i>ca/chi-</i>Gebiet nach Norden (in das
                                zentrallogudoresische Sprachgebiet) sowie nach Süden erstreckt.
                            </p>

                            <p>
                                Nicht für alle hier behandelten syntaktischen Phänomene lässt sich
                                eine areale Verteilung ausmachen. Dies liegt erstens daran, dass sich
                                das Sardische bezüglich vieler Phänomene relativ gleichförmig
                                verhält, wie bereits Jones (1993) festgestellt hat. Zweitens liegt es
                                in der Natur der Syntax, dass an ein und demselben Ort mehrere (z.B.
                                informationsstrukturell bestimmte) Optionen existieren, von denen ein
                                Sprachatlas in aller Regel nur eine repräsentiert. Dieses Manko wird in
                                VIVALDI zum Teil dadurch ausgeglichen, dass im <i>Gleichnis vom verlorenen
                                    Sohn</i> an verschiedenen Stellen im Text oft mehrere solcher Optionen
                                gewählt werden. Drittens kann es Konstruktionen geben (ein Beispiel
                                liefert wahrscheinlich das Plusquamperfekt in der Funktion des <i>passato
                                    remoto</i>, vgl. <a href="#abschn3.3" name="kap3.3">3.3</a>), die sich punktuell an mehreren, nicht
                                diatopisch
                                zusammenhängenden Orten herausgebildet haben.
                            </p>

                            <p>
                                Es bleibt zu wünschen, dass VIVALDI zukünftig einen festen Platz in
                                syntaktischen Studien einnimmt und hierbei auftretende offene Fragen –
                                einige wurden in diesem Beitrag bereits formuliert – durch die
                                Hinzufügung weiterer Orte auf Sardinien lösen kann.
                            </p>


                            <h1>Anmerkungen</h1>
                            <p className="annotation"><sup><a href="#fz1" name="fn1">1</a></sup>
                                Die Darstellung ist nicht exhaustiv, was auch bedeutet, dass hier
                                allein aus Platzgründen keine vollständige Behandlung des
                                Forschungsstandes zu jedem einzelnen behandelten Phänomen erfolgen
                                kann. Es fehlen somit ggf. Verweise auf weitere Grammatiken und
                                syntaktische Einzelanalysen. Auch müssten zukünftig noch syntaktisch
                                verwertbare Karten aus den traditionellen Sprachatlanten wie dem AIS und
                                dem ALI berücksichtigt werden.
                            </p>

                            <p className="annotation"><sup><a href="#fz2" name="fn2">2</a></sup>
                                Dieses Manko konnte von Gabriel Kampmann durch die Hilfsbereitschaft
                                von Leonardo Savoia, der einige Zusatzinformationen aus seinen Notizen
                                liefern konnte, durch die Eingliederung der bisher vorliegenden
                                ASIt-Fragebögen sowie durch punktuelle Sprecherbefragungen über das
                                Internet nur teilweise ausgeglichen werden.
                            </p>

                            <p className="annotation"><sup><a href="#fz3" name="fn3">3</a></sup>
                                Die in Klammern angegebenen Zahlen beziehen sich auf <a href="#abb2" name="b2">Karte 2</a>. M&S =
                                Manzini/Savoia (2005); K = von Kampmann
                                (2010) zusätzlich für einige Phänomene berücksichtigter Ort.
                            </p>

                            <p className="annotation"><sup><a href="#fz4" name="fn4">4</a></sup>
                                Hier lauten die Artikelformen /us/ und /as/, sind also Allomorphe von
                                <i>sos</i> und <i>sas</i>; vgl. Wagner (1938/39: 127, Fußn. 1), wo diese auch in
                                Urzulei belegten Formen als Kompromissformen zwischen Log. und Camp.
                                gedeutet werden.
                            </p>

                            <p className="annotation"><sup><a href="#fz5" name="fn5">5</a></sup>
                                Der westliche Teil dieses Gebiets (hier die genannten Orte Santu
                                Lussurgiu, Ardauli, Bonarcado, Milis, Paulàtino, Allai, Sorgono) werden
                                als der „Mischvarietät“ Arborense zugehörig betrachtet (vgl.
                                Virdis 1988: 905).
                            </p>


                            <p className="annotation"><sup><a href="#fz6" name="fn6">6</a></sup>
                                Die Abschnittsnummern des Gleichnisses werden in eckigen Klammern
                                angegeben.
                            </p>


                            <p className="annotation"><sup><a href="#fz7" name="fn7">7</a></sup>
                                Die LSC sieht als Alternative zu der standardisierten Form auch die
                                orthographische Darstellung lokaler Varietäten vor. Bei einigen
                                (satz-)phonetischen Eigenschaften, z.B. dem <i>glottal stop</i> in
                                Fonni (wiedergegeben als „ʔ“) oder bei wortinitialen oder finalen
                                Elidierungen (durch Apostroph gekennzeichnet), wird von den
                                Konventionen der LSC abgewichen. Hingegen werden die paragogischen
                                Vokale der LSC folgend i.d.R. nicht dargestellt.
                            </p>

                            <p className="annotation"><sup><a href="#fz8" name="fn8">8</a></sup>
                                Die LSC erlaubt sowohl <i>meu</i> als auch <i>miu</i>. Letzteres umfasst im
                                Maskulinum in den VIVALDI-Daten das Campidanesische, wobei innerhalb der
                                <i>zona grigia</i> Milis im Westen und Arzana im Osten die nördlichsten Orte
                                sind. In der Mitte zeigt sich aber noch in Laconi die Form <i>meu</i>. In
                                Ploaghe, Macomer, Bonarcado und in Laconi lautet das Possessivum der 1.
                                Person Singular im Femininum <i>mia</i>.
                            </p>

                            <p className="annotation"><sup><a href="#fz9" name="fn9">9</a></sup>
                                In Perdasdefogu wird ein anderes Lexem (<i>calleddu</i>) verwendet; der
                                bestimmte Artikel fehlt hier. Offenbar wird <i>calleddu</i> wie ein Eigenname
                                behandelt (vgl. den Satz <i>Il cane è bello</i> im phon. Teil), so dass dieses
                                Nomen nie einen Artikel trägt. Vgl. auch die entsprechenden Belege bei
                                Puddu, DitzLCS, s.v. <i>callédhu</i>. Diese Struktur entspricht somit
                                wahrscheinlich eher zufällig der von Jones (1993: 59) für Lula
                                beschriebenen Möglichkeit, <i>bare nouns</i> mit Possessivum als
                                Prädikatsnomen zu verwenden (<i>Custu est lettu meu</i>, <i>Custu est
                                    libru tuo</i>).
                            </p>


                            <p className="annotation"><sup><a href="#fz10" name="fn10">10</a></sup>
                                Das Possessivum der 1. Person Plural erscheint im Campidanesischen an
                                den meisten Orten ohne /r/ (in LSC nicht als Alternative vorgesehen).
                            </p>


                            <p className="annotation"><sup><a href="#fz11" name="fn11">11</a></sup>
                                Alternativ könnte angenommen werden, dass das erste Possessivpronomen
                                phonetisch leer ist. Die genaue Struktur müsste zukünftig (z.B. im
                                Rahmen einer modernen DP-Analyse) bestimmt werden.
                            </p>


                            <p className="annotation"><sup><a href="#fz12" name="fn12">12</a></sup>
                                Geosynonyme für ‚Großvater‘: <i>nonnu</i> (Fonni, Macomer, Cagliari),
                                <i>babbai</i> (Bonarcado), <i>maneddu</i> (Arzana), <i>nonnai</i>
                                (Milis), <i>nannau</i> (Perdasdefogu).
                            </p>


                            <p className="annotation"><sup><a href="#fz13" name="fn13">13</a></sup>
                                In diesen drei Orten wird <i>babbai</i> auch als Vokativ für den eigenen
                                Vater benutzt (vgl. GvS [3]). Wie die Übersetzung von <i>da suo padre</i> in
                                demselben Abschnitt zeigt, heißt das Lexem ansonsten hier ebenfalls
                                <i>babbu</i>, das in den meisten anderen Orten (Nuoro, Milis, Laconi,
                                Sant’Antioco, Cagliari) auch als Vokativ verwendet wird. Ploaghe,
                                Macomer, Bonarcado und Arzana setzen hier den „typisch sardischen“
                                Vokativ mit Trunkierung nach der betonten
                                Silbe, <span style={{ fontVariant: "small-caps" }}>(oh) ba’</span>.
                            </p>


                            <p className="annotation"><sup><a href="#fz14" name="fn14">14</a></sup>
                                Ausnahmen sind Milis (<i>babbu</i>), Perdasdefogu (<i>babbai</i>)
                                und Arzana (<i>ba’</i>).
                                Die Vokativform <span style={{ fontVariant: "small-caps" }}>ba’</span> kann offenbar nicht von einem
                                Possessivum gefolgt
                                werden, vgl. <span style={{ fontVariant: "small-caps" }}>babbu meu</span>
                                in Ploaghe, Macomer und Bonarcado, anstelle
                                von <span style={{ fontVariant: "small-caps" }}>*ba’ meu</span>.
                            </p>


                            <p className="annotation"><sup><a href="#fz15" name="fn15">15</a></sup>
                                Dies wird von Secci (2007: 45) für Baunei bestätigt.
                            </p>


                            <p className="annotation"><sup><a href="#fz16" name="fn16">16</a></sup>
                                Die anderen Orte haben
                                <span style={{ fontVariant: "small-caps" }}>a/in su campu meu/miu</span>
                                (z.T. mit anderen Lexemen für <i>campu</i>), mit Ausnahme von Macomer,
                                Milis, Perdasdefogu und Villacidro, die das Possessivadjektiv in der
                                Übersetzung weglassen.
                            </p>


                            <p className="annotation"><sup><a href="#fz17" name="fn17">17</a></sup>
                                Der Sprecher scheint zunächst <i>fizu bostu</i> sagen zu wollen, korrigiert
                                sich dann aber sofort.
                            </p>


                            <p className="annotation"><sup><a href="#fz18" name="fn18">18</a></sup>
                                Der Sprecher aus Cagliari verwendet zur Anrede für den Vater die 2.
                                Person Singular und sagt folglich <i>fillu tuu</i> / <i>unu de is
                                    serbidoris tuus.</i>
                            </p>


                            <p className="annotation"><sup><a href="#fz19" name="fn19">19</a></sup>
                                Die Sprecherin aus Macomer sowie der Sprecher aus Nuoro verwenden
                                übrigens jeweils in einem Fall eine Possessivkonstruktion mit
                                klitischem Dativpronomen (Nuoro: <i>no so prus dignu de bos esser fizu</i>;
                                Macomer: <i>bos fatto de teraccu</i>).
                            </p>


                            <p className="annotation"><sup><a href="#fz20" name="fn20">20</a></sup>
                                Vgl. auch Lepori (2001: 167): „Quando due possessivi si riferiscono a
                                uno stesso sostantivo, il secondo viene reso con la formula DE + pronome
                                personale preceduto o no dall’articolo determinativo: <i>sa lìngua mia e
                                    (sa) de bosatrus</i> (la mia e la vostra lingua).“
                            </p>


                            <p className="annotation"><sup><a href="#fz21" name="fn21">21</a></sup>
                                Vgl. die Charakterisierung von Lepori (2001: 167): „È molto usata in
                                certe zone per rafforzare il concetto la formula COSA + possessivo
                                femminile: <i>custu est su parri cosa mia</i> (questo è il mio parere).“
                            </p>


                            <p className="annotation"><sup><a href="#fz22" name="fn22">22</a></sup>
                                Einige wenige Sprecher benutzen entweder in Satz 7 oder in Satz 8 das
                                Präsens. Nur der Sprecher aus Milis benutzt in beiden Sätzen das
                                Präsens, das Futur kann für diesen Ort aber in GvS [20]
                                (<i>ap’essi</i>) = ich werde sein) nachgewiesen werden.
                            </p>


                            <p className="annotation"><sup><a href="#fz23" name="fn23">23</a></sup>
                                Vor dem Verb <span style={{ fontVariant: "small-caps" }}>esser</span>
                                fehlt im Campidanesischen in Cagliari, Sant’Antioco, Villacidro,
                                Perdasdefogu und Milis die Präposition <span style={{ fontVariant: "small-caps" }}>a</span>;
                                vgl. auch das in Blasco Ferrer (1986: 128) gegebene Paradigma.
                            </p>


                            <p className="annotation"><sup><a href="#fz24" name="fn24">24</a></sup>
                                Die Form <i>estus</i> ist die 1. Person Plural Indikativ Imperfekt von
                                ‚haben‘ im Sulcis (vgl. Wagner 1938/39: 5f.).
                            </p>


                            <p className="annotation"><sup><a href="#fz25" name="fn25">25</a></sup>
                                Vgl. das standardisierte Paradigma für das Campidanesische in Blasco
                                Ferrer (1986: 127): 1. Sg.: <i>emu/iapu</i>; 2. Sg.: <i>iast</i>;
                                3. Sg. <i>iat</i>; 1. Pl.: <i>emus</i>; 2. Pl.: <i>estis</i>;
                                3. Pl.: <i>iant</i>. Vgl. ebenso bei Lepori (2001, z.B. 70).
                            </p>


                            <p className="annotation"><sup><a href="#fz26" name="fn26">26</a></sup>
                                Die Planargia liegt westlich des VIVALDI-Punktes Macomer und nördlich
                                des VIVALDI-Punktes Bonarcado.
                            </p>


                            <p className="annotation"><sup><a href="#fz27" name="fn27">27</a></sup>
                                Die Form <i>essi</i> ist der Konjunktiv von ‚haben‘; der Konjunktiv von
                                ‚sein‘ heißt im Campidanesischen <i>fessi</i> oder <i>fussi</i>.
                            </p>


                            <p className="annotation"><sup><a href="#fz28" name="fn28">28</a></sup>
                                Am häufigsten ist die Verwendung des Indikativs Imperfekt (Macomer,
                                Nuoro, Milis, Arzana, Perdasdefogu). Die Sprecher aus Ploaghe und
                                Bonarcado verwenden den Indikativ Plusquamperfekt, und der Informant aus
                                Laconi als einziger der Konditional I.
                            </p>


                            <p className="annotation"><sup><a href="#fz29" name="fn29">29</a></sup>
                                Aber ASIt, Satz 98, Posada: <i>Creo chi dian manigare si dian tennere
                                    gana</i>. Bitti (eigene Befragung): <i>Pesso chi dian mannicare si dian aer
                                        gana</i>.
                            </p>


                            <p className="annotation"><sup><a href="#fz30" name="fn30">30</a></sup>
                                Der Konditional in der Apodosis ist auch in Ittiri (ASIt) belegt, wobei
                                die Sprecher in der Protasis den Konjunktiv Imperfekt verwenden.
                            </p>


                            <p className="annotation"><sup><a href="#fz31" name="fn31">31</a></sup>
                                Die Form <i>fustis</i> in der 1. Person Plural ist nach Wagner (1938/39: 8)
                                nicht nur im Sulcis, sondern auch in anderen ländlichen Zonen des
                                Campidano und angrenzenden Zonen verbreitet. Wagner nennt insbesondere
                                Laconi sowie insgesamt das Nordcampidanesische.
                            </p>


                            <p className="annotation"><sup><a href="#fz32" name="fn32">32</a></sup>
                                Allerdings ist diese Struktur in den ASIt-Daten auch in Bitti und
                                Posada belegt.
                            </p>


                            <p className="annotation"><sup><a href="#fz33" name="fn33">33</a></sup>
                                Der Sprecher bietet zwei Lösungen an.
                            </p>


                            <p className="annotation"><sup><a href="#fz34" name="fn34">34</a></sup>
                                Vgl. auch meinen ASIt-Fragebogen aus Brunella.
                            </p>


                            <p className="annotation"><sup><a href="#fz35" name="fn35">35</a></sup>
                                Laut ASIt aber auch im Norden, in Ossi; Satz 98: <i>Penso chi mandigaian,
                                    si aian fàmine.</i>
                            </p>


                            <p className="annotation"><sup><a href="#fz36" name="fn36">36</a></sup>
                                Nordcampidanesische Form der 1. Person Plural Indikativ Imperfekt nach
                                Wagner (1938/39: 2).
                            </p>


                            <p className="annotation"><sup><a href="#fz37" name="fn37">37</a></sup>
                                ASIt: Der Informant aus Baunei zeigt den Indikativ Plusquamperfekt in
                                der Protasis, aber der Konditional I in der Apodosis: <i>Penso ca iant are
                                    pappáu chi íanta tentu famene</i>. (Die von dem Informanten als <i>jantáre</i>
                                wiedergegebene Form, die auch in Damonte (2006) übernommen wird, ist
                                als <i>iant are</i> zu interpretieren). Hingegen hat der Sprecher aus Brunella
                                den Indikativ Plusquamperfekt in der Apodosis mit dem Gerundium in der
                                Protasis: <i>Pesso ch'aian manigadu tenzende (abberu) fàmine</i>.
                            </p>


                            <p className="annotation"><sup><a href="#fz38" name="fn38">38</a></sup>
                                Vgl auch ASIt (Baunei, Orgosolo).
                            </p>


                            <p className="annotation"><sup><a href="#fz39" name="fn39">39</a></sup>
                                Vgl. aber ASIt, Satz 98, Ittiri: <i>Creo chi dian mandigare si aperen
                                    fàmine.</i> Während hier der Konjunktiv nur in der Protasis vorkommt,
                                zeigt die ältere ASIt-Befragung aus Bitti den Konjunktiv in beiden
                                Teilen: <i>Pesso mannicheren s’aeren tentu gana</i>. Die von mir befragte
                                Sprecherin aus Bitti bietet hingegen nur die Lösung mit Konditional in
                                beiden Teilen an.
                            </p>


                            <p className="annotation"><sup><a href="#fz40" name="fn40">40</a></sup>
                                Ebenso Satz 11, vgl. oben unter (21a).
                            </p>


                            <p className="annotation"><sup><a href="#fz41" name="fn41">41</a></sup>
                                Die VIVALDI-Daten erwecken den Eindruck, als wäre diese Option
                                hauptsächlich im Campidanesischen verbreitet. Neben Macomer (VIVALDI)
                                ist sie aber in ASIt-Daten auch in Brunella, Posada und Ossi belegt. Es
                                sei hier noch angemerkt, dass in Dorgali und Orgosolo nach meinen
                                ASIt-Umfragen auch das zusammengesetzte Perfekt verwendet wird.
                            </p>


                            <p className="annotation"><sup><a href="#fz42" name="fn42">42</a></sup>
                                Die ASIt-Umfragen bestätigen die Präsenz des <i>surcomposé</i>-Typs im
                                Zentralsardischen (Orgosolo) sowie die Extension nach Westen (Ittiri, in
                                der Gegend von Ploaghe).
                            </p>


                            <p className="annotation"><sup><a href="#fz43" name="fn43">43</a></sup>
                                Die ASIt-Umfragen enthalten jedoch Hinweise darauf, dass der
                                Konditional II in Bitti und Baunei (Apodosis) und in Dorgali (Protasis)
                                verwendet wird.
                            </p>


                            <p className="annotation"><sup><a href="#fz44" name="fn44">44</a></sup>
                                In Sant’Antioco und Cagliari benutzen die Sprecher in diesem Satz das
                                Präsens.
                            </p>


                            <p className="annotation"><sup><a href="#fz45" name="fn45">45</a></sup>
                                Die campidanesische Form lautet <i>iat</i> (Villacidro).
                            </p>


                            <p className="annotation"><sup><a href="#fz46" name="fn46">46</a></sup>
                                Vgl. hierzu in neuerer Zeit Ledgeway (2003).
                            </p>


                            <p className="annotation"><sup><a href="#fz47" name="fn47">47</a></sup>
                                In Arzana findet (anders als an den anderen sardischen Orten) beim GvS
                                ein Sprecherwechsel statt.
                            </p>


                            <p className="annotation"><sup><a href="#fz48" name="fn48">48</a></sup>
                                Interessanterweise benutzt dieser Sprecher in (34c) die
                                nicht-palatalisierte Variante <i>chi</i> anstelle von <i>ci</i>, die
                                bei dem anderen Sprecher (vgl. (33c, c')) zu hören ist. Hingegen
                                verwendet er <i>ci</i> in dem unmittelbar davor situierten Satz
                                <i>Non ci at bisongiu chi m’ongiat àtteru</i> (<i>m’ongiat</i> steht
                                für <i>mi dongiat</i>, Konjunktiv Präsens von <i>donare</i>). Der
                                Sprecher verwendet auch als Relativpronomen <i>chi</i>
                                neben <i>ci</i>. Dies kann hier aus Platzgründen nicht systematisch
                                untersucht werden.
                            </p>


                            <p className="annotation"><sup><a href="#fz49" name="fn49">49</a></sup>
                                Poite <i>ʔa = poite ca</i> ‚weil‘, im Gegensatz zu <i>apustis chi</i>
                                ‚nachdem‘ (GvS [18]). Dass <i>ca</i> in kausalen und <i>chi</i> in temporalen
                                zusammengesetzten Konjunktionen verwendet wird, kann auch in den
                                ASIt-Fragebögen aus Dorgali und Orgosolo bestätigt werden.
                            </p>


                            <p className="annotation"><sup><a href="#fz50" name="fn50">50</a></sup>
                                Hierbei ist noch zu berücksichtigen, dass auch an anderen Orten
                                (außerhalb des <i>ca/chi-Gebiets</i>) in Satz 9 ‚wollen‘ mit dem Indikativ
                                verwendet wird (Milis, Bonarcado).
                            </p>


                            <p className="annotation"><sup><a href="#fz51" name="fn51">51</a></sup>
                                In Milis wird <i>chi</i> in den allermeisten Fällen
                                als <span className="ipa">[ke]</span> artikuliert, möglicherweise ein
                                Italianismus oder Hispanismus.
                            </p>


                            <p className="annotation"><sup><a href="#fz52" name="fn52">52</a></sup>
                                Ardauli (P. 30 in den Karten <a href="#abb4" name="b4">4</a>
                                bzw. <a href="#abb5" name="b5">5</a>) , Allai (P. 31), Laconi
                                (P. 36), Orroli (P. 37), Settimo (P. 43), Siliqua (P. 42).
                            </p>


                            <p className="annotation"><sup><a href="#fz53" name="fn53">53</a></sup>
                                Fonni, Laconi, Arzana, Milis, Villacidro, Sant’Antioco und Cagliari.
                            </p>


                            <p className="annotation"><sup><a href="#fz54" name="fn54">54</a></sup>
                                Hingegen ist an allen anderen Orten die Wortstellung des Aussagesatzes
                                zu hören.
                            </p>


                            <p className="annotation"><sup><a href="#fz55" name="fn55">55</a></sup>
                                Vgl. Mensching (2010); diese Struktur ist meines Wissens nach in der
                                Literatur bisher ansonsten nicht beschrieben worden.
                            </p>


                            <p className="annotation"><sup><a href="#fz56" name="fn56">56</a></sup>
                                Im Campidanesischen meist: <i>abbisongiu</i>.
                            </p>

                            <p className="annotation"><sup><a href="#fz57" name="fn57">57</a></sup>
                                Bonarcado hat hier die campidanesischen Formen mit
                                initialem <i>dd</i>- statt <i>l-</i>.
                            </p>

                            <h1>Literatur</h1>
                            <p className="bibl">
                                AIS = Jaberg, Karl/Jud, Jakob (1928–1940): <i>Sprach- und Sachatlas
                                    Italiens und der Südschweiz</i>, 8 Bde, Zofingen.
                            </p>

                            <p className="bibl">
                                ALI = Pellis, Ugo/Massobrio, Lorenzo et al. (1995–): <i>Atlante
                                    linguistico italiano</i>, bisher 7 Bde, Rom.
                            </p>

                            <p className="bibl">
                                ASIt = <i>Atlante Sintattico d'Italia</i>
                                [<a href="http://asis-cnr.unipd.it/">http://asis-cnr.unipd.it/</a>].
                            </p>

                            <p className="bibl">
                                Benincà, Paola/Poletto, Cecilia (2007): The ASIS enterprise: a view
                                on the construction of a syntactic atlas for the Northern Italian
                                dialects, in: <i>Nordlyd</i> 34, 35–52.
                            </p>

                            <p className="bibl">
                                Bentley, Delia (2003): Sur la force d’une approche
                                non-dérivationnelle de l’analyse linguistique: quelques données de
                                l’italo-roman, in: Jacques François (Hg.): <i>Aspects de la „Role
                                    and Reference Grammar“</i>, Université de Caen, 51–75 [<a
                                        href="http://www.crisco.unicaen.fr/IMG/pdf/cahierCRISCO13.pdf">http://www.crisco.unicaen.fr/IMG/pdf/cahierCRISCO13.pdf</a>].
                            </p>

                            <p className="bibl">
                                – (2004): Definiteness effects: evidence from
                                Sardinian, in: <i>Transactions of the Philological Society</i> 102,
                                57–101.
                            </p>

                            <p className="bibl">
                                Blasco Ferrer, Eduardo (1986): <i>La lingua sarda contemporanea. Grammatica
                                    del logudorese e del campidanese. Norma e varietà dell’uso. Sintesi
                                    storica</i>, Cagliari.
                            </p>

                            <p className="bibl">
                                Cruschina, Silvio/Remberger, Eva-Maria (2009): Focus Fronting in
                                Sardinian and Sicilian, in: Vincenzo Moscati/Emilio Servidio (Hg.):
                                <i>Proceedings of the XXXV Incontro di Grammatica Generativa 2009</i>,
                                Università di Siena, 118–130.
                            </p>

                            <p className="bibl">
                                Damonte, Federico (2006): Complementatori e complementi congiuntivi
                                in alcuni dialetti sardi, in: Padovan/Penello (Hg.) (2006)
                                [<a
                                    href="http://asis-cnr.unipd.it/documenti/ql6/ damonte6_2006.pdf">http://asis-cnr.unipd.it/documenti/ql6/
                                    damonte6_2006.pdf</a>].
                            </p>

                            <p className="bibl">
                                DitzLCS = Puddu, Mario (2000): <i>Ditzionàriu de sa limba e de sa cultura
                                    sarda</i>, Cagliari [<a href="http://www.ditzionariu.org">http://www.ditzionariu.org</a>].
                            </p>

                            <p className="bibl">
                                Jones, Michael Allan (1988a): Auxiliary Verbs in Sardinian, in:
                                <i>Transactions of the Philological Society 86</i>, 173–203.
                            </p>

                            <p className="bibl">
                                – (1988b): Sardinian, in: Martin Harris/Nigel
                                Vincent (Hg.): <i>The Romance Languages</i>, London, 314–359.
                            </p>

                            <p className="bibl">
                                – (1993): <i>Sardinian Syntax</i>, London/New York.
                            </p>

                            <p className="bibl">
                                Kampmann, Gabriel M. (2010): <i>Kartographische Auswertung zu Studien der
                                    Dialektsyntax Italiens: Separierung sardischer Territorien durch
                                    Isoglossen und Beschreibung diverser sprachlicher Äußerungen</i>,
                                Magisterarbeit, FU Berlin.
                            </p>

                            <p className="bibl">
                                La Fauci, Nunzio/Loporcaro, Michele (1993): Grammatical relations and
                                syntactic levels in Bonorvese morphosyntax, in: Adriana Belletti
                                (Hg.): <i>Syntactic theory and the dialects of Italy</i>, Turin, 155–203.
                            </p>

                            <p className="bibl">
                                Ledgeway, Adam (2003): Il sistema completivo dei dialetti
                                meridionali: la doppia serie di complementatori, in: <i>Rivista Italiana
                                    di Dialettologia</i> 27, 89–147.
                            </p>

                            <p className="bibl">
                                Lepori, Antonio (2001): <i>Gramàtiga sarda po is campidanesus/Compendiu di
                                    grammatica campidanese per italofoni</i>, Quartu Sant’Elena.
                            </p>

                            <p className="bibl">
                                Loporcaro, Michele (1998): <i>Sintassi comperata dell’accordo
                                    participiale romanzo</i>, Turin.
                            </p>

                            <p className="bibl">
                                LSC = Regione Autonoma della Sardegna (2006). <i>Limba Sarda Comuna. Norme
                                    linguistiche di riferimento a carattere sperimentale per la lingua
                                    scritta dell’Amministrazione regionale</i>
                                [<a
                                    href="http://portal-lem.com/images/fr/sarde/Limba_sarda_comuna.pdf">http://portal-lem.com/images/fr/sarde/Limba_sarda_comuna.pdf</a>].
                            </p>

                            <p className="bibl">
                                Manzini, Rita/Savoia, Leonardo (2005): <i>I dialetti italiani e romanici:
                                    Morfosintassi generativa</i>, 3 Bde., Alessandria.
                            </p>

                            <p className="bibl">
                                Mensching, Guido (2004): <i>Einführung in die sardische Sprache</i>, 3.
                                Auflage, Bonn.
                            </p>

                            <p className="bibl">
                                – (2010): Special Questions in the context of the left
                                periphery in Sardinian (I), unveröffentlichter Vortrag, Journées
                                d’études «Questions spéciale», Paris, CNRS.
                            </p>

                            <p className="bibl">
                                –/Remberger, Eva-Maria (2010a): La periferia sinistra
                                romanza: topicalizzazione, focalizzazione e interrogazione in sardo,
                                in: Maria Iliescu/Heidi Siller-Runggaldier/ Paul Danler (Hg.): <i>Actes
                                    du XXVe Congrès International de Linguistique et de Philologie Romanes
                                    VII</i>, Tübingen, 189–197.
                            </p>

                            <p className="bibl">
                                –/– (2010b): The left periphery in
                                Sardinian, in: Roberta D’Alessandro/Ian Roberts/Adam Ledgeway
                                (Hg.): <i>Syntactic Variation: The Dialects of Italy</i>, Cambridge, 261–276.
                            </p>

                            <p className="bibl">
                                Padovan, Andrea/Penello, Nicoletta (2006) (Hg.): <i>Osservazioni sul sardo.
                                    Giornata Conclusiva dei seminari ASIM (Atlante Sintattico dell’Italia
                                    Centro-Meridionale)</i>, Padova, 31 maggio 2005. University of Padua [<a
                                        href="http://asis-cnr.unipd.it/ql-6.it.html">http://asis-cnr.unipd.it/ql-6.it.html</a>].
                            </p>

                            <p className="bibl">
                                Pittau, Massimo (1991): <i>Grammatica della lingua sarda. Varietà
                                    logudorese</i>, Sassari.
                            </p>

                            <p className="bibl">
                                Remberger, Eva-Maria (2006): <i>Hilfsverben. Eine minimalistische Analyse
                                    am Beispiel des Italienischen und Sardischen</i>, Tübingen.
                            </p>

                            <p className="bibl">
                                Rizzi, Luigi (1997): The fine structure of the left periphery, in:
                                Haegeman, Liliane (Hg.): <i>Elements of Grammar: Handbook in Generative
                                    Syntax</i>, Dordrecht, 281–337.
                            </p>

                            <p className="bibl">
                                Sa-Limba = <i>Mailing Liste ‚Sa-Limba‘</i>, FU Berlin
                                [<a
                                    href="http://www.lingrom.fu-berlin.de/sardu/sa-limba.html">http://www.lingrom.fu-berlin.de/sardu/sa-limba.html</a>].
                            </p>

                            <p className="bibl">
                                Secci, Martina (2007): <i>Sardinian Possessive Constructions and Adnominal
                                    Adjectives</i>, Tesi di Laurea, Università di Venezia.
                            </p>

                            <p className="bibl">
                                VIVALDI = Kattenbusch, Dieter (1998ff.): <i>Vivaio Acustico delle Lingue e
                                    dei Dialetti d’Italia</i>. Humboldt-Universität zu Berlin
                                [<a href="http://www2.hu-berlin.de/vivaldi/">http://www2.hu-berlin.de/vivaldi/</a>].
                            </p>

                            <p className="bibl">
                                Virdis, Maurizio (1988): Sardisch: Areallinguistik, in: Günter Holtus/Michael Metzeltin/Christian Schmitt
                                (Hg.): <i>Lexikon der
                                    Romanistischen Linguistik. Vol. IV: Italienisch, Korsisch, Sardisch</i>,
                                Tübingen, 897–913.
                            </p>

                            <p className="bibl">
                                Wagner, Max Leopold (1938/39): Flessione nominale e verbale del sardo
                                antico e moderno, in: <i>L’Italia Dialettale</i> 14, 93–200 u. 15,
                                1–29.
                            </p>

                            <p className="bibl">
                                – (1951): <i>La lingua sarda: Storia, spirito e forma</i>,
                                Bern.
                            </p>

                            <p className="bibl">
                                – (1997): <i>La lingua sarda: Storia, spirito e forma</i>, a
                                c. di Giulio Paulis, Nuoro.
                            </p>



                            <h1>Anhang</h1>
                            <ol type="I">
                                <li><a href="#anhang1" name="anh1">Sätze aus dem syntaktischen Teil von VIVALDI</a></li>
                                <ol>
                                    <li>mio figlio</li>
                                    <li>Se l’avessi saputo sarei venuto.</li>
                                    <li>Lui ha due case.</li>
                                    <li>Quando si diventa vecchi si dorme poco.</li>
                                    <li>Si munge due volte al giorno.</li>
                                    <li>Ho sete, devo bere qualcosa.</li>
                                    <li>Domani tornerò a casa.</li>
                                    <li>Quando sarò vecchio mi comprerò una casa sul mare.</li>
                                    <li>Vuoi che io me ne vada?</li>
                                    <li>È impossibile che io abbia detto questo.</li>
                                    <li>Lavoreremmo di più, se fossimo pagati meglio.</li>
                                    <li>Un ramo marcio mi è caduto sul viso; mi ha fatto sanguinare il
                                        naso.</li>
                                    <li>Non mangiare questa mela, è marcia!</li>
                                    <li>Non mangiate troppa frutta!</li>
                                    <li>Non trovo la chiave; dove l’hai messa?</li>
                                </ol>

                                <li><a href="#anhang2" name="anh2">Gleichnis vom verlorenen Sohn (italienische Version)</a></li>
                                <p>
                                    [1] Un anno fa mio nonno, che ieri ha compiuto ottant’anni, raccontò

                                    a me e a mia sorella questa storia: [2] C’era una volta in un piccolo
                                    villaggio un uomo, il quale aveva due figlioli. [3] Un giorno il più
                                    giovane dei due fratelli andò da suo padre e gli disse: „Babbo,
                                    voglio avere tutto quello che mi tocca. Datemi quello che è mio.“ [4]
                                    Il vecchio, che voleva molto bene (forse anche troppo!) ai suoi
                                    figlioli, fece ciò che quello chiedeva a lui. [5] Pochi giorni dopo il
                                    giovanotto prese tutto il suo denaro e se ne andò. [6] In una lontana
                                    città visse allegramente, ubriacandosi assieme ad alcuni
                                    amici e ballando con delle donnacce. [7] Così in poche settimane
                                    furono spesi tutti i denari; ed egli restò senza niente. [8] Che cosa
                                    doveva fare? Come sarebbe vissuto? Dove avrebbe trovato un pezzo di
                                    pane? [9] Finalmente andò da un contadino e gli domandò: „Avete bisogno di un
                                    servo?“ [10] Sì – rispose il contadino – ma, come sai, quest’anno abbiamo
                                    avuto la brina, troppa pioggia e per giunta, la grandine. Perciò potrò
                                    darti solo un po’ di pane e nient’altro. [11] Non occorre che mi
                                    diate altro. Basta ch’io non muoia! … [12] Tutti i giorni andrai nel
                                    mio campo e in quel prato a pascolare i miei
                                    porci e le mie pecore. Sei contento? [13] E il poveraccio condusse al
                                    pascolo il bestiame del suo padrone, tre,
                                    cinque, dieci, venti, tante volte. [14] Ma quand’egli vedeva un porco
                                    grasso che mangiava ghiande [patate], diceva tra sè: „Povero me!
                                    S’io fossi restato a casa, quanto meglio starei. Com’era bello da
                                    mio padre! Adesso invece sto malissimo.“ [15] E per non morire,
                                    mangiava erba e radici; e piangeva: „Almeno potessi
                                    ritornare dai miei!“ [16] E piangi oggi, piangi domani, non poteva
                                    più: la fame e i dolori lo facevano dimagrire sempre di più. [17]
                                    Perciò dopo un paio di mesi, sebbene la casa di suo padre fosse molto
                                    lontana, pensò di tornare indietro. [18] Dopo aver camminato parecchi
                                    giorni e parecchie notti, arrivò scalzo e lacero nel villaggio, dove
                                    abitavano i suoi buoni genitori. [19] Tosto che il babbo lo vide venire
                                    avanti, adagio adagio, rasente la siepe del cortile, con gli occhi
                                    bassi, gridò dalla gioia, gli incorse incontro e lo baciò sulla
                                    fronte, sulle guance, sulla bocca. [20] No, babbo mio, non baciatemi!
                                    Sono stato troppo cattivo. I miei peccati
                                    son troppo grandi; non son più degno di essere vostro figlio: sarò uno
                                    dei vostri servi. [21] Ma il padrone chiamò sei servi e disse loro:
                                    „Portate qua il miglior vestito ch’io abbia, e metteteglielo
                                    indosso. Poi mettetegli un anello nel dito e le scarpe ai piedi. Voi
                                    altri laggiù attingete acqua, accendete il fuoco e ammazzate il più
                                    bel vitello, perché voglio che tutti facciano festa.“ [22] „
                                    Guardate: questo mio figlio era perduto, e adesso è stato
                                    trovato di nuovo. “ [23] E poi si volse verso il figlio.
                                    „Andiamo“, disse ed entrò subito in casa col giovanotto, il quale
                                    teneva con tutt’e due le mani la sinistra del padre. [24] E tutto il
                                    giorno si mangiò, si bevette molto vino e si cantarono belle canzoni.
                                </p>
                                <li> <a href="#anhang3" name="anh3">Gleichnis vom verlorenen Sohn (Nuoro)</a></li>
                                <p>
                                    [1] Jaju, chi eris at fattu ottant’annos, a mime e a sa carrale aiat
                                    contau cust’istoria. [2] Una borta, in unu bidizolu, b’aiat
                                    un’òmine chi aiat duos fizos. [3] Una die, su frade prus zòvanu, fit
                                    andau dae su babbu e l’at nau: „Babbu, dego cherjo sa parte de parte
                                    chi mi toccat in eredu – dàze·mi su meu.“ [4] Su betzu,
                                    ch’istimabat meda, fortzis peri troppu, sos fizos, aiat fattu su chi
                                    su fizu minore aiat pediu. [5] Pustis de pacas dies, su zòvanu si·nche
                                    at picau su dinari suo e si·nche fit andau. [6] In una bidda, allargu
                                    da domo sua, s’aiat colau sas dies in cuntentesa, bibende e
                                    divertinde, chin amicos e fèminas de pacu cabbale. [7] Gaichì, in pacu
                                    tempus, si·nche at gastau tottu e fit abbarrau chene mancu tzentèsimu.
                                    [8] Itte deppiat facher? Comente deppiat facher pro campare dae commo in
                                    susu? Ube aiat àppiu accatau unu buccone ? [9] A s’ùrtimu, aiat
                                    pediu a unu massaju. „Itte azes bisonzu de unu teraccu?“ [10]
                                    „Nd’appo bisonzu abberu“, aiat rispostu su massaju, „ma, comente
                                    bies, amus àppiu un’annada de àstragu e de traschia de abba e
                                    gràndine. Pro cussu ti potto dare petzi una mura de pane.“ [11] „No
                                    est nudda. Si no mi podies dare àtteru, bastat chi non morja de sa
                                    gana.“ [12] „Andas cada die a sa tanca mea, e in cussu pradu pasches
                                    sos porcos e sa gama de sas berbeches. Cuntentu ses?“ [13] Su pòberu
                                    diàulu aiat derettu a pascher su bestiamen de su mere, tres, chimbe,
                                    deche, binti, pro un’upore de bortas. [14] Ma cando bidiat unu porcu
                                    grassu manichande lande, si nabat tra issu: „Ja so’ torrau bene. Si
                                    fipp’abbarau in domo, àtteru che goi fipp’istau. Chin babbu ja
                                    s’istabat bene. Como imbetzes, so fachende sa bida de unu cane.“
                                    [15] Pro non morrer de sa gana, manicabat erba e radichinas, e si·nde
                                    pranghiat: „Si a su mancu podia torrare an domo!“ [16] E pranghe oje
                                    e pranghe cras, non nde podiat prus. Sa gana e sos dolores lu fin
                                    suttilicande semper de prus. [17] Dae cussu, apustis de una paja de
                                    meses, mancari sa domo ‘e su babbu nche fit allargu, aiat pessau de
                                    si·nche ghirare. [18] Pustis de aer camminau pro paritzas dies e
                                    paritzas nottes, iscurtu e istratzulau fit arribbau a bidda sua, a domo
                                    de su babbu e de sa mama. [19] Cando su babbu nche·l’at bidu
                                    arribbande a bellu a bellu sarente a sa crisura ‘e sa corte a chizos
                                    falaos, aiat abbochinau dae sa cuntentesa. L’aiat addobiau a camminu e
                                    l’at basau a cherbeddos, a massiddas e a bucca. [20] „Itte sezis
                                    fachende, babbu meu? No mi bazezas! Non soe istau dechille chin bois.
                                    Sos peccaos meos sun troppu mannos. Non so’ prus dinnu de bos esser
                                    fizu. App’a esser unu de sos teraccos brostos.“ [21] Ma su mere aiat
                                    muttiu sos teraccos e lis aiat nau: „Battie·mi·nde sa beste prus
                                    bella chi appo e bestie·li·a. Apustis ponie·li un’aneddu a su
                                    pòddighe e cartae·lu. E bois in cue a josso, umprie abba, alluchie su
                                    focu e occhidie su mezus bitellu. Cherjo chi tottu facan festa.“ [22]
                                    „Pompiae: custu fizu meu si fit pèrdiu e commo est istau accatau dae
                                    nobu.“ [23] Appustis, si fit bortau ocros a su fizu. „Ajo
                                    ch’andamus“, l’aiat nau e derettu fit intrau a intro chin su
                                    zòvanu, su cale chin ambas manos manteniat sa manu manca de su babbu.
                                    Aian fata (?) tottu sa die e manicande, bibende binu meda e cantande
                                    cantones bellas.
                                </p>
                            </ol>
                        </article>
                    </section>
                </div>
            </div>
            <UpArrow />
            <Footer />
        </div>
    )
}

export default Mensching;