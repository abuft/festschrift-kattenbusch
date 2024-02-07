import Footer from "../Footer";
import Header from "../Header";
import Rubrik from "../Rubrik";
import upArrow from "../../images/layout/up-arrow.png";
import KlarePortrait from "../../images/jklare/jklare-portrait.jpg";

function Klare(props) {
  return (
    <div>
      <div id="Wrapper" class="container_14">
        <div id="Header">
          <Header id={props.author} />
          <div class="grid_9">
            <h1 id="main_title">Esperanto – eine Minderheitensprache?</h1>
            <p id="author">Johannes Klare, Berlin</p>
          </div>
          <Rubrik />
        </div>

        <div id="Teasers" class="clearfix">
          <div class="grid_9">
            {/* <!-- erster Abschnitt hier einfuegen --> */}
            <p>
              DIETER KATTENBUSCH zum 60. Geburtstag am 13. Januar 2012
            </p>

            <h1>Gemeinsame Forschungsinteressen</h1>
            <p>
              Seit Anfang der 1990er Jahre hatte ich am Institut für Romanistik der
              Humboldt-Universität zu Berlin das Vergnügen, mit Prof. Dieter
              Kattenbusch die romanistische Sprachwissenschaft in Forschung und Lehre
              zu vertreten. Unsere Spezialgebiete lagen und liegen streckenweise auf
              der gleichen Linie: Galloromania und Italoromania sind unsere
              bevorzugten Bereiche, in denen wir tätig geworden sind. Ein
              Forschungsgebiet, das Dieter Kattenbusch schon länger am Herzen liegt,
              ist die sprachliche Minderheitenproblematik in der
              Romania.<sup><a href="#fn1" name="fz1">1</a></sup> Der von ihm
              1995 herausgegebene Sammelband <i>Minderheiten in der
                Romania</i> – geboten
              werden die Vorträge, die Ende September 1993 auf dem 23. Romanistentag
              in Potsdam gehalten wurden – gilt noch immer als ein Referenzwerk für
              dieses Sachgebiet. Wir werden Kattenbuschs Sachverstand in Sachen
              Minderheitensprachen für die Erörterung der im Titel meines Beitrags
              aufgeworfenen Frage brauchen.
            </p>
            <p>
              Selbstverständlich hat Kattenbusch in seinem eigenen Beitrag über <i>Die
                Lage der Minderheiten in Italien</i> im Sammelband von 1995 (95–116) auch
              das Sardische berührt, das schon lange mein besonderes Interesse
              beansprucht, insbesondere, weil diese zwischen West- und Ostromania
              stehende romanische Sprache von dem Sardologen, Italianisten und
              Romanisten Max Leopold Wagner (1880–1962) untersucht wurde, den ich
              hochschätze und den ich persönlich, anlässlich des VIII.
              Internationalen Romanistenkongresses 1956 in Florenz, kennengelernt
              habe. Hinzu kommt, dass Wagner fünf Jahre am Berliner Romanischen
              Institut wirkte, an dem wir beide – Kattenbusch und ich – in seiner
              Nachfolge tätig geworden sind: Kattenbusch seit 1996 und damit noch
              für etliche fruchtbringende Jahre, und ich von 1956 bis 1995 und noch
              einige weitere Semester bis ins Jahr 2001 (vgl. Klare 2011) hinein, da
              sich die Nachfolge auf meinen Lehrstuhl verzögert hatte.
            </p>

          </div>
          <div class="grid_5">

            <div class="abouttheauthor">
              {/* <!-- Authorbild --> */}
              <img src={KlarePortrait} width="120"
                height="150" alt=" - Portrait" />
              <div class="abouttheauthorfont"><br /><br />
                <b>Johannes Klare</b>,
                Prof. em. Dr., Jahrgang 1930. Abitur 1948 in
                Freiberg/Sachsen; Studium der Romanistik, Anglistik und Allgemeinen
                Sprachwissenschaft 1948–1951 in Halle/S. und 1951–1952 an der
                Berliner Humboldt-Universität. 1956 Promotion bei Kurt Baldinger; 1968
                Habilitation. Ab 1959 Dozent für Romanische Philologie in Berlin, o.
                Professor 1969 bis 1995. Nach Berentung Lehrstuhlvertretung bis 2001 am
                Institut für Romanistik der Humboldt-Universität zu Berlin. In Lehre
                und Forschung engere Bezüge zu dem Galloromanisten und Italianisten
                Dieter Kattenbusch, der seit 1996 als Ordinarius am Berliner Institut
                für Romanistik tätig ist.
                {/* <!-- Authorbeschreibung (Text) --> */}

              </div>
              <div class="clearfloat"></div>
            </div>
          </div>
        </div>

        <div id="Main">
          <div id="Articles" class="grid_14">
            <section id="posts">
              <article class="post">
                {/* <!-- Content of the article --> */}

                <h1>Bedeutende Romanisten am Romanischen Institut in Berlin</h1>
                <p>
                  Zwischen 1921 und 1924 hatte Max Leopold Wagner an unserem Romanischen
                  Institut, das erst 1896 als selbständiges Romanisches Seminar
                  gegründet worden war, eine sprachwissenschaftliche Professur inne. Und
                  er war Nachfolger zweier großer Romanisten: Als erste eigentliche
                  romanistische Sprachwissenschaftler standen Berlin zwei herausragende
                  Schweizer Professoren zur Verfügung: von 1867 bis 1910 Adolf Tobler
                  (1835–1910) und als dessen unmittelbarer Nachfolger Heinrich Morf
                  (1854–1921), der zwischen 1910 und 1920 in Berlin Forschung und Lehre
                  vertrat.
                </p>
                <p>
                  Max Leopold Wagner musste 1924 seine Professur unfreiwillig aufgeben; zu
                  dieser ganzen Problematik verweise ich auf meine wissenschafts- und
                  institutsgeschichtliche Untersuchung, die demnächst erscheinen wird
                  (Klare 2012).
                </p>
                <p>
                  Wagners direkter Nachfolger in Berlin wurde von 1925 bis 1945 Ernst
                  Gamillscheg (1887–1971), der 1946 aus den Reihen der Berliner
                  Universität wegen seiner Verstrickungen mit dem NS-Regime
                  ausgeschlossen wurde und deshalb nach Tübingen ging. Ein Blick auf
                  unsere weiteren Amtsvorgänger sei erlaubt: Es folgte 1945 ein kurzes
                  Intermezzo von Günter Reichenkron (1907–1966) – nach seiner
                  Habilitation bei Gamillscheg hatte er 1940 eine Professur an der
                  „Reichsuniversität“ Posen übernommen, kehrte 1945 nach Berlin
                  zurück und wechselte dann wie der Literaturwissenschaftler Fritz
                  Neubert (1886–1970) zu der 1948 gegründeten Freien Universität (FU)
                  nach Westberlin über. Nunmehr übernahmen wiederum zwei Schweizer
                  Professoren unser sprachwissenschaftliches Fachgebiet. Ab 1947 weilte
                  Walther von Wartburg (1888–1971) als Gastprofessor in Berlin und wurde
                  1948 abgelöst von seinem Basler Schüler Kurt Baldinger (1919–2007)
                  – meinem wichtigsten akademischen Lehrer –, der die romanistische
                  Sprachwissenschaft bis 1957 in Ostberlin vertrat und dann nach
                  Heidelberg berufen wurde.</p>

                <h1>Interlinguistik und Esperanto</h1>
                <p>
                  Im Mittelpunkt meines Beitrags zur Festschrift Kattenbusch stehen einige
                  Probleme der Interlinguistik, der Esperantologie und damit des Esperanto
                  als der wichtigsten heute schriftlich wie mündlich zur Verfügung
                  stehenden und funktionierenden Welthilfssprache oder Plansprache. Dies
                  geschieht in der Annahme, dass sich mein Berliner Kollege Dieter
                  Kattenbusch nicht nur für linguistische, sondern auch für
                  interlinguistische Probleme interessieren dürfte.
                </p>

                <h2>Der Esperantist und Interlinguist Detlev Blanke</h2>
                <p>
                  Innerhalb der Linguistik hat die Interlinguistik als Teilbereich oder
                  Unterdisziplin erst allmählich einen gesicherten Platz gefunden. Dies
                  hängt sicher auch damit zusammen, dass der Gegenstand der
                  Interlinguistik nicht eindeutig bestimmt war; es wurde also – und wird
                  teilweise noch immer – Verschiedenes unter diesem Begriff subsumiert.
                  Um die Begriffsklärung haben sich in den letzten Jahren mehrere
                  international renommierte Fachvertreter erfolgreich bemüht (vgl.
                  Schubert 1989; Tonkin 1997; Sagaguchi 1998). Einen hervorragenden Platz
                  unter diesen nimmt der Ostberliner Interlinguist Detlev Blanke, Jahrgang
                  1941, ein, der – nach einem mehrjährigen, vor allem germanistischen
                  Studium an der Rostocker Universität und einem jahrelangen intensiven
                  Selbststudium des Esperanto sowie nach einigen Jahren Lehramt in der
                  Schule – 1976 an der Humboldt-Universität zu Berlin mit einer noch
                  vordergründig vergleichenden sprachwissenschaftlichen Arbeit
                  <i>Wortbildung im Esperanto und im Deutschen</i>
                  (Blanke 1981) promoviert hat.
                  Neun Jahre später habilitierte er sich an der Berliner Universität mit
                  der Habilitationsschrift <i>Internationale Plansprachen</i> (Blanke 1985)
                  interlinguistisch. Eines der Fachgutachten für diese grundlegende
                  Schrift wurde von mir im Auftrag der Gesellschaftswissenschaftlichen
                  Fakultät vorgelegt.
                </p>
                <p>
                  In ihrer Einführung zur 2011 erschienenen Festschrift <i>Florilegium
                    interlinguisticum – Detlev Blanke zum 70. Geburtstag</i> – stellen die
                  Herausgeber Cyril Brosch und Sabine Fiedler zutreffend fest: „Seine
                  Habilitation war die erste auf diesem Gebiet im Weltmaßstab. Er führte
                  damit das Fach Interlinguistik in die wissenschaftliche Landschaft ein
                  und ebnete so auch den Weg für nachfolgende Forschungen. 1988 wurde er
                  an die Humboldt-Universität zum ‚Honorardozenten für
                  Interlinguistik‘ berufen“ (Brosch/Fiedler 2011: 10). Detlev Blanke
                  hatte schon frühzeitig mit einer Fülle weiterer Initiativen die
                  Entwicklung der Interlinguistik befördert, die auch schon die
                  Herausgeber der Festschrift für Blanke zum 60. Geburtstag 2001
                  entsprechend gewürdigt haben (Fiedler/Liu 2001: 11–14). Ab 1965
                  erschien (bis 1990) die von Blanke ab 1968 herausgegebene Zeitschrift
                  <i>der esperantist</i> in Ostberlin; ab 1968 war Blanke Leiter der Abteilung
                  Interlinguistik/Esperantologie im Kulturbund der DDR, die ab 1981
                  weiterexistierte als Esperanto-Verband im Kulturbund der DDR (GDREA).
                  Auch hier entwickelte er jahrelang weltoffen die interlinguistischen
                  Studien durch wissenschaftliche Konferenzen, internationale Fachseminare
                  usw. Nach der politischen Wende erfolgte im Mai 1991 in Berlin die
                  konfliktfreie Vereinigung der beiden deutschen Esperanto-Verbände, wozu
                  Blanke als stellvertretender Vorsitzender von GDREA einen wesentlichen
                  Beitrag leistete. Im gleichen Jahr 1991 wurde dann die international
                  einzigartige <i>Gesellschaft für Interlinguistik e.V.</i> (GIL) gegründet,
                  deren erster Vorsitzender Detlev Blanke bis heute ist; gleichzeitig ist
                  er Herausgeber der <i>Interlinguistischen Informationen</i> der GIL und der
                  meisten der bislang erschienenen 17 umfangreichen <i>Beihefte</i>.
                  International wohlbekannt sind auch Blankes Aktivitäten innerhalb der
                  Weltkongresse der Universala Esperanto-Asocio (UEA), in deren Rahmen er
                  eine Serie internationaler Konferenzen organisierte. Im Jahr 1999 fand
                  in Berlin der 84. Esperanto-Weltkongress statt mit nahezu 200
                  Einzelveranstaltungen und 2700 Teilnehmern aus 66 Ländern (Wollenberg
                  2001: 490).
                </p>
                <p>
                  Die UEA war 1908 gegründet worden und ist heute mit fast 100
                  Landesverbänden in der ganzen Welt eng verbunden. Die Weltkongresse des
                  Esperanto-Weltbundes finden grundsätzlich in jedem Jahr statt; mehrere
                  Tausend Esperantisten aus 60 bis 80 Ländern nehmen daran teil.
                </p>
                <p>
                  Die Frage, mit welcher Sprecherzahl in Bezug auf das Esperanto gerechnet
                  werden kann, ist auch heute nicht klar zu beantworten. Die vorliegenden
                  Angaben sind widersprüchlich: unter Verweis auf den kanadischen
                  Esperantisten Mark Fetter (2003: 43) geht Sabine Fiedler (2011: 93)
                  von weniger als 150.000 Sprechern aus. Andere Schätzungen, so die von
                  Claude Piron (1989), auf die sich Fiedler auch beruft, liegen wesentlich
                  höher, von einer halben Million oder zwei bis 3,5 Millionen reichen die
                  Angaben (ebd.). Blanke ist durch eine Vielzahl einschlägiger
                  Publikationen (mehr als 1600) wissenschaftlich ausgewiesen; die Liste
                  seiner Veröffentlichungen für den Zeitraum 1958 bis 2011 bieten in
                  Auswahl Fiedler/Liu (2001: 681–725), Blanke (2006: 331–338) sowie
                  Brosch/Fiedler (2011: 19–28). Im Jahr 2011 gab Ulrich Becker im
                  Verlag Mondial in New York die Gesamtbibliographie von Detlev Blanke in
                  einem 234 Seiten umfassenden Werk in Esperanto und in deutscher Sprache
                  heraus (Becker 2011).
                </p>

                <h2>Interlinguistik – eine Begriffsbestimmung</h2>
                <p>
                  Zum Gegenstand der Interlinguistik hat sich Detlev Blanke mehrfach

                  ausdrücklich geäußert, (zuletzt 2006: 19–34, insbesondere 21ff.).
                  Der Terminus Interlinguistik (interlinguistique) wurde 1911 von dem
                  belgischen Forscher Jules Meysmans (vgl. Meysmans 1911–1912), dem
                  Herausgeber der wenig bekannten Zeitschrift <i>Lingua Internationale</i>,
                  eingeführt „für eine zu entwickelnde wissenschaftliche Disziplin
                  über internationale Hilfssprachen“ (Blanke 2006: 20). Anfang der
                  1930er Jahre hat der bedeutende dänische Linguist und Anglist Otto
                  Jespersen (1860–1943) – der 1928 ein eigenes Plansprachenprojekt
                  (Novial) erarbeitet und veröffentlicht hat, das jedoch kaum Bedeutung
                  erlangte – die Interlinguistik als neue Disziplin in der
                  Sprachwissenschaft fest etabliert (Jespersen 1928; 1930/1931; 1976) und
                  damit viele Arbeiten zu diesem Gegenstand und den Problemen dieser neuen
                  Disziplin angeregt. Es entwickeln sich bis heute verschiedene
                  Auffassungen, Richtungen, sogar Schulen, die Interlinguistik
                  unterschiedlich bestimmen und definieren. Blanke (2006: 22) versucht
                  diese Standpunkte in vier Positionen zu resümieren; Interlinguistik ist
                  <ol>
                    <li>
                      „die Wissenschaft von den internationalen Hilfssprachen (sowohl
                      Ethnosprachen in ihrer Funktion als Lingua franca als auch Plansprachen
                      bzw. nur Plansprachen)“,</li>
                    <li>
                      „die Wissenschaft von der internationalen sprachlichen
                      Kommunikation“, </li>
                    <li>
                      „kontrastive Linguistik, Linguistik der Mehrsprachlichkeit“,</li>
                    <li>
                      „die Wissenschaft von den Plansprachen Interlingue und
                      Interlingua“.</li>
                  </ol>
                </p>
                <p>
                  Innerhalb dieses weiten Rahmens ist auch das Interlinguistikkonzept des
                  Tübinger und dann Salzburger Romanisten Mario Wandruszka (1911–2004)
                  mit erfasst. Im Jahre 1971 hatte Wandruszka sein Werk <i>Interlinguistik.
                    Umrisse einer neuen Sprachwissenschaft</i> (Wandruszka 1971) bei Piper in
                  München publiziert. Im gleichen Jahr wurde Wandruszka mit einer
                  Festschrift <i>Interlinguistica</i> geehrt, die in Tübingen erschienen ist
                  (vgl. Bausch/Gauger 1971). 1973 hat sich Wandruszka nochmals
                  ausführlich mit seiner Interlinguistik, ihrem Gegenstand und deren
                  Vorläufern, die ebenfalls schon „kontrastive Linguistik“ betrieben,
                  beschäftigt, wobei Charles Bally (1865–1947) den Anfang gemacht habe
                  (Wandruszka 1973). Wandruszkas interlingual gefasstes Konzept basiert
                  auf der europäischen Mehrsprachigkeit und dem systematischen
                  kontrastiven Sprach- und Übersetzungsvergleich, den Wandruszka in
                  mehreren Büchern (Wandruszka 1979; 1984) umgesetzt hat. Wandruszka
                  untersucht kontrastiv, konfrontativ und differenziell ausgewählte
                  Bereiche des Wortschatzes, der Grammatik und der Idiomatik von sechs ihm
                  zur Verfügung stehenden europäischen Sprachen (Deutsch, Französisch,
                  Englisch, Italienisch, Spanisch und auch Portugiesisch).
                </p>
                <p>
                  Es erhebt sich dringend die Frage, ob es sinnvoll war, dafür den
                  spätestens seit Jespersen besetzten Terminus Interlinguistik zu
                  beanspruchen. Offensichtlich geschah dies in Unkenntnis der bis 1971
                  vorliegenden reichen originären interlinguistischen Fachliteratur
                  (Blanke 2006: 31). Die unter 3. genannte Position trägt also die
                  Bezeichnung Interlinguistik eigentlich zu Unrecht. Dies gilt offenbar
                  auch für die unter 4. klassifizierte Position; sie bezieht sich allein
                  auf zwei Plansprachen, so das Occidental-Interlingue, das der aus
                  Estland stammende Marineoffizier und spätere Mathematik- und
                  Physiklehrer Edgar de Wahl (1867–1948) im Jahre 1922 entwickelt hat,
                  und auf den Linguisten Alexander Gode (1906–1970), der 1951 im Rahmen
                  der New Yorker International Auxiliary Language Association (IALA) die
                  Plansprache Interlingua vorgelegt hat. Edgar de Wahl und Alexander Gode
                  haben ihr System nur gelegentlich als „interlinguistica“ bezeichnet.
                  Zur IALA, die von 1924 bis 1953 existiert und größere internationale
                  Konferenzen durchgeführt hat (so 1930 in Genf mit Otto Jespersen und
                  1936 in Kopenhagen), sowie zu de Wahl, Gode und André Martinet, der von
                  1946 bis 1955 an der New Yorker Columbia University wirkte und zudem von
                  1946 bis 1948 auch Direktor der IALA war, kann Blanke (1985: 167–173)
                  und Klare (2010: 20f.) eingesehen werden.
                </p>
                <p>
                  Von den vier Positionen, die Blanke differenziert hat, verbleiben somit
                  nur die Positionen 1 und 2, die allein den originären
                  interlinguistischen Gegenstand betreffen. Blanke (2006: 299) definiert
                  daher diese originäre Interlinguistik wie folgt: Interlinguistik ist
                  „der interdisziplinäre Zweig der Sprachwissenschaft […], der
                  sämtliche Mittel und Aspekte der internationalen sprachlichen
                  Kommunikation erforscht“. Und auf ihrer Internetseite hatte die von
                  Blanke geleitete Berliner GIL den Begriff der Interlinguistik ein paar
                  Jahre vorher wie folgt definiert: „Unter Interlinguistik verstehen wir
                  die Wissenschaft von der internationalen sprachlichen Kommunikation mit
                  allen ihren Aspekten. Das impliziert die Funktion, Struktur, Entwicklung
                  und Anwendung von Ethnosprachen und Plansprachen als internationale
                  Kommunikationsmittel“ (Becker 2001: 257). Ulrich Becker – einer
                  meiner ehemaligen Berliner Schüler – diskutiert in seinem Aufsatz
                  weitere im Internet verbreitete Definitionen des Fachbegriffs
                  Interlinguistik.
                </p>

                <h1>Zur Geschichte der Plan- und Welthilfssprachen</h1>
                <p>
                  Die Geschichte der internationalen Hilfssprachen, der Welthilfssprachen,
                  der Plansprachen reicht weit in die Jahrhunderte zurück; Descartes,
                  Leibniz und Comenius sind dafür in Anspruch zu nehmen (Couturat/Leau
                  1903; 1907). Seit der zweiten Hälfte des 19. Jahrhunderts liegen
                  mehrere Plansprachen vor, die von genialen linguistischen Laien
                  erarbeitet wurden, sich als sprech- und lesbar erwiesen und begonnen
                  haben, sich in der kommunikativen Praxis zu bewähren. Seit 1879 gilt
                  dies für das Volapük des badischen Prälaten Johann Martin Schleyer
                  (1831–1912) – eine regelrechte Volapük-Bewegung hat etwa ein ganzes
                  Jahrzehnt eine beachtliche Rolle gespielt. Und seit 1887 lebt das
                  Esperanto, das von dem polnischen Augenarzt Ludwik Lejzer Zamenhof
                  (1859–1917) als ausbaufähige Sprachskizze entworfen und umfassend
                  weltweit ausgebaut wurde. In mehr als 120 Jahren hat es
                  außerordentliche Durchsetzungskraft bewiesen, wird praktisch mündlich
                  wie schriftlich angewendet und funktioniert somit bestens. Seit dem
                  Zweiten Weltkrieg ist die Zahl der zum Esperanto vorgelegten
                  Untersuchungen immens gewachsen. Dies berechtigt nach Blanke (2006: 33)
                  dazu, „von einer eigenen linguistischen Disziplin, der Esperantologie,
                  zu sprechen“. Die stetig gewachsene Zahl der Esperanto-Nutzer bildet
                  eine weltweit agierende Kommunikationsgemeinschaft, für viele
                  Esperantisten eine weltweit agierende Sprechergemeinschaft und sogar
                  eine weltweit agierende Sprachgemeinschaft, die in ihrer Geschichte auch
                  Verfolgung und Repressalien ausgesetzt war, wie im deutschen NS-Staat.
                  So wurde der Deutsche Arbeiter-Esperanto-Bund in Leipzig 1933 verboten
                  und in der Sowjetunion herrschte das Verbot von 1938 bis 1956 (Lins
                  1988).
                </p>
                <p>
                  Kernbereich der Interlinguistik bleiben für Blanke (2006: 34) zu Recht
                  die Plansprachen, insbesondere das Esperanto. „Ohne Kenntnis des
                  Esperanto sind ernsthafte Forschungen zu Fragen der Interlinguistik
                  nicht möglich.“ Nebenbei ist noch zu erwähnen, dass der Terminus
                  Plansprache von Eugen Wüster (1898–1977) im Jahre 1931 eingeführt
                  wurde (Wüster 1970 [1931]). Wüster gilt als der Begründer der
                  Terminologiewissenschaft und als Mitbegründer der Esperantologie
                  (Wüster 1976), neben dem Genfer Mathematiker René de Saussure
                  (1868–1943), dem jüngeren Bruder von Ferdinand de Saussure
                  (1857–1913).
                </p>

                <h1>Esperanto – eine Minderheitensprache?</h1>
                <p>
                  In dem von Sabine Fiedler (Jahrgang 1957), der Begründerin der
                  esperantologischen Phraseologieforschung (1999), herausgegebenen
                  umfangreichen <i>Beiheft 16</i> (November 2009) der <i>Interlinguistischen
                    Informationen</i> der Berliner GIL, das thematisch
                  auf <i>Esperanto und andere
                    Sprachen im Vergleich</i> orientiert ist, publiziert Goro Christoph Kimura
                  einen Aufsatz „Esperanto als Minderheitensprache: Eine
                  sprachsoziologische Betrachtung“ (2009: 11–24). Kimura ist ein
                  japanischer, längere Zeit in Deutschland lebender und arbeitender
                  Soziolinguist und Esperantist und zugleich Professor an der
                  Sophia-Universität in Tokio. Seit 1994 ist er Mitglied der Berliner
                  GIL. Dem Verfasser geht es um die „Frage der Vergleichbarkeit von
                  Esperanto mit sog. Minderheitensprachen“, wobei er sich „auf den
                  sprachsoziologischen Aspekt beschränken will“ (ebd.: 11). Zu Beginn
                  seiner Ausführungen verweist Kimura nicht zufällig darauf, dass der
                  seit 1908 bestehende Esperanto-Weltbund (UEA) im Jahre 2008 in einem
                  Dokument festgestellt habe, „Universala Esperanto-Asocio subtenas
                  minoritatajn lingvojn de pli ol 100 jaroj“, also: Der
                  Esperanto-Weltbund unterstützt die Minderheitensprachen seit über 100
                  Jahren. Ausgehend vom aktuellen Zustand fragt sich Kimura sogar, „ob
                  Esperanto nicht selber als Minderheitensprache aufgefasst werden kann“
                  (ebd.: 13), angeregt durch eine Feststellung des Toronter Esperantisten
                  Mark Fetter (1996) schon im Titel seines Zeitschriftenaufsatzes in der
                  niederländischen Fachzeitschrift <i>Language Problems and Language
                    Planning</i>: „The Esperanto Community: A Quasi-ethnic Linguistic
                  Minority?“. Mark Fetter regt einen Vergleich an mit „anderen“
                  sprachlichen Minderheiten, wobei dieser Aufruf bislang kaum Resonanz
                  gefunden hat. Kimura greift diesen Aufruf beherzt auf als jemand, „der
                  sich seit Anfang der 1990er Jahre mit Esperanto und fast gleichzeitig
                  auch mit Minderheitensprachen, vor allem in Japan und Europa,
                  beschäftigt hat“ (Kimura 2009: 13). Kimura hat im Osten Deutschlands
                  das Sorbische und in Großbritannien (Cornwall) das Kornische intensiv
                  erforscht, wobei Letzteres eine neuerdings wiederbelebte keltische
                  Minderheitensprache ist, die im 18. Jahrhundert fast ausgestorben war
                  und heute wieder einige Tausend Sprecher aufweist. Beide Sprachräume,
                  Sorbisch wie Kornisch, werden in die Argumentation Kimuras einbezogen.
                </p>
                <p>
                  Im ersten Vergleich mit anderen Minderheitensprachen stellt Kimura fest,
                  „dass Esperanto-Sprecher […] immer und in allen Ländern und
                  Regionen zahlenmäßig in der Minderheit waren und dass diese Sprache
                  nur ausnahmsweise einen anerkannten Status in einer öffentlichen
                  nationalen oder internationalen Institution erlangte“ (ebd.: 13).
                  Kimura meint, dass schon diese Tatsache es erlaube, die Plansprache als
                  Minderheitensprache zu „qualifizieren“. Hinzu kommt für Kimura,
                  dass zwischen den nicht allzu zahlreichen Esperanto-Sprechern eine
                  „Intimität“ entstehe, sich eine Gemeinschaft herausbilde und dass
                  Esperanto somit wie bei Minderheitensprachen auch „die Funktion eines
                  Identifikationsmittels“ (ebd.: 15) erfülle. Zudem seien Minderheiten
                  von Seiten der jeweils dominierenden Mehrheit Belästigungen ausgesetzt,
                  die auf Vorurteilen und den bestehenden Machtverhältnissen beruhen;
                  dies „gilt für Minderheitensprachen und auch für Esperanto“
                  (ebd.). Kimura sieht also eine Reihe von Gemeinsamkeiten zwischen
                  Esperanto und Minderheitensprachen. Dennoch kann sich Kimura nicht dem
                  verständlichen Einwand verschließen, dass es trotz bestehender
                  Gemeinsamkeiten „doch erhebliche Unterschiede zwischen Esperanto und
                  Minderheitensprachen gibt“ (ebd.: 17).
                </p>
                <p>
                  Traditionell gilt für die Minderheitensprachen normalerweise, dass ihre
                  Sprecher im jeweils angestammten Siedlungsgebiet als kompakte
                  Siedlungsgruppe auftreten und sich dort in der Mehrheit befinden;
                  dennoch gilt schon für manche Region mit Minderheitensprache, dass es
                  kaum mehr reine Sprachgebiete für die jeweils gesprochene
                  Minderheitensprache gibt, sodass das Verbreitungsterrain nicht mehr
                  überall als kompakte Fläche erscheint, sondern eher als Punkte
                  darzustellen wäre; es sind in solchen Fällen jeweils nur bestimmte
                  Ortsgruppen oder sogar nur noch Einzelpersonen anzutreffen, die die
                  Sprache beherrschen. Kimura glaubt daraus ableiten zu können, „die
                  Verbreitung von Esperanto-Sprechern könnte man auch nicht anders
                  kartographisch darstellen“ (ebd.: 18). Hinzu käme, dass sich
                  Minderheitensprachen heute oft nicht mehr auf das jeweilige angestammte
                  traditionelle Siedlungsgebiet beschränken: „Die Netzwerke der
                  Sprecher bestehen über die Grenzen der Region hinweg“ (ebd.: 19). Die
                  heutigen modernen Medien, Internet etc. eröffnen diese großen
                  Möglichkeiten. Trotzdem muss Kimura der für uns wichtigen
                  grundsätzlichen Feststellung zustimmen: „Das angestammte
                  Siedlungsgebiet wird für viele Sprachminderheiten weiterhin von
                  zentraler Bedeutung sein“ (ebd.). Für uns ist und bleibt dies sogar
                  das Hauptbestimmungskriterium für das Vorliegen eines
                  Minderheitensprachen-Status. In diesen Gebieten sind und bleiben die
                  Minderheitensprachen Muttersprachen; und auch dies steht im flagranten
                  Gegensatz zu jeder Plansprache, also auch in Bezug auf das Esperanto.
                  Nicht nur Blanke hat mehrfach (auch 1995: 74) festgestellt, dass es
                  „nicht die Aufgabe einer Plansprache ist, als Muttersprache zu
                  funktionieren“. Das Vorhandensein eines kompakten Siedlungsgebietes
                  ist auch im ethnosprachlichen Kontext Hauptvoraussetzung für die
                  Anerkennung einer Sprache als Minderheitensprache. So wird den
                  nomadisierenden „<i>zingari</i>“ in Teilen Italiens der
                  Minderheitensprachen-Status nicht zuerkannt. Gleiches gilt für die
                  Tausenden von Arbeitsmigranten, von immigrierenden (Gast-)Arbeitern in
                  Italien und in anderen europäischen Ländern; ihre Sprachen gelten bis
                  heute nicht als Minderheitensprachen (Kattenbusch 1995: 105ff.).
                </p>
                <p>
                  Esperanto-Sprecher streben die Realisierung der sprachlichen
                  Gleichberechtigung an; auch die Sprecher von Minderheitensprachen haben
                  ähnliche, wenn nicht gleiche Ziele. Ein Ziel der Esperanto-Sprecher
                  wird es wohl kaum sein, sich als Minderheitensprache zu verstehen und
                  damit eine neue Minderheitensprache zu deklarieren. Normalerweise ist
                  eine Minderheitensprache „eine vollwertige, alternative Sprache“ in
                  dem jeweiligen Teil des Landes, in dem sie verwendet wird. Dagegen
                  kämpft das Esperanto für manchen Betrachter noch immer gegen das böse
                  Vorurteil, es diene doch nur „irgendeinem esoterischen
                  ‚Hobby-Klub‘“ (Kimura 2009: 20).
                </p>
                <p>
                  Nur unter einem ganz bestimmten, verengten Blickwinkel, bei dem die
                  Bezeichnung Minderheit semantisch eher
                  allgemeinsprachlich-vorwissenschaftlich und nicht terminologisiert im
                  Sinne eines linguistisch gefassten Terminus verstanden wird, erscheint
                  das Esperanto vage als De-facto-Minderheitensprache, wobei
                  grundsätzliche Bedenken bestehen bleiben müssen, weil es eben zwischen
                  Minderheitensprachen und Esperanto nicht nur Verbindendes, sondern auch
                  Trennendes gibt. Dahingestellt bleibt auch, ob die Betrachtung des
                  Esperanto als De-facto-Minderheitensprache dem Ansporn und Ziel der
                  Esperantobewegung dienlich ist, es in der internationalen Kommunikation
                  stärker durchzusetzen.
                </p>
                <p>
                  Für die weltweite Durchsetzung einer Plansprache halten viele Fachleute
                  – unter diesen der bedeutende französische Linguist und Interlinguist
                  André Martinet (1908–1999) und der weltbekannte italienische
                  Semiotiker und Linguist Umberto Eco (Jahrgang 1932) die gegenwärtigen
                  Gegebenheiten für durchaus günstig, wobei nach Eco jedoch eine
                  „politische Entscheidung flankiert von einer entsprechend geplanten
                  weltweiten Medienkampagne“ – und er sieht hier „eine
                  übernationale Behörde (wie die UNO oder das Europäische Parlament)“
                  in der Pflicht – dafür entscheidend wären (Eco 1997: 337f.). Wie
                  ich an anderer Stelle zeigen konnte, sah also auch André Martinet
                  wiederholt die Notwendigkeit der politischen Willensentscheidung als
                  unabdingbare Voraussetzung für die rasche und nachhaltige Verbreitung
                  einer Welthilfssprache vom Format des Esperanto (Klare 2010: 9–37).
                </p>
                <p>
                  Martinet hat sich mehrfach für das Esperanto als Lingua franca
                  ausgesprochen und dies gegen alle gegenwärtig vorherrschenden
                  Tendenzen, das Englische – besser das Angloamerikanische – als
                  Lingua franca weiter zu befördern. Martinet wendet sich scharf auch
                  gegen modifizierte und reduzierte Formen des Englischen wie das „Basic
                  English“, das seit 1930 propagiert wurde. Martinet gehört zu
                  denjenigen, die sich energisch für den weltweiten Einsatz einer von
                  allen Ethnien gleichermaßen zu erlernenden Fremdsprache engagiert
                  haben. Esperanto ist für Martinet fast immer eine gute Option dafür
                  gewesen (vgl. Martinet 1987; 1991; 1993).  Esperanto existiert nur als
                  Fremdsprache und damit nicht als Muttersprache; Esperanto muss also von
                  jedem als Fremdsprache erlernt werden; es gibt normalerweise keine
                  Native Speaker dieser Plansprache. Jeder Sprecher einer Plansprache ist
                  somit – natürlich wie üblich bei Fremdsprachen noch auf
                  unterschiedlichem Niveau – mindestens bilingual, d.h. zweisprachig.
                  Wird eine Plansprache mündlich oder schriftlich als alleiniges
                  Verständigungsmittel in einer solchen Kommunikationssituation
                  eingesetzt, dann ist jeder Teilhaber quasi zumindest sprachlich
                  gleichberechtigt; keiner genießt den Vorzug, dass er die kommunikativ
                  eingesetzte Sprache vorteilhaft mit muttersprachlicher Kompetenz
                  gebraucht (Klare 2010: 25).
                </p>
                <p>
                  Doch die heutige Wirklichkeit sieht noch immer anders aus. Schon der
                  Blick auf Europa bestätigt dies: Die Europäische Union, eine
                  Gemeinschaft von 27 Staaten mit – zumindest de jure – 23
                  gleichberechtigten Sprachen bietet in praxi eine andere Situation. De
                  facto dominiert das Englische, wie Robert Phillipson (1996; 2003; 2009)
                  und viele andere wie Sabine Fiedler (2010: 211) gezeigt haben. Man hat
                  diese Situation durchaus nicht zu Unrecht als sprachlichen Imperialismus
                  des Angloamerikanischen in der heutigen Welt bezeichnet, so Phillipson.
                </p>

                <h1>Resümee</h1>
                <p>
                  Zusammenfassend ist festzustellen, dass es vielleicht verlockend –
                  aber gewiss nicht unproblematisch – ist, die Plansprache Esperanto in
                  Bezug zu den Minderheitensprachen zu setzen. Dabei ist zu beachten, dass
                  bei diesen Erörterungen „Minderheit“ zuweilen eben eher im
                  landläufigen, vorwissenschaftlichen Sinn gebraucht wird und nicht
                  konsequent im terminologisierten linguistisch festgelegten Sinn der
                  Minderheitensprachentheorie. Es gibt offensichtlich gewisse
                  Berührungspunkte zwischen Esperanto, anderen Plansprachen und gängigen
                  ethnosprachigen Minderheitensprachen in Europa und anderswo.
                  Entscheidend aber ist das Trennende in Bezug auf das Esperanto: Es ist
                  das Nichtvorhandensein, die Nichterfüllung des wichtigsten
                  Bestimmungskriteriums für eine sprachliche Minderheit/Minorität. Es
                  besitzt kein historisch angestammtes kompaktes Siedlungsgebiet innerhalb
                  des größeren, von der politisch, rechtlich usw. dominanten Mehrheit
                  beanspruchten Territoriums. Das Esperanto und damit die
                  Esperanto-Sprecher bilden eine verstreut auftretende
                  Kommunikationsgemeinschaft. Diese tritt eher punktuell und kaum kompakt
                  in Erscheinung; sie ist aber entwicklungs- und ausbaufähig. Das Wenige,
                  das als verbindend zwischen Esperanto und Minderheitensprachen ins Feld
                  geführt werden konnte, ist kaum ausreichend, um sinnvollerweise
                  Esperanto als Minderheitensprache in Anspruch zu nehmen. Meine Antwort
                  lautet also: Das Esperanto ist keine Minderheitensprache in dem Sinne,
                  wie die linguistische Forschung die Kategorie Minderheitensprache
                  bislang bestimmt und definiert hat. Dies lässt unberührt, dass es noch
                  Defizite bei der Fixierung solider und brauchbarer Kriterien zur
                  zweifelsfreien Bestimmung dessen gibt, was eine Minderheitensprache
                  auszeichnet.
                </p>
                <p>
                  Auch Dieter Kattenbusch als romanistischer Minderheitensprachenexperte
                  wird hier sicher nicht ohne gewisse Reserven an die für das Esperanto
                  aufgeworfene Problematik herangehen.
                </p>

                <h1>Anmerkungen</h1>
                <p><sup><a href="#fz1" name="fn1">1</a></sup>
                  Hervorragend ausgewiesen ist Kattenbusch zudem als Spezialist für das
                  Dolomitenladinische und dessen vom Sellamassiv ausgehende
                  Talschaftsvarietäten, die er unter dem Sammelbegriff Sellaladinisch
                  zusammengefasst hat.</p>


                <h1>Literatur</h1>

                <p class="bibl">
                  Bausch, Karl-Richard/Gauger, Hans-Martin (Hg.) (1971):
                  <i>INTERLINGUISTICA. Sprachvergleich und Übersetzung. Festschrift zum 60.
                    Geburtstag von Mario Wandruszka</i>, Tübingen.
                </p>
                <p class="bibl">
                  Becker, Ulrich (2001): Interlinguistik und Internet, in: Sabine Fiedler/Haitao Liu (Hg.): 254–277.
                </p>
                <p class="bibl">
                  – (Hrsg.) (2011): <i>Interlingvistiko kaj Esperantologio. Bibliografio de
                    la publikaĵoj de Detlev Blanke …/Interlinguistik und Esperantologie.
                    Bibliographie der Veröffentlichungen von Detlev Blanke</i>, New York.
                </p>
                <p class="bibl">
                  Blanke, Detlev (1981): Plansprachen und Nationalsprachen. Einige
                  Probleme der Wortbildung des Esperanto und des Deutschen in
                  Konfrontation, in: <i>Linguistische Studien</i>, Reihe A, 85. Berlin.
                </p>
                <p class="bibl">
                  – (1985): <i>Internationale Plansprachen. Eine Einführung</i>, Berlin.
                </p>
                <p class="bibl">
                  – (1995): Esperanto in soziolinguistischer Sicht, in: Jürgen Scharnhorst (Hg.): 69–81.
                </p>
                <p class="bibl">
                  – (2006): <i>Interlinguistische Beiträge. Zum Wesen und zur Funktion
                    internationaler Plansprachen</i>, Frankfurt a.M. et al.
                </p>
                <p class="bibl">
                  –/Scharnhorst, Jürgen (Hg.) (2007): <i>Sprachenpolitik und
                    Sprachkultur</i>, Frankfurt a.M. et al.
                </p>
                <p class="bibl">
                  Brosch, Cyril/Fiedler, Sabine (Hg.) (2011): <i>Florilegium
                    interlinguisticum. Festschrift für Detlev Blanke zum 70. Geburtstag</i>,
                  Frankfurt/Main et al.
                </p>
                <p class="bibl">
                  Couturat, Louis/Leau, Léopold (1903): <i>Histoire de la langue
                    universelle,</i> Paris.
                </p>
                <p class="bibl">
                  – (1907): <i>Les nouvelles langues internationales</i>, Paris.
                </p>
                <p class="bibl">
                  Eco, Umberto (1997): <i>Die Suche nach der vollkommenen Sprache</i>. Aus dem
                  Italienischen von Burkhart Kroeber, München.
                </p>
                <p class="bibl">
                  Ertler, Klaus-Dieter (Hg.) (2011): <i>Romanistik als Passion.
                    Sternstunden der neuen Fachgeschichte II</i>, Wien/Berlin.
                </p>
                <p class="bibl">
                  Fetter, Mark (1996): The Esperanto Community: A Quasi-ethnic Linguistic
                  Minority?, in: <i>Language Problems and Language Planning</i> 20(1): 53–59.
                </p>
                <p class="bibl">
                  – (2003): The geostrategies of interlingualisme, in: Maurais,
                  Jacques/Morris, Michael A. (Hg.): 37–45.
                </p>
                <p class="bibl">
                  Fiedler, Sabine (1999): <i>Plansprache und Phraseologie. Empirische
                    Untersuchungen zu reproduziertem Sprachmaterial im Esperanto</i>,
                  Frankfurt a.M. et al.
                </p>
                <p class="bibl">
                  – (Hg.) (2009): <i>Esperanto und andere Sprachen im Vergleich.
                    Interlinguistische Informationen</i>, Beiheft 16. Berlin (GIL).
                </p>
                <p class="bibl">
                  – (2010): The English-as-a-lingua-franca-approach: Linguistic fair
                  play?, in: <i>Language Problems and Language Planning</i> 34(3): 201–221.
                </p>
                <p class="bibl">
                  – (2011): Das Thema Plansprachen (Esperanto) in der aktuellen
                  sprachpolitischen Fachliteratur, in: Cyril Brosch/Sabine Fiedler
                  (Hg.): 79–105.
                </p>
                <p class="bibl">
                  –/Liu, Haitao (Hg.) (2001): <i>Studoj pri
                    interlingvistiko/Studien zur Interlinguistik. Festschrift für Detlev
                    Blanke zum 60. Geburtstag</i>, Dobrichovice-Praha.
                </p>
                <p class="bibl">
                  Haupenthal, Reinhard (Hg.) (1976): <i>Plansprachen. Beiträge zur
                    Interlinguistik</i>, Darmstadt.
                </p>
                <p class="bibl">
                  Jespersen, Otto (1928): <i>An international language</i>, London
                  (Eine internationale Sprache. Heidelberg 1928).
                </p>
                <p class="bibl">
                  – (1930/31): A new science: Interlinguistics, in: <i>Psyche</i> (London) 11:
                  57–67.
                </p>
                <p class="bibl">
                  – (1976): Interlinguistik – eine neue Wissenschaft. Aus dem
                  Englischen, in: Reinhard Haupenthal (Hg.): 148–162.
                </p>
                <p class="bibl">
                  Kattenbusch, Dieter (1995): Die Lage der Minderheiten in Italien, in:
                  ders. (Hg.): 95–116.
                </p>
                <p class="bibl">
                  – (Hg.) (1995): <i>Minderheiten in der Romania.</i> Wilhelmsfeld.
                </p>
                <p class="bibl">
                  Kimura, Goro Christoph (2009): Esperanto als Minderheitensprache: Eine
                  sprachsoziologische Studie, in: Sabine Fiedler (Hg.): 11–24.
                </p>
                <p class="bibl">
                  Klare, Johannes (2010): André Martinet (1908–1999) – Ein
                  bedeutender französischer Linguist und Interlinguist des 20.
                  Jahrhunderts, in: <i>Interlinguistische Informationen</i>, Beiheft 17, Berlin
                  (GIL): 9–37.
                </p>
                <p class="bibl">
                  – (2011): „Ein Niedergang“ – oder doch eine weltoffene, wenn
                  auch etwas andere Romanistik?, in: Klaus-Dieter Ertler (Hg.):
                  161–179.
                </p>
                <p class="bibl">
                  – (2012): <i>Max Leopold Wagner (1880–1962) und die Romanistik an der
                    Berliner Friedrich-Wilhelms-Universität</i>, im Druck.
                </p>
                <p class="bibl">
                  Lins, Ulrich (1988): <i>Die gefährliche Sprache. Die Verfolgung des
                    Esperanto unter Hitler und Stalin</i>, Gerlingen.
                </p>
                <p class="bibl">
                  Martinet, André (1987): Intervention d’André Martinet, linguiste.
                  Inauguration de l’année du centenaire de l’Esperanto 16 décembre
                  1986 au siège de l’UNESCO, in: <i>Revue française d’Esperanto</i> 5(379):
                  62–64.
                </p>
                <p class="bibl">
                  – (1991): Sur quelques questions d’interlinguistique. Une interview
                  de François Lo Jacomo et Detlev Blanke, in: <i>Zeitschrift für Phonetik,
                    Sprachwissenschaft und Kommunikationsforschung</i> 44: 675–687.
                </p>
                <p class="bibl">
                  – (1993): <i>Mémoires d’un linguiste. Vivre les langues. Entretiens
                    avec Georges Kassai et avec la collaboration de Jeanne Martinet</i>, Paris.
                </p>
                <p class="bibl">
                  Maurais, Jacques/Morris, Michael A. (Hg.) (2003): <i>Languages in a
                    Globalising World</i>, Cambridge.
                </p>
                <p class="bibl">
                  Meysmans, Jules (1911–1912): Une science nouvelle, in: <i>Lingua
                    internationale</i> 1(8): 14–16. Auch (in deutscher Sprache) in:
                  Reinhard Haupenthal (Hg.) (1976): 11–12.
                </p>
                <p class="bibl">
                  Phillipson, Robert (1996): <i>Linguistic imperialism</i>, Oxford.
                </p>
                <p class="bibl">
                  – (2003): English-Only Europe? Challenging Language Policy,
                  London/New York.
                </p>
                <p class="bibl">
                  – (2009): <i>Linguistic Imperialism Continued</i>, London/New York.
                </p>
                <p class="bibl">
                  Piron, Claude (1989): Who are the speakers of Esperanto?, in: Klaus Schubert (Hg.): 157–172.
                </p>
                <p class="bibl">
                  Sagaguchi, Alicja (1998): <i>Interlinguistik. Gegenstand, Ziele, Aufgaben,
                    Methoden</i>, Frankfurt a.M. et al.
                </p>
                <p class="bibl">
                  Scharnhorst, Jürgen (Hg.) (1995): <i>Sprachsituation und Sprachkultur im
                    internationalen Vergleich</i>, Frankfurt a.M. et al.
                </p>
                <p class="bibl">
                  Schubert, Klaus (Hg.) (1989): <i>Interlinguistics. Aspects of the Science
                    of Planned Languages</i>, Berlin/New York.
                </p>
                <p class="bibl">
                  Tonkin, Humphrey (Hg.) (1997): <i>Esperanto, Interlinguistics & Planned
                    Languages</i>, Lanham/New York/London.
                </p>
                <p class="bibl">
                  Wandruszka, Mario (1969): <i>Sprachen, vergleichbar und unvergleichlich</i>,
                  München.
                </p>
                <p class="bibl">
                  – (1971): <i>Interlinguistik. Umrisse einer neuen Sprachwissenschaft</i>,
                  München.
                </p>
                <p class="bibl">
                  – (1973): Interlinguistik, in: Goethe-Institut (Hg.): <i>Beiträge zu
                    den Fortbildungskursen des Goethe-Instituts für Deutschlehrer und
                    Hochschulgermanisten aus dem Ausland</i>, München: 39–52.
                </p>
                <p class="bibl">
                  – (1979): <i>Die Mehrsprachigkeit des Menschen</i>, München.
                </p>
                <p class="bibl">
                  – (1984): <i>Das Leben der Sprachen. Vom menschlichen Sprechen und
                    Gespräch</i>, Stuttgart.
                </p>
                <p class="bibl">
                  Wollenberg, Fritz (2001): Erfahrungen bei der Erforschung und
                  Darstellung der Berliner Esperanto-Geschichte, in: Sabine Fiedler/Haitao Liu (Hg.): 487–503.
                </p>
                <p class="bibl">
                  Wüster, Eugen (1970 [1931]): <i>Internationale Sprachnormung in der
                    Technik,</i> Berlin/Bonn.
                </p>
                <p class="bibl">
                  – (1976): Die Benennungen ‚Esperantologie‘ und
                  ‚Interlinguistik‘, in: Reinhard Haupenthal (Hg.): 271–277.
                </p>
                <p class="bibl">
                  <h1>Internetquellen:</h1>
                  <a href="http://www.interlinguistik-gil.de/">http://www.interlinguistik-gil.de/</a>
                  (Zugriff: 21. Juli 2011)
                </p>
              </article>
            </section>
          </div>
        </div>


        <div align="right">
          <a href="#index"><img src={upArrow} alt="Up Arrow" /></a>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Klare;