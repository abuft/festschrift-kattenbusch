import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Footer from "../Footer";
import Rubrik from "../Rubrik";
import UpArrow from "../UpArrow";
import GrossmannPortrait from "../../images/dgrossmann/dgrossmann-portrait.jpg";
import Vivtka1Small from "../../images/dgrossmann/vivtka-1_small.png";
import Vivtka2Small from "../../images/dgrossmann/vivtka-2_small.png";
import Vivtka3Small from "../../images/dgrossmann/vivtka-3_small.png";
import Goldwave1Small from "../../images/dgrossmann/goldwave-1_small.png";
import Paintshop1Small from "../../images/dgrossmann/paintshop-1_small.png";

const images = [
    {
        src: "https://festschrift-kattenbusch.de/images/dgrossmann/vivtka-1.png",
        title: "Abb. 1",
        description: "Excel-Tabelle mit Transkriptionen",
    },
    {
        src: "https://festschrift-kattenbusch.de/images/dgrossmann/vivtka-2.png",
        title: "Abb. 2",
        description: "Excel-Tabelle mit Ortsinformationen",
    },
    {
        src: "https://festschrift-kattenbusch.de/images/dgrossmann/vivtka-3.png",
        title: "Abb. 3",
        description: "Kontrolle mit GoldWave",
    },
    {
        src: "https://festschrift-kattenbusch.de/images/dgrossmann/goldwave-1.png",
        title: "Abb. 4",
        description: "Konvertieren der Tondateien",
    },
    {
        src: "https://festschrift-kattenbusch.de/images/dgrossmann/paintshop-1.png",
        title: "Abb. 5",
        description: "Kartenerstellung mit PaintShop Pro",
    },
];
function Grossmann(props) {

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <div id="Wrapper" className="container_14">
            <div id="Header">
                <div className="grid_9">
                    <h1 id="main_title">Hinter den Kulissen von VIVALDI</h1>
                    <p id="author">Doreen Großmann, Berlin</p>
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

                    <h1>Einleitung</h1>
                    <p>
                        VIVALDI steht für VIVaio Acustico delle Lingue e dei
                        Dialetti d’Italia. Das Projekt ist ein interaktiver
                        Sprachatlas der Dialektlandschaften und Minderheitensprachen
                        Italiens, der im Internet frei zugänglich ist
                        (<a href="www2.hu-berlin.de/Vivaldi">VIVALDI-Homepage</a>). Die Hintergründe und die
                        Entstehungsgeschichte von VIVALDI sind in zahlreichen
                        Artikeln beschrieben worden (vgl. Kattenbusch 1995,
                        Müller/Köhler/Kattenbusch 2001, Kattenbusch
                        2003).<sup><a href="#fn1" name="fz1">1</a></sup> Mit der
                        Präsentation im Internet wird die Möglichkeit gegeben, das
                        gesammelte und aufbereitete Sprachmaterial anzuhören und mit
                        den vorgeschlagenen Transkriptionen zu vergleichen. In
                        diesem kleinen Artikel sollen die Arbeitsschritte
                        beschrieben werden, die im Berliner Büro des Instituts für
                        Romanistik der Humboldt-Universität zu Berlin ablaufen. Den
                        Arbeitsgängen in der Hauptstadt geht immer die Reise in eine
                        bestimmte Region Italiens voraus, während der die
                        Sprachaufnahmen durchgeführt werden. Es müssen dafür
                        geeignete Informanten sorgfältig ausgewählt sowie ein
                        ruhiger Platz für die Aufnahme gefunden werden. Nach dem
                        Schneiden und Transkribieren der Tondateien wird
                        gegebenenfalls eine Nachaufnahme durchgeführt, und erst
                        danach reist der Enquêteur zum nächsten Ort weiter. Ist eine
                        Aufnahme fertig, wird eine CD mit den geschnittenen und
                        ungeschnittenen Wave-Dateien zur Sicherheit (Stichwort:
                        Datensicherung) per Post nach Berlin geschickt.
                    </p>
                </div>

                <div className="grid_5">
                    <div className="abouttheauthor">
                        <img src={GrossmannPortrait}
                            width="100"
                            height="140"
                            alt="Doreen Grossmann - Portrait" />
                        <div className="abouttheauthorfont"><br /><br />
                            <b>Doreen Großmann</b>, M.A., freiberufliche
                            Artistin. Studium der Italianistik und der
                            Germanistischen Linguistik in Berlin. 2007–2011
                            studentische Hilfskraft am Lehrstuhl von Dieter
                            Kattenbusch, dabei Mitarbeit im Projekt VIVALDI.
                        </div>
                        <div className="clearfloat"></div>
                    </div>
                </div>

                <div id="Main">
                    <div id="Articles" className="grid_14">
                        <section id="posts">
                            <article className="post">

                                <p>
                                    Die im Folgenden beschriebenen Arbeitsschritte beginnen nach
                                    dem Eintreffen der CD und finden ausschließlich am Computer
                                    statt. Das größte Hilfsmittel für die Verarbeitung der Daten
                                    ist eine sehr leistungsfähige Excel-Tabelle, die VivTKA
                                    (VIVALDI Transkriptionsassistentin, im Folgenden mit TKA
                                    bezeichnet). In Müller/Köhler/Kattenbusch (2001: 59ff.)
                                    werden die Aufgaben und Funktionen der TKA genau beschrieben
                                    und einige Hintergründe zur Programmierung der Tabelle
                                    angegeben. Die Excel-Tabelle beinhaltet alle Transkriptionen,
                                    sortiert nach Region, Ort und Stimulus, und ermöglicht das
                                    Abspielen der Audiodateien mit Hilfe des
                                    Audioverarbeitungsprogramms GoldWave. Nach dem Hinzufügen
                                    der Transkriptionen eines neuen Ortes werden auf einem
                                    anderen Tabellenblatt die Informationen zu Informant und
                                    Ort aus dem Fragebogen übertragen. Dem schließt sich das
                                    Abspeichern der auf CD vorliegenden Tondateien in einem
                                    bestimmten Ordner unter der schon zugeordneten dreistelligen
                                    Ortsnummer an. Die Ortsnummer und der Pfad, in dem die
                                    Wave-Dateien liegen, müssen genau mit den Angaben in der TKA
                                    übereinstimmen, damit die Tondateien von der Tabelle aus
                                    abgespielt werden können.
                                </p>
                                <p>
                                    Es folgt nun die Kontrolle der eingetragenen Daten, indem
                                    alle Tondateien noch einmal angehört werden und mit den
                                    eingetragenen Transkriptionen verglichen werden. Daraufhin
                                    werden neue Karten erstellt bzw. die neuen Ortspunkte in
                                    eine bereits vorhandene Karte eingetragen. Sind all diese
                                    Arbeitsschritte getan, können die neuen Daten online
                                    gestellt werden und damit der Öffentlichkeit zugänglich
                                    gemacht werden.
                                </p>

                                <h1>Die Vivaldi Transkriptionsassistentin (VivTKA)</h1>
                                <p>
                                    Die als Datenbank fungierende Excel-Tabelle steht im Zentrum
                                    der Verarbeitung der Tondateien und ihrer
                                    Transkriptionen. Sie beinhaltet sämtliche Transkriptionen,
                                    die Ortsinformationen, das Transkriptorium und die Tabellen,
                                    in denen der Code für die phonetischen Zeichen angegeben
                                    wird (s. <a href="#abb1" name="b1">Abb. 1</a>).
                                </p>
                                <figure className="imageleft">
                                    <p style={{ width: "256px" }}><a href="#b1"
                                        name="abb1">Abb. 1</a>:
                                        Excel-Tabelle mit
                                        Transkriptionen</p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(0); }}>
                                        <img src={Vivtka1Small} width="256" height="199" alt="Excel-Tabelle mit Transkriptionen" />
                                    </button>
                                </figure>

                                <p>
                                    Im Tabellenblatt erscheinen die
                                    Transkriptionen in verschiedenen Farben, einmal in grün und
                                    einmal in rot. Im Kopf der Tabelle steht über den grünen
                                    Transkriptionen als Bemerkung „fertig“ und über den roten
                                    Transkriptionen „noch korrigieren“. In der Excel-Tabelle
                                    laufen im Hintergrund Programme, die die Transkription mit
                                    der dazugehörigen Tondatei verknüpfen. Wird keine
                                    entspechende Wave-Datei gefunden, so erscheint der Eintrag
                                    in rot. Anderenfalls wird die Transkription grün
                                    dargestellt. Da die Tondateien erst nach dem Eintragen der
                                    Transkriptionen im richtigen Pfad abgespeichert werden, kann
                                    diese Funktion zur Kontrolle der Daten genutzt werden. Erst
                                    nach der Kontrolle, d.h. wenn die Daten fertig für den
                                    Upload sind, erscheinen sie in grün.
                                </p>
                                <p>
                                    Der erste Arbeitsschritt besteht demnach im Eintragen der
                                    neu eingetroffenen Transkriptionen in die
                                    Excel-Tabelle. Kommen Daten aus einer noch nicht
                                    aufgenommenen Region vor, wird ein neues Tabellenblatt
                                    angelegt. Gibt es die Region schon, werden nur neue Orte
                                    hinzugefügt, unter denen die Transkriptionen aus dem
                                    Fragebogen übertragen werden. Zu jedem Ort werden auf einem
                                    anderen Tabellenblatt einige zusätzliche Informationen
                                    gespeichert. Dazu gehören zum Beispiel die Koordinaten bei
                                    Google Maps, die Wikipedia-Seite des Ortes, eventuell andere
                                    Webseiten und Informationen zu Dialekt, Informant und
                                    Aufnahmebedingungen (s. <a href="#abb2"
                                        name="b2">Abb. 2</a>). Ein
                                    Teil dieser Informationen
                                    erscheint dann auf den Webseiten im Internet, sobald eine
                                    Region angewählt wurde.
                                </p>
                                <figure className="imageright">
                                    <p style={{ width: "256px" }}><a href="#b2"
                                        name="abb2">Abb. 2</a>: Excel-Tabelle mit
                                        Ortsinformationen</p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(1); }}>
                                        <img src={Vivtka2Small} width="256"
                                            height="199" alt="Excel-Tabelle mit Ortsinformationen" />
                                    </button>
                                </figure>

                                <p>
                                    Nachdem die Transkriptionen eingetragen und die
                                    Wave-Dateien an entsprechender Stelle gespeichert wurden,
                                    beginnt nun ein zweiter wichtiger Arbeitsschritt: die
                                    Kontrolle der eingetragenen Daten. Dafür wird von der
                                    Excel-Tabelle aus jede einzelne Tondatei mit einem
                                    Audioprogramm geöffnet und abgespielt. Zur genaueren
                                    Kontrolle kann die Datei mit GoldWave aufgerufen werden
                                    (s. <a href="#abb3" name="b3">Abb. 3</a>). Dieses Programm
                                    ermöglicht das wiederholte Anhören einzelner Laute und
                                    Wortsegmente.
                                </p>
                                <p>
                                    Das Kontrollhören findet meistens zu zweit statt. Dabei
                                    können durchaus Diskussionen über die Charakteristik
                                    bestimmter Laute entstehen. Wie Laute wahrgenommen werden,
                                    hängt nicht nur vom subjektiven Hörempfinden ab, sondern
                                    auch von den technischen Geräten, vor allem von den
                                    Lautsprechern, die die Tondatei wiedergeben. Die erste
                                    Transkription geschieht in der Regel in Italien, direkt am
                                    Aufnahmeort, d.h. am Laptop und mit Kopfhörer. Die Kontrolle
                                    vollzieht sich hingegen in Berlin, wo der Computer mit einem
                                    externen Lautsprechersystem verbunden ist. Deshalb können
                                    beim Kontrollhören Differenzen zu den eingetragenen
                                    Transkriptionen auftreten, die dann zugunsten des frischen
                                    Höreindrucks korrigiert werden. Die Kontrolle findet immer
                                    am gleichen Rechner mit dem gleichen Lautsprechersystem
                                    statt, was die Transkriptionen des Projekts insgesamt
                                    vergleichbar macht.
                                </p>
                                <figure className="imageleft">
                                    <p style={{ width: "256px" }}>
                                        <a href="#b3" name="abb3">Abb. 3</a>: Kontrolle mit GoldWave</p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(2); }}>
                                        <img src={Vivtka3Small} width="256" height="199" alt="Kontrolle mit GoldWave" />
                                    </button>
                                </figure>

                                <p>
                                    Zum Thema des subjektiven Hörempfindens und der
                                    Wirklichkeitsnähe von Transkriptionen sei auf Dieter
                                    Kattenbuschs Artikel <i>Akustische Wirklichkeit und auditive
                                        Täuschungen. Wie realistisch kann eine Transkription
                                        sein?</i> aus dem Jahr 2008 verwiesen, in dem u.a. auf die
                                    Arbeitsweise der Enquêteure des AIS (Jaberg/Jud 1928–40)
                                    eingegangen wird.
                                </p>
                                <h1>Arbeitsschritte außerhalb der Excel-Tabelle</h1>
                                <p>
                                    Nach dem Kontrollhören sind die Transkriptionen fertig
                                    bearbeitet und können ins Internet gestellt werden. Bevor
                                    dies passiert, müssen jedoch noch einige Arbeitsschritte
                                    durchlaufen werden.
                                </p>
                                <p>
                                    Um möglichst geringen Speicherplatz auf dem Server zu
                                    verbrauchen, werden die Tondateien nicht als Wave-, sondern
                                    als MP3-Dateien hochgeladen. Die Umwandlung der Daten
                                    erfolgt mittels GoldWave (s. <a href="#abb4"
                                        name="b4">Abb. 4</a>).
                                </p>
                                <figure className="imageright">
                                    <p style={{ width: "256px" }}><a href="#b4"
                                        name="abb4">Abb. 4</a>: Konvertieren der Tondateien</p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(3); }}>
                                        <img src={Goldwave1Small} width="256" height="199"
                                            alt="Konvertieren der Tondateien" />
                                    </button>
                                </figure>

                                <p>
                                    Jede Karte einer Region basiert auf einer Vektorgraphik, die
                                    Italien, unterteilt in politische Regionen, zeigt. Aus
                                    dieser Karte wird die gewünschte Region mit Hilfe eines
                                    Vektorgraphikprogrammes, z.B. Adobe Illustrator,
                                    ausgeschnitten und in den für VIVALDI typischen Farben
                                    eingefärbt. Dieses Zwischenprodukt wird nun in das
                                    Bildbearbeitungsprogramm PaintShop Pro übertragen, wo mit
                                    Hilfe der Ebenenfunktion die unterschiedlichen Bestandteile
                                    zugefügt werden (s. <a href="#abb5" name="b5">Abb. 5</a>). Dazu gehören zum Beispiel
                                    das VIVALDI-Logo, die mit einem 3D-Effekt hervorgehobene
                                    grüne Fläche der Region, die Ortspunkte und
                                    -namen. Gegebenenfalls wird die Graphik Pixel für Pixel
                                    nachbearbeitet, damit unerwünschte weiße Pixel, die bei der
                                    Übertragung vom Vektorgraphikprogramm nach PaintShop Pro
                                    entstehen, das Bild nicht stören.

                                </p>
                                <p>
                                    Der Genauigkeit halber kann auf einer Ebene eine
                                    geographische Karte mit angepasstem Maßstab hinterlegt
                                    werden, die das Eintragen der Ortspunkte wesentlich
                                    erleichtert. Diese Ebene kann anschließend verborgen werden
                                    und hat damit keinen Einfluss auf die fertige Graphik. Ist
                                    die Bearbeitung der Karte abgeschlossen, wird die Datei in
                                    eine GIF-Graphik umgewandelt.
                                    Dem GIF-Bild werden nun die Koordinaten entnommen, die einen
                                    aktiven Bereich um den Ortspunkt und -namen bilden, der mit
                                    dem Erscheinen der Transkription auf der VIVALDI-Webseite
                                    verknüpft wird. Die Koordinaten werden in die Excel-Tabelle
                                    im Tabellenblatt Ortsinformationen eingetragen.
                                </p>
                                <figure className="imageleft">
                                    <p style={{ width: "256px" }}><a href="#b5"
                                        name="abb5">Abb. 5</a>: Kartenerstellung mit PaintShop Pro</p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(4); }}>
                                        <img src={Paintshop1Small} width="256" height="199"
                                            alt="Kartenerstellung mit PaintShop Pro" />
                                    </button>
                                </figure>

                                <p>
                                    Wurde der Datenbank eine neue Region hinzugefügt, so muss
                                    auch die Italienkarte auf der Startseite der
                                    VIVALDI-Webseite aktualisiert werden. Wie oben beschrieben,
                                    wird ausgehend von der Vektorgraphik eine Region
                                    ausgeschnitten und in PaintShop Pro übertragen. Dort wird
                                    diese in eine schon vorhandene Karte eingefügt, gegebenfalls
                                    nachbearbeitet und als GIF-Datei abgespeichert. Analog zu
                                    den Regionenkarten werden auch hier die Koordinaten der
                                    neuen Region in die Datenbank eingetragen, damit die Region
                                    auf der Startseite ausgewählt und angeklickt werden
                                    kann. Die Koordinaten werden aus dem GIF-Bild ermittelt und
                                    direkt in die Datenbank eingegeben.
                                </p>
                                <p>
                                    Mit der Vervollständigung der Karten ist es nun möglich, die
                                    neuen Daten ins Internet zu stellen. Dazu wird
                                    gegebenenfalls eine neue Region in der entsprechenden
                                    Datenbanktabelle angelegt.
                                </p>
                                <p>
                                    Die neuen Graphiken und die MP3-Dateien werden auf dem Server
                                    gespeichert, damit sie vom Programm eingelesen werden
                                    können. Danach wird aus der TKA eine MySQL-Datei erzeugt,
                                    die im Folgenden eingespielt werden kann. Wegen der großen
                                    Datenmenge wird die MySQL-Datei in der Art bearbeitet, dass
                                    nur die neuen Informationen vom Programm eingelesen werden,
                                    während anfangs immer der gesamte Datensatz übertragen
                                    wurde.
                                </p>
                                <p>
                                    Wurden alle Arbeitsschritte richtig ausgeführt, erscheint
                                    nun auf der VIVALDI-Homepage im grünen Balken auf der linken
                                    Seite eine neue Region, die nach dem Anklicken
                                    Ortsinformationen, eine Karte, Transkriptionen und
                                    Tondateien bereitstellt.
                                </p>

                                <h1>Anmerkungen</h1>
                                <p><sup><a href="#fz1" name="fn1">1</a></sup> Sämtliche
                                    Artikel, die das Projekt beschreiben, sind auf der
                                    <a href="http://www2.hu-berlin.de/vivaldi">VIVALDI-Homepage</a> in der Rubrik ‚Publikationen‘ zu finden.</p>


                                <h1>Literatur</h1>
                                <p className="bibl">
                                    AIS = Jaberg, Karl/Jud, Jakob (1928–1940): <i>Sprach- und
                                        Sachatlas Italiens und der Südschweiz</i>, 8 Bde., Zofingen.</p>
                                <p className="bibl">
                                    Kattenbusch, Dieter (1995): Atlas parlant de l’Italie
                                    par régions: VIVALDI, in: <i>Estudis de lingüística i
                                        filologia oferts a Antoni M. Badia i Margarit</i>, Barcelona,
                                    443–455.</p>
                                <p className="bibl">
                                    Kattenbusch, Dieter (2008): Akustische Wirklichkeit und
                                    auditive Täuschungen. Wie realistisch kann eine
                                    Transkription sein?, in: Gabriele Blaikner-Hohenwart
                                    u.a. (Hg.), <i>Ladinometria. Festschrift für Hans Goebl zum
                                        65. Geburtstag</i>, Bd. 2, Salzburg u.a., 179–187.</p>
                                <p className="bibl">
                                    Müller, Marcel Lucas/Köhler, Carola/Kattenbusch, Dieter
                                    (2001): VIVALDI – ein sprechender Sprachatlas im Internet
                                    als Beispiel für die automatisierte, computergestützte
                                    Sprachatlasgenerierung und -präsentation, in:
                                    <i>Dialectologia et Geolinguistica</i> 9,
                                    55–68.</p>
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

export default Grossmann;