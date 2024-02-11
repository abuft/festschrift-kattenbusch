import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Inhalt(props) {
    return (
        <div className="grid_10">
            <div id="Wrapper" className="container_10">
                <div id="Header">
                    <Header id={props.id} />
                    <div align="center">
                        <h1 id="main_title">Inhaltsverzeichnis</h1>
                    </div>

                    <h3><a href="#kat1" name="k1">Dialekte/Varietäten</a> | <a href="#kat2" name="k2">Kulturgeschichte</a> | <a href="#kat3" name="k3">Ladinisch/Rätoromanisch</a> | <a href="#kat4" name="k4">Literaturwissenschaft</a> |
                        <a href="#kat5" name="k5">Mehrsprachigkeit</a> | <a href="#kat6" name="k6">Reisen</a> | <a href="#kat7" name="k7">Rumänisch</a> | <a href="#kat8" name="k8">Sport</a> | <a href="#kat9" name="k9">VIVALDI</a> | <a href="#kat10" name="k10">Varia</a>
                    </h3>
                </div>

                <div id="Main">
                    <h2><a href="/geleitwort">Zum Geleit</a> | <a href="/impressum">Impressum</a></h2>

                    <h2><a href="#k1" name="kat1">1</a> Dialekte/Varietäten</h2>

                    <p className="bibl">Roland Bauer: <a href="/bauer">Zur inneren Arealgliederung des Trentino.
                        Eine dialektometrische Nachschau</a></p>
                    <p className="bibl">Gerald Bernhard: <a href="/bernhard">Akzent, Arzneien und andere Schwierigkeiten</a></p>
                    <p className="bibl">Sylvia Setzkorn: <a href="setzkorn-durchfall.html">Die volkstümlichen Bezeichnungen für die Krankheit ‚Durchfall‘ in der Romania
                        – onomasiologische und sprachgeographische Betrachtungen</a></p>
                    <p className="bibl">Thomas Stehl: <a href="stehl-sprachdynamik.html">Sprachdynamik und Variationslinguistik in Italien</a></p>
                    <p className="bibl">Amalia Urbano: <a href="/urbano"><i>Lu Destine</i> di Modesto Della Porta</a></p>

                    <h2><a href="#k2" name="kat2">2</a> Kulturgeschichte</h2>

                    <p className="bibl">Hans Goebl: <a href="/goebl">Kulturwissenschaftliches aus der
                        ALD-Werkstatt: <i>tumulazione</i> versus <i>inumazione</i></a></p>
                    <p className="bibl">Edith Pichler: <a href="/pichler">Vom Gastarbeiter zum <i>(Gast-)Bürger</i>?
                        Italiener in Deutschland – eine Zwischenbilanz</a></p>
                    <p className="bibl">Roberto Ubbidiente: <a href="ubbidiente-caffe.html">“Oro nero” – La cultura del caffè in
                        Italia: usi, costumi, teatro e letteratura</a></p>
                    <p className="bibl">Gherardo Ugolini: <a href="/ugolini">Il primato
                        dell'italiano</a></p>

                    <h2><a href="#k3" name="kat3">3</a> Ladinisch/Rätoromanisch</h2>

                    <p className="bibl">Jean-Jacques Furer: <a href="/furerj">
                        Un dictionnaire français-romanche
                        (sursilvan+): Pourquoi – Comment – Par qui</a></p>
                    <p className="bibl">Paul Videsott/Rut Bernardi: <a href="/videsottBernardi">Eine administrative Übersetzung ins Dolomitenladinische aus
                        dem Jahr 1811</a></p>

                    <h2><a href="#k4" name="kat4">4</a> Literaturwissenschaft</h2>

                    <p className="bibl">Michèle Mattusch: <a href="/mattusch">Dante und die Sprache der Sinne – literaturwissenschaftliche
                        Reflexionen zu Dante Alighieris <i>De vulgari eloquentia</i></a></p>
                    <p className="bibl">Luciano Caetano da Rosa: <a href="da-rosa-fonseca.html">No Centenário do Nascimento de Manuel da
                        Fonseca, Figura Cimeira da Poesia Neo-Realista</a></p>


                    <h2><a href="#k5" name="kat5">5</a> Mehrsprachigkeit</h2>

                    <p className="bibl">Giuseppe Cocco/Fabio Tosques: <a href="/cocco">Il Francoprovenzale di Faeto</a></p>
                    <p className="bibl">Gerhard Ernst: <a href="/ernst">Una cartolina dalla Val Maira</a></p>
                    <p className="bibl">Gianmarco Furer: <a href="/furerg">Plurilinguisme programmé/volontaire/voulu</a></p>


                    <h2><a href="#k6" name="kat6">6</a> Reisen</h2>

                    <p className="bibl">Fabio Chiocchetti: <a href="/chiocchetti">Ícaro non vola</a></p>
                    <p className="bibl">Georg Kremnitz: <a href="/kremnitz">Über Exkursionen. Erinnerungen und Überlegungen</a></p>

                    <h2><a href="#k7" name="kat7">7</a> Rumänisch</h2>

                    <p className="bibl">Maren Huberty: <a href="/huberty">Über Böcke und Böcke. Eine kleine
                        etymologische Studie zu Rumänisch <i>ţap</i></a></p>
                    <p className="bibl">Jochen Schmidt: <a href="/schmidt">Warum Rumänisch?</a></p>


                    <h2><a href="#k8" name="kat8">8</a> Sport</h2>

                    <p className="bibl">Günter Bock: <a href="/bock">Der Neufahrner Triathlon</a></p>
                    <p className="bibl">Christophe Schaumburg: <a href="/schaumburg">Über laufende Forscher</a></p>

                    <h2><a href="#k9" name="kat9">9</a> VIVALDI</h2>

                    <p className="bibl">Barbara De Angelis/Harald Völker: <a href="angelisVoelker">VIVALDI zu Besuch in der Familie</a></p>
                    <p className="bibl">Doreen Großmann: <a href="/grossmann">Hinter den Kulissen von VIVALDI</a></p>
                    <p className="bibl">Carola Köhler: <a href="/koehler">VIVALDI und ich. Ein persönlicher Rückblick</a></p>
                    <p className="bibl">Guido Mensching: <a href="/mensching">Anmerkungen zur sardischen Syntax anhand des
                        Vivaio Acustico delle Lingue e dei Dialetti d’Italia (VIVALDI)</a></p>
                    <p className="bibl">Ugo Perone: <a href="/perone">Stile VIVALDI</a></p>
                    <p className="bibl">Katharina Wieland/Jochen Plikat/Lutz Küster: <a href="/kuesterPlikatWieland">VIVALDI – eine reiche Fundgrube für Lehramtsstudierende?
                        Fremdsprachen- und hochschuldidaktische Überlegungen</a></p>

                    <h2><a href="#k10" name="kat10">10</a> Varia</h2>

                    <p className="bibl">Johannes Klare: <a href="/klare">Esperanto – eine Minderheitensprache?</a></p>
                    <p className="bibl">Trudel Meisenburg: <a href="/meisenburg">Der optimale Kattenbusch: The ultimate OT account of and for my dear old friend (but never
                        fiancé!) Dieter K.</a></p>
                    <p className="bibl">Peter Stein: <a href="/stein">„Pourquoi et comment élaborer une orthographe
                        pour des langues romanes non encore codifiées? Quelques réflexions
                        comparatives à propos de la codification du ladin des Dolomites et du
                        créole mauricien“ – und was sich in 20 Jahren geändert hat</a></p>
                    <p className="bibl">Fabio Tosques: <a href="/tosques">Die frankoprovenzalischen Sprachinseln Faeto und Celle di San Vito in der deutschen Wikipedia – eine Bestandsaufnahme</a></p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Inhalt;