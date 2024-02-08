import Footer from "../Footer";
import Rubrik from "../Rubrik";
import UpArrow from "../UpArrow";
import SteinPortrait from "../../images/pstein/pstein-portrait.jpg";
import Header from "../Header";

function Stein(props) {
    return (
        <div>

            <div id="Wrapper" className="container_14">

                <div id="Header">
                    <Header id={props.author} />
                    <div className="grid_9">
                        <h1 id="main_title">„Pourquoi et comment élaborer une orthographe
                            pour des langues romanes non encore codifiées? Quelques réflexions
                            comparatives à propos de la codification du ladin des Dolomites et du
                            créole mauricien“<sup><a href="#fn1" name="fz1">1</a></sup> – und was
                            sich in 20 Jahren geändert hat</h1>
                        <p id="author">Peter Stein, Kiel</p>
                    </div>
                    <Rubrik />
                </div>

                <div id="Teasers" className="clearfix">
                    <div className="grid_9">
                        <p>
                            Auf dem Kongress der <i>Socièté de linguistique romane</i> in Santiago de
                            Compostela im Herbst 1989 konnte ich den im Titel genannten und mit dem
                            damals Fast-Tetragenarius Dieter Kattenbusch gemeinsam verfassten
                            Beitrag zur Verschriftung und orthographischen Standardisierung zweier
                            „romanischer Kleinsprachen“ – Dolomitenladinisch und Kreolisch auf
                            Mauritius – vortragen. Inzwischen sind über 20 Jahre vergangen, was
                            man uns ja vielleicht ansieht. Also Zeit zu fragen: „Was ist in deinem
                            Gebiet in diesen zwanzig Jahren passiert?“ – In meinem Gebiet hat
                            sich jedenfalls sehr viel getan, in Mauritius vielleicht noch mehr als
                            in anderen, vergleichbaren Gebieten. Ich möchte deswegen an den
                            damaligen Beitrag – allerdings einseitig – anknüpfen und den Teil
                            zu Mauritius <i>updaten</i>.
                        </p>
                        <p>
                            Am Ende des Beitrages (p. 148) konnte man damals lesen:
                        </p>
                        <p className="quote">
                            «Cet aspect pratique s’ajoute à Maurice à l’aspect culturel et
                            nous semble être encore plus important, de sorte qu’il serait
                            souhaitable que la politique arrive enfin à des décisions et mesures
                            favorables au créole pour l’établir comme langue écrite et langue
                            de l’enseignement.»
                        </p>
                        <p>
                            Aber gleichzeitig auch
                        </p>
                        <p className="quote">
                            «Mais les préjugés contre le créole subsistent. Dans l’opinion de
                            beaucoup, il n’est pas une langue à part entière.»
                        </p>
                    </div>
                    <div className="grid_5">
                        <div className="abouttheauthor">
                            <img src={SteinPortrait} width="110"
                                height="143" alt=" - Portrait" />
                            <div className="abouttheauthorfont"><br /><br />
                                <b>Peter Stein</b>, Prof. Dr., Professor für romanische
                                Sprachwissenschaft der Christian-Albrechts-Universität zu Kiel
                                (Vertretung). Studium in Marburg, Promotion und Habilitation in
                                Regensburg.
                                <br />
                                <span style={{ color: "#666666" }}>Dann viel unterwegs, darunter sieben Jahre am Institut für Romanistik
                                    der Humboldt-Universität zu Berlin, und jetzt wieder unterwegs, zurzeit
                                    eben Kiel, und das nächste Fahrtziel steht auch schon fest, verrate ich
                                    aber noch nicht.</span>

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
                                    Von der Praxis her gab es zu diesem Zeitpunkt noch mehrere
                                    konkurrierende Orthographiesysteme, von denen das System LPT der
                                    Bewegung <i>Ledikasyon pou Travayer</i> dominierte, aus dem einfachen Grund,
                                    dass man dort über mehr finanzielle Mittel und einen gut ausgestatteten
                                    Verlag verfügte. Dev Virahsawmy, der in den Jahren nach 1967 die
                                    Überlegungen zu einer „modernen“, d.h. phonetisch-phonologisch
                                    basierten Schreibung, überhaupt erst in die Wege geleitet hatte, wollte
                                    dieses System nicht zu dem seinen machen, musste aber gleichzeitig
                                    akzeptieren, dass sein ursprüngliches System „überholt“ war.<sup><a href="#fn2" name="fz2">2</a></sup> Er
                                    versuchte sich an verschiedenen neuen Ansätzen, die hier im Detail
                                    nicht weiter von Interesse sind, da sie ohne Folgen blieben. Den ersten
                                    dieser Versuche haben wir damals, 1992, noch vorgestellt.<sup><a href="#fn3" name="fz3">3</a></sup>
                                </p>
                                <p>
                                    Inzwischen ist das Kreolische in Mauritius immer mehr öffentlichkeits-
                                    und damit auch politikfähig geworden. Es wurde Schritt für Schritt
                                    akzeptiert, ohne dass sich dies, zumindest aus der Ferne, hier genau
                                    dokumentieren ließe. Vielleicht nicht in hochoffiziellen Kontexten,
                                    doch gleich im Anschluss daran, und vielleicht auch schon vorher, sprach
                                    man unter den gleichen Akteuren, solange der Kontext weniger offiziell
                                    war, Kreolisch miteinander. Und – es mag nach der vorausgegangenen,
                                    beinahe jahrzehntelangen Diskussion fast wie ein Wunder klingen – man
                                    einigte sich auf ein gemeinsames System, <i>Grafi-larmoni</i>. Alle verwenden
                                    es, auch die Politik und sogar die katholische Kirche. Als 2009 das
                                    <i>Diksioner Morisien</i> von Arnaud Carpooran erschien, mit einem Umfang von
                                    über 1000 Seiten, dessen Druck von namhaften Unternehmen unterstützt
                                    wurde, war es das <i>Premie diksioner kreol monoleng dan Lemond</i>.<sup><a href="#fn4" name="fz4">4</a></sup> Die neue
                                    Orthographie war damit endgültig etabliert, auch wenn die Unterschiede
                                    zu den vorausgehenden Systemen von LPT und von Virahsawmy nicht allzu
                                    groß waren. Man hatte sich zusammengesetzt und sich auf eine gemeinsame
                                    Lösung geeinigt,<sup><a href="#fn5" name="fz5">5</a></sup> und diese Lösung wird propagiert!
                                </p>
                                <p>
                                    Das neueste Ergebnis ist eine im April 2011 erschienene Publikation der
                                    <i>Akademi Kreol Morisien</i> mit dem Titel <i>Lortograf Kreol Morisien</i>, mit
                                    ministeriellem Vorwort und Widmung (zunächst in englischer Sprache,
                                    denn dies ist ja die offizielle Sprache von Mauritius, und gefolgt von
                                    der kreolischen Version) von Dr. Hon. Vasant K. Bunwaree, Minister of
                                    Education and Human Resources.<sup><a href="#fn6" name="fz6">6</a></sup> Dort kann man lesen:
                                </p>
                                <p className="longcitation">
                                    It is with immense pleasure that I present today to the entire
                                    population of Mauritius this first document produced by the Akademi
                                    Kreol Morisien (AKM) entitled „Lortograf Kreol Morisien“.
                                    <br />
                                    This document represents the collective effort of a dedicated group that
                                    has for long been militating for the establishment of Kreol Morisien as
                                    an official language and for the introduction of Kreol Morisien into the
                                    classroom.
                                    <br />
                                    The government in which I have the pleasure and honour to serve as a
                                    State Minister has made it a crucial part of its policy to give this
                                    language its legitimate place in the education system. This is not so
                                    much because it will merely help our pupils to better apprehend concepts
                                    and knowledge, but principally because a mother tongue needs to be
                                    ascribed its due credentials.<br />
                                    […]
                                </p>
                                <p>
                                    In der kreolischen Übersetzung der <i>Mesaz Minis Ledikasion ek
                                        Resours Imin</i> lautet dies:
                                </p>
                                <p className="longcitation">
                                    Se avek enn gran plezir ki mo pe prezant premie dokiman ki Akademi Kreol
                                    Morisien finn prodir pou popilasion Moris anantie. So tit se
                                    „Lortograf Kreol Morisien“.
                                    <br />
                                    Sa dokiman-la reprezant zefor kolektif enn group dimounn devwe, ki pa
                                    finn aret milite pou ki Kreol Morisien vinn enn lang ofisiel e ki li
                                    rant dan lekol.
                                    <br />
                                    Mo ena plezir ek loner fer parti enn gouvernman ki konsider introdiksion
                                    Kreol Morisien kouma enn priorite. Sa montre ki nou krwar ki sa
                                    langaz-la ena so plas lezitim dan lekol. Pa zis parski li pou donn enn
                                    koudme nou bann zanfan konpran bann konsep, me prinsipalman parski nou
                                    krwar ki li nou devwar donn tou rekonesans enn langaz maternel.<br />
                                    […]
                                </p>
                                <p>
                                    Und in <i>Le Matinal</i> war am 31. März 2011 unter der Überschrift <i>Le kreol
                                        morisien sur les bancs de l’école dès janvier 2012</i> zu lesen, wie in
                                    der Presse in Mauritius bisher fast üblich in französischer Sprache,
                                    dass „l’introduction du kreol morisien comme matière optionnelle à
                                    l’école primaire se fera en janvier 2012. C’est ce qu’a déclaré
                                    le ministre de l’Education Vasant Bunwaree.“
                                </p>
                                <p>
                                    Welch eine Entwicklung! Bei meinen Feldforschungen 1975 zu <i>Connaissance
                                        et emploi des langues à l’Ile Maurice</i><sup><a href="#fn7" name="fz7">7</a></sup> war das Kreolische im Grunde
                                    ein Nicht-Thema. Im März 2009, als ich an der <i>Mauritius University</i>
                                    einen Vortrag über diese Arbeit (und Zeit) halten konnte – der
                                    gleichzeitig auch eine Geschichtsstunde für die heutigen Studierenden
                                    war – konnte man danach im Bericht des <i>Le Matinal</i> zur Situation des
                                    Kreolischen damals lesen:
                                </p>
                                <p className="longcitation">
                                    Le créole était considéré comme subversif. Le MMM<sup><a href="#fn8" name="fz8">8</a></sup> avait choisi cette
                                    langue pour mener son combat auprès de la masse. Je me souviens qu’on
                                    a discuté une seule fois en créole sur le campus de l’université.
                                    La salle était bondée, mais personne ne savait qu’on organisait
                                    cette rencontre.
                                </p>
                                <p>
                                    Doch zurück in die heutige Zeit. Hieß es nicht am Schluss des
                                    Kongressbeitrags: <i>les préjugés contre le créole subsistent</i>? Das
                                    Kreolische scheint allem Anschein nach nahe am Ziel zu sein, aber das
                                    heißt noch lange nicht, dass diese Position von allen vertreten und
                                    verteidigt wird. Bestätigt wird dies von einem Artikel, den einer
                                    meiner Studenten an der FU in Berlin im Verlauf meines dortigen Seminars
                                    im Sommersemester 2011 in <i>KotZot. Mauritius Portal</i><sup><a href="#fn9" name="fz9">9</a></sup>, datiert auf den 23.
                                    Mai 2011, entdeckt hatte. Er soll hier in Auszügen und mit einigen
                                    wenigen <i>kritisch-diskursanalytischen</i> Anmerkungen folgen – eigentlich
                                    könnte man ein ganzes Buch oder zumindest eine umfangreiche Magister-
                                    oder Masterarbeit darüber schreiben –, denn er zeigt, dass die
                                    Diskussion noch lange nicht abgeschlossen ist und dass alte
                                    (Vor-)Urteile weiterhin sehr lebendig sind. Den Betreffenden erscheint
                                    das Kreolische weiterhin als eine Gefahr, es bedroht den vertrauten
                                    Status quo der Sprachen in Mauritius, und es lässt die <i>Indo-Mauriciens</i>
                                    um die (zumindest virtuell noch wichtige) Rolle ihrer eigenen indischen
                                    Sprachen in Mauritius fürchten. Ich habe einige <i>mots-clés</i>
                                    unterstrichen:
                                </p>
                                <p className="longcitation">
                                    <u>What a shame</u> for a country which prides itself for its <u>high level of
                                        literacy and education</u> when, for <u>purely political reasons</u> to gain the
                                    votes of a <u>few misguided (even racist) voters</u>, the Mauritian government
                                    <u>degrades</u> the Mauritian education system by deciding to introduce <u>to very
                                        young and vulnerable children</u> in Standard 1 as an option from January
                                    2012 a <u>French-based spoken slave creole language (called ‘Kreol
                                        Morisien’) written in the most distorted phonetics</u> to be considered
                                    pari passu with <u>proper spoken and written languages</u> such as Hindi, Urdu
                                    and Bhojpuri. Such a move <u>can only debase the whole education system</u> up
                                    to tertiary level as academic standard, will have to be lowered to
                                    accommodate those who opted for the <u>slave language</u>, which may well be
                                    unconstitutional, at primary level failing which it would amount to
                                    discrimination.<br />
                                    […]
                                    <br />
                                    As a language, creole refers to <u>the language spoken by the Black African
                                        slaves</u> through interaction with and as imposed upon them by their White
                                    Slaves Masters. <u>And the slave who spoke creole became known as a
                                        «Creole», hence the term «SLAVE CREOLE»</u>. […]
                                </p>
                                <p>
                                    Wortwahl und Ausdrucksweise sprechen eigentlich für sich, sodass nicht
                                    viel zu ergänzen und zu kommentieren ist; nur auf die stigmatisierende
                                    Charakterisierung des Kreolischen aus der Feder bzw. der Tastatur eines
                                    <i>Indo-Mauricien</i> sei hingewiesen, denn für ihn, den Nachfahren von
                                    <i>indentured labourers</i> steht die „Sklavensprache“ Kreolisch weit unter
                                    den indischen Sprachen in Mauritius.
                                </p>
                                <p>
                                    Der Autor des Textes will nicht akzeptieren, dass Kreolisch, das schon
                                    im täglichen Leben die indischen Sprachen mehr und mehr verdrängt hat,
                                    jetzt auch noch offiziell anerkannt werden soll. Da muss man sogar die
                                    Geschichte des Kreolischen korrigieren und es nach dem Ende der
                                    Sklaverei erst einmal für tot erklären. Die folgenden Zahlen zur
                                    Bevölkerung stimmen, auch wenn der Anteil der Sklavennachfahren
                                    vielleicht einige Prozente größer ist als angegeben:
                                </p>
                                <p className="longcitation">
                                    While in slave colonies which have remained European colonies the creole
                                    language continued to be spoken, <u>in Mauritius the language perished</u> as
                                    the British won the island from the French in 1810 and slavery abolished
                                    in 1835 and Indian labourers brought in from British India.
                                    Indo-Mauritians form around 70 % of the Mauritian population with
                                    Afro-Mauritians of slave ancestry around 25 %. […]
                                </p>
                                <p>
                                    Der folgende Text mag wieder unkommentiert bleiben, er spricht für
                                    sich. Eine Korrektur ist trotzdem nötig: Dev Virahsamy ist wie der
                                    Verfasser dieses Textes ein <i>Indo-Mauritian</i>, ein <i>fils de coolie</i>, wie die
                                    Inder in Mauritius von den anderen Gruppen bei (un-)passender Gelegenheit
                                    genannt werden, kein <i>French linguist</i>, und er hat in Edinburgh studiert,
                                    um dann Englisch zu unterrichten, unterbrochen und begleitet von seinen
                                    politischen und vor allem seinen schriftstellerischen Aktivitäten. Ohne
                                    ihn – siehe oben – wäre das Kreolische nicht das, was es heute ist:
                                </p>
                                <p className="longcitation">
                                    <b>1960’s militancy</b>
                                    <br />
                                    During the late 1960’s the newly-formed Mouvement Militant Mauricien
                                    led by Paul Raymond Bérenger, with other founding members such as <u>Dev
                                        Virahsawmy (a French linguist)</u>, Jooneed Jeerooburkhan (a historian),
                                    <u>tried to revive slave creole</u> as a political tool. <u>They influenced
                                        vulnerable people</u> who had a history of slavery behind them <u>by making
                                            them believe that creole is their ancestral language</u> which <u>should be
                                                introduced in the education system, in Parliament, in offices and
                                                everywhere else</u>. They <u>decried</u> English and French languages as languages
                                    of European imperialists <u>and Indian languages as backward languages</u>. In
                                    reality, <u>slave creole</u> has always been a European language indigenous to
                                    the slave colony and not an African language. <u>It was never an ancestral
                                        language</u>. […]
                                </p>
                                <p className="longcitation">
                                    <b><u>Degrading and racist</u></b>
                                    <br />
                                    Creole was always considered as a <u>backward language</u> and as a swear word
                                    associated with other equally degrading terms. […] On the other hand,
                                    the <u>Mauritian Creole invented by Dev Virahsawmy</u> et al. systematically
                                    <u>purges the Mauritian Patois of all its Indian ingrowths</u> and outgrowths
                                    and called it ‘Kreol Morisien’, Kreol as in Haitian Creol. In fact,
                                    it is not Mauritian Creole at all. <u>It equates the language only with
                                        Catholics, with the Catholic Church leading the battle of créolité, a
                                        French racist invention</u>. […]
                                </p>
                                <p className="longcitation">
                                    <b>Dr Vasant Bunwaree did no scientific studies</b>
                                    <br />
                                    Dr Vasant Bunwaree, the Minister for Education, has done no scientific
                                    studies of his own to establish the facts as to the origin of slave
                                    creole in Mauritius, which was not an ancestral language as alleged, how
                                    it was spoken and written, if at all, how it evolved and how it
                                    allegedly took over a whole country 70 % of which is of Indian origin.
                                    <u>If teaching in the mother tongue has become the new excuse, then British
                                        schools would have taught children in Cockney and French schools in
                                        Argot.</u> In any case, the mother tongue is <u>Mauritian Patois (MP) and not
                                            Mauritian Creole (MC)</u> as in Haitian Creole (HC).
                                </p>
                                <p>
                                    Stellt sich nur die Frage, welches der Unterschied zwischen «Mauritian
                                    Creole» und «Mauritian Patois» ist. Ansonsten wieder „kein
                                    Kommentar“ – oder doch die Frage: wer hier <i>racist</i> ist? Es bereitet
                                    dem Verfasser des Textes schon Probleme, wenn der zuständige Minister,
                                    der für das Kreolische eintritt, selbst <i>Indo-Mauritian</i> ist. Bleibt nur
                                    eine Erklärung für sein Verhalten:
                                </p>
                                <p className="longcitation">
                                    It is clear that Dr Bunwaree is merely implementing what PM Ramgoolam
                                    has long promised he would do, not because he based his decision on any
                                    internationally recognised linguistic, phonetic, phonological,
                                    sociological and anthropological research, but merely because he made a
                                    political decision to win votes. […]<br />
                                    <i>M Rafic Soormally, London, 23 May 2011</i>
                                </p>
                                <p>
                                    Die <i>Conclusion</i> können wir unbeachtet lassen, sie bringt keine neuen
                                    Argumente und bleibt im gleichen Stil. Und unsere kritische Textanalyse
                                    ist schließlich auf wenige Anmerkungen beschränkt geblieben.
                                    Einerseits spricht der Text für sich und muss nicht kommentiert werden.
                                    Andererseits würde eine angemessene Kommentierung gerade auch für
                                    einen Leserkreis, der Mauritius unter diesem Aspekt nur wenig oder gar
                                    nicht kennt, einen Umfang erfordern, der über das hier und heute
                                    Mögliche weit hinausginge.
                                </p>
                                <p>
                                    Bleibt die Schlussfrage, wie groß der Einfluss solcher Positionen auf
                                    die weitere Entwicklung ist. Mit seiner Position steht Rafic Soormally
                                    sicher nicht alleine, Vorurteile gegen das Kreolische sind mit der
                                    Arbeit der <i>Akademi kreol morisien</i> nicht aufgehoben und werden noch lange
                                    weiter existieren, überraschend und erschreckend ist nur die
                                    Diskussionsweise, die auch vor falschen Aussagen nicht zurückschreckt.
                                    Trotzdem scheint die Position des Kreolischen in Mauritius auf die
                                    Zukunft gerichtet und gesicherter denn je zu sein, vielleicht auch dank
                                    einer langsamen Entwicklung, die letztendlich mit einer
                                    Bewusstseinsänderung in der Bevölkerung einhergeht.
                                </p>
                                <p>
                                    Bleibt jetzt noch die Frage an den damaligen Mitautor, inzwischen
                                    Hexagenarius, wie es in den vergangenen zwanzig Jahren dem
                                    Dolomitenladinischen ergangen ist?
                                </p>
                                <p className="quote">
                                    Kiel, im Dezember 2011
                                </p>

                                <h1>Anmerkungen</h1>
                                <p className="annotation"><sup><a href="#fz1" name="fn1">1</a></sup>
                                    Stein, Peter/Kattenbusch, Dieter (1992): Pourquoi et comment
                                    élaborer une orthographe pour des langues romanes non encore
                                    codifiées? Quelques réflexions comparatives à propos de la
                                    codification du ladin des Dolomites et du créole mauricien, in:
                                    <i>Actas do XIX Congreso Internacional de Lingüística e Filoloxía
                                        Románicas, Universidade de Santiago de Compostela, 1989, vol. III,
                                        Lingüística Pragmática e Sociolingüística</i>, A Coruña, 183–197.
                                </p>
                                <p className="annotation"><sup><a href="#fz2" name="fn2">2</a></sup>
                                    Dieses 1967 entwickelte System basierte auf dem von MacConnell/Laubach
                                    1945 entwickelten System für das <i>créole haïtien</i>. Sein wichtigster Zug
                                    war die Markierung der Nasalvokale mit dem <i>accent circonflexe</i> über dem
                                    Vokal (&lt;â&gt;, &lt;ê&gt;, &lt;ô&gt;).
                                </p>
                                <p className="annotation"><sup><a href="#fz3" name="fn3">3</a></sup>
                                    Eine Übersicht zu den Systemen befindet sich im Anhang.
                                </p>
                                <p className="annotation"><sup><a href="#fz4" name="fn4">4</a></sup>
                                    Arnaud Carpooran (2009): <i>Diksioner Morisien. Premie diksioner kreol
                                        monoleng dan Lemond & Ekivalan lexikal an franse ek angle</i>, Sainte
                                    Croix (Ile Maurice).
                                </p>
                                <p className="annotation"><sup><a href="#fz5" name="fn5">5</a></sup>
                                    Nota bene: Auch in Deutschland wurden inzwischen zwei Bücher in dieser
                                    Orthographie vom Verlag Tintenfaß (<i>Polank</i> im Kreolischen)
                                    herausgegeben: Charles Baissac: <i>Märchen aus Mauritius/Ti-Zistwar Pei
                                        Moris, Zweisprachige Ausgabe, Deutsch und Kreolisch</i>, hg. u. übers. von
                                    Walter Sauer, Neckarsteinach 2006 und Antoine de
                                    Saint-Exupéry/Dev Virahsawmy: <i>Zistwar Ti-Prens – Morisien/Mauritian
                                        Creole</i>, Neckarsteinach 2006.
                                </p>
                                <p className="annotation"><sup><a href="#fz6" name="fn6">6</a></sup>
                                    Akademi Kreol Morisien, <i>Lortograf Kreol Morisien</i>, Rapor redize par
                                    Dr Arnaud Carpooran, <a href="http://www.gov.mu/portal/goc/educationsite/file/Lortograf Kreol Morisien.pdf">http://www.gov.mu/portal/goc/educationsite/file/Lortograf%20Kreol%20Morisien.pdf</a>.
                                </p>
                                <p className="annotation"><sup><a href="#fz7" name="fn7">7</a></sup>
                                    Peter Stein (1982): <i>Connaissance et emploi des langues à l'Ile
                                        Maurice</i>, Hamburg.
                                </p>
                                <p className="annotation"><sup><a href="#fz8" name="fn8">8</a></sup>
                                    <i>Mouvement Militant Mauricien</i>, eine linke, sozialistische Partei, die
                                    sich als einzige politische Kraft für das Kreolische einsetzte.
                                    Virahsawmy hatte sich vom MMM getrennt und eine eigene Partei MMMSP
                                    (<i>Mouvement Militant Mauricien Socialiste Progressiste</i>) gegründet.
                                </p>
                                <p className="annotation"><sup><a href="#fz9" name="fn9">9</a></sup>
                                    Siehe <a href="http://www.kotzot.com">http://www.kotzot.com</a>. Der Artikel ist über die Suche mit ‚Kreol Morisien‘ leicht zu erschließen.
                                </p>



                                <h1>Anhang: «Bann pratik grafik ki ti existe avan Grafi-larmoni (andeor
                                    pratik etimolozik)»</h1>
                                <p>
                                    <b>1. P. Baker, 1972</b>: «Grafi „ah“»
                                    <br />
                                    Konsonn „h“ servi pou sinboliz nazalizasion bann vwayel:
                                    <br />
                                    ah: „an“; eh: „ein“; oh: „on“; yh: „gn“.
                                </p>
                                <p>
                                    <b>2. P. Baker & V. Hookoomsing, 1987</b>: <i>Lortograf-Linite</i>
                                    <br />
                                    Prezans enn pwin lor konsonn „n“ ek „m“ pou mark nazalizasion
                                    bann vwayel.
                                    <br />
                                    Exanp: <i><span className="ipa">baṅ , laṁpul, boṅ, noṁ;</span></i>
                                    <br />
                                    absans pwin lor „n“ ouswa „m“ indike ki konsonn-la bizin
                                    prononse: <i><span className="ipa">ban, lam; boṅbon, bom</span></i>.
                                </p>
                                <p>
                                    <b>3. Ledikasyon Pu Travayer: 1977</b>: «Grafi n/nn»
                                    <br />
                                    Ban/bann; bon/bonn; bin(ben)/binn; pu; mwa; lerwa; gayn; byin.
                                </p>
                                <p>
                                    <b>4. D.Virasawmy,</b>
                                    <ul>
                                        <li><b>1967</b>: Grafi aksâ sirkôflex:	Morisiê; avâ; lôtâ</li>
                                        <li><b>1985</b>: <i>Graphie d’accueil</i>: Sherif; kees; diil; diliit; horrni</li>
                                        <li><b>1988</b>: <i>La sacrosainte graphie</i>: Santere; lalimiere;
                                            pëi; zëan; loulou; axepte; quen; keess</li>
                                        <li><b>1990–1998</b>: <i>Graphie consensuelle</i>: Faktèr; kontribié; pratchik;
                                            kiltchirel; djinamik; metchiss</li>
                                    </ul>
                                </p>

                                <p>
                                    <b>5. Legliz katolik an kolaborasion ek D. Virasawmy, 1998</b>: <i>Grafi legliz</i>
                                    <br />
                                    Pou; moi; leroi; gagne; bien
                                </p>
                                <p>
                                    Nach der tabellarischen Zusammenstellung in Akademi Kreol Morisien (2011):
                                    <i>Lortograf Kreol Morisien</i>, 24.
                                </p>
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

export default Stein;