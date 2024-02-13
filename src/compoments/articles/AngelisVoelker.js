import angelisPortrait from '../../images/angelisvoelker/de-angelis-portrait.jpg';
import voelkerPortrait from '../../images/angelisvoelker/voelker-portrait.jpg';
import parabolaImage from '../../images/angelisvoelker/parabola-avezzanese.jpg';
import angelisVoelkerMp4 from '../../videos/hvoelker/parabola_avezzano.mp4';
import angelisVoelkerWebm from '../../videos/hvoelker/parabola_avezzano.webm';
import angelisVoelkerOgv from '../../videos/hvoelker/parabola_avezzano.ogv';
import Footer from '../Footer';
import Rubrik from '../Rubrik';
import Header from '../Header';
import UpArrow from '../UpArrow';

function AngelisVoelker(props) {

    return (
        <div id="Wrapper" className="container_14">
            <div id="Header">
                <Header id={props.author} />
                <div className="grid_9">
                    <h1 id="main_title">VIVALDI zu Besuch in der Familie</h1>
                    <p id="author">Barbara De Angelis und Harald Völker, Zürich</p>
                </div>
                <Rubrik />
            </div>

            <div id="Teasers" className="clearfix">
                <div className="grid_9">
                    {/* <!-- erster Abschnitt hier einfuegen --> */}
                    <p>
                        Wer wie die beiden Herausgeber und der mit dieser Festschrift Geehrte in
                        Sachen Dialektaufnahmen herumgekommen ist, für den hat es keinen
                        besonderen Neuigkeitswert, dass sich Dialektaufnahmen zu familiären
                        Großereignissen auswachsen können, bei denen nicht nur gut gegessen
                        und getrunken, sondern auch heftig über Wörter, Lautungen,
                        Konjugationen und Ausdrucksweisen gestritten wird. Das, was am Ende in
                        der wissenschaftlichen Dokumentation publiziert wird, ist nur ein Teil
                        dessen, was während und am Rande einer Dialektaufnahme passiert.
                    </p>
                    <p>
                        So gibt es zum Beispiel zu jeder Dialektaufnahme eine Vorgeschichte, die
                        erklärt, warum zu einem bestimmten Zeitpunkt an einem bestimmten Ort
                        ein Mensch mit Fragebogen auf eine auskunftswillige Person trifft. Im
                        vorliegenden Fall fängt diese Vorgeschichte im Jahr 2000 an, als einer
                        der beiden Autoren dieses Beitrags eine Stelle am Institut für
                        Romanistik der Humboldt-Universität zu Berlin antritt und in den
                        nachfolgenden Jahren Dieter Kattenbusch kennen und schätzen lernt. Der
                        andere Teil der Autorenschaft besucht bei Dieter Kattenbusch im
                        Wintersemester 2001/2002 als Gasthörerin die <i>Einführung in die
                            italienische Sprachwissenschaft</i>. Zu diesem Zeitpunkt kamen sich die
                        Biographien der beiden Autoren bereits gefährlich nahe, kreuzten sich
                        aber noch nicht. Erst im August 2004 begegneten sie sich auf einer
                        Berliner Dachterrassenparty in der Großen Präsidentenstraße, und im
                        August 2005 wurde aus dieser Begegnung eine italienisch-deutsche Ehe.
                    </p>
                    <p>
                        Als uns die E-Mail zum Festschriftprojekt erreichte, war unsere erste
                        Idee ein kulinarisches Videoprojekt, bei dem noch eine dritte Person
                        beteiligt werden sollte, um z.B. mit der Kamera zu dokumentieren, dass
                        es möglich ist, in Rom die Zutaten für einen Rheinischen Sauerbraten
                        oder Nürnberger Elisenlebkuchen zu besorgen und wie nahe man mit der
                        Zubereitung dem Original kommen kann. Die dritte Person wäre die
                        Cousine der Erstautorin gewesen, die es vor gut einem Jahr u.a. dem
                        Engagement des Geehrten zu verdanken hatte, dass ihr Erasmusaufenthalt
                        an der Humboldt-Universität zu Berlin nicht schon nach wenigen Tagen an
                        für mediterrane Gemüter kaum nachvollziehbaren administrativen Hürden
                        gescheitert ist. Sie hätte Erfahrung gehabt in der filmischen
                        Aufbereitung von Speisen und Gebäck. Dieses Videoprojekt kam wegen
                        jeweils knapper Divergenzen im römisch-helvetisch-berlinerischen
                        Zeit-Raum-Kontinuum leider nicht zustande.
                    </p>
                </div>

                <div className="grid_5">
                    <div className="abouttheauthor">
                        {/* <!-- Authorbild --> */}
                        <img src={angelisPortrait} width="100" height="150"
                            alt="Barbara De Angelis - Portrait" />
                        <div className="abouttheauthorfont"><br /><br />
                            {/* <!-- Authorbeschreibung (Text) --> */}
                            <b>Barbara De Angelis</b>, Dott.ssa, arbeitet als Onlinetrainerin und
                            Italienischlehrerin u.a. für digital publishing (München) und
                            Lernpodium (Wettingen). 2000 laureata in lingue e letterature straniere
                            e moderne an der Universität „La Sapienza“ in Rom mit Schwerpunkt
                            Deutsche und Italienische Linguistik und Fremdsprachendidaktik, 2000
                            Abschluss der Ausbildung als Lehrerin für Italienisch als Fremdsprache
                            am DILIT International House in Rom, 2009 Erwerb des Zertifikats „Live
                            online Trainer“ der LANCELOT School.<br />
                            {/* <!-- Authorbild --> */}
                            <img src={voelkerPortrait} width="110" height="140"
                                alt="Harald Völker - Portrait" />
                            <div className="abouttheauthorfont"><br /><br />
                                {/* <!-- Authorbeschreibung (Text) --> */}
                                <b>Harald Völker</b>, Dr. phil., Universität Zürich (seit 2009).
                                Verantwortlich für die Linguistiksparte der gemeinsam mit der
                                Pädagogischen Hochschule Zürich organisierten Studiengänge zur
                                Lehrpersonenausbildung Französisch Sekundarstufe 1. 2000–2003
                                Assistent am Institut für Romanistik der Humboldt-Universität zu
                                Berlin.
                            </div>
                            <div className="clearfloat"></div>
                        </div>
                    </div>
                </div>

                <div id="Main">
                    <div id="Articles" className="grid_14">
                        <section id="posts">
                            <article className="post">
                                {/* <!-- Content of the article --> */}
                                <p>
                                    Auf der Suche nach einem Ersatzprojekt kam der Zufall zu Hilfe. Bei der
                                    Vorbereitung der Einstiegssitzung einer Lehrveranstaltung an der
                                    Universität Konstanz zu den italienischen Varietäten erinnerte sich
                                    die zweite Hälfte der Autorenschaft an VIVALDI. Und während der Arbeit
                                    mit den Studierenden wurde klar, dass es in VIVALDI noch ein
                                    Abruzzenloch gibt. Die Idee war geboren, das Nützliche mit dem
                                    Angenehmen zu verbinden und den Besuch der Eltern/Schwiegereltern aus
                                    Avezzano dazu zu nutzen, dieses Loch ein wenig zu stopfen. Die beiden
                                    sprechen <i>avezzanese</i> miteinander – und sie sind damit auch in der
                                    erweiterten Sippe keine Exoten.
                                </p>
                                <p>
                                    Mit VIVALDI zu Gast in der Familie gibt es eine Menge Gesprächsstoff.
                                    Von der ersten misstrauischen Skepsis der Informanten bis hin zu einer
                                    Form von Enthusiasmus und Ehrgeiz ist es dabei ein gar nicht so langer
                                    Weg. An erster Stelle stehen natürlich die Diskussionen darüber <i>come
                                        si dice</i>. So wurde zwischen unseren beiden Informanten lange darüber
                                    diskutiert, ob das Lexem <i>carne</i> (Stimulus 47) auch in der Mundart
                                    existiert oder ob es ausschließlich das Wort <i>ciccia</i> gibt. Der
                                    Schwiegervater war der Meinung, <i>ciccia</i> habe auch in der Mundart eine
                                    Konnotation, die Schwiegermutter hingegen vertrat die Ansicht, <i>ciccia</i>
                                    sei in der Mundart das gängige Wort für ‚Fleisch‘ und <i>carne</i> nur im
                                    Standarditalienischen gebräuchlich. Die Stimuli 100 und 117 waren
                                    ebenfalls Thema einer Debatte darüber, ob die Differenzierung <i>donne</i> vs.
                                    <i>femmine</i> in der Mundart gemacht wird oder ob das Wort <i>donna</i> nicht
                                    ausschließlich der Standardsprache angehört. Auch hier war es die
                                    Schwiegermutter, die meinte, <i>donne</i> existiere in der Mundart gar nicht,
                                    man sage auch in diesem Fall <i>femmene</i>. Dazu kommen sehr lustige Momente
                                    wie im Fall des Stimulus 337 „<i>si munge due volte al giorno</i>“, der
                                    wohl insbesondere auf die Umsetzung der Reflexivkonstruktion in der
                                    Mundart abzielt, der aber zur spontanen Kurzantwort „<i>la mucca</i>“
                                    geführt hat. Wohlgemerkt „<i>la mucca</i>“, was neben herzlichem Lachen
                                    der ganzen Familie eine ausführliche Diskussion darüber zur Folge
                                    hatte, ob die Antwort nicht ohnehin besser „<i>la vacca</i>“ gewesen wäre.
                                    Ähnliches passierte mit Stimulus 234 „<i>il santo [del paese] si chiama
                                        …</i>“, der mit einem knappen „<i>San Bartolommé</i>“ beantwortet wurde.
                                </p>
                                <p>
                                    Zum anderen sorgen die einleitenden Fragen zur Person für
                                    Gesprächsstoff. In unserem Fall haben diese Fragen dazu geführt, dass
                                    eine Reihe von wenig oder nicht bekannten Familienanekdoten und
                                    biographischen Episoden ausführlich besprochen und mit weiterführenden
                                    Fragen belegt wurden: Militärdienst, die Zeit im Internat, die
                                    Ausbildung zur Krankenschwester. Alle für sich Abend füllend und von
                                    großem Interesse für Tochter, Schwiegersohn und die Enkel, und
                                    manchmal sogar für den Ehepartner. Es sind dies Momente von <i>oral
                                        history</i>, die die Familienhistoriographie zu prägen vermögen.
                                    Insbesondere die italienisch-deutschen Enkel können in solchen Momenten
                                    großelterlichen Erzählens wichtige Bausteine für ihre italienische
                                    Identität sammeln.
                                </p>
                                <p>
                                    Wenn VIVALDI für eine gewisse Zeit Teil der Familie wird, so hat dies
                                    darüber hinaus Auswirkungen auf einer dritten Ebene. Sind nämlich die
                                    Informanten in ihrem Leben bislang nicht mit der akademischen Welt in
                                    Berührung gekommen, so ist die Enquête zwangsläufig auch ein
                                    Erstkontakt mit dieser Welt des Hinterfragens und des Ordnens. Denn die
                                    Fragebögen, die wir den Informanten vorlegen, können Neugier und
                                    Gegenfragen auslösen: Warum interessiert sich eigentlich jemand dafür,
                                    wie wir sprechen? Was ist das für ein Buchstabe (phonetisches Zeichen),
                                    den ihr da notiert? Warum ist das Pronomen eigentlich an dieser Stelle
                                    und nicht woanders? Sprichst du ‚reine‘ Mundart oder bist du von der
                                    Standardsprache beeinflusst? Beeindruckt waren wir insbesondere davon,
                                    welchen Ehrgeiz und welche Bewältigungskompetenz das Problem des am
                                    Ende zu erzählenden Gleichnisses auslöste. Denn relativ schnell war
                                    klar, dass ein spontanes Erzählen mit der standarditalienischen Version
                                    als Gedächtnisstütze in der Hand definitiv nicht möglich war. Der
                                    Einfluss der Standardvarietät war durchschlagend und nicht
                                    ausschaltbar. Spontanes Erzählen ohne die Gedächtnisstütze war aber
                                    auch problematisch, denn die Erzählung entfernte sich so regelmäßig
                                    spürbar von der Vorlage, dass uns die VIVALDI-Redakteure die Aufnahme
                                    wohl postwendend zurückgeschickt hätten. Also machten sich die
                                    Schwiegereltern samt Tochter daran, das Gleichnis schriftlich ins
                                    <i>avezzanese</i> zu übersetzen, und dabei wurde an den Sätzen und Wendungen
                                    mit einer solchen Hingabe gefeilt, dass ein Nobelpreiscomité seine
                                    wahre Freude daran gehabt hätte. Die Tochter hat sich vor Erstaunen die
                                    Augen gerieben und Seiten an ihren Eltern entdeckt, die sie so nicht
                                    gekannt hatte.
                                </p>
                                <p>
                                    Wenn also VIVALDI zu Besuch ist am Familientisch, dann kommt also ganz
                                    schön Bewegung in die Soziodynamik der Sippe. Das gilt natürlich in
                                    besonderer Weise für den Fall, dass Enquêteure und Informanten
                                    miteinander verwandt sind. Doch nicht wesentlich anders dürfte es sein,
                                    wenn Familienmitglieder des Informanten bei der Enquête mit dabei sind.
                                </p>
                                <p>
                                    Vor diesem Hintergrund und um im Abruzzenloch ein erstes Fähnchen
                                    einzustecken übergeben wir dieser Festschrift neben diesem kurzen
                                    Kommentar das Rohmaterial zu Avezzano: die Tondateien, die Fragebögen
                                    zu den Informanten und die Übersetzung des Gleichnisses. Wir wünschen
                                    dir, lieber Dieter, damit alles Gute zu deinem Geburtstag und VIVALDI
                                    ein weiterhin gutes Werden und Vorankommen.
                                </p>

                                <div align="center">
                                    <h1><i>La parabola del figliol prodigo</i> in <i>avezzanese</i></h1>
                                    <p></p>

                                    <video poster={parabolaImage} width="640" height="480" controls>
                                        <source src={angelisVoelkerOgv} type="video/ogg" />
                                        <source src={angelisVoelkerWebm} type="video/webm" />
                                        <source src={angelisVoelkerMp4} type="video/mp4" />
                                        <p>Your browser does not support the video tag.</p>
                                    </video>
                                </div>


                            </article>
                        </section>
                    </div>
                </div>
            </div>
            <UpArrow />
            <Footer />
        </div>
    );
}

export default AngelisVoelker;