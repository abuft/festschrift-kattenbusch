import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Header from "../Header";
import Rubrik from "../Rubrik";
import TosquesPortrait from "../../images/ftosques/ftosques-portrait.jpg";
import UpArrow from "../UpArrow";
import Footer from "../Footer";
import FaetoSmall from "../../images/ftosques/faeto-wikipedia-08.01.2012_small.png";
import WikiBearbeitenSmall from "../../images/ftosques/wikipedia-faeto-bearbeiten-2_small.png";
import WikiBearbeiten1Small from "../../images/ftosques/wikipedia-faeto-bearbeiten-1_small.png";

const images = [
    {
        src: "https://fabio-tosques.de/images/ftosques/faeto-wikipedia-08.01.2012.png",
        title: "Abb. 1",
        description: "Faeto Artikel in Wikipedia vom 08.01.2012"
    },
    {
        src: "https://fabio-tosques.de/images/ftosques/wikipedia-faeto-bearbeiten-2.png",
        title: "Abb. 2",
        description: "Im Editormodus von Wikipedia. Gut zu erkennen sind die einzelnen Formatierungsanweisungen wie Überschriften (==), Kursivierung (''), fetter Text (''') sowie die Nutzung von Templates in doppelten geschweiften Klammern, z.B. das automatische Laden der Einwohnerzahl von ISTAT {{EWZ|IT|071023}}, des Einwohnerdatums {{EWD|IT|071023}}, der IPA Fonts usw. "
    },
    {
        src: "https://fabio-tosques.de/images/ftosques/wikipedia-faeto-bearbeiten-1.png",
        title: "Abb. 3",
        description: "Aus dem Code für die Infobox generiert Wikipedia automatisch einen Kasten auf der rechten Seite, in dem die wichtigsten Geodaten und demographische Daten übersichtlich dargestellt werden. Der Autor eines Artikels muss nur die entsprechenden Daten recherchieren und eingeben. Um die Darstellung selbst kümmert sich dann das entsprechende Template."
    },
];

