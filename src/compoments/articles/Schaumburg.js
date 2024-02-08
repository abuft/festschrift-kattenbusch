import Footer from "../Footer";
import Header from "../Header";
import Rubrik from "../Rubrik";
import UpArrow from "../UpArrow";
import SchaumburgLaeufer from "../../images/cschaumburg/laeufer.png";
import SchaumburgPortrait from "../../images/cschaumburg/cschaumburg-portrait.jpg";

function Schaumburg(props) {
    return (
        <div>
            <div id="Wrapper" class="container_14">

                <div id="Header">
                    <Header id={props.author} />
                    <div class="grid_9">
                        <h1 id="main_title">Über laufende Forscher</h1>
                        <p id="author">Christophe Schaumburg, Gießen</p>
                    </div>
                    <Rubrik />
                </div>

                <div id="Teasers" class="clearfix">
                    <div class="grid_9">
                        <p>
                            „Stillstand“: Kenne ich kaum, brauche ich nicht.
                        </p>
                        <p>
                            So oder so ähnlich könnte der entsprechende Eintrag im <i>Kleinen
                                Kattenbusch</i>, dem persönlichen Fremdwörterbuch von Prof. Dr. D. K.,
                            lauten.
                        </p>
                        <p>
                            Über Inhalte seiner Arbeit können die Linguisten besser urteilen. Auf
                            jeden Fall trifft bei ihm laufende Forschung auf den laufenden (auch Rad
                            fahrenden) Forscher, der unter allen Witterungsbedingungen, im
                            ungastlichen deutschen Winter genauso wie in subtropischen Gefilden, wo
                            sonst nur der Schweiß läuft,  stets darauf bedacht ist, sein
                            Forscherhirn sportlich mit einer Extraportion Sauerstoff zu versorgen.
                        </p>
                    </div>
                    <div class="grid_5">

                        <div class="abouttheauthor">
                            <img src={SchaumburgPortrait} width="120"
                                height="95" alt="Christophe Schaumburg - Portrait" />
                            <div class="abouttheauthorfont"><br /><br />
                                <b>Christophe Schaumburg</b>,
                                Lektor für Französisch an der
                                Justus-Liebig-Universität in Gießen. Freund von Dieter Kattenbusch.
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
                                    So habe ich ihn bereits bei unserer ersten Begegnung vor ... einer
                                    unwesentlichen Anzahl an Jahren erlebt, und er hat mich dann auch sehr
                                    bald mit dem Laufvirus infiziert – zum Glück in einer milden Form.
                                    Herzlichen Dank dafür!
                                </p>
                                <p>
                                    Frei nach La Fontaine möchte ich ihm zurufen:
                                </p>
                                <p class="quote">
                                    Que faisais-tu cet été?<br />
                                    Tu courais?<br />
                                    Eh bien continue (maintenant).
                                </p>

                                <div align="center">
                                    <figure>
                                        <img src={SchaumburgLaeufer} width="302"
                                            height="352" alt="Laufender Forscher" />
                                        <p style={{ width: "302px" }}>Abb. 1: Laufender Forscher</p>
                                    </figure>
                                </div>
                            </article>
                        </section>
                    </div>
                </div>
                <UpArrow />
                <Footer />
            </div>
        </div>
    )
}

export default Schaumburg;