import Footer from "./Footer";
import Rubrik from "./Rubrik";
import Header from "./Header";

function Geleitwort(props) {
    return (
        <div id="Wrapper" className="container_14">
            <div id="Header">
                <Header id={props.id} />
                <div className="grid_9">
                    <h1 id="main_title">Zum Geleit</h1>
                </div>
                <Rubrik />
            </div>
            <div id="Teasers" className="clearfix">
                <div className="grid_9">
                    <p>
                        Im Januar 2012 wurde der Dialektologe und Minderheitensprachforscher
                        Dieter Kattenbusch sechzig Jahre alt. Ein würdiger Anlass
                        also, ihn mit einer kleinen Sammlung von Beiträgen zu
                        bedenken. Der Jubilar hatte jedoch im Vorfeld verlauten
                        lassen, nicht im Mittelpunkt einer akademischen Festschrift
                        stehen zu wollen. Aus diesem Grund beschlossen wir, seine
                        ehemalige Mitarbeiterin und sein derzeitiger Mitarbeiter, zu
                        einer Hommage einzuladen, die nicht nur den Wissenschaftler,
                        sondern auch den Menschen Dieter Kattenbusch in den Blick
                        nehmen sollte. Ein „diskretes Tatenbuch“ sollte es sein, zu
                        dem wir breit einluden, sowohl was den Adressatenkreis, die
                        zu behandelnden Themen als auch die Form der Beiträge
                        betraf. Über den Kreis der Fachkolleginnen und -kollegen
                        hinaus schrieben wir Menschen an, von denen wir glaubten,
                        dass sie sich Dieter Kattenbusch in irgendeiner Weise
                        verbunden fühlen. Explizit forderten wir dazu auf, neben der
                        wissenschaftlichen auch andere Textsorten zu wählen. Wir
                        hofften, dass viele unserem Aufruf folgen würden und wir so
                        eine große Vielfalt seines Lebens und Werks, ja seines
                        Lebenswerks, abbilden würden können. Angelehnt an letzteres,
                        den digitalen Sprachatlas VIVALDI, hatten wir außerdem
                        beschlossen, die Beiträge nicht in der herkömmlichen Form
                        eines Buches, sondern auf einer CD-ROM zu bündeln, was die
                        formalen Möglichkeiten beträchtlich erweiterte.
                    </p>
                </div>
                <div className="grid_5">

                </div>
            </div>
            <div id="Main">
                <div id="Articles" className="grid_14">
                    <section id="posts">
                        <article className="post">
                            {/* <!-- Content of the article --> */}
                            <p>
                                Unserem Aufruf sind über dreißig Kolleginnen und Kollegen, Freundinnen
                                und Freunde gefolgt. Wenn wir nicht irgendwann aus
                                Termingründen den Sack zugemacht hätten, wären auch noch
                                ein paar andere dazugekommen, deren Name jetzt leider
                                fehlt. Die große Resonanz hat uns sehr erfreut (und, wir
                                wollen es nicht verschweigen, am Ende auch viel Arbeit
                                bereitet), zeigt sie doch die hohe Wertschätzung, die
                                Dieter Kattenbusch in seinem Leben und Wirken
                                entgegengebracht wird. Die Beiträge, die uns erreicht
                                haben, sind sowohl in formaler als auch in inhaltlicher
                                Sicht sehr vielfältig. Von einer kurzen persönlichen
                                Würdigung über längere kulturgeschichtliche Essays oder
                                literarische Erzählungen bis hin zu intensiven
                                wissenschaftlichen Studien ist alles vertreten. Auch
                                thematisch zeigt sich eine große Bandbreite. Wir haben
                                die Beiträge deswegen insgesamt zehn Rubriken
                                zugeordnet. Diese spiegeln folgerichtig nicht nur die
                                Interessengebiete des Jubilars wider (wie z.B. die
                                Rubriken VIVALDI oder Dialekte/Varietäten), sondern sind
                                auch den inhaltlichen Schwerpunkten der Beiträgerinnen
                                und Beiträger geschuldet (wie bei den Rubriken Rumänisch
                                oder Literaturwissenschaft).
                            </p>
                            <p>
                                Als internes Ordnungskriterium diente uns das Alphabet, so dass sich
                                aus der Reihung der Beiträge keinerlei Hierarchie oder anderweitige
                                Wertung ergibt. Die digitale Form der Festschrift erlaubt es darüber
                                hinaus in hervorragender Weise, die Beiträge nicht linear, sondern in
                                einer selbst gewählten Reihenfolge zirkulär zu erschließen. Das Menü
                                am rechten Rand der Beiträge garantiert die jederzeitige Rückkehr zum
                                Inhaltsverzeichnis, in dem die Beiträge in der jeweiligen Rubrik auf
                                einen Blick erfasst werden können, ebenso ist der Zugang über das
                                Verzeichnis der Autorinnen und Autoren möglich.
                            </p>
                            <p>
                                Wir möchten uns herzlich bei allen Freundinnen und Freunden,
                                Kolleginnen und Kollegen bedanken, mit deren Beiträgen
                                wir unsere Idee einer digitalen Festschrift mit Leben
                                füllen konnten. Alle Artikel wurden von uns korrigiert,
                                in HTML gesetzt und erneut korrigiert. Sollten wir trotz
                                aller Sorgfalt Fehler übersehen haben, bitten wir dies
                                zu entschuldigen. Für Anmerkungen oder bei Fragen, für
                                Lob oder Kritik können sie sich jederzeit über die im
                                Impressum angegebenen Kontaktdaten an uns wenden.
                            </p>
                            <p>
                                Und nun wünschen wir Ihnen eine anregende und angeregte Lektüre. Viel
                                Spaß!
                            </p>
                            <p className="quote">
                                Carola Köhler und Fabio Tosques
                            </p>

                        </article>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Geleitwort;