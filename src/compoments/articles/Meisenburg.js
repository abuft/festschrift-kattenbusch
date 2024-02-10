import Footer from "../Footer";
import Rubrik from "../Rubrik";
import UpArrow from "../UpArrow";
import Header from "../Header";
import MeisenburgPortrait from "../../images/tmeisenburg/tmeisenburg-portrait.png";
import OptimalerKattenbusch from "../../images/tmeisenburg/optimaler-kattenbusch.jpg";

function Meisenburg(props) {
    return (
        <div id="Wrapper" class="container_14">
            <div id="Header">
                <Header id={props.author} />
                <div class="grid_9">
                    <h1 id="main_title">Der optimale Kattenbusch: The ultimate OT account of and for my dear old friend (but never
                        fiancé!) Dieter K.</h1>
                    <p id="author">Trudel Meisenburg, Osnabrück</p>
                </div>
                <Rubrik />
            </div>

            <div id="Teasers" class="clearfix">
                <div class="grid_9">
                    <p>
                        L’objectif de cette contribution à <i>(Das) diskrete
                            Tatenbuch</i><sup><a href="#fn1" name="fz1">1</a></sup> – oltre
                        a fare le congratulazioni al collega e amico Dieter Kattenbusch – est
                        d’offrir au monde (non-)scientifique un bref aperçu d’une théorie
                        linguistique qui vient de connaître un succès inégalé parmi les
                        initiés. Il s’agit de la célèbre Teoría de l’Optimalidad ou bien
                        Optimality Theory, henceforth OT. One of the many advantages of this
                        outstanding framework is its adaptability to all linguistic
                        sub-disciplines, and furthermore to each and every single domain of
                        social life. Y por eso vale también para honrar al muy estimado colega,
                        el celebérrimo profesor de lingüística y filología románicas Dieter
                        Kattenbusch, henceforth DK.
                    </p>
                    <p>
                        Precum toţi ştiu foarte bine OT face distincţie într-un nivel de fons şi un
                        nivel de suprafaţă, an underlying and a surface level of
                        representation: input and output. Output forms (candidates) are created
                        by the function generator (GEN). As in real life, an evaluation process
                        (EVAL – <i>de la révolution à l’évaluation permanente!</i>) selects the
                        optimal form. Questo processo di valutazione è basato su una certa
                        quantità di costrizioni universali, parmi lesquelles l’on distingue
                        les contraintes de fidélité et les contraintes de marque: les
                        premières se rapportent à la relation entre forme sous-jacente et
                        forme de surface, les dernières concernent les structures s’écartant
                        de celles largement répandues dans le(s langues du) monde. These
                        constraints are ranked in hierarchies that differ cross-linguistically.
                        O candidato ótimo é aquele quém chega mais longe nesse filtro, el que
                        transgredeix el mínim de constrenyiments. I què s’ha de fer llavors
                        per transferir tot això al DK? Da eine fachlich basierte Auswertung in
                        der Welt der Romanistik zu einigem Ärger führen könnte (der Mensch
                        bzw. die KollegIn neigt ja bekanntlich zum Neid ;-), möchte ich mich
                        auf eine DK-interne Evaluation beschränken
                        (s. <a href="#tab1" name="b1">Tabelle 1</a>).
                    </p>
                </div>
                <div class="grid_5">

                    <div class="abouttheauthor">
                        <img src={MeisenburgPortrait} width="120"
                            height="150" alt=" Trudel Meisenburg- Portrait" />
                        <div class="abouttheauthorfont"><br /><br />
                            <b>Trudel Meisenburg</b>, Prof. Dr., seit Ende 1999 Professorin für Romanische Sprachwissenschaft an der Universität Osnabrück.
                            <br />
                            <span style={{ color: "#666666" }}>Dieter habe ich, glaube ich, Anfang 1996 kennengelernt – auf einem Okzitanisch-Symposium in Montpellier. Ich vertrat damals (sine spe) seine zukünftige Stelle an der Humboldt-Uni. Als er dann nach Berlin kam, hat er in der ersten Zeit bei mir gewohnt, so hatten wir Gelegenheit zum Austausch und haben viele gemeinsame Interessen entdeckt. Seit ich vornehmlich in Osnabrück bin, sehen wir uns leider nur noch sehr selten; so ist das eben bei uns vielbeschäftigten Menschen.</span>
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
                                La forma sota-jasenta es doncas lo DK tot pichonet quand aviá pas que
                                paucs meses
                                <sup><a href="#fn2" name="fz2">2</a></sup>, und unsere Funktion GEN
                                hat eine Auswahl von höchst
                                relevanten KandidatInnen zutage gefördert. Aber die Constraints sind
                                unerbittlich. Ohne jede Rücksichtnahme wirft <span style={{ fontVariant: "small-caps" }}>Ident(human)</span> alle
                                entzückenden Tiere, so le <i>ouistiti</i>, es decir al <i>tití</i>, otherwise known
                                as
                                ‚Geoffroy’s tufted-eared marmoset‘
                                (2), den mir persönlich bekannten <i>Spheniscus</i> magellanicus oder pinguino
                                di Magellano di Punta Tombo, provincia di Chubut (8), und sogar das
                                zauberhafte Weidenkätzchen, auch <i>Feles salicis</i> (2), obwohl doch im
                                veritablen Kattenbusche sitzend, aus dem Rennen (‚*!‘ bedeutet das
                                Aus!).
                            </p>
                            <p>
                                In der nächsten Runde trifft es die Frauen (3) und (7), die wegen des
                                Merkmals [+female sex] bei <span style={{ fontVariant: "small-caps" }}>Ident(male)</span> nicht mithalten können; auch
                                für den Drag King (7) gibt es keine Gnade. Trotz des Merkmals [+male
                                sex] kommen die KandidatInnen (1) und (9) nur eine Runde weiter: Da ihr
                                soziales Geschlecht nicht mit dem biologischen übereinstimmt, stellen
                                sie einen markierten Fall dar und verletzen den entsprechenden
                                Markiertheitsconstraint <span style={{ fontVariant: "small-caps" }}>Sex=Gender</span>.
                            </p>
                            <p>
                                Ob den kleinen DK eine üppige Haarpracht zierte, wissen wir nicht (die
                                Mütze verbirgt’s); doch Männer, die im reifen Alter noch eine solche
                                aufweisen – wie etwa der geschätzte Kollege WA in (4) –, verletzen
                                mit der <span style={{ fontVariant: "small-caps" }}>Bare Head Projection</span> einen universal gültigen
                                Markiertheitsconstraint, denn: <i>Männerköpfe werden kahl! Ja, so ist das
                                    nun einmal!</i> Folglich muss mit (4) auch (5), Namensvetter von DKs
                                (zweit-)liebstem Kind, hier ausscheiden: wenn auch meist mit Perücke
                                abgelichtet, zierten ihn offensichtlich bis ins fortgeschrittene Alter
                                lange Locken.
                            </p>
                            <p>
                                Bei sprachlichen Formen sorgen <span style={{ fontVariant: "small-caps" }}>Dep-IO</span> und <span style={{ fontVariant: "small-caps" }}>Max-IO</span> für eine möglichst
                                große Identität zwischen Input und Output, indem sie einerseits das
                                Hinzufügen, andererseits das Tilgen von Elementen sanktionieren. In
                                unserem Fall ist es selbstverständlich, dass auf dem Weg vom kleinen DK
                                zu den fertigen Output-Exemplaren zahlreiche Veränderungen eingetreten
                                sind: Mit <span style={{ fontVariant: "small-caps" }}>Elegance naturelle, Sagesse</span> und <span style={{ fontVariant: "small-caps" }}>Esprit</span> sind hier nur einige
                                wenige dieser Charakteristika aufgeführt, die einer Reihe unserer
                                KandidatInnen leider abgehen (‚*‘ kennzeichnet eine – nicht fatale
                                – Constraintverletzung).
                            </p>
                            <p>
                                Der Charme des kleinen DK ist dagegen ein dauerhaftes Merkmal, das
                                selbstverständlich auch dem Gewinner des Rennens zu eigen ist. Dieser
                                – im Tableau durch das
                                Händchen <img src="images/tmeisenburg/hand.jpg"
                                    width="35" height="18" alt="Hand" /> gekennzeichnet – verletzt mit
                                <span style={{ fontVariant: "small-caps" }}>Dep-IO</span> lediglich die in der Hierarchie am tiefsten stehende
                                Beschränkung und geht somit siegreich aus EVAL hervor: Der optimale
                                Kattenbusch :-)
                            </p>

                            <h3>List of relevant constraints:</h3>

                            <ul>
                                <li>
                                    <span style={{ fontVariant: "small-caps" }}>Bare Head Projection</span>:
                                    Male heads become bare.
                                </li>
                                <li>
                                    <span style={{ fontVariant: "small-caps" }}>Sagesse</span>: Output forms are wise.
                                </li>
                                <li>
                                    <span style={{ fontVariant: "small-caps" }}>Esprit</span>: Output forms have esprit.
                                </li>
                                <li>
                                    <span style={{ fontVariant: "small-caps" }}>Elegance naturelle</span>: Output forms are naturally elegant.
                                </li>
                                <li>
                                    <span style={{ fontVariant: "small-caps" }}>Sex=Gender</span>: Identical feature values for sex [±male sex, ±female
                                    sex] and gender [±male gender, ±female gender].
                                </li>
                                <li>
                                    <span style={{ fontVariant: "small-caps" }}>Ident(Male)</span>: Identity of the feature [±male sex].
                                </li>
                                <li>
                                    <span style={{ fontVariant: "small-caps" }}>Ident(human)</span>: Identity of the feature [±human].
                                </li>
                                <li>
                                    <span style={{ fontVariant: "small-caps" }}>Dep-IO</span>: No insertion of elements.
                                </li>
                                <li>
                                    <span style={{ fontVariant: "small-caps" }}>Max(Charm)</span>: No deletion of the charm element.
                                </li>
                            </ul>

                            <br />

                            <div align="center">
                                <img src={OptimalerKattenbusch} width="800"
                                    height="1188" alt="Tabelle 1: Der optimale
		                          Kattenbusch" />

                                <a href="#b1" name="tab1">Tabelle 1</a>: Der optimale
                                Kattenbusch
                            </div>


                            <h1>Anmerkungen</h1>
                            <p><sup><a href="#fz1" name="fn1">1</a></sup>
                                Um einer Verwurstung bei Gutten- oder VroniPlag, vergleichbaren
                                Entlarvungen, Titelaberkennungen und anderem Unbill zuvorzukommen,
                                gestehe ich frank und frei, eine ähnliche Idee schon einmal gemeinsam
                                mit Christoph Gabriel und Birgit Lonnemann in <i>Dies ist keine
                                    Festschrift</i> (nicht veröffentlicht 2004) zu Ehren unseres Osnabrücker
                                Kollegen Wolfgang Asholt eingesetzt zu haben. Mögen mir die
                                betroffenen Jubilare, die KoautorInnen sowie sämtliche KandidatInnen
                                dieses schamlose Recycling verzeihen. Ich habe mich jedoch ernst- und
                                gewissenhaft um individuelle Anpassung bemüht (und hoffentlich
                                niemandem geschadet ;-).</p>

                            <p><sup><a href="#fz2" name="fn2">2</a></sup>
                                Für die effiziente Unterstützung bei der klammheimlichen Beschaffung
                                einer Auswahl reizendster DK-Babyfotos geht mein großer Dank (in
                                chronologischer Reihenfolge) an Carola Köhler, Doris Kattenbusch, Jutta
                                Eickhoff und Mutter Ruth Kattenbusch: <i>Merci vielmals! Tusen takk!</i></p>
                        </article>
                    </section>
                </div>
            </div>
            <UpArrow />
            <Footer />
        </div>
    )
}

export default Meisenburg;