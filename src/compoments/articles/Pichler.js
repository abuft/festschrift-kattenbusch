import Footer from "../Footer";
import Header from "../Header";
import Rubrik from "../Rubrik";
import UpArrow from "../UpArrow";
import PichlerPortrait from "../../images/epichler/epichler-portrait.jpg";

function Pichler(props) {
    return (
        <div id="Wrapper" className="container_14">

            <div id="Header">
                <Header id={props.author} />
                <div className="grid_9">
                    <h1 id="main_title">Vom Gastarbeiter zum <i>(Gast-) Bürger</i>?
                        Italiener in Deutschland – eine Zwischenbilanz</h1>
                    <p id="author">Edith Pichler, Berlin</p>
                </div>
                <Rubrik />
            </div>

            <div id="Teasers" className="clearfix">
                <div className="grid_9">
                    <h1>Einleitung</h1>
                    <p>
                        Bereits zu Beginn der 1950er Jahre begannen auf italienische Initiative
                        hin die Verhandlungen zwischen den Regierungen Italiens und der
                        Bundesrepublik Deutschland über die Anwerbung von Gastarbeitern. 1955
                        fanden sie mit dem bilateralen Abkommen ihren Abschluss. 1957 folgten
                        die Römischen Verträge, die man als Auftakt für die Schaffung der
                        Europäischen Union bezeichnen kann. Mittlerweile lebt in Deutschland
                        die zweite und dritte Generation der Nachfahren der italienischen
                        Gastarbeiter. Des Weiteren lässt sich seit den 1990er Jahren eine neue
                        Blüte der italienischen Einwanderung nach Deutschland feststellen.
                        Gemeint sind Immigranten, die anders als diejenigen der 1950er und
                        1960er Jahre nicht mehr in der Industrie arbeiten. Oft handelt es sich
                        um Vertreter der „neuen europäischen Mobilität“, wie sie vom
                        europäischen Einigungsprozess und von Programmen wie ERASMUS u. a.
                        begünstigt werden (Pichler 2006).
                    </p>
                    <p>
                        <table>
                            <caption align="top">
                                Tab. 1: Italienischstämmige Personen in Deutschland, gemäß ihrem
                                Migrantenstatus (Mikrozensus 2009; Quelle: Statistisches Bundesamt 2010)
                            </caption>
                            <tr>
                                <th colspan="2">mit Migrationserfahrung</th>
                                <th colspan="2">ohne Migrationserfahrung</th>
                                <th>insgesamt</th>
                            </tr>
                            <tr>
                                <td>absolut</td>
                                <td>%</td>
                                <td>absolut</td>
                                <td>%</td>
                                <td>absolut</td>
                            </tr>
                            <tr>
                                <td>434 000</td>
                                <td>56,6</td>
                                <td>337 000</td>
                                <td>43,4</td>
                                <td>771 000</td>
                            </tr>
                        </table>
                    </p>
                    <p>
                        So lassen sich grob drei Kategorien oder Typologien von Italienern in
                        Deutschland feststellen: 1. die Generation der <i>Gastarbeiter</i>, 2. deren
                        Nachfahren (zweite, dritte Generation usw.) und 3. die neuen Mobilen,
                        auch <i>euromovers</i> genannt. Seit der ersten Ankunft von italienischen
                        Gastarbeitern in der Bundesrepublik sind mehr als fünfzig Jahre
                        vergangen, und man kann sich fragen, ob die Italiener in Deutschland
                        nach wie vor in manchen Belangen „Gastarbeiter“ geblieben sind oder
                        ob sie inzwischen (Mit-)Bürger geworden sind, integriert in die
                        deutsche Gesellschaft und Teilhaber der verschiedenen
                        Staatsbürgerrechte, oder schließlich, ob sie auch Vertreter neuer
                        Migrationsformen sind.
                    </p>
                    <h1>Staatsbürgerschaftsrechte nach Marshall</h1>
                    <p>
                        Thomas H. Marshall hat 1950 in <i>Citizenship and social class</i> die
                        staatsbürgerlichen Rechte in drei Kategorien unterteilt:
                        <ul>
                            <li>
                                zivile Staatsbürgerschaftsrechte;</li>
                            <li>
                                soziale Staatsbürgerschaftsrechte;</li>
                            <li>
                                politische Staatsbürgerschaftsrechte.</li>
                        </ul>
                    </p>
                    <p>
                        Die zivilen Staatsbürgerschaftsrechte basieren auf der Garantie der
                        individuellen Rechte: Meinungsfreiheit, Religionsfreiheit etc. Die
                        sozialen Staatsbürgerschaftsrechte garantieren ein Minimum an
                        Wohlstand, an wirtschaftlicher Sicherheit und ein menschenwürdiges
                        Leben. Die Institutionen, die die sozialen Staatsbürgerschaftsrechte
                        garantieren, sind für Marshall das Bildungssystem und das Sozialsystem.
                        Mit den politischen Staatsbürgerschaftsrechten meint Marshall die
                        politische Partizipation, sei es als Wähler oder als Mitglied einer
                        Partei. Gerade die Ausübung dieser letzten Kategorie (politische
                        Staatsbürgerschaftsrechte) konstituiert nach Marshall die Voraussetzung
                        für die Ausübung der anderen Rechte (Marshall 2000).
                    </p>
                </div>
                <div className="grid_5">

                    <div className="abouttheauthor">
                        <img src={PichlerPortrait} width="100"
                            height="140" alt="Edith Pichler – Portrait" />
                        <div className="abouttheauthorfont"><br /><br />
                            <b>Edith Pichler</b>,<br />
                            Dr. phil.<br />
                            Geboren in Bozen (Italien), aufgewachsen in Cles (Trentino). Studium
                            der Politischen Wissenschaften am Otto-Suhr-Institut der Freien
                            Universität Berlin. 1995 Promotion, Lehrtätigkeit am Institut für
                            Sozialwissenschaften der Humboldt-Universität zu Berlin, am
                            Otto-Suhr-Institut der Freien Universität Berlin, am Institut für
                            Soziologie der Universität La Sapienza Rom. 2007 Studie
                            „GeisteswissenschaftlerInnen mit
                            Migrationshintergrund in Beruf und
                            Arbeitsmarkt“. Seit 2010
                            Forschungsprojekt „Junge Italiener in Deutschland zwischen
                            Inklusion und Exklusion. Eine
                            Fallstudie“. German review editor für die
                            Zeitschrift „Altreitalie – International journal of studies
                            on Italian migrations in the world“.<br />
                            <span style={{ color: "#666666" }}>Ich wurde in Bozen geboren, aber aufgewachsen bin ich in Cles-Val di Non (Trentino). So hatte ich schon als Kind indirekt mit einem Teil der zukünftigen Forschungsinteressen von Dieter Kattenbusch zu tun, denn im Val di Non spricht man einen besonderen Dialekt, der anscheinend zu den ladinischen Dialekten gehört. Allerdings wusste er das damals in den 1960er/70er Jahren auch noch nicht, denn er war ja selbst noch Schüler … und uns Kindern war ebenfalls nicht so bewusst, dass wir von Leuten umgeben waren, die eine besondere Sprache sprachen, eine Sprache, die wir, wenn auch nicht so perfekt, durchaus im Alltag benutzten. Später, als Prof. Kattenbusch, ist er im Val di Non gewesen und hat dort über den Nones Dialekt geforscht bzw. ihn untersucht.
                                Jedoch haben wir uns nicht im Rahmen der Dialektforschung kennengelernt, sondern durch Dr. Raffaelle Sanzo, damals Technischer Leiter im italienischen Bildungsministerium und bei der Italienischen Botschaft in Berlin und für den Sektor Schule und Bildung zuständig. In Zusammenarbeit mit Dieter Kattenbusch organisierte er 2004 eine Konferenz über Italienische Jugendliche im deutschen Schulsystem. Auf der Konferenz habe ich ein Referat gehalten und Dieter so kennengelernt. Seitdem sind wir in Kontakt geblieben, und Dieter hat mich u.a. einige Male zu seinen Konferenzen als Referentin eingeladen. Außer den Dialekten und anderen wissenschaftlichen Themen verbindet uns auch die Liebe zu den Alpen, und dass seine Frau aus Innsbruck stammt … wie meine Großmutter.</span>

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
                                Tatsächlich haben die Italiener in Deutschland einen Weg zurückgelegt,
                                der sie vom Recht der Teilhabe am Wohlfahrtsstaat (soziale
                                Bürgerrechte) zur Teilhabe an den staatsbürgerlichen Rechten geführt
                                hat, bis hin zu Formen der politischen Partizipation, die jedoch noch
                                nicht vollständig ausgeübt wird, da sie für EU-Bürger auf das
                                kommunale Wahlrecht beschränkt bleibt.
                            </p>

                            <h1>Migrantentypologien und Staatsbürgerschaftsrechte</h1>
                            <p>
                                Die Ziele der sogenannten <i>Gastarbeiter</i>
                                waren die deutschen Industriegebiete: Stuttgart, Köln, München,
                                Wolfsburg usw. Da sie häufig über die Deutsche Kommission angeworben
                                wurden, besaßen sie bereits vor ihrer Auswanderung aus Italien einen
                                Arbeitsvertrag und waren durch ihre Arbeit ins wohlfahrtsstaatliche
                                System eingebunden, was heißt, dass sie auch teilweise in den Genuss
                                sozialer Rechte kamen. Ihr institutionalisiertes Sozialkapital, um mit
                                Bourdieu (1983) zu sprechen, war nicht besonders hoch. Wenn sie
                                beispielsweise Berufsausbildungsabschlüsse besaßen, wurden diese oft
                                nicht anerkannt, weil sie den deutschen Parametern nicht entsprachen.
                                Zudem waren die für sie vorgesehenen Arbeitsplätze solche im
                                Niedrigsegment der Produktion, die keine spezielle Berufsqualifikation
                                erforderten.
                            </p>
                            <p>
                                Die sozialen Netzwerke der <i>Gastarbeiter</i> hatten außerhalb der Fabrik und
                                der Gewerkschaft, die oftmals als Stimme der politisch-sozialen Anliegen
                                auftrat, vorwiegend einen <i>ethnischen Charakter</i>. Neben den Katholischen
                                Missionen und den regionalen Vereinen waren die Organisationen der
                                Parteien präsent, die in den Emigranten potenzielle Wähler sahen und
                                eher an der Beibehaltung des Kontakts zu Italien als an der Integration
                                der <i>Gastarbeiter</i> in die deutsche Gesellschaft interessiert waren.
                                Mittlerweile sind diese ethno-politisch-sozialen Netzwerke verschwunden,
                                oder sie haben zumindest ihre Aktivitäten verringert (Pichler 2006).
                                Auf diese Weise haben sie unfreiwillig die gesellschaftliche Isolierung
                                der in Deutschland alt gewordenen <i>Gastarbeiter</i> vergrößert. Das soziale
                                Unbehagen wird zusätzlich dadurch verstärkt, dass ihre Rente nicht
                                zuletzt aufgrund der Arbeit, die sie geleistet haben, nicht sehr hoch
                                ist. Diese Generation, die rückkehrorientiert war, hat häufig ihr
                                Erspartes in den Kauf eines Hauses in der Heimat investiert, mit der
                                Absicht, wenigstens im Rentenalter zurückzukehren. Die Rückkehr
                                erfolgt allerdings in manchen Fällen aus ökonomischer Not, da in
                                Deutschland mit dem ihnen zur Verfügung stehenden Einkommen kein, wie
                                Marshall schreibt, würdiges Leben nach dem maßgebenden sozialen
                                Standard möglich ist.
                            </p>
                            <p>
                                Wegen der ausgeübten schweren Tätigkeiten bedürfen viele von ihnen
                                außerdem ärztlicher Betreuung und medizinischer Versorgung, die das
                                italienische Gesundheitssystem, das in manchen Gegenden Italiens
                                veraltet ist, nicht bereitstellt oder leistet. Da in den allermeisten
                                Fällen die Söhne und Töchter in Deutschland leben, muss diese
                                Generation erneut pendeln: Frühling und Sommer verbringt man in Italien
                                und bebaut ein Stückchen Land, den Winter verbringt man bei den Kindern
                                und lässt sich medizinisch versorgen. Das sei ein „zerteiltes
                                Leben“,  sagte ein betagtes Ehepaar vor ein paar Jahren in einem
                                Gespräch mit der Autorin. Diese Generation ist „transitorisch“
                                geblieben, ohne jedoch wirklich „mobil“ wie die jüngere Generation
                                zu werden: von <i>Gastarbeitern</i> wurden sie
                                zu <i>Gastsenioren</i>.
                            </p>

                            <h1>Die zweite und dritte Generation</h1>
                            <p>
                                Die zweite und die dritte Generation erfährt, anders als die erste
                                Generation – also Eltern oder Großeltern, die bisweilen mit Formen
                                von Abwehr und mit Vorurteilen konfrontiert waren – eine symbolische
                                Inklusion. Manchmal ist diese jedoch
                                stereotyp: <i>Dolce Vita</i>, <i>Italian Life
                                    Style</i> usw. Es wird ihnen also eine gewisse
                                italienische „Wesensart“
                                auferlegt, und diese wird so perpetuiert, wie sie im deutschen
                                Vorstellungshaushalt existiert. Wenig Raum findet sich dadurch für die
                                Identitäten, die doch längst „hybrid“ sind. Diese „positiven
                                Stereotypen“ können aber schnell ins Negative umschlagen. Das war zum
                                Beispiel nach den Ereignissen von Duisburg der Fall,
                                als <i>Der Spiegel</i> in
                                der Rubrik „Ausländer“ (und nicht EU-Bürger) einen Artikel mit dem
                                Titel „Weiße Weste für die
                                Parallelwelt”<sup><a href="#fn1"
                                    name="fz1">1</a></sup> veröffentlichte, in dem
                                der Begriff Parallelwelten bzw. Parallelgesellschaften auf die
                                italienische Community in Deutschland angewendet wurde.
                            </p>
                            <p>
                                Zusätzliche Stereotype entstehen, indem man bestimmte Berufe als
                                typisch für bestimmte Migrantengruppen ansieht, so zum Beispiel
                                <i>Italiener = Ristoratori</i>
                                oder <i>Pizzabäcker.</i><sup><a href="#fn2"
                                    name="fz2">2</a></sup> Durch diese Gleichsetzung
                                findet eine Art „ethnische Teilung“ der Berufe statt,
                                bei der für
                                die Italiener zum Beispiel spezifische ökonomische Nischen reserviert
                                sind. Dies kann sich als ein Hindernis für die zweite oder dritte
                                Generation erweisen und mögliche Perspektiven sowie den Zugang in
                                andere Sektoren bremsen. Erschwerend kommt hinzu, dass diese Generation
                                eine nur geringe Inklusion ins deutsche Bildungssystem aufweist. Damit
                                ist ihre Partizipation an den sozialen
                                Staatsbürgerschaftsrechten<sup><a href="#fn3"
                                    name="fz3">3</a></sup> gefährdet.
                            </p>

                            <table>
                                <caption>Tab. 2: Schüler in Sekundarschulen und Förderschulen nach ausgewählter
                                    Nationalität in Prozent – Schuljahr 2008/09 (Quelle: Statistisches
                                    Bundesamt 2010)</caption>
                                <tr>
                                    <th>Nationalität</th>
                                    <th colspan="5">Schule</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Hauptschule</td>
                                    <td>Realschule</td>
                                    <td>Gesamtschule</td>
                                    <td>Gymnasium</td>
                                    <td>Förderschule</td>
                                </tr>
                                <tr>
                                    <td>
                                        Deutsche</td>
                                    <td>	8,6</td>
                                    <td>	14,1</td>
                                    <td>	5,3</td>
                                    <td>	28,7</td>
                                    <td>	4,1</td>
                                </tr>
                                <tr>
                                    <td>Griechen</td>
                                    <td>	21,8</td>
                                    <td>	14,7</td>
                                    <td>	6,1</td>
                                    <td>	15,6</td>
                                    <td>	6,1</td>
                                </tr>
                                <tr>
                                    <td>Italiener</td>
                                    <td>	23,7</td>
                                    <td>	13,8</td>
                                    <td>	6,9</td>
                                    <td>	9,9</td>
                                    <td>	8,6</td>
                                </tr>
                                <tr>
                                    <td>Polen</td>
                                    <td>	17,2</td>
                                    <td>	11,5</td>
                                    <td>	8,0</td>
                                    <td>	16,6</td>
                                    <td>	3,3</td>
                                </tr>
                                <tr>
                                    <td>Türken</td>
                                    <td>	23,4</td>
                                    <td>	14,5</td>
                                    <td>	10,4</td>
                                    <td>	9,3</td>
                                    <td>	6,9</td>
                                </tr>
                                <tr>
                                    <td>Vietnamesen</td>
                                    <td>	5,9</td>
                                    <td>	11,2</td>
                                    <td>	5,0</td>
                                    <td>	39,9</td>
                                    <td>	1,7</td>
                                </tr>
                            </table>

                            <p>
                                Die Pisa-Studien der OECD haben gezeigt, dass Schulerfolg in Deutschland
                                in hohem Maße vom Herkunftsmilieu abhängt. Schüler aus Familien mit
                                hohem kulturellem Kapital haben eher die Chance, aufs Gymnasium zu
                                gehen, das Abitur zu machen und ein Studium an der Universität zu
                                beginnen.
                            </p>
                            <p>
                                Gerade die <i>Gastarbeiterkinder</i> leiden am meisten unter einem selektiven
                                Schulsystem, das solche Schüler „bestraft“, die aus Familien ohne
                                hohes Schulbildungsniveau und ohne passenden, dominanten Habitus
                                stammen. Tatsächlich spielen ja gerade das inkorporierte Kapital und
                                der Habitus der Familie für die Schulkarriere eine fundamentale Rolle.
                                Folglich lässt sich eine Korrelation beobachten zwischen den
                                schulischen Leistungen der italienischen Schüler und der
                                Zusammensetzung der jeweiligen Communities.
                            </p>


                            <table>
                                <caption>
                                    Tab.3 : Italienische Schüler in ausgewählten Bundesländern in der
                                    Förderschule und in der Sekundarschule in Prozent – Schuljahr 2009/10
                                    (Quelle: Statistisches Bundesamt 2011)</caption>
                                <tr>
                                    <th colspan="6">Schule</th>
                                </tr>
                                <tr>
                                    <td>
                                        Bundesland</td>
                                    <td>Förderschule</td>
                                    <td>	Hauptschule</td>
                                    <td>	Gymnasium</td>
                                    <td>	Realschule</td>
                                    <td>	Gesamtschule</td>
                                </tr>
                                <tr>
                                    <td>Baden-Württ.</td>
                                    <td>	10,4</td>
                                    <td>	54,9</td>
                                    <td>	28,7</td>
                                    <td>	12,4</td>
                                    <td>	0,41</td>
                                </tr>
                                <tr>
                                    <td>Bayern</td>
                                    <td>	9,8</td>
                                    <td>	59,3</td>
                                    <td>	20,7</td>
                                    <td>	18,2</td>
                                    <td>	0,36</td>
                                </tr>
                                <tr>
                                    <td>Rheinl.-Pfalz</td>
                                    <td>	6,0</td>
                                    <td>	25,3</td>
                                    <td>	23,0</td>
                                    <td>	19,4</td>
                                    <td>	12,1</td>
                                </tr>
                                <tr>
                                    <td>NRW</td>
                                    <td>	7,6</td>
                                    <td>	30,9</td>
                                    <td>	23,0</td>
                                    <td>	17,2</td>
                                    <td>	26,2</td>
                                </tr>
                                <tr>
                                    <td>Niedersachsen</td>
                                    <td>	5,2</td>
                                    <td>	23,2</td>
                                    <td>	34,5</td>
                                    <td>	22,5</td>
                                    <td>	18,7</td>
                                </tr>
                                <tr>
                                    <td>
                                        Hessen</td>
                                    <td>	8,4</td>
                                    <td>	16,9</td>
                                    <td>	29,7</td>
                                    <td>	26,7</td>
                                    <td>	23,2</td>
                                </tr>
                                <tr>
                                    <td>
                                        Saarland</td>
                                    <td>	5,4</td>
                                    <td>	1,6</td>
                                    <td>	2,7</td>
                                    <td>	16,3</td>
                                    <td>	25,2</td>
                                </tr>
                                <tr>
                                    <td>
                                        Berlin</td>
                                    <td>	2,3</td>
                                    <td>	9,6</td>
                                    <td>	18,8</td>
                                    <td>	50,6</td>
                                    <td>	17,9</td>
                                </tr>
                            </table>


                            <p>
                                Gerade in den typischen Gebieten der Arbeitsimmigration wie
                                Baden-Württemberg, Bayern und Hessen – dort, wo das Schulsystem eher
                                selektiv ist – weisen die italienischen Schüler die höchste Quote an
                                Förderschülern auf. Dort gibt es auch die meisten Hauptschüler
                                italienischer Herkunft (Pichler 2008).
                            </p>
                            <p>
                                Einen Sonderfall stellt die Situation italienischer Schüler in Berlin
                                dar, wo die Schulperformance ganz andere Tendenzen zeigt. Dies kann auf
                                das weniger selektive Schulsystem Berlins zurückgeführt werden und auf
                                das Modell der bilingualen Europa-Schulen (Staatliche
                                Europa-Schulen/SESB),<sup><a href="#fn4"
                                    name="fz4">4</a></sup> das seit zehn Jahren
                                existiert. Allerdings sind
                                diese Schulerfolge auch auf die Zusammensetzung der italienischen
                                Community in Berlin zurückzuführen, die nicht nur die typische
                                <i>Gastarbeitermigration</i> erfahren hat, sondern durch die Zuwanderung von
                                unterschiedlichen Migrantentypen – aus unterschiedlichen Milieus und
                                häufig im Besitz höheren kulturellen Kapitals – charakterisiert ist
                                (Pichler 2008). Berlin ist außerdem nach dem Fall der Mauer besonders
                                in den letzten zehn Jahren Ziel der neuen europäischen Mobilität und
                                so auch der italienischen <i>euromovers</i> (Pichler 2011).
                            </p>

                            <h1>Die neuen Mobilen oder die Euromovers</h1>


                            <p>
                                Diese neuen mobilen jungen Menschen erleben die Auswanderung einerseits
                                als Zwang, weil sie in ihren Herkunftsländern kaum Chancen sehen;
                                zugleich aber – und das gilt besonders für diejenigen, die aus den
                                italienischen Wohlstandsgebieten kommen – ist die Emigration eine
                                freie Entscheidung, um einem gewissen Provinzialismus und der
                                Sozialkontrolle durch die Familie zu entkommen, bei der der Großteil
                                der jungen Leute zuvor noch wohnte.
                            </p>
                            <p>
                                Die neue Mobilität hat nicht nur zu einer ständigen Pluralisierung der
                                italienischen Community im Hinblick auf ihre soziale Zusammensetzung
                                beigetragen. Ebenso zeigt sich eine deutliche Zunahme des weiblichen
                                Anteils. Während in früheren Phasen die Einwanderung von Männern
                                dominiert wurde, lässt sich gerade in den jüngeren Altersgruppen und
                                bei den neuen Mobilen ein ausgeglichenes Verhältnis zwischen den
                                Geschlechtern beobachten. Die unterschiedliche
                                Geschlechterzusammensetzung nach Altersgruppen mit einer stärkeren
                                Präsenz von Männern unter den älteren Einwanderern kann unter anderem
                                auf zwei Entwicklungen hindeuten. Erstens findet die Mobilität der
                                jüngeren weiblichen Generation nicht mehr wie in der <i>Gastarbeiterzeit</i>
                                im Rahmen der Familienzusammenführung statt (Begleitung des Ehemannes,
                                Nachzug der Kinder). Sie gestaltet sich auch aufgrund von
                                Transformationen und Modernisierungsprozessen innerhalb der
                                italienischen Gesellschaft immer mehr als ein selbständiges Projekt.
                                Zweitens weist sie auf die Veränderungen der Beschäftigungs- bzw.
                                Arbeitsmarktstruktur hin (ebd.).
                            </p>
                            <p>
                                Die jungen <i>euromovers</i> verfügen oftmals über ein hohes kulturelles
                                Kapital; sie sind vielfach in den neuen Feldern der <i>creative industries</i>
                                aktiv. Meist handelt es sich dabei um kurzfristige, vorläufige
                                Tätigkeiten, gewissermaßen um „erfundene Berufe“, wobei die
                                Gastronomie als „Komplementärsektor“ dient, um andere Aktivitäten
                                zu finanzieren oder um überhaupt „über die Runden zu kommen“. Auch
                                bei ihnen scheinen, wie zum Beispiel Klaus Dörre (2009) festgestellt
                                hat, standardisierte und sozialstaatlich geschützte
                                Beschäftigungsverhältnisse subjektiv an Attraktivität verloren zu
                                haben. Laut Dörre betrachten sich viele dieser Personen trotz flexibler
                                Beschäftigungsverhältnisse keineswegs als Prekarier. Die
                                Zugehörigkeit zu diesen „kreativen Prekariern“ (Dörre 2009) stellt
                                für sie eine Form der „feinen Distinktion“ (Bourdieu 1987: 405)
                                dar, die sie von der zum Teil kleinbürgerlichen Herkunftswelt oder von
                                anderen Migranten unterscheidet.
                            </p>
                            <p>
                                Die sozialen Netzwerke der neuen Mobilen sind eher transversal angelegt,
                                ethnisch gemischt und  interkulturell. Hier sorgen vielmehr das
                                Herkunftsmilieu und der Habitus für Zugehörigkeit und nicht so sehr
                                die ethnische Gruppe. Die überethnischen bzw. transkulturellen
                                Netzwerke scheinen mehr im lebensweltlichen Bereich eine Bedeutung zu
                                haben. Es handelt sich vorwiegend um kulturelle Initiativen (Schule,
                                Elterninitiativen, Kulturorganisationen) oder um zivilgesellschaftliche
                                Organisationen (Parteien, Menschenrechts-, Umweltschutzorganisationen),
                                wobei die bi-kulturellen Kompetenzen der Akteure eine Bereicherung für
                                die Aktivität des Vereins darstellen.
                            </p>
                            <p>
                                Bei einigen neuen Mobilen werden also Netzwerke aktiviert, die auf der
                                gemeinsamen Herkunft aus Italien beruhen: Sie dienen als
                                Informationsquelle und der gegenseitigen Unterstützung. Gerade die im
                                letzten Jahrhundert erfolgte Binnenmobilität in Italien und die
                                Verbreitung von Fernsehen, Rundfunk und neuen Medien haben zu einer
                                Italianisierung der Bevölkerung beigetragen, die nicht mehr nur den
                                lokalen Dialekt spricht und lediglich die „Dorfgemeinschaft“ kennt.
                                Für die neuen Einwanderer, die vorwiegend aus einem urbanen Milieu
                                stammen, haben die für die Gastarbeitergeneration noch wichtigen
                                regionalen Netzwerke nur eine relative Bedeutung. Wenn vorhanden, haben
                                sie eher „folkloristischen“ Charakter und sind im Gegensatz zur
                                Vergangenheit offen für Personen anderer regionaler und nationaler
                                Herkunft (Pichler 2011).
                            </p>

                            <h1>Resümee</h1>
                            <p>
                                Die Mobilität in Europa hat sich im Laufe der Zeit gewandelt: Von der
                                Migration von Arbeitskräften im Rahmen von bilateralen Verträgen in
                                den 1950er und 1960er Jahren über Bewegungen im Rahmen der
                                Familienzusammenführung in den 1970er Jahren bis zu neuen Formen der
                                Mobilität, die durch die europäischen Integrationsprozesse gefördert
                                werden. Wenn in der Vergangenheit Migration bedeutete, sich von einem
                                nationalen Container in einen anderen zu bewegen, ist man heute mit
                                Personen konfrontiert, die häufig einen <i>transnationalen</i> Habitus
                                besitzen und die, indem sie lokal/global (<i>glocal</i>) agieren, die
                                nationalen Container zunehmend porös werden lassen (Mau 2007: 37).
                                <i>Migration</i> wird von einer zunehmenden Zahl von Personen als ein
                                permanenter Zustand und eine neue soziale Realität konzipiert: so für
                                die <i>Gast-Senioren</i>, deren Nachfahren, die Transnationalen und die neuen
                                Mobilen. Dadurch entstehen „hybride“ Identitäten, die die
                                Vorstellungen von Staatsangehörigkeit und nationaler Identität
                                unterlaufen und dementsprechend auch die Praxis des Zugangs zu den
                                Staatsbürgerrechten. Angesichts solcher neuer Mobilitätsphänomene ist
                                die Ausweitung des Begriffs von Staatsbürgerschaft hin zu einer
                                europäischen (Staats-)Bürgerschaft wünschenswert. Die
                                sozio-strukturellen Daten zur Situation der Italiener in der
                                Bundesrepublik bezüglich Arbeit, Schule und Ausbildung sowie ihre
                                Partizipation am politischen Leben zeigen, dass ein Teil der Italiener
                                in Deutschland von einer echten, vollständigen Inklusion in die Rechte
                                der Staatsbürgerschaft, die sie zu europäischen Bürgern machen
                                würde, noch weit entfernt ist.
                            </p>

                            <h1>Anmerkungen</h1>

                            <p><sup><a href="#fz1" name="fn1">1</a></sup>
                                So: „Weiße Weste für die Parallelwelt. 530 000 Italiener leben in
                                Deutschland, sie scheinen gut integriert. In Wahrheit schotten sich
                                etliche in Familienbünden ab. Das bietet der Mafia einen prächtigen
                                Nährboden für ihre Geschäfte.“ <i>Der Spiegel</i> 50/2007 vom 10.12.2007,
                                S. 58.
                            </p>
                            <p><sup><a href="#fz2" name="fn2">2</a></sup>
                                Inzwischen will man nicht nur in der Alltagsprache mit dem Begriff
                                „beim Italiener“ sagen, dass man in einem italienischen Restaurant
                                war.
                            </p>
                            <p><sup><a href="#fz3" name="fn3">3</a></sup>
                                Für Marshall hat die Bildung der Kinder einen direkten Einfluss auf
                                den Staatsbürgerstatus: „Wenn der Staat für alle Kinder eine
                                Erziehung sicherstellen will, dann hat er dabei ausdrücklich die
                                Voraussetzung und das Wesen des Staatsbürgerstatus im Blick. Er
                                versucht, die Entwicklung der werdenden Staatsbürger zu fördern. Das
                                Recht auf Bildung ist ein genuines soziales Recht der
                                Staatsbürgerschaft […]. Grundsätzlich sollte es nicht als das Recht
                                des Kindes auf den Besuch der Schule angesehen werden, sondern als das
                                Recht des erwachsenen Staatsbürgers, eine Erziehung genossen zu
                                haben […]. Bildung ist eine unverzichtbare Voraussetzung der
                                bürgerlichen Freiheit.“ (Marshall 2000: 61).
                            </p>
                            <p><sup><a href="#fz4" name="fn4">4</a></sup>
                                Verschiedene Studien haben gezeigt, dass die bilinguale Schulerziehung,
                                in der die kulturellen Kompetenzen der Schüler mit
                                Migrationshintergrund anerkannt und aufgewertet werden, ihre Inklusion
                                in das Schulsystem fördert (Gogolin 2003, Graf/Fernandez-Castillo
                                2011).
                            </p>

                            <h1>Literatur</h1>
                            <p className="bibl">
                                Bourdieu, Pierre (1983): Ökonomisches Kapital, kulturelles Kapital,
                                soziales Kapital, in: Kreckel, Reinhard (Hg.): <i>Soziale Ungleichheiten,
                                    Soziale Welt</i>, Sonderband 2, Göttingen, 183–198.
                            </p>
                            <p className="bibl">
                                – (1987): <i>Die feinen Unterschiede. Kritik der gesellschaftlichen
                                    Urteilskraft</i>, Frankfurt a.M.
                            </p>
                            <p className="bibl">
                                Brandt, Andrea/Kaiser, Simone/Kleinhubbert, Guido/Ulrich,
                                Andreas/Weinzierl, Alfred (2007): Weiße Weste für die Parallelwelt,
                                <i>Der Spiegel</i> 50, 58–62.
                            </p>
                            <p className="bibl">
                                Dörre, Klaus (2009): Prekarität im Finanzmarkt-Kapitalismus, in:
                                Castel, Robert/Dörre, Klaus (Hg.): <i>Prekarität, Abstieg, Ausgrenzung.
                                    Die soziale Frage am Beginn des 21. Jahrhunderts</i>, Frankfurt a.M./New
                                York, 35–64.
                            </p>
                            <p className="bibl">
                                Gogolin, Ingrid (2003): Gleiche Bildungschancen für Kinder mit
                                Migrationshintergrund – möglich auch in Deutschland?, in: Beauftragte
                                der Bundesregierung für Migration (Hg.): <i>Förderung von Migranten und
                                    Migrantinnen im Elementar- und Primarbereich. Dokumentation</i>, Berlin,
                                17–30.
                            </p>
                            <p className="bibl">
                                Graf, Peter/Fernandez-Castillo, Antonio (Hg.) (2011): <i>Schüler auf dem
                                    Weg nach Europa. Interkulturelle Bildung und Mehrsprachigkeit in der
                                    Schule</i>, Bad Heilbrunn.
                            </p>
                            <p className="bibl">
                                Marshall, Thomas H. (2000): Staatsbürgerrechte und soziale Klassen, in:
                                Mackert, Jürgen/Müller, Hans-Peter (Hg.): <i>Citizenship. Soziologie
                                    der Staatsbürgerschaft</i>, Wiesbaden, 45–102.
                            </p>
                            <p className="bibl">
                                Mau, Steffen (2007): <i>Transnationale Vergesellschaftung. Die Entgrenzung
                                    sozialer Lebenswelten</i> Frankfurt a.M./New York.
                            </p>
                            <p className="bibl">
                                Pichler, Edith (2006): 50 anni di immigrazione italiana in Germania:
                                transitori, inclusi/esclusi o cittadini europei?, in: <i>Altreitalie.
                                    Rivista internazionale di studi sulle popolazioni di origine italiana
                                    nel mondo</i> 33, 6–18.
                            </p>
                            <p className="bibl">
                                – (2008): Community, Milieus und Schulkarrieren am Beispiel der
                                italienischen Bevölkerung in Berlin, in: Hillmann, Felicitas/Windzio,
                                Michael (Hg.): <i>Migration und städtischer Raum. Chancen und Risiken
                                    der Segregation und Integration</i>, Opladen/Farmington Hills, 247–261.
                            </p>
                            <p className="bibl">
                                –  (2011): Die Italiener in Berlin und ihr Selbstverständnis als
                                neue Europäer, in: Janz, Oliver/Sala, Roberto (Hg.): <i>Dolce Vita? Das
                                    Bild der italienischen Migranten in Deutschland</i>, Frankfurt a.M./New
                                York, 277–295.
                            </p>
                            <p className="bibl">
                                Statistisches Bundesamt (2010): <i>Bevölkerung und Erwerbstätigkeit.
                                    Bevölkerung mit Migrationshintergrund – Ergebnisse des Mikrozensus
                                    2009</i> – Fachserie 1 Reihe 2.2. Wiesbaden.
                            </p>
                            <p className="bibl">
                                –  (2010): <i>Bildung und Kultur. Allgemeinbildende Schulen, Schuljahr
                                    2008/ 2009</i> – Fachserie 11 Reihe 1. Wiesbaden.
                            </p>
                            <p className="bibl">
                                –  (2011): <i>Bildung und Kultur. Allgemeinbildende Schulen, Schuljahr
                                    2009/ 2010</i> – Fachserie 11 Reihe 1. Wiesbaden.
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

export default Pichler;