import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Footer from "../Footer";
import Header from "../Header";
import Rubrik from "../Rubrik";
import UpArrow from "../UpArrow";
import BockPortrait from "../../images/gbock/gbock-portrait.jpg";
import BockMarathonMuenchen1987Small from "../../images/gbock/bock_marathon_muenchen_1987_small.jpg";
import BockMarathonBerlin1988Small from "../../images/gbock/bock_erster_gesamtdeutscher_marathon_berlin_1988_small.jpg";
import BockFruehstueckSmall from "../../images/gbock/bock_alpenpaessetour_anton_dieter_beim_fruehstueck_1989_small.jpg";
import BockLeihrennradSmall from "../../images/gbock/bock_alpenpaessetour_gb_mit_dem_leihrennrad_1989_small.jpg";
import BockSwissTriathlonStartSmall from "../../images/gbock/bock_start_Swiss-Triathlon_im_kalten_bergsee_1987_small.jpg";
import BockSwissTriathlonZielSmall from "../../images/gbock/bock_Swiss-Triathlon_1987_small.jpg";
import BockSwissTriathlonDanachSmall from "../../images/gbock/bock_nach_dem_Swiss-Triathlon_1987_small.jpg";
import BockPentathlonSmall from "../../images/gbock/bock_pentathlon_zieleinlauf_zell_am_see_1987_small.jpg";
import BockBodenseeTriathlonSmall from "../../images/gbock/bock_uli_dieter_bodensee-triathlon_1990_small.jpg";

const images = [
    {
        src: "https://fabio-tosques.de/images/gbock/bock_marathon_muenchen_1987.jpg",
        title: "Abb. 1",
        description: "Marathon in München 1987"
    },
    {
        src: "https://fabio-tosques.de/images/gbock/bock_erster_gesamtdeutscher_marathon_berlin_1988.jpg",
        title: "Abb. 2",
        description: "Marathon in Berlin 1988"
    },
    {
        src: "https://fabio-tosques.de/images/gbock/bock_alpenpaessetour_anton_dieter_beim_fruehstueck_1989.jpg",
        title: "Abb. 3",
        description: "Alpenpässetour 1988: Dieter und Anton beim Frühstück"
    },
    {
        src: "https://fabio-tosques.de/images/gbock/bock_alpenpaessetour_gb_mit_dem_leihrennrad_1989.jpg",
        title: "Abb. 4",
        description: "Alpenpässetour 1989: Günter Bock mit Leihrennrad"
    },
    {
        src: "https://fabio-tosques.de/images/gbock/bock_start_Swiss-Triathlon_im_kalten_bergsee_1987.jpg",
        title: "Abb. 5",
        description: "Start Swiss-Triathlon im kalten Bergsee"
    },
    {
        src: "https://fabio-tosques.de/images/gbock/bock_Swiss-Triathlon_1987.jpg",
        title: "Abb. 6",
        description: "Im Ziel: Swiss-Triathlon 1987"
    },
    {
        src: "https://fabio-tosques.de/images/gbock/bock_nach_dem_Swiss-Triathlon_1987.jpg",
        title: "Abb. 7",
        description: "Im Ziel: Swiss-Triathlon 1987"
    },
    {
        src: "https://fabio-tosques.de/images/gbock/bock_pentathlon_zieleinlauf_zell_am_see_1987.jpg",
        title: "Abb. 8",
        description: "Pentathlon: Zieleinlauf Zell am See 1987"
    },
    {
        src: "https://fabio-tosques.de/images/gbock/bock_uli_dieter_bodensee-triathlon_1990.jpg",
        title: "Abb. 9",
        description: "Das Trio: Uli, Dieter und ich beim Bodensee-Triathlon 1990"
    },
];


