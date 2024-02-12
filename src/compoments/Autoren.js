import React from "react";
import Header from "./Header";

function Autoren(props) {
    return (
        <div className="grid_10">
            <div id="Wrapper" className="container_10">
                <div id="Header">
                    <Header id={props.id} />
                    <div align="center">
                        <h1 id="main_title">Autorinnen/Autoren</h1>
                    </div>

                    <h3><a href="#kat1" name="k1">B</a> | <a href="#kat2" name="k2">C</a> | <a href="#kat3" name="k3">D</a> | <a
                        href="#kat4" name="k4">E</a> |
                        <a href="#kat5" name="k5">F</a> | <a href="#kat6" name="k6">G</a> | <a href="#kat7" name="k7">H</a> | <a
                            href="#kat8" name="k8">K</a> | <a href="#kat9" name="k9">M</a> | <a href="#kat10" name="k10">P</a> | <a
                                href="#kat11" name="k11">R</a> | <a href="#kat12" name="k12">S</a> | <a href="#kat13" name="k13">T</a> |
                        <a href="#kat14" name="k14">U</a> | <a href="#kat15" name="k15">V</a> | <a href="#kat16" name="k16">W</a>
                    </h3>
                </div>

                <div id="Main">


                    <h2><a href="#k1" name="kat1">B</a></h2>
                    <p className="bibl">Bauer, Roland: <a href="/bauer">Zur inneren Arealgliederung des
                        Trentino.
                        Eine dialektometrische Nachschau</a></p>
                    <p className="bibl">Bernardi, Rut: <a href="/videsottBernardi">Eine administrative Übersetzung ins
                        Dolomitenladinische aus
                        dem Jahr 1811</a></p>
                    <p className="bibl">Bernhard, Gerald: <a href="/bernhard">Akzent, Arzneien und andere
                        Schwierigkeiten</a></p>
                    <p className="bibl">Bock, Günter: <a href="/bock">Der Neufahrner Triathlon</a></p>


                    <h2><a href="#k2" name="kat2">C</a></h2>
                    <p className="bibl">Chiocchetti, Fabio: <a href="/chiocchetti">Ícaro non vola</a></p>
                    <p className="bibl">Cocco, Giuseppe: <a href="/cocco">Il Francoprovenzale di Faeto</a></p>


                    <h2><a href="#k3" name="kat3">D</a></h2>
                    <p className="bibl">De Angelis, Barbara: <a href="/angelisVoelker">VIVALDI zu Besuch in der
                        Familie</a></p>


                    <h2><a href="#k4" name="kat4">E</a></h2>
                    <p className="bibl">Ernst, Gerhard: <a href="/ernst">Una cartolina dalla Val Maira</a></p>


                    <h2><a href="#k5" name="kat5">F</a></h2>
                    <p className="bibl">Furer, Gianmarco: <a href="/furerg">Plurilinguisme
                        programmé/volontaire/voulu</a></p>
                    <p className="bibl">Furer, Jean-Jacques: <a href="/furerj">
                        Un dictionnaire français-romanche
                        (sursilvan+): Pourquoi – Comment – Par qui</a></p>


                    <h2><a href="#k6" name="kat6">G</a></h2>
                    <p className="bibl">Goebl, Hans: <a href="/goebl">Kulturwissenschaftliches aus der
                        ALD-Werkstatt: <i>tumulazione</i> versus <i>inumazione</i></a></p>
                    <p className="bibl">Großmann, Doreen: <a href="/grossmann">Hinter den Kulissen von VIVALDI</a></p>


                    <h2><a href="#k7" name="kat7">H</a></h2>
                    <p className="bibl">Huberty, Maren: <a href="/huberty">Über Böcke und Böcke. Eine kleine
                        etymologische Studie zu Rumänisch <i>ţap</i></a></p>


                    <h2><a href="#k8" name="kat8">K</a></h2>
                    <p className="bibl">Klare, Johannes: <a href="/klare">Esperanto – eine Minderheitensprache?</a></p>
                    <p className="bibl">Köhler, Carola: <a href="/koehler">VIVALDI und ich. Ein persönlicher Rückblick</a>
                    </p>
                    <p className="bibl">Kremnitz, Georg: <a href="/kremnitz">Über Exkursionen. Erinnerungen und
                        Überlegungen</a></p>
                    <p className="bibl">Küster, Lutz: <a href="/kuesterPlikatWieland">VIVALDI – eine reiche Fundgrube für
                        Lehramtsstudierende?
                        Fremdsprachen- und hochschuldidaktische Überlegungen</a></p>


                    <h2><a href="#k9" name="kat9">M</a></h2>
                    <p className="bibl">Mattusch, Michèle: <a href="/mattusch">Dante und die Sprache der Sinne –
                        literaturwissenschaftliche
                        Reflexionen zu Dante Alighieris <i>De vulgari eloquentia</i></a></p>

                    <p className="bibl">Meisenburg, Trudel: <a href="/meisenburg">Der optimale Kattenbusch: The
                        ultimate OT account of and for my dear old friend (but never
                        fiancé!) Dieter K.</a></p>
                    <p className="bibl">Mensching, Guido: <a href="/mensching">Anmerkungen zur sardischen Syntax
                        anhand des
                        Vivaio Acustico delle Lingue e dei Dialetti d’Italia (VIVALDI)</a></p>


                    <h2><a href="#k10" name="kat10">P</a></h2>

                    <p className="bibl">Perone, Ugo: <a href="/perone">Stile VIVALDI</a></p>
                    <p className="bibl">Pichler, Edith: <a href="/pichler">Vom Gastarbeiter zum <i>(Gast-)Bürger</i>?
                        Italiener in Deutschland – eine Zwischenbilanz</a></p>
                    <p className="bibl">Plikat, Jochen: <a href="/kuesterPlikatWieland">VIVALDI – eine reiche Fundgrube für
                        Lehramtsstudierende?
                        Fremdsprachen- und hochschuldidaktische Überlegungen</a></p>

                    <h2><a href="#k11" name="kat11">R</a></h2>
                    <p className="bibl">Rosa, Luciano Caetano da: <a href="/daRosaFonseca">No Centenário do Nascimento de Manuel
                        da
                        Fonseca, Figura Cimeira da Poesia Neo-Realista</a></p>

                    <h2><a href="#k12" name="kat12">S</a></h2>
                    <p className="bibl">Schaumburg, Christophe: <a href="/schaumburg">Über laufende Forscher</a>
                    </p>
                    <p className="bibl">Schmidt, Jochen: <a href="/schmidt">Warum Rumänisch?</a></p>
                    <p className="bibl">Setzkorn, Sylvia: <a href="/setzkorn">Die volkstümlichen Bezeichnungen für die
                        Krankheit ‚Durchfall‘ in der Romania
                        – onomasiologische und sprachgeographische Betrachtungen</a></p>

                    <p className="bibl">Stehl, Thomas: <a href="/stehl">Sprachdynamik und Variationslinguistik in
                        Italien</a></p>
                    <p className="bibl">Stein, Peter: <a href="/stein">„Pourquoi et comment élaborer une orthographe
                        pour des langues romanes non encore codifiées? Quelques réflexions
                        comparatives à propos de la codification du ladin des Dolomites et du
                        créole mauricien“ – und was sich in 20 Jahren geändert hat</a></p>

                    <h2><a href="#k13" name="kat13">T</a></h2>
                    <p className="bibl">Tosques, Fabio: <a href="/cocco">Il Francoprovenzale di Faeto</a></p>
                    <p className="bibl">Tosques, Fabio: <a href="/tosques">Die frankoprovenzalischen Sprachinseln Faeto
                        und Celle di San Vito in der deutschen Wikipedia – eine Bestandsaufnahme</a></p>

                    <h2><a href="#k14" name="kat14">U</a></h2>
                    <p className="bibl">Ubbidiente, Roberto: <a href="ubbidiente-caffe.html">“Oro nero” – La cultura del caffè in
                        Italia: usi, costumi, teatro e letteratura</a></p>
                    <p className="bibl">Ugolini, Gherardo: <a href="/ugolini">Il primato
                        dell'italiano</a></p>
                    <p className="bibl">Urbano, Amalia: <a href="/urbano"><i>Lu Destine</i> di Modesto Della Porta</a>
                    </p>

                    <h2><a href="#k15" name="kat15">V</a></h2>
                    <p className="bibl">Videsott, Paul: <a href="/videsottBernardi">Eine administrative Übersetzung
                        ins Dolomitenladinische aus
                        dem Jahr 1811</a></p>
                    <p className="bibl">Völker, Harald: <a href="/angelisVoelker">VIVALDI zu Besuch in der Familie</a></p>

                    <h2><a href="#k16" name="kat16">W</a></h2>
                    <p className="bibl">Wieland,
                        Katharina: <a href="/kuesterPlikatWieland">VIVALDI –
                            eine reiche Fundgrube für Lehramtsstudierende?
                            Fremdsprachen- und hochschuldidaktische
                            Überlegungen</a></p>
                </div>
            </div>
        </div>
    );
};

export default Autoren;