import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Footer from "../Footer";
import Header from "../Header";
import Rubrik from "../Rubrik";
import UpArrow from "../UpArrow";
import GoeblPortrait from "../../images/hgoebl/hgoebl-portrait.jpg";
import LoculiSmall from "../../images/hgoebl/00_loculi_ald_small.jpg";
import BozenSmall from "../../images/hgoebl/01_Bozen_small.jpg";
import RivaSmall from "../../images/hgoebl/02_Riva_small.jpg";
import BresciaSmall from "../../images/hgoebl/03_Brescia_small.jpg";
import MalcesineSmall from "../../images/hgoebl/04_Malcesine_small.jpg";
import ValenciaCementerioSmall from "../../images/hgoebl/05_Valencia_Cementerio_small.jpg";
import ValenciaBenimacletSmall from "../../images/hgoebl/06_Valencia_Benimaclet_small.jpg";
import OviedoSmall from "../../images/hgoebl/07_Oviedo_small.jpg";
import MontrealSmall from "../../images/hgoebl/08_Montreal_small.jpg";
import LissabonSmall from "../../images/hgoebl/09_Lissabon_small.jpg";


const images = [
    {
        src: "https://fabio-tosques.de/images/hgoebl/00_loculi_ald.jpg",
        title: "Abb. 1",
        description: "Zusammentreffen zweier Begräbnisformen im Einzugsgebiet des Sprachatlasses ALD. Nach Ermittlungen aus den Jahren 1985–1992 sowie 2000–2010."
    },
    {
        src: "https://fabio-tosques.de/images/hgoebl/01_Bozen.jpg",
        title: "Abb. 2",
        description: "Bozen, Kommunalfriedhof. Man beachte die im Hintergrund liegenden, mit Bögen versehenen Konstruktionen, worin sich 'loculi' befinden."
    },
    {
        src: "https://fabio-tosques.de/images/hgoebl/02_Riva.jpg",
        title: "Abb. 3",
        description: "Riva di Garda (Trentino) Man beachte die im Vordergrund liegende, mit beachtlichem architektonischem Einsatz errichtete Konstruktion mit einer Vielzahl von 'loculi'."
    },
    {
        src: "https://fabio-tosques.de/images/hgoebl/03_Brescia.jpg",
        title: "Abb. 4",
        description: "Brescia, Cimitero comunale. Der Ausschnitt zeigt jenen Teil des Friedhofs ('campo per inconsunti'), wo die aus ihren ursprünglichen 'loculi' extumulierten Leichname zur Nachverwesung beigesetzt worden sind. Man beachte ferner den kollektiven Charakter dieses Vorgangs."
    },
    {
        src: "https://fabio-tosques.de/images/hgoebl/04_Malcesine.jpg",
        title: "Abb. 5",
        description: "Malcésine (Veneto), Cimitero comunale. Man beachte die Koexistenz von Nischen- und Erdbegräbnis."
    },
    {
        src: "https://fabio-tosques.de/images/hgoebl/05_Valencia_Cementerio.jpg",
        title: "Abb. 6",
        description: "València (Spanien), Cementiri general. Man beachte den hausartigen Charakter der die nichos in fünf Stockwerken enthaltenden Bauten."
    },
    {
        src: "https://fabio-tosques.de/images/hgoebl/06_Valencia_Benimaclet.jpg",
        title: "Abb. 7",
        description: "València (Spanien), Cementiri de Benimaclet. Der überreiche Blumenschmuck besteht aus Naturblumen."
    },
    {
        src: "https://fabio-tosques.de/images/hgoebl/07_Oviedo.jpg",
        title: "Abb. 8",
        description: "Oviedo (Spanien), Cementerio San Salvador. Im Vordergrund befinden sich Erdgräber, im Hintergrund Nischengräber."
    },
    {
        src: "https://fabio-tosques.de/images/hgoebl/08_Montreal.jpg",
        title: "Abb. 9",
        description: "Montréal (Kanada), Cimetière Notre-Dame-des-Neiges. Rechts eines der zahlreichen, seit 1978 errichteten Mausoleen."
    },
    {
        src: "https://fabio-tosques.de/images/hgoebl/09_Lissabon.jpg",
        title: "Abb. 10",
        description: "Lissabon, Cemitério dos Prazeres. Die meisten der hier deutlich sichtbaren Begräbnis-Häuschen ('jazigos') bieten für sechs innen mit Zink ausgekleidete Särge Platz."
    },
];