function Bock(props) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    return (
        <div id="Wrapper" className="container_14">
            <div id="Header">
                <Header id={props.author} />
                <div className="grid_9">
                    <h1 id="main_title">Der Neufahrner Triathlon</h1>
                    <p id="author">Günter Bock, Regensburg</p>
                </div>
                <Rubrik />
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={images.slice(0)}
                controller={{ closeOnBackdropClick: true }}
                plugins={[Captions]}
                captions={{ showToggle: true, descriptionMaxLines: 3, descriptionTextAlign: "center" }}
            />

            <div id="Teasers" className="clearfix">
                <div className="grid_9">
                    <p>
                        Wo und wann hatte ich Dieter eigentlich kennengelernt? Zum einen bei
                        einem Regensburger politischen Verein, wo er sich als Vorstand zuweilen
                        mit einer aus Berlin zugewanderten streitlustigen Lesbe herumschlagen
                        musste. Auf der anderen Seite erzählte meine damalige Partnerin Dagmar
                        öfters von einem <i>Dozenten Kattenbusch</i>. Sie studierte Englisch und
                        Französisch; das Schattentheater der Traumfabrik – und wohl vor allem
                        deren überlaufene Veranstaltungen – hatten es ihr jedoch mehr
                        angetan. Aber das ist eine andere Geschichte ...</p>
                    <p>
                        Eines Abends saßen wir zusammen mit einem gewissen Alfred in einer
                        Studentenkneipe namens <i>Oma Plüsch</i>. Die war hoffnungslos von Juristen
                        und WiWis okkupiert und von uns Geisteswissenschaftlern gemieden. Auch
                        die Weichspülmusik war nicht besonders. Ich habe mich höchstens
                        dreimal da hinein verirrt.
                    </p>
                    <p>
                        Zu meiner Verwunderung ging es an jenem besagten Abend die ganze Zeit
                        ums Laufen. Alfred war etwas beleibter und sah wirklich nicht wie der
                        ideale Läufer aus. Gegen Ende sagte Dieter zu mir: „Nächsten Mai ist
                        ein Marathon in München. Läufst du mit?“
                    </p>
                    <p>
                        Ich spielte regelmäßig freitags in der Uni Fußball, oft zwei bis
                        zweieinhalb Stunden. Ich sah mir die beiden an und sagte nach geraumer
                        Bedenkzeit: „Ja“. Diese Entscheidung sollte mein – und eventuell
                        auch Dieters – Leben ziemlich verändern.
                    </p>
                    <p>
                        Er fuhr mich noch nach Hause. Dies ging jedoch nur bis zu einem
                        Fußgängersteg über einen Donauarm. Obwohl es spät am Abend war und
                        ich nicht situationsgerecht gekleidet, nutzte ich die letzten 500 Meter
                        gleich als Trainingsauftakt.
                    </p>
                    <p>
                        Kurz darauf flog Tschernobyl in die Luft. Ich hatte leichtsinnigerweise
                        noch im Freien Fußball gespielt. Unsere Umgebung war durch den Regen
                        direkt betroffen. Das bedeutete eine längere Trainingspause, denn die
                        Meldungen der Bayerischen Staatsregierung waren widersprüchlich und man
                        wollte schließlich kein größeres Risiko eingehen; Milchpulver,
                        selbstgezogene Sprossen und Gemüsekonserven überwogen dann im
                        sommerlichen Speiseplan.
                    </p>

                    <h1 align="center">*  *  *</h1>
                    <p>
                        Anfang des Herbsts nahm ich das Lauftraining wieder auf. Langsam
                        steigerte ich die Distanzen. Den Winter über hätte man sich manchmal
                        auch etwas anderes vorstellen können.
                    </p>
                </div>
                <div className="grid_5">

                    <div className="abouttheauthor">
                        <img src={BockPortrait} width="120"
                            height="80" alt="Günter Bock - Portrait" />
                        <div className="abouttheauthorfont"><br /><br />
                            <b>Günter Bock</b>,
                            Organisations- programmierer und IT-Berater/Dozent,
                            geboren 1954 in Bayreuth. Aufgewachsen in Fichtelberg,
                            Gymnasium in Wunsiedel. Lebt seit Studienbeginn in
                            Regensburg: Studium Germanistik/Geschichte/Geographie,
                            abgeschlossen mit 1. und 2. Staatsexamen.<br />
                            <span style={{ color: "#666666" }}>Während der frustrierenden Bundeswehrzeit in Cham/Oberpfalz – heute bin ich gerichtlich anerkannter Kriegsdienstverweigerer – habe ich mit dem Schreiben begonnen. In der Hauptsache Prosatexte, die meist durch Alltagserfahrungen initiiert wurden; da ich auch Rockmusiker bin, schreibe ich ab und zu einen Songtext.<br />
                                Bisherige Veröffentlichungen: „Von Menschen und Tieren, ein Märchen“, „Harmonie“, „Gleichnis vom Goldgräber“, „Der Gesell“, alle in: „Hoffnungsblumen“, Autoren-Werkstatt 39, Anthologie, Hrsg. Rita G. Fischer, Frankfurt/Main 1993 (heute leider vergriffen – Restexemplare beim Autor erhältlich).
                                „Das Licht der Kerze (Beitrag zu Goethes Farbenlehre)“,
                                in: „Träumen in des Himmels blaue Weite“, Autoren-Werkstatt 85, Anthologie, Hg. Rita G. Fischer, Frankfurt/Main 2002.
                                „Die denkwürdigen Abenteuer des ehrwürdigen Herrn Josef K.“,
                                Eigendruck im Selbstverlag, Regensburg 2005.<br />
                                Mit diesem kleinen Essay möchte ich mich bei meinem Sports-, Geschäftspartner und Freund in allen Lebenslagen für viele schöne, aber auch schmerzliche Erlebnisse, die es ohne ihn so nicht gegeben hätte, herzlich bedanken.</span>

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
                                Im Frühjahr fuhren Dieter, sein Freund Anton und ich nach München zu
                                meinem ersten Halbmarathon. Es ging drei- oder viermal die gleiche Route
                                um den Feringasee. Das Laufen gelang gut. Doch aufgrund des schönen
                                Wetters hatten sich viele türkische Familien zum Grillen verabredet,
                                und die fetttriefenden Rauchschwaden trieben immer wieder in Richtung
                                der Laufstrecke. Für einen Vegetarier eine starke Zumutung.
                            </p>
                            <p>
                                Am Wochenende vor unserem Marathontermin schlug Dieters Härtetest voll
                                zu. In drei Etappen rund um Regensburg legten wir an den zwei Tagen fast
                                45 Kilometer zurück. Am Sonntag war ich vollkommen fertig und musste
                                mich die Woche über bei der Arbeit erholen.
                            </p>
                            <figure className="imageleft">
                                <p style={{ width: "300px" }}>Abb. 1: Marathon in München 1987</p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(0); }}>
                                    <img src={BockMarathonMuenchen1987Small} width="300"
                                        height="210" alt="Marathon in München 1987" />
                                </button>
                            </figure>
                            <p>
                                Dann kam der große Augenblick. Wir fuhren Samstag schon nach München
                                und übernachteten bei Bekannten von Dieter. Für Abendläufer ist ein
                                Beginn um 9 Uhr ein Gräuel.
                            </p>
                            <p>
                                Nach dem Start versuchten wir bewusst, <i>langsam</i> zu laufen, d. h. unseren
                                Trainingsschnitt mit fünf Minuten pro Kilometer. Alles klappte sehr
                                gut. Als wir jedoch nach Kilometer 30 in den Englischen Garten kamen,
                                sagte Dieter plötzlich: „Ich bin jetzt platt. Lauf du zu.“
                            </p>
                            <p>
                                Ich war etwas konsterniert. Ohne meinen Trainer? Ich bemühte mich,
                                gleichmäßig weiterzulaufen. Die nächsten zehn Kilometer waren die
                                härtesten meines bisherigen Lebens. Ich kühlte mit ausgegebenen
                                Schwämmen immer wieder Schläfen und Armgelenke, obwohl es nicht allzu
                                heiß war. Als ich schließlich das Olympiastadion erblickte, fiel mir
                                ein Stein vom Herzen. Ich hatte sogar noch Kraft für eine beherzte
                                Stadionrunde und lief knapp unter dreieinhalb Stunden durchs Ziel.
                            </p>
                            <figure className="imageright">
                                <p style={{ width: "220px" }}>Abb. 2: Marathon in Berlin 1988</p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(1); }}>
                                    <img src={BockMarathonBerlin1988Small}
                                        width="220" height="340" alt="Marathon in Berlin 1988" />
                                </button>
                            </figure>

                            <p>
                                Nach dem Duschen ging es mir ziemlich schlecht. Dieter hatte den <i>toten
                                    Punkt</i> im Englischen Garten schon vorweggenommen. Ich dachte mir:
                                „Jetzt weißt du, wie es ist. Ein Marathon reicht!“ Doch ich sollte
                                rückfällig werden. Und es war schon ein erhabenes Gefühl, Jahre
                                später beim ersten gesamtdeutschen Marathon zusammen mit Dieter durch
                                das Brandenburger Tor laufen zu können.
                            </p>
                            <h1 align="center">*  *  *</h1>
                            <p>
                                Es mag sein, dass die Idee mit dem Radfahren von mir kam. Genau weiß
                                ich es nicht mehr. Mein ehemaliger Mittelhochdeutschdozent, Stefan
                                Weidenkopf (wie ich ein Gerhard-Hahn- und somit Hugo-Kuhn-Schüler), war
                                hierin Meister und brachte mich mit Radsport Menzl in Verbindung. In
                                einem Hinterhof kauften die Rennfahrer ein, da gab es kein Rad von der
                                Stange. In liebevoller Handarbeit wurden individuelle Rennmaschinen
                                zusammengebaut und -geschraubt.
                            </p>
                            <p>
                                Stefan begleitete mich. Es gab tatsächlich ein reduziertes, schönes
                                weiß-rotes Exemplar für gute alte 900 Deutsche Mark. Da auch der
                                Rahmen auf meine Größe und Beinlänge passte, war ich nach kurzer
                                Bedenkzeit stolzer Besitzer dieses grazilen Gefährts.
                            </p>
                            <p>
                                Auf unsere halbverrückte Alpenpässe-Tour mit Anton konnte ich mein
                                Schmuckstück jedoch gar nicht mehr mitnehmen: An einem
                                Freitagnachmittag wurde mein Rad von einem kleinen Auto, in dem zwei
                                Frauen – vermutlich angeregt plaudernd – saßen (das stellte sich
                                erst heraus, nachdem ich mich mühsam wieder aufgerappelt hatte),
                                glattweg von hinten überrollt.
                            </p>
                            <figure className="imageleft">
                                <p style={{ width: "300px" }}>Abb. 3: Alpenpässetour 1988:
                                    Dieter und Anton beim Frühstück</p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(2); }}>
                                    <img src={BockFruehstueckSmall} width="300" height="210" alt="Alpenpässetour Frühstück" />
                                </button>
                            </figure>

                            <p>
                                Als es in der Pfingstwoche los ging, konnte ich mir von einem anderen
                                Trainingspartner Bernhard, der aufgrund zahlreicher sportlicher
                                Ankündigungen, aber auch Rückzüge den Beinamen <i>der Zauderer</i> trug, ein
                                Rad ausleihen, da mein neues noch nicht fertig war. Immer im Wechsel
                                fuhren zwei auf den Rädern, der dritte steuerte Dieters Bus. Bisweilen
                                war es schwierig, Dieters Hund <i>Ira</i> zu bändigen, insbesondere, wenn sie
                                mitkriegte, dass ihr Herrchen in der Nähe war. Über die
                                Glockner-Hochalpenstraße bei Nieselregen und oben Schneefall, den
                                Brenner und noch einige Pässe mehr landeten wir schließlich nach einer
                                anstrengenden Apennin-Überquerung in der wunderbaren Stadt Lucca.
                            </p>
                            <p>
                                Eine Dombesichtigung war unvermeidlich; anschließend gingen wir in eine
                                nahe Bar, um bei <i>cornetti</i> und <i>cappuccini</i>
                                die weitere Route zu besprechen.
                            </p>
                            <p>
                                Dabei wurden wir Zeugen einer großartigen Begebenheit. Eine Gruppe
                                betagter Wienerinnen betrat das Lokal. Sie hatten wohl noch alle ein
                                größeres Österreich miterlebt. Zielstrebig steuerten sie auf die
                                ausgestellten Hörnchen zu. Die Anführerin ergriff ohne Begrüßung
                                sofort die Initiative: „Sieß oder sauer?“ fragte sie den <i>barista</i>.
                            </p>
                            <p>
                                Der blickte etwas gelangweilt hinter seinem Tresen hervor und sagte ohne
                                mit der Wimper zu zucken: „Duecento lire“.
                            </p>
                            <p>
                                Die Dame war mit der Antwort unzufrieden. Zum zweiten Versuch setzte sie
                                mit erhobener Stimme an: „Ich maan – sieß oder sauer?“
                            </p>
                            <p>
                                Die Szene wiederholte sich. Der <i>barista</i> verharrte in seiner Stellung und
                                wiederholte im gleichen Tonfall: „Duecento lire“.
                            </p>
                            <figure className="imageright">
                                <p style={{ width: "260px" }}>Abb. 4: Alpenpässetour 1989: Günter Bock mit Leihrennrad</p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(3); }}>
                                    <img src={BockLeihrennradSmall} width="260" height="200" alt="Alpenpässetour mit Leihrennrad" />
                                </button>
                            </figure>

                            <p>
                                Ich war irritiert. Wir hatten zwei gut Italienisch Sprechende dabei. Wir
                                sollten doch den Damen behilflich sein! Ich blickte Dieter an, dann
                                Anton. Beide waren kurz davor, loszuprusten und konnten sich kaum mehr
                                gerade halten. Was sollte das? Die alten Damen … Doch langsam begriff
                                ich: Wir waren soeben mitten drin in einem interkulturell besetzten
                                Schauspiel.
                            </p>
                            <p>
                                Die Dame schien zu resignieren. „I glaab, der versteht uns ned“. Die
                                nächste kam ihr eilends zu Hilfe. Zu groß war der Appetit auf ein
                                <i>cornetto con</i> oder <i>senza cioccolata</i>. Mit
                                erhobenem Zeigefinger auf ein Objekt der Begierde
                                deutend, herrschte sie den <i>barista</i> an: „Sieß
                                oder sauer?“
                            </p>
                            <p>
                                Dieser verlor mit der schwierigen Kundschaft allmählich die Geduld.
                                Sich mit einer Hand hinter dem Ohr kratzend, die andere gestikulierend
                                in der Höhe, antwortete er lauter als zuvor: „Duecento lire“.
                            </p>
                            <p>
                                Wir waren von der Einmaligkeit und Tragik der Situation überwältigt
                                und mühten uns redlich, Haltung zu bewahren. Die Dame knurrte: „Er
                                versteht uns net“. Sie ergriff die noch vor ihr stehende ehemalige
                                Anführerin am Arm und mit einem „Trottl, bläda“ stürmte die
                                Gruppe aus der Bar, um woanders erneut ihr Glück zu versuchen.
                            </p>
                            <h1 align="center">*  *  *</h1>
                            <p>
                                Irgendwie logisch, dass wir auch mit Triathlon anfingen, genauer gesagt:
                                <i>Kurztriathlon</i>. Kurz deshalb, weil ich zwar ein ausdauernder, aber kein
                                schneller Schwimmer bin, denn ich beherrsche trotz Schwimmkurs die
                                Kraultechnik nicht und folglich stieg ich oft als fünft-, viert- oder
                                gar drittletzter aus dem meist zu kaltem Wasser.
                            </p>
                            <p>
                                Teilnahmemöglichkeiten gab es genug, mit Kallmünz und Neufahrn kleine
                                familiäre Veranstaltungen quasi vor der Haustür. Dieter wuchs immer
                                mehr in die Rolle des <i>technischen Direktors</i> hinein. Öfters sagte er:
                                „Ich hab uns übrigens angemeldet bei … Zum Beispiel einem <i>Swiss
                                    Triathlon</i>. In die Schweiz fahre ich gerne, dachte ich und hatte keine
                                Vorstellung, was uns blühen sollte.
                            </p>
                            <p>
                                An einem Freitag erfolgte die Anreise; wir wohnten in Ilanz bei Dieters
                                Freund Jean-Jacques – der gerade ein Rätoromanisch-Deutsches
                                Wörterbuch verfasste – und seiner Frau, die ursprünglich aus Polen
                                kam. Sie achtete sehr darauf, dass wir Leistungssportler auch immer
                                reichlich und gut zu Essen bekamen.
                            </p>
                            <p>
                                Am Samstag fuhren wir mit dem Auto die Radstrecke ab. Mir zitterten beim
                                Erkunden der zwei Pässe um Flims und Laax in einer atemberaubend
                                schönen Gebirgslandschaft die Knie. Jetzt ahnten wir, auf was wir uns
                                eingelassen hatten. Zudem hatten unsere Späher Hans und Werner, die
                                gerade in der Gegend Urlaub machten, von sehr kaltem Wasser berichtet,
                                da die Woche zuvor ein Schlechtwettergebiet durchgezogen war.
                            </p>
                            <figure className="imageleft">
                                <p style={{ width: "290px" }}>Abb. 5: Swisstriathlon 1987: Start im kalten Bergsee</p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(4); }}>
                                    <img src={BockSwissTriathlonStartSmall}
                                        width="290" height="180" alt="Swisstriathlon 1987 Start" />
                                </button>
                            </figure>

                            <p>
                                Mit bangem Erwarten begann der Sonntag. Das Wetter war gut, aber es war
                                nicht übermäßig warm. Ein Witzbold hatte auf einer Schiefertafel die
                                Wassertemperatur mit 18° Celsius angegeben – vielleicht hätten sie
                                sonst nicht starten dürfen. Die gefühlte Temperatur lag ein bis zwei
                                Grad darunter.
                            </p>
                            <p>
                                Nur mit Badehose und -kappe bekleidet, stürzten wir uns inmitten der
                                Neoprenträger ins Wasser. Aufgrund meiner Brustschwimmtechnik war ich
                                meistens über 25 Minuten in dem kühlen Element unterwegs, das meinen
                                schlanken Körper auszehrte. Schlotternd stieg ich als einer der letzten
                                aus dem Bergsee.
                            </p>
                            <p>
                                Die steile Auffahrt zur Straße war zu kurz, um warm zu werden. Zu
                                meinem Unglück ging es in großem Tempo mehrere Kilometer bergab.
                                Plötzlich überkamen mich Schüttelfröste; um Stürze zu vermeiden,
                                musste ich mehrere Male das Tempo radikal reduzieren. Dieter war weit
                                weg, andere Teilnehmer rauschten in schneller Fahrt an mir vorbei.
                            </p>
                            <p>
                                Endlich kam die Talebene des Vorderrheins, doch gegenüber ging es
                                gleich wieder die kleine Straße den Pass hinauf. Ich konnte mich
                                verpflegen und aufgrund der langsameren Bergfahrt wurde mir ganz langsam
                                wieder warm.
                            </p>
                            <p>Bergauf holte ich einige andere Bewerber ein. Nach der Passhöhe folgte
                                die nächste Abfahrt bis zum Talboden, die konnte ich jetzt sogar
                                genießen. Doch unten angekommen, war die Freude vorbei: es ging wieder
                                quälend lang hinauf zum Startplatz. Alle um mich herum stöhnten nun in
                                der Sonnenwärme, etliche gaben auf.
                            </p>
                            <p>
                                Im Umkleidebereich kamen Hans und Werner auf mich zu. „Der Dieter ist
                                mehr als zehn Minuten voraus!“ riefen sie aufgeregt. „Den holst du
                                heute nicht mehr ein.“
                            </p>
                            <figure className="imageright">
                                <p style={{ width: "290px" }}>Abb. 6: Swisstriathlon 1987: Im Ziel</p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(5); }}>
                                    <img src={BockSwissTriathlonZielSmall}
                                        width="290" height="180" alt="Swisstriathlon Ziel" />
                                </button>
                            </figure>
                            <p>
                                War mir schon klar und auch egal. Ich lief los und versuchte, nach der
                                Radfahrstrapaze allmählich Tritt zu fassen. Die Strecke führte anfangs
                                viel durch Wald und es ging bald besser. Ich wollte nur mehr unbeschadet
                                ins Ziel kommen. Doch kurz davor traute ich meinen Augen nicht: Da lief
                                doch tatsächlich Dieter! An einer kleinen Steigung konnte ich ihn sogar
                                noch überholen.
                            </p>
                            <p>
                                Bei meinem Zieleinlauf stürzte ich unsere Betreuer erneut in große
                                Aufregung. Wo war Dieter? Ich verstand nicht warum und sank ermattet ins
                                Gras. Erst allmählich wurde mir klar: Die beiden hatten nicht mit mir
                                gerechnet und befürchteten, sie hätten die Zielankunft unseres
                                technischen Direktors verschlafen.
                            </p>
                            <figure className="imageleft">
                                <p style={{ width: "280px" }}>Abb. 7: Nach dem Swisstriathlon 1987</p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(6); }}>
                                    <img src={BockSwissTriathlonDanachSmall}
                                        width="290" height="180" alt="Swisstriathlon danach" />
                                </button>
                            </figure>

                            <p>
                                Kurz darauf kam Dieter, fluchend; aber die Welt war wieder in Ordnung,
                                als wir die vorbereiteten Radler-Maßen hinunterstürzten. Einen
                                Swiss-Triathlon haben wir nicht mehr gebucht.
                            </p>
                            <h1 align="center">*  *  *</h1>
                            <p>
                                Die nichtchronologische Steigerung sollte ein Pentathlon werden. Was
                                bitte? Der technische Direktor hatte uns angemeldet, und so fuhren wir
                                mit Dieters umgebautem VW-Bus nach Zell am See. Das arme Fahrzeug war
                                vollkommen überladen: Laufschuhe und -klamotten sowieso,
                                Schwimmausrüstung auch. Wir stürzten uns aber ohne Neopren in die
                                Fluten. Dazu kamen die beiden Rennräder und für dieses Ereignis
                                zweimal Alpinski und das dazugehörige Equipment sowie zwei
                                Langlaufausrüstungen.
                            </p>
                            <p>
                                Es war Schlechtwetter angesagt. Wir fuhren trotzdem mit unserer Equipage
                                aufs Kitzsteinhorn, wo die Skibewerbe stattfanden. (Österreicher lassen
                                das deutsche „Wett-“ hier weg – ein sympathischer Zug.) Zuerst
                                also mein erster Riesenslalom mitten im Sommer! Durch die Wärme
                                bildeten sich bei jedem Tor tiefe Wannen; an ein halbwegs normales
                                Fahren war unter diesen Umständen nicht zu denken. Bezeichnenderweise
                                war hier Dieter sogar etwas schneller als der Grundstufenskilehrer.
                            </p>
                            <p>
                                Dann kam der Langlauf. Mit meiner geliehenen Ausrüstung musste ich drei
                                Runden drehen. Ich war etwas zu leicht angezogen. Vielleicht war das der
                                Grund, dass ich hier Dieter wieder ein paar Sekunden abnehmen konnte.
                                Aber in der Gesamtzeit war er noch vorne.
                            </p>
                            <p>
                                Wir fuhren mit der Zahnradbahn – in der Jahre später jenes traurige
                                und tragische Unglück passieren sollte – und unseren Utensilien
                                wieder hinunter und waren träge und ausgelaugt – vielleicht auch
                                wegen der ungewohnten Höhe. Den Rest des Tags schleppten wir uns müde
                                herum.
                            </p>
                            <p>
                                Am nächsten Morgen war das Wetter viel schlechter. Zudem wehte ein
                                böiger Wind. Ein ungutes Gefühl kam in mir hoch. Bei der Anfahrt und
                                angesichts des hohen Wellengangs im Zeller See versuchte ich sachte,
                                Dieter für ein Nichtantreten zu gewinnen. Er war unschlüssig. Doch
                                dann gab es einen kleinen Unfall: Beim Einparken mit dem ungewohnten
                                Bus, bei dem sämtliche Scheiben beschlagen waren, touchierte er die
                                Stoßstange des dahinter parkenden Autos. Das setzte sofort Adrenalin in
                                ihm frei und mit rotem Kopf rief er: „Wir starten!“
                            </p>
                            <figure className="imageleft">
                                <p style={{ width: "300px" }}>Abb. 8: Pentathlon 1987: Zieleinlauf in Zell am See</p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(7); }}>
                                    <img src={BockPentathlonSmall}
                                        width="300" height="200" alt="Pentathlon Einlauf" />
                                </button>
                            </figure>

                            <p>
                                Dem war nicht viel entgegenzusetzen. (Selbstverständlich befestigte
                                Dieter an dem fremden Auto einen Zettel an der Windschutzscheibe.) Im
                                kalten Wind trafen wir unsere Vorbereitungen, und ich ging schon
                                ausgekühlt ins Wasser. Bis zur Wendeboje konnte ich einigermaßen
                                zügig schwimmen, da der Wind von hinten kam. Doch dann wurde es viel
                                beschwerlicher. Ich spürte, wie die Kälte immer mehr in mich
                                hineinkroch; die kleinen Finger beider Hände wurden klamm. Auch die
                                Ringfinger kamen hinzu.
                            </p>
                            <p>
                                Einige langsame Schwimmer ließen sich durch Bootsbesatzungen aus dem
                                Wasser ziehen. Auch ich überlegte. Doch dann wäre der Bewerb vorbei
                                gewesen. Also strebte ich mit letzter Energie dem rettenden Ufer zu und
                                verschwand erst einmal minutenlang in einem Toilettenhäuschen.
                            </p>
                            <p>
                                Anschließend legte ich die Radkleidung an und fuhr los. Der
                                Umkleidebereich war menschenleer. Ich hoffte, mich auf der flachen
                                Radstrecke wieder warmzufahren. Doch nach zwei Kilometern kam das Ende.
                            </p>
                            <p>
                                Ich stellte verwundert fest, dass meine Beine immer träger und schwerer
                                wurden. Und plötzlich überkam mich wieder dieser Schüttelfrost. Die
                                Arme rissen so stark am Lenker, dass ich zu stürzen drohte. Ich blieb
                                kurz stehen und versuchte, wieder loszufahren. Ich kam nicht weit.
                            </p>
                            <p>
                                Ein holländischer Kollege – er hatte sich aus dem Wasser ziehen
                                lassen – hatte mich beobachtet. Er hieß mich ins Auto setzen und
                                drehte die Heizung voll auf. Mit klappernden Zähnen saß ich im Wagen
                                und konnte nicht einmal richtig sprechen. Mir war klar, dass nichts mehr
                                ging. Ich bat ihn, mich zum Umkleidebereich zurückzufahren. Das war in
                                all den Jahren meine einzige Aufgabe.
                            </p>
                            <p>Ich zog alles an, was ich dabei hatte. Stopfte sämtliche
                                Streckenverpflegung in mich hinein und trank meine Versorgungsflasche
                                leer. Dann sprang ich lange herum, um wieder einigermaßen warm zu
                                werden. Einigermaßen wiederhergestellt fuhr ich langsam mit dem Rad zum
                                Zielbereich, um Dieter zu beglückwünschen, als er im Nieselregen den
                                Zieleinlauf überquerte. „Nichts wie weg hier!“ oder so ähnlich
                                lautete der Kommentar des neuen Pentathleten.
                            </p>
                            <h1 align="center">*  *  *</h1>
                            <p>
                                Weiter ging es mit dem Bodensee-Triathlon. Wo hatte Dieter das alles nur
                                her? Seine damalige Partnerin Christine hatte immer mich im Verdacht,
                                Dieter zu diesen Eskapaden anzustacheln.
                            </p>
                            <p>
                                Da es ein <i>Ultra</i>-Bewerb war, teilten wir uns – wie die überwiegende
                                Mehrheit der anderen Starter auch – die Distanzen auf. Klar war, dass
                                Dieter die fünf Kilometer quer durch den See schwimmen musste – einen
                                anderen Verrückten hierfür hätten wir nicht gefunden. Klar war auch,
                                dass ich über 30 Kilometer laufen sollte. Es musste also noch ein
                                Radler her.
                            </p>
                            <p>
                                Bernhard der Zauderer winkte ab. Aber durch seine Vermittlung kamen wir
                                an Ulrich Dotter, einen früheren Vereinsfahrer, der immer noch einen
                                Schnitt von 37/38 Kilometern pro Stunde fahren konnte.
                            </p>
                            <p>
                                Wir trafen uns in Meersburg, sprachen die Taktik durch. Am nächsten
                                Morgen ging es auf das Südufer des Sees, wo sich Dieter, der
                                bewundernswert trainiert hatte und diesmal mit einem Neoprenanzug
                                ausstaffiert war, mit vielen anderen unter unseren Anfeuerungsrufen in
                                den See stürzte. Bald zog sich das Feld auseinander, das lotsende
                                Schiff begann langsam kleiner zu werden.
                            </p>
                            <figure className="imageright">
                                <p style={{ width: "330px" }}>Abb. 9: Im Trio beim Bodensee-Triathlon 1990</p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(8); }}>
                                    <img src={BockBodenseeTriathlonSmall}
                                        width="330" height="210" alt="Bodensee Triathlon" />
                                </button>
                            </figure>

                            <p>
                                Gemächlich fuhren Uli und ich auf die Nordseite hinüber. Der
                                technische Direktor schwamm streng nach seiner Zeitvorgabe und hielt
                                durch. Die meisten Radler waren schon auf der Strecke, als Uli startete.
                                Doch mit seiner Kraft und Routine machte er viele Plätze bei der
                                Rundfahrt um den Bodensee gut.
                            </p>
                            <p>
                                Dann kam die Reihe an mich. Mit einem mulmigen Gefühl lief ich los,
                                denn ich hatte die letzten Wochen kaum trainieren können. Das hatte ich
                                den beiden anderen bis zuletzt verschwiegen. Der Grund war folgender:
                                Eines Abends war Pater Alfred Welker, den alle nur <i>Don Alfredo</i>
                                nannten<sup><a href="#fn1" name="fz1">1</a></sup>, in
                                Regensburg zu Gast. Es war heiß, und ich kam zum Vortrag
                                zu spät. Alfred, mit ZZ-Top-Bart<sup><a href="#fn2"
                                    name="fz2">2</a></sup>, wusste viel und Interessantes aus
                                Cali zu erzählen, und ich stand vielleicht anderthalb Stunden mit
                                Jesuslatschen in einer Ecke des Raums. Am nächsten Morgen konnte ich
                                mit der rechten Ferse nicht mehr auftreten und ein später
                                hinzugezogener Orthopäde erklärte mir, dass ich einen Fersensporn
                                hätte. Ich bekam Schuheinlagen mit einer weichen Einbuchtung unter der
                                rechten Ferse.
                            </p>
                            <p>
                                Die nächsten zwei Wochen konnte ich nicht trainieren, erst eine Woche
                                vor dem Ultra-Bewerb hatte ich wieder mit kurzem Lauftraining begonnen.
                                Viel kam da nicht mehr zusammen.
                            </p>
                            <p>
                                Hinzu kam, dass es aufgrund der langen Distanzen schon ziemlich spät
                                war und die Sonne vom Himmel brannte, als ich endlich an die Reihe kam.
                                Die Strecke war zunächst flach. Ich achtete darauf, die lange Strapaze
                                nicht zu schnell anzugehen.
                            </p>
                            <p>
                                Als ich erwartungsvoll nach einem Wendepunkt Ausschau hielt, tauchte in

                                der Ferne ein imposanter Basaltkegel auf. Schaute interessant aus. Doch
                                plötzlich kam mir in den Sinn: „Die werden doch nicht …?“
                            </p>
                            <p>
                                Genauso kam es. Ein bis anderthalb Kilometer quälten wir uns in der
                                Hitze den steilen Berg hinauf. Viele Läufer und Läuferinnen gingen nur
                                noch. Endlich hechelnd oben angekommen, stürzte ich an der
                                Verpflegungsstation zwei bis drei Becher isotonisches Getränk in mich
                                hinein, dann machte ich mich sofort wieder auf den Rückweg.
                            </p>
                            <p>
                                Trotz der Hitze ging es jetzt etwas besser. Zum einen verschaffte das
                                schnellere Bergablaufen eine gewisse Kühlung, zum anderen kam ein
                                mäßiger Wind auf, der die hohen Temperaturen besser ertragen ließ.
                            </p>
                            <p>
                                Nach etwa zwei Dritteln der Strecke war ich mir sicher, trotz des
                                wenigen Trainings durchzuhalten. Eine Windböe raubte mein Kappl; da ich
                                noch ein Stirnband gegen den Schweiß dabei hatte, kam zurücklaufen
                                nicht in Frage. Völlig ausgelaugt lief ich ins Stadion ein, wo Dieter
                                und Uli schon sehnsüchtig auf meine Ankunft warteten. Erschöpft sank
                                ich auf das Gras. Einen Ultra-Bewerb haben wir nicht mehr gemacht.
                            </p>
                            <h1 align="center">*  *  *</h1>
                            <p>
                                Eine Neuauflage des bewährten Neufahrner Triathlons stand an. Da
                                kannten wir uns aus.
                            </p>
                            <p>
                                Dieter hatte sich im Vorfeld in nicht geringe Kosten gestürzt und bei
                                Radsport Menzl eine neue Rennmaschine anfertigen lassen. Er strahlte bei
                                jeder Vorführung und hatte dank der technischen und ballistischen
                                Verbesserungen den sicheren Sieg greifbar nahe vor Augen. Doch so leicht
                                gab ich mich nicht geschlagen.
                            </p>
                            <p>
                                Bei unseren Trainingsfahrten hielt ich mich zurück, klagte über
                                Schlappheit und müde Beine. Dieter schmunzelte. Fuhr ich dagegen mit
                                dem Zauderer aus, fuhr ich, was das Zeug hielt. So ging das vielleicht
                                zwei Wochen lang.
                            </p>
                            <p>
                                Kurz vor besagtem Termin ließ ich auf mein Rad eine neue Kette
                                aufziehen. Das glitzernde Ding war zumindest ein zusätzlicher
                                psychologischer Vorteil.
                            </p>
                            <p>
                                Am Bewerbstag fiel ich wie immer beim Schwimmen weit zurück. Auf dem
                                Rennrad gab ich alles und versuchte, den Abstand zu Dieter nicht zu
                                groß werden zu lassen. Da kein Sichtkontakt bestand, fuhr jeder wie
                                üblich sein eigenes Rennen.
                            </p>
                            <p>
                                Dann kam der Lauf. Ich kannte die Strecke und war gut drauf. Beherzt
                                lief ich los. Ich traute meinen Augen kaum, als nach etwa einer halben
                                Stunde der technische Direktor in der Ferne auszumachen war. Also war
                                der Abstand nicht so groß gewesen, wie zunächst befürchtet.
                            </p>
                            <p>
                                Ich lief mein Tempo weiter und stellte fest, dass ich ganz langsam zu
                                ihm aufschloss. Schließlich, vor der letzten Anhöhe, war ich mir
                                sicher, dass ich Dieter noch einholen konnte.
                            </p>
                            <p>
                                Als es dann soweit war, drehte er sich nicht einmal um. Er hatte seinen
                                Trainingspartner wohl an der Schrittfrequenz erkannt. Kurz bevor ich an
                                ihm vorbeizog, murmelte er: „Meine Taktik geht wohl nicht ganz auf!“
                            </p>
                            <h1 align="center">*  *  *</h1>
                            <p>
                                Im nächsten Jahr hatte Dieter ein Forschungssemester. Er hatte sich zum
                                ersten Mal einen mittleren Triathlon zum Ziel gesetzt und seine
                                Forschungen konzentrierten sich unter anderem auf zwei
                                Trainingseinheiten pro Tag. Das gab es noch nie.
                            </p>
                            <p>
                                Für mich kam eine mittlere Strecke wegen der leidigen Schwimmerei nicht
                                in Frage. Wir benützten jedoch wiederum den Neufahrner Bewerb, um dem
                                Mittel-Triathleten eine Trainingseinheit aus der Praxis angedeihen zu
                                lassen. Diesmal war er so gut drauf, dass ich ihn beim Laufen nicht mehr
                                einholen konnte; eine Stadionrunde war er am Schluss voraus.
                            </p>
                            <h1 align="center">*  *  *</h1>
                            <p>
                                Viel könnte noch über jenen Dozenten Kattenbusch berichtet werden,
                                doch dann hätte ich ein eigenes Buch schreiben müssen …
                            </p>
                            <p>
                                Nach seinem Umzug nach Gießen lief ich mit verminderter Drehzahl etwa
                                ein halbes Jahr weiter. Doch dann fehlten mir Ansporn und Aktivitäten
                                des technischen Direktors. Folglich frönte ich immer mehr meiner
                                anderen, älteren Leidenschaft: dem Bergsteigen mit und ohne Ski sowie
                                dem Gleitschirmfliegen.
                            </p>
                            <p>
                                Auch in den Bergen ergaben sich wieder viele neue Möglichkeiten einer
                                gemeinsamen spielerisch-sportlichen Betätigung.
                            </p>
                            <p>
                                Jeweils im August, wenn Dieter in seinem geliebten Seefelder
                                Feriendomizil weilt, unternehmen wir zusammen in den angrenzenden
                                Gebirgen ausgedehnte und interessante Touren.
                            </p>
                            <p>
                                Momentan befindet sich Dieter etwa in der Mitte einer
                                München-Venedig-Fernwanderung, die er mit Freunden aus
                                <i>Ossinien</i><sup><a href="#fn3" name="fz3">3</a></sup>
                                abschnittsweise durchführt. Für diesen Sommer – gemeint ist das Jahr
                                2011 – haben die Tuxer und Zillertaler Berge gerufen.
                            </p>
                            <p>
                                Für manche Abschnitte klinke ich mich ein, allerdings liegen mir
                                Flachetappen nicht besonders. So habe ich München – Bad Tölz
                                geschwänzt und auch in Venedig werde ich vermutlich nicht mit
                                einlaufen: Dieses zweifelhafte Vergnügen, über eine schier endlos
                                lange Brücke zu laufen, und noch dazu bei Regen und Gegenwind, habe ich
                                schon bei meinem zweiten Marathon – leider ohne Dieter, der gemeldet,
                                aber verhindert war – zur Gänze ausgekostet und vorweggenommen.
                            </p>


                            <h1>Anmerkungen</h1>

                            <p><sup><a href="#fz1" name="fn1">1</a></sup>
                                Dieter hatte einmal einen Arbeitsurlaub bei Alfred Welker in den
                                Slums von Cali/Kolumbien verbracht; siehe Kattenbusch, Dieter: <i>Cali.
                                    Tagebuch eines anderen Urlaubs</i>, Berlin 1997.
                            </p>
                            <p><sup><a href="#fz2" name="fn2">2</a></sup>
                                Für Nur-Klassik-Fans: ein langer rauschender Vollbart, wie er in
                                Bayern und zuweilen auch von texanischen Rockmusikern getragen wird.
                            </p>
                            <p><sup><a href="#fz3" name="fn3">3</a></sup>
                                So nenne ich seit einiger Zeit achtungsvoll das Gebiet der ehemaligen
                                DDR.
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

export default Bock;