import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Footer from "../Footer";
import Header from "../Header";
import Rubrik from "../Rubrik";
import UpArrow from "../UpArrow";
import StehlPortrait from "../../images/tstehl/tstehl-portrait.jpg";
import DynamikKonvergenzSmall from "../../images/tstehl/dynamik-konvergenz_small.png";
import DiskurstraditionenSmall from "../../images/tstehl/diskurstraditionen_small.png";

const images = [
    {
        src: "https://festschrift-kattenbusch.de/images/tstehl/dynamik-konvergenz.png",
        title: "Abb. 1",
        description: "Dynamik der Konvergenz in Süditalien"
    },
    {
        src: "https://festschrift-kattenbusch.de/images/tstehl/diskurstraditionen.png",
        title: "Abb. 2",
        description: "Diskurstraditionen im konvergenten Sprachkontakt"
    },
]

function Stehl(props) {

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <div id="Wrapper" class="container_14">
            <div id="Header">
                <Header id={props.author} />
                <div class="grid_9">
                    <h1 id="main_title">Sprachdynamik und Variationslinguistik in Italien</h1>
                    <p id="author">Thomas Stehl, Potsdam</p>
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

            <div id="Teasers" class="clearfix">
                <div class="grid_9">
                    <p>
                        Lieber Dieter!
                        Seit unseren ersten gemeinsamen Sprachaufnahmen in Apulien im Sommer
                        1973 haben wir beide der Italianistik die Treue gehalten. Hätte uns
                        damals jemand prophezeit, dass wir zum Ende unserer Hochschullaufbahn
                        für die Italianistik zuständige Lehrstühle in unmittelbarer
                        Nachbarschaft innehaben würden, hätten wir das wohl nicht geglaubt. In
                        Erinnerung an all die gemeinsamen Jahre möchte ich Dir nachfolgend
                        eine Anwendung meiner variationslinguistischen Methode auf „unser“
                        Italien präsentieren, und ich wünsche Dir gleichzeitig von Herzen:
                        Ad multos annos!
                    </p>
                    <p>
                        Ziel des Beitrags ist es, die spezifische Sprachkontaktsituation in
                        Italien und die jeweiligen sprachlichen Dynamiken anhand von fünf
                        Thesen darzustellen, mit denen die aktuelle Mehrsprachigkeit in
                        Italien adäquat erfasst werden kann. Hierfür eignet sich das Modell
                        der funktionalen Variationslinguistik, das seit mehreren Jahrzehnten
                        von mir und meinen Doktoranden in verschiedenen Arbeiten über je
                        spezifische Situationen der Mehrsprachigkeit in Europa, USA,
                        Lateinamerika und in kreolophonen Gebieten Anwendung gefunden hat.
                    </p>

                    <h1>1 Sprachdynamik in Italien</h1>
                    <p>
                        <span style={{ color: "#555555" }}><b>These 1: „Die heutige Sprachdynamik in Italien ist – neben der
                            Kontinuität und dem weiteren Ausbau des <i>italiano standard</i> – eine
                            Dynamik von konvergenten Sprachkontakten mit pragmatischer Neuordnung
                            der diatopischen, diastratischen und diaphasischen Differenzierung.“</b></span>
                    </p>

                </div>
                <div class="grid_5">

                    <div class="abouttheauthor">
                        <img src={StehlPortrait} width="110"
                            height="150" alt="Thomas Stehl - Portrait" />
                        <div class="abouttheauthorfont"><br /><br />
                            <b>Thomas Stehl</b>, Professor für Romanische Philologie/
                            Sprachwissenschaft an der Universität Potsdam.
                            <br />
                            <span style={{ color: "#666666" }}>Mit Dieter Kattenbusch befreundet seit 1971, als ich ihn von der BWL
                                für die Romanistik „abgeworben“ habe. Gemeinsames Studium der
                                Romanistik in Münster ab 1973, gemeinsame Sprachaufnahmen in
                                Süditalien ab 1973, gemeinsame Reisen in Italien und Frankreich,
                                gemeinsame Projektarbeiten und Sprachaufnahmen in der Pilotphase des
                                Sprachatlas des Dolomitenladinischen (ALD) unter der Leitung von Hans
                                Goebl (Salzburg): 1984–1985. Seit der Nachbarschaft der Lehrstühle in
                                Potsdam und Berlin (1998) Zusammenarbeit in der Italianistik und
                                (jeweils als Vertreter der Humboldt-Universität und der Universität
                                Potsdam) im Italienzentrum der Freien Universität Berlin.</span>
                        </div>
                        <div class="clearfloat"></div>
                    </div>
                </div>
            </div>

            <div id="Main">
                <div id="Articles" class="grid_14">
                    <section id="posts">
                        <article class="post">
                            <p>
                                Die Sprachdynamik in Italien weist zwei nur scheinbar gegenläufige
                                Tendenzen auf: Es geht um eine Konsolidierung und Eigendynamik der
                                Standardsprachen als Ausdruck eines <i>divergenten, zentrifugalen
                                    Sprachwandels</i><sup><a href="#fn1"
                                        name="fz1">1</a></sup>. Gleichwohl
                                wurden und werden als Folge der Ausbreitung
                                des Standards im geographischen Raum soziale Zweisprachigkeit und
                                nachfolgende Sprachkontakte als Ausdruck eines <i>konvergenten,
                                    zentripetalen Sprachwandels</i><sup><a href="#fn2"
                                        name="fz2">2</a></sup>
                                zur Normalität.
                            </p>
                            <p>
                                Mit der Auflösung von Diglossien in Pluriglossien im Verlauf des
                                konvergenten Sprachwandels geht eine Neubestimmung aller
                                Dimensionen der sprachlichen Differenzierung einher, denn bei
                                Betrachtung der diatopischen Differenzierung fällt auf, dass die
                                primären Basisdialekte in Italien immer mehr den tertiären
                                Dialekten des Standards Platz machen. Diastratisch löst sich zudem
                                die Zuordnung von Sprachformen zu sozialen Schichten auf, und in
                                der Diaphasik erfolgt eine Neuzuweisung pragmatischer Funktionen –
                                wie formell-informell, öffentlich-familiär,
                                kultiviert-umgangssprachlich, gesprochen-geschrieben – an die
                                verschiedenen Zwischenvarietäten zwischen Dialekt und Standard.
                            </p>
                            <p>
                                All diese Neuzuordnungen fließen zusammen in einem diachronischen
                                Prozess, der in Italien (aber auch in anderen
                                romanischen Gebieten)<sup><a href="#fn3"
                                    name="fz3">3</a></sup>
                                in vertikalen, von der Dominanz des Standards geprägten
                                Sprachkontakten verläuft, und zwar in der Weise, dass dieser Prozess
                                einerseits die Konvergenz der italienischen Basisdialekte in Richtung
                                auf das dominante <i>italiano standard</i> zur Folge hat, und dass
                                andererseits eine Neuformierung der Sprachräume erfolgt sowie eine
                                Umgestaltung in modularen Sprachformen (von Dialekt und Standard),
                                über die theoretisch alle Sprecher verfügen können.
                            </p>

                            <h1>2 Sprachdynamik und Variationslinguistik</h1>
                            <p>
                                <span style={{ color: "#555555" }}><b>These 2: „Die Diglossie-Situationen in Italien und ihre dynamische
                                    Entwicklung können vor allem in einer funktionalen
                                    Variationslinguistik der nun vorherrschenden Pluriglossien und
                                    Konvergenzen analysiert werden.“</b></span>
                            </p>
                            <p>
                                Nach der Ablösung einer traditionellen Geolinguistik und Dialektologie
                                durch neue Fragestellungen der Soziolinguistik seit der Mitte der
                                1960er Jahre und der Rezeption der anglo-amerikanischen
                                Soziolinguistik in der romanischen Sprachwissenschaft, die mit der
                                Parallelsetzung von <i>elaborated code</i> mit der jeweils dominanten
                                Standardsprache und von <i>restricted code</i> mit der jeweiligen
                                Minderheitensprache oder einem romanischen Basisdialekt verbunden
                                war, ging die soziolinguistische Diskussion in Italien seit ihrem
                                Beginn vor allem um die sprachlichen Aspekte der Binnenmigration
                                von Süditalienern und deren sprachliche und soziale
                                Integrationsprobleme in den Industriestädten des
                                Nordens.<sup><a href="#fn4" name="fz4">4</a></sup>
                            </p>
                            <p>
                                In den 1980er und 1990er Jahren kommt es jedoch zu einer
                                Umorientierung; der schichtenspezifische Sprachgebrauch und das
                                damit verbundene soziale Gefälle stehen immer weniger im Zentrum
                                des Interesses. In Italien haben sich die Soziolinguisten, etwa aus
                                der Turiner Schule von Corrado Grassi, auf die Erstellung
                                regionaler Sprachatlanten umorientiert, in denen die heutige
                                Dynamik von Dialekt und Standard dokumentiert werden
                                soll.<sup><a href="#fn5" name="fz5">5</a></sup> Andere
                                untersuchen die sprachinternen Tendenzen des
                                Gegenwartsitalienischen, die Strukturen des <i>italiano parlato</i>, oder
                                auch die Sprachkontakte zwischen dem italienischen Standard und
                                Basisdialekten in Norditalien wie in Süditalien.
                            </p>
                            <p>
                                Hieraus mag deutlich werden, dass die Sprachdynamik und die daraus
                                folgenden, neuen Fragestellungen hinsichtlich der Pragmatik der
                                Sprachverwendung die Notwendigkeit einer integralen Konzeption und
                                Beschreibung der Variation und der Neugestaltung des italienischen
                                Diasystems mit sich bringen, die in der Sprachwissenschaft
                                wahrgenommen und in der Beschreibung mitvollzogen werden muss. Ein
                                Ansatz, der die Erkenntnisse der funktionalen Linguistik und der
                                Soziolinguistik bezüglich des Wechselverhältnisses und der Dynamik von
                                Dialekt und Standard, von Sprachverwendung und deren Dynamik in der
                                Sprachgeschichte zusammenführt, ist daher das Anliegen einer
                                diachronischen Variationslinguistik seit den 1990er
                                Jahren.<sup><a href="#fn6" name="fz6">6</a></sup> In
                                diesem
                                Kontext stellt sich auch die Frage nach den eingangs erwähnten Typen
                                des divergenten und des konvergenten Sprachwandels: Aus einer
                                möglichst umfassenden Analyse des von großer Heterogenität und Dynamik
                                geprägten, heutigen Sprachzustands in Italien ergibt sich eine Fülle
                                von weitergehenden Fragen nach der Typologie, der Charakteristik und
                                den Verlaufsprozessen der verschiedenen Formen des Sprachwandels.
                                Damit ist aber auch die Möglichkeit zur Rückprojektion der entsprechenden
                                Erkenntnisse auf jene Sprachkontakte gegeben, aus denen die italoromanischen
                                Dialekte selbst hervorgegangen sind, vielleicht sogar auch auf jene
                                Kontakte, die – in einer ganz anders gearteten historischen Situation
                                – zur Genese der romanischen Kreolsprachen geführt haben.
                            </p>

                            <h1>3 Die sprachliche Stufung von konvergenten Kontakten: Diskrete
                                Varietäten als soziale Techniken der Alltagskommunikation</h1>
                            <p>
                                <span style={{ color: "#555555" }}><b>These 3: „Der interlektale 
                                    Kontaktbereich (Mesolekt) zwischen dem
                                    dominanten <i>italiano standard</i> und den
                                    dominierten italoromanischen
                                    Dialekten ist als graduelle Stufung funktioneller Sprachen
                                    (Varietäten) zu beschreiben.“</b></span>
                            </p>
                            <p>
                                Sprachliches Wissen, pragmatische Selektion und wechselseitige
                                Interferenz sind sowohl im synchronischen Funktionieren der
                                vertikalen Sprachkontakte als auch in der diachronischen Dynamik
                                des konvergenten Sprachwandels in diesen Kontakten zu untersuchen.
                            </p>
                            <p>
                                Die Frage nach der synchronischen Staffelung des Kontaktbereichs
                                zwischen dem dominanten Standard und den dominierten Idiomen
                                beschäftigt die Kontaktlinguistik seit langem. In der Kreolistik
                                und der Variationslinguistik stehen sich nämlich zwei
                                unterschiedliche Hypothesen über die Gestaltung dieses „Mesolektes“
                                oder der „interlektalen Zone“ zwischen Dialekt und Standard (oder
                                zwischen Basilekt und Akrolekt) gegenüber: Nicht nur Generativisten
                                und quantitative Linguisten konzipieren den Mesolekt
                                als <i>Kontinuum</i>
                                im sprachlichen Bewusstsein wie in den sprachlichen Strukturen und
                                Einheiten, während die kognitive und die strukturalistische
                                Hypothese von einer Gradation interlektaler funktioneller Sprachen
                                ausgeht,<sup><a href="#fn7" name="fz7">7</a></sup> die
                                sich aus einer klaren Abstufung von diskreten
                                Varietäten im Sprecherbewusstsein wie in den sprachlichen
                                Strukturen und diskreten Einheiten ergibt.
                            </p>
                            <p>
                                Eine von Elmar Holenstein<sup><a href="#fn8"
                                    name="fz8">8</a></sup>
                                auf der Basis der kognitiven Psychologie
                                von Eleanor Rosch angestellte Untersuchung sogenannter sprachlicher
                                „Kontinua“, wie hier zwischen Dialekt und Standard, kommt zu dem
                                Ergebnis, dass es sich lediglich um
                                scheinbare <i>Kontinua</i> handelt, die
                                sich aber auf der Basis der menschlichen Prototypenklassifikation als
                                skalierte Abstufungen erweisen, weil die menschliche Fähigkeit, den
                                Prototyp einer Eigenschaft (‚rot‘) oder einer Erfahrungsgröße zu
                                erkennen (in diesem Fall also „Dialekt“ bzw. „Standard“), die
                                Fähigkeit einschließt, sowohl den entsprechenden Gegenpol als auch
                                Abstufungen zwischen den beiden Extremen zu identifizieren.
                            </p>

                            <figure class="imageleft">
                                <p style={{ width: "250px" }}><a href="#b1"
                                    name="abb1">Abb. 1</a>: Dynamik
                                    der Konvergenz in
                                    Süditalien<sup><a href="#fn10"
                                        name="fz10">10</a></sup></p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(0); }}>
                                    <img src={DynamikKonvergenzSmall}
                                        width="250"
                                        height="273" alt="Dynamik der Konvergenz in Süditalien" />
                                </button>
                            </figure>

                            <p>
                                In eigenen empirischen Untersuchungen in
                                Süditalien<sup><a href="#fn9" name="fz9">9</a></sup>
                                konnte nun
                                festgestellt werden, dass die Sprecher auf der Basis ihres aktiven und
                                passiven Sprachwissens je einen ‚positiven‘ Prototyp von Dialekt und
                                Standard einem zumeist ‚negativ‘ gewerteten, ‚korrumpierten‘ Prototyp
                                von Dialekt und Standard gegenüberstellen, der durch gehäufte
                                Interferenzen des jeweils anderen Kontaktextrems gekennzeichnet
                                ist. Die von den Sprechern unternommene meist vierfache, seltener
                                unter Einschluss des virtuellen, „überhöhten“ Standards der
                                Schriftsprache auch fünffache Stufung dieses Kontaktbereichs deckt
                                sich dabei mit dem linguistischen Befund einer skalierten Stufung vom
                                Basisdialekt D (+) der älteren Generation über den  D (–) als
                                Zweitsprache der jüngeren Generation, den von dialektalen
                                Interferenzen durchsetzten S (–) als Zweitsprache der älteren
                                Generation bis hin zum vor allem phonetisch/phonologisch markierten,
                                heimischen Standard (+) der jüngeren Generation und der
                                innovationsbereiten mittleren Generation
                                (vgl. <a href="#abb1" name="b1">Abb. 1</a>).
                            </p>

                            <h1>4 Diachrone Variationslinguistik von Sprachkontakten</h1>
                            <p>
                                <span style={{ color: "#555555" }}><b>These 4: „Die hierarchisch gestuften Pluriglossien und Sprachkontakte
                                    sollten in ihrer Dynamik auf den drei Ebenen des sprachlichen Wissens,
                                    der selektiven Sprachverwendung und der Strukturen sprachlicher
                                    Interferenz sowie deren Entwicklung im Sprachzustand beschrieben
                                    werden.“</b></span>
                            </p>
                            <p>
                                Aus der Sicht einer diachronen Variationslinguistik von
                                Sprachkontakten ist es notwendig, die sprachlichen Realitäten in
                                Italien als vertikale und konvergente Sprachkontakte zwischen der
                                jeweiligen dominanten und expansiven Standardsprache und den
                                dominierten, regressiven Basisdialekten und Nationalitätensprachen
                                zu beschreiben. Die synchronische Variation zwischen den zur
                                Verfügung stehenden Ausdrucksmitteln der Kontaktsprachen und die
                                daraus folgende wechselseitige Interferenz hat eine diachronische
                                Hierarchisierung dieser Variation und konvergenten Sprachwandel zur
                                Folge, führt also im Kontaktverlauf neben dem langsamen, aber
                                stetigen Bedeutungsverlust der dominierten Idiome zu der Genese von
                                großräumigen Dialekten der Standardsprache (also der sogenannten
                                <i>italiani regionali</i>). Diese standardseitigen Regionaldialekte
                                können, je nach der Quantität der enthaltenen dialektalen
                                Interferenzen, außerhalb ihres räumlichen Geltungsbereichs – also
                                etwa in den Großstädten – zu sprachlichen Merkmalen der regionalen
                                und der sozialen Herkunft werden und damit zur Umgestaltung der
                                sprachlichen Architektur des Italienischen als historischer Sprache
                                beitragen.
                            </p>
                            <p>
                                Die Beschreibung dieser Dynamik erfordert in der Empirie die
                                Beachtung (nicht nur der dialektalen, sondern vor allem) aller
                                kognitiven, sozialen, kommunikativen und linguistischen Aspekte der
                                Kontakte in der jeweils wechselseitigen Aufeinanderbezogenheit der
                                Kontaktsprachen.
                            </p>
                            <p>
                                Es ergibt sich nämlich bei fortschreitendem Konvergenzprozess in
                                Richtung auf die jeweilige Standardsprache eine „Mikroskopisierung“
                                der sprachlichen Unterschiede, die von zunächst maximaler Distanz
                                zwischen den dominierten Sprachen und Dialekten und dem Standard
                                ausgeht und bis zur maximalen Nähe zwischen den regionalen Dialekten
                                des Standards und dem Standard selbst gelangt. Diese Mikroskopisierung
                                lässt nun aber in den dominierten Sprachräumen nicht, wie man erwarten
                                könnte, einen sprachlich vollkommen dem Standard ausgelieferten,
                                allein auf den regionalen <i>accento</i> reduzierten „Dialekttorso“ zurück:
                                Die sprachliche Identität regionaler Gemeinschaften wird dort selbst
                                noch an minimalen, nur phonetischen/phonologischen Dialektmerkmalen
                                von Angehörigen der Gemeinschaft erkannt und wiedererkannt.
                            </p>
                            <p>
                                Da sich also in den weitaus meisten Sprachgebieten, in denen die
                                autochthonen Sprachen und Dialekte nach und nach aufgegeben werden,
                                durchaus unterschiedliche Kontaktstaffelungen im sprachlichen Wissen
                                und in der Entscheidung über die Verwendung von Varietäten ergeben,
                                die in der Alltagskommunikation tatsächlich verwendet werden, ist es
                                also notwendig, in einer empirischen Variationslinguistik diese drei
                                Ebenen auch zu untersuchen, nämlich: a) die „Kompetenz der Variation“,
                                also die Dimension des aktiven, sprachlichen Wissens, das die Sprecher
                                <i>von</i> Varietäten im Sprachkontakt haben, ebenso wie die Dimension des
                                passiven, metasprachlichen (auch wertenden, also evaluativen) Wissens,
                                das die Sprecher <i>über</i> Varietäten im Sprachkontakt haben; b) die
                                „Pragmatik der Variation“, also die Modalitäten, Situationen und
                                gesprächsdynamischen Determinanten, aufgrund derer die Sprecher
                                selektiven Gebrauch ihres aktiven sprachlichen Wissens im
                                Sprachkontakt machen, sowie die Übersetzungs- und Variationstechniken,
                                derer sie sich bei der Verwendung ihrer Zweitsprache bedienen und c)
                                die „Linguistik der Variation“, also die Interferenzen und die
                                konstanten Interferenztechniken, die sich im interlektalen
                                Kontaktbereich zwischen Dialekt und Standard als Grundlage für neue
                                Varietäten aufbauen, die ihrerseits wiederum das Ergebnis der
                                Sprachgenese aus dem konvergenten Kontakt
                                darstellen.<sup><a href="#fn11"
                                    name="fz11">11</a></sup>
                            </p>
                            <p>
                                Als konkretes Beispiel für die „Kompetenz der Variation“ lassen sich
                                folgende Sprecheraussagen, die das sprecherseitige Wissen über die
                                Kontaktstufungen dokumentieren, anführen. Hierbei handelt es sich um
                                den Kontakt zwischen dem Italienischen und dem süditalienischen
                                Dialekt von Canosa in Apulien:
                            </p>
                            <p>
                                <u>TS</u>: „E il dialetto come lo parla oggi un
                                giovane, come lo definiresti?“
                            </p>
                            <p>
                                Ingenieur (1. Sprache Italienisch, 2. Sprache Dialekt), 34 Jahre:
                            </p>
                            <p>
                                „E‘ un dialetto improprio, diciamo. Più che altro improprio, perché
                                ritengo che il mio dialetto sia un po‘ più appropriato del suo. Ma,
                                molto spesso per esempio, parlando con un mio amico in dialetto, ero
                                io, nei suoi confronti, ero quello che, eh, non parlava bene il
                                dialetto. (…) Ci sono delle <b>scale</b>, di dialetto parlato e dove tu ti
                                accorgi subito se uno conosce l‘italiano e parla male il dialetto. O
                                se è uno che conosce il dialetto e parla male l‘italiano. Si individua
                                subito.“
                            </p>
                            <p>

                                Vom Standpunkt der hier verfolgten dynamischen Variationslinguistik
                                ist eine endgültige Klärung dieser Frage aber nur möglich, wenn man
                                nicht nur im Bereich der metasprachlichen Kompetenz der Sprecher,
                                sondern auch in der Pragmatik ihrer Sprachverwendung und in den
                                sprachlichen Strukturen empirische Nachweise über die Gestaltung des
                                Kontakts zwischen dominanter und dominierter Sprache auswertet und
                                analysiert. Nur so kann die Einstufung und Position der interlektalen
                                Varietäten im Gefüge des vertikalen Kontaktes bestimmt werden.
                            </p>
                            <p>
                                Für die „Linguistik der Variation“ lassen sich folgende Beispiele von
                                Interferenzvarietäten des interlektalen Kontaktbereichs zwischen dem
                                Italienischen und etwa dem Dialekt von Canosa in Apulien anführen:
                            </p>
                            <p>
                                Bauer (1. Sprache Dialekt, 2. Sprache Italienisch), 68
                                Jahre:</p>
                            <ul>
                                <li>Standard (–) ‚Italiano sporco‘:<br />
                                    „Porta un secchio garbato, e poi hai da prendere
                                    soltando li acini fraciti.“</li>
                                <li>Dialektale Basis (Dialekt (+) ‚Dialetto vero‘):</li>
                                <li class="ipa">
                                    [ˈpurta nu ˈsɪkːç agːarˈbɛːt ɛ pːɔ a da pɪˈgːjɛ ˈʃkɪtːə
                                    l aːˈtʃənə ˈfraːtʃətə]</li>
                                <li>Entsprechung im (nicht erreichten) endogenen
                                    Italienisch (+) ‚Italiano pulito‘:<br />
                                    „Porta un secchio ben fatto e poi devi prendere
                                    soltanto gli acini guasti.“</li>
                            </ul>

                            <p>
                                Kindergärtnerin (1. Sprache Italienisch, 2. Sprache Dialekt), 28 Jahre:
                            </p>
                            <ul>
                                <li>Dialekt (–) ‚Dialetto stracciato‘:</li>
                                <li class="ipa">[ˈu ˈfatːə ˈstesːə d aˈva ˈfatːə na ˈkaʊsə ka nam
                                    vuˈlɛːvə m aˈvɛːvə kʊndətsjuˈnɛt aˈsːɛ]</li>
                                <li>Italienische Basis (Italienisch (+) ‚Italiano pulito‘):<br />
                                    „Il fatto stesso di aver fatto una cosa che non volevo
                                    mi aveva condizionata assai“</li>
                                <li>„Entsprechung“ im (nichterreichten) Dialekt (+) ‚Dialetto vero‘:</li>
                                <li class="ipa">[m ˈagːjə sənˈdeʊtə malaˈmendə pərˈtʃi ˈfatːə na
                                    ˈkaʊsə ka nam vuˈlɛːvə ˈfɛːjə]</li>
                                <li style={{ listStyle: "none" }}>&lt; = *mi ho sentito
                                    malamente perché sono fatta una cosa che non volevo
                                    fare &gt;</li>
                            </ul>

                            <h1>5 Diskurstraditionen als Faktoren der sprachlichen Entwicklung</h1>
                            <p>
                                <span style={{ color: "#555555" }}><b>These 5: „Die sprachliche Entwicklung der konvergenten Sprachkontakte
                                    wird durch die Überkreuzung und die wechselseitige Übernahme von
                                    Diskurstraditionen befördert, die auch in den neu entstandenen
                                    Dialekten des Standards (d.h. in den <i>italiani
                                        regionali</i>) die soziale Identität urbaner und
                                    regionaler Sprachgemeinschaften zum Ausdruck bringen.“</b></span>
                            </p>
                            <p>
                                Eine zentrale Funktion kommt in der diachronischen Dimension der
                                Kontaktdynamik den
                                Diskurstraditionen<sup><a href="#fn12"
                                    name="fz12">12</a></sup> der in Kontakt stehenden
                                Sprachen zu. Als Realisierungsformen des Sprachwandels haben sie
                                zunächst übereinzelsprachliche Geltung: In verschiedenen historischen
                                Sprachgemeinschaften beachtet man dieselben oder ähnliche pragmatische
                                Regeln zur Verfertigung spezifischer Diskurse wie vertrautes Gespräch,
                                Vortrag, Konversation, Privatbrief usw. In der oralen
                                Alltagskommunikation zweisprachiger Sprechergemeinschaften bestehen
                                aber durchaus unterschiedliche Verfahren der Versprachlichung sowie
                                unterschiedliche Diskurs- und Kommunikationstraditionen, die an
                                jeweils eine der Sprachen gebunden sind: Diese war ja ursprünglich
                                Kommunikationsmittel einer einsprachigen Gemeinschaft. Ein
                                entscheidender Aspekt sowohl für den historischen Aufbau des
                                Kontaktbereichs wie für ihre allmähliche Hierarchisierung und die
                                daraus folgende Genese der <i>italiani regionali</i>
                                ist nun die Tatsache, dass die Sprecher beim
                                materiellen Wechsel in die Zweitsprache zumeist
                                weiter die Diskurstraditionen ihrer Erstsprache beachten und dabei
                                Texte (und damit Sprachformen) hervorbringen, die es zuvor in dieser
                                Sprache so nicht gegeben hat. Durch die nur materielle Übertragung von
                                Diskursen einer Sprache in Diskurse und Texte der jeweils anderen
                                Kontaktsprache trägt die „Überkreuzung“ von Diskurstraditionen zur
                                diachronischen Dynamik des vertikalen Kontakts und damit zur
                                Begründung neuer Traditionen in der jeweiligen  Zweitsprache der
                                Sprecher bei.
                            </p>
                            <p>
                                Dank der Diskurstraditionen leben die Dialekte in Italien nun
                                sozusagen „unter der materialsprachlichen Oberfläche“ fort: Wenn auch
                                eine Funktionsübertragung des „dialektalen Sprechens“ von den
                                Basisdialekten auf die tertiären Dialekte des Standards stattgefunden
                                hat, so bleibt gerade die Übertragung von Diskursnormen und
                                -traditionen der dominierten Dialekte in standardseitiges
                                „Sprachmaterial“ eine der wichtigsten Dimensionen der kulturellen
                                Identität regionaler Gemeinschaften nach
                                dem <i>language death</i> der Dialekte und auch der
                                romanischen Nationalitätensprachen. Sie
                                vermitteln den von außen Hinzugekommenen „Fremdheit“, da diese die
                                regionaltypischen Äußerungen aufgrund weitgehender Identität mit den
                                eigenen sprachlichen Strukturen „materialsprachlich“ zwar verstehen
                                können, sie jedoch so selbst nie versprachlichen würden.
                            </p>
                            <p>
                                In dem hier vorgestellten Ansatz kommt es nun darauf an, den
                                Austausch, die Überkreuzung und die Übertragung von Diskurstraditionen
                                in vertikalen Kontakten in allen Dimensionen zu untersuchen, wobei im
                                sprachlichen Wissen die jeweilige Systementscheidung der Sprecher und
                                in der Sprachverwendung ihre pragmatische Beachtung von
                                Diskurstraditionen ihrer Erstsprache in den Diskursen und Texten ihrer
                                Zweitsprache zu untersuchen sind. Für das Überkreuzen von
                                Diskurstraditionen im Sprachkontakt im Sinne eines „parlare dialetto
                                in italiano“ und eines „parlare italiano in dialetto“ kann das
                                folgende Beispiel genannt werden: Es handelt sich hierbei um ein
                                Verkaufsgespräch auf dem Wochenmarkt in Canosa di Puglia:
                            </p>
                            <p>
                                - Die Kundin (ca. 35 J.) – hebt prüfend eine Handtasche auf –<br />
                                - Der Verkäufer (ca. 45 Jahre) – drängt sie zum Kauf –<br />
                                - Die Kundin: „Quando viene, ‘sta borsetta?“<br />
                                - Der Verkäufer: „Trendacinque. Dai Signora, pigliatela ch‘è bbella!“<br />
                                - Die Kundin: „Che ttengo, soldi a bbuttare? No,
                                trendacinque è assai!“<br />
                                - Der Verkäufer: „E quando mi vuoi dare?“<br />
                                - Die Kundin: „Tieni vendi e stiamo pace!“<br />
                                - Der Verkäufer: „Vendi? E che, stiam a vvendere o a
                                regalare la robba?“<br />
                                - Die Kundin: „Se me la vuoi dare, me la devi dare
                                per vendi! Che se no, te la tieni!“<br />
                                - Der Verkäufer – winkt desinteressiert ab – <br />
                                - Die Kundin – verlässt den Marktstand –<br />
                            </p>
                            <p>
                                Die gesamte Interaktion entspricht einem „parlare dialetto in
                                italiano“, weil eine dialektale Basis des Gesprächs nur materiell ins
                                Italienische übersetzt erscheint, wie sich unschwer auch an den
                                folgenden auffälligen Interferenzen erkennen lässt:
                            </p>
                            <table>
                                <tr>
                                    <td><i>-nd-</i></td>
                                    <td>für ital. <i> -nt-</i></td>
                                </tr>
                                <tr>
                                    <td><i>tieni</i></td>
                                    <td>für ital. <i> Eccole</i></td>
                                </tr>
                                <tr>
                                    <td><i>tu</i></td>
                                    <td>für ital. <i> Lei</i></td>
                                </tr>
                                <tr>
                                    <td><i>stiamo pace</i></td>
                                    <td>für ital. <i> siamo pari</i></td>
                                </tr>
                                <tr>
                                    <td><i>viene</i></td>
                                    <td>für ital. <i> costa</i></td>
                                </tr>
                                <tr>
                                    <td><i> stiam a vvendere</i></td>
                                    <td>für ital. <i> vendiamo</i></td>
                                </tr>
                                <tr>
                                    <td><i> pigliatela</i></td>
                                    <td>für ital. <i> prenditela</i>, für ital. <i> vendere</i></td>
                                </tr>
                                <tr>
                                    <td><i>assai</i></td>
                                    <td>für ital. <i> troppo</i></td>
                                </tr>
                            </table>

                            <p>
                                In <a href="#abb2" name="b2">Abb. 2</a> sind die Diskurstraditionen als
                                ‚Motoren‘ von Sprachdynamik und konvergentem Wandel im konvergenten
                                Sprachkontakt übersichtlich dargestellt.
                            </p>

                            <figure class="imageright">
                                <p style={{ width: "300px" }}><a href="#b2"
                                    name="abb2">Abb. 2</a>:
                                    Diskurstraditionen im konvergenten
                                    Sprachkontakt<sup><a href="#fn13"
                                        name="fz13">13</a></sup>
                                </p>
                                <button type="button" onClick={() => { setOpen(true); setIndex(1); }}>
                                    <img src={DiskurstraditionenSmall}
                                        width="300"
                                        height="262" alt="Diskurstraditionen im konvergenten Sprachkontakt" />
                                </button>
                            </figure>

                            <p>
                                Schließlich ist anzumerken, dass in der Variationslinguistik die
                                materielle Übertragung dialektaler Diskurstraditionen in den
                                jeweiligen Standard oftmals übersehen wird. Die Verkennung der
                                Funktion von Diskurstraditionen hat gerade in der italienischen
                                Linguistik zur Entdeckung eines ‚<i>italiano popolare</i>‘ sowie von
                                ‚Vereinfachungstendenzen‘ im  Italienischen niedriger Sozialschichten
                                geführt, ohne dass man dem Umstand ausreichend Rechnung getragen
                                hätte, dass es sich zumeist schlicht um übertragene Diskurstraditionen
                                von Dialektsprechern handelt.
                            </p>

                            <h1>6 Fazit</h1>
                            <p>
                                Abschließend ist zusammenzufassen, dass sich die Notwendigkeit ergibt,
                                die bisher getrennten Bereiche der historischen, der geo-, der sozio-
                                und der pragmalinguistischen Sprachwissenschaft des Italienischen
                                aufgrund des heutigen Sprachzustands ihrer spezifischen historischen
                                Gegenstände, nämlich der sozialen und pragmatischen Neuverteilung
                                vertikal gestaffelter Sprachformen vom italoromanischen Basisdialekt
                                über die breite Palette umgangssprachlicher Varietäten in den
                                regionalen Gemeinschaften bis hin zum Standard zu einer dynamischen,
                                diachronen Variationslinguistik konvergenter Sprachkontakte
                                weiterzuentwickeln.
                            </p>
                            <p>
                                Wenn die italienische Sprachwissenschaft ein wenig von ihrem Glanz
                                früherer Jahre zurückgewinnen will, dann sollte sie die heute
                                ablaufende Sprachdynamik der Alltagskommunikation in Italien
                                erforschen und in einer fundierten Beschreibung die faszinierende
                                Vitalität dieser Sprache widerspiegeln.
                            </p>


                            <h1>Anmerkungen</h1>
                            <p><sup><a href="#fz1" name="fn1">1</a></sup>
                                Cf. Lüdtke 1980a: 8–9 und Lüdtke 1980b: 250–252.</p>
                            <p><sup><a href="#fz2" name="fn2">2</a></sup>
                                Cf. Stehl 2005, 2008: 199–202.</p>
                            <p><sup><a href="#fz3" name="fn3">3</a></sup>
                                Zur Situation der Minderheitensprachen in Spanien,
                                Frankreich und Italien cf. Kattenbusch 1995 und 2000.</p>
                            <p><sup><a href="#fz4" name="fn4">4</a></sup>
                                Cf. Stehl 1981 sowie Stehl 1991.</p>
                            <p><sup><a href="#fz5" name="fn5">5</a></sup>
                                Cf. Telmon/Canobbio 1985.</p>
                            <p><sup><a href="#fz6" name="fn6">6</a></sup>
                                Cf. Stehl 2011.</p>
                            <p><sup><a href="#fz7" name="fn7">7</a></sup>
                                Cf. hierzu Stehl 1988 sowie Stehl 1992.</p>
                            <p><sup><a href="#fz8" name="fn8">8</a></sup>
                                Cf. Holenstein 1980.</p>
                            <p><sup><a href="#fz9" name="fn9">9</a></sup>
                                Cf. Stehl 1995a.</p>
                            <p><sup><a href="#fz10" name="fn10">10</a></sup>
                                Cf. hierzu auch Stehl 1995a: 61.</p>
                            <p><sup><a href="#fz11" name="fn11">11</a></sup>
                                Cf. Stehl 1994, 1995a, 1996 sowie 1999.</p>
                            <p><sup><a href="#fz12" name="fn12">12</a></sup>
                                Cf. Stehl 1994: 139–141, 2000 sowie 2012.</p>
                            <p><sup><a href="#fz13" name="fn13">13</a></sup>
                                Cf. hierzu auch Stehl 1994: 143.</p>


                            <h1>Literatur</h1>
                            <p class="bibl">
                                Holenstein, Elmar (1980): Sprachliche Kontinua sind
                                anisotrop und skaliert, in: Gunter
                                Brettschneider/Christian Lehmann (Hg.): <i>Wege zur
                                    Universalienforschung. Sprachwissenschaftliche Beiträge
                                    zum 60. Geburtstag von Hansjakob Seiler</i>, Tübingen,
                                504–508.</p>
                            <p class="bibl">
                                Kattenbusch, Dieter (1995) (Hg.): <i>Minderheiten in der
                                    Romania</i>, Wilhelmsfeld.</p>
                            <p class="bibl">
                                – (2000): Zum Stand der Kodifizierung
                                von Regional- und Minderheitensprachen in Spanien,
                                Frankreich und Italien, in: Bruno Staib (Hg.):
                                <i>Linguistica Romanica et Indiana. Festschrift für Wolf
                                    Dietrich</i>, Tübingen, 207–225.</p>
                            <p class="bibl">
                                Lüdtke, Helmut (1980a): Sprachwandel als universales
                                Phänomen, in: Helmut Lüdtke (Hg.):
                                <i>Kommunikationstheoretische Grundlagen des Sprachwandels</i>,
                                Berlin/New York, 1–19.</p>
                            <p class="bibl">
                                – (1980b): Auf dem Weg zu einer Theorie
                                des Sprachwandels, in: ders. (Hg.):
                                <i>Kommunikationstheoretische Grundlagen des Sprachwandels</i>,
                                Berlin/New York, 182–252.</p>
                            <p class="bibl">
                                Stehl, Thomas (1981): Minderheiten, Dialektologie und
                                Soziolinguistik, in: Christoph Schwarze (Hg.):
                                <i>Italienische Sprachwissenschaft. Beiträge zu der Tagung
                                    ‚Romanistik interdisziplinär‘, Saarbrücken 1979</i>,
                                Tübingen, 159–177.</p>
                            <p class="bibl">
                                – (1988): Les concepts de continuum et de
                                gradatum dans la linguistique variationnelle, in:
                                Dieter Kremer (Hg.): <i>Actes du XVIIIe Congrès
                                    International de Linguistique et de Philologie romanes
                                    (Trèves, 19–24 mai 1986)</i>, vol. V: <i>Linguistique
                                        pragmatique et sociolinguistique</i>, Tübingen, 28–40,
                                51–54.</p>
                            <p class="bibl">
                                – (1991): Il concetto di <i>italiano regionale</i>
                                e la dinamica dell‘italiano nelle regioni, in: Johannes
                                Kramer (Hg.): <i>Siue Padi ripis Athesim seu propter
                                    amoenum. Festschrift für Giovan Battista Pellegrini</i>,
                                Hamburg, 385–402.</p>
                            <p class="bibl">
                                – (1992): Contacts linguistiques verticaux
                                et traditions du discours comme objet d‘une linguistique
                                variationnelle historique, in: Ramón Lorenzo (Hg.):
                                <i>Actas do XIX Congreso Internacional de Lingüística e
                                    Filoloxía Románicas, Universidade de Santiago de
                                    Compostela, 1989</i>, vol. III: <i>Lingüística Pragmática e
                                        Sociolingüística</i>, La Coruña, 249–268.</p>
                            <p class="bibl">
                                – (1994): <i>Français régional, italiano
                                    regionale</i>, neue Dialekte des Standards: Minderheiten und
                                ihre Identität im Zeitenwandel und im Sprachenwechsel,
                                in: Uta Helrich/Claudia Maria Riehl (Hg.):
                                <i>Mehrsprachigkeit in Europa – Hindernis oder
                                    Chance?</i>, Wilhelmsfeld, 127–147.</p>
                            <p class="bibl">
                                – (1995a): La dinamica diacronica fra
                                dialetto e lingua: per un‘analisi funzionale della
                                convergenza linguistica, in: Maria Teresa
                                Romanello/Immacolata Tempesta (Hg.): <i>Dialetti e lingue
                                    nazionali. Atti del XXVII Congresso Internazionale di
                                    Studi (Lecce, 28–30 ottobre 1993)</i>, Roma, 55–73.</p>
                            <p class="bibl">
                                – (1995b): Sprachdynamik in Frankreich und
                                Italien: Zur Funktion des Wortschatzes im
                                Konvergenzprozeß, in: Ulrich Hoinkes (Hg.): <i>Panorama
                                    der Lexikalischen Semantik. Thematische Festschrift aus
                                    Anlaß des 60. Geburtstags von Horst Geckeler</i>, Tübingen,
                                641–650.</p>
                            <p class="bibl">
                                – (1996): Competenza, pragmatica e
                                linguistica della variazione: problemi d‘inchiesta e
                                d‘interpretazione in geolinguistica, in: Edgar
                                Radtke/Harald Thun (Hg.): <i>Neue Wege der romanischen
                                    Geolinguistik. Akten des Symposiums zur empirischen
                                    Dialektologie (Heidelberg/Mainz, 21.–24.10.1991)</i>,
                                Kiel, 620– 640.</p>
                            <p class="bibl">
                                – (1999): Dialektgenerationen und
                                Dialektfunktionen im sprachlichen Wandel, in: ders. (Hg.): <i>Dialektgenerationen, Dialektfunktionen,
                                    Sprachwandel</i>, Tübingen, VII–XV.</p>
                            <p class="bibl">
                                – (2000): Tempo, spazio, dinamica
                                linguistica: Aspetti ‚dia–sincronici‘ della linguistica
                                italiana, in: Bruno Staib (Hg.): <i>Linguistica romanica
                                    et indiana. Festschrift für Wolf Dietrich zum
                                    60. Geburtstag</i>, Tübingen, 401–423.</p>
                            <p class="bibl">
                                – (2005): Sprachwandel und
                                Sprachgenese. Kontinuität und Bruch in der
                                Sprachgeschichte, in: ders. (Hg.): <i>Unsichtbare
                                    Hand und Sprecherwahl. Typologie und Prozesse des
                                    Sprachwandels in der Romania</i>, Tübingen,
                                87–110.</p>
                            <p class="bibl">
                                – (2008): Phonologischer Wandel im
                                Sprachkontakt: Divergenz, Konvergenz und zyklische
                                Drift, in: ders. (Hg.): <i>Kenntnis und Wandel der
                                    Sprachen. Beiträge zur Potsdamer Ehrenpromotion für
                                    Helmut Lüdtke</i>, Tübingen, 195–215.</p>
                            <p class="bibl">
                                – (2011): Romanische Sprachkontakte und
                                Sprachdynamiken in einer funktionalen
                                Variationslinguistik, in: Claudia Frevel/Franz-Josef
                                Klein/Carolin Patzelt (Hg.): <i>Gli uomini si legano per la
                                    lingua</i>, Stuttgart, 249–268.</p>
                            <p class="bibl">
                                – (2012): Regionale Sprachgemeinschaften
                                und Sprachdynamik: Zwischen Kodifizierung und
                                Schreibtradition, in: Sandra Herling/Carolin Patzelt
                                (Hg.): <i>Sprachkontakt, Sprachausbau und
                                    Verschriftungsproblematik: Aspekte der Normalisierung
                                    von Regionalsprachen in der Romania. Akten der
                                    gleichnamigen Sektion auf dem XXXI. Romanistentag in
                                    Bonn (27.09–1.10.2009)</i>, München [im Druck].</p>
                            <p class="bibl">
                                Telmon, Tullio/Canobbio, Sabina (Hg.) (1985):
                                <i>ALEPO. Atlante linguistico ed etnografico del Piemonte
                                    occidentale. Materiali e saggi 1984</i>, Torino.</p>
                        </article>
                    </section>
                </div>
            </div>
            <UpArrow />
            <Footer />
        </div>
    )
}

export default Stehl;