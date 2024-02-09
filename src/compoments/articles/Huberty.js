import Footer from "../Footer";
import Header from "../Header";
import Rubrik from "../Rubrik";
import UpArrow from "../UpArrow";
import HubertyPortrait from "../../images/mhuberty/mhuberty-portrait.jpg";

function Huberty(props) {
    return (
        <div id="Wrapper" className="container_14">

            <div id="Header">
                <Header id={props.author} />
                <div className="grid_9">
                    <h1 id="main_title">Über Böcke und Böcke. Eine kleine
                        etymologische Studie zu Rumänisch <i>ţap</i></h1>
                    <p id="author">Maren Huberty, Berlin</p>
                </div>

                <Rubrik />
            </div>

            <div id="Teasers" className="clearfix">
                <div className="grid_9">
                    <p>
                        In den einsprachigen rumänischen Wörterbüchern ist das Wort <i>ţap</i> mit
                        folgenden Bedeutungen verzeichnet: (1) ‚Ziegenbock‘, (2)
                        ‚Bierglas‘ sowie ‚Inhalt eines Bierglases‘ und (3)
                        ‚Sternenkonstellation beim Übergang zur Wintersonnenwende‘ [Verweis
                        auf das Sternzeichen Steinbock, Anm. d. Verf.].
                    </p>
                    <p className="longcitation">
                        <b>ŢAP</b>, <i>ţapi</i>, s.m. 1. Masculul caprei
                        domestice, al caprei negre și al
                        căprioarei. […] 2. Pahar special de bere, cu toartă, având
                        capacitatea de 300 ml; conţinutul unui astfel de pahar. 3. (Art.)
                        Numele unei constelaţii în care intră Soarele la solstiţiul de
                        iarnă. – Cf. alb. cap, cjap,
                        scr. cap (DEX<sup>1</sup> <sup>4</sup>1998, DEX<sup>2</sup>
                        2009, s.v.).<sup><a href="#fn1" name="fz1">1</a></sup>
                    </p>
                </div>
                <div className="grid_5">

                    <div className="abouttheauthor">
                        <img src={HubertyPortrait}
                            width="100"
                            height="150"
                            alt="Huberty - Portrait" />
                        <div className="abouttheauthorfont"><br /><br />
                            <b>Maren Huberty</b>, Dr. phil., Wissenschaftliche Mitarbeiterin am Institut für Romanistik der Humboldt-Universität zu Berlin. Studium an der Universitatea Timișoara (Rumänien), seit 1983 an der HU, dort 1987 Promotion, seit 1991 geschäftsführende Mitarbeiterin am Institut für Romanistik.
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
                                In der überarbeiteten Ausgabe von 2009 bleibt der Eintrag unverändert.
                                Das digitale Wörterbuch <i>DEX-online</i> nimmt mit Verweis auf eine
                                Neufassung des <i>DEX</i> zwei weitere Einträge auf. Das bisher grundsätzlich
                                als polysem lemmatisierte <i>ţap</i> wird nun unter zwei homonymen Lemmata
                                registriert, wobei die Bedeutungen (1) und (3)
                                unter <i>ţap</i><sup>1</sup> und die Bedeutung (2)
                                unter <i>ţap</i><sup>2</sup> verzeichnet werden:
                            </p>
                            <p className="longcitation">
                                <b>ŢAP<sup>1</sup></b> ~i <i>m</i>. 1) Mascul al
                                caprei. […] 2) <i>art</i>. Constelaţie în care
                                intră Soarele la solstiţiul de iarnă. /Cuv. autoht.
                                <br />
                                <b>ŢAP<sup>2</sup></b> ~uri <i>n</i>. 1) Cană de sticlă (cu o
                                capacitate de 300 ml) din care
                                se bea bere. 2) Conţinutul unei astfel de căni. /Cuv. autoht. <br />
                                (NODEX 2002, s.v.)
                            </p>
                            <p>
                                Auffällig ist zum einen, dass mit der Differenzierung in Homonyme auch
                                eine Veränderung des Genus
                                erfolgt, <i>ţap</i><sup>2</sup> ‚Bierglas‘ wird nun in
                                die Kategorie der Neutra überführt (Pluralbildung auf
                                -<i>uri</i>).
                                Andererseits werden beide Lexeme auf ein gemeinsames Erbwort
                                zurückgeführt. Es ist jedoch unbestritten,
                                dass <i>ţap</i><sup>2</sup> bzw. weiter oben
                                Bedeutung (2) nicht auf das autochthone Wort zurückgeht, sondern eine
                                spätere Entlehnung ist. Die fehlerhafte etymologische Angabe geht
                                offensichtlich auf Ciorănescu zurück:
                            </p>
                            <p className="longcitation">
                                <b>ţap (-pi)</b>, s. m. – 1. Macho cabrío. – 2. Constelación del
                                Capricornio. – 3. Caña para cerveza. – 4. (Mold.). Una de las
                                chitas de más peso. – 5. Apodo de los griegos. – 6. (Germ.). Cura.
                                – Mr. Cap.<br />
                                Origen oscuro. […] El uso 3 es trad. moderna de
                                al. <i>Bock</i>. Cf. también Rohlfs, <i>ZRPh</i>, XLV, 664;
                                Rosetti, II 123; Puşcariu, <i>Lr</i>, 180. <br />
                                (DER 1966, s.v.)
                            </p>
                            <p>
                                Ciorănescu gibt nach „origen obscuro“ eine gründliche
                                Zusammenfassung diverser Hypothesen zum Etymon von <i>ţap</i> (1), so könne
                                es sich beispielsweise um eine unmittelbare Fortsetzung eines
                                illyrisch-thrakischen Substratwortes handeln oder um eine spätere
                                expressive Neuschöpfung. Für die Bedeutung (2) ‚Bierglas‘ (3. bei
                                Ciorănescu) nimmt er jedoch eine Lehnübersetzung aus dem Deutschen an
                                und verweist diesbezüglich speziell auf Arbeiten von Rohlfs, Rosetti
                                und Puşcariu. Der Verweis auf Rohlfs ist in diesem Fall völlig
                                unhaltbar, denn in seinem Aufsatz „Über Hacken und Böcke“
                                diskutiert Rohlfs (1925) gerade nicht die Herkunft der später
                                hinzugekommenen Bedeutung ‚Bierglas‘, sondern den
                                wortgeschichtlichen Zusammenhang von <i>zapp</i>-
                                ‚(Ziegen-)Bock‘ und <i>zapp</i>-
                                ‚Hacke‘. Selbiges trifft auf die angeführten Belege von Rosetti und
                                Puşcariu zu, die hier die Annahme eines illyrischen
                                Etymons für <i>ţap</i>
                                (1) besprechen. Dass es sich bei <i>ţap</i> (2) ‚Bierglas‘ um eine
                                Lehnübersetzung aus dem Deutschen handele, wird von Puşcariu erst an
                                anderer Stelle, nämlich im Rahmen des rumänisch-deutschen Sprach- und
                                Kulturkontakts besprochen:
                            </p>
                            <p className="longcitation">
                                De origine germană e şi […] <i>halbă</i> […], iar tradus din germ.
                                „Bock“ <i>ţapul</i> (de bere).<br />
                                (Puşcariu [1940] <sup>2</sup>1976: 271) <br />
                                Deutschen Ursprungs sind auch […] <i>halbă</i> „Halbe (Bier)“, […] und
                                aus dem Deutschen übersetzt ist <i>ţap</i> „¼ Liter Bier“ (wörtlich:
                                „Bock“).
                                <br />
                                (Puşcariu [1943] <sup>2</sup>1997: 342)
                            </p>
                            <p>
                                Generell wird in der rumänischen etymologischen Forschung die Annahme
                                vertreten, dass <i>ţap</i> (2) ‚Bierglas‘ eine Entlehnung aus dem
                                Deutschen ist. So schreibt Graur in seiner Darlegung des Konzepts zur
                                <i>etimologie multiplă</i>
                                (Mehrfachentlehnung)<sup><a href="#fn2"
                                    name="fz2">2</a></sup>:
                            </p>
                            <p className="longcitation">
                                Cuvântul românesc <i>ţap</i> are o origine veche, care nu e prea uşor de
                                determinat (tracă sau iliră). El desemnează un anumit animal cu
                                însuşiri precise. La un moment dat, acestui cuvânt i se mai adaugă,
                                sub influenţa unui model german, înţelesul de „pahar de anumite
                                dimensiuni şi forme, în care se serveşte berea“. Deci astăzi
                                cuvântul nostru <i>ţap</i> nu mai are numai originea veche, ci vine, în
                                acelaşi timp, prin anumite trăsături ale sale, dela
                                germ. <i>Bock</i> (Graur 1950: 24).
                                <br />
                                [Das rumänische Wort <i>ţap</i> hat einen alten
                                Ursprung, der nicht so einfach zu bestimmen ist
                                (thrakisch oder illyrisch). Es bezeichnet ein
                                bestimmtes Tier mit genauen Eigenschaften. Zu einem
                                gegebenen Zeitpunkt wird diesem Wort durch deutschen
                                Einfluss die Bedeutung „Glas in bestimmten Maßen und
                                Formen, in dem Bier serviert wird“
                                hinzugefügt. Folglich hat unser Wort <i>ţap</i> heute
                                nicht mehr nur die alte Herkunft, sondern stammt
                                gleichzeitig, aufgrund bestimmter Merkmale, vom
                                deutschen <i>Bock</i> ab.] (Übersetzung der Verf.)
                            </p>
                            <p>
                                Ebenso verzeichnet Sala in seiner Enzyklopädie zur rumänischen Sprache
                                unter dem Eintrag <i>etimologie multiplă</i>:
                            </p>
                            <p className="longcitation">
                                E.m. este invocată și pentru cuvintele care au un sens obţinut prin
                                calc semantic (<i>ţap</i> în sensul „pahar în care se serveşte berea“
                                explicat prin germ. <i>Bock</i> „ţap (de bere)“)
                                (Sala 2001: 203).
                                <br />
                                [E[timologie] m[ultiplă] ist angezeigt auch für Wörter, die eine
                                Bedeutung aufgrund einer Lehnbedeutung erhalten haben (<i>ţap</i> in der
                                Bedeutung „Glas, in dem Bier serviert wird“ nach deutsch <i>Bock</i>
                                „ţap de bere“).] (Übersetzung der Verf.)
                            </p>
                            <p>
                                Die rumänischen Linguisten gehen also davon aus, dass <i>ţap</i> (2)
                                ‚Bierglas‘ durch Lehnbedeutung bzw. <i>calque
                                    sémantique</i> entstanden ist, und zwar analog zum
                                deutschen Homonymenpaar <i>Bock</i><sup>1</sup>
                                ‚(Ziegen-)bock‘ und <i>Bock</i><sup>2</sup>
                                ‚Bockbier‘. Allerdings geht Graur (und
                                vor ihm schon Puşcariu) auch im Deutschen von den Bedeutungen (1)
                                ‚(Ziegen-)Bock‘ und (2) ‚Bierglas‘ aus, wobei seiner Meinung
                                nach Bedeutung (2) durch das falsche Verständnis eines Eigennamens
                                zustande gekommen sei:
                            </p>
                            <p className="longcitation">
                                <i>Ţap</i> şi-a cîştigat locul în categoria a doua atunci cînd, după
                                model german (iar în limba germană printr-un accident, greşita
                                înţelegere a unui nume propriu), a început să figureze pe paharele
                                de bere (Graur 1954: 120).
                            </p>
                            <p>
                                Das deutsche Wort <i>Bockbier</i> ist nun in der Tat
                                durch lautliche Umdeutung eines Eigennamens entstanden:
                            </p>
                            <p className="longcitation">
                                <b>Bockbier</b> n. ein Starkbier, dessen Bezeichnung
                                von der niedersächsischen
                                Stadt <i>Einbeck</i>, früher <i>Eimbeck</i>,
                                herzuleiten und zunächst <i>Eimbeckisch</i>,
                                <i>Einbeckisch Bier</i> (16. Jh.) genannt wird […],
                                das seit Anfang des 17. Jhs. auch in Bayern gebraut
                                und mit Vokalwechsel e zu o in der zweiten
                                Silbe <i>ampokhisch pier</i> (München 1630), <i>Aimbock</i>,
                                <i>Oambock</i> genannt wird. Im 19. Jh. kommt die Kurzform
                                <i>Bock</i> m. auf, die als <i>un bock</i> ‚ein Glas
                                Bier‘ ins Französische entlehnt wird (EWD 1989: 195).
                            </p>
                            <p>
                                Die Etymologie geht bereits auf Kluge
                                (<sup>6</sup>1899, s.v.) zurück, der zur
                                Wortgeschichte weiterhin anmerkt: „An der Entstehung
                                der Benennung mag mitgewirkt haben, dass auch Schöps
                                (in Schlesien), Stähr und Geiß (auch Ente)
                                Bezeichnungen für Bierarten waren (in Breslau gab es
                                Anfang des 18. Jhs. Lämmelbier).“
                            </p>
                            <p>
                                <i>Bock</i><sup>2</sup> bezeichnet also im Deutschen
                                eine besondere Biersorte (Starkbier) und nicht das
                                Gefäß, das diese Biersorte enthält. Eine Bedeutung
                                ‚Bierglas‘ ist für das Deutsche zu keinem Zeitpunkt
                                belegt. Das rumänische <i>ţap</i><sup>2</sup> könnte
                                demnach durch einen sogenannten <i>faux calque sémantique</i>
                                oder durch Metonymie entstanden sein. Letzteres würde eine
                                Lexikalisierung der Metonymie <i>Bock</i><sup>2</sup>
                                ‚Bockbier‘ &gt; <i>Bock</i><sup>2</sup>
                                ‚Bierglas‘ in den in Rumänien gesprochenen deutschen Mundarten
                                voraussetzen. Das ist jedoch eher unwahrscheinlich, da
                                dort bereits das
                                Wort <i>Seidel</i> ‚Bierkrug, Bierglas‘, – ein altes,
                                in Deutschland und Österreich-Ungarn verwendetes
                                Flüssigkeitsmaß – gebräuchlich war.
                                So zählen Lăzărescu/Scheuringer <i>Seidel</i> zu den
                                „österreichisch-rumäniendeutsche[n] lexikalische[n]
                                Gemeinsamkeiten“ (Lăzărescu/Scheuringer 2007, s.v.). Eine direkte
                                Entlehnung von <i>ţap</i><sup>2</sup> ‚Bierglas‘ aus
                                dem Deutschen ist m.E. in Frage zu stellen.
                            </p>
                            <p>
                                Der älteste lexikographische Eintrag
                                für <i>ţap</i><sup>2</sup> ist im Rumänisch-deutschen
                                Wörterbuch von Tiktin zu finden:
                            </p>
                            <p className="longcitation">
                                <i>ţap</i> sm. […] 4. (Wirtshaussprache) Bock m (= ¼
                                Liter Bier) (Tiktin 1925, s.v.).
                            </p>
                            <p>
                                Allerdings werden keine Belegstellen angeführt. Vermutlich haben sich
                                alle nachfolgenden Wörterbücher an diesem Eintrag orientiert. Die von
                                Miron bzw. Miron und Lüder überarbeitete 2. und 3. Auflage von Tiktins
                                Wörterbuch korrigiert dann die Übersetzung <i>Bock</i>
                                zu <i>Seidel</i> ‚Biermaß:
                                300 ml‘
                                (Tiktin/Miron: <sup>2</sup>1989, <sup>3</sup>2005;
                                s.v.). Das neue zweisprachige
                                Wörterbuch der Rumänischen Akademie <i>Dicţionar German-Român</i>
                                lemmatisiert (neben <i>Seidel</i>) nun analog zu den deutschen einsprachigen
                                Wörterbüchern sehr konsequent die
                                Homonyme <i>Bock</i><sup>1</sup>
                                und <i>Bock</i><sup>2</sup> ‚Bockbier‘, allerdings
                                wird unter <i>Bock</i><sup>1</sup> wiederum die Übersetzung
                                <i>ţap (de bere)</i> verzeichnet, was in sich
                                widersprüchlich ist (DGR 2007, s.v.). Wenn ein
                                bierdurstiger Rumäne in Deutschland ein <i>Bock</i>
                                bestellte, so würde er in manchen Lokalen, je nach
                                Region, wohl leer ausgehen.
                            </p>
                            <p>
                                Beim Gebrauch von <i>un bock</i> (siehe oben, EWD
                                1989, auch Kluge <sup>6</sup>1899; s.v.) in Frankreich
                                könnte eventuell ähnliches passieren, allerdings aus
                                anderen Gründen. <i>Un bock</i> ist im Französischen
                                ein Archaismus:
                            </p>
                            <p className="longcitation">
                                <i>Bock</i>, n.m. est emprunté (1862) à l’allemand <i>Bock</i>
                                „bière de Bavière, fortement alcoolisée“ forme apocopée
                                pour <i>Bockbier</i>. Le sens d’emprunt „bière de Bavière“ a
                                été surplanté par l’acception métonymique de
                                „verre de bière à anse contenant environ un quart de litre“ (1866)
                                puis par opposition à <i>demi</i>, „verre de bière d’une capacité
                                moindre“, dans les consommations de café. Le mot a vielli après
                                1945, remplacé dans l’usage courant par <i>une
                                    bière</i>, <i>demi</i> restant usuel (DHLF 1992, s.v.).
                            </p>
                            <p>
                                Als erster Beleg wird im Allgemeinen das Auftreten von <i>bock</i> im <i>Journal</i>
                                von Edmond und Jules de Goncourt gewertet: „en buvant un bock au
                                grand-balcon“ (TLF 1975, s.v.). Bei der Entlehnung ins Französische
                                erfolgte wohl zunächst eine Bedeutungserweiterung ‚Starkbier‘ &gt;
                                ‚Bier‘:
                            </p>
                            <p className="longcitation">
                                J’aurais été, comme cela eût été très bien pour moi, professeur de
                                philosophie dans une petite ville de province, que tous les soirs
                                j’aurais été jouer aux cartes et boire des bocks au café (Proust,
                                <i>Jean Santeuil</i>, siehe GrRob 2001, s.v.).
                            </p>
                            <p>
                                Für die Verbreitung von <i>bock</i> im französischen Sprachgebrauch sorgte
                                nicht zuletzt die Novelle <i>Garçon, un bock!</i>
                                von Maupassant, in der der Autor darüber hinaus <i>bock</i>
                                auch noch als Derivationsbasis nutzt und das Wort
                                <i>bockeur</i> kreiert:
                            </p>
                            <p className="longcitation">
                                D’un coup d’oeil j’avais reconnu un bockeur, un de ces habitués de
                                brasserie qui arrivent le matin, quand on ouvre, […] (GrRob 2001,
                                s.v.).
                            </p>
                            <p>
                                Der sich dann vorrangig etablierende metonymische Gebrauch dient vor
                                allem zur Differenzierung von Flüssigkeitsmaßen,
                            </p>
                            <p className="longcitation">
                                […] nous nous asseyions côte à côte sur la banquette, tout le monde
                                nous regardait d’un air de connivence, il commandait un bock et, pour
                                moi, un galopin de bière, je me sentais aimé (Sartre, <i>Les Mots</i>,
                                siehe GrRob 2001, s.v.).
                            </p>
                            <p>
                                wobei die Unterscheidung der Quantitäten nicht mehr
                                eindeutig bleibt:
                            </p>
                            <p className="longcitation">
                                I 1. Vx. Pot à bière contenant environ un quart de litre. → <b>chope</b>.
                                […] – Contenu de bière de ce pot.
                                <br />
                                […]
                                <br />
                                2. Verre à bière à pied, unité minimale de consommation au café
                                (par oppos. au demi* de forme cylindrique, sans pied, et de contenance
                                plus importante, mais bien inférieure au demi-litre). Un bock vide.
                                […] – Remarque: Le mot, très usuel jusqu‘en 1940, a vielli
                                (DcultLF 2005, s.v.).
                            </p>
                            <p>
                                Betrachtet man nun die Verwendung von
                                rumänisch <i>ţap</i><sup>2</sup> und französisch
                                <i>bock</i>, so fallen die sehr ähnlichen Bedeutungsdefinitionen auf:
                                ‚Bierglas (mit Henkel), das ca. ¼ Liter/300 ml fasst‘, die
                                jeweils semantisch in Opposition zum Halblitermaß rum. <i>o halbă</i> und
                                frz. <i>une demie</i> stehen. Ebenfalls identisch ist
                                der metonymische Gebrauch für den Inhalt des Glases,
                                womit jedoch Bier im allgemeinen Sinne gemeint ist und
                                nicht das spezielle Starkbier <i>Bock</i>. Natürlich
                                können unabhängige parallele Entwicklungen einer
                                direkten Entlehnung aus dem Deutschen ins Rumänische
                                und Französische angenommen werden. Für
                                rum. <i>ţap</i><sup>2</sup> erscheint jedoch eine
                                indirekte Entlehnung über das Französische
                                plausibler, insbesondere vor dem Hintergrund einer verstärkten Aufnahme
                                französischer Lehnwörter in der Zeit nach 1830 zur Etablierung des
                                modernen rumänischen Wortschatzes. Im Gegensatz zu
                                rum. <i>ţap (de bere)</i> hat frz. <i>bock</i> zu
                                weiteren Wortbildungen geführt. So sind zwar <i>bock</i>
                                selbst und <i>bockeur</i> heute als Archaismen zu
                                betrachten, <i>sous-bock</i> ‚Bierdeckel‘ jedoch
                                zeichnet sich durch eine große Frequenz im heutigen
                                Sprachgebrauch aus. Rumänisch <i>ţap</i><sup>2</sup>
                                ‚Bierglas‘ steht da relativ isoliert. Der Anschluss
                                der neuen Bedeutung ‚Bierglas‘ an <i>ţap</i> ‚Bock‘
                                ist im Rumänischen eher volksetymologisch zu erklären,
                                aufgrund der Gleichheit der <i>signifiants</i> von
                                franz. <i>bock</i> mit dem deutschen
                                Homonymenpaar <i>Bock</i> ‚(Ziegen-)bock‘
                                und <i>Bock</i> ‚Bockbier‘. Wortgeschichtlich wäre
                                außerdem ein Zusammenhang zu Ungarisch <i>csapolt
                                    sör</i> ‚Bier vom Fass‘ &lt; <i>csap</i> ‚Zapfhahn‘ zu
                                überlegen.
                            </p>


                            <h1>Anmerkungen</h1>
                            <p><sup><a href="#fz1" name="fn1">1</a></sup>
                                So auch DLR (1965, s.v.), DLRM (1958, s.v.) und
                                Şăineanu (<sup>2</sup>1996, s.v.).
                            </p>
                            <p><sup><a href="#fz2" name="fn2">2</a></sup>
                                Zum Konzept der <i>etimologie multiplă</i> siehe auch Huberty/Sinner (2010).
                            </p>


                            <h1>Literatur</h1>
                            <p className="bibl">
                                <span style={{ fontVariant: "small-caps" }}>der</span> =
                                Ciorănescu, Alejandro (1966): <i>Diccionario
                                    etimológico rumano</i>,
                                Tenerife.
                            </p>
                            <p className="bibl">
                                <span style={{ fontVariant: "small-caps" }}>dcultlf</span>
                                = Rey, Alain (éd.) (2005): <i>Dictionnaire
                                    culturel en langue française</i>, Paris.
                            </p>
                            <p className="bibl">
                                <span style={{ fontVariant: "small-caps" }}>dex</span><sup>1</sup> = Academia
                                Română/Institutul de Lingvistică „Iorgu Iordan“
                                (ed.) (<sup>4</sup>1998): <i>Dictionarul explicativ al
                                    limbii române</i>, Bucureşti.
                            </p>
                            <p className="bibl">
                                <span style={{ fontVariant: "small-caps" }}>dex</span><sup>2</sup> = Academia
                                Română/Institutul de Lingvistică „Iorgu Iordan –
                                Al. Rosetti“ (ed.) (2009): <i>Dictionarul explicativ
                                    al limbii române</i>. Ed. a 2-a revăzută, Bucureşti.
                            </p>
                            <p className="bibl">
                                <span style={{ fontVariant: "small-caps" }}>dex-online</span> =
                                <a href="http://dexonline.ro/">http://dexonline.ro/</a>
                            </p>
                            <p className="bibl">
                                <span style={{ fontVariant: "small-caps" }}>dgr</span> =
                                Academia Română/Institutul de Lingvistică „Iorgu
                                Iordan şi Al. Rosetti“ (ed.)
                                (<sup>3</sup>2007): <i>Dicţionar
                                    German-Român</i>, Bucureşti.
                            </p>
                            <p className="bibl">
                                <span style={{ fontVariant: "small-caps" }}>dhlf</span> =
                                Rey, Alain (éd.) (1992): <i>Dictonnaire historique de
                                    la langue francaise</i>, Paris.
                            </p>
                            <p className="bibl">
                                <span style={{ fontVariant: "small-caps" }}>dlr</span> =
                                Academia Republicii Socialiste Române (ed.)
                                (1965–): <i>Dictionarul limbii romîne</i>, Bucureşti.
                            </p>
                            <p className="bibl">
                                <span style={{ fontVariant: "small-caps" }}>dlrm</span> =
                                Academia Republicii Populare Romîne (ed.)
                                (1958): <i>Dictionarul limbii romîne
                                    moderne</i>, Bucureşti.
                            </p>
                            <p className="bibl">
                                <span style={{ fontVariant: "small-caps" }}>ewd</span>
                                = Pfeifer, Wolfgang et al. (Hg.) (1989): <i>Etymologisches Wörterbuch des Deutschen</i>,
                                Berlin.
                            </p>
                            <p className="bibl">
                                Graur, Alexandru (1950): „Etimologie multiplă“,
                                in: <i>Studii şi cercetări lingvistice</i> (Institutul
                                de lingvistică, Academia Republicii Populare Române)
                                1, 22–34.
                            </p>
                            <p className="bibl">
                                — (1954): <i>Încercare asupra fondului principal
                                    lexical al limbii romîne</i>, Bucureşti.
                            </p>
                            <p className="bibl">
                                GrRob = Rey, Alain (éd.) (2001): <i>Le Grand Robert
                                    de la langue française</i>. Deuxième édition, dirigée
                                par Alain Rey, Paris.
                            </p>
                            <p className="bibl">
                                Huberty, Maren/Sinner, Carsten (2010): Multiple Etymologie. Konzept
                                – Prinzip – Ergebnis etymologischer Forschung, in: Reinke,
                                Kristin/Sinner, Carsten (Hg.) (2010): <i>Sprache als Spiegel der
                                    Gesellschaft. Festschrift für Johannes Klare zum 80. Geburtstag</i>,
                                München: 78–100.
                            </p>
                            <p className="bibl">
                                Kluge, Friedrich (<sup>6</sup>1899): <i>Etymologisches
                                    Wörterbuch der deutschen Sprache</i>, Straßburg.
                            </p>
                            <p className="bibl">
                                Lăzărescu, Ioan/Scheuringer, Hermann (2007): <i>Limba germană din
                                    Austria. Un dicţionar german-român/Österreichisches Deutsch. Ein
                                    deutsch-rumänisches Wörterbuch</i>, Bucureşti.
                            </p>
                            <p className="bibl">
                                <span style={{ fontVariant: "small-caps" }}>nodex</span> =
                                Litera Internațional (2002): <i>Noul dictionar
                                    explicativ al limbii române</i>. Ed. a 2-a
                                revăzută, Bucureşti (nach dex-online).
                            </p>
                            <p className="bibl">
                                Puşcariu, Sextil ([1940] <sup>2</sup>1976): <i>Limba
                                    română</i>. Vol. I. Privire generală, Bucureşti.
                            </p>
                            <p className="bibl">
                                — ([1943] <sup>2</sup>1997): <i>Die rumänische
                                    Sprache</i>, Bukarest.
                            </p>
                            <p className="bibl">
                                Rohlfs, Gerhard (1925): Über Hacken und Böcke,
                                in: <i>Zeitschrift für romanische Philologie</i> 45,
                                662–675.
                            </p>
                            <p className="bibl">
                                Şăineanu, Lazăr ([1896]
                                <sup>2</sup>1995–1996): <i>Dicţionarul universal al
                                    limbii române</i>, Mydo Center.
                            </p>
                            <p className="bibl">
                                Sala, Marius (2001): Etimologie multiplă, in: Marius Sala (Hg.)
                                (2001): <i>Enciclopedia limbii române</i>, Bucureşti, 203–204.
                            </p>
                            <p className="bibl">
                                <span style={{ fontVariant: "small-caps" }}>tlf</span> =
                                <i>Trésor de la langue française: dictionnaire de la
                                    langue du XIXe et du XXe siècle (1789–1960)</i>, Paris
                                1975.
                            </p>
                            <p className="bibl">
                                Tiktin, Hariton (1925): <i>Rumänisch-deutsches
                                    Wörterbuch</i>. Band 3: P–Z, Bucureşti.
                            </p>
                            <p className="bibl">
                                –/Paul Miron
                                (1989): <i>Rumänisch-deutsches Wörterbuch</i>. 2.,
                                überarbeitete und ergänzte Auflage von Paul Miron. Band 3: P–Z,
                                Wiesbaden.
                            </p>
                            <p className="bibl">
                                –/–
                                (2005): <i>Rumänisch-deutsches Wörterbuch</i>. 3.,
                                überarbeitete und ergänzte Auflage von Paul Miron und
                                Elsa Lüder. Band 3: P–Z, Wiesbaden.
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

export default Huberty;