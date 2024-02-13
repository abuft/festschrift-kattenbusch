import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Footer from "../Footer";
import Header from "../Header";
import Rubrik from "../Rubrik";
import UpArrow from "../UpArrow";
import KremnitzPortrait from "../../images/gkremnitz/gkremnitz-portrait.jpg";
import TitelSmall from "../../images/gkremnitz/titel_small.jpg";
import SeiteSmall from "../../images/gkremnitz/seite_small.jpg";

const images = [
    {
        src: "https://festschrift-kattenbusch.de/images/gkremnitz/titel.jpg",
        title: "Abb. 1",
        description: "Titelblatt des Exkursionsberichts"
    },
    {
        src: "https://festschrift-kattenbusch.de/images/gkremnitz/seite.jpg",
        title: "Abb. 2",
        description: "Die Abhandlung Dieter Kattenbuschs über die Albigenserkriege (Ausschnitt)"
    },
]
function Kremnitz(props) {

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <div id="Wrapper" className="container_14">
            <div id="Header">
                <Header id={props.author} />
                <div className="grid_9">
                    <h1 id="main_title">Über Exkursionen. Erinnerungen und Überlegungen</h1>
                    <p id="author">Georg Kremnitz, Wien</p>
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
                        Vor mir liegt ein unscheinbares, maschinegeschriebenes und kopiertes,
                        von nur einer Klammer notdürftig zusammengehaltenes Konvolut mit dem
                        Titel <i>Deutsch-Französisches
                            Austauschtreffen/Languedoc-Roussillon/Rencontre
                            Franco-Allemande</i> 3.–17.10.1976/Protokolle und Referate/Protocoles et
                        Rapports/Münster, Romanisches Seminar, Dezember 1976. Man sieht ihm
                        sein Alter an, die Seitenzahlen sind von Hand oben eingefügt. Immerhin
                        umfasst der Rechenschaftsbericht dieser ersten Exkursion, die ich mit
                        meinem Freund und Kollegen Peter Ronge veranstaltet habe, 141 Seiten.
                        Dabei verband sich seine Erfahrung in Exkursionen mit meiner damaligen
                        Unbekümmertheit, seine Kenntnisse der Möglichkeiten zum Einwerben von
                        Drittmitteln mit meiner Vertrautheit mit dem Umfeld in der besuchten
                        Region.<sup><a href="#fn1" name="fz1">1</a></sup> Die Exkursion fand
                        unmittelbar vor Beginn des Wintersemesters
                        statt, um den Studienbetrieb nicht zu beeinträchtigen, aber möglichst
                        alle wichtigen Gesprächspartner vor Ort anzutreffen. Für mich war es
                        der erste Versuch auf diesem Gebiet. Den vermutlich letzten habe ich,
                        zusammen mit einem anderen (ursprünglichen) Münsteraner, nämlich
                        Peter Cichon, der zuerst mein Schüler war, bevor er mir zum lieben
                        Kollegen (und Freund allemal) wurde, hier in Wien im vergangenen
                        Frühjahr glücklich zu Ende gebracht.
                    </p>

                </div>
                <div className="grid_5">

                    <div className="abouttheauthor">
                        <img src={KremnitzPortrait}
                            width="150"
                            height="110"
                            alt="Georg Kremnitz - Portrait" />
                        <div className="abouttheauthorfont"><br /><br />
                            <b>Georg Kremnitz</b>, o. Univ.-Prof. Dr., geb. 1945, seit 1986 o.
                            Univ.-Professor an der Universität
                            Wien. 1971–73 Lektor für Deutsch
                            an der Université de Bordeaux III, 1974–86 Akademischer Rat bzw.
                            Oberrat an der WWU Münster, dort war Dieter Kattenbusch sein Student.
                        </div>
                        <div className="clearfloat"></div>
                    </div>
                </div>
            </div>

            <div id="Main">
                <div id="Articles" className="grid_14">
                    <section id="posts">
                        <article className="post">
                            <h1>1 Erinnerungen</h1>
                            <figure className="imageright">
                                <p>Abb. 1: Titelblatt des Exkursionsberichts</p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(0); }}>
                                    <img src={TitelSmall} width="233"
                                        height="278" alt="Titelblatt des Exkursionsberichts" />
                                </button>
                            </figure>
                            <p>
                                Das wäre noch kein Grund, in diesem Band darüber zu reden. Die
                                Teilnehmerliste der damaligen Reise nennt allerdings, Seite vier, auch
                                als einen der wenigen männlichen Teilnehmer einen gewissen Dieter
                                Kattenbusch, damals Student in mittleren Semestern. Ich kannte ihn
                                deshalb schon etwas besser, weil er ungefähr ein Jahr zuvor der erste
                                (und bald einzige) Teilnehmer an meiner ersten Münsteraner Einführung
                                in das moderne Okzitanisch war. Die freundliche Aufforderung, etwas für
                                Dieter zu schreiben, die mich vor kurzem erreichte, führte meine
                                Gedanken rasch auf diese Anfänge unserer nun seit mehr als dreieinhalb
                                Jahrzehnten dauernden Freundschaft zurück und brachte mich auf den
                                Gedanken, ihm zu <i>diesem</i> Thema einige Seiten zu schreiben. Ich möchte
                                den folgenden kurzen Beitrag in zwei Teile gliedern: Zunächst mit
                                einigen Erinnerungen die Exkursion von 1976 Revue passieren lassen und
                                ein paar Worte über andere Exkursionen anfügen, um dann einige
                                Gedanken über den Sinn solcher Unternehmungen auszubreiten, die
                                vielleicht in der heutigen Zeit der bloßen Rentabilisierung von Studien
                                ein wenig unzeitgemäß sein mögen. Ich bin mir aber sicher, dass
                                Dieter viele Dinge ganz ähnlich sieht wie ich, und kann sie ihm deshalb
                                vortragen.
                            </p>
                            <figure className="imageleft">
                                <p>Abb. 2: Die Abhandlung Dieter Kattenbuschs</p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(1); }}>
                                    <img src={SeiteSmall} width="220" height="280"
                                        alt="Die Abhandlung Dieter Kattenbuschs" />
                                </button>
                            </figure>

                            <p>
                                Wir sind damals mit 36 Teilnehmerinnen und 5 Teilnehmern aufgebrochen,
                                zu denen noch die beiden Lehrenden, die Partnerin von Peter Ronge und
                                unser unvergleichlicher Busfahrer Theo Winterhalder kamen, zusammen
                                also 45 Personen. Allerdings musste ein Teilnehmer wegen eines plötzlichen
                                Todesfalls in der Familie schon am ersten Abend überstürzt die
                                Rückreise antreten. Natürlich wäre die Reise ohne eine Unterstützung
                                des Deutsch-Französischen Jugendwerks und der Universität Münster
                                nicht möglich gewesen;<sup><a href="#fn2" name="fz2">2</a></sup> wir
                                hatten zu diesem Zweck sogar eine
                                Partnerschaft mit den Okzitanisch-Studenten der Universität Montpellier
                                III gebildet (unter Leitung von Robert Lafont), aber die okzitanischen
                                Studierenden haben sich nie so stark für Westfalen und seine Mettenden
                                interessiert, dass sie tatsächlich einen Gegenbesuch gemacht hätten
                                (immerhin sind manche ihrer Lehrer mehr als einmal nach Münster
                                gekommen). Wir hatten uns und die Studierenden gut vorbereitet, denn das
                                Unternehmen situierte sich natürlich auch im gesellschaftlichen Kontext
                                der Jahre nach 1968 und im Rahmen der französischen
                                Regionalisierungsdebatte, die damals hohe Wellen schlug. Es ist am
                                einfachsten, ich zitiere einige Passagen aus der „Vorbemerkung“ von
                                Ronge und mir vom 15. Dezember 1976 (Seite 1, zwei Tippfehler werden
                                stillschweigend korrigiert):
                            </p>
                            <p className="quote">
                                Die vorliegende Broschüre berichtet über ein didaktisch-politisches
                                Experiment, das am Romanischen Seminar der Westfälischen
                                Wilhelms-Universität Münster mit drei abgestimmten Lehrveranstaltungen
                                im Sommersemester 1976 und mit der detaillierten materiellen und
                                inhaltlichen Vorbereitung eines themenorientierten Treffens von 41
                                Studierenden in der Region Languedoc-Roussillon eingeleitet und in
                                partnerschaftlicher Zusammenarbeit mit Lehrenden und Lernenden der
                                Universität Montpellier als Schwerpunkt sowie Referenten und
                                Gesprächspartnern in vielen anderen Orten durchgeführt wurde.
                            </p>
                            <p className="quote">
                                Der experimentelle Charakter in didaktischer Hinsicht lag in der engen
                                thematischen und methodischen Verbindung zwischen zwei Seminaren und
                                einem Sprachkurs einerseits und einem Aufenthalt in der Region, deren
                                wirtschaftliche, soziale, politische und kulturelle Probleme zuvor
                                thematisiert worden waren. Bei diesem Aufenthalt handelte es sich indes
                                nicht um eine klassische ‚Exkursion‘ mit nur komplementärer,
                                illustrativer Funktion, sondern um ein Treffen mit fachlich
                                vorgebildeten Lehrenden und Lernenden einer Hochschule sowie kompetenten
                                Gesprächspartnern im außerakademischen Bereich, das als vertiefende
                                Begegnung auf fortlaufenden Gedankenaustausch der Teilnehmer in beiden
                                Ländern über Regionalismus als internationalen Problemkomplex angelegt
                                war.
                            </p>
                            <p className="quote">
                                Das politische Experiment lag in der in dieser Hinsicht sehr heterogenen
                                Zusammensetzung der Teilnehmergruppen aus Münster und in der
                                Zielregion, darüber hinaus vor allem auch in der Berücksichtigung
                                eines möglichst umfassenden Spektrums politischer und ideologischer
                                Standpunkte bei den Referenten und Gesprächspartnern, da es nicht
                                Absicht der Veranstalter sein konnte und durfte, die Vielfalt der
                                Standpunkte zu ‚zensieren‘ oder die Teilnehmer durch einseitige
                                Auswahl festzulegen.
                            </p>
                            <p className="quote">
                                Neben dem eher fachgebundenen Aspekt einer ‚landeskundlichen‘
                                Lehrveranstaltung bot sich den Veranstaltern die Gelegenheit, mit den
                                Teilnehmern beiderseits der Staatsgrenzen – künftigen Lehrern und
                                deshalb wichtigen Multiplikatoren – auf Schwierigkeiten und
                                Lösungsinitiativen im Bereich der europäischen Integrationsbewegung
                                einzugehen, und dies eben nicht im abstrakten Diskurs, sondern im
                                konkreten Austausch mit unmittelbar Betroffenen. […]
                            </p>
                            <p>
                                Wie die etwas umständlich formulierte Vorbemerkung zeigt, hatten wir
                                große Ansprüche und Hoffnungen. Alle Teilnehmerinnen und Teilnehmer
                                mussten zwei Arbeitsaufgaben erledigen, nämlich das Protokoll eines
                                Reisetages (8–59) und eine inhaltliche Abhandlung (61–140)
                                schreiben. Unser Partner in Montpellier war Robert Lafont (1923–2009),
                                der erste Inhaber des Lehrstuhls für Okzitanische Sprache und Literatur
                                an dieser Universität sowie der führende Kopf des Okzitanismus und
                                einer der wichtigsten Teilnehmer an der Regionalismus-Debatte der
                                Zeit.<sup><a href="#fn3" name="fz3">3</a></sup>
                                Vor allem Lafont konnte bewirken, dass die Gruppe interessante
                                Gesprächspartner fand. Wenn ich mir heute das Programm anschaue, dann
                                bin ich von seiner Dichte beeindruckt, aber auch von der Bereitschaft
                                der Studierenden, das alles auf sich zu nehmen. Viele von ihnen haben
                                sich im Lauf der Zeit solide Kenntnisse über die Zusammenhänge
                                angeeignet. Vielleicht ist es sinnvoll, das Programm in einem kurzen
                                Abriss widerzugeben (ich fasse aus der Broschüre, 5–6, zusammen und
                                ergänze einiges zum besseren Verständnis):
                            </p>
                            <ul>
                                <li>
                                    <b>3./4. Oktober 1976:</b> Reisetage, von Münster über Breisach und Lyon
                                    nach Montpellier.</li>
                                <li>
                                    <b>5. Oktober:</b> Vormittag <i>Conférence-débat</i> «Situation de l’Occitanie
                                    à l’heure actuelle» von Gaston Bazalgues (geb. 1938, Mitarbeiter von
                                    Lafont und damals wichtiger Exponent des autonomistischen Okzitanismus,
                                    Autor eines erfolgreichen okzitanischen Sprachkurses <i>L’Occitan
                                        lèu-lèu e plan</i>, dessen erste Auflage 1975 erschien). Fahrt nach
                                    Nîmes, wo Lafont selbst am Nachmittag eine Diskussion zum Thema
                                    „Problèmes économiques et politiques du Languedoc“ leitet und der
                                    deutschen Gruppe dann die Stadt zeigt (eine der eindrucksvollsten
                                    Stadtführungen, die ich erlebt habe).</li>
                                <li>
                                    <b>6. Oktober:</b> Vormittag (Montpellier) Diskussion über «La vie
                                    culturelle occitane actuelle» mit der Dichterin Roseline Roche
                                    (Feijoo, geb. 1946), Léon Cordes (Theaterautor, 1913–1987), Dominique
                                    Feijoo (okzitanischer Aktivist), Robert Lafont, Jean Larzac (eigentlich
                                    Jean Rouquette, Geistlicher und Okzitanist, Verfasser verschiedener
                                    Werke zur okzitanischen Kultur, geb. 1938), Yves Rouquette (Bruder des
                                    vorigen, Schriftsteller, geb. 1936). In dieser denkwürdigen Debatte
                                    stoßen die beiden Flügel des damaligen Okzitanismus aufeinander, einer
                                    um die Brüder Rouquette, den man als „nationalistisch“ bezeichnen
                                    könnte, und einer um Lafont, der als „autonomistisch“ zu
                                    umschreiben wäre; es war meines Wissens die letzte geplante
                                    Gegenüberstellung, an der Lafont und die Brüder Rouquette gemeinsam
                                    teilnahmen. Es gibt eine Transkription dieser Debatte von Ulrike
                                    Brummert (heute Professorin an der Universität Chemnitz) und Dieter
                                    Kattenbusch, die leider nie veröffentlicht werden konnte. Am Nachmittag
                                    Präsentation der Trobadore durch Léon Cordes, der kurz zuvor einen
                                    Band mit neuokzitanischen Nachdichtungen von Trobadortexten
                                    veröffentlicht hatte.<sup><a href="#fn4" name="fz4">4</a></sup></li>

                                <li>
                                    <b>7. Oktober:</b> Gemeinsame Fahrt mit den okzitanischen Partnern in die
                                    Camargue (anstatt eines ursprünglich geplanten Treffens mit den

                                    Schauspielern der damals berühmten Gruppe <i>Teatre de la Carrièra</i>, die
                                    engagiertes okzitanistisches [Straßen-]Theater machte).</li>
                                <li>
                                    <b>8. Oktober:</b> Vormittag in Montpellier: Referat von Madame Maurin, einer
                                    Historikerin der Universität, über die Probleme des Weinbaus von 1789
                                    bis 1914. Am Nachmittag zunächst Referat von M. Canizarès, dem Leiter
                                    des Jugendhauses, in dem die Gruppe untergebracht ist, über die
                                    Geschichte und den Urbanismus in Montpellier, danach Besuch bei der
                                    Redaktion der Wochenzeitung <i>Sud</i>, die wenige Monate zuvor entstanden war
                                    als Versuch, die einseitige Berichterstattung der lokalen und regionalen
                                    Presse zu durchbrechen. Leider ging dem Experiment nach einigen Jahren
                                    die Luft aus; ich erinnere mich noch immer mit Freude an diese kluge und
                                    kritische Zeitung.</li>
                                <li>
                                    <b>9. Oktober:</b> Fahrt nach Sète, wo uns Gaston Bazalgues erwartet; ein
                                    pensionierter Lehrer führt uns sehr kompetent durch die Stadt, bevor
                                    wir von Bürgermeister Gilbert Martelli (PCF) empfangen werden, einem
                                    hohen Würdenträger der Kommunistischen Partei, der schon seit Langem
                                    im Amt ist<sup><a href="#fn5" name="fz5">5</a></sup> und die Stadt
                                    vorzüglich verwaltet. Er stellt sich den
                                    Fragen der Studierenden und beantwortet alle Fragen sehr offen, aber
                                    auch sehr geschickt. Nachmittags werden die Studierenden zunächst mit
                                    dem Schiff über die Austernbänke des <i>Etang de Thau</i> gefahren, etliche
                                    haben Angst vor den frischen Austern, sodass die anderen sich eben
                                    opfern müssen. Gegen Abend trifft die Gruppe noch mit Vertretern einer
                                    Gruppe zusammen, die sich dort um den Naturschutz kümmert.
                                </li>
                                <li>
                                    <b>10. Oktober:</b> Fahrt über das Cap d’Agde, wo die Gruppe picknickt,
                                    nach Valros, wo Jean Huillet<sup><a href="#fn6"
                                        name="fz6">6</a></sup>, einer der
                                    militantesten Führer des MIVOC
                                    (<i>Mouvement d’Intervention Viticole Occitan</i>), einer Organisation der
                                    Winzer, die damals verzweifelt um ihre wirtschaftliche Existenz
                                    kämpfen, über die aktuellen Probleme der Winzer im Languedoc spricht.
                                    Danach kann die Gruppe die <i>Cave Coopérative</i> des Orts besuchen, mit
                                    ihrem Präsidenten sprechen und wird schließlich mit Dank für das
                                    gezeigte Interesse und einem 32-Liter-Kanister Wein entlassen.
                                </li>
                                <li>
                                    <b>11. Oktober:</b> Fahrt nach Béziers, wo die Gruppe von François Pic, dem
                                    Leiter des CIDO (<i>Centre International de Documentation
                                        Occitane</i>)<sup><a href="#fn7" name="fz7">7</a></sup>,
                                    empfangen wird (Pic, geb. 1954, war später viele Jahre lang
                                    Generalsekretär der <i>Association Internationale d’Etudes Occitanes</i>; er
                                    ist der Spezialist für bibliographische Fragen und die Geschichte des
                                    Buches im okzitanischen Bereich). Nach einem kurzen Stadtrundgang
                                    besichtigt die Gruppe den CIDO, wo Pic, Yves Rouquette und Dr. Sirc, der
                                    zuständige Vizebürgermeister, auf alle Fragen antworten. Am Nachmittag
                                    wird Ensérune besichtigt, eine keltiberische Ausgrabungsstätte bei
                                    Nissan-les-Ensérune am <i>Canal du Midi</i>, danach trifft die Gruppe eine
                                    Reihe von Okzitanischlehrern am <i>Lycée Henri IV</i> in Béziers, um sich von
                                    ihnen über ihre Möglichkeiten und Probleme informieren zu lassen. Der
                                    Tag schließt mit einer öffentlichen Veranstaltung <i>Allemagne –
                                        Occitanie</i> im <i>Palais de Congrès</i> von Béziers, während derer Yves
                                    Rouquette und Antoinette Dard Referate über die Katharer und den
                                    Katharismus halten.<sup><a href="#fn8" name="fz8">8</a></sup>
                                    Dazwischen singt Maria Roanet einige Trobadortexte
                                    in ihren eigenen Vertonungen (sie ist die Frau von Yves Rouquette, die
                                    zunächst als Interpretin und Liedermacherin seit dem Beginn der 1970er
                                    Jahre Erfolge hat und dann auch mit autobiographischen Texten zunächst
                                    auf Okzitanisch, später auf Französisch hervortritt).<sup><a href="#fn9"
                                        name="fz9">9</a></sup>
                                </li>
                                <li>
                                    <b>12. Oktober:</b> Der Bus fährt nach Perpignan, dort spricht der
                                    Soziolinguist Domènec J. Bernardó (geb. 1946, Mitglied des <i>Grup
                                        Català de Sociolingüística</i>) am späten Vormittag über «La situation
                                    culturelle et linguistique du Roussillon»<sup><a href="#fn10"
                                        name="fz10">10</a></sup>,
                                    am Nachmittag der Geograph
                                    Joan Bécat über die wirtschaftliche Situation des Roussillon. Der
                                    (kurze) Aufenthalt in Perpignan lag uns beiden, Peter Ronge und mir, am
                                    Herzen, denn wir wollten den Kontrast der <i>beiden</i> dominierten Sprachen
                                    und Kulturen wenigstens in aller Kürze zeigen.
                                </li>
                                <li>
                                    <b>13. Oktober:</b> Weiterfahrt nach Toulouse, wo wir am späten Nachmittag
                                    ankommen. Dieser Aufenthalt ist für mich auch schmerzlich, denn
                                    eigentlich hatte ich Ismaël Girard (1898–1976), den Mitgründer der
                                    Zeitschrift <i>Oc</i> (1923/24) und des <i>Institut d’Estudis Occitans</i> (1945),
                                    neben Lafont sicher die wichtigste Persönlichkeit des Okzitanismus im
                                    20. Jahrhundert, dazu überreden können, uns aus seinen Erfahrungen zu
                                    berichten (worin er vor größerem Publikum nur sehr selten
                                    einwilligte). Indes war er kurz vor unserer Ankunft plötzlich
                                    gestorben; daher springt Pierre Lagarde (1920–1994), der langjährige
                                    Vizepräsident des IEO, ein und spricht über den Okzitanismus seit
                                    1945.
                                </li>
                                <li>
                                    <b>14. Oktober:</b> Am Vormittag werden wir von einem stellvertretenden
                                    Bürgermeister von Toulouse, M. Farré, empfangen, der uns mit seinen
                                    Mitarbeitern über die Probleme des Urbanismus der Stadt informiert, und
                                    uns danach in der berühmten <i>Salle des Illustres</i> im Namen der Stadt
                                    empfängt;<sup><a href="#fn11" name="fz11">11</a></sup> nachmittags
                                    werden wir zuerst theoretisch und dann auch
                                    praktisch in die ZUP (<i>Zone d’urbanisation prioritaire</i>) des Mirail (wo
                                    auch eine der Tolosaner Universitäten untergebracht ist) eingeführt.
                                </li>
                                <li>
                                    <b>15. Oktober:</b> Der Bus bringt uns über Albi, wo es einen kurzen
                                    Aufenthalt gibt, und Millau auf das Larzac, jene Hochebene, deren Bauern
                                    – alles Schafzüchter, deren Schafe die Milch für den berühmten
                                    <i>Roquefort</i> liefern – seit Jahren gegen eine Ausweitung des dortigen
                                    Militärlagers kämpfen, die sie ihrer Existenzgrundlage berauben
                                    würde. Die Diskussionen mit den Bauern sind sehr lebhaft und
                                    interessiert und enden damit, dass die anwesenden Mitglieder der
                                    Fachschaft Romanistik alle Reiseteilnehmer dazu bringen können, dass
                                    gemeinsam eine Parzelle Larzac gekauft wird, um die Enteignung zu
                                    erschweren (falls es in Münster noch eine Fachschaft Romanistik gibt,
                                    müsste sie eigentlich die entsprechenden Eigentumsdokumente noch
                                    haben). So endet der inhaltliche Teil der Reise mit der Konfrontation
                                    mit einer der international bekanntesten Auseinandersetzungen der Zeit
                                    zwischen einem Staat und seinen Bürgern;<sup><a href="#fn12"
                                        name="fz12">12</a></sup>
                                    das ist wirklich ein guter Abschluss.
                                </li>
                                <li>
                                    <b>16./17. Oktober:</b> Rückfahrt nach Münster, über Nîmes, Lyon und
                                    Breisach.
                                </li></ul>
                            <p>
                                Vielleicht kann die Aufzählung ein wenig in die damalige Stimmung
                                einführen und auch in den von uns vertretenen Anspruch. Ich bilde mir
                                immer noch ein, dass die Exkursion einer der Anlässe für eine ganze
                                Reihe von Qualifikationsarbeiten geworden ist und auch sonst bisweilen
                                recht nachhaltige Folgen hatte. Immerhin hatte die inhaltliche
                                Vorbereitung fast ein Jahr früher begonnen.
                            </p>
                            <p>
                                Zusammen mit Peter Ronge habe ich von Münster aus noch weitere
                                Exkursionen organisiert, 1978 (zusammen mit den damals in Wuppertal
                                tätigen Kollegen Jürgen Meisel und Hartmut Stenzel) und 1982 wieder
                                nach Okzitanien, 1983 bin ich bei der von Peter Ronge allein
                                verantworteten Reise in die Bretagne mitgefahren.<sup><a href="#fn13"
                                    name="fz13">13</a></sup>
                                Als ich nach Wien kam,
                                wollte ich daran anknüpfen, leider waren die organisatorischen und
                                finanziellen Bedingungen weit weniger günstig. Das schlug sich dann in
                                unzureichendem Interesse (weil zu wenig abschätzbaren Kosten) der
                                potentiellen Teilnehmer nieder. Deshalb kam eine in der ersten Hälfte
                                der 1990er Jahre geplante Reise nach Okzitanien nicht zustande;
                                allerdings haben wir (Peter Cichon und ich) in diesen Jahren mehrfach
                                „inoffizielle“ Reisen gemacht, sind einfach mit zwei oder drei Wagen
                                zur okzitanischen Sommeruniversität in Nîmes gefahren, oder 1996 zum
                                AIEO-Kongress in Toulouse. Natürlich verliefen diese Reisen ganz
                                anders: zeitlich kürzer, ohne formal vorbereitetes Programm (außer
                                eben der Teilnahme an den Veranstaltungen), aber damit eben auch ohne
                                große organisatorische Last. Für das Jahr 1998 haben wir dann eine
                                Exkursion nach Martinique vorbereitet, wieder mit einem recht genau
                                ausgearbeiteten Programm, die auf der einen Seite auch ertragreich
                                war.<sup><a href="#fn14" name="fz14">14</a></sup>
                                Auf der anderen Seite war die Teilnehmerzahl gering (15, mehr waren
                                nicht finanzierbar), und einige der Teilnehmerinnen (es waren nur
                                Frauen) gaben doch recht deutlich zu erkennen, dass für sie der
                                Urlaubswert der Reise gegenüber dem Erkenntnisinteresse deutlich im
                                Vordergrund stand. Vor allem deshalb blieb ich in den folgenden Jahren
                                recht zurückhaltend gegenüber weiteren Anregungen, und Peter Cichon
                                organisierte daher zusammen mit Zohra Bouchentouf-Siagh Reisen nach
                                Dakar und nach Tunesien.
                            </p>
                            <p>
                                Ich habe mich dann nach langem Zögern überreden lassen, nochmals eine
                                Reise nach Martinique mit ihm zu organisieren (wobei er den größten
                                Teil der praktischen Organisation übernommen hat). Zu unserer Freude
                                schlossen sich spontan zwei liebe Kollegen, Zohra Bouchentouf-Siagh und
                                Jörg Türschmann, der Reise an, und auch bei der Auswahl der
                                Teilnehmerinnen und Teilnehmer hatten wir Glück: Alle waren menschlich
                                sehr sympathisch und an der Sache interessiert, nur eben manchmal ein
                                wenig naiv (oder sehe ich das nur aus der Warte meines Alters so?). Im
                                Unterschied zu früheren Reisen hatten wir dieses Mal weniger voraus
                                organisiert und geplant. Zum Teil hatte das den Grund, dass die mir
                                bekannten Gesprächspartner aus früheren Jahren meist nicht mehr im Amt
                                waren und nicht alle der heute Tätigen sich sehr für eine
                                Studiengruppe aus Wien interessierten. Wird die Wichtigkeit von solchen
                                Begegnungen von den heutigen Multiplikatoren geringer eingeschätzt oder
                                ist manches Schweigen einfach auf die Überbeanspruchung
                                zurückzuführen? Trifft die erste Alternative zu, so dürfte sie auf
                                einer heftigen Fehleinschätzung beruhen. Ich habe wieder die Erfahrung
                                gemacht, dass dort, wo Persönlichkeiten der Gruppe ein wenig Zeit
                                gewidmet haben, der Eindruck seitens der Teilnehmer sehr nachhaltig war,
                                und sie auch Probleme und Positionen zu verstehen begannen, die ihnen
                                zuvor überhaupt nicht vertraut waren;<sup><a href="#fn15"
                                    name="fz15">15</a></sup>
                                auch jetzt dürfte sich der
                                Ertrag der Reise in einer Anzahl von Qualifikationsarbeiten
                                niederschlagen. Das zweite Argument für die zurückhaltendere Planung
                                lag darin, dass den Studierenden so mehr Möglichkeiten zu eigenen
                                Initiativen gegeben werden sollten.
                            </p>


                            <h1>2 Überlegungen</h1>
                            <p>
                                Natürlich sind Exkursionen aufwendige und letztlich auch teure Formen
                                von Lehre. Deshalb werden sie ja gewöhnlich nur von relativ wenigen
                                Studienrichtungen regelmäßig gemacht (und in allen anderen nur von
                                manchen Lehrenden organisiert, die mitunter von ihren Kollegen mitleidig
                                belächelt, mitunter allerdings auch beneidet werden) –
                                zugegebenermaßen bieten sich auch nicht alle Studien in gleicher Weise
                                dafür an. Welche Gründe lassen sich anführen, um solche
                                Lehrveranstaltungen zu rechtfertigen?
                            </p>
                            <h2>Wissenschaftliche Argumente</h2>
                            <p>
                                In vielen Fällen besteht die
                                wissenschaftliche Arbeit für Studierende im Erwerb von Kenntnissen und
                                Fertigkeiten, die nur schwer in Zusammenhänge einzuordnen sind, zumal
                                im Zuge immer weiterer Spezialisierung nahezu aller Disziplinen (manche
                                entgehen zwar teilweise diesem Schicksal, verschwinden aber dann
                                bisweilen vollständig aus den Universitäten), die die Kenntnis eines
                                synthetischen Überblicks als immer weniger wichtig erscheinen lassen.
                                Die Universität produziert auf diese Weise Absolventen, die gute
                                Spezialisten auf bestimmten Teilgebieten einer Disziplin sind, denen
                                aber weitgehend der Überblick über das eigene Fach und seine
                                Entwicklung, oder gar über noch weitere Zusammenhänge fehlt. Nun wird
                                man die gute, alte Allgemeinbildung nicht wieder herbeizaubern können,
                                so lange in unseren Gesellschaften kein Konsens darüber besteht,
                                welches Wissen sie als für alle wichtig empfinden – möglicherweise
                                ist ein solcher Konsens angesichts der riesig gewachsenen
                                Wissensbestände auch gar nicht mehr möglich. Dass allerdings
                                Absolventen eines Faches, das sie schließlich studiert haben, dieses in
                                seinen Umrissen nicht mehr überblicken, halte ich für bedenklich, denn
                                es bedeutet nicht zuletzt, dass sie ihr eigenes Tun nicht mehr in einen
                                größeren Kontext einordnen können. Das vergrößert die Gefahr von
                                Fehlleistungen, es führt aber auch zu einer stärkeren
                                Manipulierbarkeit der Personen, die in Grenzfällen durchaus
                                beunruhigende Formen annehmen kann. Das böse Wort „ich habe ja nur
                                meine Pflicht getan“ kommt einem vor diesem Hintergrund leicht in
                                Erinnerung. Natürlich wird angesichts solcher Verhältnisse leicht die
                                Motivation der Studierenden beeinträchtigt, die vor allem auf eine
                                Qualifikation hin, aber kaum (mehr) mit einem inhaltlichen Ziel
                                studieren.
                            </p>
                            <p>
                                Eine gut geplante Exkursion macht Wissenschaft und wissenschaftliches
                                Erkenntnisinteresse<sup><a href="#fn16" name="fz16">16</a></sup>
                                greifbar und erlebbar, da eben nicht mehr
                                Detailverständnis gefragt ist, sondern sich die Frage stellt, wie
                                einzelne Beobachtungen sich miteinander verknüpfen lassen und
                                einzuordnen sind. Da zeigt sich, dass bestimmte Meinungen nicht abstrakt
                                vertreten werden (oft versteht der Zuhörer im Hörsaal gar nicht, warum
                                jemand eine bestimmte Idee haben kann), sondern in konkreten
                                Zusammenhängen stehen. Sie können deshalb noch immer schwer
                                rezipierbar sein, aber wenn die Hintergründe klarer sind, können
                                Studierende gewöhnlich leichter nachvollziehen, wie es dazu kommt.
                                Außerdem werden die Studierenden damit vertraut(er) gemacht, dass
                                unterschiedliche Personen unterschiedliche Meinungen vertreten und dass
                                sie <i>selbst</i> daraus für sich die Schlüsse ziehen müssen (zwar werden
                                sie auch im Hörsaal im günstigsten Fall mit unterschiedlichen
                                Positionen vertraut gemacht, aber das Spiel ist insofern verfälscht,
                                als eine Position, die des Lehrenden, gewöhnlich die besseren Argumente
                                für sich hat). Gerade dadurch stehen sie nicht mehr einem
                                monolithischen Berg von „Lernstoff“ gegenüber, sondern einer
                                zerklüfteten und widersprüchlichen Landschaft unterschiedlicher
                                Meinungen.
                            </p>
                            <p>
                                Meist bieten Exkursionen den Studierenden auch Gelegenheit, selbst,
                                gewöhnlich in bescheidenem Rahmen, wissenschaftlich tätig zu werden
                                (das ist besonders wichtig in solchen Disziplinen, die wenig mit
                                praktischen Übungen und Laboratorien zu tun haben). Sie müssen sich
                                begrenzte Projekte überlegen und umsetzen und werden auf diese Weise
                                selbständiger. Im Falle eines Falles sind dann Lehrende dabei, die
                                ihnen bei unvorhergesehenen Problemen helfen können. Das spielt sich
                                indes auf einer ganz anderen Ebene als die „übliche“ Interaktion
                                ab.
                            </p>
                            <p>
                                In meinen Augen besteht der wissenschaftliche Gewinn für die
                                Studierenden vor allem in zwei Tatsachen: zum Einen im Erwerb einer
                                größeren Selbständigkeit und zum Anderen in der Erkenntnis von der
                                Bedeutung von Zusammenhängen. Gewöhnlich kommt es dann auch zu
                                erstaunlichen Wissenszuwächsen, die manchmal sogar für die
                                Lebenswelten der Betroffenen Konsequenzen haben können – bisweilen
                                werden überkommene und unhinterfragte Ansichten zur Disposition
                                gestellt, Vorurteile fallen, die Evidenz des Lebens fordert neue
                                Antworten. Letztlich wird die althergebrachte Landeskunde erst in dieser
                                Synthese zur Landeswissenschaft.
                            </p>
                            <p>
                                Auch Lehrende können aus Exkursionen gewaltige wissenschaftliche
                                Gewinne ziehen. Für sie tun sich (bisweilen) neue Zusammenhänge auf,
                                entstehen Verbindungen von Phänomenen, die zu ganz neuen
                                Fragestellungen führen können. Die Situation so fern vom Alltag kann
                                befruchtend wirken und auch Forscher auf neue Gedanken bringen.
                            </p>
                            <h2>Didaktische Argumente</h2>
                            <p>
                                Aus dem Gesagten geht hervor, dass die
                                wissenschaftlichen Argumente weithin mit den didaktischen in
                                Zusammenhang stehen. Eine Exkursion stärkt (gewöhnlich) die Motivation
                                der Studierenden, die nun sehen, dass ihre Studien ihnen einen Weg
                                weisen, dass sie damit Werkzeug zum Verständnis und zur Interpretation
                                der Realität an die Hand bekommen. Ihr Tun bekommt einen Sinn. Die
                                Motivation weist ihnen an vielen Stellen Alternativen zu den eigenen
                                Erfahrungen auf, die für sie bedeutsam werden können. Man sollte
                                vielleicht meinen, dass diesem Argument in einer Zeit, in der fast
                                jede/r Studierende schon große Reisen gemacht und ferne Länder gesehen
                                hat, keine so große Bedeutung mehr beigemessen zu werden braucht.
                                Indes, es scheint, dass diese weiten Reisen vielfach (natürlich nicht
                                immer!) sich ohne große Zuwächse an Offenheit abspielen. Unsere
                                Studierenden unterscheiden sich da nicht wesentlich von anderen
                                Reisenden, die in ihren Fernreisen oft letztlich nur die Bestätigung
                                ihrer Vorurteile suchen; wäre dem nicht so, dann dürften
                                fremdenfeindliche Parteien in Europa nicht solchen Zulauf
                                haben.<sup><a href="#fn17" name="fz17">17</a></sup> Ich
                                könnte jetzt auf den zitierten Text von Peter Ronge und mir aus dem
                                Jahre 1976 zurückgreifen und predigen, dass die europäische
                                Konstruktion nur gelingen kann, wenn die Europäer sich gegenseitig
                                wahrnehmen.<sup><a href="#fn18" name="fz18">18</a></sup> In dieser
                                Hinsicht unterscheiden Exkursionen sich meist von
                                anderen Auslandsreisen: Die Gruppe und das zu absolvierende Programm,
                                der direkte und oft enge Kontakt mit Einheimischen bringen die Einzelnen
                                dazu, sich kritischer und offener mit der anderen Realität
                                auseinanderzusetzen. Daher können Exkursionen stärker
                                vorurteilbrechend sein als andere Formen von
                                Reisen.<sup><a href="#fn19" name="fz19">19</a></sup>
                            </p>
                            <h2>Relationelle Argumente</h2>
                            <p>
                                Exkursionen führen gewöhnlich auch zu einer
                                massiven Veränderung der persönlichen Beziehungen zwischen Lehrenden
                                und Lernenden, aber auch zwischen den Lernenden untereinander.
                                Natürlich geht Distanz verloren, damit aber auch Scheu und Hemmung.
                                Wenn man den ganzen Tag etwas miteinander unternimmt, dann entwickelt
                                sich notwendig eine gewisse Vertrautheit, man kann den/die Andere/n
                                besser einschätzen. Damit geht Furcht verloren – etwa bei mündlichen
                                Prüfungen, aber auch in allen anderen Situationen, und es entsteht oft
                                etwas wie Vertrautheit, die eine ganz neue Basis für den Kontakt und
                                die Zusammenarbeit bilden kann. Immer wieder einmal kommt es bei
                                Exkursionen zu außergewöhnlichen Situationen, da ist mitunter Tatkraft
                                und kühles Blut gefragt. Was tun, wenn der Bus nicht mehr vor noch
                                zurück kann, weil die Einbahnstraße mit parkenden Autos zugestellt
                                ist? Man schiebt die Autos mittels Schaukeln so lange zur Seite, bis der
                                Bus durchkommt (bei dieser Übung ist es hilfreich, wenn es ein paar
                                starke männliche Exkursionsteilnehmer gibt). Wenn der Nebel so dicht
                                wird, dass der Busfahrer die Straße nicht mehr erkennen kann? Einer
                                steigt aus und gibt dem Fahrer auf wenige Zentimeter Entfernung Zeichen.
                                Usw. Es ist wohl kein Zufall, dass wir als Veranstalter mit einigen der
                                Busfahrer noch über Jahre hin Kontakt hatten.
                            </p>
                            <p>
                                Natürlich entspricht eine so entspannte Beziehung zwischen Lehrenden
                                und Lernenden dem sich an den Hochschulen wieder breitmachenden
                                Autoritarismus nur wenig und den Vorstellungen der Verbreitung von
                                E-Learning mit möglichst wenig persönlichen Kontakten gar nicht. Das
                                E-Learning kann Stoff vermitteln, was nützlich sein kann, Bildung und
                                geistige Selbständigkeit indes werden auf anderen Wegen erworben.
                            </p>
                            <p>
                                Das wichtigste Argument fehlt allerdings noch: Es macht einfach einen
                                riesigen Spaß, eine Exkursion zu organisieren, wenn man die
                                entsprechenden Teilnehmer/innen hat (wofür man bis zu einem gewissen
                                Grad sorgen kann) und nicht gar zu sehr um die Mittel kämpfen muss.
                                Wahrscheinlich könnten die verschiedenen Wissenschaftsverwaltungen ihre
                                Erfolgsquoten massiv steigern, wenn sie die Mittel für mehr Exkursionen
                                zur Verfügung stellten. Allerdings sollten diese auf freiwilliger Basis
                                stattfinden: Nichts ist so ernüchternd wie ein Lehrender, der wider
                                seinen Willen eine Reise organisieren muss, und nichts ist so
                                frustrierend wie ein/e Studierende/r, der daran teilnehmen muss, weil es
                                Pflicht ist.
                            </p>
                            <p className="quote">
                                Wien, 12. August 2011
                            </p>

                            <h1>Anmerkungen</h1>
                            <p className="annotation"><sup><a href="#fz1" name="fn1">1</a></sup>
                                Mein Interesse an Exkursionen lässt sich mit meiner mehrfachen
                                Teilnahme an einem deutsch-französischen Schüleraustausch meines
                                Gymnasiums mit dem <i>Lycée Henri IV</i> in Béziers erklären. Ich habe heute
                                noch den Eindruck, dass ich während dieser, insgesamt sechs oder sieben
                                Wochen dauernden Aufenthalte wirklich Französisch gelernt habe. Leider
                                war es mir nie vergönnt, als Student an einer Exkursion teilzunehmen
                                (wahrscheinlich aufgrund meiner zu häufigen Universitätswechsel).
                            </p>

                            <p className="annotation"><sup><a href="#fz2" name="fn2">2</a></sup>
                                Eine (vereinfachte) von Peter Ronge zusammengestellte Kostenaufstellung
                                findet sich auf Seite 3.
                            </p>
                            <p className="annotation"><sup><a href="#fz3" name="fn3">3</a></sup>
                                Zu Lafont vgl. u.a. Danielle Julien/Claire Torreilles/François Pic
                                (éds.) (2005): <i>Robert Lafont. Le roman de la langue</i>, Toulouse (mit einer bis 2005 exhaustiven Bibliographie);
                                sowie die Doppelnummer der Zeitschrift <i>Lenga e País d’Òc</i>, no. 50–51,
                                <i>Per Robèrt Lafont</i>, April 2011, die im Übrigen denselben Titel führt
                                wie die 1990 in Montpellier und Nîmes erschienene Festschrift zu seinen
                                Ehren. Ganz neu: Gérard Tautil (2011): <i>Robert Lafont et l’occitanisme
                                    politique</i>, Eglise-Neuve-d’Issac.
                            </p>

                            <p className="annotation"><sup><a href="#fz4" name="fn4">4</a></sup>
                                Léon Cordes (1975): <i>Troubadours aujourd’hui</i>, Raphèle-les-Arles.
                            </p>

                            <p className="annotation"><sup><a href="#fz5" name="fn5">5</a></sup>
                                Mir lag damals viel an diesem Zusammentreffen, denn es herrschte ja
                                noch immer Kalter Krieg, und es schien mir wichtig, dass die braven
                                Westfälinnen und Westfalen einmal einen kommunistischen Bürgermeister
                                sahen, zudem noch einen der gebildetsten, um sich ein wenig von den
                                Vorurteilen zu befreien, die ihnen eingeprägt worden waren. Deshalb bin
                                ich auch immer, wenn es möglich war, mit anderen Exkursionen nach Sète
                                zurückgekehrt.
                            </p>

                            <p className="annotation"><sup><a href="#fz6" name="fn6">6</a></sup>
                                Er wird später lange Jahre als Abgeordneter im Europäischen Parlament
                                sitzen. Vgl. Jean Huillet (2004): <i>De que fasèm. Un regard militant sur
                                    la viticulture</i>, Pézenas.
                            </p>

                            <p className="annotation"><sup><a href="#fz7" name="fn7">7</a></sup>
                                Der CIDO ist inzwischen vom CIRDOC abgelöst worden, der heute in neuen
                                Räumen in Béziers die wohl vollständigste Dokumentation der modernen
                                okzitanischen Kultur besitzt.
                            </p>

                            <p className="annotation"><sup><a href="#fz8" name="fn8">8</a></sup>
                                Vgl. zu den Katharern immer noch die Synthese von Michel Roquebert
                                (1999): <i>Histoire des Cathares. Hérésie, croisade, inquisition du XIe
                                    au XIVe siècle</i>, Paris. In den aktuellen Forschungsstand über
                                den Katharismus führt ein Anne Brenon (2007): <i>Les Cathares</i>, Paris. Als Einführung kann auf Deutsch noch immer die
                                Darstellung des leider nicht mehr unter uns weilenden Lothar Baier
                                (1984): <i>Die große Ketzerei. Verfolgung und Ausrottung der Katharer
                                    durch Kirche und Wissenschaft</i>, Berlin (Nachdruck) empfohlen
                                werden. Stärker forschungsorientiert: Jörg Oberste (2003): <i>Der
                                    „Kreuzzug“ gegen die Albigenser. Ketzerei und Machtpolitik im
                                    Mittelalter</i>, Darmstadt. Der Aufsatz
                                über die Albigenserkriege in unserem Konvolut stammt übrigens von
                                Dieter Kattenbusch (106–108).
                            </p>

                            <p className="annotation"><sup><a href="#fz9" name="fn9">9</a></sup>
                                Vgl. Maria Roanet (1975): <i>Dins de patetas rojas …</i>, Toulouse;
                                Dies. (1990): <i>Nous les filles</i>, Paris.
                            </p>

                            <p className="annotation"><sup><a href="#fz10" name="fn10">10</a></sup>
                                Das Protokoll dieses Vortrages stammt von Dieter Kattenbusch.
                            </p>

                            <p className="annotation"><sup><a href="#fz11" name="fn11">11</a></sup>
                                Kurze Zeit zuvor war Robert Lafont der Ossian-Preis der Stiftung F.V.S.
                                verliehen worden; die damalige politisch rechte Stadtverwaltung von
                                Toulouse weigerte sich, diesen Saal für die Verleihung zur Verfügung
                                zu stellen. Ich weiß nicht, wie sehr es dem Beigeordneten gefiel, dass
                                ich auf – allerdings dezente Art – auf diesen Unterschied in der
                                Behandlung hinwies.
                            </p>

                            <p className="annotation"><sup><a href="#fz12" name="fn12">12</a></sup>
                                Erst 1981 beendete der neu gewählte Präsident François Mitterrand
                                den Kampf; als eine seiner ersten Amtshandlungen verkündete er den
                                Verzicht auf die Ausdehnung. Immerhin hatte es ungefähr elf Jahre
                                gebraucht, um zu diesem Ziel zu gelangen. Diese Auseinandersetzung steht
                                auch im Hintergrund des großen Romans von Robert Lafont, <i>La Festa</i>,
                                dessen erste zwei Bände 1983/84 erschienen, der letzte, der eine andere
                                Perspektive einnimmt, 1996 (Ed. Obradors/Fédérop/Le chemin Vert).
                            </p>

                            <p className="annotation"><sup><a href="#fz13" name="fn13">13</a></sup>
                                Auch von diesen Reisen gibt es Rechenschaftsberichte.
                            </p>

                            <p className="annotation"><sup><a href="#fz14" name="fn14">14</a></sup>
                                Die Ergebnisse sind in der Doppelnummer 12/13, 1998/99 der Zeitschrift
                                <i>Quo vadis, Romania?</i> (Wien) mit dem Titel <i>Martinique: Sprachen und
                                    Gesellschaft/Martinique: langues et société</i> festgehalten. Leider sind
                                die Beiträge qualitativ sehr unterschiedlich.
                            </p>

                            <p className="annotation"><sup><a href="#fz15" name="fn15">15</a></sup>
                                Der Rechenschaftsbericht ist in Vorbereitung.
                            </p>

                            <p className="annotation"><sup><a href="#fz16" name="fn16">16</a></sup>
                                Es fällt mir immer mehr auf, dass das Wort <i>Erkenntnisinteresse</i> fast
                                völlig aus den Studienhilfen verschwunden ist, die oft für teures Geld
                                angeboten werden, um den Studierenden dabei zur Seite zu stehen, ihre
                                Qualifikationsarbeiten vorzubereiten. Es wird ersetzt durch den fast
                                schwachsinnigen Begriff der „Forschungsfrage“, aus dem jeder Gedanke
                                an weitere Zusammenhänge oder gar an kritisches Potential getilgt ist.
                                Vor Forschungsfragen braucht der heutige Kapitalismus keine Angst zu
                                haben, Erkenntnisinteresse kann mitunter beunruhigende Formen annehmen.
                            </p>

                            <p className="annotation"><sup><a href="#fz17" name="fn17">17</a></sup>
                                Ich erinnere mich noch heute an den <i>surveillant général</i> der
                                Privatschule in Sainte-Foy-la-Grande (Dordogne), in der ich ab Herbst
                                1970 ein Jahr lang mehr die Ehre als das Vergnügen hatte, Deutsch zu
                                unterrichten. Er hatte das Ende des Zweiten Weltkrieges als
                                Zwangsarbeiter in Berlin miterlebt und hat mir aus erster Hand von der
                                russischen Eroberung der Stadt berichtet. Er belächelte indes seine
                                französischen Landsleute, die im Berlin des Krieges den Satz prägten:
                                „Ils [les Allemands] peuvent pas parler français comme tout le
                                monde?“ Er wäre noch heute entsprechend auf viele (nicht nur)
                                Europäer anwendbar.
                            </p>

                            <p className="annotation"><sup><a href="#fz18" name="fn18">18</a></sup>
                                Peter Ronge hatte den Zweiten Weltkrieg mit all seinen Schrecken noch
                                als Kind miterlebt. Deshalb war und ist ihm das Zusammenwachsen der
                                Europäer (in seinem Fall vor allem der Deutschen und Franzosen) ein
                                solch lebenslanges Anliegen geblieben. Für uns Ältere ist es oft
                                schwer verständlich, dass dieser elementare Enthusiasmus, ein
                                gemeinsames, solidarisches und friedliches Europa aufzubauen, sich heute
                                in der politischen Klasse ebenso verloren hat wie bei vielen Bürgern.
                            </p>

                            <p className="annotation"><sup><a href="#fz19" name="fn19">19</a></sup>
                                Das müssen nicht immer große Dinge sein. Es war durchaus ein Stück
                                Öffnung, als 1976 einige der Studierenden, die noch nie Austern – und
                                schon gar nicht solche direkt aus der See – gegessen hatten, sich dazu
                                durchringen konnten, und genauso haben sich 2011 einige an die ihnen
                                völlig fremde, scharfe kreolische Blutwurst (<i>boudin</i>) gewagt, andere
                                eben nicht. Einst hatte der Herausgeber und Chefredakteur der
                                <i>Stuttgarter Zeitung</i>, der lateinisch schreibende Dichter Sebastian Blau,
                                mit bürgerlichem Namen Josef Eberle (1901–1986), ein sehr probates
                                Verfahren, seine Nachwuchsredakteure für die Lokalredaktion [das war im
                                klassischen Journalismus immer der Königsweg zum Fortkommen]
                                auszuwählen: An einem Tag in der Woche gab es in der Kantine unter
                                anderem Kutteln, und Eberle schaute nur, wer von den Jungen davon aß.
                                Die waren gut für den Lokalteil. Der Erfolg gab ihm gewöhnlich Recht.
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

export default Kremnitz;