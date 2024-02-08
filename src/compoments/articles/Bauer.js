import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Footer from "../Footer";
import Header from "../Header";
import Rubrik from "../Rubrik";
import UpArrow from "../UpArrow";
import BauerPortrait from "../../images/rbauer/rbauer-portrait.jpg";
import Karte1Small from "../../images/rbauer/karte1_small.jpg";
import Karte2Small from "../../images/rbauer/karte2_small.jpg";
import Karte3Small from "../../images/rbauer/karte3_small.jpg";
import Karte4Small from "../../images/rbauer/karte4_small.jpg";
import Karte5Small from "../../images/rbauer/karte5_small.jpg";
import Karte6Small from "../../images/rbauer/karte6_small.jpg";
import Karte7Small from "../../images/rbauer/karte7_small.jpg";
import Karte8Small from "../../images/rbauer/karte8_small.jpg";
import Karte9Small from "../../images/rbauer/karte9_small.jpg";
import Karte10Small from "../../images/rbauer/karte10_small.jpg";
import Karte11Small from "../../images/rbauer/karte11_small.jpg";
import Karte12Small from "../../images/rbauer/karte12_small.jpg";
import Karte13Small from "../../images/rbauer/karte13_small.jpg";
import Karte14Small from "../../images/rbauer/karte14_small.jpg";
import Karte15Small from "../../images/rbauer/karte15_small.jpg";
import Karte16Small from "../../images/rbauer/karte16_small.jpg";

