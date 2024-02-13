import Header from "../Header";
import Rubrik from "../Rubrik";
import BernardiPortrait from "../../images/rbernardi/rbernardi-portrait.jpg";
import VidesottPortrait from "../../images/pvidesott/pvidesott-portrait.jpg";
import UpArrow from "../UpArrow";
import Footer from "../Footer";

function VidesottBernardi(props) {
    return (
        <div id="Wrapper" className="container_14">
            <div id="Header">
                <Header id={props.author} />
                <div className="grid_9">
                    <h1 id="main_title">Eine administrative Übersetzung ins
                        Dolomitenladinische aus dem Jahr 1811</h1>
                    <p id="author">Paul Videsott/Rut Bernardi, Brixen</p>
                </div>
                <Rubrik />
            </div>

            <div id="Teasers" className="clearfix">
                <div className="grid_9">
                    <h1>1 Übersetzungen ins Rätoromanische: ein Vergleich</h1>
                    <p>
                        Diese Dieter Kattenbusch, einem der profiliertesten deutschen
                        Rätoromanisten, gewidmete Festgabe schließt direkt an einen der
                        vorerst letzten spezifisch rätoromanistischen Aufsätze des Jubilars
                        an: an seinen Artikel <i>Übersetzen und Sprachgeschichte: Übersetzungen
                            ins Dolomitenladinische/Traduction et histoire des langues: traductions
                            en ladin</i> (Artikel 119b) im 2. Band des von Gerhard Ernst, Martin-D.
                        Gleßgen, Christian Schmitt und Wolfgang Schweickard herausgegebenen
                        Handbuchs <i>Romanische Sprachgeschichte</i> (Kattenbusch 2006). Vergleicht man
                        diesen Artikel mit jenen von Giorgio Faggin zu den Übersetzungen ins
                        Friaulische (Artikel 119a, Faggin 2006) und von Wolfgang Dahmen zu den
                        Übersetzungen ins Bündnerromanische (Artikel 119c, Dahmen 2006) im
                        gleichen Handbuch, so stechen vor allem drei Punkte ins Auge:
                    </p>
                    <ol>
                        <li>das vergleichsweise späte Einsetzen von Übersetzungen ins
                            Dolomitenladinische überhaupt (was gemeinhin mit dem Fehlen der
                            Reformation in diesem Gebiet begründet wird, die in anderen
                            (Minderheiten-)Sprachen zu zumindest partiellen Übersetzungen der
                            Heiligen Schrift geführt hat);</li>
                        <li>
                            ihre nach wie vor geringe Anzahl und ihre deswegen geringe Auswirkung
                            auf die Etablierung einer ladinischen Literatursprache; sowie</li>
                        <li>
                            das fast gänzliche Fehlen von Werken der Weltliteratur innerhalb dieser
                            Übersetzungen. Ebenso selten sind Übersetzungen von solchen Werken,
                            deren internationale Bekanntheit u.a. auch auf der Vielzahl ihrer
                            Übersetzung beruht (etwa die Comic-Serien <i>Asterix</i> und <i>Tintin</i> (dt. <i>Tim
                                und Struppi</i>) oder die bekannten Schweizer Kindergeschichten von <i>Flurina</i>
                            oder <i>Uorsin/Schellen-Ursli</i>).<sup><a href="#fn1" name="fz1">1</a></sup></li>
                    </ol>
                    <h1>2 Literarische Übersetzungen ins Dolomitenladinische</h1>
                    <p>
                        Nichtsdestotrotz spielen aber auch im Dolomitenladinischen
                        Übersetzungen, insbesondere in der Anfangsphase der Verschriftung, mehr
                        als nur eine marginale Rolle: Der erste gedruckte längere Text des
                        Grödnerischen ist eine Übersetzung aus dem Jahr 1813 von Johann Peter
                        Rungaudie (1753–1815): <i>La Stacions, o’ la Via dêlla S. Crôush, che
                            cuntêng dê bêlla cunshideraziongs, i uraziongs. Mettudês dal Taliang
                            n’têl rushênê dê Gêrdeina da Piêrê Rungaudie, Benefiziat da S.
                            Michiel. Stampà a Bulssang pra Carl Ushêp Weiss</i> (vgl. Böhmer 1878:
                        88–92),<sup><a href="#fn2" name="fz2">2</a></sup> und auch das „erste ladinische Buch“ von Matthäus Declara
                        (1815–1884) ist eine Übersetzung: <i>Storia d’ S. Genofefa,
                            trasportada t’ nosc’ lingaz daò ’l canonico Smid. Prum liber
                            lading</i> (Brixen, Weger 1879).<sup><a href="#fn3" name="fz3">3</a></sup>


                    </p>
                </div>
                <div className="grid_5">

                    <div className="abouttheauthor">
                        <img src={VidesottPortrait} width="85"
                            height="116" alt=" - Portrait" />
                        <div className="abouttheauthorfont"><br /><br />
                            <b>Paul Videsott</b>, Prof. Dr., Professor für romanische Sprachwissenschaft an
                            der Freien Universität Bozen (Brixen).
                        </div>
                        <div className="clearfloat"></div>
                    </div>

                    <div className="abouttheauthor">
                        <img src={BernardiPortrait} width="85"
                            height="116" alt=" - Portrait" />
                        <div className="abouttheauthorfont"><br /><br />
                            <b>Rut Bernardi</b>, Dr. phil., Wissenschaftliche Mitarbeiterin an der
                            Ladinischen Abteilung der Freien Universität Bozen (Brixen).<br /><br />
                            Die Autoren, beide Ladiner, haben Dieter Kattenbusch im Zusammenhang mit seinen rätoromanistischen Tätigkeiten kennen und schätzen gelernt.<br />
                            <span style={{ color: "#666666" }}><b>Rut Bernardi:</b> Ich besuchte im Sommer 1989 gerade meinen ersten Surselvisch-Intensivkurs in Lags/Laax, als Dieter Kattenbusch dort den von ihm herausgegebenen Band mit Aufsätzen von Robert von Planta vorstellte. Ich erhielt danach ein Exemplar des Buches, das ich genauestens studierte, da ich damals an der Erstellung des „Handwörterbuch des Rätoromanischen“ an der Universität Zürich mitarbeitete.<br />
                                <b>Paul Videsott:</b> Ich traf Dieter Kattenbusch zum ersten Mal in meiner Studienzeit, im Frühjahr 1994 in Eichstätt, als der Jubilar dort einen Vortrag zur Verschriftung des Dolomitenladinischen hielt. In den 15 Jahren danach folgten weitere Treffen in Vigo di Fassa (im Rahmen des SPELL-Projektes, das Dieter Kattenbusch aktiv unterstützte) und in Innsbruck, und zuletzt im Rahmen der Sitzungen des wissenschaftlichen Komitees der Zeitschrift „Ladinia“. Der größte Berührungspunkt zum Jubilar ist aber indirekter Natur als sein „Nachfolger“ im Projekt ALD (Teil 2) bei den Enquêten in der Dolomitenladinia (2001–2004). Den Informanten, die Dieter Kattenbusch 15 Jahre vorher mit dem Fragebuch des ALD-I aufgesucht hatte, war er in bester Erinnerung geblieben.</span>
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
                                An die Übersetzung von Weltliteratur ins Ladinische hat sich unseres
                                Wissens erstmals Jan Batista Alton (1845–1900) in seinem 1885
                                erschienenen Werk <i>Rimes ladines in pert con traduzion taliana</i> gewagt.
                                Unter dem Titel „Versioni libere“ findet sich die Übersetzung von
                                drei Gedichten Goethes (<i>Mignon</i>, <i>Erlkönig</i>, <i>Rettung</i>, vgl. Alton 1885:
                                94–96), nebst vier anderen Gedichten ohne Titel.<sup><a href="#fn4" name="fz4">4</a></sup> Diese wurden zwar von
                                der Fachwelt zur Kenntnis genommen, in Ladinien selbst scheinen sie
                                hingegen weitgehend unbeachtet geblieben zu sein (ein Wiederabdruck des
                                Alton’schen <i>Erlkönig</i> findet sich erst in Vittur 1967: 77).
                            </p>

                            <p>
                                Eine nennenswerte Übersetzungstätigkeit setzte in Ladinien erst in den
                                Jahren nach dem Zweiten Weltkrieg wieder ein und betraf neben Liedtexten
                                vor allem Gedichte und Prosaerzählungen, die in den neugegründeten
                                Zeitschriften (<i>Nos Ladins</i>) und Jahreskalendern (<i>Calënder de Gherdëina</i>,
                                <i>Calënder Ladin</i>) publiziert wurden. Für diese Zeit herausragend sind
                                die <i>Stories de Anton Cechov</i> (Urtijëi 1968) der Grödner Autorin Frida
                                Piazza (*1922). Die Gründung der ladinischen Kulturinstitute in
                                Vich/Vigo di Fassa (1975) und in S. Martin de Tor/St. Martin in Thurn
                                (1976) förderte die literarische Übersetzungstätigkeit sehr. Das
                                Institut in St. Martin in Thurn bevorzugte in seiner Anfangszeit die
                                Übersetzung von Theaterstücken<sup><a href="#fn5" name="fz5">5</a></sup> und von Südtiroler Literatur<sup><a href="#fn6" name="fz6">6</a></sup> ins
                                Ladinische. Das fassanische Kulturinstitut legte hingegen seinen
                                Schwerpunkt auf die Übersetzung von Kinderliteratur (u.a. Projekt
                                <i>Contacontìes</i>, bisher 31 Bände).<sup><a href="#fn7" name="fz7">7</a></sup> Ab den 1990er Jahren wagte man sich
                                erneut an die Übersetzung einiger Klassiker der Weltliteratur.<sup><a href="#fn8" name="fz8">8</a></sup>
                            </p>

                            <p>
                                Doch so wichtig die eben genannten Übersetzungen für die allgemeine
                                schriftliche Verwendung des Ladinischen sind, so wenig konnten sie
                                bisher zum Ziel beitragen, eine elaboriertere überlokale ladinische
                                Literatursprache zu etablieren (so auch Kattenbusch 2006: 1367). Das
                                liegt daran, dass sie ausnahmslos als Einzelwerk, als mehr oder weniger
                                „private“ Leistung der einzelnen Übersetzer erstellt wurden; damit
                                bleibt aber ihre Sprache notgedrungen dem lokalen Dorf- bzw.
                                Talschaftsidiom verhaftet.<sup><a href="#fn9" name="fz9">9</a></sup> Eine Analyse dieser Texte erweist auch, dass
                                sich die meisten Übersetzer um ein möglichst „gutes“ (d.h.
                                traditionelles) Ladinisch bemühen, sodass literarische Neologismen in
                                diesen Übersetzungen Mangelware sind. Bemerkenswerte Ausnahmen bilden
                                die bereits erwähnten literarischen Übersetzungen Frida Piazzas sowie
                                jene Lois Craffonaras (Craffonara 1999; 2003; 2008), die beide den
                                Neologismen große Aufmerksamkeit widmen. Beide versuchen auch
                                lexikalisch eine literarische Sprache zu schaffen, die sich von der
                                gesprochenen ladinischen Umgangssprache abhebt, wobei Craffonara
                                revitalisierte Archaismen zu bevorzugen scheint, Piazza hingegen eigene
                                Ad-hoc-Schöpfungen.<sup><a href="#fn10" name="fz10">10</a></sup> Ein dritter ladinischer Autor, dessen Œuvre
                                bedeutende literarische Übersetzungen umfasst (Goethe, Trakl, Hesse,
                                Rabensteiner), ist Felix Dapoz (vgl. Dapoz 1982 sowie Suani 2009). Auch
                                er bevorzugt in seiner poetischen Sprache den Einsatz von
                                revitalisierten Archaismen.
                            </p>

                            <h1>3 Administrative Übersetzungen ins Dolomitenladinische</h1>
                            <p>
                                Lebendiger und sprachlich wirkungsvoller ist die Übersetzungsaktivität
                                ins Dolomitenladinische zweifellos im administrativen Bereich, was durch
                                die gesetzlichen Vorgaben zur Verwendung des Ladinischen in diesem
                                Sektor bedingt ist.<sup><a href="#fn11" name="fz11">11</a></sup> Interessanterweise scheint bereits lange vor dem
                                Dekret Nr. 405 vom 15. Juli 1988, mit dem das Ladinische zur Amtssprache im
                                Gadertal und in Gröden erhoben wurde (sowie dem Dekret Nr. 592 vom
                                16. Dezember 1993 als entsprechendem Pendant für das Fassatal), der
                                administrative Bereich für Übersetzungen ins Ladinische bevorzugt
                                gewesen zu sein. So gehen die ersten bekannten ladinischen
                                „Proclami“ aus den Jahren 1631 und vom Beginn des 18. Jahrhunderts<sup><a href="#fn12" name="fz12">12</a></sup>
                                in ihren Formulierungen wohl auf gleichlautende deutsche Vorlagen
                                zurück (vgl. Ghetta/Plangg 1987: 283),<sup><a href="#fn13" name="fz13">13</a></sup> doch bei spezifischen Anlässen
                                scheinen Verlautbarungen auch ursprünglich auf Ladinisch erstellt und
                                erst nachträglich ins Deutsche bzw. Italienische übersetzt worden zu
                                sein. Dies könnte beim ladinischen Text aus dem Jahr 1632 der Fall
                                sein, der auch in einer italienischen Parallelversion vorliegt, der
                                allerdings ein Satz fehlt. Aufgrund dieser Tatsache folgert Belardi
                                (1991: 165), die italienische könne nicht die ursprüngliche Version
                                des Textes sein.
                            </p>

                            <h1>4 Eine administrative Übersetzung aus dem Jahr 1811</h1>
                            <p>
                                Im Folgenden möchten wir einen Text vorstellen, der nach unserem
                                Kenntnisstand die älteste sicher nachweisbare administrative
                                Übersetzung ins Dolomitenladinische darstellt, das heißt, wo über den
                                fremdsprachigen (deutschen) Ausgangstext sowie über den ladinischen
                                Zieltext keine Zweifel bestehen, da beide vorliegen. Er stammt aus dem
                                Jahr 1811 und wird im Pfarrarchiv von Calfosch/Kolfuschg im Gadertal
                                (Südtirol) aufbewahrt.<sup><a href="#fn14" name="fz14">14</a></sup> Es handelt sich um die Übersetzung einer am 9.
                                Juni 1807 von der Bayrischen Regierung in München erlassenen Verordnung
                                „<i>Die Bestechung der Staatsbeamten betreffend</i>“, die am 16. Juni 1807 auch
                                vom bayrischen Statthalter in Innsbruck Karl Graf von Arco verlautbart
                                und in gedruckter Form verbreitet wurde:
                            </p>

                            <p className="quote">
                                <span style={{ marginLeft: "100px" }}>Im Namen Seiner Majestät des
                                    Königs.</span>
                            </p>
                            <p className="quote">
                                Seine königliche Majestät haben mit Allerhöchstem Reskripte vom 9ten
                                dieses allergnädigste anzuordnen geruhet: daß nachstehender Auszug der
                                Allerhöchsten Verordnung de dato München den 9ten Junius laufenden
                                Jahrs, die Bestechung der Staatsbeamten betreffend, alle Vierteljahre
                                von den Kanzeln aller Orte verkündet werden solle.
                                <br />
                                1stens. Keinem Unterthan, der den einem königlichen Beamten in
                                Dienstsachen etwas zu suchen und zu bitten hat, ist es erlaubt, diesem
                                Beamten, oder dessen Angehörigen, oder anderen Vortheile zu geben, zu
                                versprechen, oder durch andere geben, oder versprechen zu lassen, das
                                Geschenk sey groß oder klein, bestehe in Geld oder Geldwerth. Wer einem
                                königlichen Beamten solche Geschenke oder Vortheile giebt, oder
                                anbietet, oder geben oder anbieten läßt, um sein Gesuch zu
                                unterstützen, um besondere Gunst des Beamten für das Anliegen zu
                                erlangen, oder gar um ihn von seinen Amtspflichten abwendig zu machen,
                                der wird dadurch eines Verbrechens schuldig.
                                <br />
                                2tens. Wer vorgemeldetem Verbothe entgegen handelt, verliert nicht nur
                                zur Strafe das Geschenk, sondern muß auch doppelt so viel, als das
                                gegebene oder angebotene Geschenk beträgt, und nach Umständen 50 bis
                                300 fl. – als Strafe bezahlen. Auch wird der Geschenkgeber noch über
                                dieses mit Gefängniß höchstens auf sechs Monate, und nicht geringer
                                als auf einen Monat bestraft, wenn er den Beamten durch solche
                                Bestechung von seinen Pflichten abwendig gemacht hat.
                                <br />
                                3tens. Wer einem königlichen Beamten in Amtssachen solche Geschenke
                                anbietet, muß gewärtigen, daß er von diesem Beamten selbst beym
                                Gerichte angezeigt und zur verdienten Bestrafung gebracht werde. Denn
                                jeder Beamte ist, bey eigener Verantwortlichkeit und Strafe schuldig,
                                jeden, der ihm solche Vortheile anbietet, bey Gericht anzuzeigen.
                                <br />
                                [Seite 2] 4tens. Wenn ein Beamter selbst so pflichtvergessen gewesen
                                ist, daß er das Geschenk wirklich angenommen, oder sich bereit erklärt
                                hätte, das versprochene Geschenk annehmen zu wollen, so darf der
                                Unterthan, welcher diese Bestechung ausgeübt hat, nicht nur ohne
                                Gefahr, sondern selbst mit der Aussicht auf Belohnung seine Handlung und
                                den pflichtvergessenen Beamten der Obrigkeit, oder den Vorgesetzten
                                dieses Beamtens anzeigen. Der Bestechende, welcher das Vorgefallene noch
                                zeitig genug selbst angiebt, wird 1.) von aller wegen der Bestechung
                                sonst verdienten Strafe frey, und 2.) wenn der Beamte vor Gericht
                                straffällig befunden wird, so bekommt er nicht nur seine Geschenke
                                wieder zurück, sondern es wird ihm auch noch über dieses die Hälfte
                                der Geldbuße, in welche der Beamte verurtheilt wird, als Belohnung
                                ausbezahlt.
                                <br />
                                5tens. Andere Unterthanen, welche von der vorgefallenen Bestechung eines
                                königlichen Beamten Wissenschaft, oder gegründete Vermuthung haben,
                                werden aufgefordert, der gehörigen Obrigkeit Anzeige davon zu machen.
                                Wer dieses gethan, und dadurch Veranlassung gegeben hat, daß die
                                Verbrechen zur Untersuchung gezogen und bestraft wurden, hat ebenfalls
                                Belohnung zu erwarten. Ihm soll nämlich die volle Geldbuße, in welche
                                der Verbrecher verurtheilt wird, als Belohnung ausbezahlt werden, und
                                diese Geldbuße bestehet in der Regel bey dem bestochenen Staatsbeamten
                                in dem vierfachen Werth des angenommenen Geschenks, bey demjenigen, der
                                ihn bestochen hat, in dem doppelten Werthe des Gegebenen oder
                                Angebotenen.
                                <br />
                                Diese Allerhöchste Verordnung wird also zur allgemeinen Kenntniß
                                gebracht, und alle Vierteljahre von den Kanzeln aller Seelsorgkirchen
                                über erhaltene Weisung der betreffenden geistlichen Dekanate zu
                                verkünden seyn, worauf die königlichen Kreisämter und Landgerichte,
                                auch alle Lokalobrigkeiten zu machen haben.
                                <br />
                                Innsbruck den 16ten Junius 1807.
                                <br />
                                Königlich Baierisches Gubernium in Tirol.
                                <br />
                                Karl Graf von Arco.
                                <br />
                                v. Strobl.
                            </p>
                            <p>
                                Der gedruckte deutsche Text befindet sich auf den Seiten eins und zwei
                                eines Bogens Papier. Die handschriftliche Übersetzung folgt auf der
                                ursprünglich freien Seite drei und trägt die Überschrift: <i>Publicatum
                                    fuit die 26 Julii 1807 in Collefusco. et 8vo Sept. 1811</i>. Nachdem der
                                Zusatz „<i>et 8vo Sept. 1811</i>“ in der gleichen, etwas dunkleren Tinte
                                geschrieben ist wie die nachfolgende Übersetzung, können wir davon
                                ausgehen, dass ihre Niederschrift anlässlich der Proklamation der
                                Verordnung an diesem zweiten Datum erfolgt ist.
                            </p>
                            <p>
                                Die Einleitung und den Schluss der Originalverordnung (im gedruckten
                                Text beide fünf Zeilen lang) hat der Schreiber nicht übersetzt,
                                sondern lediglich die fünf Bestimmungen selbst (im deutschen
                                Originaltext 44 Zeilen lang).
                            </p>

                            <table>
                                <tr>
                                    <th>

                                        Ladinischer Originaltext
                                    </th>
                                    <th>
                                        Übertragung in die moderne Orthographie<sup><a href="#fn15" name="fz15">15</a></sup>
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        Ai nom dél Rè d’ Baira.
                                        Al Rè i ale plasü d’ordené etc.
                                    </td>
                                    <td>
                                        A inom del Re d’ Baira.
                                        Al Re i ale plajü d’ordenè etc.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1. A degun Sudito, ch’ ha val da fà, ô da chirì por Signoria in côses
                                        che tocca a so ôffice, i elle lecito, an tal Officiante de Signoria, ô
                                        a valgün di sü, d’i conceder val ütel, d’impôrmàter, ô d’i dè pôr
                                        atri, ô d’i lassè impôrmater val regal sì po gran o pitse, in dinà, o
                                        valüta de dinà. Cal che cunced a valgün d’ Signoria val ütel, ô ch’i
                                        fes dé te regai, ô i perferass, ô i làsa dè, ô perferì por sostignì
                                        cal ch’al chir, por tsafè plœ sauri, pôr trà la Signoria sun süa pert,
                                        ô por la desviè incḩinamai a fà so obligo, ’n tal se fés in còlpa de
                                        ’n gran fàl.
                                    </td>
                                    <td>
                                        1. A degun sudito, ch’ à val’ da fà o da chirì por Signoria in coses<sup><a href="#fn16" name="fz16">16</a></sup>
                                        che toca a so ofize, i éle lecito, a n tal ofiziante de Signoria o a
                                        valgügn di sü, d’i conzeder val’ ütel, d’impormëter o d’i dè por atri,
                                        o d’i lascè impormëter val’ regal sii po gran o pice, in dinà, o
                                        valüta de dinà. Chël che cunzed a valgün d’ Signoria val’ ütel, o ch’i
                                        fej de te’ regai, o i perferësc, o i lascia dè o perferì por sostignì
                                        chël ch’al chir, por ciafè plö saurì, por trà la Signoria sun süa
                                        pert, o por la desviè inćinamai a fà so obligo, n tal se fej in colpa
                                        de n gran fal.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        2. Chi che và cùntra cas urdén, ne perd demenà por
                                        castige ‘l regal, mô al vain cḩiamò cundanè a
                                        pajee ‘l dŏppel de cal ch’al ha dè, o impormetü de
                                        dè, e segunde les circunstanzes 50 incḩina 300
                                        fl. de straufunga. E cḩiamò lapro vain ‘n tal ch’
                                        unts la Signoria, e che l’ha destuta a fà l’
                                        obligô so castiæ culla persun almanco d’un al plœ
                                        de sis mais.
                                    </td>
                                    <td>
                                        2. Chi che và cuntra chësc urden ne perd demenà por castighe l’ regal,
                                        mo al vëgn ćiamò cundanè a paié l’ dopel de chël ch’al à dè, o
                                        impormetü de dè, e segunde les circunstanzes 50 inćina 300 fl. de
                                        straufunga. E ćiamò laprò vëgn n tal ch’ unc la Signoria e che l’à
                                        destuta a fà l’ obligo so, castié cula perjun almanco d’un al plö de
                                        sis mëisc.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        3. Chi che perferass val Regal a valgün de Signoria in coses de
                                        justizia, ha d’aspetè dal real Offeciante instas dé gni de dant alla
                                        Signoria, por tsafè l’ castighe, ch’al merita.
                                    </td>
                                    <td>
                                        3. Chi che perferësc val’ regal a valgün de Signoria in coses de
                                        iustizia, à d’aspetè dal real Ofeziante instës de gnì dè dant ala
                                        Signoria, por ciafè l’ castighe ch’al merita.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        4. Se na persona de justizia metessa tan püc a verda al obligo so,
                                        ch’alla se lassasa unse, ô ch’alla se ’n essa lase fora de orai
                                        accettè val de te; se po un ch ha, o ha ôrü unse no demenà sanza pôra
                                        de castighe, mô incḩiamo cul istassa speranza de regal dè dant so fat,
                                        e la persona d’Office incolpada alla Signoria che s’aspeta. Call’
                                        ch’ha, o ha ôrü unse, e che denunzia istass la cosa a tamp, e ora, a
                                        ’n tal 1. i vainel pôrdené düt ’l strauf, ch’al s’essa meritæ cul
                                        unse. 2. S’l’Officiante vain cḩiatè dant a Signoria in colpa, se ne
                                        tsafel demena l fate sò innaò, mô al tsafa cḩiamò de bona man mets i
                                        dinà, a chi ch’ l’ Officiant vain cundane de strauf.
                                    </td>
                                    <td>
                                        4. Sce na persona de iustizia metëssa tan püch averda al obligo so,
                                        ch’ala se lasciassa unje, o ch’ala se n essa lascè fora de orëi azetè
                                        val’ de te; sce pò un ch’à o à orü unje, no demenà sënza pôra de
                                        castighe, mo inćiamò cul istëssa speranza de regal, dè dant so fat e
                                        la persona d’Ofize incolpada ala Signoria che s’aspeta. Chël ch’à o à
                                        orü unje, e che denunzia istës la cosa a tëmp e ora, a n tal 1. i
                                        vëgnel pordenè düt l’ strauf, ch’al s’essa meritè cul unje. 2. Sc’
                                        l’Ofiziante vëgn ćiatè dant a Signoria in colpa, se ne ciàfel demenà
                                        l’ fateso inaò, mo al ciafa ćiamò de bonaman mec i dinà, a chi ch’ l’
                                        Ofiziant vëgn cundanè de strauf.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        5. Atres persones, ch’ha val notizia ch’al si ste unt pro [v]al
                                        persŏna de Signoria, ô sŏspeziun fundada, castes vain ammonides, de dè
                                        la denunzia alla Signoria. Cal che fes cast, e ch’a cas parti ha dè
                                        gausa, ch un vain samine, tsafè in colpa, e straufè, ha incḩie da
                                        aspetè la bona man. A n tal des ngi cumpedè sœ dutg i gros por regal a
                                        chi ch vain cundanà a paje de strauf chi ch è in colpa. E casta
                                        straufunga in dinà è determinada pôr solito por i Officianti de
                                        S(t)ato cater ôtes de plœ che cal ch’ ai ha retseü, e por cal ch’ ha
                                        unt, l’ doppel de cal ch’al ha dè, ô impôrmetü.
                                    </td>
                                    <td>
                                        5. Atres persones, ch’à val’ notizia ch’al sii stè unt pro val’
                                        persona de Signoria, o sospeziun fundada, chëstes vëgn amonides de dè
                                        la denunzia ala Signoria. Chël che fej chëst, e ch’a chësc partì à dè
                                        gauja, ch’ un vëgn jaminè, ciafè in colpa e straufè, à inće da aspetè
                                        la bonaman. A n tal dess gnì cumpedè sö düć i grosc por regal a chi
                                        ch’ vëgn cundanà a paié de strauf chi ch’é in colpa. E chësta
                                        straufunga in dinà é determinada por solito por i Ofizianti de Stato
                                        cater otes de plö che chël ch’ai à receü, e por chël ch’à unt, l’
                                        dopel de chël ch’al à dè o impormetü.

                                    </td>
                                </tr>
                            </table>

                            <p>
                                Die Übersetzung ist namentlich nicht gekennzeichnet, doch aufgrund der
                                in der Verordnung erwähnten Bestimmung, diese sei „in allen
                                Seelsorgkirchen über erhaltene Weisung der betreffenden geistlichen
                                Dekanate“ zu verlesen,<sup><a href="#fn17" name="fz17">17</a></sup> kann man davon ausgehen, dass es sich beim
                                Übersetzer um einen im Dekanat Mareo/Enneberg – zu dem die Kuratie
                                Calfosch/Kolfuschg damals wie heute gehörte – wirkenden Geistlichen
                                handelt. Aufgrund unserer Kenntnisse über die damalige
                                Verlautbarungspraxis in Ladinien (vgl. Ghetta/Plangg 1987: 283) kann man
                                davon ausgehen, dass den Seelsorgern des Dekanats Enneberg der deutsche
                                Verordnungstext zugeschickt wurde und dann vor Ort ins Ladinische
                                übertragen wurde. Diese Übersetzung erfolgte in den allermeisten
                                Fällen mündlich, was nicht nur das Fehlen des Textes in den anderen
                                Pfarrarchiven des Tales erklären würde (Überlieferungslücken sind
                                natürlich nicht ausgeschlossen), sondern – allgemeiner – auch eine
                                Begründung darstellt für die Seltenheit konkreter schriftlicher Belege
                                für diese damals übliche Übersetzungstätigkeit bei öffentlichen
                                Verlautbarungen (vgl. ebd.: 282f.). Womöglich haben die
                                für die Rechtssprache typischen Schachtelsätze des deutschen
                                Originaltextes, die bei einer spontanen Übersetzung wohl
                                Schwierigkeiten bereitet hätten, den damaligen Seelsorger von
                                Calfosch/Kolfuschg bewogen, seine ladinische Übersetzung auch
                                schriftlich zu fixieren.<sup><a href="#fn18" name="fz18">18</a></sup> Sollte diese Annahme stimmen, so wäre der
                                Übersetzer identifiziert als Hw. Jan Mathias Costadedoi aus S.
                                Ćiascian/St. Kassian, von 1803 bis 1818 Kurat von Calfosch/Kolfuschg.<sup><a href="#fn19" name="fz19">19</a></sup>
                            </p>

                            <h1>5 Zur Sprache der Übersetzung</h1>
                            <p>
                                Die Sprache des Textes bestätigt die Annahme eines Obergadertaler
                                Übersetzers. Eindeutig ist &lt;a&gt; für [ë] (<i>impôrmàter</i>
                                ‚versprechen‘, <i>Cal che</i> ‚derjenige der‘, <i>perferass</i> ‚bietet
                                an‘, <i>cas</i> ‚dieser‘, <i>mais</i> ‚Monate‘, <i>instas</i> ‚selbst‘, <i>fora de
                                    orai</i> ‚ohne zu wollen‘, <i>sanza</i> ‚ohne‘, <i>tamp</i> ‚Zeit‘ usw.).
                                Weitere obergadertalische Charakteristika sind <i>plœ</i> [plö] für
                                untergadertalisches [plü] (vgl. ALD-I: 610), der fehlende Rhotazismus
                                im femininen Personalpronomen der 3. Person (alla ‚sie‘) oder &lt;per-&gt;
                                statt &lt;por-&gt; in Wörtern wie <i>perferass</i> ‚bietet an‘, <i>persona</i>
                                ‚Person‘, <i>persun</i> ‚Gefängnis‘. Die spezifische Mundart von
                                Calfosch/Kolfuschg, die sich um 1800 noch sehr deutlich von jener des
                                angrenzenden Corvara unterschied, dringt in der Übersetzung kaum durch.
                                Ein Hinweis auf eine lokale Form könnte die 3. Person des Konjunktiv
                                Imperfekt auf <i>-a</i> (<i>metessa tan püc a verda</i> ‚so wenig Acht geben
                                würde‘, <i>se lassasa unse</i> ‚sich bestechen ließe‘, <i>essa</i>
                                ‚hätte‘) darstellen, die im Gadertal – im Gegensatz zu den
                                umliegenden ladinischen Tälern – auf <i>-ss</i> auslautet. Heute hat auch
                                Calfosch/Kolfuschg die Form auf <i>-ss</i> (was bereits von Alton 1879: 107
                                dokumentiert wurde), aber es ist nicht ausgeschlossen, dass um 1800 das
                                damals noch zum Gericht Wolkenstein gehörende Dorf das
                                „grödnerische“ <i>-a</i> aufwies.
                            </p>

                            <p>
                                Die Orthographie des Textes weist, neben den damals üblichen Anleihen
                                an das italienische und deutsche System, auch einige
                                spezifisch ladinische Lösungen auf. Auf italienischen
                                bzw. etymologischen Einfluss geht die Verwendung von
                                Geminaten zurück (<i>côses che tocca a so ôffice</i>
                                ‚Dienstsachen‘, <i>Officiante</i> ‚Beamter‘, <i>accettè</i>
                                ‚annehmen‘, <i>ammonides</i> ‚verwarnt‘, <i>doppel</i> ‚Doppel‘), die
                                Verwendung des &lt;h&gt; in den Formen des Verbs <i>avëi</i>
                                ‚haben‘ (<i>ha val da fa</i> ‚etwas zu tun haben‘, <i>ch’ha val
                                    notizia</i> ‚die Kenntnis haben‘) sowie die Schreibung
                                &lt;ce&gt; für [tse] in Wörtern wie <i>ôffice</i>, <i>Officiante</i>,
                                <i>accettè</i>, <i>concedér</i> ‚genehmigen‘, <i>cunced</i> ‚genehmigt‘. Im
                                Gegensatz dazu wird für [če] &lt;tse&gt; geschrieben:
                                <i>pitse</i> ‚klein‘, <i>tsafè</i> ‚bekommen‘, <i>unts</i> ‚schmiert‘ (i.e.:
                                besticht), <i>retseü</i> ‚bekommen‘. Norditalienisch ist die
                                einheitliche Wiedergabe von palatalen Sibilanten durch
                                &lt;s(s)&gt;: <i>lassè</i> ‚lassen‘, <i>fes</i> ‚macht‘, <i>persun</i>
                                ‚Gefängnis‘, <i>mais</i> ‚Monate‘, <i>se</i> ‚wenn‘, <i>lassasa unse</i>
                                ‚bestechen ließe‘, <i>gausa</i> ‚Schuld‘, <i>gros</i> ‚Geld‘ usw. Eher
                                auf deutschen Einfluss zurückzuführen ist die Schreibung
                                des Halbkonsonanten [̯i] durch &lt;j&gt;: <i>pajee</i>,
                                <i>justizia</i>. Typisch ladinisch ist hingegen die
                                orthographische Kennzeichnung des postpalatalen
                                Okklusivs, im Auslaut mittels &lt;tg&gt; (dutg), im
                                Anlaut und im Wortinneren hingegen mittels &lt;cḩ&gt;:
                                <i>incḩinamai</i> ‚sogar‘, <i>incḩiamo</i> ‚noch‘, <i>cḩiatè</i> ‚befunden‘,
                                <i>incḩie</i> ‚auch‘. Diese Lösung nimmt jene von Micurà de
                                Rü/Nikolaus Bacher vorweg (vgl. Bacher 1995: 39;
                                Kattenbusch 1994: 68, 122). Eigenständig, wiewohl sehr
                                wahrscheinlich aus dem Französischen übernommen, ist
                                auch die Graphie &lt;œ&gt; für [ö] (<i>plœ</i> ‚mehr‘, <i>cumpedè</i>
                                sœ ‚aufzählen‘ [i.e.: ausbezahlen]). Dieser Laut wird in
                                der frühen gadertalischen Schriftlichkeit recht
                                uneinheitlich wiedergegeben (Catalogus 1760 <i>oe, eu, oe,
                                    eu</i>; Haller 1832 <i>ö</i>; Bacher 1833 <i>oeu, eu</i>; Agreiter 1838 <i>ō</i>,
                                vgl. Kattenbusch 1994: 120). Akzente werden sehr
                                unsystematisch gesetzt, insbesondere auf mehrsilbigen
                                Oxytona (<i>desviè</i> ‚abwenden‘, <i>demenà</i> ‚nur‘, <i>innaò</i> ‚zurück‘
                                vs. <i>sauri</i> ‚leicht‘, <i>cundane</i> ‚verurteilt‘, <i>samine</i>
                                ‚geprüft‘, <i>paje</i> ‚bezahlt‘). Diesbezüglich gibt es
                                zeitgenössische Parallelen, etwa die Akzentsetzung in
                                der <i>Grammatik der Grödner Mundart</i> von Josef David Insam
                                (ca. 1806). Die auffälligste orthographische Lösung ist
                                &lt;æ&gt; für das auslautende [é] der maskulinen
                                Partizipien im Singular der 1. Konjugation (<i>castiæ culla
                                    persun</i> ‚mit Gefängnis bestraft‘, <i>ch’al s’essa meritæ</i>
                                ‚das er verdient hätte‘). &lt;ng&gt; für [ñ] in ngi (<i>ngi
                                    cumpedè sœ</i> ‚aufgezählt werden‘, es handelt sich also um
                                das Hilfswerb <i>gnì</i> ‚kommen‘ [i.e. ‚werden‘]), muss
                                verschrieben sein, da der Text ansonsten &lt;gn&gt;
                                aufweist (<i>sostignì</i> ‚unterstützen‘, <i>gni de dant</i>
                                ‚angezeigt werden‘).
                            </p>
                            <p>
                                Lexikalisch ist der Text, trotz seiner angestrebten juridischen
                                Genauigkeit, nicht übermäßig von Fremdwörtern durchsetzt. Zu diesen
                                gehören vor allem <i>sudito</i> ‚Untertan‘<sup><a href="#fn20" name="fz20">20</a></sup> und <i>lecito</i> ‚erlaubt‘<sup><a href="#fn21" name="fz21">21</a></sup>; <i>regal</i>
                                ‚Geschenk‘ scheint als Fachwort einheimisches <i>scincunda</i> ersetzen zu
                                wollen. Italienisch beeinflusst ist <i>cul istassa speranza</i> ‚mit der
                                gleichen Hoffnung‘ (d.h.: Aussicht auf Belohnung) statt <i>medema
                                    speranza</i> sowie <i>sanza</i> ‚ohne‘ mit [s] statt [ts], das aber im
                                Gadertalischen bis heute latent gegeben ist (vgl. den oben zitierten
                                Titel <i>Janmatî sënza daćiasa</i>, obwohl die Lautung /ts/ im betreffenden
                                Wort als ladinische Charakteristik gilt). Lexikalisch interessant sind
                                vor allem <i>Baira</i>, eine bisher im Ladinischen unbelegte Form für
                                ‚Bayern‘, wohl entstanden aus einer Kreuzung zwischen der deutsch
                                beeinflussten Form <i>Paiern</i> und romanisch <i>Baviera</i>;<sup><a href="#fn22" name="fz22">22</a></sup> das mittlerweile
                                abgegangene <i>perferì, perferass</i> ‚anbieten‘<sup><a href="#fn23" name="fz23">23</a></sup>, das auch in den Statuten
                                von 1631 (<i>lo porte et profiere prima alla signoria</i>) und ca. 1703 (<i>ma
                                    Soperfieri alla Signoria dell Lueg</i>, Ghetta/Plangg 1987: 285, 292)
                                belegt ist; <i>cḩiatè</i> ‚befunden‘ als mittlerweile abgegangene spezifisch
                                kolfuschgerische Form zwischen gadertalisch <i>ciafè</i> (heutige Form laut
                                ALD-II: 1032, so aber bereits in Alton 1879: 170) und grödnerisch
                                <i>giaté</i> sowie das bisher ebenfalls unbelegte <i>demenà</i> ‚nur‘. Als Elemente
                                der administrativen Sprache können <i>Officiante</i> ‚Beamter‘<sup><a href="#fn24" name="fz24">24</a></sup>, <i>côses che
                                    tocca a so ôffice</i> ‚Dienstsachen‘<sup><a href="#fn25" name="fz25">25</a></sup>, <i>valüta de dinà</i> ‚Geldwert‘<sup><a href="#fn26" name="fz26">26</a></sup>, <i>desviè
                                        a fà so obligo</i> ‚von seinen Amtspflichten abwendig machen‘<sup><a href="#fn27" name="fz27">27</a></sup>, <i>segunde
                                            les circunstanzes</i> ‚nach Umständen‘<sup><a href="#fn28" name="fz28">28</a></sup>, <i>coses de justizia</i> ‚Amtssachen‘<sup><a href="#fn29" name="fz29">29</a></sup>,
                                <i>denunzia</i> ‚Anzeige‘<sup><a href="#fn30" name="fz30">30</a></sup> sowie <i>sŏspeziun fundada</i> ‚gegründete Vermutung‘<sup><a href="#fn31" name="fz31">31</a></sup>
                                angesehen werden. Dagegen wird ein Schlüsselwort wie ‚Verbrechen‘
                                etwas umgangssprachlich durch <i>gran fàl</i> ‚großer Fehler‘<sup><a href="#fn32" name="fz32">32</a></sup>
                                wiedergegeben. <i>Bonaman</i>, in der Übersetzung für ‚Belohnung‘ verwendet,
                                bedeutet heute hauptsächlich ‚Trinkgeld‘<sup><a href="#fn33" name="fz33">33</a></sup>. Syntaktische Italianismen
                                sind das Fehlen des partitiven Artikels <i>de</i> in <i>Atres persones</i> sowie die
                                Verwendung des Auxiliars <i>ester</i> ‚sein‘ statt <i>gnì</i> ‚kommen‘
                                [i.e. ‚werden‘] beim Passiv <i>ch’al sii stè unt</i>.
                            </p>

                            <h1>Schlussbetrachtung</h1>
                            <p>
                                Der hier vorgestellte kurze Text bringt für die ladinische
                                Sprachgeschichte einige relevante Bestätigungen. Zum einen ist er ein
                                weiterer Beleg dafür, dass die Ladiner bis ins 19. Jahrhundert hinein
                                im Wesentlichen monolingual waren und deswegen Anordnungen der deutschen
                                Obrigkeit ins Ladinische übersetzt werden mussten, um vom Volk
                                verstanden zu werden (vgl. Belardi 1991). Zum anderen ist der Text ein
                                Beweis dafür, dass auch Sachverhalte außerhalb der traditionellen
                                bäuerlich-handwerklichen Bereiche im Ladinischen angemessen
                                wiedergegeben werden konnten, was zumindest vermuten lässt, dass das
                                Register des „administrativen Ladinischen“ im frühen 19.
                                Jahrhundert entwickelter war, als man es heutzutage annehmen würde.
                            </p>


                            <h1>Anmerkungen</h1>
                            <p className="annotation"><sup><a href="#fz1" name="fn1">1</a></sup>
                                Im Gegensatz dazu gibt es z.B. von <i>Asterix</i> nicht nur einzelne Hefte auf
                                Bündnerromanisch (vgl. <i>Asterix ed ils Helvets</i>, Cuira 1984; <i>Asterix en
                                    l’America</i>, Cuira 1994; 2005 DVD), sondern auch eines im deutschen
                                Dialekt Südtirols (vgl. <i>Asterix ba d’r Naja</i>, Ehapa Verlag Berlin
                                2002, Übersetzer: Günter Heidegger). In diese Kategorie von
                                Übersetzungen fallen aber die ladinischen Übersetzungen von <i>Max und
                                    Moritz</i> von Wilhelm Busch: gad. <i>Pire y Paul</i>, trad. Giuvani Pescollderungg
                                1977, grd. <i>Max y Moriz</i>, trad. Erica Senoner 1984.
                            </p>
                            <p className="annotation"><sup><a href="#fz2" name="fn2">2</a></sup>
                                Bei den „<i>6 kleinen Erzählungen</i>“ (Volksanekdoten auf Grödnerisch
                                mit italienischer und deutscher Übersetzung), die in Steiner (1807:
                                45–49) abgedruckt sind, könnte es sich ebenfalls um Übersetzungen
                                bzw. Adaptationen von Matthäus Ploner (1770–1845) handeln.
                            </p>
                            <p className="annotation"><sup><a href="#fz3" name="fn3">3</a></sup>
                                Die Geschichte der Hl. Genoveva des schwäbischen Kanonikus Christoph
                                Schmid (1768–1854) wurde in zahlreiche andere Sprachen übersetzt,
                                u.a. auch ins Bündnerromanische (Surselvisch): <i>Veta de st. Gienoveva: ina dellas
                                    pli bialas e muentontas historias dell’antiquitat/componida da
                                    Christoph Schmid; transl. ell ramonsch entras [Gion Evangelist Riedi]</i>.
                                Nossadunnanun: Benziger 1837. Dekan Declara hatte bereits 1862 die
                                Herausgabe eines ersten rein ladinischen Buches geplant, das ebenfalls
                                eine Übersetzung gewesen wäre: <i>Vita dla santa fancella Notburga da
                                    Rottenburg. In gausiung de sua canonisaziung scritta da n’g Pastor
                                    d’animes dla Diocese da Porsenù. Traduziung dall’original todeisc
                                    cun na ingjunta […] fatta da ng Sazerdote dl Decanato de Marò […]</i>.
                                Es ist aber Manuskript geblieben, obwohl das Titelblatt vorsah:
                                <i>Porsenù: Stampa dl Wegher 1862</i>. Das religiöse Schrifttum hat auch nach
                                der Zäsur der beiden Weltkriege wieder die ersten Übersetzungen ins
                                Ladinische hervorgebracht: Johannes Baur: <i>P. Joseph Freinademetz SVD</i>,
                                gad. <i>La vita dl servo d Dì Usöp Freinademèz</i>, trad. Anton Pizzinini
                                1950; Jakob Reimer: <i>Christus, dramatische Dichtung</i>, gad. <i>La Redenziun.
                                    Passiun de nosc Signur in 5 actc</i>, schöpferische Nachdichtung von
                                Alexius Baldissera 1960.
                            </p>
                            <p className="annotation"><sup><a href="#fz4" name="fn4">4</a></sup>
                                Aus den Angaben Altons (1885: 88–94) lassen sich aber die
                                Ausgangsversionen ermitteln: das Gedicht <i>Oh bona vérgin, r’gína
                                    imacoláta</i> aus Mätzner (1853: 66: <i>Douce vierge, roine, nete et pure</i>);
                                <i>Di, quël bèl jon qui mai vèl mo?</i> aus Flugi (1873: 82: <i>Chi me ais que
                                    famailg</i>), <i>Bëgn sovënz e própi bèla sòla</i> und <i>Dórmes chamó? Láva,
                                        descëdet’ na òta</i> aus Burtin (1870: 224: <i>Souvent sur la montagne, à
                                            l’ombre du vieux chêne</i>; 276: <i>«Dors-tu…?» Réveille-toi, mère de
                                                notre mère</i>).
                            </p>
                            <p className="annotation"><sup><a href="#fz5" name="fn5">5</a></sup>
                                Diese wurden in der Serie „Teater“ veröffentlicht: Georg Stöger-Ostin:
                                <i>Das letzte Spiel</i>, gad. <i>L’ultimo jüch</i>, trad. Maria Tolpeit, grd. <i>L
                                    ultimo juech</i>, trad. Franz Moroder 1993; Alois Gfall: <i>’s Hexenstückl</i>,
                                grd. <i>L liber dai striunëc</i>, trad. Franz Moroder 1983; Toni Gerlin,
                                Anton Maly: <i>Der ewige Spitzbua</i>, gad. <i>Le maradët</i>, trad. Iustina
                                Willeit 1984; Max Tribus: <i>Das Mädchen von Spinges</i>, gad. <i>La möta da
                                    Spinges</i>, trad. Lydia Zingerle 1984; Schönherr, Karl: <i>Erde</i>,
                                grd. <i>Tiëra</i>, trad. Johann Moroder 1985; Walfried Ridi: <i>Der
                                    Verlegenheitsbrief</i>, grd. <i>Na lëtra che mët sotsëura</i>, trad. Johann
                                Moroder 1986; Christoph von Schmid: <i>Die Geschichte der Heiligen
                                    Genovefa</i>, gad. <i>Genofefa</i>, trad. Tolpeit Maria 1992; weiters: Igor
                                Strawinsky: <i>Histoire du Soldat</i>, grd. <i>Storia dl Saudé</i>, trad. Ulrike
                                Kostner 1995.
                            </p>
                            <p className="annotation"><sup><a href="#fz6" name="fn6">6</a></sup>
                                Maria Veronika Rubatscher: <i>Altgrödner Geschichten</i>, grd. <i>Vedla stories
                                    de Gherdëina</i>; <i>Der Lusenberger. Ein Künstlerleben</i>, grd.
                                <i>Bera Śepl da Jumbierch</i>, trad. Elsa Runggaldier 1981; 1992; Maria Luise
                                Maurer: <i>Der Krautwalsche</i>, gad. <i>Janmatî sënza daćiasa</i>, trad. Lejio
                                Lezuo/Giuvani Pescollderungg 1990. Maria Luise Maurer publizierte 1987
                                und 1990 die beiden Bücher <i>Dolasila</i> und <i>Dolomites</i> mit Gedichten, die
                                sie in mehrere ladinische Idiome übersetzen ließ.
                            </p>
                            <p className="annotation"><sup><a href="#fz7" name="fn7">7</a></sup>
                                In das Ladinische des Fassatals übersetzte Theaterstücke sind Anton
                                Tschechow: <i>Der Heiratsantrag</i>, fass. <i>Veste me maridèr?</i>, trad. Stefen
                                Dell’Antonio Monech 1993; Ernst Raupach: <i>Der Müller und sein Kind</i>,
                                fass. <i>El Moliné e sia fia</i>, trad. Giovanni Battista Costa 2006 u.a.m.
                            </p>
                            <p className="annotation"><sup><a href="#fz8" name="fn8">8</a></sup>
                                Den Beginn machte die Übersetzung des <i>Petit Prince</i> von Antoine
                                Saint-Exupery (gad. <i>Le Pice Prinz</i>, trad. Giovanni Mischì 1993, grd. <i>L
                                    Pitl Prinz</i>, trad. Prinoth Beatrix 1993, fass. <i>L Pìcol Prinz</i>,
                                Manuskript), es folgten <i>A Christmas Carol</i> von Charles Dickens (gad. <i>Na
                                    ćiantia da Nadè</i>, trad. Werner Pescosta 1997); <i>The Call of the Wild</i> von
                                Jack London, fass. <i>L chiam del bosch</i>, trad. Riccardo Zanoner Zigher
                                1998; <i>Berger sans étoile</i> von Jean-Pierre Rochat, fass. <i>Paster zenza
                                    steile</i>, trad. Gabriela Pederiva 1998; <i>Jonathan Livingston Seagull</i> von
                                Richard Bach (gad. <i>Le gabian Jonathan Livingston</i>, trad. Max Castlunger
                                2000); <i>Historia de una gaviota y del gato que le enseño a volar</i> von
                                Luis Sepúlveda (gad. <i>Storia de na gabiana y de n iat che ti à insegné
                                    da jorè</i>, trad. Werner Pescosta 2001; grd. <i>Cuntia de na gabiana y de n
                                        giat che ti à nsenià da julé</i>, trad. Gudrun Mussner 2001, fass. <i>Storia
                                            de na gabianela e del giat che ge à ensegnà a sgolèr</i>, trad. Vigile
                                Iori, Manuskript), <i>Animal Farm</i> von George Orwell (<i>Le lüch di tiers</i>,
                                trad. Max Castlunger 2004), <i>A Pál utcai fiúk</i> von Ferenc Molnár (gad.
                                <i>I jogn dla strada Paul</i>, trad. Pablo Palfrader 2006). Epochen- und
                                stilübergreifend sind <i>Menizles. Tradujedes de poesies curtes o pertes
                                    de poesies de n puë’ dut i stii y tempes</i> (Urtijëi 1999) von Frida
                                Piazza mit Übersetzungen ins Grödnerische von 149 international
                                bekannten Autoren.
                            </p>
                            <p className="annotation"><sup><a href="#fz9"
                                name="fn9">9</a></sup>
                                Dies ersieht man insbesondere an Parallelübersetzungen des
                                gleichen Werkes in mehrere Idiome, die sprachlich teilweise stark
                                divergieren. Als ein Beispiel sei der erste Absatz der gadertalischen
                                und der grödnerischen Übersetzung der <i>Historia de una gaviota y del
                                    gato que le enseño a volar</i> analysiert, die beide von der gleichen
                                Institution herausgegeben wurden. Gadertalisch: <i>„Cajö él n tlap de
                                    sardines!“ â anunzié le gabian pilot y la schira de vicì dl faro
                                    Saorun Cöce gracedâ dala contentëza da avëi aldì la notizia. Al ê
                                    bele sis ores che i gabians jorâ zënza palsè y, scebëgn che i
                                    gabians piloć i â menè tres raiuns de aria ćialda fora, che al ê n
                                    plajëi da se lascè portè dal’aria sura l’ozeann, sintii le
                                    bojëgn de rové indô pro forzes, y porchël n’êl nia de miù co n
                                    bun past de sardines.</i> / Grödnerisch: <i>„Cajù iel na tlapeda de
                                        sardines!“ anunziova l gabian cundutëur y la turba de uciei dla
                                        Torlintierna Sablon Cueciun gracenova dala cuntentëza a audì la
                                        nutizia. L fova bele sies ëura che i gabians julova zënza paussé y,
                                        scebën che i gabians piloc i ova menei per raions de aria ciauda che l
                                        fova n plajëi se lascé purté dal’aria sëura l ozeann, sentivi l
                                        bujën de ruvé inò pra forzes, y perchël nia de miëur che n bon
                                        cëif de sardines.</i> Die kurze Passage enthält unterschiedliche
                                Neologismen (<i>tlap/tlapeda de sardines</i> ‚Sardinenschwarm‘, <i>gabian
                                    pilot/gabian cundutëur</i> ‚Leitmöve‘, <i>faro/Torlintierna</i>
                                ‚Leuchtturm‘) sowie eine unterschiedliche Pronominal- (<i>y porchël
                                    n’êl nia de miù/y perchël nia de miëur</i>) und Temporalsyntax (<i>â
                                        anunzié/anunziova</i> [Plusquamperfekt/Imperfekt]).
                            </p>
                            <p className="annotation"><sup><a href="#fz10" name="fn10">10</a></sup>
                                Zur Sprache Frida Piazzas vgl. Belardi (1988: 5–14); zur Würdigung
                                von Craffonaras Übersetzungen vgl. Valentini (2003). Craffonara ist
                                nicht der erste Übersetzer bündnerromanischer Literatur ins
                                Dolomitenladinische (vgl. Craffonara 2003: 15). Das bisher
                                erfolgreichste Beispiel ist die Übertragung des engadinischen Liedes <i>A
                                    la lingua materna [Chara lingua dalla mamma]</i> von Gaudenz Barblan
                                (1860–1916) in das Ladinische des Gadertals durch Alexius Baldissera
                                (1895–1974), die als <i>Bel lingaz dla uma cara</i> mittlerweile zur „Inn
                                ladin“ (Ladinische Hymne) geworden ist. Zwei weitere neuere
                                Übersetzungen aus dem Bündnerromanischen sind Theo Candinas: <i>Historias
                                    da Gion Barlac</i>, grd. <i>Stories de Giuani da Bula</i>, trad. Rut Bernardi 1993
                                sowie Cla Biert: <i>Il descendent</i>, gad. <i>Le descendënt</i>, trad. Erna Flöss
                                1995; 2002.
                            </p>
                            <p className="annotation"><sup><a href="#fz11" name="fn11">11</a></sup>
                                Wir zählen die administrativen Übersetzungen zu den fachsprachlichen
                                Übersetzungen ins Dolomitenladinische, als deren frühestes
                                einschlägiges Beispiel, d.h. außerhalb des religiösen Schrifttums,
                                die <i>Instruziung d’agricultura de J. Samek, straportada nel Lading da
                                    C. Tammers</i> 1895 gilt.
                            </p>
                            <p className="annotation"><sup><a href="#fz12" name="fn12">12</a></sup>
                                Dieses „Proclama“ wird in der Fachliteratur üblicherweise mit
                                „1703“ datiert (vgl. Ghetta/Plangg 1987 passim), obwohl im Text
                                selbst eine Datumsangabe fehlt. Aufgrund der genannten Personen kann
                                jedoch ein Entstehungszeitraum zwischen 1703 und 1710 ermittelt werden.
                            </p>
                            <p className="annotation"><sup><a href="#fz13" name="fn13">13</a></sup>
                                Gemeinsame deutsche Vorlagen, die ihrerseits in den Kanzleien tradiert
                                wurden, erklären wohl auch die Ähnlichkeit gewisser Formulierungen in
                                den beiden ladinischen Texten, die mehr als sieben Jahrzehnte
                                auseinanderliegen, insbesondere der Einleitungs- und der Schlussformeln
                                (vgl. Belardi 1991: 156f., 166f.; Ghetta/Plangg 1987: 289).
                            </p>
                            <p className="annotation"><sup><a href="#fz14" name="fn14">14</a></sup>
                                Das Schriftstück wurde im Rahmen eines Projekts zur Inventarisierung
                                der Pfarrarchive des Gadertals (Leitung: Dr. Bruno Klammer) von Dr.
                                Gerda Videsott und Dr. Philipp Tolloi ausfindig gemacht, die uns
                                freundlicherweise darauf hingewiesen haben, wofür ihnen herzlich
                                gedankt sei.
                            </p>
                            <p className="annotation"><sup><a href="#fz15" name="fn15">15</a></sup>
                                Wie in anderen unserer Arbeiten (vgl. Bernardi/Videsott 2010; 2011)
                                beschränkt sich die moderne Umschrift auf die Ersetzung heute nicht
                                mehr üblicher Graphien sowie auf die Anpassung der Interpunktion;
                                Phonetik, Morphologie und Syntax bleiben aber unverändert.
                            </p>
                            <p className="annotation"><sup><a href="#fz16" name="fn16">16</a></sup>
                                Die Orthographie mit &lt;s&gt; ist insofern kohärent, als das Wort in
                                Calfosch/Kolfuschg effektiv mit [z] ausgesprochen wird, vgl. ALD-I, 197.
                            </p>
                            <p className="annotation"><sup><a href="#fz17" name="fn17">17</a></sup>
                                Die Verwendung der Kirchenkanzel für die Verlautbarung staatlicher
                                Verordnungen ist in der Aufklärung üblich.
                            </p>
                            <p className="annotation"><sup><a href="#fz18" name="fn18">18</a></sup>
                                Dabei ist jedoch in der dritten Bestimmung ein ganzer Satz unübersetzt
                                geblieben: <i>Denn jeder Beamte ist, bey eigener Verantwortlichkeit und
                                    Strafe schuldig, jeden, der ihm solche Vortheile anbietet, bey Gericht
                                    anzuzeigen.</i>
                            </p>
                            <p className="annotation"><sup><a href="#fz19" name="fn19">19</a></sup>
                                Vgl. Wolfsgruber (1971: 51). Zu seiner Biographie vgl.
                                Palla/Canins/Dapunt (2010: 116): Jan Matteo Costadedoi wurde am 4.
                                Jänner 1763 zu Costadedoi in S. Ćiascian/St. Kassian geboren. Er
                                erhielt 1791 die Priesterweihe. Bis 1798 war er Kaplan in La Val/Wengen,
                                bis 1800 in Santa Cristina/St. Christina in Gröden und bis 1801 wieder
                                in Badia/Abtei. Anschließend wurde er bis 1803 Benefiziat in Ornela in
                                Buchenstein und war vom 02.06.1803 bis 1818 Kurat in Calfosch/Kolfuschg,
                                wo er am 10. Februar 1818 starb.
                            </p>
                            <p className="annotation"><sup><a href="#fz20" name="fn20">20</a></sup>
                                Mischì (2000: 702) bringt für ‚Untertan‘ <i>sotmetü</i>, Forni (2002:
                                458) <i>sotmetù</i>; den anderen ladinischen Wörterbüchern fehlt das Wort.
                            </p>
                            <p className="annotation"><sup><a href="#fz21" name="fn21">21</a></sup>
                                Mischì (2000: 279) und Forni (2002: 145) bringen für erlauben v.a.
                                <i>conzede(r)</i> und <i>pormëte(r)</i>; DILF (1999: 167), Comitato (1997: 275) und
                                Masarei (2005: 599) haben aber <i>lèzit(o)</i>.
                            </p>
                            <p className="annotation"><sup><a href="#fz22" name="fn22">22</a></sup>
                                Das Manuskript der Insam-Grammatik von 1806 (vgl. Videsott 2009) hat
                                auf Seite 34 <i>La Baviera</i>. Mischì (2000: 139): <i>Paiern, Poar</i>; Forni (2002:
                                59) <i>Paiern</i>; in DILF (1999), Masarei (2005) und Comitato (1997) fehlt das
                                Wort.
                            </p>
                            <p className="annotation"><sup><a href="#fz23" name="fn23">23</a></sup>
                                Heute in den nördlichen Tälern durch <i>pité</i> ersetzt.
                            </p>
                            <p className="annotation"><sup><a href="#fz24" name="fn24">24</a></sup>

                                Mischì (2000: 140): <i>impiegat, funzionar, ofizial publich</i>; Forni (2002:
                                59): <i>mpiegà, mpiegat, peomter, funziuner</i>; DILF (1999: 142): <i>impiegat</i>;
                                Masarei (2005: 587) <i>impiegat, mpiegat, scrivàn</i>; Comitato (1997: 235):
                                <i>scrivan, scritural, jaibar, diornista</i>.
                            </p>
                            <p className="annotation"><sup><a href="#fz25" name="fn25">25</a></sup>
                                Mischì (2000: 221): <i>chestiun de laûr, materia d’ofize</i>; das Wort
                                fehlt in Forni (2002).
                            </p>
                            <p className="annotation"><sup><a href="#fz26" name="fn26">26</a></sup>
                                Mischì (2000: 341): <i>valüta di scioldi, valur monetar</i>; Forni (2002:
                                188): <i>valuta di scioldi, valor di scioldi</i>.
                            </p>
                            <p className="annotation"><sup><a href="#fz27" name="fn27">27</a></sup>
                                Mischì (2000: 70): <i>dovëi d’ofize</i>; in Forni (2002) fehlt das Wort.
                            </p>
                            <p className="annotation"><sup><a href="#fz28" name="fn28">28</a></sup>
                                Mischì (2000: 689): <i>zircostanza</i>; Forni (2002: 447): <i>cundizion</i>.
                            </p>
                            <p className="annotation"><sup><a href="#fz29" name="fn29">29</a></sup>
                                Das Wort fehlt sowohl in Mischì (2000) als auch in Forni (2002).
                            </p>
                            <p className="annotation"><sup><a href="#fz30" name="fn30">30</a></sup>
                                Mischì (2000: 89) bringt das Wort; Forni (2002: 29) hat nur <i>plura</i>.
                            </p>
                            <p className="annotation"><sup><a href="#fz31" name="fn31">31</a></sup>
                                Mischì (2000: 721) <i>suposizion, ipotesa, sospet</i>; Forni (2002: 474):
                                <i>mineda, suspet, suposizion</i>.
                            </p>
                            <p className="annotation"><sup><a href="#fz32" name="fn32">32</a></sup>
                                Mischì (2000: 710): <i>malfat, delit</i>; Forni (2002: 464): <i>delit</i>.
                            </p>
                            <p className="annotation"><sup><a href="#fz33" name="fn33">33</a></sup>
                                Gelungen, da mit ladinischen Formen und gut verständlich, erscheint
                                uns die Übersetzung von Angehörige mit <i>i sü</i> (Mischì 2000: 75 <i>parënć</i>;
                                Forni 2002: 21 <i>parënc</i>).
                            </p>


                            <h1>Literatur</h1>
                            <p className="bibl">
                                ALD-I = Goebl, Hans; Bauer, Roland; Haimerl, Edgar (1998): <i>ALD-I: Atlant
                                    linguistich dl ladin dolomitich y di dialec vejins, 1ª pert/Atlante
                                    linguistico del ladino dolomitico e dei dialetti limitrofi, 1ª
                                    parte/Sprachatlas des Dolomitenladinischen und angrenzender Dialekte, 1.
                                    Teil</i>, Wiesbaden.
                            </p>

                            <p className="bibl">
                                Alton, Johann B. (1879): <i>Die ladinischen Idiome in Ladinien, Gröden,
                                    Fassa, Buchenstein, Ampezzo</i>, Innsbruck.
                            </p>

                            <p className="bibl">
                                Bacher, Nikolaus (Micurà de Rü) (1995): Versuch einer
                                deütsch-ladinischen Sprachlehre. Herausgegeben und mit Anmerkungen
                                versehen von Lois Craffonara, in: <i>Ladinia</i> 19, 1–304.
                            </p>

                            <p className="bibl">
                                Belardi, Walter (1988): <i>Narrativa Gardenese</i>. Roma/Ortisei.
                            </p>

                            <p className="bibl">
                                – (1991): <i>Storia sociolinguistica della lingua ladina</i>.
                                Roma/Corvara/Sëlva.
                            </p>

                            <p className="bibl">
                                Bernardi, Rut/Videsott, Paul (2010): Jan Francësch Pezzei
                                (1765–1819). Ein Buchensteiner als Autor der ersten Gadertaler Verse?, in: <i>Ladinia</i> 34, 187–204.
                            </p>

                            <p className="bibl">
                                –/– (2011): Frühe ladinische Texte aus
                                Col/Colle Santa Lucia, in: <i>Ladinia</i> 35 (im Druck).
                            </p>

                            <p className="bibl">
                                Böhmer, Eduard (1878): Grednerisches, in: <i>Romanische Studien</i> 3,
                                85–92.
                            </p>

                            <p className="bibl">
                                Burtin, E. (1870): <i>Choix de poésies des dix-septième, dix-huitième et
                                    dix-neuvième siècles avec notices biographiques et notes – à
                                    l’usage des établissements d’instruction</i>, Berlin.
                            </p>

                            <p className="bibl">
                                Comitato del Vocabolario delle Regole d’Ampezzo (1997): <i>Vocabolario
                                    Italiano–Ampezzano</i>, Cortina d’Ampezzo.
                            </p>

                            <p className="bibl">
                                Craffonara, Lois (1999): N valgönes flus leterares dal Piemunt al
                                Grijun y al Friûl, in: <i>Ladinia</i> 23, 305–364.
                            </p>

                            <p className="bibl">
                                – (2003): <i>Flus leterares dl Grijun y dl Friûl</i>, San
                                Martin de Tor.
                            </p>

                            <p className="bibl">
                                – (2008): <i>Flus leterares dl Grijun y dl Friûl. Injunta
                                    al’ediziun dl 2003</i>. Bornech.
                            </p>

                            <p className="bibl">
                                Dahmen, Wolfgang (2006): Art. 119c: Übersetzen und Sprachgeschichte:
                                Übersetzungen ins Bündnerromanische/Traduction et histoire des
                                langues: traductions en romanche, in: Gerhard Ernst et al.(Hg.):
                                <i>Romanische Sprachgeschichte. Ein internationales Handbuch zur Geschichte
                                    der romanischen Sprachen/Histoire linguistique de la Romania. Manuel
                                    international d’histoire linguistique de la Romania,</i> 2. Teilband/Tome
                                2, Berlin/New York, 1367–1372.
                            </p>

                            <p className="bibl">
                                Dapoz, Felix (1982): <i>In banun</i>, San Martin de Tor.
                            </p>

                            <p className="bibl">
                                DILF = Istitut Cultural Ladin «Majon di Fascegn»; SPELL (1999): <i>DILF.
                                    Dizionario Italiano–Ladino fassano con indice ladino–italiano/Dizionèr
                                    talian–ladin fascian con indesc ladin–talian</i>, Vich/Vigo di Fassa.
                            </p>

                            <p className="bibl">
                                Faggin, Giorgio (2006): Art. 119a: Traduzione e storia della lingua:
                                traduzioni in friulano/Übersetzen und Sprachgeschichte: Übersetzungen
                                ins Friaulische, in: Gerhard Ernst et al. (Hg.): <i>Romanische Sprachgeschichte. Ein
                                    internationales Handbuch zur Geschichte der romanischen
                                    Sprachen/Histoire linguistique de la Romania. Manuel international
                                    d’histoire linguistique de la Romania</i>, 2. Teilband/Tome 2, Berlin/New
                                York, 1362–1365.
                            </p>

                            <p className="bibl">
                                Flugi, Alfons von (1873): <i>Die Volkslieder des Engadin, nebst einem
                                    Anhange engadinischer Volkslieder im Original und in deutscher
                                    Übersetzung</i>, Strassburg.
                            </p>

                            <p className="bibl">
                                Forni, Marco (2002): <i>Wörterbuch Deutsch–Grödner-Ladinisch. Vocabuler
                                    Tudësch–Ladin de Gherdëina</i>, San Martin de Tor.
                            </p>

                            <p className="bibl">
                                Ghetta, Frumenzio/Plangg, Guntram A. (1987): Un proclama ladino del
                                1631 e testi vicini, in: <i>Mondo Ladino</i> 11, 287–293.
                            </p>

                            <p className="bibl">
                                Kattenbusch, Dieter (1994): Die Verschriftung des Sellaladinischen. Von
                                den ersten Schreibversuchen bis zur Einheitsgraphie. San Martin de Tor.
                            </p>

                            <p className="bibl">
                                – (2006): Art. 119b: Übersetzen und Sprachgeschichte:
                                Übersetzungen ins Dolomitenladinische/Traduction et histoire des
                                langues: traductions en ladin, in: Gerhard Ernst et al. (Hg.): <i>Romanische Sprachgeschichte. Ein
                                    internationales Handbuch zur Geschichte der romanischen
                                    Sprachen/Histoire linguistique de la Romania. Manuel international
                                    d’histoire linguistique de la Romania</i>, 2. Teilband/Tome 2, Berlin/New
                                York, 1365-1367.
                            </p>

                            <p className="bibl">
                                Masarei, Sergio (2005): <i>Dizionar Fodom–Talián–Todësch/Dizionario
                                    Ladino Fodom–Italiano–Tedesco/Wörterbuch Fodom
                                    (Buchensteiner-Ladinisch)–Italienisch–Deutsch</i>, Colle Santa Lucia.
                            </p>

                            <p className="bibl">
                                Mätzner, Eduard (1853): <i>Altfranzösische Lieder. Berichtigt und
                                    erläutert mit Bezugnahme auf die provenzalische, altitalienische und
                                    mittelhochdeutsche Liederdichtung</i>, Berlin.
                            </p>

                            <p className="bibl">
                                Mischì, Giovanni (2000): <i>Wörterbuch Deutsch–Gadertalisch/Vocabolar
                                    Todësch–Ladin (Val Badia)</i>, San Martin de Tor.
                            </p>

                            <p className="bibl">
                                Palla, Santo/Canins, Franz/Dapunt, Angel (2010): <i>La cöra d’animes
                                    tla Val Badia y sü proi (dal 1100 al 2000) trascrit dal todësch tl
                                    ladin cun adatamënć y injuntes da Franz Vittur</i>, San Martin de Tor.
                            </p>

                            <p className="bibl">
                                Suani, Carlo (2009): <i>L’opera poetica di Felix Dapoz</i>, Balsan.
                            </p>

                            <p className="bibl">
                                Vittur, Franz (Hg.) (1967): <i>Flus de munt. Liber da lì pur les scoles dla
                                    Val Badia</i>, Porsenù.
                            </p>

                            <p className="bibl">
                                Valentini, Erwin (2003): Rez. zu Craffonara 2003, in: <i>Mondo Ladino</i> 27,
                                346–355.
                            </p>

                            <p className="bibl">
                                Videsott, Paul (2009): Na (re)descorida emportanta per la storia dl
                                ladin: la pruma gramatica ladina, in: <i>Usc di Ladins</i> 38 (3.10.09), 6f.
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

export default VidesottBernardi;