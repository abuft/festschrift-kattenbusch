import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Footer from "../Footer";
import upArrow from '../../images/layout/up-arrow.png';
import Header from "../Header";
import Rubrik from "../Rubrik";
import RumaenischOgg from "../../audios/jschmidt/schmidt-rumaenisch.ogg";
import RumaenischMp3 from "../../audios/jschmidt/schmidt-rumaenisch.mp3";
import SchmidtPortrait from "../../images/jschmidt/jschmidt-portrait.jpg";

function Schmidt(props) {

    const images = [
        { src: 'https://festschrift-kattenbusch.de/images/jschmidt/berge.jpg', caption: 'Berge' },
        { src: 'https://festschrift-kattenbusch.de/images/jschmidt/loewe.jpg', caption: 'Löwe' },
        { src: 'https://festschrift-kattenbusch.de/images/jschmidt/heu.jpg', caption: 'Heuträger' },
        { src: 'https://festschrift-kattenbusch.de/images/jschmidt/prozession.jpg', caption: 'Prozession' },
        { src: 'https://festschrift-kattenbusch.de/images/jschmidt/bogen.jpg', caption: 'Bogen' },
        { src: 'https://festschrift-kattenbusch.de/images/jschmidt/maedchen.jpg', caption: 'Mädchen' }
    ];

    const [open, setOpen] = useState(false);

    return (
        <div>
            <div id="Wrapper" className="container_14">
                <div id="Header">
                    <Header id={props.author} />
                    <div className="grid_9">
                        <h1 id="main_title">Warum Rumänisch?</h1>
                        <p id="author">Jochen Schmidt, Berlin</p>
                    </div>
                    <Rubrik />
                </div>

                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={images.slice(0)}
                />

                <div id="Teasers" className="clearfix">
                    <div className="grid_9">
                        <p>(Der Beitrag von Jochen Schmidt war zugleich der Gastvortrag bei der
                            Überreichung der digitalen Festschrift. Einen Mitschnitt des Vortrags
                            können Sie hier anhören [Anm. d. Hg.]):</p>

                        <audio controls={true} style={{ width: "512px" }}>
                            <source src={RumaenischOgg}
                                type="audio/ogg" />
                            <source src={RumaenischMp3}
                                type="audio/mpeg" />
                            <a href={RumaenischMp3}>Vortrag
                                herunterladen (MP3, 18 MB)</a>
                        </audio>

                        <p>
                            1996 bekam ich an der Humboldt-Universität eine Stelle als
                            studentische Hilfskraft bei Professor Kattenbusch. Das
                            Bewerbungsgespräch fand in einem leeren Raum mit schwarzem
                            Bakelit-Telefon statt, seinem provisorischen Büro. Er litt
                            noch unter dem Ost-Berliner Braunkohledunst, der mir bis
                            dahin gar nicht aufgefallen war. Ich hatte noch nie ein
                            monatliches Einkommen gehabt, und jetzt gleich für zwei
                            Jahre, das bedeutete ja finanzielle Sicherheit bis fast zur
                            Rente. Andererseits hatte ich auch noch nie regelmäßig
                            arbeiten müssen und dafür auch gar keine Zeit. Im Winter
                            ging die meiste Zeit fürs Heizen meines Kohleofens drauf,
                            und im Sommer musste man ja die Welt sehen. Schließlich war
                            die Wende noch nicht lange her, und da ich seitdem
                            studierte, blieben nur die Semesterferien für
                            Weltreisen. Hatte man Geld, hatte man keine Zeit, hatte man
                            Zeit, hatte man kein Geld, dieses ökonomische Grundgesetz
                            hatte wahrscheinlich schon Marx irgendwo beschrieben.
                        </p>
                    </div>

                    <div className="grid_5">
                        <div className="abouttheauthor">
                            <img src={SchmidtPortrait} width="120"
                                height="150" alt="Jochen Schmidt - Portrait" />
                            <div className="abouttheauthorfont"><br /><br />
                                <b>Jochen Schmidt</b>,
                                Autor, Journalist, Vortragskünstler. 1996–2000
                                studentische Hilfskraft am Lehrstuhl von Dieter
                                Kattenbusch, dabei Mitarbeit am Projekt VIVALDI.
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
                                    Professor Kattenbusch interessierte sich für Dialekte und
                                    Minderheitensprachen, das schien mir ein guter Weg. Man
                                    musste sich ja spezialisieren in dieser Welt, Experten waren
                                    gefragt. Ich musste mir irgendeine romanische Minderheit
                                    suchen, die bisher übersehen worden war, und dann würde ich
                                    mein Leben lang davon zehren. Professor Kattenbusch
                                    versuchte dann auch immer wieder, mich für Feldforschung auf
                                    eine Karibikinsel zu schicken, wo ein legendärer
                                    bretonischer Pirat eine Population begründet hatte, und
                                    einen einzigartigen Kreol-Sprachmix zwischen altem
                                    Französisch, Englisch und den Sprachen der einheimischen
                                    Bevölkerung. Aber es zog mich nicht in die Karibik. Was ich
                                    noch nicht wusste, war, dass ich mich für Osteuropa zu
                                    interessieren begann. Die DDR hatte ja 19 Jahre lang
                                    erfolgreich verhindert, dass es dazu kommen könnte, aber nun
                                    lernte ich die ersten Westdeutschen kennen, die freiwillig
                                    Russisch lernten. Das öffnete mir die Augen.
                                </p>
                                <p>
                                    Ein anderes Projekt war, mich nach Sizilien zu schicken, ins
                                    Osteuropa Italiens. Dort gab es sogar noch albanische
                                    Sprachinseln. Frühere Romanisten haben dort mit der Vespa
                                    lange Reisen unternommen und Dialektforschungen
                                    betrieben. Inzwischen war aber eigentlich alles Wichtige
                                    erforscht, man konnte immer irgendwo nachschlagen. Außerdem
                                    war nicht zu sehen, wie man sich aus der Kenntnis
                                    sizilianischer Dialekte eine Existenz aufbauen
                                    könnte. Unsere Ellenbogengesellschaft hatte ihre eigene
                                    Einstellung zu den Geisteswissenschaften. Wenn ich meinem
                                    Bruder von meiner Begeisterung fürs Altfranzösische
                                    erzählte, sagte er: „Können die Franzosen das nicht selbst
                                    erforschen?“
                                </p>
                                <p>
                                    Ich begann zu bedauern, dass ich mein Studium so falsch
                                    angegangen war, inzwischen war ich mit Mitte 20 für größere
                                    Sprünge schon zu alt. Man müsste die Romanistikstudenten im
                                    ersten Studienjahr in vier Länder der Romania schicken,
                                    jeweils drei Monate, das reicht, um eine Sprache zu
                                    lernen. Danach könnte das Studium beginnen. Ich war
                                    entschlossen, alle romanischen Sprachen halbwegs zu
                                    beherrschen, bevor ich mich der Prüfung stellen würde. Ich
                                    hätte es als peinlich empfunden, dem Prüfer in irgendeiner
                                    Frage unterlegen zu sein. Die Ansprüche waren hoch, ich
                                    hatte immer noch die Hausarbeit eines Studenten vor Augen,
                                    in der Professor Kattenbusch ein überflüssiges Leerzeichen
                                    angestrichen hatte.
                                </p>
                                <p>
                                    Professor Kattenbusch schenkte uns immer Exemplare seiner
                                    Publikationen, die er in großen Kisten im Büro lagerte. Im
                                    Laufe seiner Forscherbiographie arbeitete man sich an immer
                                    spezielleren Fragen ab, man promoviert über das Ladinische
                                    und habilitiert sich über das Sella-Ladinische. Aber ich
                                    hatte doch noch nicht mal den groben Überblick. Und ich
                                    interessierte mich ja nicht nur für die romanischen
                                    Sprachen, sondern auch für Literatur, Kino und
                                    fußballhistorische Forschungen. Und nebenbei gab es ja auch
                                    noch ein äußerst aufreibendes Privatleben mit einer
                                    Nicht-Romanistin. Man hätte eigentlich in der Uni wohnen
                                    müssen, um Zeit zu sparen, aber ich war auch nicht in der
                                    Lage, mir eine andere Wohnung zu suchen, dafür war der Tag
                                    einfach zu kurz. Außerdem hätte ich dann meinen
                                    DDR-Mietvertrag aufgeben müssen, und das wäre mir in der
                                    gegenwärtigen politischen Situation unklug erschienen. So
                                    blieb es bei den täglichen Fahrradfahrten vom Prenzlauer
                                    Berg zur Humboldt-Uni, selten war ich pünktlich, Unfälle
                                    waren an der Tagesordnung, die neuen Fahrzeuge passten noch
                                    nicht zu den alten Verkehrsregeln. Eine Ortlieb-Tasche hatte
                                    ich noch nicht, ich schnallte meine tschechische
                                    Ledertasche, die ich schon in der Schule benutzt hatte,
                                    umständlich mit Fahrradspinnen am Gepäckträger fest, die
                                    Tasche war oft so voll, dass ich sie kaum zubekam.
                                </p>
                                {/* <!-- Bild: Berge --> */}
                                <figure className="imageleft">
                                    <p>Abb. 1: Berge in Ladinien</p>
                                    <button type="button" onClick={() => setOpen(true)}>
                                        <img src="images/jschmidt/berge_small.jpg" width="206"
                                            height="135" alt="Berge in Ladinien" />
                                    </button>
                                </figure>
                                <p>
                                    Wir bereiteten dann eine Exkursion nach Südtirol vor, ins
                                    Gadertal, wir würden dort eine romanische Minderheit
                                    besuchen, die seit der Römerzeit immer noch ihre Sprache
                                    sprach. Das mussten ja störrische Menschen sein, ganze
                                    30.000 gab es noch von ihnen. Was ich mir erst langsam
                                    bewusst machte: Ich gehörte inzwischen schon selbst zu einer
                                    Minderheit, als Ost-Berliner im Prenzlauer Berg, als
                                    geborener Berliner in Berlin, als Student der HU, der noch
                                    in der DDR immatrikuliert worden war, und als
                                    Romanistik-Student, der sich für sein Fach interessierte. Im
                                    Büro nahmen wir Sprachunterricht bei Professor Kattenbusch,
                                    während Studenten anklopften, die mit rhetorischem Geschick
                                    ihre Prüfungsfragen herausbekommen wollten. Eine neue
                                    Generation.
                                </p>
                                <p>
                                    Wir fuhren mit dem Nachtzug, ich sah zum ersten Mal München,
                                    wenn auch nur den Hauptbahnhof. In Bozen gefiel mir ein
                                    Triumphbogen auf der Piazza della Vittoria, ich wusste
                                    nicht, dass er auf Mussolini zurückging. Ich
                                    fotografierte ihn vor dem Hintergrund des Gebirges, in
                                    schwarz-weiß, mit der Practica MTL3 von meinem Vater,
                                    neuerdings bildete ich mir ein, hochwertige Fotografien
                                    anfertigen zu müssen. Ich hatte mir eine rote Glühbirne und
                                    einen Apparat zum Entwickeln der Bilder gekauft, es wurde
                                    auch Zeit, denn die Digitalfotografie stand kurz vor ihrem
                                    Durchbruch.
                                </p>
                                {/* <!-- Bild: Loewe --> */}
                                <figure className="imageright">
                                    <p style={{ width: "115px" }}>Abb. 2: Triumphbogen auf der Piazza della
                                        Vittoria, Bozen</p>
                                    <a href="images/jschmidt/bogen.jpg" rel="lightbox"
                                        title="Abb. 2: Triumphbogen auf der Piazza della
			  Vittoria, Bozen">
                                        <img src="images/jschmidt/bogen_small.jpg" width="203"
                                            height="139" alt="Triumphbogen auf der Piazza della
				         Vittoria, Bozen" />
                                    </a>
                                </figure>
                                <p>
                                    Ich hatte noch nie so saubere Dörfer wie in Südtirol
                                    gesehen, die Äpfel wurden anscheinend noch am Baum einzeln
                                    poliert, und die Tiere trugen in den Ställen Hausschuhe. Wir
                                    wohnten in einer Pension in den Bergen, der Professor ging
                                    jeden Tag laufen, zu meiner 10-km-Zeit von 45 Minuten sagte
                                    er, das sei ja nicht sehr schnell. Die weiblichen
                                    Exkursionsteilnehmer wollten immer unter Sonnenschirmen
                                    sitzen und Espresso trinken. Der schmeckte besser als in
                                    Berlin der bittere Bürokaffee aus der Kaffeemaschine, der
                                    morgens gebrüht und bis abends warmgehalten wurde.
                                </p>
                                {/* <!-- Bild: Heu --> */}
                                <figure className="imageleft">
                                    <p>Abb 3: Heuträger</p>
                                    <a href="images/jschmidt/heu.jpg" rel="lightbox"
                                        title="Abb. 3: Heuträger">
                                        <img src="images/jschmidt/heu_small.jpg" width="131"
                                            height="193" alt="Heuträger" />
                                    </a>
                                </figure>

                                <p>
                                    Im Bus hörten wir alte Frauen Ladinisch sprechen, aus der
                                    Theorie wurde Praxis, wir waren so euphorisch, als wären wir
                                    zum ersten Mal einem vergessenen Indiovolk begegnet. Wir
                                    machten eine Wanderung, auf der wir alle Blasen bekamen, und
                                    die in nichts zu unseren dialektologischen Kenntnissen
                                    beitrug. Wir besuchten ein Institut, in dem man Wort für Wort
                                    das Wörterbuch durchging und nach Kompromissen für eine
                                    gemeinsame Sprachvariante für die ladinischen Dialekte
                                    suchte. Das Ladinische war zwischen verschiedenen Tälern
                                    zersplittert, Fassatal, Grödnertal, Gadertal. Überall schenkte
                                    man uns eigene Übersetzungen von „Der Kleine Prinz“, in jeder
                                    Varietät des Ladinischen eine. Wenn eine Gruppe das „e“ etwas
                                    offener aussprach als die andere, waren beide der Meinung, gar
                                    nicht die gleiche Sprache zu sprechen. Ich kannte das aus
                                    Ost-Berlin, wo ich mich zunehmend an den sich durchsetzenden
                                    Sprachgewohnheiten der aus dem Westen Zugereisten störte, die
                                    kleinen Unterschiede sind oft viel auffallender als die
                                    großen.
                                </p>
                                {/* <!-- Bild: Prozession --> */}
                                <figure className="imageright">
                                    <p>Abb 4: Prozession</p>
                                    <a href="images/jschmidt/prozession.jpg" rel="lightbox"
                                        title="Abb. 4: Prozession">
                                        <img src="images/jschmidt/prozession_small.jpg" width="211"
                                            height="146" alt="Prozession" />
                                    </a>
                                </figure>
                                <p>
                                    Auf einer Alm trugen alte Frauen riesige Heubündel auf dem
                                    Rücken. Man musste regelmäßig mit speziellen
                                    Schubkarren die Erde wieder den Berg hochbewegen, weil sie
                                    vom Ackerbau mit der Zeit immer runterrutschte. Während die
                                    Felder der abgewickelten Brandenburger LPGs aus Verlegenheit
                                    mit Raps und Sonnenblumen bepflanzt wurden und ABM-Kräfte
                                    mit Händeklatschen die Krähen verscheuchten. Zufällig
                                    gerieten wir in eine Prozession, ein Engel wurde von
                                    Menschen in schwarzen Anzügen herumgetragen, hier war ja
                                    wirklich noch Mittelalter. Ich machte das Pressefoto des
                                    Jahres von einem weiß gekleideten Mädchen mit Brille, aber
                                    leider mit einer MTL3.
                                </p>

                                <p>
                                    Ich blieb weitere zwei Jahre bei Professor Kattenbusch, das
                                    Ziel, die Rente, rückte in noch greifbarere Nähe. Ich
                                    schrieb keine Arbeit über das Ladinische und auch keine über
                                    Sprachvergleich anhand von Medikamentenbeipackzetteln. Dafür
                                    versuchte ich, meine 10-km-Zeit zu verbessern, im Geist
                                    rannte ich immer gegen Professor Kattenbusch. Ich bereitete
                                    mich auch auf meinen ersten Marathon vor, damals war das
                                    noch kein Lifestyle-Phänomen. Die Arbeit im Büro veränderte
                                    sich, das Internet setzte sich durch. Man suchte noch mit so
                                    etwas wie Lycos oder Altavista nach Dingen, die Romanisten
                                    interessieren könnten, oder, mit weniger Erfolg, nach
                                    Nacktbildern von Winona Ryder. Unser Computer hatte zwei
                                    Gigabyte Speicherplatz, inzwischen würde er in jedes Handy
                                    passen.
                                </p>

                                {/* <!-- Bild: Mädchen --> */}
                                <figure className="imageleft">
                                    <p>Abb 5: Mädchen im weißen Kleid</p>
                                    <a href="images/jschmidt/maedchen.jpg" rel="lightbox"
                                        title="Abb. 5: Mädchen im weißen Kleid">
                                        <img src="images/jschmidt/maedchen_small.jpg" width="152"
                                            height="212" alt="Mädchen im weißen Kleid" />
                                    </a>
                                </figure>
                                <p>
                                    Ich machte einen Russischkurs in Moskau und lernte dort eine
                                    Bulgarin kennen. Ich folgte ihr nach Bulgarien und lernte,
                                    so gut ich konnte, Bulgarisch. In diesem Land war meine
                                    Vergangenheit noch lebendig. Das Bulgarische, so hätte
                                    Goethe gesagt, erschien mir als eine lustige Abart des
                                    Russischen. Ich machte zwei Polnischkurse in Krakau, ein
                                    alter Traum, etwas vom Geheimnis dieser Zischlautsprache zu
                                    lüften. Es war wie in der Romanistik: Die slawischen
                                    Sprachen waren wie Geschwister, und jede hatte ihre eigenen
                                    Nachbarsprachen, die man besser mitlernte, wenn man die
                                    Feinheiten des Wortschatzes verstehen wollte. Ich ging zwei
                                    Monate nach Sarajevo und paukte das dortige, mit türkischen
                                    Begriffen gewürzte Serbokroatisch, jetzt fehlten mir nur
                                    noch Slowenisch, Tschechisch und Slowakisch. Ich holte das
                                    Latinum nach, wie sollte man sonst Romanist sein? Das
                                    Graecum ergab sich aus den Fragen, die die Balkansprachen
                                    aufwarfen. Beides wäre im Westen sicher Abiturstoff
                                    gewesen. Ich machte einen zweiten Russischkurs in Moskau,
                                    dann einen in Kaliningrad, wo ich das Geburtshaus meiner
                                    Mutter aufsuchte, und einen in Minsk, es gab ja auch noch
                                    Weißrussisch! Immer noch war ich dem Institut eine
                                    Magisterarbeit schuldig.
                                </p>
                                <p>
                                    Aber das waren alles erst die
                                    Grundlagen für ein Romanistikstudium, so empfand ich
                                    das. Man musste ein guter Slawist sein, um sich ans
                                    Rumänische zu wagen. In Jena gibt es in jedem Frühjahr einen
                                    Rumänisch-Intensivkurs, ich nahm sechs Mal teil, und ich
                                    beneidete die Studenten dort, die eine mehrstöckige
                                    Präsenzbibliothek mit Blick in den Wald hatten, während wir
                                    in Berlin noch mit einer Art Kammer begonnen hatten, in der
                                    man Zettel ausfüllte, um Bücher zu bestellen, von denen man
                                    drei Tage später erfuhr, dass sie gar nicht da waren. Wenn
                                    ich in Jena mit dem Studium begonnen hätte, rechnete ich mir
                                    aus, dann wäre ich längst promoviert. Außerdem konnte man
                                    nur hier Rumänisch lernen, während die Rumänistik in Berlin
                                    immer mehr verkümmerte. Und Rumänisch war die Krönung von
                                    allem, die einzige romanische Sprache in Osteuropa, mit
                                    einem bis zu 50 Prozent starken Anteil an slawischem
                                    Wortschatz.
                                </p>
                                <p>
                                    Warum Rumänisch? Das wird man eigentlich immer
                                    gefragt, wenn man sagt, dass man Rumänisch lernt. Ich
                                    wundere mich immer über eine solche Frage. Ich frage mich ja
                                    auch nicht, warum ich sprechen gelernt habe, ich nehme an,
                                    es hat mir damals Spaß gemacht. Ich würde auch gerne lernen,
                                    einen Hundeschlitten zu steuern, oder wie die Namen aller
                                    US-Bundesstaaten lauten, oder wie man Schweinefleisch
                                    pökelt. Ist Rumänisch wichtiger? Ich könnte jetzt sagen,
                                    dass es ein lateinisches Wort gibt, das sich in allen
                                    romanischen Sprachen nur noch im Rumänischen erhalten hat:
                                    <i>ligula</i>, der Löffel, heißt dort <i>lingură</i>. Die Rumänen haben
                                    das Wort „Löffel“ gerettet! Und nur auf Rumänisch ist der
                                    Tag weiblich: <i>o zi</i>, wie im Latein. Aber das macht
                                    Rumänischsprechen noch nicht nützlicher als
                                    Hundeschlittensteuern. Ich lerne Rumänisch auch nicht, weil
                                    ich es brauche. Dann hätte ich gar keine Lust
                                    dazu. Dinge, die ich machen muss, treffen bei mir auf
                                    unüberwindliche innere Widerstände. Mein Geist muss sich
                                    frei bewegen können, wie ein Kind, das über eine Straße
                                    schlendert und die Schultasche auf dem Boden hinter sich
                                    herzieht. So lerne ich jeden Morgen den täglichen
                                    Wikipedia-Artikel, weil ich ihn nicht brauche. Mal was über
                                    Genetik, mal was über malayische Geschichte, aber möglichst
                                    nutzlos. Wobei man ja nie weiß! Man muss nur an den Ukrainer
                                    denken, der von sowjetischen Partisanen angeklagt wurde, ein
                                    faschistischer Spion zu sein. Er behauptete, sich als
                                    Mathematiker nicht für Politik zu interessieren. Zum Test
                                    ließen sie ihn die Euler-Form des Rests der Taylor-Reihe
                                    bilden. Weil ihm das gelang, blieb er am Leben, später wurde
                                    er Nobelpreisträger für Physik. Dass man ausgerechnet
                                    Taylor-Reihen studiert haben muss, um später nicht
                                    erschossen zu werden, würde keiner ahnen, und es
                                    funktioniert auch sicher nicht immer. Wobei auch hier die
                                    Frage ist, ob sich der Aufwand lohnt. Ich denke, ich würde
                                    lieber sterben, als Taylor-Reihen zu lernen, das weiß ich,
                                    weil ich es fürs Grundstudium Informatik hatte tun
                                    müssen. Ich kann also guten Gewissens sagen: Das Leben ist
                                    es nicht wert, dafür seine Zeit mit Taylor-Reihen zu
                                    verschwenden.
                                </p>
                                {/* <!-- Bild: Wanderung --> */}
                                <figure className="imageleft">
                                    <p>Abb 6: Auf Wanderschaft</p>
                                    <a href="images/jschmidt/schmidt_dk_wanderung.jpg" rel="lightbox"
                                        title="Abb. 6: Dieter Kattenbusch und Jochen
			  Schmidt auf Wanderschaft in Ladinien 1999">
                                        <img src="images/jschmidt/schmidt_dk_wanderung_small.jpg"
                                            width="255" height="163" alt="Auf Wanderschaft"
                                        />
                                    </a>
                                </figure>

                                <p>
                                    Es gibt ja überhaupt nur drei Gründe, warum man sich als
                                    Mann im Leben anstrengen muss: Ruhm, Geld und Frauen. Lerne
                                    ich deshalb Rumänisch? Es gibt sehr reiche Rumänen, die mit
                                    Models verheiratet sind, jeder Rumäne kennt sie, jeden Tag
                                    schreibt die Zeitung über sie, denn die Zeitung gehört ihnen
                                    ja. Aber sie können zum Teil schlechter Rumänisch als ich,
                                    jedenfalls Grammatik und Orthographie. Es sind ja meistens
                                    Kriminelle ohne Schulabschluss, aus dem Bodybuilder-Milieu,
                                    die irgendwann für einen Dollar einen ehemaligen
                                    Staatsbetrieb gekauft haben und jetzt als Chef einer selbstgegründeten Partei in die Politik streben. Man braucht also
                                    nicht sehr gut Rumänisch sprechen zu können, um an Geld und
                                    Frauen zu kommen. Bei Russisch kann man sich immerhin noch
                                    ausmalen, doch noch einmal in russische Kriegsgefangenschaft
                                    zu geraten und sich nur durch seine Sprachkenntnisse beim
                                    Lagerkommandanten zu empfehlen. Aber Rumänisch?
                                </p>
                                <p>
                                    Eigentlich lerne ich es ja nicht, ich kann es schon, ich
                                    muss nur den Trick herausbekommen. Wie Französisch hat sich
                                    Rumänisch aus dem Latein entwickelt. Man muss also nur
                                    Latein sprechen und sich dabei vorstellen, man sei mehrere
                                    Generationen rumänischer Schafhirten. Rumänisch zu lernen
                                    hilft mir, mein Französisch besser zu verstehen. Es ist wie
                                    ein benachbarter Berg, von dem aus ich es betrachten
                                    kann. Sprache ist ja ein politischer Begriff, eigentlich
                                    gibt es nur Dialekte. Man kann von Portugal über Spanien,
                                    Frankreich, die Schweiz, Italien bis nach Rumänien wandern
                                    und sich überall in derselben Sprache unterhalten, wenn man
                                    sie immer etwas anders ausspricht. Aber ich lerne nicht
                                    Rumänisch, um nach Rumänien zu reisen. Ich will es auch
                                    nicht sprechen können, das wäre sinnlos wie
                                    Zirkusakrobatik. Ich will es lernen, nicht sprechen. Das ist
                                    ein grundlegender Mangel aller Sprachkurse, sie zwingen
                                    mich, 20 anderen Ausländern in einer Sprache, die wir alle
                                    nicht beherrschen, zu erklären, wie man zum Bahnhof kommt,
                                    oder was man für typisch an seinem Heimatland hält. Das
                                    könnte ich auch auf Deutsch nicht. Das Schönste am
                                    Altgriechisch-Kurs war, dass man nicht sprechen musste.
                                </p>
                                <p>
                                    Ich muss immer wieder nach Rumänien reisen, um die Sprache
                                    zu lernen, zuhause erlahmt mein Interesse an Sprachen
                                    sofort. Während ich dort so sammelwütig werde, dass ich mich
                                    über jeden rumänischen Satz freue und sie alle abschreiben
                                    möchte. Ich möchte dann, dass man von morgens bis abends auf
                                    mich einredet, deshalb habe ich die ganze Zeit meine
                                    Kopfhörer auf und höre Nachrichten. Ich glaube, Schliemann
                                    hat auch auf diese Weise Sprachen gelernt, allerdings hatte
                                    er kein Radio, sondern hat einen Diener angestellt, der ihm
                                    wochenlang hinterherlief und vorlas. Neulich habe ich in
                                    einem Münchner Hotel eine Stunde lang Al Arabiya geguckt,
                                    obwohl ich nur manchmal „<i>sifr</i>“ und „<i>hamsa</i>“ verstanden habe,
                                    „null“ und „fünf“. Trotzdem hatte ich das Gefühl, nur noch ein
                                    paar Tage weitergucken zu müssen, bis der Knoten platzt, und
                                    ich Arabisch kann. Wenn man die Sprache dann tatsächlich
                                    lernt, stellt sich das als Illusion heraus, aber man hat
                                    weiterhin das Gefühl, dass nur noch diese drei unbekannten
                                    Wörter aus dem einen Zeitungsartikel fehlen, dann müsste man
                                    so weit sein. Aber schon kommen drei andere. Die Sprache
                                    spielt mit einem Katz und Maus. Aber nie so, dass man die
                                    Lust verliert. Man wird ja auch weiterhin Kreuzworträtsel
                                    lösen, obwohl man genau weiß, dass man nie alle lösen können
                                    wird, die es gibt, auch nicht, wenn die Gattin
                                    hilft. Genauso wenig angelt man, um alle Fische zu fangen.
                                </p>
                                <p>
                                    Es gibt eigentlich gar keine Rumänen, sondern Moldauer,
                                    Walachen und Siebenbürgen, die in einer historisch
                                    glücklichen Stunde zu einem Staat vereint wurden. Für andere
                                    war die Stunde weniger glücklich, sonst wären die
                                    Siebenbürgen eine ungarische, die Moldauer eine ukrainische
                                    und die Walachen eine bulgarische Minderheit. Irgendwann
                                    haben die rumänischen Intellektuellen beschlossen, dass
                                    Rumänien der legitime Erbe des alten Rom ist. Die Daker
                                    hätten die Bedeutung Roms damals erkannt und sich den Römern
                                    freiwillig unterworfen, weil sie vom selben Holz
                                    waren. Deshalb gibt es Rumänen, die Decebal heißen, nach dem
                                    damaligen Dakerkönig, und andere, die Trajan heißen, nach
                                    dem römischen Kaiser. Noch andere heißen mit Vornamen
                                    Ovidiu, Remus, Vergil oder Vespasian. Ein Historiker aus dem
                                    19. Jahrhundert hat in seiner Geschichte Rumäniens die Jahre
                                    ab der Gründung Roms gezählt und nicht ab der Geburt
                                    Christi.
                                </p>
                                <p>
                                    Das ist alles hochinteressant, aber nicht der Grund, warum
                                    ich Rumänisch lerne. Hochinteressante Dinge stehen auch im
                                    täglichen Wikipedia-Artikel. Alles Wissen ist ja gleich
                                    wissenswert. Rumänisch bestand einmal zur Hälfte aus
                                    slawischem Wortschatz. <i>Vrajitor</i> ist der Zauberer,
                                    während <i>врач</i> auf Russisch der Arzt ist. Das zu
                                    wissen, verschafft mir eine sinnlose Befriedigung. Es gibt
                                    auch Wendungen, wie <i>habar n-am</i>, „Ich habe keine
                                    Ahnung“. <i>haber</i> ist bekanntlich türkisch für
                                    „Information“, kommt aber vom arabischen اخبار und heißt
                                    dort ebenfalls „Information“ oder „Nachricht“. Auch deshalb
                                    habe ich mit Arabisch angefangen, um die arabischen Wörter
                                    im Rumänischen wirklich zu verstehen.
                                </p>
                                <p>
                                    Natürlich möchte ich auch noch Türkisch, Neugriechisch und
                                    mindestens eine skandinavische Sprache lernen. Ich kann
                                    schon einen schwedischen Satz: <i>„Ettusen Skåningar behöver
                                        opereras mot fetma varje år“.</i> Das war die Schlagzeile
                                    der ersten schwedischen Zeitung, die ich mir in Malmö
                                    gekauft habe: „Eintausend Schonen müssen jedes Jahr gegen
                                    Fettsucht operiert werden.“ Während mich fast alle
                                    Formulierungen, die ich in deutschen Zeitungen lese,
                                    abstoßen, fasziniert mich im Ausland solch eine Mitteilung.
                                </p>
                                <p>
                                    Wegen meiner Unfähigkeit, mich mit nützlichen Themen zu
                                    identifizieren, würde ich Professor Kattenbusch gerne für
                                    ein ganz und gar überflüssiges Projekt begeistern. Ich würde
                                    gerne eine Kunstsprache entwickeln, die das Gegenteil von
                                    Esperanto ist, also so kompliziert wie möglich. In der es
                                    keine regelmäßigen Verben gibt. In der man nicht nur wie auf
                                    Arabisch bei Zahlen von eins bis zehn weibliche Adjektive
                                    mit männlichen Substantiven verbindet, sondern in der für
                                    jede Zahl eine andere Regel gilt. In der man, je nach
                                    Gesprächssituation, „30“ sagen muss, weil es als unhöflich
                                    gilt, die Zahl 20 zu benutzen. Es gibt in dieser Sprache
                                    Knack-, Schnalz-, Zisch-, Würgelaute und nasale Plosive. Es
                                    gibt jeden Laut grundsätzlich stimmhaft, stimmlos, hart,
                                    weich, betont und unbetont, und jeder wird anders
                                    ausgesprochen, je nachdem, welcher Laut ihm vorangeht oder
                                    folgt. So eine Sprache würde ich mir gerne ausdenken und sie
                                    anschließend lernen, weil es überhaupt keinen Sinn hat. Aber
                                    es wäre ein Beweis für die Schönheit unserer Wissenschaft.
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

export default Schmidt;