function Bauer(props) {
    const images = [
        { src: "https://festschrift-kattenbusch.de/images/rbauer/karte1.jpg", alt: "Ähnlichkeitskarte zum Standarditalienischen (ALD - Trentino)" },
        { src: "https://festschrift-kattenbusch.de/images/rbauer/karte2.jpg", alt: "Ähnlichkeitskarte zum Standarditalienischen (AIS)" },
        { src: "https://festschrift-kattenbusch.de/images/rbauer/karte3.jpg", alt: "Ähnlichkeitskarte zum Dolomitenladinischen (Oberfassanischen)" },
        { src: "https://festschrift-kattenbusch.de/images/rbauer/karte4.jpg", alt: "Ähnlichkeitskarte zum Solandrischen (Sulzbergischen)" },
        { src: "https://festschrift-kattenbusch.de/images/rbauer/karte5.jpg", alt: "Ähnlichkeitskarte zum Anaunischen (Nonsbergischen)" },
        { src: "https://festschrift-kattenbusch.de/images/rbauer/karte6.jpg", alt: "Ähnlichkeitskarte zum Zentraltrentinischen (Bozner Unterland)" },
        { src: "https://festschrift-kattenbusch.de/images/rbauer/karte7.jpg", alt: "Ähnlichkeitskarte zum Zentraltrentinischen (Stadt Trient)" },
        { src: "https://festschrift-kattenbusch.de/images/rbauer/karte8.jpg", alt: "Ähnlichkeitskarte zum Zentraltrentinischen (Val Lagarina)" },
        { src: "https://festschrift-kattenbusch.de/images/rbauer/karte9.jpg", alt: "Ähnlichkeitskarte zum Zentraltrentinischen (Valsugana)" },
        { src: "https://festschrift-kattenbusch.de/images/rbauer/karte10.jpg", alt: "Ähnlichkeitskarte zum Zentraltrentinischen (Val di Cembra)" },
        { src: "https://festschrift-kattenbusch.de/images/rbauer/karte11.jpg", alt: "Ähnlichkeitskarte zum Zentraltrentinischen (Val di Fiemme)" },
        { src: "https://festschrift-kattenbusch.de/images/rbauer/karte12.jpg", alt: "Ähnlichkeitskarte zum Zentraltrentinischen (Val di Non)" },
        { src: "https://festschrift-kattenbusch.de/images/rbauer/karte13.jpg", alt: "Ähnlichkeitskarte zum Zentraltrentinischen (Val di Sole)" },
        { src: "https://festschrift-kattenbusch.de/images/rbauer/karte14.jpg", alt: "Ähnlichkeitskarte zum Zentraltrentinischen (Val Rendena)" },
        { src: "https://festschrift-kattenbusch.de/images/rbauer/karte15.jpg", alt: "Ähnlichkeitskarte zum Zentraltrentinischen (Val di Fassa)" },
        { src: "https://festschrift-kattenbusch.de/images/rbauer/karte16.jpg", alt: "Ähnlichkeitskarte zum Zentraltrentinischen (Val di Fiemme)" },

    ];

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <div>
            <div id="Wrapper" class="container_14">
                <div id="Header">
                    <Header id={props.author} />
                    <div class="grid_9">
                        <h1 id="main_title">Zur inneren Arealgliederung des Trentino.
                            Eine dialektometrische Nachschau</h1>
                        <p id="author">Roland Bauer, Salzburg</p>
                    </div>
                    <Rubrik />
                </div>

                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    index={index}
                    slides={images.slice(0)}
                    controller={{ closeOnBackdropClick: true }}
                />

                <div id="Teasers" class="clearfix">
                    <div class="grid_9">
                        <h1>1 Vorbemerkung und Widmung</h1>
                        <p>
                            Ideeller Ausgangspunkt für den vorliegenden Beitrag ist der im Oktober
                            1993 an der Universität Trient veranstaltete Kongress <i>Italia
                                settentrionale: crocevia di idiomi
                                romanzi</i><sup><a href="#fn1" name="fz1">1</a></sup>,
                            bei dem wir beide, lieber
                            Dieter, interessierte Zaungäste waren und in dessen Rahmen wir auch
                            ausgiebig über die Zukunftsperspektiven des damals noch in den
                            Kinderschuhen steckenden
                            Projekts VIVALDI „philosophieren“
                            konnten.<sup><a href="#fn2" name="fz2">2</a></sup>
                            Abgesehen davon hatte die erwähnte Tagung bekanntlich auch nicht ganz
                            unwesentliche Auswirkungen auf den weiteren Verlauf Deiner Biographie,
                            sodass meine „trentinische“ Themenwahl doppelt gerechtfertigt
                            erscheint, ohne dass hier explizit von VIVALDI oder gar von Deinem
                            Privatleben die Rede sein
                            soll. – <span style={{ fontVariant: "small-caps" }}>Ad multos
                                annos!</span>
                        </p>
                    </div>

                    <div class="grid_5">
                        <div class="abouttheauthor">
                            <img src={BauerPortrait} width="100"
                                height="150" alt="Roland Bauer - Portrait" />
                            <div class="abouttheauthorfont"><br /><br />
                                <b>Roland Bauer</b>, ao. Univ.-Prof. Dr., seit 2004 außerordentlicher
                                Universitätsprofessor am Fachbereich Romanistik der Universität
                                Salzburg. Romanistik- und Geographiestudium in Salzburg, 1997 Promotion,
                                2004 Habilitation. Seit 1987 Mitarbeit am ALD-I. 1992 zusammen mit
                                Dieter Kattenbusch Initiator des Projekts VIVALDI.
                            </div>
                            <div class="clearfloat"></div>
                        </div>
                    </div>
                </div>

                <div id="Main">
                    <div id="Articles" class="grid_14">
                        <section id="posts">
                            <article class="post">
                                <h1>2 Einleitung</h1>

                                <figure class="imageleft">
                                    <p style={{ width: "250px" }}><a href="#b1"
                                        name="abb1">Karte 1</a>: Ähnlichkeitskarte zum Standarditalienischen (ALD - Trentino)
                                    </p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(0); }}>
                                        <img src={Karte1Small} width="150"
                                            height="220" alt="Ähnlichkeitskarte zum Standarditalienischen (ALD - Trentino)" />
                                    </button>
                                </figure>

                                <p>
                                    Der trentinische Dialektraum wird in den romanistischen Handbüchern
                                    traditionellerweise im Rahmen der Beschreibung des Lombardischen und
                                    jener des Venedischen behandelt, wodurch indirekt seine
                                    Übergangsstellung zwischen den beiden oberitalienischen Geotypen zum
                                    Ausdruck kommt. Aus quantitativer Sicht konnte ich diese
                                    Brückenstellung mittels verschiedener Ähnlichkeitsprofile sowie
                                    synoptischer Karten aufzeigen,<sup><a href="#fn3"
                                        name="fz3">3</a></sup>
                                    die im Zuge der Dialektometrisierung
                                    des ALD-I entstanden waren.<sup><a href="#fn4"
                                        name="fz4">4</a></sup>
                                    Die in diesem Zusammenhang bislang
                                    präsentierten Kartierungen operierten immer mit dem Gesamtnetz des 217
                                    Messpunkte (Ortsdialekte) umfassenden ladinischen
                                    Sprachatlasses. Dadurch konnten zwar die überregionalen Zusammenhänge
                                    gut herausgearbeitet werden, die innere Arealgliederung des Trentino
                                    blieb aber eher unscharf. Dieses Manko soll nun durch die Präsentation
                                    dialektometrischer Visualisierungen ausgeglichen werden, deren
                                    Grundnetz neben den 62 genuin trentinischen Messpunkten drei weitere
                                    im Bozner Unterland umfasst. Dazu kommen, wie in der Tradition der
                                    Salzburger Dialektometrie<sup><a href="#fn5"
                                        name="fz5">5</a></sup>
                                    üblich, hochsprachliche Kunstpunkte, die
                                    einerseits das Standardfranzösische und andererseits das
                                    Standarditalienische repräsentieren.
                                </p>


                                <figure class="imageright">
                                    <p style={{ width: "250px" }}><a href="#b2"
                                        name="abb2">Karte 2</a>: Ähnlichkeitskarte zum Standarditalienischen (AIS)
                                    </p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(1); }}>
                                        <img src={Karte2Small} width="150"
                                            height="220" alt="Ähnlichkeitskarte zum Standarditalienischen (AIS)" />
                                    </button>
                                </figure>

                                <p>
                                    Insgesamt stützt sich unsere dialektometrische Analyse zum Trentino
                                    auf eine aus 67 Ortsvektoren und 3.330 Merkmalsvektoren (= aus rund
                                    850 Originalkarten des ALD-I gezogene Arbeitskarten) zusammengesetzte
                                    und somit aus über 220.000 einzelnen Datenzellen
                                    bestehende Matrix.<sup><a href="#fn6"
                                        name="fz6">6</a></sup>
                                    Knapp 16 Prozent aller Merkmale betreffen dabei das Lexikon, 15
                                    Prozent die Morphosyntax und der Rest (69 Prozent) die Phonetik.
                                </p>

                                <h1>3 Trentinische Ähnlichkeitsprofile</h1>
                                <p>
                                    Dialektometrische Ähnlichkeitsprofile erlauben es, die Position aller
                                    im Untersuchungsraum vertretenen Ortsmundarten näher zu bestimmen. In
                                    diesem Zusammenhang wird der die Referenzdialekte umgebende Raum als
                                    dreidimensionales System aufgefasst, wobei zwei Dimensionen durch die
                                    geographischen Koordinaten des jeweiligen Ortes vorgegeben sind,
                                    während die dritte Dimension über die dialektometrische Messung
                                    interdialektaler Ähnlichkeiten bestimmt wird. Dabei wird jeder unserer
                                    (N = 67) Dialekte mit allen übrigen (N–1 = 66) Dialekten verglichen,
                                    wobei wir vom Prinzip ausgehen, dass zwei Mundarten einander umso
                                    ähnlicher sind, je mehr phonetische, lexikalische und/oder
                                    morpho-syntaktische Merkmale sie miteinander teilen. Hohe
                                    Ähnlichkeitswerte (die sich prinzipiell auf einer Skala von 0 bis 100
                                    Prozent bewegen können) werden dabei auf den Karten durch warme Farben
                                    (rot, orange bzw. lachsfarben, gelb) repräsentiert, während große
                                    innerlinguistische Distanzen auf den Ähnlichkeitskarten durch
                                    Signaturen in kalten Farben (dunkelblau, hellblau, grün) in
                                    Erscheinung treten. Der jeweils gewählte
                                    Vergleichspunkt/Prüfbezugspunkt selbst ist nicht eingefärbt und
                                    erscheint daher als weißes Polygon.<sup><a href="#fn7"
                                        name="fz7">7</a></sup>
                                </p>

                                <figure class="imageleft">
                                    <p style={{ width: "250px" }}><a href="#b3"
                                        name="abb3">Karte 3</a>: Ähnlichkeitskarte zum Dolomitenladinischen (Oberfassanischen)
                                    </p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(2); }}>
                                        <img src={Karte3Small} width="150"
                                            height="220" alt="Ähnlichkeitskarte zum Dolomitenladinischen (Oberfassanischen)" />
                                    </button>
                                </figure>

                                <h2>3.1 Zur <i>italianità</i> der Dialekte des Trentino</h2>


                                <p>
                                    Das auf <a href="#abb1" name="b1">Karte 1</a> abgebildete Ähnlichkeitsprofil zeigt die mehr oder
                                    weniger große Nähe der im Trentino gesprochenen Dialekte zum
                                    Standarditalienischen, bezieht sich also auf ihre mehr oder weniger
                                    stark ausgeprägte Italianität
                                    bzw. Toskanität.<sup><a href="#fn8"
                                        name="fz8">8</a></sup> Diese bewegt sich, wie
                                    man Legende und Histogramm von <a href="#abb1" name="b1">Karte 1</a> entnehmen kann, zwischen einem
                                    Minimum von 27 Prozent und einem Maximum von 72
                                    Prozent.<sup><a href="#fn9" name="fz9">9</a></sup> Der
                                    Minimalwert betrifft dabei das
                                    Französische<sup><a href="#fn10"
                                        name="fz10">10</a></sup>, das also nur gut ein
                                    Viertel aller hier berücksichtigten Merkmale mit dem Italienischen
                                    teilt, während bei knapp drei Vierteln Divergenzen auftreten. Davon
                                    abgesehen zeigt das Dolomitenladinische des oberen Fassatals (mit rund
                                    44 Prozent) unter allen in Frage kommenden Dialekten die geringste
                                    Affinität zum
                                    Standarditalienischen.<sup><a href="#fn11"
                                        name="fz11">11</a></sup> Die bisher gewonnenen
                                    Einsichten sind nicht weiter überraschend, handelt es sich doch bei
                                    den erwähnten Vergleichsobjekten um drei gänzlich unterschiedliche
                                    Entitäten der Romania, nämlich um Galloromanisch (repräsentiert durch
                                    P. 888, Französisch), Italoromanisch (repräsentiert durch P. 999,
                                    Italienisch) und Rätoromanisch (repräsentiert durch die PP. 97–98,
                                    Oberfassanisch/<i>cazet</i>).
                                </p>

                                <figure class="imageleft">
                                    <p style={{ width: "250px" }}><a href="#b4"
                                        name="abb4">Karte 4</a>: Ähnlichkeitskarte zum Solandrischen (Sulzbergischen)
                                    </p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(3); }}>
                                        <img src={Karte4Small} width="150"
                                            height="220" alt="Ähnlichkeitskarte zum Solandrischen (Sulzbergischen)" />
                                    </button>
                                </figure>

                                <p>
                                    Wenn wir nun auf <a href="#abb1" name="b1">Karte 1</a> die Raumverteilung der „italophilen“ Dialekte
                                    (= warme Farbklassen) betrachten, so bemerken wir zweierlei: 1. die
                                    große (um 71 Prozent oszillierende) Affinität der in der Valsugana
                                    gesprochenen, venedisch-vicentinisch geprägten Mundarten zum
                                    Italienischen,<sup><a href="#fn12"
                                        name="fz12">12</a></sup> und 2. die ebenfalls
                                    überdurchschnittlich starke
                                    Italianität des gesamten zentraltrentinischen Raums. Dieser tritt uns
                                    hier als überaus kompakte Klasse gegenüber, die neben den im Etschtal
                                    bzw. in der Val Lagarina (vom Bozner Unterland bis an die Südgrenze
                                    des Trentino) gesprochenen Varietäten auch einen Teil
                                    des <i>cembrano</i>
                                    (i.e. der Dialekte des Zimmertals/Val di Cembra) und
                                    des <i>fiammazzo</i>
                                    (unteres Fleimstal/Val di Fiemme), also der im Avisio-Tal östlich der
                                    Etsch bis auf die Höhe von Moena gesprochenen Dialekte mit
                                    einschließt.<sup><a href="#fn13"
                                        name="fz13">13</a></sup> Mit leicht
                                    unterdurchschnittlicher Italianität
                                    erscheint hingegen (als räumlich ebenfalls geschlossene Gruppe) der
                                    gesamte Westen bzw. Nordwesten unseres Beobachtungsraums,
                                    d.h. einerseits die gemeinhin dem Ostlombardischen zugerechneten
                                    Dialekte Judikariens und der Val Rendena sowie andererseits die
                                    romanischen Mundarten des Noce-Tals (Solandrisch am Sulzberg,
                                    Anaunisch am Nonsberg).<sup><a href="#fn14"
                                        name="fz14">14</a></sup> Zu dieser Klasse zählt ferner
                                    das in Unterfassa gesprochene <i>brach</i>, wobei innerhalb
                                    des Fassatals (bzw. in weiterer Folge auch in Moena
                                    und im Fleimstal) die von Nord nach Süd kontinuierlich
                                    zunehmende Italianität besonders deutlich ins Auge
                                    fällt.<sup><a href="#fn15" name="fz15">15</a></sup>
                                </p>

                                <figure class="imageright">
                                    <p style={{ width: "250px" }}><a href="#b5"
                                        name="abb5">Karte 5</a>: Ähnlichkeitskarte zum Anaunischen (Nonsbergischen)
                                    </p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(4); }}>
                                        <img src={Karte5Small} width="150"
                                            height="220" alt="Ähnlichkeitskarte zum Anaunischen (Nonsbergischen)" />
                                    </button>
                                </figure>

                                <h2>3.2	Dolomitenladinisch
                                    vs. Noce-Romanisch<sup><a href="#fn16"
                                        name="fz16">16</a></sup>:
                                    Kurzkommentar zu den Ähnlichkeitskarten 3 bis 5</h2>
                                <p>
                                    Der zuletzt angesprochene, aus der Perspektive des italienischen
                                    Prüfbezugspunkts erfolgte Zusammenfall von Ostlombardisch,
                                    Noce-Romanisch und Fassa-Ladinisch (<i>brach</i>) in ein
                                    Intervall<sup><a href="#fn17" name="fz17">17</a></sup>
                                    könnte
                                    dazu verleiten, die genannten Idiome als zusammengehörig bzw. als
                                    einander besonders nahestehend zu sehen. Dies wäre jedoch insofern
                                    falsch, als die auf <a href="#abb1" name="b1">Karte 1</a> sichtbaren Gemeinsamkeiten einzig und
                                    allein darin bestehen, dass alle im Intervall [3] befindlichen
                                    Dialekte vom Italienischen ungefähr gleich weit entfernt sind. Um der
                                    immer wieder kontrovers diskutierten und politisch
                                    instrumentalisierten Frage einer allfälligen Ladinität der Dialekte
                                    von Sulzberg und Nonsberg<sup><a href="#fn18"
                                        name="fz18">18</a></sup> auf den Grund zu gehen,
                                    empfiehlt es sich,
                                    Ähnlichkeitskarten zu generieren, die einerseits mit genuin
                                    ladinischen und andererseits mit solandrischen bzw. anaunischen
                                    Vergleichspunkten arbeiten. Auf <a href="#abb3" name="b3">Karte 3</a> ist ein Profil aus der Sicht
                                    des Dolomitenladinischen abgebildet, <a href="#abb4" name="b4">Karte 4</a> zeigt hingegen die
                                    Ähnlichkeitsrelationen von Sulzberg und <a href="#abb5" name="b5">Karte 5</a> jene von Nonsberg
                                    aus gesehen.
                                </p>

                                <figure class="imageleft">
                                    <p style={{ width: "250px" }}><a href="#b6"
                                        name="abb6">Karte 6</a>: Ähnlichkeitskarte zum Zentraltrentinischen (Bozner Unterland)
                                    </p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(5); }}>
                                        <img src={Karte6Small} width="150"
                                            height="220" alt="Ähnlichkeitskarte zum Zentraltrentinischen (Bozner Unterland)" />
                                    </button>
                                </figure>

                                <p>
                                    Ad <a href="#abb3" name="b3">Karte 3</a> (P. 98, Ciampedel): Zu den dem Oberfassanischen besonders
                                    nahestehenden Dialekten gehören innerhalb des Trentino ausschließlich
                                    die übrigen Ortsmundarten des Fassatals (80–90 Prozent Ähnlichkeit mit
                                    Ciampedel) sowie, mit etwas Abstand, das Moenatische
                                    (73 Prozent).<sup><a href="#fn19"
                                        name="fz19">19</a></sup>
                                    Nahezu alle übrigen Dialekte (also auch das Noce-Romanische!) fallen
                                    gemeinsam in die um den mittleren Ähnlichkeitswert gruppierten
                                    Intervalle und zeigen somit nur mehr durchschnittliche Affinität zum
                                    <i>cazet</i> von Ciampedel (53–65
                                    Prozent).<sup><a href="#fn20" name="fz20">20</a></sup>
                                    Als Antipoden treten wiederum
                                    das Französische (30 Prozent) und auch das Italienische (44 Prozent)
                                    auf.<sup><a href="#fn21" name="fz21">21</a></sup>
                                </p>
                                <p>
                                    Ad <a href="#abb4" name="b4">Karte 4</a> (P. 54, Péio): Aus der Perspektive des Solandrischen zeigt
                                    sich dreierlei, nämlich 1. die relativ große Nähe nicht nur der
                                    umliegenden Dialekte (Sulz- und Nonsberg), sondern auch jener des
                                    Bozner Unterlands und des gesamten
                                    Etschtals,<sup><a href="#fn22"
                                        name="fz22">22</a></sup> 2. die relative Ferne
                                    des Ostlombardischen und des (dem Venedischen nahestehenden)
                                    Osttrentinischen<sup><a href="#fn23"
                                        name="fz23">23</a></sup> und 3. die eindeutige
                                    Antipodenstellung von
                                    Französisch (30 Prozent) und Fassanisch (52–59 Prozent). Aus der Sicht
                                    eines Repräsentanten des Anaunischen (<a href="#abb5" name="b5">Karte 5</a>: P. 50, Cloz) sieht die
                                    Lage sehr ähnlich aus (starke Affinitäten zu den Nachbarmundarten des
                                    Noce-Tals und des Etschtals, große Distanz zu Französisch und
                                    Ladinisch).
                                </p>

                                <figure class="imageright">
                                    <p style={{ width: "250px" }}><a href="#b7"
                                        name="abb7">Karte 7</a>: Ähnlichkeitskarte zum Zentraltrentinischen (Stadt Trient)
                                    </p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(6); }}>
                                        <img src={Karte7Small} width="150"
                                            height="220" alt="Ähnlichkeitskarte zum Zentraltrentinischen (Stadt Trient)" />
                                    </button>
                                </figure>

                                <p>
                                    Das Noce-Romanische von Sulzberg und Nonsberg steht also nach Auskunft
                                    unserer Ähnlichkeitsprofile nicht nur dem Zentraltrentinischen von
                                    Trient (81 Prozent), sondern auch dem Ostlombardischen (ca. 67
                                    Prozent) und sogar dem Standarditalienischen (61 Prozent) noch
                                    deutlich näher als dem Dolomitenladinischen (hier
                                    speziell dem <i>cazet</i> des oberen Fassatals mit
                                    rund 52 Prozent Ähnlichkeit).<sup><a href="#fn24"
                                        name="fz24">24</a></sup>
                                </p>


                                <h2>3.3 Zentraltrentinisch: Kurzkommentar zu den Karten 6 bis 10</h2>
                                <p>
                                    Die auf <a href="#abb6" name="b6">Karte 6</a>, <a href="#abb7" name="b7">Karte 7</a>, <a href="#abb8" name="b8">Karte 8</a> und <a href="#abb9" name="b9">Karte 9</a> abgebildeten, allesamt zentraltrentinischen
                                    Ähnlichkeitsprofile operieren mit Prüfbezugspunkten aus dem Norden,
                                    aus dem Zentrum und aus dem Süden unseres Beobachtungsraums. Es
                                    handelt sich dabei in allen vier Fällen um Ortschaften, die die
                                    Dialekte des Etschtals bzw. der Val Lagarina
                                    repräsentieren. Diesbezüglich wird in der Fachliteratur u.a. darauf
                                    verwiesen, dass zwischen Trient und Rovereto
                                    eine <i>Murazzo</i> oder <i>Murazzi</i>
                                    genannte Sprachgrenze verlaufe, die das Zentraltrentinische in eine
                                    Nordhälfte und in eine (dem Venedischen Veroneser Zuschnitts
                                    nahestehende) Südhälfte teile.<sup><a href="#fn25"
                                        name="fz25">25</a></sup>
                                </p>

                                <figure class="imageleft">
                                    <p style={{ width: "250px" }}><a href="#b8"
                                        name="abb8">Karte 8</a>: Ähnlichkeitskarte zum Zentraltrentinischen (Stadt Rovereto)
                                    </p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(7); }}>
                                        <img src={Karte8Small} width="150"
                                            height="220" alt="Ähnlichkeitskarte zum Zentraltrentinischen (Stadt Rovereto)" />
                                    </button>
                                </figure>


                                <p>
                                    Nun kann man anhand dialektometrischer Kartierungen sehr gut
                                    nachmodellieren, inwiefern im Einzugsbereich bzw. in der näheren
                                    Umgebung der gewählten Prüfbezugspunkte sprachliche Brüche
                                    verlaufen. Auf den vier in diesem Kontext präsentierten
                                    Ähnlichkeitsprofilen ist bezüglich einer allfälligen Zweiteilung der
                                    Etschtaler Dialekte in der Tat nichts zu sehen. Im Gegenteil, sowohl
                                    aus der Sicht des jeweils nördlichsten und des südlichsten
                                    Vergleichspunktes, als auch von der Warte der beiden im Zusammenhang
                                    mit der <i>Murazzi</i>-Grenze konkret apostrophierten
                                    Dialekte (Trient resp. Rovereto) aus gesehen zeigt
                                    sich das Etschtal als zusammenhängender Block, der
                                    unabhängig vom gewählten Prüfbezugspunkt
                                    immer das gesamte zentrale Trentino
                                    abdeckt.<sup><a href="#fn26" name="fz26">26</a></sup>
                                    Eine weitere (durchaus
                                    erwartbare) Gemeinsamkeit der vier zentraltrentinischen Profile
                                    besteht darin, dass sich – abgesehen von der deutlichen Distanzierung
                                    vom Fassa-Ladinischen und vom
                                    Französischen<sup><a href="#fn27"
                                        name="fz27">27</a></sup> – auch das Absetzen
                                    einer vom Lombardischen beeinflussten westtrentinischen Gruppe
                                    bemerkbar macht,<sup><a href="#fn28"
                                        name="fz28">28</a></sup> während das bekanntlich dem
                                    Venedischen nahestehende Osttrentinische (sei es in
                                    Form der bereits weiter oben angesprochenen,
                                    vicentinisch beeinflussten Dialekte der Valsugana oder
                                    der feltrinisch geprägten Mundarten des Primiero) auch
                                    näher am Zentraltrentinischen zu liegen
                                    kommt.<sup><a href="#fn29" name="fz29">29</a></sup>
                                </p>

                                <figure class="imageright">
                                    <p style={{ width: "250px" }}><a href="#b9"
                                        name="abb9">Karte 9</a>: Ähnlichkeitskarte zum Zentraltrentinischen (Val Lagarina)
                                    </p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(8); }}>
                                        <img src={Karte9Small} width="150"
                                            height="220" alt="Ähnlichkeitskarte zum Zentraltrentinischen (Val Lagarina)" />
                                    </button>
                                </figure>

                                <p>
                                    Der oben angesprochenen Frage nach einer allfälligen Binnengliederung
                                    des Etschtals kann auch mittels eines anderen dialektometrischen
                                    Kartentyps, der sogenannten Schottenkarte, nachgegangen
                                    werden. Selbige operiert – im Gegensatz zu den bisher gezeigten Karten
                                    – nur mit den Distanzwerten räumlich angrenzender, also direkt
                                    benachbarter Messpunkte. Repräsentiert man diese nun graphisch durch
                                    mehr oder weniger starke und zudem eingefärbte Polygonseiten, so
                                    entsteht ein Schotten- oder Wabenkarte genannter Kartentyp, der im
                                    Beobachtungsraum vorhandene Isoglossen bzw. quantitative
                                    Isoglossenbündelungen aufzeigt.<sup><a href="#fn30"
                                        name="fz30">30</a></sup> Auf <a href="#abb10" name="b10">Karte 10</a> ist nun gut
                                    erkennbar,
                                    dass lediglich der West- und der Ostteil des Trentino durch
                                    verschiedenste (dicke und blau eingefärbte) Abschottungen zerklüftet
                                    erscheint, während im Zentralbereich (Etschtal) zwischen den
                                    Nachbardialekten nur minimale Distanzwerte (3–9 Prozent)
                                    auftreten. Die deutlichsten Isoglossenbündelungen zeigen sich am Rande
                                    des Westtrentinischen Judikariens und der Val Rendena, das sich sowohl
                                    von den Dialekten des Sulzbergs als auch von jenen des Etschtals und
                                    des Gardasees abschottet und dabei maximale Distanzwerte von über 30
                                    Prozent verzeichnet.
                                </p>

                                <figure class="imageleft">
                                    <p style={{ width: "250px" }}><a href="#b10"
                                        name="abb10">Karte 10</a>: Schottenkarte (quantitative Isoglossensynthese)
                                    </p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(9); }}>
                                        <img src={Karte10Small} width="150"
                                            height="220" alt="Schottenkarte (quantitative Isoglossensynthese)" />
                                    </button>
                                </figure>

                                <h1>4 Clusteranalytische Erkenntnisse</h1>
                                <p>
                                    Die dendrographische oder Stammbaum-Analyse, eine der komplexeren
                                    Methoden innerhalb der Dialektometrie, erlaubt es, an der Oberfläche
                                    liegende Muster, wie sie etwa anhand der Ähnlichkeitsprofile oder der
                                    Schottenkarte ersichtlich werden, durch das Herausarbeiten bedeutend
                                    tiefer liegender Strukturen zu ergänzen. Auf den Karten 11 bis 15 sind
                                    nun fünf, in unterschiedliche Tiefen vordringende, klassifikatorische
                                    Einblicke in jeweils zweifacher Form abgebildet. In der unteren
                                    Bildhälfte findet sich ein Stammbaum (dessen
                                    eingefärbte Äste <i>Dendreme</i>
                                    genannt werden), auf der Karte darüber werden die Ramifizierungen des
                                    Baumes in Form analog eingefärbter Flächen
                                    (sogenannter <i>Choreme</i>) in
                                    den Beobachtungsraum umgelegt.<sup><a href="#fn31"
                                        name="fz31">31</a></sup>
                                </p>

                                <figure class="imageright">
                                    <p style={{ width: "250px" }}><a href="#b11"
                                        name="abb11">Karte 11</a>: Dendrographische Analyse (zwei Cluster)
                                    </p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(10); }}>
                                        <img src={Karte11Small} width="150"
                                            height="220" alt="Dendrographische Analyse (zwei Cluster)" />
                                    </button>
                                </figure>


                                <p>
                                    Verfahrenstechnisch wurden unsere dendrographischen Analysen mithilfe
                                    eines von Joe H. Ward Jr. (1963) entwickelten, zur Gruppe der
                                    hierarchisch-agglomerativen Verfahren zählenden Algorithmus
                                    durchgeführt. Dabei werden – ausgehend von der Anzahl N der
                                    untersuchten Objekte (das sind in unserem Fall die 67 durch die
                                    Blätter des Stammbaums repräsentierten Varietäten) – Schritt für
                                    Schritt Gruppen gebildet, wobei unter Berücksichtigung aller möglichen
                                    Objektkombinationen jeweils nur jene Objekte zu Clustern fusioniert
                                    werden, bei deren Gruppierung die durchschnittliche Ähnlichkeit
                                    zwischen den Objekten möglichst hoch bleibt. Beim Gesamtdurchlauf
                                    einer Clusteranalyse müssen alle Objekte einer Klasse zugeordnet
                                    werden, sodass im Endeffekt alle N Objekte zu einem einzigen Cluster
                                    fusioniert werden können. Dieses stellt die Ausgangsbasis für eine
                                    mögliche Interpretation der Stammbäume dar. Dabei wird von der Wurzel
                                    des Dendrogramms bzw. vom Stamm des Baumes ausgegangen, um die
                                    Fusionen in der Gegenrichtung Schritt für Schritt
                                    nachzuzeichnen. Diese Herangehensweise entspricht in diachroner
                                    Hinsicht einer Nachmodellierung der im Laufe der sprachgeschichtlichen
                                    Entwicklung unseres Raumes stattgefundenen Ausgliederungsprozesse. Je
                                    näher die beobachteten Klassen bei der Wurzel des Baumes liegen, desto
                                    heterogener sind sie und desto früher erfolgte ihre Ausgliederung aus
                                    einer hier modellhaft angenommenen vulgärlateinischen
                                    bzw. protoromanischen Ureinheit.
                                </p>

                                <figure class="imageleft">
                                    <p style={{ width: "250px" }}><a href="#b12"
                                        name="abb12">Karte 12</a>: Dendrographische Analyse (vier Cluster)
                                    </p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(11); }}>
                                        <img src={Karte12Small} width="150"
                                            height="220" alt="Dendrographische Analyse (vier Cluster)" />
                                    </button>
                                </figure>

                                <p>
                                    Ad <a href="#abb11" name="b11">Karte 11</a>: Hierauf ist der erste, und somit älteste, in unserem Gebiet wirksam
                                    gewordene Ausgliederungsprozess dargestellt. Dabei
                                    zerfällt die imaginäre Ureinheit in ein (in blauer Farbe signiertes)
                                    Cluster (1), das sich aus dem Standardfranzösischen, dem
                                    Westtrentinischen und dem Fassa-Ladinischen
                                    zusammensetzt,<sup><a href="#fn32"
                                        name="fz32">32</a></sup> und in
                                    ein (rot eingefärbtes) „italoromanisches“ Restcluster (2), das die
                                    übrigen (bekanntlich dem Italienischen besonders nahestehenden)
                                    Dialekte des Trentino sowie den standarditalienischen Kunstpunkt
                                    selbst umfasst.
                                </p>

                                <figure class="imageright">
                                    <p style={{ width: "250px" }}><a href="#b13"
                                        name="abb13">Karte 13</a>: Dendrographische Analyse (sechs Cluster)
                                    </p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(12); }}>
                                        <img src={Karte13Small} width="150"
                                            height="220" alt="Dendrographische Analyse (sechs Cluster)" />
                                    </button>
                                </figure>


                                <p>
                                    Ad <a href="#abb12" name="b12">Karte 12</a>: Zwei Ausgliederungsschritte später spaltet sich von der
                                    erstgenannten Gruppe ein dolomitenladinisches Subcluster (1) ab,
                                    während Französisch und Westtrentinisch/Ostlombardisch noch gemeinsam
                                    in einer Gruppe (2) verbleiben. Das Mehrheitscluster zerfällt hingegen
                                    in Noce-Romanisch (4) und in den zentral- bzw. osttrentinischen Rest
                                    (3).
                                </p>


                                <p>
                                    Ad <a href="#abb13" name="b13">Karte 13</a>: In weiterer Folge kommt es zur Loslösung des
                                    Französischen (2) sowie zur Differenzierung in Osttrentinisch (4) und
                                    Zentraltrentinisch (5), sodass die 67 Objekte nunmehr in sechs Gruppen
                                    gegliedert erscheinen.
                                </p>

                                <figure class="imageright">
                                    <p style={{ width: "250px" }}><a href="#b14"
                                        name="abb14">Karte 14</a>: Dendrographische Analyse (acht Cluster)
                                    </p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(13); }}>
                                        <img src={Karte14Small} width="150"
                                            height="220" alt="Dendrographische Analyse (acht Cluster)" />
                                    </button>
                                </figure>


                                <p>
                                    Ad <a href="#abb14" name="b14">Karte 14</a>: Differenziert man die trentinische Sprachlandschaft in
                                    acht Cluster, so kommt es zu einer Zweiteilung des osttrentinischen
                                    Blocks in die Dialekte der Valsugana inkl. Standarditalienisch (4) und
                                    in jene des Primiero und des Fleimstals (5). Darüber hinaus teilt sich
                                    auch das Noce-Romanische in Solandrisch (7) und Anaunisch (8) auf.
                                </p>

                                <figure class="imageleft">
                                    <p style={{ width: "250px" }}><a href="#b15"
                                        name="abb15">Karte 15</a>: Dendrographische Analyse (zehn Cluster)
                                    </p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(14); }}>
                                        <img src={Karte15Small} width="150"
                                            height="220" alt="Dendrographische Analyse (zehn Cluster)" />
                                    </button>
                                </figure>

                                <p>
                                    Ad <a href="#abb15" name="b15">Karte 15</a>: Wenn wir die Geschichte der Ausgliederungen noch zwei
                                    Schritte weiter verfolgen (und somit insgesamt zehn Sprachgruppen
                                    bilden), wird einerseits die gesonderte Klassifikation des
                                    Italienischen (4) und andererseits die Trennung des
                                    Nordosttrentinischen in die Dialekte des Primiero (6) und jene des
                                    Fleimstals (7) erkennbar. Alle übrigen Gruppen bleiben stabil. Dies
                                    gilt auch bzw. v.a. für die (auf <a href="#abb15" name="b15">Karte 15</a> gelb eingefärbte) Großgruppe
                                    des Zentraltrentinischen (8), das übrigens noch einige
                                    Ausgliederungsschritte lang (die bereits sehr kleinräumige
                                    Differenzierungen wie etwa jene in Oberfassanisch/<i>cazet</i> und
                                    Unterfassanisch/<i>brach</i> ergeben) kompakt
                                    bleibt. So gesehen bestätigen die clusteranalytischen
                                    Resultate die sich bereits anhand der
                                    Oberflächenstrukturen (siehe Ähnlichkeitsprofile)
                                    abzeichnende Bildung einer einzigen dialektalen Gruppe
                                    im Bereich des trentinischen Zentralraums.
                                </p>

                                <figure class="imageleft">
                                    <p style={{ width: "250px" }}><a href="#b16"
                                        name="abb16">Karte 16</a>: Ähnlichkeitskarte zum Standardfranzösischen
                                    </p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(15); }}>
                                        <img src={Karte16Small} width="150"
                                            height="220" alt="Ähnlichkeitskarte zum Standardfranzösischen" />
                                    </button>
                                </figure>

                                <h1>5 Fazit</h1>
                                <p>
                                    Abschließend bleibt festzuhalten, dass sowohl die beispielsweise über
                                    die Sichtung der Ähnlichkeitsprofile gewonnenen Oberflächeneindrücke
                                    im Allgemeinen als auch die dendrographische Tiefenanalyse im
                                    Besonderen äußerst plausible Klassifiktionsergebnisse liefern und
                                    neben der Bestätigung von zumeist auf rein qualitativer Basis
                                    erstellten, „traditionellen“ Raumbefunden auch die kritische
                                    Hinterfragung und Beleuchtung divergierender Lehrmeinungen zur
                                    Arealgliederung erlauben. Dies gilt, auf das Trentino bezogen, in
                                    erster Linie bezüglich der allfälligen Wirkkraft einer im Etschtal
                                    liegenden „Sprachgrenze“ oder aber hinsichtlich einer immer wieder
                                    postulierten und vielfach auch (sprach-)politisch instrumentalisierten
                                    „Ladinität“ des Noce-Romanischen.
                                </p>

                                <h1>Anmerkungen</h1>
                                <p class="annotation"><sup><a href="#fz1" name="fn1">1</a></sup>
                                    Cf. Banfi et al. 1995.
                                </p>

                                <p class="annotation"><sup><a href="#fz2" name="fn2">2</a></sup>
                                    Im Sommer 1992 hatten wir ja auf Sizilien im Rahmen
                                    gemeinsamer Enquêten die ersten VIVALDI-Daten
                                    zusammengetragen (cf. dazu Bauer 1995 und Kattenbusch
                                    1995).
                                </p>

                                <p class="annotation"><sup><a href="#fz3" name="fn3">3</a></sup>
                                    Cf. den explizit diesem Thema gewidmeten Beitrag Bauer
                                    2003 sowie id. 2009, 263–284.
                                </p>

                                <p class="annotation"><sup><a href="#fz4" name="fn4">4</a></sup>
                                    Der dolomitenladinische Sprachatlas (ALD) stellt
                                    übrigens eine weitere zentrale Berührungsfläche
                                    zwischen dem Autor dieser Zeilen und dem <i>Festeggiato</i>
                                    dar, wobei unsere erste Kontaktaufnahme mehr als ein
                                    Vierteljahrhundert her ist und auf die Mitte der
                                    1980er Jahre zurückreicht, auf eine Zeit also, in der
                                    wir uns u.a. regelmäßig zu sogenannten
                                    Transkriptionsseminaren im ladinischen Kulturinstitut
                                    in St. Martin in Thurn trafen (cf. dazu beispielsweise
                                    Kattenbusch/Goebl 1986 oder Bauer 1990).
                                </p>

                                <p class="annotation"><sup><a href="#fz5" name="fn5">5</a></sup>
                                    Eine kommentierte Bibliographie zur Geschichte der
                                    romanistischen Dialektometrie mit besonderer
                                    Berücksichtigung der „Salzburger Schule“ findet sich
                                    in Bauer 2009, 19–84.
                                </p>

                                <p class="annotation"><sup><a href="#fz6" name="fn6">6</a></sup>
                                    Im Vergleich zur Dialektometrisierung des gesamten
                                    Beobachtungsraumes (220 Messpunkte, gut 4.000
                                    Arbeitskarten) mussten hier rund 700 Arbeitskarten
                                    ausgeschieden werden, da im Trentino bezüglich der auf
                                    diesen Karten untersuchten sprachlichen Merkmale
                                    keinerlei Variation feststellbar war und folglich
                                    die Berücksichtigung solcher (= mononymer) Karten
                                    unweigerlich eine Verfälschung der Ähnlichkeitswerte
                                    zur Folge gehabt hätte. Zum Aufbau und zur
                                    Strukturierung unseres Großcorpus (Datenmatrix mit
                                    über 880.000 Zellen) cf. Bauer 2009, 158–198.
                                </p>

                                <p class="annotation"><sup><a href="#fz7" name="fn7">7</a></sup>
                                    Zu den kartographischen Prinzipien der Polygonkarten,
                                    zu den (mehr oder weniger gewichtenden)
                                    Ähnlichkeitsmaßen, zur Intervallisierung der
                                    Ähnlichkeitswerte (die meist an den Polwerten, am
                                    arithmetischen Mittelwert oder am Median orientiert
                                    sind) sowie zur Funktionsweise dialektometrischer
                                    Ähnlichkeitskarten im Allgemeinen cf. im Detail Bauer
                                    2009, 91–113.
                                </p>

                                <p class="annotation"><sup><a href="#fz8" name="fn8">8</a></sup>
                                    Das Standarditalienische ist im Südosten von <a href="#abb1" name="b1">Karte 1</a>
                                    durch das weiße Polygon mit der Nr. 999 abgebildet,
                                    auf das durch einen roten Pfeil verwiesen wird.
                                </p>

                                <p class="annotation"><sup><a href="#fz9" name="fn9">9</a></sup>
                                    Die genannte Spannweite gilt dabei für unser
                                    (bekanntlich zu mehr als zwei Dritteln von
                                    phonetischen Merkmalen geprägtes) Gesamtcorpus,
                                    während eine Analyse nach rein lexikalischen Kriterien
                                    (525 Arbeitskarten) bedeutend höhere
                                    „Italianitätswerte“, nämlich 58 bis 81 Prozent
                                    ergibt. Zu diesem <i>Romania continua</i>-Effekt cf. Bauer
                                    2009, 227.
                                </p>

                                <p class="annotation"><sup><a href="#fz10" name="fn10">10</a></sup>
                                    Siehe das mit weißem Strichraster versehene,
                                    dunkelblaue Polygon (Legende Intervall [1]) mit der
                                    Nr. 888 im äußersten Südwesten von <a href="#abb1" name="b1">Karte 1</a>. Das
                                    Standardfranzösische tritt übrigens auf allen (66)
                                    Ähnlichkeitsprofilen unseres Netzes als Antipode der
                                    jeweiligen Prüfbezugspunkte auf, was seine dezidiert
                                    heterosystematische Stellung im gewählten
                                    Beobachtungsgebiet verdeutlicht. Dies gilt, von einer
                                    einzigen Ausnahme abgesehen, auch für das rein
                                    lexikalische Corpus. Dabei zeigt sich nämlich, dass
                                    nicht das Französische (59 Prozent), sondern das
                                    Oberfassanische von Ciampedel mit 58 Prozent
                                    Ähnlichkeit lexikalisch am weitesten vom Italienischen
                                    entfernt ist.
                                </p>

                                <p class="annotation"><sup><a href="#fz11" name="fn11">11</a></sup>
                                    Siehe dazu die hellblau eingefärbten Polygone
                                    (Intervall [2]) mit den Messpunktnummern 97 (Delba)
                                    und 98 (Ciampedel) im äußersten Nordosten von <a href="#abb1" name="b1">Karte 1</a>.
                                </p>

                                <p class="annotation"><sup><a href="#fz12" name="fn12">12</a></sup>
                                    Zur problematischen Klassifizierung der Mundarten von
                                    Valsugana und Primiero als Zentraltrentinisch
                                    vs. Venedisch-Vicentinisch bzw. Venedisch-Feltrinisch
                                    (N.B.: Die genannten Gebiete gehörten ab dem Jahr 811
                                    kirchenpolitisch für beinahe tausend Jahre zur Diözese
                                    Feltre und wurden erst gegen Ende des 18. Jahrhunderts
                                    an das Bistum Trient abgetreten!) cf. bereits Bauer
                                    2009, 274–282. Zur Valsugana siehe die rot
                                    eingefärbten, unmittelbar um den Prüfbezugspunkt
                                    gruppierten Polygone von Intervall [6] auf <a href="#abb1" name="b1">Karte 1</a>. Dabei handelt es sich um die Ortschaften 115
                                    (Strigno: 72 Prozent Ähnlichkeit mit dem
                                    Italienischen), 116 (Castello Tesino: 71 Prozent), 117
                                    (Tezze: 70 Prozent) und 119 (Levico: 72 Prozent). –
                                    Wie sich bei der Dialektometrisierung des
                                    Italo-Schweizer Sprachatlasses AIS gezeigt hat, gelten
                                    ähnlich hohe Italianitätswerte neben dem Trentino
                                    v.a. für das gesamte Veneto, während die Werte in der
                                    südlich davon (und somit geographisch näher zur
                                    Toskana) gelegenen Emilia-Romagna um ca. 10 Prozent
                                    niedriger ausfallen (zu den möglichen Ursachen dieser
                                    diskontinuierlichen Toskanität cf. Goebl 2008, 58–61),
                                    in der Toskana selbst dann aber durchwegs deutlich
                                    über 80 Prozent liegen und in Florenz Spitzen von
                                    knapp 85 Prozent erreichen (siehe dazu das auf <a href="#abb2" name="b2">Karte 2</a>
                                    abgebildete Ähnlichkeitsprofil, bei dessen Generierung
                                    ich dankenswerterweise auf das unter der Leitung von
                                    Hans Goebl in den Jahren 2005 bis 2009 erstellte
                                    AIS-Corpus zurückgreifen konnte).
                                </p>

                                <p class="annotation"><sup><a href="#fz13" name="fn13">13</a></sup>
                                    Siehe dazu die Verteilung der lachsfarbenen Polygone
                                    auf <a href="#abb1" name="b1">Karte 1</a> (= Intervall [5]: 65–69 Prozent).
                                </p>

                                <p class="annotation"><sup><a href="#fz14" name="fn14">14</a></sup>
                                    Siehe dazu die grün eingefärbten Polygone auf <a href="#abb1" name="b1">Karte 1</a>
                                    (= Intervall [3]: 50–62 Prozent).
                                </p>

                                <p class="annotation"><sup><a href="#fz15" name="fn15">15</a></sup>
                                    Cf. dazu bereits Heilmann 1955. – Auf <a href="#abb1" name="b1">Karte 1</a> siehe
                                    dazu die unmittelbare Nachbarschaft bzw. die
                                    Nord-Süd-Abfolge der Intervalle [2] (hellblau:
                                    PP. 97–98), [3] (grün: PP. 99–101), [4] (gelb, P. 102)
                                    und [5] (lachsfarben, PP. 104–105).
                                </p>

                                <p class="annotation"><sup><a href="#fz16" name="fn16">16</a></sup>
                                    Der Terminus <i>Noceromanisch</i> entstammt dem Titel der
                                    Diplomarbeit von Kollmann 1997. Alternativ wird als
                                    Sammelbegriff für Nonsbergisch und Sulzbergisch oft
                                    Ladino-Anaunisch verwendet; Ascoli (1873) hatte diese
                                    Gruppe als <i>Varietà ladine tridentino-occidentali</i>
                                    bezeichnet, bezüglich ihrer Ladinität aber folgenden
                                    Hinweis angebracht: „[…] la <i>ladinità</i> di Val di Sole
                                    risulta più ancora sbiadita che già non sia quella di
                                    Val di Non“ (319f.).
                                </p>

                                <p class="annotation"><sup><a href="#fz17" name="fn17">17</a></sup>
                                    Intervall [3] (grün) auf <a href="#abb1" name="b1">Karte 1</a>.
                                </p>

                                <p class="annotation"><sup><a href="#fz18" name="fn18">18</a></sup>
                                    Cf. dazu Bauer 2009, 265–269.
                                </p>

                                <p class="annotation"><sup><a href="#fz19" name="fn19">19</a></sup>
                                    Siehe dazu die rot signierten, in Intervall [6]
                                    zusammengefassten Dialekte der Orte 97 (Delba), 99
                                    (Moncion) und 100 (Vich/Vigo di Fassa) sowie das
                                    lachsfarbene Polygon des Intervalls [5] (P. 101,
                                    Moena) auf <a href="#abb3" name="b3">Karte 3</a>.
                                </p>

                                <p class="annotation"><sup><a href="#fz20" name="fn20">20</a></sup>
                                    Siehe dazu die grün und gelb signierten Intervalle [3]
                                    und [4] auf <a href="#abb3" name="b3">Karte 3</a>.
                                </p>

                                <p class="annotation"><sup><a href="#fz21" name="fn21">21</a></sup>
                                    Siehe dazu die blau signierten Intervalle [1] und [2] auf <a href="#abb3" name="b3">Karte 3</a>.
                                </p>

                                <p class="annotation"><sup><a href="#fz22" name="fn22">22</a></sup>
                                    Siehe dazu die rot, lachsfarben und gelb signierten
                                    Intervalle [4], [5] und [6] auf <a href="#abb4" name="b4">Karte 4</a>.
                                </p>

                                <p class="annotation"><sup><a href="#fz23" name="fn23">23</a></sup>
                                    Siehe dazu das grün signierte Intervall [3] auf <a href="#abb4" name="b4">Karte 4</a>.
                                </p>

                                <p class="annotation"><sup><a href="#fz24" name="fn24">24</a></sup>
                                    Im Vergleich mit den Varietäten der (in unserem
                                    Raumausschnitt nicht berücksichtigten) nördlichen
                                    Dolomitenladinia (Gröden, Gadertal) sinken die
                                    Ähnlichkeitswerte gar auf 45 Prozent (cf. dazu die
                                    Karten in Bauer 2009, 267 und 270).
                                </p>

                                <p class="annotation"><sup><a href="#fz25" name="fn25">25</a></sup>
                                    Die Definition dieser vermeintlichen Sprachgrenze
                                    erfolgt dabei auf der Basis weniger Isoglossen
                                    (cf. Mastrelli Anzilotti 1992, 8), die nach Auskunft
                                    des ALD-I jedoch heute zum Teil nicht mehr gültig sind
                                    und die somit auch keinen größeren Einfluss auf die
                                    Arealgliederung des Etschtals (im Sinne der Ausprägung
                                    einer „Sprachgrenze“) haben können (cf. dazu im Detail
                                    Bauer 2003, 112–114). Der Wegfall bzw. die
                                    Verschiebung einzelner Isoglossen kann in diesem
                                    Zusammenhang auch als Emanation einer progressiven
                                    Meridionalisierung des Trentiner Zentralraums gelesen
                                    werden.
                                </p>

                                <p class="annotation"><sup><a href="#fz26" name="fn26">26</a></sup>
                                    Man betrachte das räumliche Ausgreifen der Intervalle
                                    [6] (rot) und [5] (lachsfarben) auf <a href="#abb6" name="b6">Karte 6</a>, <a href="#abb7" name="b7">Karte 7</a>, <a href="#abb8" name="b8">Karte 8</a> und <a href="#abb9" name="b9">Karte 9</a>.
                                </p>

                                <p class="annotation"><sup><a href="#fz27" name="fn27">27</a></sup>
                                    Siehe dazu die absolut deckungsgleiche Raumverteilung
                                    der Intervalle [1] (dunkelblau) und [2] (hellblau) auf
                                    <a href="#abb6" name="b6">Karte 6</a>, <a href="#abb7" name="b7">Karte 7</a>, <a href="#abb8" name="b8">Karte 8</a> und <a href="#abb9" name="b9">Karte 9</a>.
                                </p>

                                <p class="annotation"><sup><a href="#fz28" name="fn28">28</a></sup>
                                    Siehe dazu die nahezu identische Flächenbildung von
                                    Intervall [3] (grün) im Westausschnitt von <a href="#abb6" name="b6">Karte 6</a>, <a href="#abb7" name="b7">Karte 7</a>, <a href="#abb8" name="b8">Karte 8</a> und <a href="#abb9" name="b9">Karte 9</a>.
                                </p>

                                <p class="annotation"><sup><a href="#fz29" name="fn29">29</a></sup>
                                    Siehe dazu die räumliche Verteilung von Intervall [4]
                                    (gelb) im Ostteil von <a href="#abb6" name="b6">Karte 6</a>, <a href="#abb7" name="b7">Karte 7</a>, <a href="#abb8" name="b8">Karte 8</a> und <a href="#abb9" name="b9">Karte 9</a>.
                                </p>

                                <p class="annotation"><sup><a href="#fz30" name="fn30">30</a></sup>
                                    Siehe dazu <a href="#abb10" name="b10">Karte 10</a>; dort in kalten (i.e. blauen)
                                    Farben signierte, dicke Polygonseiten stehen für
                                    relativ massive Isoglossenbündel, warm eingefärbte und
                                    dementsprechend dünne Lineamente repräsentieren
                                    hingegen minimale sprachliche Distanzen zwischen den
                                    Nachbardialekten; zu weiteren Details dieses
                                    Kartentyps cf. Bauer 2009, 117–124.
                                </p>

                                <p class="annotation"><sup><a href="#fz31" name="fn31">31</a></sup>
                                    Zur dialektometrischen Verwendung der beiden auf
                                    Brunet 1987 bzw. Goebl 1997 zurückgehenden Termini
                                    <i>Chorem</i> (nach frz. <i>chorème</i>) und <i>Dendrem</i> cf. Bauer 2009,
                                    155, zur Clusteranalyse im Allgemeinen und zu den
                                    dabei eingesetzten Algorithmen cf. op.cit., 148–157
                                    und 341–353.
                                </p>

                                <p class="annotation"><sup><a href="#fz32" name="fn32">32</a></sup>
                                    Das Französische steht (nach Auskunft des auf <a href="#abb16" name="b16">Karte 16</a>
                                    abgebildeten Ähnlichkeitsprofils, cf. dazu auch Bauer
                                    2010, 15f., 25) dem Westtrentinischen Judikariens mit
                                    knapp 35 Prozent Ähnlichkeit unter allen im Trentino
                                    beobachtbaren Dialekten am nächsten. Insofern
                                    erscheint die frühe Agglomerierung von Französisch,
                                    Westtrentinisch/Ostlombardisch (und
                                    Dolomitenladinisch) in ein gemeinsames Cluster
                                    plausibel.
                                </p>




                                <h1>Literatur</h1>

                                <p class="bibl">
                                    AIS = Jaberg, Karl/Jud, Jakob (Hg.) (1928–1940): <i>Sprach- und
                                        Sachatlas Italiens und der Südschweiz</i>, 8 vol., Zofingen [Neudruck:
                                    Nendeln 1971].
                                </p>

                                <p class="bibl">
                                    ALD-I = Goebl, Hans/Bauer, Roland/Haimerl, Edgar (Hg.) (1998): <i>Atlant
                                        linguistic dl ladin dolomitich y di dialec vejins, 1a pert / Atlante
                                        linguistico del ladino dolomitico e dei dialetti limitrofi. 1a parte /
                                        Sprachatlas des Dolomitenladinischen und angrenzender
                                        Dialekte. 1. Teil</i>, 7 vol., Wiesbaden.
                                </p>

                                <p class="bibl">
                                    Ascoli, Graziadio Isaia (1873): Saggi ladini, in: <i>Archivio
                                        glottologico italiano</i> 1, 1–556.
                                </p>

                                <p class="bibl">
                                    Banfi, Emanuele/Bonfadini, Giovanni/Cordin, Patrizia/Iliescu, Maria
                                    (Hg.) (1995): <i>Italia settentrionale: crocevia di idiomi romanzi</i>,
                                    Tübingen.
                                </p>

                                <p class="bibl">
                                    Bauer, Roland (1990): 4. Transkriptionseminar zum ALD-I, in: <i>Europa
                                        Ethnica</i> 47, 100.
                                </p>

                                <p class="bibl">
                                    – (1995): Vivaldi-Sicilia. Documentazione sonora dei
                                    dialetti siciliani, in: Ruffino, Giovanni (Hg.), <i>Percorsi di
                                        geografia linguistica. Idee per un atlante siciliano della cultura
                                        dialettale e dell’italiano regionale</i>, Palermo, 543–550.
                                </p>

                                <p class="bibl">
                                    – (2003): Sguardo dialettometrico su alcune zone di
                                    transizione dell’Italia nord-orientale (lombardo vs. trentino
                                    vs. veneto), in: Bombi, Raffaella/Fusco, Fabiana (Hg.), <i>Parallela
                                        X. Sguardi reciproci. Vicende linguistiche e culturali dell’area
                                        italofona e germanofona</i>, Udine, 93–119.
                                </p>

                                <p class="bibl">
                                    – (2009): <i>Dialektometrische
                                        Einsichten. Sprachklassifikatorische Oberflächenmuster und
                                        Tiefenstrukturen im lombardo-venedischen Dialektraum und in der
                                        Rätoromania</i>, San Martin de Tor.
                                </p>

                                <p class="bibl">
                                    – (2010): Die Position des Rätoromanischen und seine
                                    Beziehungen zum Deutschen, Französischen und Italienischen, in:
                                    <i>Linguistica</i> L, 7–26.
                                </p>

                                <p class="bibl">
                                    Brunet, Roger (1987): <i>La carte. Mode d’emploi</i>, Paris.
                                </p>

                                <p class="bibl">
                                    Goebl, Hans (1997): Some Dendrographic Classifications of the Data of
                                    CLAE 1 and CLAE 2, in: Viereck, Wolfgang/Ramisch,
                                    Heinrich (Hg.), <i>The
                                        Computer Developed Linguistic Atlas of England</i> 2, Tübingen, 23–32.
                                </p>

                                <p class="bibl">
                                    – (2008): La dialettometrizzazione integrale
                                    dell’AIS. Presentazione dei primi risultati, in: <i>Revue de
                                        Linguistique Romane</i> 72, 25–113.
                                </p>

                                <p class="bibl">
                                    Heilmann, Luigi (1955): <i>La parlata di Moena nei suoi rapporti con
                                        Fiemme e con Fassa</i>, Bologna.
                                </p>

                                <p class="bibl">
                                    Kattenbusch, Dieter (1995): Atlas parlant de l’Italie par régions:
                                    Vivaldi, in: <i>Estudis de lingüística i filologia oferts a Antoni
                                        M. Badia i Margarit</i>, Barcelona 1995, 443–455.
                                </p>

                                <p class="bibl">
                                    –/Goebl, Hans (1986): Die ersten Enqueten für den
                                    ALD – Erfahrungen und Ergebnisse, in: <i>Ladinia</i> X, 5–32.
                                </p>

                                <p class="bibl">
                                    Kollmann, Cristian (1997): <i>Germanismen im Appellativwortschatz des
                                        Noceromanischen (Nonsberg, Sulzberg), I. Teil: Gotisch, Fränkisch,
                                        Langobardisch</i>, Innsbruck; [Diplomarbeit].
                                </p>

                                <p class="bibl">
                                    Mastrelli Anzilotti, Giulia (1992): I dialetti trentini centrali,
                                    in: Bertoluzza, Aldo (Hg.), <i>Atti del IIo Convegno sui dialetti
                                        trentini</i>, Trento, 7–20.
                                </p>

                                <p class="bibl">
                                    Ward, Joe H. Jr. (1963): Hierarchical grouping to optimize an
                                    objective function, in: <i>Journal of the American Statistical
                                        Association</i> 58, 236–244.
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

export default Bauer;