function Goebl(props) {

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <div id="Wrapper" className="container_14">
            <div id="Header">
                <Header id={props.author} />
                <div className="grid_9">
                    <h1 id="main_title">Kulturwissenschaftliches aus der
                        ALD-Werkstatt: <i>tumulazione</i> versus <i>inumazione</i></h1>
                    <p id="author">Hans Goebl, Salzburg</p>
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
                            Lieber Dieter!
                        </p>
                        <p>
                            Ohne jeden Zweifel ist die Basis unserer nunmehr ins vierte Jahrzehnt
                            eingetretenen Freundschaft die Feldforschung, also die immer wieder
                            leidenschaftlich und zugleich programmatisch gesuchte persönliche
                            Begegnung mit den Sprechern romanischer Varietäten. Das gilt sowohl
                            für die Ebene des Allgemeinen als auch jene des Besonderen, auf
                            welcher in unserer Freundschaft die Arbeit am bzw. rund um den ALD
                            seit langem eine besondere Rolle gespielt hat und dies noch immer
                            tut. Das in der Folge aus Anlass Deines Jubiläums in lapidarer Kürze
                            abgehandelte Thema ist Dir natürlich nicht neu und wurde zwischen uns
                            schon mehrfach mündlich erörtert. Da es aber vielen weniger
                            felderfahrenen und an Kulturellem eher sekundär interessierten
                            Romanisten weitgehend unbekannt ist, scheint es mir nützlich zu sein,
                            unseren einschlägigen Gesprächen just in Deiner Festschrift eine
                            schriftliche Form zu geben.
                        </p>
                        <p>
                            Echten Feldforschern ein langes Leben zu wünschen, kommt
                            dem bekannten Import von Eulen nach Athen sehr
                            nahe. Dennoch: <i>ad multos, per multos felicesque annos,
                                carissime Theodorice!</i>
                        </p>
                        <h1>1 Antezedenzien</h1>

                        <p>
                            Zwar sind weder der erste noch der zweite Teil des <i>Atlante
                                linguistico del ladino dolomitico e dei dialetti limitrofi</i> (ALD) mit
                            einer explizit ausgewiesenen Sachkomponente versehen worden und
                            können daher neben dem selbstverständlichen Prädikat <i>linguistico</i>
                            zusätzlich nicht noch auf das Prädikat <i>etnografico</i> Anspruch
                            erheben. Dennoch war bei beiden Projektteilen vorgesehen, dass sich
                            die Exploratoren vor bzw. neben ihrer Befragungsarbeit sehr genau in
                            den betreffenden Ortschaften umsehen. Dazu gab es in den beiden
                            Fragebüchern entsprechende Checklisten, unter denen sich auch ein
                            Item befand, das sich auf den örtlichen Friedhof bezog. Im Zuge
                            diverser, eher kursorisch absolvierter Feldbesuche in der ALD-Zone
                            war mir nämlich aufgefallen, dass es auf den Friedhöfen im Norden
                            des ALD-Gebiets eher „wie bei uns“ (i.e. in Österreich, Deutschland
                            und der Schweiz) aussah, wohingegen auf den Friedhöfen am Südrand
                            des ALD-Gebiets neben den uns vertrauten Erdgräbern auch oberirdisch
                            angelegte Betonkonstrukte oft von erstaunlicher Höhe zu sehen waren,
                            in denen die Toten in geometrisch angeordneten Nischen ruhten, wozu
                            eine rasche Rückfrage vor Ort den Sachbegriff <i>loculo</i> (für die
                            Nische) und das Nomen actionis <i>tumulazione</i> (für die Verbringung
                            eines Toten in eine solche Nische) zutage förderte. Das mag alles am
                            Beginn oder in der Mitte der 1970er Jahre passiert sein.
                        </p>
                    </div>

                    <div className="grid_5">
                        <div className="abouttheauthor">
                            <img src={GoeblPortrait}
                                width="100"
                                height="135"
                                alt="Hans Goebl - Portrait" />
                            <div className="abouttheauthorfont"><br /><br />
                                <b>Hans Goebl</b>, o. Univ.-Prof. Dr., geb. 1943 in Wien, ab 1982 Ordinariat aus
                                Romanischer Linguistik in Salzburg. In Wien (und in
                                Graz) Schule und Universitätsstudium aus Romanistik und
                                Alter Philologie (Doktorat) bzw. für das Lehramt an
                                Gymnasien (Latein, Französisch). Tätigkeit als
                                Gymnasiallehrer: 1967–1973; kontinuierlich auf
                                Universitätsboden (Regensburg, Berlin, Salzburg): seit
                                1973. Hauptbeschäftigungsgebiete (stets dia- und
                                synchron, empirisch und theoretisch, qualitativ und
                                quantitativ): Gallo-, Italo- und Rätoromanistik,
                                neuerdings auch Ibero- und Dakoromanistik; dazu viel
                                Interdisziplinäres mehr oder weniger krauser Art.<br />
                                <span style={{ color: "#666666" }}>Dieter war mein Nachfolger
                                    auf dem von mir 1973–1980 unter dem malerischen Namen
                                    „Wissenschaftliche Hilfskraft mit den Aufgaben und
                                    Bezügen eines Verwalters der Dienstgeschäfte eines
                                    wissenschaftlichen Assistenten“ bekleideten
                                    Mittelbauposten an der Uni Regensburg. In der Zeit
                                    zwischen 1980 und 1982 sprang nicht nur der
                                    rätoromanistische Funke von mir auf ihn über, sondern
                                    entstand auch eine sehr solide Freundschaft, die sich
                                    aus vielen gemeinsamen wissenschaftlichen Interessen und
                                    persönlichen Neigungen speiste und dies immer noch
                                    tut.</span>
                            </div>
                            <div className="clearfloat"></div>
                        </div>
                    </div>
                </div>

                <div id="Main">
                    <div id="Articles" className="grid_14">
                        <section id="posts">
                            <article className="post">
                                <figure className="imageleft">
                                    <p style={{ width: "250px" }}><a href="#b1"
                                        name="abb1">Abb. 1</a>:
                                        Zusammentreffen zweier
                                        Begräbnisformen</p>
                                    <button onClick={() => { setOpen(true); setIndex(0); }}>
                                        <img src={LoculiSmall} width="250" height="170"
                                            alt="Zusammentreffen zweier Begräbnisformen" />
                                    </button>
                                </figure>

                                <p>
                                    Wie auch immer: Sowohl beim ALD-I als auch beim ALD-II haben unsere
                                    Exploratoren (<i>semper utriusque sexus generisque</i>) die Vorgaben der
                                    beiden Fragebücher genau befolgt, überall das Vorhandensein (<i>o meno</i>)
                                    von <i>loculi</i> vermerkt und zudem in fast allen der zu untersuchenden
                                    217 Fälle sehr expressive Fotografien der betreffenden Friedhöfe
                                    nach Hause bzw. nach Salzburg gebracht. Allerdings ist es erst im
                                    Jahr 2009 zu einer synoptischen Kartierung der erhobenen Daten
                                    gekommen: siehe dazu <a href="#abb1" name="b1">Abb. 1</a>.
                                    Die darauf zutage tretende Raumstruktur hat mich förmlich
                                    elektrisiert und veranlasst, dem gesamten damit verbundenen
                                    Fragenkomplex nicht nur in romanischer, sondern in paneuropäischer
                                    Perspektive im Wege umfassender Lektüren und Recherchen gründlich
                                    nachzugehen.
                                </p>
                                <p>
                                    In der Tat ist für einen mit den sprachlichen Dynamismen der
                                    ALD-Zone vertrauten Linguisten die auf
                                    <a href="#abb1" name="b1">Abb. 1</a> sichtbar
                                    werdende Raumstruktur „ganz einfach“ zu lesen: Es handelt sich um
                                    ein Raumprofil, welches das (hellgrau markierte) Erdbegräbnis
                                    (<i>inumazione</i>) in rezessiver bzw. konservativer und die (nirgends
                                    allein auftretende) Tumulierung (dunkelgrau markiert) in
                                    expansiv-innovativer Funktion zeigt. Das Raumprofil der <a href="#abb1" name="b1">Abb. 1</a>
                                    legt also die Vermutung nahe, dass vor einer noch näher zu
                                    bestimmenden Zeit die dunkelgraue Zone deutlich kleiner bzw. sogar
                                    gänzlich inexistent war.
                                </p>
                                <p>
                                    Die Frage ist nur: Um welche Zeiträume handelt es sich da? Und
                                    welche kulturellen bzw. sozialen Faktoren haben dazu beigetragen,
                                    die aus der Karte erahnbare Dynamik in Gang zu setzen und
                                    voranzutreiben? Und schlussendlich: Was ist eigentlich der kapitale
                                    Unterschied zwischen einem Erdbegräbnis der uns vertrauten Art und
                                    einem Nischenbegräbnis, das ganz offenbar „südlich von uns“
                                    beheimatet ist?
                                </p>
                                <p>
                                    <h1>2 Kurze Geschichte des europäischen Friedhofswesens</h1>
                                </p>
                                <p>
                                    Bei der Durchsicht der einschlägigen Fachliteratur und der
                                    Konsultation zahlloser
                                    Internetseiten<sup><a href="#fn1"
                                        name="fz1">1</a></sup>  stellt sich sehr rasch
                                    heraus, dass das heute beobachtbare Friedhofswesen Europas in einer
                                    just für Romanisten höchst interessanten Weise zweigeteilt ist: Die
                                    drei südromanischen Länder
                                    Portugal<sup><a href="#fn2" name="fz2">2</a></sup>,
                                    Spanien<sup><a href="#fn3" name="fz3">3</a></sup>
                                    und Italien<sup><a href="#fn4"
                                        name="fz4">4</a></sup>  kennen
                                    die in der Folge noch näher zu beschreibende Tumulierung
                                    (<i>tumulazione</i>), während der gesamte Rest Europas – unter Einbezug
                                    auch seiner orthodoxen Teile – weitgehend den uns bekannten Bräuchen
                                    folgt. Das ist ein moderner Befund, der natürlich früher anders
                                    ausgesehen hat.
                                </p>
                                <figure className="imageleft">
                                    <p style={{ width: "256px" }}><a href="#b2"
                                        name="abb2">Abb 2</a>: Bozen Kommunalfriedhof</p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(1); }}>
                                        <img src={BozenSmall} width="250" height="170"
                                            alt="Kommunalfriedhof in Bozen" />
                                    </button>
                                </figure>

                                <p>
                                    Auszugehen ist davon, dass das Christentum von der Antike die Feuer-
                                    und die Erdbestattung übernommen, aber sehr rasch die erste Form zur
                                    Ausnahme und die zweite Form – weil zahlreichen biblischen
                                    Empfehlungen entsprechend – zur Regel erklärt hat. Allerdings hat
                                    sich bereits in merowingischer Zeit allem Anschein nach im ganzen,
                                    damals christlichen Europa im Zuge des Versuchs, den Toten eine
                                    spezielle Ehrung zukommen zu lassen, in fortschreitendem Maß der
                                    Brauch etabliert, die Verstorbenen <i>ad sanctos</i>, d.h. inner- oder
                                    unterhalb bzw. in unmittelbarer Nähe von Kirchen, zu bestatten. Dies
                                    hatte zwei Konsequenzen: die rasch eintretende Überfüllung der
                                    Kirchen mit Grabstellen (und das damit verbundene Auftreten schwer
                                    zu bemeisternder hygienischer Probleme) und die in periodischen
                                    Zyklen notwendig gewordene Exhumierung und Umbettung der Toten mit
                                    dem Ziel, auch den nachfolgenden Generationen einen
                                    (vorübergehenden) Begräbnisplatz <i>ad sanctos</i> zu sichern.
                                </p>
                                <p>
                                    Eine direkte Folge der Praxis der Exhumierung war die Errichtung von
                                    Beinhäusern (oder Karnern) und Ossarien. Von den ersteren sind
                                    während des Hoch- und Spätmittelalters gerade im alpinen und
                                    danubianischen Raum architektonisch sehr ansprechende Exemplare in
                                    großer Zahl gebaut worden, wovon einige bis heute erhalten sind und
                                    touristisch besucht werden
                                    können.<sup><a href="#fn5" name="fz5">5</a></sup>
                                </p>
                                <p>
                                    Aus anthropologischer Sicht sind die im Mittelalter wohl überall in
                                    Europa anzusetzenden Verhältnisse als „zweifaches Begräbnis“ zu
                                    bezeichnen, da ja immerhin ein und derselbe Verstorbene zweimal –
                                    d.h. unmittelbar nach seinem Tod und dann auf dem Wege der
                                    Einbringung seiner Reste in einen Karner – zur Ruhe gebettet
                                    wird. Es hat aber auch den Anschein, dass der Umstand des doppelten
                                    Begräbnisses – der immerhin mit der Vorstellung der Störung der
                                    jedem Toten gebührenden Ruhe verbunden werden kann – in kirchlichen
                                    Kreisen <i>à la longue</i> Widerstand hervorgerufen hat. Tatsache ist
                                    jedenfalls, dass sich – ausgehend von einer kleinen Schrift Martin
                                    Luthers aus dem Jahr 1527<sup><a href="#fn6"
                                        name="fz6">6</a></sup>
                                    – im von der Reformation erfassten Teil
                                    Europas eine neue Auffassung von Tod und Begräbnis ausgebreitet hat,
                                    die nicht die Ehrung der Toten bzw. der ihnen zukommenden Gebeine,
                                    sondern deren Ruhe bzw. Schlaf in den Vordergrund gestellt hat.
                                </p>
                                <figure className="imageright">
                                    <p style={{ width: "250px" }}><a href="#b3"
                                        name="abb3">Abb 3</a>: Riva di Garda (Trentino)</p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(2); }}>
                                        <img src={RivaSmall} width="250" height="170"
                                            alt="Bild 3: Friedhof in Riva" />
                                    </button>
                                </figure>

                                <p>
                                    Konkret hat sich das in Mittel- und Nordeuropa zunächst so geäußert,
                                    dass die Begräbnisse <i>ad sanctos</i> immer seltener wurden, die bisher
                                    üblichen, eng um die Kirche gescharten Friedhöfe (Kirchhöfe
                                    bzw. Gottesacker) v.a. in mittleren und größeren Städten zu vor der
                                    Stadt neu angelegten, parkartigen Anlagen mutierten und durch die
                                    Proskribierung des Mehrfachbegräbnisses die Karner zunächst
                                    funktionslos wurden, dann immer mehr verfielen und zuletzt meist –
                                    glücklicherweise nicht immer und überall – abgerissen wurden.
                                    Am Ende dieser Entwicklung steht der heute auf allen uns vertrauten
                                    Friedhöfen übliche Brauch, die einmal in eine bestimmte
                                    Erdgrabstelle verbrachten sterblichen Reste ebendort auf alle Zeit
                                    zu belassen und, im Falle der Neubelegung der betreffenden
                                    Grabstelle, um ein paar Zentimeter tieferzulegen.
                                </p>
                                <p>
                                    Aus anthropologischer Sicht liegt damit der Sachverhalt des
                                    Einfachbegräbnisses vor, womit zudem die Vorstellung der als
                                    naturrechtliches Gut zu betrachtenden
                                    Totenruhe<sup><a href="#fn7" name="fz7">7</a></sup>
                                    verbunden ist.
                                    Für die romanischen Länder (mit der Ausnahme von Frankreich und
                                    Rumänien) hat das mit der Mehrfachbestattung verbundene <i>ad
                                        sanctos</i>-Prinzip bis weit in das 18. Jahrhundert seine volle Geltung
                                    behalten und wurde erst in diesem Zeitraum im Zeichen der Aufklärung
                                    durch verschiedene, „von oben“ erlassene Reformen modifiziert
                                    bzw. außer Kraft gesetzt.<sup><a href="#fn8"
                                        name="fz8">8</a></sup>
                                </p>

                                <figure className="imageleft">
                                    <p style={{ width: "250px" }}><a href="#b4"
                                        name="abb4">Abb 4</a>: Brescia, Cimitero comunale</p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(3); }}>
                                        <img src={BresciaSmall} width="250" height="170"
                                            alt="Brescia, Cimitero comunale" />
                                    </button>
                                </figure>
                                <p>
                                    Die bekannteste davon ist ein von Kaiser
                                    Napoleon im Jahr 1804 in Saint-Cloud erlassenes Dekret, das für die
                                    damals von ihm beherrschten Gebiete explizit vorschreibt, die Toten
                                    individuell (und nicht in Massengräbern) sowie in der Erde zu
                                    bestatten, daneben allerdings auch festlegt, die Toten bzw. deren
                                    Reste nach fünf Jahren zu exhumieren, um die Grabstelle anderwärts
                                    neu vergeben zu können. Man erkennt sofort, dass das Edikt von Saint-Cloud nicht im Zeichen
                                    des Einfach-, sondern des Mehrfachbegräbnisses und somit in einer
                                    Tradition steht, die nicht als „mitteleuropäisch“ bezeichnet werden
                                    kann.
                                </p>
                                <p>
                                    Doch betrachten wir in aller Kürze die heute in Italien für
                                    <i>tumulazione</i> und <i>inumazione</i> üblichen Normen. Vorauszuschicken ist,
                                    dass zur Zeit der <i>unità d’Italia</i> (1861) beide Bestattungsformen auf
                                    allen Friedhöfen Mittel- und Süditaliens nebeneinander existierten
                                    und sich das neue Staatswesen sehr rasch anschickte, für beide
                                    Modalitäten entsprechende Rechtsnormen von gesamtstaatlicher
                                    Wirksamkeit zu schaffen. Letzteres galt bis vor ein paar Jahren, als
                                    die ersten Schritte zur Abtretung dieser Kompetenzen an ausgewählte
                                    Regionen Italiens gesetzt wurden.
                                    Bei der in der Folge präsentierten Charakterisierung von <i>tumulazione</i>
                                    und <i>inumazione</i> lasse ich die auch in Italien in den 1870er Jahren
                                    langsam aufgekommene (und bis heute nur zu geringer Verbreitung
                                    gelangte) Begräbnisform der Einäscherung (<i>incinerazione</i>) außer
                                    Betracht. Ihre italienische Spielart bietet zudem – im
                                    gesamteuropäischen Vergleich – keine ins Auge fallenden
                                    Besonderheiten.
                                </p>
                                <figure className="imageright">
                                    <p style={{ width: "250px" }}><a href="#b5"
                                        name="abb5">Abb. 5</a>: Malcésine (Veneto),
                                        Cimitero comunale</p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(4); }}>
                                        <img src={MalcesineSmall} width="250" height="170"
                                            alt="Bild 5: Malcésine (Veneto),
                                   Cimitero comunale." />
                                    </button>
                                </figure>
                                <p>
                                    Auf den heutigen italienischen Friedhöfen werden die Begräbnisarten
                                    <i>tumulazione</i>, <i>inumazione</i> und <i>incinerazione</i> im landesweiten
                                    Durchschnitt folgendermaßen genützt: 60 Prozent, 25 Prozent und 15
                                    Prozent. Dabei kann der Prozentsatz für die <i>tumulazione</i> im Süden
                                    gegen 100 Prozent tendieren und jener der <i>incinerazione</i> im
                                    (äußersten) Norden die 50-Prozent-Marke übersteigen. Die landesweit
                                    stabilste Form des Begräbnisses ist also die – im allgemeinen
                                    Sozialprestige allerdings nicht ganz oben stehende – <i>inumazione</i>.
                                </p>
                                <p>
                                    Der <i>cursus requiescendi</i> präsentiert sich bei der <i>tumulazione</i> nicht
                                    nur nach allgemein überliefertem Brauch, sondern vor allem nach dem
                                    Willen des Gesetzgebers wie folgt: Einbettung des Verstorbenen in
                                    einen Doppelsarg aus Holz (außen) und Zink (innen), Verbringung des
                                    Doppelsarges in einen heute im Regelfall für allerlängstens 25 Jahre
                                    mietbaren <i>loculo</i>.<sup><a href="#fn9" name="fz9">9</a></sup>
                                </p>
                                <figure className="imageleft">
                                    <p style={{ width: "250px" }}><a href="#b6"
                                        name="abb6">Abb. 6</a>: València (Spanien),
                                        Cementiri general</p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(5); }}>
                                        <img src={ValenciaCementerioSmall} width="250" height="170"
                                            alt="Bild 6: València (Spanien),
                                   Cementiri general." />
                                    </button>
                                </figure>
                                <p>
                                    Nach Ablauf dieser Zeit erfolgt – fallweise unter direkter
                                    Anwesenheit der Hinterbliebenen – die obligatorische <i>estumulazione</i>
                                    und die Verbringung der aufgefundenen Reste an eine neue Stelle des
                                    betreffenden Friedhofs. Diese kann – je nach Zustand dieser Reste –
                                    ein <i>campo per inconsunti</i> oder
                                    ein <i>ossarietto</i> (Beinbehälter: etwa 70
                                    cm in drei Dimensionen) sein, welch letzterer – zusammen mit einer
                                    den Namen und die Lebensdaten des Verstorbenen kundgebenden Tafel –
                                    erneut in oft übermannshohen Betonwänden untergebracht werden kann.
                                </p>
                                <p>
                                    Die mit dem <i>campo per inconsunti</i> verbundenen Kultureme sind
                                    allerdings für unsere Auffassungen sehr
                                    gewöhnungsbedürftig.<sup><a href="#fn10"
                                        name="fz10">10</a></sup> Im
                                    laut Gesetz hermetisch dichten Holz-Zink-Doppelsarg kommt es in 80
                                    Prozent aller Fälle zu keinerlei Verwesung. Bei der Sargöffnung
                                    findet man meistens mumienartige Leichen, die – erneut zufolge
                                    Gesetz – in einem Spezialsektor des betreffenden Friedhofs („<i>campo
                                        per inconsunti</i>“) für fünf Jahre zur (chemikalisch beförderten)
                                    Nachverwesung beigesetzt werden müssen. Nach Ablauf dieser Frist
                                    erfolgt eine erneute Exhumierung, die mit der Hoffnung verbunden
                                    ist, nunmehr die aufgefundenen Reste einem <i>ossarietto</i> anvertrauen zu
                                    können. Sofern dies trotz allem noch immer nicht möglich ist, kommt
                                    es in manchen italienischen Friedhöfen zur obligatorischen
                                    Einäscherung der unverwest verbliebenen Reste und der Übergabe der
                                    Asche an die Hinterbliebenen. Andernfalls erfolgt eine erneut auf
                                    fünf Jahre befristete Einbringung in einen <i>campo per inconsunti</i>.
                                </p>
                                <p>
                                    Hinzuzufügen ist, dass auf den meisten italienischen Friedhöfen die
                                    <i>estumulazione</i> und die nachfolgende Belegung der <i>campi per inconsunti</i>
                                    nicht individuell, sondern geblockt für eine große Anzahl von Toten
                                    sowie erst nach dem Verstreichen einer breit angelegten
                                    Informationskampagne an die Adresse der Hinterbliebenen stattfindet.
                                    Auch die Verweildauer der Reste eines Toten in den <i>ossarietti</i> ist
                                    begrenzt und Gegenstand eines entsprechenden Mietvertrags: meist für
                                    zehn Jahre. Sofern keine Verlängerung begehrt wird, erfolgt nach
                                    Ablauf dieser Frist die Einbringung der Reste in das allgemeine
                                    <i>ossario</i>, worüber jeder italienische Friedhof <i>ex lege</i> verfügt.
                                </p>
                                <figure className="imageright">
                                    <p style={{ width: "250px" }}><a href="#b7"
                                        name="abb7">Abb. 7</a>: València (Spanien),
                                        Cementiri de Benimaclet</p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(6); }}>
                                        <img src={ValenciaBenimacletSmall} width="250" height="170"
                                            alt="Bild 7: València (Spanien), Cementiri de Benimaclet." />
                                    </button>
                                </figure>
                                <p>
                                    Alles in allem wird also bei der <i>tumulazione</i> ein Verstorbener
                                    durchschnittlich viermal umgebettet, wobei sein <i>cursus quiescendi</i>
                                    bei der Einbettung in einen <i>loculo</i> beginnt und
                                    beim <i>ossario</i> endet.
                                    Bei der <i>inumazione</i> kommt es durchschnittlich nur zu drei
                                    Umbettungen: Ein in einem Holzsarg in einem Erdgrab Bestatteter darf
                                    zufolge Gesetz in diesem nur zehn Jahre ruhen
                                    bzw. verbleiben. Darnach erfolgt die Exhumierung der Reste mit dem
                                    Ziel, das betreffende Erdgrab gebeinfrei an den nächsten Nutzer
                                    übergeben zu können. Für die exhumierten Reste ergeben sich als
                                    Alternativen die Einäscherung oder die (erneut zeitlich befristete)
                                    Bestattung in einem <i>ossarietto</i>. Darnach endet
                                    auch hier der <i>cursus quiescendi</i> im örtlichen <i>ossario</i>.
                                    Hinzuzufügen ist, dass für alle Bestattungsetappen stets neue
                                    religiöse (oder andere) Feierlichkeiten vorgesehen sind, deren
                                    Umfang aber mit der Zeit abnimmt.
                                </p>
                                <p>
                                    Das hier in zwei Spielarten vorgestellte Mehrfachbegräbnis führt zu
                                    einer Besonderheit, die von den um einen weltweiten Kulturvergleich
                                    bemühten Anthropologen ganz besonders beachtet und dementsprechend
                                    bezeichnet wird: nämlich zur <i>circolazione delle ossa</i>, die – wie wir
                                    gesehen haben – im Mittelalter europaweit verbreitet war und sich
                                    seit den Zeiten der Reformation aus dem Bereich Mittel-, Nord- und
                                    Osteuropas ganz zurückgezogen
                                    hat.<sup><a href="#fn11" name="fz11">11</a></sup>
                                </p>
                                <figure className="imageleft">
                                    <p style={{ width: "250px" }}><a href="#b8"
                                        name="abb8">Abb. 8</a>: Oviedo (Spanien), Cementerio San Salvador</p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(7); }}>
                                        <img src={OviedoSmall} width="250" height="170"
                                            alt="Bild 8: Oviedo (Spanien), Cementerio San Salvador" />
                                    </button>
                                </figure>
                                <p>
                                    Vor allem in Spanien, auf dessen Friedhöfen richtiggehende
                                    Totenhäuser zu finden sind,<sup><a href="#fn12"
                                        name="fz12">12</a></sup>
                                    in denen die Toten in <i>nichos</i> (span.)
                                    oder <i>nínxols</i> (katal.) ruhen, existiert eine sehr ähnliche
                                    <i>circolazione delle ossa</i>, die allerdings seit alters her um eine
                                    Etappe kürzer ist: In Spanien liegen die Toten in den <i>nichos</i>
                                    bzw. <i>nínxols</i> in einfachen Holzsärgen, so dass – auch angesichts des
                                    dort relativ warmen Klimas – die rasche und gänzliche Ossifizierung
                                    der Leichname sichergestellt ist. Einrichtungen, die den
                                    italienischen <i>ossarietti</i> und <i>ossari</i>
                                    vergleichbar sind, werden auch
                                    dort genützt. Doch entfällt die mit den <i>campi per inconsunti</i>
                                    verbundene Mühsal gänzlich.
                                </p>

                                <h1>3 Zurück zum ALD bzw. zur Botschaft der Abbildung 1</h1>

                                <p>
                                    Im Lichte der in Kapitel 2 dargelegten, einigermaßen
                                    gewöhnungsbedürftigen Sachverhalte habe ich die langjährige
                                    Mitarbeiterin des ALD-II, Brigitte Rührlinger, gebeten, in den zu
                                    beiden Seiten der Grenze zwischen Hell- und Dunkelgrau gelegenen
                                    Ortschaften Nachforschungen zu den dortigen Friedhöfen
                                    durchzuführen. Diese erfolgten in aller Regel telefonisch und anhand
                                    eines genau festgelegten Gesprächsleitfadens. Als Gesprächspartner
                                    konnten dazu meistens jene Gemeindeangestellten gewonnen werden, die
                                    mit der Verwaltung der Friedhöfe befasst sind. In der Mehrzahl der
                                    Fälle ergab sich dabei ein konstruktives und offenes Gesprächsklima,
                                    wofür allerdings Voraussetzung war, dass sich Brigitte Rührlinger
                                    ihren Gesprächspartnern als <i>in funeralibus</i> bestens vorinformierte
                                    Fachfrau vorstellen konnte. Erstaunlicherweise fielen die örtlichen
                                    Geistlichen in dieser Causa als Gesprächspartner fast gänzlich aus.
                                </p>
                                <p>
                                    Die Fragen des Leitfadens zielten vor allem auf zwei Bereiche: auf
                                    den Zeitraum des ersten Auftauchens von <i>loculi</i> auf den örtlichen
                                    Friedhöfen sowie auf die Frage eines eventuell vorhandenen
                                    Prestigeunterschiedes zwischen dem traditionellen Erd- und dem
                                    deutlich jüngeren Nischenbegräbnis.
                                </p>
                                <p>
                                    Zur Zeitfrage: Grosso modo scheint das Nischenbegräbnis in den
                                    kleineren Ortschaften der ALD-Zone vor allem nach dem Zweiten
                                    Weltkrieg eingeführt worden zu sein. Vor dem Ersten Weltkrieg dürfte
                                    es nur in den größeren Städten (wie Trient oder Bassano del Grappa)
                                    vorhanden gewesen sein. Episodenweise wurde erwähnt, dass in den
                                    friaulischen Dörfern die Nischengräber von der erst im Jahr 1963
                                    installierten Regionalverwaltung ganz besonders favorisiert worden
                                    seien.
                                </p>
                                <p>
                                    Zur Prestigefrage: Hier waren keine eindeutig bewertbaren Antworten
                                    zu erhalten. Oft wurde von den Friedhofsverantwortlichen erwähnt,
                                    dass die Leute aus nicht näher bekannten Gründen nach Nischengräbern
                                    verlangt hätten und diese deshalb auf dem örtlichen Friedhof
                                    eingerichtet worden seien. Nur in Einzelfällen wurde die Frage
                                    explizit bejaht, ob das Prestige der Nischengräber jenes der
                                    Erdgräber übersteige. Aus den Befragungen ergab sich aber keineswegs
                                    der Eindruck, dass das Erdbegräbnis einen entscheidenden
                                    Prestigeverlust erlitten hätte.
                                </p>
                                <p>
                                    Unter den wenigen befragten Geistlichen gab es allerdings sehr
                                    harsche Stimmen gegen das Nischenbegräbnis, das als ortsfremd,
                                    unchristlich und zeitgeistig bezeichnet wurde.
                                </p>
                                <p>
                                    In Einzelfällen wurde explizit auf örtliche Widerstände gegen die
                                    Etablierung des Nischenbegräbnisses hingewiesen: So habe zwar die
                                    Stadt Trient das Nischenbegräbnis seit dem 19. Jahrhundert auf ihrem
                                    innerstädtischen Friedhof etabliert, doch weigerten sich die kleinen
                                    Ortschaften in der unmittelbaren Umgebung Trients („rioni“) bis
                                    heute standhaft, dieses auch bei sich zu akzeptieren.
                                </p>
                                <p>
                                    Alles in allem entstand der Eindruck einer Spielart eines
                                    prototypischen Peripherie-Zentrum-Konflikts: Von der hier als
                                    Peripherie fungierenden ALD-Zone schien das Nischenbegräbnis als
                                    Eigen- bzw. Errungenschaft eines in seiner Führungsrolle mehr
                                    implizit als explizit akzeptierten Zentrums schrittweise übernommen
                                    worden zu sein. Dieses „Zentrum“ ist nach der Lage der Dinge
                                    natürlich das „Innere“ Italiens. In sehr grober typologischer
                                    Vereinfachung könnte man daher in der von Süd nach Nord
                                    stattgehabten Diffusion des Nischenbegräbnisses eine Art kultureller
                                    Anpassung an den Süden sehen, die man auch als „Italianisierung“
                                    einstufen könnte.
                                </p>
                                <p>
                                    Dass diese Sicht der Dinge nicht unpassend ist, kann an zwei
                                    Beispielen aus der weltweiten „Italophonie“ verdeutlicht werden, auf
                                    deren erstes ich durch reinen Zufall gestoßen bin.
                                </p>

                                <h1>4 <i>tumulazione</i> als identitätsstützendes Merkmal in der
                                    italienischen Diaspora</h1>

                                <h2>4.1 Der Fall Montréal (Kanada)</h2>
                                <p>
                                    Es geht dabei um den Friedhof <i>Notre-Dame-des-Neiges</i>, der derzeit die
                                    größte Begräbnisstätte Montréals
                                    ist.<sup><a href="#fn13"
                                        name="fz13">13</a></sup> Er existiert seit 1854 und
                                    wurde seit dieser Zeit exklusiv für Erdbegräbnisse verwendet, wobei
                                    sich die Begräbnisbräuche der Franko- und Anglo-Kanadier
                                    diesbezüglich weitgehend identisch verhielten. Dieser Friedhof liegt
                                    leicht oberhalb des eigentlichen Stadtkerns von Montréal und hat
                                    eine leicht hügelige Konfiguration. Ein Lokalaugenschein ergibt
                                    einen durchaus als „mitteleuropäisch“ anzusprechenden Befund, wenn
                                    man von der unübersehbaren Besonderheit absieht, dass die
                                    verschiedenen Ethnien der weltoffenen Einwanderungsstadt Montréal
                                    ihre Toten ganz offenbar in ihnen speziell zugewiesenen Sektoren des
                                    Friedhofs bestatten durften.
                                </p>
                                <p>
                                    Was nun aber im wahrsten Wortsinn ins Auge sticht, sind am
                                    Friedhofsrand errichtete <i>mausolées</i> in Gestalt kompakter,
                                    mehrstöckiger Häuser, die allesamt illustre Namen tragen:
                                    <i>Notre-Dame, Jean-Paul II, Saint-François</i> etc. Auf Nachfrage erfährt
                                    man,<sup><a href="#fn14" name="fz14">14</a></sup>
                                    dass das erste dieser „Mausoleen“ im Jahr 1978 und das
                                    bislang
                                    letzte im Jahr 2008 eröffnet worden ist. Jedes dieser <i>mausolées</i>
                                    enthält mehrere Tausend <i>niches</i>, von denen der Großteil die Funktion
                                    eines <i>loculo</i> erfüllt und nur ein geringer Teil der Aufnahme von
                                    Aschenurnen dient.
                                </p>
                                <figure className="imageright">
                                    <p style={{ width: "250px" }}><a href="#b9"
                                        name="abb9">Abb. 9</a>: Montréal (Kanada), Cimetière Notre-Dame-des-Neiges</p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(8); }}>
                                        <img src={MontrealSmall} width="250" height="170"
                                            alt="Bild 9: Montréal (Kanada), Cimetière Notre-Dame-des-Neiges." />
                                    </button>
                                </figure>

                                <p>
                                    Beim Besuch dieser Mausoleen fällt zweierlei auf: dass praktisch
                                    alle der auf den diversen <i>niches</i> vermerkten Vor- und Familiennamen
                                    etymologisch italienischen
                                    Ursprungs<sup><a href="#fn15"
                                        name="fz15">15</a></sup> sind, und auch, dass es kaum
                                    mehr freie <i>niches</i> gibt und somit die Nachfrage darnach sehr groß
                                    gewesen sein muss.
                                </p>
                                <p>
                                    Angesichts der auf den <i>niches</i> vermerkten Todesdaten – von denen
                                    viele deutlich vor dem Jahr 1978 liegen – lässt sich ableiten, dass
                                    es auf der Grundlage der seit jenem Jahr angebotenen neuen
                                    Möglichkeiten viele Italophone<sup><a href="#fn16"
                                        name="fz16">16</a></sup>
                                    als besonders attraktiv angesehen
                                    haben, ihre bis dato (gemeinschaftlich mit Verstorbenen aus vielen
                                    anderen Kulturräumen) in der Erde ruhenden Toten exhumieren und in
                                    eine <i>niche</i> einbetten zu lassen, sofern sie nicht diesen Vorgang für
                                    den Fall des eigenen Ablebens durch Ankauf einer <i>niche</i>
                                    sichergestellt haben.
                                </p>

                                <figure className="imageleft">
                                    <p style={{ width: "250px" }}>
                                        <a href="#b10" name="abb10">Abb. 10</a>: Lissabon, Cemitério dos Prazeres</p>
                                    <button type="button" onClick={() => { setOpen(true); setIndex(9); }}>
                                        <img src={LissabonSmall} width="250" height="170"
                                            alt="Bild 10: Lissabon, Cemitério dos Prazeres." />
                                    </button>
                                </figure>

                                <p>
                                    Ganz bewusste Wahl des Begräbnisortes der <i>niche</i>
                                    statt einer <i>tombe</i> als identitätsmarkierendes
                                    Symbol der eigenen <i>italianità</i>?
                                    Dass an der Annahme, dass für die internationale italienische
                                    Diaspora das Nischenbegräbnis eine ganz spezielle Attraktivität
                                    besitzt, „etwas dran“ sein muss, zeigt der nächste Fall, der uns
                                    nach Deutschland, genauer: nach Saarbrücken, führt.
                                </p>

                                <h2>4.2 Der Fall Saarbrücken (Deutschland)</h2>
                                <p>
                                    Während ich auf den eben geschilderten Fall (Montréal) zufällig
                                    bzw. im Verlauf einer Reise gestoßen bin, verdanke ich die Kenntnis
                                    des „Falles Saarbrücken“ meinen bereits systematisch vorgenommenen
                                    funeralen Recherchen. Es geht dabei um den Saarbrückener
                                    Hauptfriedhof und das im Jahr 2007 mit Nachdruck geäußerte Verlangen
                                    der im Raum Saarbrücken ansässigen italienischen
                                    Gemeinde<sup><a href="#fn17"
                                        name="fz17">17</a></sup>, auf eben
                                    diesem Friedhof in Analogie zu den mit eigenen Grabstellen bedachten
                                    Muslimen „oberirdische Grabkammern“ zu erhalten. Die Homepage des
                                    fraglichen Friedhofs<sup><a href="#fn18"
                                        name="fz18">18</a></sup> weist sogar den vollen Namen
                                    des für die
                                    Errichtung der bislang rund 80 Grabkammern (<i>loculi</i>) besonders aktiv
                                    gewordenen italienischen Mitglieds des örtlichen
                                    „Integrationsbeirats“ aus.
                                </p>
                                <p>
                                    Im direkten Gespräch mit diesem und mit den in dieser Causa tätig
                                    gewordenen Angestellten der Saarbrückener Friedhofsverwaltung ergab
                                    sich ganz eindeutig, dass vonseiten der in Saarbrücken ansässigen
                                    Italiener der Begräbnisform der <i>tumulazione</i> eindeutig und ganz
                                    entschieden der Vorrang vor der vor Ort altetablierten <i>inumazione</i>
                                    gegeben wurde. Und zwar im Zeichen bzw. im Namen der eigenen
                                    kulturellen bzw. nationalen <i>identità</i>.
                                </p>
                                <p>
                                    Die ab 2008 zur Verfügung gestellten Grabkammern sind inzwischen
                                    fast zur Gänze an italophone Interessenten vermietet worden.
                                    Zwischenzeitlich habe ich erfahren, dass sich im Saarland ein
                                    ähnlich gelagertes Vorkommnis auch in Völklingen ereignet hat.
                                </p>

                                <h1>5 Quintessenz</h1>
                                <p>
                                    Im Lichte der Fälle Montréal und Saarbrücken erscheint die in
                                    Abschnitt 3 geäußerte Vermutung, dass die heute in der ALD-Zone
                                    beobachtbare Verteilung zwischen <i>inumazione</i>
                                    und <i>tumulazione</i> mit
                                    einer kulturell induzierten Dynamik speziell „italienischer
                                    Provenienz“ zu tun haben könnte, als durchaus plausibel. Es wird
                                    Sache weiterer Reisen und systematischer Beobachtungen sein,
                                    ähnliche Erscheinungen auch für hispano- und lusophone
                                    Diasporagruppen aufzuzeigen, wobei natürlich deren Zusammentreffen
                                    mit italophonen Gruppen – wie dies z.B. ganz sicher in Argentinien
                                    der Fall sein dürfte – von besonderem Interesse wäre.
                                </p>
                                <p>
                                    Für den Linguisten ist im Falle des ALD ganz besonders interessant,
                                    dass sich die Aufmarschwege dieser Dynamik weitgehend mit jenen
                                    decken, die für sprachliche Innovationen aus dem Italienischen
                                    ermittelt werden konnten.<sup><a href="#fn19"
                                        name="fz19">19</a></sup> Das ist
                                    eine <i>kulturwissenschaftlich</i>
                                    relevante Erkenntnis, die durchaus mit jenen <i>volkskundlich</i>
                                    relevanten Entdeckungen verglichen werden kann, die der
                                    Hauptexplorator des AIS, Paul Scheuermeier, bei seinen
                                    Peregrinationen in der Italo- und Rätoromania machen
                                    konnte.<sup><a href="#fn20"
                                        name="fz20">20</a></sup>
                                </p>


                                <h1>Anmerkungen</h1>

                                <p className="annotation"><sup><a href="#fz1" name="fn1">1</a></sup>
                                    Eine weitere, unersetzliche Informationsquelle stellen zahlreiche
                                    Gespräche mit Friedhofsverantwortlichen sowie direkte Besuche von
                                    Friedhöfen in aller Herren Länder dar.</p>

                                <p className="annotation"><sup><a href="#fz2" name="fn2">2</a></sup>
                                    Siehe dazu <a href="#abb10" name="b10">Abb. 10</a>.</p>
                                <p><sup><a href="#fz3" name="fn3">3</a></sup>
                                    Siehe dazu <a href="#abb6" name="b6">Abb. 6</a>, <a href="#abb7" name="b7">Abb. 7</a> und <a href="#abb8" name="b8">Abb. 8</a>.</p>

                                <p className="annotation"><sup><a href="#fz4" name="fn4">4</a></sup>
                                    Siehe dazu <a href="#abb2" name="b2">Abb. 2</a>, <a href="#abb3" name="b3">Abb. 3</a>, <a href="#abb4" name="b4">Abb. 4</a> und <a href="#abb5" name="b5">Abb. 5</a>.</p>

                                <p className="annotation"><sup><a href="#fz5" name="fn5">5</a></sup>
                                    Siehe dazu beispielsweise Sörries 1996.</p>

                                <p className="annotation"><sup><a href="#fz6" name="fn6">6</a></sup>
                                    Voller Titel: <i>Ob man vor dem Sterben fliehen möge.</i> Zur ganzen Frage
                                    cf. Sörries 2009, 104f.</p>

                                <p className="annotation"><sup><a href="#fz7" name="fn7">7</a></sup>
                                    Damit hängen auch in unseren Breiten die Verrechtlichung des
                                    Sachverhalts der Totenruhe und die strafrechtliche Verfolgung von deren
                                    Störung zusammen.</p>

                                <p className="annotation"><sup><a href="#fz8" name="fn8">8</a></sup>
                                    Siehe dazu die periodenübergreifend berichtenden Arbeiten von Auzelle
                                    1965, Redemagni 2004, Sörries 2009, Sozzi 2009 und Tomasi 2001, alle
                                    passim.</p>

                                <p className="annotation"><sup><a href="#fz9" name="fn9">9</a></sup>
                                    Siehe zu den in Italien anzutreffenden Verhältnissen <a href="#abb2" name="b2">Abb. 2</a>, <a href="#abb3" name="b3">Abb. 3</a>, <a href="#abb4" name="b4">Abb. 4</a> und <a href="#abb5" name="b5">Abb. 5</a>.</p>

                                <p className="annotation"><sup><a href="#fz10" name="fn10">10</a></sup>
                                    Siehe dazu vor allem <a href="#abb4" name="b4">Abb. 4</a>.</p>

                                <p className="annotation"><sup><a href="#fz11" name="fn11">11</a></sup>
                                    Siehe dazu auch Poppi 2006 sowie Poppi/Goody 2006.</p>

                                <p className="annotation"><sup><a href="#fz12" name="fn12">12</a></sup>
                                    Siehe dazu vor allem <a href="#abb6" name="b6">Abb. 6</a> und <a href="#abb7" name="b7">Abb. 7</a>.</p>

                                <p className="annotation"><sup><a href="#fz13" name="fn13">13</a></sup>
                                    Siehe dazu <a href="#abb9" name="b9">Abb. 9</a>.</p>

                                <p className="annotation"><sup><a href="#fz14" name="fn14">14</a></sup>
                                    Siehe
                                    dazu <a href="http://www.cimetierenddn.org/">http://www.cimetierenddn.org/</a>.</p>

                                <p className="annotation"><sup><a href="#fz15" name="fn15">15</a></sup>
                                    Eine stichprobenartige Auszählung ergab das Verhältnis von 97 Prozent
                                    (italienische Namen) zu 3 Prozent (portugiesische Namen).</p>

                                <p className="annotation"><sup><a href="#fz16" name="fn16">16</a></sup>
                                    Im Großraum Montréal leben rund 200 000 Italophone, die ihre
                                    kulturelle und sprachliche Identität noch sehr gut bewahrt haben. </p>

                                <p className="annotation"><sup><a href="#fz17" name="fn17">17</a></sup>
                                    Diese umfasst in numerischer Hinsicht ca. 5000 Köpfe und stammt
                                    größtenteils aus Süditalien und Sizilien.</p>

                                <p className="annotation"><sup><a href="#fz18" name="fn18">18</a></sup>
                                    Siehe dazu <a href="http://www.saarbruecker-friedhoefe.de/assets/2011_4/1301645866_faltblatt_oberirdische_grabkammern_maerz_2011.pdf">http://www.saarbruecker-friedhoefe.de/assets/2011_4/1301645866_faltblatt_oberirdische_grabkammern_maerz_2011.pdf</a>.</p>

                                <p className="annotation"><sup><a href="#fz19" name="fn19">19</a></sup>
                                    Siehe dazu die Profile jener Ähnlichkeitskarten, die von Roland Bauer
                                    bei der Dialektometrisierung der Daten des ALD-I zum Kunstpunkt
                                    Italienisch (P. 999) ermittelt wurden: Bauer 2009, 208f. (Karten 22 und
                                    23).</p>

                                <p className="annotation"><sup><a href="#fz20" name="fn20">20</a></sup>
                                    Siehe dazu beispielsweise Scheuermeier 1934 (Karten: ibidem 61ff.).</p>



                                <h1>Literatur</h1>
                                <p className="bibl">
                                    AIS = Jaberg, Karl/Jud, Jakob (1928–1940): <i>Sprach- und Sachatlas
                                        Italiens und der Südschweiz</i>, 8 Bde., Zofingen.</p>
                                <p className="bibl">
                                    ALD-I = Goebl, Hans/Bauer, Roland/Haimerl Edgar et al. (Hg.) (1998):
                                    <i>Atlant linguistich dl ladin dolomitich y di dialec vejins, 1a
                                        pert. Atlante linguistico del ladino dolomitico e dei dialetti
                                        limitrofi, 1a parte. Sprachatlas des Dolomitenladinischen und
                                        angrenzender Dialekte, 1. Teil</i>, 7 Bde., Wiesbaden.</p>
                                <p className="bibl">
                                    Auzelle, Robert (1965): <i>Dernières demeures. Conception, composition,
                                        réalisation du cimetière contemporain</i>, Paris.</p>
                                <p className="bibl">
                                    Bauer, Roland (2009): <i>Dialektometrische
                                        Einsichten. Sprachklassifikatorische Oberflächenmuster und
                                        Tiefenstrukturen im lombardo-venedischen Dialektraum und in der
                                        Rätoromania</i>, San Martin de Tor.</p>
                                <p className="bibl">
                                    Poppi, Cesare (2006): Flowers and Bones: Posthumous Reflections, in:
                                    Aram A. Yengoyan: <i>Modes of Comparison: Theory and Practice</i>, Ann Arbor,
                                    457–476.</p>
                                <p className="bibl">
                                    –/Goody, Jack (2006): Flowers and Bones: Approaches to
                                    the Dead in Anglo-American and Italian Cemeteries, in: Aram A. Yengoyan:
                                    <i>Modes of Comparison: Theory and Practice</i>, Ann Arbor, 420–456.</p>
                                <p className="bibl">
                                    Redemagni, Paola (2004): <i>I cimiteri</i>, Mailand.</p>
                                <p className="bibl">
                                    Scheuermeier, Paul (1934): <i>Wasser- und Weingefässe im heutigen
                                        Italien. Sachkundliche Darstellung auf Grund der Materialien des
                                        Sprach- und Sachatlas Italiens und der Südschweiz</i>, Bern.</p>
                                <p className="bibl">
                                    Sörries, Reiner (1996): <i>Die Karner in Kärnten. Ein Beitrag zur
                                        Architektur und Bedeutung des mittelalterlichen Kirchhofs</i>, Kassel.</p>
                                <p className="bibl">
                                    – (2009): <i>Ruhe sanft. Kulturgeschichte des Friedhofs</i>,
                                    Kevelaer.</p>
                                <p className="bibl">
                                    Sozzi, Marina (2009): <i>Reinventare la morte. Introduzione alla
                                        tanatologia</i>, Roma/Bari.</p>
                                <p className="bibl">
                                    Tomasi, Grazia (2001): <i>Per salvare i viventi. Le origini
                                        settecentesche del cimitero extraurbano</i>, Bologna.</p>

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

export default Goebl;