function Tosques(props) {

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <div id="Wrapper" className="container_14">
            <div id="Header">
                <Header id={props.author} />
                <div className="grid_9">
                    <h1 id="main_title">Die frankoprovenzalischen Sprachinseln
                        Faeto und Celle di San Vito in der deutschen Wikipedia –
                        eine Bestandsaufnahme</h1>
                    <p id="author">Fabio Tosques, Berlin</p>
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
                    <h1>Wikipedia aus Sicht der Rezipienten</h1>
                    <p>
                        Die Idee, im Rahmen dieser Festschrift einen kleinen Beitrag für die
                        deutsche Wikipedia zu leisten, wurde geboren, als ich dort nach den
                        Orten Faeto und Celle di San Vito suchte. Zu meiner Überraschung gab es
                        weder zu dem einen noch zu dem anderen Ort einen eigenen Artikel. Bei
                        früheren Recherchen zu noch so winzig kleinen Orten  war ich
                        bisher in der Regel immer fündig geworden. Zwar gibt es häufig zu den
                        meisten Ortschaften nur rudimentäre Daten wie Einwohnerzahl, Höhe
                        über dem Meeresspiegel, sonstige Geodaten und die Angabe, welcher Region bzw.
                        Provinz der Ort angehört, aber immerhin. Schließlich ist Wikipedia
                        unter anderem dafür bekannt: dass es unzählige Einträge gibt, die in
                        herkömmlichen Enzyklopädien nicht vorhanden sind. Für jeden noch so
                        kleinen Sachverhalt findet sich in der Community jemand, der sich der
                        Mühe unterzieht, einen Artikel zu verfassen und so die Welt darüber in
                        Kenntnis zu setzen.
                    </p>

                </div>
                <div className="grid_5">
                    <div className="abouttheauthor">
                        <img src={TosquesPortrait}
                            width="100"
                            height="130"
                            alt="Fabio Tosques - Portrait" />
                        <div className="abouttheauthorfont"><br /><br />
                            <b>Fabio Tosques</b>, M.A., studierte Italianistik,
                            Bibliothekswissenschaft und Informatik an der
                            Humboldt-Universität zu Berlin. Seit 2009
                            wissenschaftlicher Mitarbeiter bei Professor
                            Kattenbusch. Davor zwei Jahre Mitarbeit am ALD-II in
                            Salzburg. Seit 2005 aktive Mitarbeit am Projekt
                            VIVALDI.
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
                                Nicht von ungefähr verzeichnet die deutsche Wikipedia ca. 1,3 Mio. Artikel (Stand: Januar
                                2012). Damit steht die deutsche
                                Sprache an zweiter Stelle, nur die englischsprachige
                                Wikipedia ist noch umfangreicher, und mit gut 3,8
                                Mio. Artikeln (Stand: Januar 2012) dreimal größer als
                                die deutsche. An dritter Stelle kommt die französische
                                Wikipedia mit knapp 1,2 Mio. Artikeln, gefolgt von
                                Italienisch (ca. 875.000), Polnisch (859.000), Spanisch
                                (854.000), Russisch (805.000), Chinesisch (784.000)
                                usw. Der Umfang, den Wikipedia in einer Einzelsprache
                                verzeichnet, korreliert demnach weniger mit der Zahl der
                                Sprecher der jeweiligen Sprache (abgesehen vom
                                Englischen an erster Stelle), sondern scheint
                                eher mit dem Bildungsniveau der Sprecher dieser Sprache
                                und der technischen Ausstattung und Infrastruktur in den jeweiligen Ländern
                                verknüpft zu sein. Fassen wir alle Sprachen zusammen, so
                                enthält die Wikipedia weltweit ca. 10 Mio. Artikel. Zum
                                ersten Mal in der Geschichte der Menschheit besteht also
                                die Möglichkeit, sich auf einfache Weise in mehreren
                                Sprachen gleichzeitig einen Überblick über eine
                                bestimmte Person, eine Sache, einen Sachverhalt, eine
                                Stadt, ein Land usw. zu verschaffen.
                            </p>

                            <p>
                                Und seit Anfang Januar sind auch die beiden süditalienischen
                                Ortschaften Faeto und Celle di San Vito in der deutschen Wikipedia
                                vertreten! Bis zu diesem Zeitpunkt gab es zu Faeto in den folgenden 23
                                Sprachen einen eigenen Artikel in der entsprechenden Wikipedia: Català,
                                English, Esperanto, Español, Français, Arpetan, Magyar, Italiano,
                                日本語 (Japanisch), Lumbaart, Bahasa Melayu, Nnapulitano,
                                Nederlands, Polski, Piemontèis, Português, Armãneashce,
                                Русский (Russisch), Sicilianu, Українська (Ukrainisch),
                                Tiếng Việt, Volapük, Winaray.
                            </p>

                            <p>
                                Zu Celle di San Vito hingegen in den folgenden 22 Sprachen: Català,
                                English, Esperanto, Español, Français, Arpetan, Magyar, Italiano,
                                日本語 (Japanisch), Lumbaart, Bahasa  Melayu, Nnapulitano,
                                Nederlands, Polski, Piemontèis, Português, Armãneashce, Sicilianu,
                                Українська (Ukrainisch), Tiếng Việt, Volapük,
                                Winaray.
                            </p>

                            <p>
                                Auch dies ist eine Besonderheit, die aus dem offenen System der
                                Wikipedia resultiert, mit dem passionierten Vertretern eines Dialekts
                                oder einer Minderheitensprache ein Forum zur Verfügung steht, die
                                eigene Sprache zu präsentieren und damit ggf. aufzuwerten.
                            </p>

                            <p>
                                Dennoch wird Wikipedia besonders im universitären Milieu eher
                                geschmäht als gelobt. Daran sind zum Teil die Studierenden selbst
                                schuld, die (in der Vergangenheit) in unbeschreiblicher Dummheit
                                komplette Passagen, wenn nicht gar komplette Artikel mit
                                Inhaltsverzeichnis und Bildern kopiert und diese als eigenständige
                                Leistung deklariert haben. Dass es für diese Form des geistigen
                                Diebstahls allerdings nicht unbedingt Wikipedia braucht, haben uns im
                                vergangenen Jahr u.a. der ehemalige Verteidigungsminister und eine
                                FDP-Politikerin demonstriert. Jedenfalls hat das Copy&Paste-Syndrom zu
                                einer totalen Ablehnung von Wikipedia auf Seiten vieler Professoren und
                                Professorinnen geführt.
                            </p>

                            <p>
                                Kritisiert an Wikipedia wird häufig auch, es sei nicht zitierfähig,
                                da die Seiten einem ständigen Wandel unterlägen und niemand sagen
                                könne, ob die zitierte Stelle auch später noch vorhanden sei. Das
                                stimmt nur bedingt. Es ist nämlich seit geraumer Zeit möglich, unter
                                "Werkzeuge / Permanenter Link" einen zitierfähigen Link zu generieren,
                                der garantiert, dass die Seite auch später noch genau in demselben
                                Zustand erscheint, wie in dem Moment, als die Seite zitiert
                                wurde. Beispielhaft wurden in der Linkliste unten für die Seiten Faeto und
                                Celle di San Vito permanente Links generiert.
                            </p>

                            <p>
                                Als Quelle für eine Erstinformation sollte Wikipedia hingegen auch an
                                der Uni nicht unterschätzt werden. Insbesondere seit Google bei
                                Suchanfragen Wikipedia-Einträge nach oben rankt, sind diese häufig
                                unter den ersten drei Treffern zu finden.<sup><a href="#fn1"
                                    name="fz1">1</a></sup>
                                Ob es sich dann tatsächlich
                                um eine zitierfähige Quelle im wissenschaftlichen Sinne handelt, darf
                                und muss in vielen Fällen angezweifelt werden. Eine kategorische
                                Ablehnung führt da allerdings nicht weiter. Eher sollte den
                                Studierenden die Kompetenz vermittelt werden, zwischen zitierfähigen
                                und nicht zitierfähigen Quellen zu unterscheiden. Mit der Versorgung
                                als Erstinformation ist eine der Aufgaben genannt, die Wikipedia auch im
                                universitären Milieu erfüllen kann und soll. Wer jedoch für
                                wissenschaftliche Arbeiten ausschließlich auf Wikipedia zurückgreift,
                                hat an der Hochschule nichts verloren.
                            </p>

                            <figure className="imageleft">
                                <p style={{ width: "280px" }}><a href="#b1"
                                    name="abb1">Abb. 1</a>:
                                    Artikel Faeto in Wikipedia</p>
                                <button type="button" onClick={() => {
                                    setIndex(0);
                                    setOpen(true);
                                }}>
                                    <img src={FaetoSmall} width="250"
                                        height="170" alt="Faeto Artikel in Wikipedia
		                         vom 08.01.2012" />
                                </button>
                            </figure>

                            <h1>Von der Rezeption zur Produktion</h1>
                            <p>
                                Eine zweite wichtige Aufgabe, für die Wikipedia im Hochschulbereich
                                genutzt werden kann, besteht in der Möglichkeit der aktiven
                                Partizipation. Nur ein kleiner Teil der Rezipienten der weltweiten
                                Online-Enzyklopädie beteiligt sich aktiv an der Weiterentwicklung und
                                Verbesserung derselben. Das ist umso bedauerlicher, als diese Aussage
                                auch für viele Hochschulangehörige gilt. Besonders im deutschen
                                Sprachraum scheint dies zuzutreffen: „In Deutschland sind unter den
                                Autoren der Online-Enzyklopädie so gut wie keine Wissenschaftler“
                                (Lutzi 2011: 946). Ein wahres Manko, eine verpasste Chance. Und dies auf
                                vielen Ebenen.
                            </p>

                            <p>
                                Wikipedia böte nämlich die einmalige Chance, komplexe Inhalte
                                darzustellen und auf diese Weise fundiertes Wissen zu verbreiten. Die
                                Realität zeigt nun mal, dass viele Studierende häufig und zuerst in
                                Wikipedia nachschlagen. Das gilt auch für das eigene Fach. Wer also der
                                Meinung ist, seine Texte würden zu wenig von Studierenden gelesen,
                                hätte hier die Möglichkeit, den Kreis der Rezipienten zu vergrößern.
                            </p>


                            <h2>Schreiben in Wikipedia</h2>
                            <p>
                                Im Folgenden soll daher kurz geschildert werden, auf welche Punkte man
                                bei der Erstellung bzw. bei der Bearbeitung von Wikipedia-Seiten achten
                                muss und welche Vorteile die Bearbeitung für Studierende und Lehrende
                                haben kann.
                            </p>

                            <p>
                                Der Lerneffekt beim Verfassen von Artikeln besteht:
                            </p>

                            <ul>
                                <li>im strukturierten Denken und Schreiben;</li>
                                <li>im Verfassen von kurzen und verständlichen Beiträgen;</li>
                                <li>im sachlichen und präzisen Formulieren;</li>
                                <li>im Belegen von Behauptungen durch Quellen, diese müssen genau angegeben
                                    und nach den entsprechenden Richtlinien formatiert werden;</li>
                                <li>im Nutzen von Vorlagen (Templates), die Wikipedia anbietet und die dem
                                    Verfasser von Artikeln Web-Techniken näher bringen;</li>
                                <li>in einer strengen Peer Review durch die Community.</li>
                            </ul>

                            <p>
                                Dafür muss man nicht gleich komplette Artikel verfassen. Es reicht auch
                                aus, schon vorhandene zu verbessern – und seien es am Anfang nur
                                orthographische und stilistische Korrekturen. Das kann dann auch gleich
                                zur Übung zum Editieren von Artikeln dienen. Denn nicht ganz
                                unbegründet wird als Einstiegshürde immer wieder der – im Vergleich
                                zu Word oder ähnlichen Textverarbeitungsprogrammen – umständliche
                                Editormodus genannt. Auf der anderen Seite bietet Wikipedia sehr
                                ausführliche Hilfestellungen für Anfänger und eine „Spielwiese“,
                                auf der Einsteiger experimentieren können.
                            </p>

                            <p>
                                Im Folgenden sollen anhand des kurzen Artikels „Faeto“ verschiedene
                                Techniken demonstriert werden, die in Wikipedia zum Einsatz
                                kommen. <a href="#abb1" name="b1">Abb. 1</a> zeigt den Stand des
                                Artikels vom 8. Januar 2012.
                            </p>

                            <p>
                                So kurz der Artikel ist, so aufwendig scheint das Layout zu sein. Es
                                enthält:
                            </p>

                            <ul>
                                <li>ein Inhaltsverzeichnis, das aus den Überschriften generiert wird;</li>
                                <li>einen Kasten rechts (Infobox), der geologische und demographische Daten
                                    enthält;</li>
                                <li>ein eingebundenes Bild;</li>
                                <li>Überschriften, Formatierungen, Listen usw.;</li>
                                <li>IPA Fonts;</li>
                                <li>Weblinks.</li>
                            </ul>

                            <p>
                                Wenn wir uns nun den dazugehörigen Code im Editorfenster ansehen (s.
                                <a href="#abb2" name="b2">Abb. 2</a>), so zeigt sich, dass viele
                                Elemente im Layout automatisch generiert werden, falls die
                                entsprechenden Templates verwendet werden.
                            </p>



                            <p>
                                Damit der Artikel das typische Layout von Wikipedia-Artikeln erhält,
                                müssen einige Konventionen beachtet werden:
                            </p>

                            <ul>
                                <li>
                                    Überschriften erster Ordnung werden mit zwei Gleichheitszeichen
                                    (==Überschrift 1==) umschlossen;</li>
                                <li>
                                    Überschriften zweiter Ordnung werden mit drei Gleichheitszeichen (===Überschrift 2===) umschlossen;</li>
                                <li>
                                    kursiver Text wird mit zwei einfachen Hochkommata (''Text'')
                                    umschlossen;</li>
                                <li>
                                    fetter Text wird mit drei einfachen Hochkommata ('''Text''')
                                    umschlossen;</li>
                                <li>
                                    Verweise auf andere Artikel in Wikipedia werden in zwei eckige Klammern
                                    eingefasst ([[Link]]);</li>
                                <li>
                                    Verweise auf externe Seiten werden automatisch erkannt, wenn diese die
                                    Form "http://www.beispiel.de/"
                                    haben, oder sie  werden in einfache eckige Klammern eingefasst, wenn
                                    nicht die URL im Text erscheinen soll, sondern eine Beschreibung der
                                    Seite, zu der der Link führt ([Link auf externe Seite Beschreibung des
                                    Links]).</li>
                            </ul>

                            <p>
                                Schon mit diesen paar Anweisungen lässt sich ein einfacher Artikel
                                gestalten. Werden die Konventionen eingehalten, so wird beispielsweise
                                automatisch ein Inhaltsverzeichnis generiert. Auch die Links auf interne
                                und externe Seiten werden mit Hilfe der Konventionen automatisch
                                erzeugt. Für die meisten der genannten Formatierungen existieren im
                                Editorfenster Buttons, die das Formatieren von Text vereinfachen.
                            </p>

                            <p>
                                Für den Artikel „Faeto“ wurden beispielsweise die folgenden
                                Templates verwendet (s. <a href="#abb3" name="b3">Abb. 3</a>):
                            </p>
                            <ul>
                                <li>Vorlage Infobox Italien</li>
                                <li>Vorlage Einwohnerzahl (EWZ)</li>
                                <li>Vorlage Einwohner Datum (EWD)</li>
                                <li>Vorlagen für Geokoordinaten</li>
                                <li>Vorlage IPA</li>
                            </ul>

                            <figure className="imageleft">
                                <p style={{ width: "280px" }}><a href="#b2"
                                    name="abb2">Abb. 2</a>:
                                    Bearbeitungsfenster in Wikipedia</p>
                                <button type="button" onClick={() => {
                                    setIndex(1);
                                    setOpen(true);
                                }}>
                                    <img src={WikiBearbeitenSmall} width="250"
                                        height="170" alt="Bearbeitungsmodus Wikipedia" />
                                </button>
                            </figure>

                            <p>
                                Die Nutzung solcher Vorlagen ist in jedem Fall sinnvoll und sollte auch
                                für Anfänger kein Hindernis sein. So ist es beispielsweise kein
                                Problem, eine schon vorhandene Seite mit ähnlichem Inhalt zu kopieren
                                und dann auf die eigenen Bedürfnisse anzupassen. In unserem Fall böte
                                sich eine schon existierende Seite von einer kleinen Gemeinde in Italien
                                an, die dann mit den Daten von Faeto überarbeitet wird. Durch die
                                vorhandenen Templates wird die entsprechende Infobox generiert, d.h. es
                                wird automatisch eine Karte generiert, in der mit Hilfe der Geodaten die
                                genaue Lage von Faeto in Italien angezeigt wird. Durch die Vorlagen
                                „Einwohnerzahl (EWZ)“ und „Einwohner Datum (EWD)“ wird mit Hilfe
                                von Webservices auf die Daten von ISTAT zugegriffen. Der Verfasser des
                                Artikels muss hierfür nur den entsprechenden ISTAT-Code recherchieren,
                                damit werden dann die aktuellen Einwohnerzahlen aus der ISTAT-Datenbank
                                ermittelt, übertragen und im Artikel mit dem entsprechenden Datum
                                angezeigt.
                            </p>

                            <figure className="imageright">
                                <p style={{ width: "280px" }}><a href="#b3"
                                    name="abb3">Abb. 3</a>:
                                    Der Code für die Infobox in Wikipedia</p>
                                <button type="button" onClick={() => {
                                    setIndex(2);
                                    setOpen(true);
                                }}>
                                    <img src={WikiBearbeiten1Small} width="250"
                                        height="170" alt="Bearbeitungsmodus Wikipedia" />
                                </button>
                            </figure>

                            <h1>Motivation und Nutzen</h1>
                            <p>
                                Viele von den in Wikipedia verwendeten Schreibtechniken und Templates
                                können für Studierende auch bei weiteren Arbeiten von Nutzen sein.
                                Schon die Kenntnis, dass viele der angezeigten Daten automatisch
                                generiert werden, vereinfacht nicht nur die Bearbeitung, sondern führt
                                auch zur aktiven Nutzung und zum Verständnis modernster Techniken im
                                World Wide Web.
                            </p>

                            <p>
                                Die aktive Teilnahme an der Bearbeitung der weltweit größten
                                Online-Enzyklopädie kann helfen, den eigenen Schreibstil zu verbessern.
                                Schließlich sind die Ergebnisse sofort sichtbar, werden von vielen
                                anderen gelesen und rezipiert und, falls nötig, verbessert. Wikipedia
                                kann so als erste Möglichkeit für Studierende dienen, publizistisch
                                tätig und in der Öffentlichkeit wahrgenommen zu werden. Wieso
                                diese Möglichkeiten so wenig von angehenden und gestandenen
                                Wissenschaftlern genutzt werden, ist eigentlich nicht zu verstehen.
                                Schließlich hatte schon Alexander von Humboldt die geniale Idee,
                                eine Enzyklopädie zu verfassen, die das ganze Wissen der Welt enthalten
                                sollte:
                            </p>

                            <p className="longcitation">
                                Ich habe den tollen Einfall, die ganze materielle Welt, alles was wir
                                heute von den Erscheinungen der Himmelsräume und des Erdenlebens, von
                                den Nebelsternen bis zur Geographie der Moose auf den Granitfelsen,
                                wissen, alles in Einem Werke darzustellen, und in einem Werke, das
                                zugleich in lebendiger Sprache anregt und das Gemüth ergötzt. Jede
                                große und wichtige Idee, die irgendwo aufgeglimmt, muß neben den
                                Thatsachen hier verzeichnet sein. Es muß eine Epoche der geistigen
                                Entwickelung der Menschheit (in ihrem Wissen von der Natur) darstellen
                                (Alexander von Humboldt an Karl August Varnhagen von Ense, Berlin, 24.
                                Oktober 1834, in: Assing (1860: 20)).
                            </p>

                            <p>
                                „Fünf Bände des Kosmos verfasste der Universalgelehrte bis zu seinem
                                Tode – und griff dabei auf ein bis heute einzigartiges Netz aus über
                                2.000 Wissenschaftlern und Gelehrten zurück, denen er am Ende seines
                                Lebens gut 50.000 Briefe geschrieben hatte“ (Lutzi 2011: 946). Für
                                die damalige Zeit ein wahrhaft einmaliges Unterfangen. Übertragen auf
                                die heutige Zeit ist <i>collaborative writing</i> nichts Besonderes
                                mehr: Mit dem weltweiten Zugriff auf Ressourcen des Internets werden
                                zahlreiche Projekte von Gleichgesinnten und Begeisterten
                                realisiert. Und Wikipedia steht allen offen, nicht nur
                                technikbegeisterten Nerds, sondern auch Wissenschaftlern und
                                Begeisterten aus geisteswissenschaftlichen Fächern. Dabei sollte nicht
                                immer nur auf die Mängel und die Probleme der Online-Enzyklopädie
                                hingewiesen werden. Vielmehr sollte auch im akademischen Umfeld das
                                Beste aus Wikipedia genutzt werden. Und das besteht nun mal nicht nur
                                aus dem passiven Lesen und Abschreiben, sondern liegt in der aktiven
                                Nutzung und den daraus resultierenden Lerneffekten.
                            </p>

                            <h1>Anmerkungen</h1>
                            <p className="annotation"><sup><a href="#fz1" name="fn1">1</a></sup>
                                „Besonders erfolgsfördernd war die Symbiose mit Google. Schon nach
                                den ersten Jahren des Bestehens wurden die Wikipedia-Einträge in den
                                Ergebnissen von Google oft auf der ersten Seite, wenn nicht gar auf dem
                                ersten Platz angezeigt. Für beide Angebote war dies von Vorteil:
                                Wikipedia erhielt durch Google einen ständigen Zustrom von Lesern und
                                wurde somit auch für Autoren attraktiver. Google konnte im Gegenzug
                                seinen Besuchern ein Ergebnis liefern, das auf knappen Raum das
                                gewünschte Thema anschaulich beschrieb“
                                (<a href="http://www.heise.de/ct/meldung/Zehn-Jahre-Wikipedia-1170046.html"
                                    target="_blank" rel="noreferrer">
                                    http://www.heise.de/ct/meldung/Zehn-Jahre-Wikipedia-1170046.html
                                </a>).
                            </p>

                            <h1>Literatur</h1>

                            <p className="bibl">
                                Assing, Ludmilla (1860) (Hg.): <i>Briefe von Alexander von Humboldt an
                                    Varnhagen von Ense aus den Jahren 1827 bis 1858</i>, Leipzig.
                            </p>

                            <p className="bibl">
                                Lutzi, Tobias (2011): Et tu, Minerva? Wikipedia und die Wissenschaft,
                                in: <i>Forschung & Lehre</i>, 12, 946–947.
                            </p>

                            <h1>Internetquellen</h1>

                            <p className="bibl">
                                <a href="http://www.heise.de/ct/meldung/Zehn-Jahre-Wikipedia-1170046.html"
                                    target="_blank" rel="noreferrer" >
                                    http://www.heise.de/ct/meldung/Zehn-Jahre-Wikipedia-1170046.html
                                </a>
                            </p>

                            <p className="bibl">
                                Permanenter Link auf Faeto in der deutschen Wikipedia:
                                <a href="http://de.wikipedia.org/w/index.php?title=Faeto&oldid=98155645"
                                    target="_blank" rel="noreferrer">
                                    http://de.wikipedia.org/w/index.php?title=Faeto&oldid=98155645
                                </a>
                            </p>

                            <p className="bibl">
                                Permanenter Link auf Celle di San Vito in der deutschen Wikipedia:
                                <a href="http://de.wikipedia.org/w/index.php?title=Celle_di_San_Vito&oldid=98203765"
                                    target="_blank" rel="noreferrer">
                                    http://de.wikipedia.org/w/index.php?title=Celle_di_San_Vito&oldid=98203765
                                </a>
                            </p>

                        </article>
                    </section>
                </div>
            </div>
            <UpArrow />
            <Footer />
        </div >
    );
};

export default Tosques;