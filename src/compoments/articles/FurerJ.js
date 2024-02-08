import Footer from "../Footer";
import Header from "../Header";
import Rubrik from "../Rubrik";
import UpArrow from "../UpArrow";
import JFurerPortrait from "../../images/jfurer/jfurer-portrait.jpg"

function FurerJ(props) {
    return (
        <div>
            <div id="Wrapper" class="container_14">

                <div id="Header">
                    <Header id={props.author} />
                    <div class="grid_9">
                        <h1 id="main_title">Un dictionnaire français-romanche
                            (sursilvan+): Pourquoi – Comment – Par qui</h1>
                        <p id="author">Jean-Jacques Furer, San Vittore GR/Schweiz</p>
                    </div>
                    <Rubrik />
                </div>

                <div id="Teasers" class="clearfix">
                    <div class="grid_9">
                        <h1>1 Introduction</h1>

                        <h2>1.a Pourquoi un dictionnaire français-romanche?</h2>
                        <p>
                            La première question est presque rhétorique, tant la réponse
                            est évidente: tout dictionnaire est utile en tant que
                            servant à rapprocher deux langues, à faciliter la
                            communication entre deux communautés linguistiques. Dans le
                            cas du français et du romanche, on peut ajouter, entre
                            autres, les éléments suivants.
                        </p>
                        <p>
                            Le romanche est désespérément collé à l’allemand. Les
                            Romanches sont obsédés par l’allemand, ne se réfèrent
                            pratiquement qu’à l’allemand, vivent essentiellement en
                            allemand, voient le monde à travers l’allemand et sont
                            également, dans la pratique, largement traités comme des
                            germanophones. Ils se trouvent au total dans une situation
                            comparable à celle des Sorabes vis-à-vis de l’allemand ou
                            des Gallois (gallophones) vis-à-vis de l’anglais, et vivent,
                            agissent et réagissent de manière semblable à eux face à la
                            langue qui les domine. Car il s’agit d’une domination, d’une
                            domination indue et injuste, d’une discrimination, avec les
                            multiples conséquences qu’elle entraîne et que je ne peux
                            traiter ici.<sup><a href="#fn1" name="fz1">1</a></sup>
                            Dans ces conditions, tout lien avec une autre
                            langue que la langue dominante, tout accès à une langue
                            supplémentaire ne peuvent qu’être utiles.
                        </p>
                        <p>
                            Le français est la deuxième langue nationale suisse,
                            et, aujourd’hui derrière l’anglais, une des
                            principales langues internationales. Il est également
                            une langue latine sœur du romanche, sur laquelle les
                            Romanches, lorsqu’ils complètent leur langue pour
                            qu’elle réponde aux besoins de notre temps,
                            pourraient, un peu comme les Roumains du XIXe siècle
                            se sont inspirés du français et de l’italien pour
                            (re)latiniser leur langue, s’appuyer pour éviter de
                            suivre en (presque) tout le modèle allemand, d’un
                            esprit étranger. Le français est donc, au total, la
                            première langue à choisir pour désenclaver le
                            romanche.
                        </p>
                        <p>
                            Accessoirement, mais cela n’est pas négligeable dans
                            le cas du romanche en tant qu’objet d’étude, le
                            français est sans doute une langue obligatoire pour
                            les romanistes, dont beaucoup, hors des pays de langue
                            allemande, ignorent l’allemand et doivent (ou ont
                            longtemps dû) se forger eux-mêmes un accès au
                            romanche. D’une manière plus générale, la perspective
                            de devoir passer par l’allemand, ou en tout cas de
                            devoir s’appuyer sur l’allemand pour apprendre le
                            romanche, décourage bon nombre des non-germanophones
                            qui, pour quelque raison que ce soit, souhaiteraient
                            apprendre le romanche. Au niveau suisse, le français
                            est, de ce point de vue aussi, le choix logique pour
                            un deuxième accès, tant en raison du poids de la
                            Romandie que du fait que la langue est le plus souvent
                            préférée à l’allemand au Tessin.<sup><a href="#fn2"
                                name="fz2">2</a></sup>
                        </p>
                        <p>
                            C’est entre autres sur ces considérations que la
                            Fundaziun Retoromana P. Flurin Maissen
                            (FRR)<sup><a href="#fn3" name="fz3">3</a></sup> s’est
                            basée lorsqu’elle a décidé, au début des années 1980,
                            de réaliser, comme premier élément d’une éventuelle
                            série, un dictionnaire romanche-français finalement
                            paru en 2002.<sup><a href="#fn4"
                                name="fz4">4</a></sup> C’est pour les mêmes raisons
                            qu’elle a
                            ensuite, après des hésitations dues notamment aux
                            difficultés financières rencontrées pour terminer le
                            premier ouvrage, décidé de lancer la réalisation du
                            dictionnaire complémentaire français-romanche en m’en
                            confiant à nouveau la responsabilité essentielle.
                        </p>
                        <p>
                            Le dictionnaire sera de dimension légèrement
                            supérieure au dictionnaire romanche-français (632 +
                            LXXVI pages, 24.000 articles et renvois), tant pour le
                            nombre que pour la dimension moyenne des articles.
                        </p>
                    </div>
                    <div class="grid_5">

                        <div class="abouttheauthor">
                            <img src={JFurerPortrait} width="115"
                                height="100" alt="Jean Jacques Furer - Portrait" />
                            <div class="abouttheauthorfont"><br /><br />
                                <b>Jean-Jacques Furer</b>, Übersetzer mit Schwerpunkt Kultur und Literatur, geboren
                                1948. Kindheit in der Ajoie (nördlichster Teil der
                                Suisse romande). Hat in allen Sprachregionen der Schweiz
                                gewohnt. Kulturell-berufliche Tätigkeiten insb. als
                                soziolinguistischer Forscher mit Schwerpunkt romanische
                                Statistik. Verfasser des (erschienenen)
                                «Romanisch-Französischen Wörterbuchs» und
                                des (entstehenden) «Französisch-Romanischen
                                Wörterbuchs»;
                                Mitbegründer und Vizepräsident der Fundaziun Retoromana
                                P. Flurin Maissen. Freund des Jubilars.<br />
                                <span style={{ color: "#666666" }}>Dieter bin ich im Herbst 1981 im Benediktinerkloster Bozen begegnet. Er begleitete Prof. Goebl, ich P. Flurin Maissen, mit dem ich eine Erkundungsreise in die Dolomiten und ins Friaul machte. Als Benediktiner hatte P. Flurin eine Übernachtung für uns im Kloster organisiert, Prof. Goebl und Dieter waren dort völlig unabhängig von uns.
                                    Vielleicht zwei Jahre später hielt ich ein Seminar über die Lage des Romanischen in Neumarkt/Steiermark. Dieter fuhr mit einem roten Wagen durch die Straße dort, erkannte mich und hielt an. Später begleitete ich ihn einige Tage bei klirrender Kälte, als er Sprachaufnahmen im Fassatal machte. Er war in Rumein beim Institut de Cuors Retoromontschs/der Fundaziun Retoromana. Er war bei meiner Hochzeit zugegen, nahm mindestens zweimal am Triathlon Flem ab unserem Haus teil, wir waren bei ihm in Regensburg. Gemeinsame Tagungen/Aufenthalte hatten wir in Savognin, Scuol, Val Badia, Brüssel, Gießen. Dieter ist Pate unseres ersten Sohnes, mit seiner Familie ist er ein willkommener Gast in San Vittore (Berlin ist für unsere ganze Familie zu weit gewesen, doch ist sein Patensohn mehrmals bei ihnen in Berlin und Tirol zu Gast gewesen).
                                    Mit anderen Worten, Dieter und ich sind uns wegen unseres Interesses am Rätoromanischen begegnet, und daraus ist eine lange und tiefe Freundschaft entstanden, die auf beide Familien übergriffen hat, und nur nebensächlich Berufliches hat.</span>

                            </div>
                            <div class="clearfloat"></div>
                        </div>
                    </div>
                </div>

                <div id="Main">
                    <div id="Articles" class="grid_14">
                        <section id="posts">
                            <article class="post">
                                <h2>1.b Pourquoi un dictionnaire français–romanche sursilvan+?</h2>

                                <p>
                                    Les circonstances ont fait que le romanche a
                                    développé, depuis le XVIe siècle, plusieurs formes
                                    écrites régionales, appelées <i>idioms</i> en romanche, et
                                    «idiomes» en ce sens romanche dans bien des
                                    publications françaises traitant du romanche. Depuis
                                    les années 1940, ces idiomes sont au nombre de
                                    cinq. Ce sont des langues standardisées au même titre
                                    que le français ou l’allemand, donc évoluant au-dessus
                                    des dialectes locaux essentiellement parlés, à cette
                                    différence près que chaque idiome est en usage dans
                                    une partie seulement de l’aire romanche, où il est
                                    écrit, lu, enseigné dans les écoles et utilisé dans
                                    les chancelleries communales, dans la mesure où le
                                    romanche lui-même est enseigné ou
                                    utilisé.<sup><a href="#fn5" name="fz5">5</a></sup>
                                </p>
                                <p>
                                    La raison pour laquelle la FRR a choisi le sursilvan
                                    est, tout simplement, qu’elle est ancrée dans la
                                    partie occidentale de l’aire romanche, qui se sert de
                                    l’idiome sursilvan.<sup><a href="#fn6"
                                        name="fz6">6</a>,<a href="#fn7"
                                            name="fz7">7</a></sup> Elle soutient cependant
                                    l’ensemble du romanche<sup><a href="#fn8"
                                        name="fz8">8</a></sup> et compte de ce fait intégrer
                                    dans son nouveau dictionnaire les mots qui, dans les
                                    autres idiomes, correspondent aux équivalents
                                    sursilvans donnés, d’où le signe + prévu dans le
                                    titre.<sup><a href="#fn9" name="fz9">9</a></sup>
                                </p>
                                <p>
                                    En 1982, la Ligia Romontscha, l’organisation
                                    semi-officielle de défense du romanche, a créé le
                                    <i>rumantsch grischun</i> ou <i>rg</i>, une forme de compromis entre
                                    les cinq idiomes, destinée non pas à remplacer ces
                                    standards traditionnels pour unifier la langue, mais,
                                    de façon très raisonnable dans la situation donnée, à
                                    être utilisée pour s’adresser en romanche aux
                                    Romanches là où, en raison de la division du romanche,
                                    on se servait de l’allemand.<sup><a href="#fn10"
                                        name="fz10">10</a></sup> C’est en ce sens que le
                                    rg est aujourd’hui la forme officielle utilisée par la
                                    Confédération et par le canton des Grisons pour
                                    s’adresser aux Romanches.
                                </p>
                                <p>
                                    Ce sont toutefois les idiomes qui restent la forme de
                                    référence unique ou essentielle pour la grande
                                    majorité des Romanches, et le romanche sursilvan pour
                                    ceux de Surselva et du Plaun. La loi aussi bien
                                    fédérale que cantonale reconnaît cet état de fait et
                                    donne aux Romanches le droit de se servir de leur
                                    idiome maternel pour s’adresser aux autorités
                                    concernées.<sup><a href="#fn11"
                                        name="fz11">11</a></sup> Les dictionnaires de la FRR
                                    doivent donc
                                    se baser sur le sursilvan et sa
                                    littérature,<sup><a href="#fn12"
                                        name="fz12">12</a></sup> sa
                                    tradition, ses modes d’expression. <i>Le Dictionnaire
                                        français – romanche sursilvan+</i> inclura cependant dans
                                    une liste spéciale les mots et formes orthographiques
                                    du rg en plus de ceux des autres
                                    idiomes.<sup><a href="#fn13" name="fz13">13</a></sup>
                                </p>



                                <h1>2 Conditions de réalisation d’un dictionnaire français-romanche</h1>

                                <p>
                                    La réalisation d’un dictionnaire français-romanche est
                                    dans une large mesure une œuvre de pionnier, avec ce que
                                    cela implique de bons et mauvais côtés. En eux-mêmes,
                                    l’idée et le but sont presque exaltants. Mais au jour le
                                    jour, c’est un travail rebutant, souvent frustrant, où
                                    je me heurte sans cesse à des limites, celles du
                                    matériel disponible et de mes propres connaissances, et
                                    où je dois, plein d’incertitudes, faire «au mieux», en
                                    sachant que, le dictionnaire une fois paru, je ne
                                    cesserai moi-même d’y découvrir de nouvelles
                                    insuffisances et des fautes et coquilles de tous
                                    genres.<sup><a href="#fn14" name="fz14">14</a></sup>
                                </p>


                                <h2>2.a Matériel disponible</h2>

                                <p>
                                    Le travail peut s’appuyer sur le dictionnaire romanche –
                                    français sursilvan DRF, et sur le matériel réuni pendant
                                    des années pour sa réalisation. Les moyens informatiques
                                    d’aujourd’hui sont ici d’une aide essentielle. À elle
                                    seule, la fonction «recherche», qui donne la possibilité
                                    de consulter en sens inverse le fichier électronique
                                    original du DRF, permet une immense économie de
                                    temps. Mais il n’y a pas de modèle français-romanche sur
                                    lequel s’appuyer ou à consulter.<sup><a href="#fn15"
                                        name="fz15">15</a></sup>
                                </p>
                                <p>
                                    L’essentiel du matériel de référence fait appel à
                                    l’allemand, qu’il s’agisse des dictionnaires bilingues
                                    de consultation courante<sup><a href="#fn16"
                                        name="fz16">16</a></sup> ou du grand dictionnaire de
                                    la langue romanche, carrément rédigé en
                                    allemand.<sup><a href="#fn17" name="fz17">17</a></sup>
                                    Il est donc nécessaire de travailler en grande partie à
                                    travers l’allemand, avec toutes les complications, mais
                                    aussi tous les dangers que cela comporte. À l’usage, il
                                    s’avère que ces difficultés et ces risques sont encore
                                    plus grands que ce que l’on pourrait penser parce que
                                    les auteurs des différents ouvrages de référence pour la
                                    langue romanche sont des Suisses, qui connaissent et
                                    utilisent l’allemand de Suisse, alors que les grands
                                    dictionnaires français-allemand/allemand-français
                                    donnent certes des indications concernant l’allemand de
                                    Suisse et, ici ou là, aussi le français de Suisse, mais
                                    reflètent dans l’ensemble l’allemand d’Allemagne et le
                                    français de France. Même s’il est difficile à cerner et
                                    à illustrer, il y a réellement, entre les deux ensembles
                                    de matériel, un hiatus parfois suffisamment sensible
                                    pour être gênant.
                                </p>



                                <h2>2.b Rédacteur</h2>

                                <p>
                                    Le rédacteur du <i>Dictionnaire français – romanche
                                        sursilvan+</i> est romand. Je suis Romand, c’est-à-dire de
                                    langue maternelle française. Cela suffit à indiquer
                                    tout un ensemble de difficultés supplémentaires que le
                                    travail de rédaction ne peut manquer de rencontrer.
                                </p>
                                <p>
                                    Certes, ce sont des Romanches, donc des personnes pour
                                    lesquelles l’allemand était aussi une langue apprise,
                                    qui ont rédigé les dictionnaires romanche-allemand des
                                    différents idiomes. Mais, justement, étant des
                                    Romanches, ils ont été placés dans une situation où
                                    ils ont à la fois dû et pu apprendre à maîtriser
                                    l’allemand aussi bien que des germanophones, et, dans
                                    certains domaines, mieux que leur propre langue. En
                                    outre, ils passaient directement de leur langue à la
                                    langue-cible.
                                </p>
                                <p>
                                    Pour ma part, je ne sais aussi bien qu’eux ni la
                                    langue d’arrivée, ni la langue par laquelle il faut
                                    largement passer.<sup><a href="#fn18"
                                        name="fz18">18</a></sup> Je n’ai pas non plus de
                                    formation
                                    de linguiste ou approchante, et, si je fais un usage
                                    quotidien de multiples dictionnaires, je n’ai que peu
                                    d’intérêt et de goût pour la linguistique en tant que
                                    telle. Rédiger un dictionnaire français-romanche dans
                                    ces conditions va à l’encontre du bon sens. En soi,
                                    c’est une hérésie, même si j’ai derrière moi des
                                    décennies de travail en romanche, et la rédaction du
                                    plus grand dictionnaire romanche-français qui existe;
                                    même si je suis certainement un des francophones qui
                                    maîtrisent le mieux le romanche. Je n’avais pas non
                                    plus souhaité la mission de réaliser un tel
                                    dictionnaire, et envisageais initialement, tout au
                                    plus, d’apporter mon aide à un rédacteur romanche.
                                </p>
                                <p>
                                    Le fait même que, en fin de compte, je me retrouve à
                                    rédiger le dictionnaire français-romanche est
                                    cependant caractéristique de la situation du romanche
                                    et des Romanches. Dans l’absolu, il y aurait des
                                    Romanches disposant à la fois de vastes connaissances
                                    du français et de la formation linguistique
                                    souhaitable, qui seraient les personnes appropriées
                                    pour réaliser un dictionnaire menant du français à
                                    l’une ou l’autre des six formes écrites du
                                    romanche. Mais c’est essentiellement vers l’allemand
                                    que ces Romanches sont tournés, en allemand qu’ils se
                                    sont formés. La Fundaziun Retoromana mise à part,
                                    aucune institution romanche n’a d’ailleurs jamais pris
                                    l’initiative d’un dictionnaire bilingue d’une certaine
                                    ampleur unissant le romanche à une autre langue que
                                    l’allemand.<sup><a href="#fn19"
                                        name="fz19">19</a></sup> Le sentiment dominant semble
                                    être que
                                    les dictionnaires liant le romanche à l’allemand
                                    suffisent, ou qu’il y a d’autres choses plus urgentes
                                    que de nouveaux dictionnaires avec de nouvelles
                                    langues.<sup><a href="#fn20" name="fz20">20</a></sup>
                                    Du reste, indubitablement, les temps sont
                                    durs en Suisse pour les projets d’ouvrages de longue
                                    haleine si, quelle que soit leur utilité ou nécessité,
                                    ils n’ont aucune chance d’être rentables,
                                    commercialement, ou alors peut-être politiquement.
                                </p>
                                <p>
                                    En résumé, l’alternative était, ou un dictionnaire
                                    français-romanche fait (doublement, voire triplement!)
                                    à rebours du bon sens – mais quand même le mieux
                                    possible –, ou pas de dictionnaire
                                    romanche-français. La décision de principe était
                                    claire.
                                </p>



                                <h2>2.c Projet</h2>
                                <p>
                                    La Fundaziun Retoromana a eu une peine énorme à
                                    terminer et publier son premier dictionnaire. Le
                                    travail était immense. Il fallait d’abord réunir un
                                    matériel complémentaire, à la fois concernant la
                                    langue romanche moderne – les dictionnaires romanches
                                    disponibles avaient été conçus une à deux générations
                                    plus tôt – et destiné à mieux cerner le sens et
                                    l’emploi des mots dans l’optique spécifique d’un
                                    dictionnaire menant au français. Il était impossible
                                    de faire des prévisions valables quant au temps
                                    nécessaire. Il était par ailleurs illusoire d’imaginer
                                    que le rédacteur pourrait réaliser ce travail
                                    totalement pour l’honneur, à temps perdu, à côté d’un
                                    emploi assurant l’existence de sa famille, illusoire
                                    également de compter sur les aides nécessaires sans
                                    pouvoir les rétribuer. Parce que, malgré tout, aidée
                                    par des circonstances brièvement favorables au
                                    romanche dans la Suisse des années 1980, elle avait
                                    trouvé des fonds initiaux, la Fundaziun Retoromana
                                    s’est lancée. Au début des années 1990, ayant épuisé
                                    les fonds initiaux et ne trouvant pas de nouvelles
                                    ressources, elle a dû mettre le projet en
                                    sommeil. Elle n’a pu le reprendre qu’à la fin de la
                                    décennie, et il a fallu une sorte de miracle, en plus
                                    de beaucoup d’entêtement et de sacrifices, pour
                                    terminer le travail et publier le dictionnaire en
                                    2002.
                                </p>
                                <p>
                                    La Fundaziun Retoromana était consciente de ce que
                                    seule la moitié de l’ouvrage était faite et que le
                                    dictionnaire romanche-français réclamait son pendant
                                    français-romanche. Elle sentait en même temps que les
                                    circonstances étaient toujours moins favorables à un
                                    projet du genre concerné. Il était clair d’un autre
                                    côté que, grâce à l’existence du DRF et au matériel
                                    réuni, grâce également aux progrès informatiques, la
                                    réalisation du second dictionnaire devait être au
                                    total plus facile et plus rapide que celle du
                                    premier. Avant de prendre une décision et pour pouvoir
                                    évaluer plus exactement les coûts en temps et en
                                    argent du nouveau projet, elle a pris la précaution de
                                    réaliser tout d’abord un essai «grandeur nature» en
                                    rédigeant la lettre F.
                                </p>
                                <p>
                                    Le programme de travail et le budget élaborés sur la
                                    base des résultats obtenus pour cet essai est une
                                    sorte de compromis entre foi et réalisme. On peut dire
                                    que l’on a considéré d’un côté le montant maximum que
                                    l’on pouvait espérer réunir pour un tel projet, de
                                    l’autre le total maximum des efforts que l’on peut
                                    attendre pour cette somme, sans perdre de vue la
                                    nécessité de réaliser le projet dans un délai
                                    raisonnable.
                                </p>
                                <p>
                                    Pour résumer, le dictionnaire doit paraître en
                                    2014. Je travaille à sa rédaction à temps partiel, à
                                    côté d’autres activités professionnelles elles aussi à
                                    temps partiel, le total du travail de rédaction étant
                                    réputé correspondre à deux ans et demi à temps plein.
                                </p>


                                <h1>3 Constatations et expériences faites</h1>
                                <p>
                                    Beaucoup des expériences que je fais dans mon travail de
                                    rédaction du dictionnaire français-romanche confirment
                                    celles que j’avais déjà faites avec le travail
                                    inverse. Les constatations à la fois les plus
                                    spécifiques et les plus évidentes concernent le lien
                                    étroit entre le romanche et l’allemand, et l’influence
                                    écrasante de l’allemand sur le romanche. C’est sur elles
                                    que je me concentrerai ici, laissant de côté les aspects
                                    généraux de la rédaction de tout dictionnaire bilingue.
                                </p>
                                <p>
                                    L’influence de l’allemand s’exerce à différents
                                    niveaux, jusques et y compris sur ce que l’on peut
                                    appeler l’esprit de la langue. Il n’est qu’à peine
                                    exagéré de dire que, souvent, le romanche n’est guère
                                    que de l’allemand rendu avec des mots romanches – et
                                    d’ailleurs parsemé de mots repris tels quels de
                                    l’allemand, ou de l’alémanique. Il m’est arrivé de
                                    devoir traduire (ou retraduire?) mot à mot en allemand
                                    un texte «romanche» pour en comprendre le sens. Mais
                                    il me faut immédiatement ajouter que j’ai aussi pris
                                    conscience de ce que le romanche le plus germanisé
                                    prend aussi parfois une certaine indépendance, une
                                    indépendance surprenante, par rapport à l’original
                                    allemand qu’il a copié dans un premier temps.
                                </p>
                                <p>
                                    Même si je la comprends, même si elle est largement la
                                    conséquence de la situation faite au romanche et en
                                    particulier de l’absence d’une école romanche digne de
                                    ce nom,<sup><a href="#fn21" name="fz21">21</a></sup>
                                    cette dépendance et cette dénaturation du
                                    romanche provoquent en moi, alternativement ou tout
                                    ensemble, irritation, indignation, ironie ou sarcasme,
                                    déception, tristesse, compassion ou pitié, et bien sûr
                                    envie d’inciter les Romanches à réagir – ceci en me
                                    souvenant toujours combien je suis privilégié par
                                    rapport à eux pour avoir pu me développer de façon
                                    correcte et naturelle dans ma propre langue. Dans mon
                                    travail de rédaction, cette dépendance et ses effets
                                    me causent en tout cas beaucoup d’incertitudes et de
                                    difficultés supplémentaires.
                                </p>
                                <p>
                                    Je ne peux ni ne veux tenter une description
                                    systématique de l’influence de l’allemand sur le
                                    romanche, et me contente de donner quelques exemples
                                    particulièrement sensibles pour mon travail de
                                    rédaction, relevant de trois secteurs particuliers:
                                    verbes composés, traduction des noms composés
                                    allemands, emploi des prépositions.
                                </p>

                                <h3>Verbes composés</h3>
                                <p>
                                    Le romanche utilise à foison ce que j’appellerai le
                                    verbe composé, correspondant au verbe séparable
                                    allemand du type <i>hinrichten, abwerfen, anziehen,
                                        mitmachen, vornehmen</i> etc. Il prend le verbe romanche
                                    correspondant au verbe simple allemand, et lui accole
                                    l’adverbe romanche correspondant à la particule
                                    séparable allemande (la différence étant que,
                                    contrairement à la particule allemande, l’adverbe
                                    romanche suit toujours immédiatement le verbe: <i>el ha
                                        tratg en siu manti</i>). Ceci en principe car, dans la
                                    pratique, le romanche peut conserver le modèle, mais
                                    prendre un autre verbe de base: <i>hinrichten</i>
                                    («exécuter», «passer par les armes») ne devient pas
                                    <i>drizzar vi</i>, mais <i>metter vi</i>. Il peut également prendre
                                    un adverbe différent de celui de l’allemand, ou
                                    choisir, parmi plusieurs particules utilisées par
                                    l’allemand pour donner des verbes plus ou moins
                                    synonymes, un adverbe différent de celui que
                                    l’allemand préfère. Ou peut-être faut-il dire, plus
                                    exactement, de celui que l’allemand standard préfère
                                    aujourd’hui. Dans certains cas en effet, il pourra y
                                    avoir eu une évolution différente de l’usage en
                                    allemand et en romanche après l’introduction en
                                    romanche du calque de l’allemand. Dans d’autres, il
                                    s’agira d’un emprunt à un usage alémanique – et, «en
                                    bon Romand», contrairement aux Romanches qui
                                    maîtrisent et dont on attend qu’ils maîtrisent
                                    parfaitement, et l’allemand, et l’alémanique, je ne
                                    connais pas l’alémanique. Mais je n’en ai pas moins le
                                    sentiment mentionné ci-dessus que, tout en copiant
                                    tellement souvent la construction de l’allemand, le
                                    romanche se permet des adaptations dans le détail, qui
                                    lui rendent une certaine indépendance par rapport à
                                    l’original, même si l’esprit reste allemand. Ainsi, si
                                    beaucoup de Romanches ont adopté le modèle <i>sich etwas
                                        vornehmen</i> pour «se proposer (de faire) quelque chose»,
                                    ils laissent tomber le <i>sich</i> et disent <i>jeu
                                        prendel avon quei</i>.
                                </p>
                                <p>
                                    Le romanche utilise d’ailleurs le modèle du verbe
                                    séparable allemand pour créer des verbes composés qui
                                    ne correspondent pas à un verbe séparable
                                    allemand. J’ai inséré dans le DRF, comme sous-articles
                                    de <i>far</i> («faire»), les verbes (transitifs,
                                    intransitifs, pronominaux, impersonnels) composés avec
                                    <i>anavon, anavos, atras, avon, bien, cun, en, encunter,
                                        ensemen, giu, naven, neutier, ora, si, suenter,
                                        sutora, tras, vi, vinavon</i> et <i>vitier</i> et, pour certains
                                    d’entre eux, je ne connais pas de correspondant formel
                                    courant en allemand. De plus et surtout, les sens
                                    accordés à ces verbes composés ne sont souvent pas
                                    ceux du correspondant allemand habituel. Un même
                                    composé romanche peut du reste avoir des sens plus ou
                                    moins opposés, ce qui peut dérouter un lecteur non
                                    romanche.
                                </p>
                                <p>
                                    Toujours sous l’influence du modèle général allemand,
                                    les Romanches ont par ailleurs une forte tendance à
                                    ajouter un adverbe, surtout de direction, à un verbe
                                    latin qui, en lui-même, exprime déjà ce que le verbe
                                    composé est supposé exprimer, si bien que le composé
                                    est en fait un synonyme ou un doublet du verbe
                                    simple. Mon explication est que les Romanches,
                                    utilisant tellement le modèle du verbe composé,
                                    perçoivent désormais souvent le verbe simple comme
                                    ayant un sens trop faible, qu’il convient alors
                                    d’assurer avec un adverbe. Il ne leur suffit ainsi
                                    plus, dans certains cas, de dire <i>finir</i>, il leur
                                    faut préciser <i>finir giu</i>, pour bien faire
                                    comprendre que la chose est finie-nie.
                                </p>

                                <h3>Traduction des noms composés allemands</h3>
                                <p>
                                    Une des caractéristiques de l’allemand est le nom
                                    composé du type <i>Dampfmaschine</i>, composé de deux
                                    substantifs simples A et B. Tout traducteur de
                                    l’allemand vers le français sait que le composé AB
                                    allemand se traduit souvent simplement par les termes
                                    correspondants, en en inversant l’ordre et en les
                                    reliant par un «de», selon le modèle «B de A». Mais il
                                    sait également qu’il faut alors encore se demander si
                                    A, en français, doit être au singulier ou au pluriel,
                                    et utilisé avec ou sans l’article défini. Il sait de
                                    plus que la préposition n’est pas forcément «de» –
                                    <i>Dampfmaschine</i> est «machine <u>à</u> vapeur» –, et surtout que
                                    la traduction correcte, ou préférable, peut faire
                                    intervenir un adjectif, ou être un mot ou une
                                    expression totalement différents.
                                </p>
                                <p>
                                    Le problème est ici que les Romanches, en raison
                                    notamment de l’absence d’une école qui soit romanche
                                    comme l’école est allemande dans les régions de langue
                                    allemande, ont largement perdu le sentiment d’une
                                    différence entre ce que pourrait être une «machine de
                                    vapeur» et une «machine à vapeur», entre une «pince à
                                    sucre» et une «pince de sucre», comme d’ailleurs entre
                                    une «eau sucrée» et une «eau de sucre», sans parler de
                                    la différence que le français fait entre une «tasse de
                                    thé» et une «tasse à thé». Ils appellent aussi <i>pur da
                                        bio</i> l’agriculteur biologique parce qu’ils ont fait sa
                                    connaissance à travers le <i>Biobauer</i> de l’allemand, et
                                    <i>parc da vent</i> le parc éolien en projet en
                                    Surselva. Pour illustrer à quel point tout ce qui
                                    ressemble à un nom composé <i>AB</i> allemand tend à être
                                    traduit mécaniquement par <i>B de/da A</i> en romanche, il
                                    suffira de mentionner les exemples de <i>hotellaria da
                                        para</i> que j’ai rencontrés dans des articles de presse.
                                </p>
                                <p>
                                    Certes, les dictionnaires donnent <i>maschina a vapur</i>
                                    pour <i>Dampfmaschine</i>, alors que les Romanches tendent à
                                    dire <i>maschina de/da vapur</i>; mais ils donnent en même
                                    temps <i>zaunga de/da zucher</i> pour <i>Zuckerzange</i>, tandis que
                                    le <i>Pledari grond</i> confirme pour le rg le <i>pur
                                        da bio</i>.<sup><a href="#fn22"
                                            name="fz22">22</a></sup>
                                    Pire, ils commettent des erreurs – ou, qui sait,
                                    acceptent et consacrent des erreurs populaires –,
                                    comme lorsqu’ils traduisent <i>Chinawein</i> («(vin de)
                                    quinquina») par <i>vin de/da
                                        China</i>.<sup><a href="#fn23"
                                            name="fz23">23</a></sup> Et qui cherche le
                                    terme romanche pour «corrida» aboutit par
                                    l’intermédiaire de l’allemand <i>Stierkampf</i> à <i>cumbat
                                        de/da taurs</i>.
                                </p>

                                <h3>Emploi des prépositions</h3>
                                <p>
                                    Sous l’influence de l’allemand, les Romanches tendent,
                                    dans de nombreuses expressions courantes, à se servir
                                    des prépositions que l’allemand utilise dans ses
                                    expressions correspondantes, et non plus les
                                    prépositions que la norme romanche voudrait. Il s’agit
                                    souvent des cas où l’allemand utilise <i>auf, aus, an,
                                        bei</i> ou <i>zu</i>. «De cette façon», <i>en quella
                                            moda</i>, devient ainsi <i><u>sin</u> quella moda</i>
                                    (<i><u>auf</u> diese Weise</i>). Et on n’invite plus
                                    «à souper» – <i>a tscheina</i> –,
                                    mais <i>tier la tscheina</i> («près du souper»), parce que
                                    l’allemand dit <i>zum Abendessen einladen</i>.
                                </p>
                                <p>
                                    Les Romanches commencent également à donner à
                                    certaines prépositions des sens qu’elles n’ont pas
                                    dans leur langue, mais que la préposition allemande
                                    correspondante possède en plus du sens correct de la
                                    préposition romanche. Ainsi, <i>sper</i>, qui signifie «à
                                    côté de», est-il de plus en plus utilisé dans le sens
                                    de «outre», «en plus de», parce que l’allemand <i>neben</i> a
                                    ce sens en plus de «à côté».
                                </p>
                                <p>
                                    Certes, les dictionnaires et grammaires tentent de
                                    maintenir la norme romanche,<sup><a href="#fn24"
                                        name="fz24">24</a></sup> mais la pression est
                                    telle, l’école tellement déficiente, l’allemand
                                    tellement omniprésent, les germanismes tellement
                                    répandus dans la presse romanche elle-même, que
                                    l’emploi correct est de plus en plus isolé.
                                </p>

                                <h3>Exemples contraires</h3>
                                <p>
                                    Le souci de lutter contre l’emprunt pur et simple à
                                    l’allemand, ou par l’allemand à l’anglais, peut aussi
                                    faire aboutir le romanche à des résultats
                                    surprenants. Ainsi, alors que le français, champion de
                                    la lutte contre l’anglicisation des langues, a baissé
                                    sa garde dans le cas du «CD» ou «cd», le romanche
                                    écrit crânement <i>DC</i>.<sup><a href="#fn25"
                                        name="fz25">25</a></sup> De manière semblable au
                                    français, le romanche a également réagi en
                                    introduisant très vite <i>sida</i> et <i>ordinatur</i>; mais comme
                                    l’allemand en est resté à <i>AIDS</i> et <i>Computer</i>, les
                                    Romanches sont en train d’abandonner <i>sida</i>, et
                                    <i>ordinatur</i> n’apparaît pratiquement plus depuis
                                    longtemps.<sup><a href="#fn26"
                                        name="fz26">26</a></sup>
                                </p>
                                <p>
                                    Le romanche peut même dépasser le français dans
                                    d’autres cas que celui du disque compact. Un exemple
                                    classique en est le <i>Sonderbund</i>, terme d’histoire
                                    suisse qui n’est pas traduit en français, mais qui, en
                                    romanche, est la <i>federaziun
                                        separada</i>.<sup><a href="#fn27"
                                            name="fz27">27</a></sup> Il peut aussi
                                    faire preuve d’hypercorrection en traduisant – et
                                    éventuellement mal – ce qui ne devrait pas se
                                    traduire. Le <i>Jugendstil</i> qui, en tant que style lancé
                                    par la revue <i>Jugend</i>, est resté le «jugendstil» en
                                    français (là où l’Art nouveau est spécifiquement en
                                    lien avec les pays allemands), apparaît ainsi
                                    systématiquement dans la littérature romanche comme
                                    <i>stil da giuventetgna</i>.<sup><a href="#fn28"
                                        name="fz28">28</a></sup>
                                </p>


                                <h1>4 Réponses apportées quant aux germanismes</h1>

                                <p>
                                    Pour le <i>Dictionnaire romanche sursilvan – français</i>,
                                    j’avais considéré nécessaire d’accorder une large
                                    place aux germanismes, tant à ceux que les
                                    dictionnaires allemand-romanche admettent eux-mêmes,
                                    qu’aussi et surtout à nombre de ceux que les Romanches
                                    utilisent malgré les indications des dictionnaires et
                                    des grammaires. Le DRF devant, entre autres, aider les
                                    francophones à comprendre le romanche, il eût été
                                    aberrant de ne pas leur donner (aussi) ce qu’ils
                                    trouvent effectivement dans la langue sursilvane
                                    écrite ou de tous les jours.
                                    À l’intention des Romanches comme des francophones,
                                    j’aurais cependant voulu ajouter de façon assez
                                    systématique, à côté des tournures fautives que je
                                    donnais pour information, l’indication des
                                    formulations correctes. Cela n’a pu être réalisé que
                                    dans une mesure limitée.
                                </p>
                                <p>
                                    La question ne se pose pas de la même façon pour le
                                    <i>Dictionnaire français-romanche</i>, mais elle est si
                                    possible encore plus difficile à traiter. J’ai accepté
                                    l’idée d’indiquer <i>trer en</i> pour «mettre/enfiler» (un
                                    vêtement), tout simplement parce que les Romanches
                                    n’utilisent rien d’autre dans la langue courante. Je
                                    sais que, par contre, je n’ai pas besoin de donner
                                    pour «participer» ce <i>far cun</i> calque
                                    de <i>mitmachen</i> que suffisamment de Romanches
                                    réprouvent eux-mêmes, et
                                    qu’ils me reprocheraient certainement si je
                                    l’insérais.<sup><a href="#fn29"
                                        name="fz29">29</a></sup> Mais entre les deux, combien
                                    de doutes,
                                    et combien de recherches supplémentaires pour éviter
                                    la solution de facilité tirée de l’allemand! Combien
                                    de cas où je me demande si le DFR peut indiquer un
                                    verbe romanche simple qui existe certes, mais n’est
                                    que très peu utilisé; et, le cas échéant, s’il faut
                                    qu’il donne en même temps le germanisme d’usage
                                    courant! Jusqu’où le souci de soutenir un romanche
                                    aussi romanche que possible doit-il aller? Jusqu’où le
                                    but déclaré du DFR, de désenclaver le romanche,
                                    peut-il mener? Dans quelle mesure ne faut-il pas, quoi
                                    qu’on en ait, refléter, ou refléter aussi, l’état
                                    véritable du romanche? La question n’est pas nouvelle,
                                    les auteurs des dictionnaires romanche-allemand et
                                    allemand-romanche se la sont posée, et y ont répondu
                                    de façon nuancée, en tentant de remettre en mémoire le
                                    vocabulaire existant, mais sans s’arc-bouter sur des
                                    positions sans espoir. Qui s’occupe d’un dictionnaire
                                    reliant le français à une autre langue doit d’ailleurs
                                    aussi, par exemple, se demander s’il faut ou non, pour
                                    le verbe «réaliser», prendre en considération le sens
                                    initialement anglais de «se rendre compte de», et,
                                    pire, pour «intégrer», celui, absurdement inverse, de
                                    «s’intégrer dans», qui est la grande mode de ces
                                    dernières années chez certains locuteurs du français.
                                </p>
                                <p>
                                    Je ne vois pas de réponse systématique. Dans la très
                                    large frange qui existe entre les exemples clairs de
                                    <i>trer en</i> et de <i>far cun</i>, la réponse ne
                                    peut être donnée
                                    qu’au cas par cas. Et comme le romanche n’est pas ma
                                    langue maternelle, pour laquelle j’aurais à la fois
                                    les connaissances et la sensibilité nécessaires pour
                                    prendre une décision, et une sorte de droit à en
                                    prendre une, fût-ce en sachant qu’elle sera contestée,
                                    je me fie au sentiment et aux connaissances de mes
                                    consultants,<sup><a href="#fn30"
                                        name="fz30">30</a></sup> en sachant que, bien souvent,
                                    eux non plus n’ont pas de réponse qui serait
                                    indiscutable.
                                </p>


                                <h1>5 Difficultés liées à d’autres lacunes</h1>

                                <p>
                                    Que faire quand les dictionnaires romanches eux-mêmes,
                                    que je dois évidemment consulter sans cesse pour
                                    contrôler et surtout compléter mes connaissances,
                                    donnent des indications difficiles à accepter, ou
                                    restent muets?
                                </p>
                                <p>
                                    Fort heureusement, «quinquina» n’est pas indispensable
                                    dans le DFR, si bien que la question ne se pose pas de
                                    savoir s’il faut ou non mentionner que cette substance
                                    ne vient pas de Chine; quant à la «quinine», que
                                    j’inclurai, elle ne crée pas de difficulté, l’allemand
                                    <i>Chinin</i> n’ayant pas orienté les Romanches vers la Chine
                                    (simplement, comme presque toujours en pareil cas, le
                                    neutre allemand est devenu le masculin <i>chinin</i> en
                                    romanche).
                                </p>
                                <p>
                                    Par contre, le DFR doit inclure «corrida» en raison de
                                    la fréquence de son emploi au sens figuré. Mais que
                                    doit-il indiquer pour le sens original? Le nom
                                    castillan est-il suffisamment connu en romanche? Il
                                    n’apparaît en tout cas pas dans le grand <i>Niev
                                        vocabulari romontsch sursilvan – tudestg</i>. Mais le DFR
                                    peut-il indiquer ce <i>cumbat de taurs</i> mal traduit de
                                    l’allemand et qui donne une idée fausse de ce qu’est
                                    une corrida? Après consultations, il indiquera <i>corrida</i>
                                    et <i>cumbat encunter/cun in taur</i>.
                                </p>
                                <p>
                                    Les difficultés sont particulièrement sensibles
                                    s’agissant du vocabulaire moderne. La dernière édition
                                    du <i>Vocabulari romontsch tudestg – sursilvan</i> date de
                                    1975. C’est dire qu’il lui manque tout le vocabulaire
                                    et toutes les nuances et emplois apparus ces dernières
                                    décennies. C’est précisément la raison pour laquelle,
                                    avant de commencer la rédaction du DRF, il a fallu
                                    réunir un vaste matériel comprenant nombre de
                                    créations nouvelles apparaissant dans des textes de
                                    tous genres. Mais, comme on peut s’y attendre, ce
                                    matériel a des lacunes quand il s’agit d’y trouver le
                                    correspondant romanche d’un mot français, et les
                                    exemples relevés ne sont de loin pas tous d’une
                                    qualité telle qu’ils puissent apparaître dans le DFR –
                                    nombre d’entre eux ont au contraire été relevés au
                                    contraire pour la façon dont ils illustrent
                                    l’influence de l’allemand sur le romanche.
                                </p>
                                <p>
                                    En principe, le <i>Pledari grond</i> de la Ligia romontscha
                                    devrait combler ces lacunes et, effectivement, il
                                    offre un matériel immense. Mais comme il est
                                    essentiellement une compilation des résultats de
                                    traductions faites, il est à la fois riche et lui-même
                                    lacunaire. De plus, le fait qu’il donne des solutions
                                    rg réduit dans bien des cas son utilité comme source
                                    d’information pour le DFR; par définition, le rg ne
                                    s’inspire en effet pas seulement du sursilvan, et les
                                    mots ou expressions qu’il donne – ou crée
                                    (néologismes) – ne correspondent pas nécessairement à
                                    au vocabulaire, à l’usage ou à l’esprit
                                    sursilvans. Surtout, même si le plus souvent il est au
                                    moins correct, et s’il contient même parfois de belles
                                    trouvailles, nombre de solutions qu’il propose se
                                    révèlent boiteuses, mal construites, ou de simples
                                    calques de l’allemand (tels les fameux <i>AB = B da
                                        A</i>). On sent, tout simplement, que les traducteurs, par
                                    manque de temps, de connaissances, de réflexe ou
                                    d’envie, n’ont souvent pas déterminé – ou réussi à
                                    déterminer – suffisamment bien le sens d’une
                                    expression allemande, surtout du vocabulaire
                                    administratif, technique, scientifique, culturel
                                    moderne; et encore plus souvent qu’ils n’ont pas
                                    cherché ou pas pris en considération les
                                    correspondants italiens ou
                                    français.<sup><a href="#fn31" name="fz31">31</a></sup>
                                </p>
                                <p>
                                    Il arrive ainsi que je ne trouve d’indications nulle
                                    part, sans d’ailleurs que le mot cherché fasse
                                    nécessairement partie du vocabulaire moderne. J’ai eu
                                    beaucoup de difficultés, par exemple, avec «drague»,
                                    «draguer», «dragueur» (dans leurs sens techniques). Il
                                    s’agit alors, si le mot ou l’expression sont d’une
                                    importance telle qu’ils ne peuvent manquer dans le
                                    DFR, d’imaginer des solutions qui ne soient
                                    pas ... des gallicismes ou des calques du français qui
                                    détonneraient par trop en romanche – même si par
                                    ailleurs le romanche a repris nombre de termes
                                    français par l’intermédiaire de l’allemand. Souvent,
                                    je suis amené à proposer des descriptions, ou à en
                                    ajouter<sup><a href="#fn32" name="fz32">32</a></sup> –
                                    c’est le cas aussi, dans un autre ordre
                                    d’idées et pour des raisons différentes, pour des
                                    spécialités à manger, du «baba au rhum» aux «nailles»
                                    et à la «taillaule».<sup><a href="#fn33"
                                        name="fz33">33</a></sup> D’un autre côté, le romanche
                                    peut avoir créé ou adopté un terme concernant un seul
                                    des mots d’une famille, ou un sens particulier d’un
                                    mot français, et il faut alors tenir compte de ce cas
                                    particulier pour traiter deux ou plusieurs articles
                                    apparentés. Ainsi le romanche connaît-il le
                                    <i>tschercaminas</i> ou <i>dostaminas</i> («dragueur
                                    de mine»), mais n’a pas de termes courants pour
                                    «drague» et «draguer».
                                </p>
                                <p>
                                    Les emprunts que le romanche courant a faits et
                                    continue à faire au français (ou à une autre langue
                                    latine) par le biais de l’allemand représentent un
                                    autre genre de difficultés, souvent anecdotiques, mais
                                    au total non négligeables. L’allemand, surtout en
                                    Suisse, aime les mots français. Mais très fréquemment,
                                    il les emploie dans un sens particulier, ou plus
                                    large, ou différent, ou alors dans un autre
                                    registre.<sup><a href="#fn34" name="fz34">34</a></sup>
                                    Lorsque le mot originellement français
                                    apparaît en romanche, il faut alors vérifier s’il y a
                                    correspondance de sens et d’emploi avec le français,
                                    et dans quelle mesure un glissement dont on sait qu’il
                                    s’est produit en allemand a été repris en
                                    romanche. Compte tenu d’un certain flottement que l’on
                                    peut percevoir en romanche, par exemple entre l’usage
                                    chez des personnes cultivées susceptibles de penser
                                    directement au français, et d’autres Romanches qui
                                    emploient le mot parce qu’ils l’entendent en allemand,
                                    les vérifications peuvent être difficiles, surtout
                                    pour un francophone, même si celui-ci est habitué aux
                                    usages de l’allemand. Ici aussi, je dois souvent, pour
                                    plus de sûreté, faire appel à un consultant.
                                </p>
                                <p>
                                    La simple question du genre peut mener à des cas de
                                    conscience. J’ai eu une certaine peine, au début de
                                    mes relations avec le romanche, à accepter que
                                    celui-ci dise <i>la garascha</i> parce qu’il a repris
                                    l’allemand <i>die Garage</i> et non pas «le garage» français,
                                    et j’ai eu encore plus de mal avec <i>la curascha</i> du
                                    sursilvan (alors que le ladin a tout de même <i>il
                                        curaschi</i>); mais dans les deux cas, je ne peux, dans
                                    mes dictionnaires, que reproduire sans discussion le
                                    féminin. Par contre, s’agissant par exemple de «front»
                                    et de la forme et du genre du romanche qui a subi
                                    l’influence de l’allemand (aussi bien <i>die Front</i> que,
                                    pour le genre, de <i>die Stirn</i>), je me suis appuyé sur le
                                    fait qu’il y a, pour tous les sens, flottement entre
                                    le masculin et le féminin (et entre les formes <i>front,
                                        frunt</i> et <i>frunta</i>) pour recommander
                                    respectivement <i>front</i>
                                    et <i>frunt</i> masculins, mais en indiquant que l’on trouve
                                    également le féminin. Quant à la raclette et à la
                                    fondue si caractéristiques d’une certaine Suisse
                                    romande, que le romanche a reprises orthographiquement
                                    telles quelles comme l’allemand, en hésitant par
                                    contre entre leur conserver le féminin du français
                                    (qu’une certaine logique de la langue romanche
                                    recommanderaient du reste également), ou leur
                                    attribuer le masculin avec lequel il reproduit
                                    généralement le neutre allemand, je me permets dans
                                    les deux dictionnaires d’en défendre le genre féminin
                                    également pour le romanche.
                                </p>
                                <p>
                                    Je dois par ailleurs faire attention, dans mon travail,
                                    à ne pas mettre sur le compte de l’allemand et de son
                                    influence toutes les divergences entre le français (ou
                                    l’italien) et le romanche. «Dramatiser»
                                    et <i>dramatisar</i> ne correspondent pas ou plus
                                    aujourd’hui, mais c’est avant
                                    tout parce que le sens premier du verbe est sorti de
                                    l’usage courant en français.
                                </p>
                                <p>En tant que francophone et parlant d’autres langues
                                    néolatines en plus du romanche, je dois, d’une manière
                                    tout à fait générale, faire attention aux faux amis
                                    qui existent inévitablement, et sans influence visible
                                    de l’allemand, entre le romanche et le français ou
                                    l’italien. <i>Deliberar</i> n’est pas seulement «délibérer»,
                                    mais aussi «libérer». Et il me faudra corriger dans le
                                    DFR l’erreur que j’ai faite dans le DRF en n’indiquant
                                    pour <i>dissimular</i> que «dissimuler» et «cacher», alors
                                    que ce verbe signifie en premier lieu «simuler».
                                </p>


                                <h1>6 Conclusion</h1>
                                <p>
                                    Je ne suis pas la personne idéale pour un dictionnaire
                                    français-romanche, et j’aurais également préféré ne pas
                                    devoir m’engager dans ce travail, ou ne m’y engager
                                    qu’en soutien d’un auteur, voire – on peut toujours
                                    rêver – d’une équipe romanche motivée, diversifiée,
                                    capable de réaliser un ouvrage qui servirait de base à
                                    une facette particulière d’une politique linguistique
                                    totalement nouvelle en plus d’être vaste et ambitieuse
                                    pour le bien du romanche, des Romanches et, finalement,
                                    osons le dire, pour le bien de la Suisse.
                                </p>
                                <p>
                                    Faute de ce qu’il faudrait, je me suis pourtant engagé
                                    une nouvelle fois dans un travail long et pénible, en
                                    connaissant mes limites, mais en comptant sur un minimum
                                    d’appui afin que le résultat soit acceptable. Je sais
                                    également que le budget du projet est en fait trop
                                    étriqué et qu’en plus la Fundaziun Retoromana n’a pas
                                    encore réussi à réunir l’entier de la somme prévue, et
                                    que cela m’imposera de nouveaux sacrifices. Il se
                                    révèle, pour couronner le tout, que les prévisions et
                                    espoirs ont été trop optimistes et qu’il y a en fait
                                    trop de travail à faire en trop peu de temps, et que je
                                    vais m’épuiser à la tâche.
                                </p>
                                <p>
                                    Il pourra donc s’agir d’un acte de foi, ou d’un défi,
                                    tous deux pratiquement désespérés; mais comme le
                                    <i>Dictionnaire français-romanche</i> aura son utilité, comme
                                    c’est quelque chose de concret que je peux faire, en fin
                                    de compte, contre la discrimination et l’injustice,
                                    contre l’indifférence, la routine débilitante, la
                                    mollesse, contre la résignation et la capitulation,
                                    c’est un travail que j’ai bien l’intention de mener à
                                    terme.
                                </p>



                                <h1>Notes</h1>


                                <p class="annotation"><sup><a href="#fz1" name="fn1">1</a></sup>
                                    J’ai traité la discrimination du romanche et ses conséquences dans le
                                    cadre de plusieurs études sociolinguistiques et surtout
                                    statistiques. Suivant la langue nationale la mieux adaptée au
                                    lecteur, voir:
                                </p>
                                <ul>
                                    <li><i>Le romanche en péril? Évolution et perspective</i>, Office fédéral de
                                        la statistique, Berne 1996.</li>
                                    <li>Graubünden, von der Dreisprachigkeit zur deutschen Einsprachigkeit(?), in: Kattenbusch, Dieter (Hg.): <i>Studis romontschs – Beiträge des Rätoromanischen Kolloquiums (Gießen/Rauischholzhausen, 21.–24. März 1996)</i>, Wilhelmsfeld 1999, 1–76.</li>
                                    <li><i>Die aktuelle Lage des Romanischen</i>, Bundesamt für Statistik, Neuchâtel 2005.</li>
                                    <li><i>La situaziun actuala dal rumantsch</i>, Uffizi federal da statistica, Neuchâtel 2005.</li>
                                    <li>Situazione attuale del romancio in Svizzera, <i>Ladinia</i> XXXI 2007, 55–106.</li>
                                </ul>


                                <p class="annotation"><sup><a href="#fz2" name="fn2">2</a></sup>
                                    On prendra garde à ne pas confondre Tessin et Suisse italienne. Dans
                                    les vallées italophones des Grisons, la première langue étrangère
                                    apprise à l’école est, logiquement, l’allemand. Déplorablement, pour
                                    des raisons pratiques que l’on peut comprendre sans devoir les
                                    partager, ces quatre vallées (7 pour cent de la population du canton)
                                    tendent à considérer les Romanches comme partie intégrante d’un
                                    immense bloc germanophone face auquel elles ont beaucoup de peine à
                                    faire entendre leur voix, plutôt que comme une communauté
                                    linguistiquement parente, et potentiellement alliée puisque placée
                                    dans une situation bien plus grave.
                                </p>


                                <p class="annotation"><sup><a href="#fz3" name="fn3">3</a></sup>
                                    La Fundaziun Retoromana a été fondée en 1982 à l’initiative du
                                    P. Flurin Maissen, sous le nom de Fundaziun Retoromana P. Placi a
                                    Spescha, pour reprendre les activités de trois institutions
                                    culturelles précédentes. À la mort de son inspirateur en 1999, elle
                                    a pris le nom de Fundaziun Retoromana P. Flurin Maissen. Elle a pour
                                    but de «sauvegarder et promouvoir la culture des Romanches en
                                    assurant à ceux-ci une existence emplie de tout ce qui est humain,
                                    beau et cher, vécu en pleine liberté des droits de l’homme»
                                    (<a href="http://www.frr.ch">http://www.frr.ch</a>).
                                </p>

                                <p class="annotation"><sup><a href="#fz4" name="fn4">4</a></sup>
                                    <i>Dictionnaire romanche sursilvan–français</i>, Fundaziun Retoromana
                                    P. Flurin Maissen, ISBN 3-9522235-0-6.
                                </p>


                                <p class="annotation"><sup><a href="#fz5" name="fn5">5</a></sup>
                                    Les situations sont extrêmement différentes d’une commune à l’autre,
                                    mais, le romanche restant discriminé au niveau aussi bien fédéral
                                    que cantonal (même si la situation s’est un peu améliorée depuis la
                                    fin du siècle passé), aucune commune ne l’enseigne ni ne l’utilise
                                    de manière aussi générale, systématique et naturelle qu’une commune
                                    romande enseigne et utilise le français.
                                </p>

                                <p class="annotation"><sup><a href="#fz6" name="fn6">6</a></sup>
                                    Du point de vue de l’apparition de la forme écrite, le sursilvan est
                                    le troisième des idiomes; il fête cette année (2011) ses 400 ans
                                    d’existence écrite, alors que le putér et le vallader possèdent des
                                    ouvrages publiés au XVIe siècle. Du point de vue statistique par
                                    contre, il est le plus important des idiomes: parmi les habitants de
                                    l’aire traditionnelle du romanche indiquant en 2000 le romanche
                                    comme meilleure langue, 58 pour cent habitent dans l’aire d’emploi du
                                    sursilvan.
                                </p>

                                <p class="annotation"><sup><a href="#fz7" name="fn7">7</a></sup>
                                    La FRR organise également depuis 1969 les Cours d’été de romanche
                                    sursilvan, les plus anciens cours de ce genre pour le romanche:
                                    <a href="http://www.frr.ch">http://www.frr.ch</a>.
                                </p>


                                <p class="annotation"><sup><a href="#fz8" name="fn8">8</a></sup>
                                    Dans ses cours d’été de romanche sursilvan, la FRR ouvre ainsi
                                    également autant que possible des fenêtres sur les autres idiomes –
                                    voire sur les autres langues rhéto-romanes.
                                </p>


                                <p class="annotation"><sup><a href="#fz9" name="fn9">9</a></sup>
                                    La FRR aurait déjà souhaité inclure dans le dictionnaire romanche
                                    sursilvan–français des informations concernant les autres idiomes,
                                    mais avait dû y renoncer en raison des coûts et du surcroît de
                                    travail que cela aurait entraînés.
                                </p>


                                <p class="annotation"><sup><a href="#fz10" name="fn10">10</a></sup>
                                    «En mintga cass vul il lungatg da scartira unificau buca concurrenzar
                                    ni remplazzar ils idioms existents, mobein sulettamein esser ina
                                    alternativa leu nua che mo ina varianta romontscha ei pusseivla e
                                    nua ch’il tudestg dominescha ella situaziun momentana. Il RUMANTSCH
                                    GRISCHUN ei ina purschida per tgi che vul (negin sto!) far diever
                                    dad ella.» (Introduction signée des président et secrétaire de la
                                    Ligia Romontscha, dans <i>Richtlinien für die Gestaltung einer
                                        Gesamtbündnerromanischen Schriftsprache RUMANTSCH GRISCHUN</i> de
                                    Heinrich Schmid, Ligia Romontscha, Coire 1982).
                                </p>


                                <p class="annotation"><sup><a href="#fz11" name="fn11">11</a></sup>
                                    Il est évident que le romanche aurait moins de difficultés s’il
                                    connaissait un standard unique pour l’ensemble de son aire. Les
                                    circonstances, historiques, géographiques et autres, en ont décidé
                                    autrement et ont conduit il y a des siècles à la création de trois
                                    standards régionaux, dont l’usage s’est enraciné. En 1794, les deux
                                    principales formes du romanche, déjà officielles dans l’aire
                                    romanche au niveau des petites unités constituant les Ligues
                                    grisonnes d’alors, ont également été reconnues comme langues
                                    officielles de la République des Trois-Ligues aux côtés de
                                    l’allemand et de l’italien. Dès la constitution du canton suisse en
                                    1803 cependant, la discrimination au profit de l’allemand a repris
                                    et s’est profondément aggravée. À partir de la 2e moitié du XIXe
                                    siècle, au moment où les effets de cette discrimination commençaient
                                    à se faire très fortement sentir, le mouvement romanche, au lieu de
                                    réclamer l’égalité des droits entre les langues, a tenté de
                                    compenser les effets de la discrimination en développant dans la
                                    population un lien sentimental profond avec sa langue, dans les
                                    formes sous lesquelles celle-ci existait. On a même créé deux
                                    idiomes supplémentaires au cours du siècle passé dans l’espoir de
                                    mieux défendre le romanche dans deux régions du centre des
                                    Grisons. La création du rg, comme langue essentiellement passive que
                                    chaque personne parlant romanche pouvait comprendre suffisamment sur
                                    la base de l’idiome auquel elle est habituée, représentait, dans la
                                    situation où se trouvait le romanche après près de deux siècles de
                                    discrimination, un bon compromis entre l’attachement cultivé depuis
                                    des générations pour l’idiome maternel et les besoins de la
                                    communication entre le monde extérieur et le romanche.
                                    <br />
                                    Pratiquement dès la création du rg cependant, certains, convaincus de
                                    tenir là la solution essentielle pour la sauvegarde du romanche, ont
                                    cherché à amener un changement brutal – ou désespéré – de la stratégie
                                    suivie depuis le réveil romanche et tentent aujourd’hui ouvertement
                                    d’imposer l’unification de la langue par l’adoption généralisée du rg
                                    comme standard de communication, en réduisant les idiomes à des
                                    dialectes régionaux que l’on n’apprendra plus à écrire ni à lire. Une
                                    lutte est ainsi en cours à propos de la forme du romanche à utiliser
                                    dans ce qui existe d’enseignement en romanche et du romanche. On dira
                                    simplement ici à ce sujet et pour illustrer le rapport des forces
                                    entre les deux tendances opposées, qu’une organisation de masse – à
                                    l’échelle romanche s’entend – s’est constituée cette année (2011) pour
                                    le maintien des idiomes comme langue d’enseignement (avec une
                                    introduction du rg comme langue passive à partir du niveau
                                    secondaire), et que, dans l’aire romanche, elle compte environ quatre
                                    fois plus de membres que le nombre de signataires d’un manifeste
                                    exigeant à l’inverse l’imposition généralisée du seul rg à l’école
                                    dite romanche
                                    (voir <a href="http://www.proidioms.ch">http://www.proidioms.ch</a>,
                                    Novitads 2, 25.6.2011).
                                </p>


                                <p class="annotation"><sup><a href="#fz12" name="fn12">12</a></sup>
                                    Quelques auteurs ont commencé à se servir du rg dans leur œuvre
                                    littéraire. La majorité continue cependant à se servir de l’idiome
                                    de leur région. À l’exception de quelques œuvres dialectales de
                                    portée locale, toute la littérature romanche d’avant la fin du XXe
                                    siècle est bien sûr écrite dans les idiomes traditionnels,
                                    essentiellement dans les trois grands anciens.
                                </p>


                                <p class="annotation"><sup><a href="#fz13" name="fn13">13</a></sup>
                                    La FRR offre également une introduction au rg dans son programme
                                    habituel des cours d’été de romanche sursilvan.
                                </p>


                                <p class="annotation"><sup><a href="#fz14" name="fn14">14</a></sup>
                                    C’est l’expérience que je fais depuis près de dix ans avec le
                                    <i>Dictionnaire romanche–sursilvan français</i>, qui a pourtant subi
                                    plusieurs contrôles complets, effectués aussi bien par des
                                    romanchophones que par des francophones. À chaque nouvel exemple, il
                                    faut, pour ne pas désespérer, se souvenir que les autres
                                    dictionnaires romanches, et même les grands dictionnaires réalisés
                                    dans d’autres langues par des équipes entières, présentent eux aussi
                                    des insuffisances et contiennent des coquilles parfois surprenantes.
                                </p>


                                <p class="annotation"><sup><a href="#fz15" name="fn15">15</a></sup>
                                    La partie français–romanche (vallader) du dictionnaire de Gilbert
                                    Taggart (1990) compte 1500 articles, le <i>Minidictionnaire</i> de
                                    Dominique Stich (2006) donne, comme son nom le suggère, la
                                    traduction de base en rg de quelques milliers de mots français. Quel
                                    que soit par ailleurs leur intérêt, ils ne sont d’aucune utilité
                                    pour le DFR.
                                </p>


                                <p class="annotation"><sup><a href="#fz16" name="fn16">16</a></sup>
                                    Pour le sursilvan, il s’agit des dictionnaires romanche-allemand et
                                    allemand-romanche de Ramun Vieli, puis Ramun Vieli et Alexi
                                    Decurtins, parus de 1938 à 1975; de divers vocabulaires techniques
                                    basés sur le <i>Duden illustré</i>; et surtout du <i>Niev vocabulari romontsch
                                        sursilvan–tudestg</i> d’Alexi Decurtins paru en 2001, une œuvre
                                    monumentale dont l’auteur a gracieusement fait mettre à disposition,
                                    pour le DFR, une copie du fichier électronique original qui permet
                                    de le consulter dans le sens allemand–romanche.
                                    <br />
                                    Pour le rg, la Ligia Romontscha a mis en ligne son <i>Pledari grond</i> (PG),
                                    qui réunit, en l’épurant, le matériel des traductions effectuées
                                    d’allemand en rg.
                                </p>


                                <p class="annotation"><sup><a href="#fz17" name="fn17">17</a></sup>
                                    <i>Dicziunari rumantsch–grischun</i> (DRG), en cours de parution (le dernier
                                    fascicule paru contient les articles de «manzögna» à
                                    «Maria»). Contrairement à ce que le nom pourrait laisser supposer, le
                                    DRG n’est pas consacré au rg, auquel il est de beaucoup
                                    antérieur. Il est l’un des quatre vocabulaires nationaux dont les
                                    travaux ont commencé il y a plus d’un siècle et concerne la langue
                                    romanche dans son ensemble (idiomes, dialectes, et rg depuis 1982)
                                    en se basant sur la forme vallader des mots. Le DRG est rédigé en
                                    allemand parce qu’il a été, de façon caractéristique pour l’époque,
                                    conçu comme un ouvrage de documentation linguistique à l’usage des
                                    générations futures.
                                </p>


                                <p class="annotation"><sup><a href="#fz18" name="fn18">18</a></sup>
                                    Même si l’allemand a été pour moi aussi la première langue étrangère,
                                    et est comme le romanche une de mes langues préférées – c’est
                                    d’ailleurs un paradoxe et une situation parfois gênante que de
                                    devoir défendre une langue aimée contre une autre langue aimée.
                                </p>



                                <p class="annotation"><sup><a href="#fz19" name="fn19">19</a></sup>
                                    <i>Le Dictionnaire abrégé de la langue ladine avec traduction allemande,
                                        française et anglaise</i>, paru en 1929, est une réalisation privée
                                    d’Anton Velleman, et le <i>Dictionnaire rumantsch ladin–français</i> est
                                    certes paru aux éditions de la Ligia Romontscha, mais il est lui
                                    aussi une initiative privée de son auteur Gilbert Taggart.
                                </p>



                                <p class="annotation"><sup><a href="#fz20" name="fn20">20</a></sup>
                                    Je me demande également dans quelle mesure, consciemment ou non, les
                                    Romanches qui seraient qualifiés pour réaliser un dictionnaire
                                    français–romanche ne mesurent pas leur connaissance du français à
                                    l’aune de leur maîtrise de l’allemand, ce qui les empêcherait de
                                    s’imaginer travaillant à un tel dictionnaire.
                                </p>



                                <p class="annotation"><sup><a href="#fz21" name="fn21">21</a></sup>
                                    Une partie des communes de l’aire romanche traditionnelle (celle qui
                                    parlait romanche il y a deux siècles et qui était assez exactement
                                    ce que la précédente vague de germanisation avait laissé subsister
                                    au sortir du moyen-âge) a l’allemand comme langue d’enseignement,
                                    avec éventuellement un enseignement du romanche de l’ordre de deux à
                                    trois heures par semaines. Ces communes sont aujourd’hui totalement
                                    germanisées, ou en voie de l’être. D’autres communes ont récemment
                                    remplacé l’école dite romanche par une école bilingue
                                    romanche–allemand.
                                    <br />
                                    Seule la moitié environ de la population de l’aire romanche jouit de
                                    l’école dite romanche. Mais cette école dite romanche prévoit au
                                    maximum trois ans d’enseignement uniquement en romanche. L’allemand
                                    est introduit en quatrième année comme branche, voire comme langue
                                    d’enseignement à un degré variable. À partir de la 7e, l’enseignement
                                    du romanche et en romanche est réduit à la portion congrue, ou
                                    disparaît. Le canton ne prévoit en effet pas d’école entièrement
                                    romanche, alors que les écoles obligatoires allemandes ou italiennes
                                    sont réellement allemandes ou italiennes (mais il n’existe pas de
                                    gymnase ou lycée enseignant uniquement en italien dans les Grisons).
                                    <br />
                                    Certes, dans le canton des Grisons, ce sont les communes elles-mêmes
                                    qui décident de la langue d’enseignement (avec la limitation
                                    mentionnée pour le romanche). Dans les régions alémaniques et
                                    italophones du canton, le choix va de soi. Dans l’aire romanche par
                                    contre, la pression que la discrimination du romanche exerce vers
                                    l’allemand, ou la pression des immigrés de langue allemande, très
                                    nombreux dans les régions touristiques et qui ont bien sûr le droit de
                                    vote s’il sont suisses, ont abouti dans de nombreux cas à l’adoption
                                    de l’école allemande, ou à un renforcement de l’allemand dans l’école
                                    dite romanche. La loi sur les langues entrée en vigueur en 2008
                                    contient heureusement des dispositions qui freinent ce mouvement tant
                                    que le romanche conserve certains seuils successifs selon les
                                    résultats des recensements. (À ce sujet, on mentionnera encore que les
                                    recensements décennaux de la Confédération ne seront plus réalisés de
                                    manière à donner des indications concernant l’emploi des langues à un
                                    niveau aussi détaillé que celui de la commune. Compte tenu du fait que
                                    chacun des derniers recensements a montré un recul tragique du
                                    romanche, l’absence de nouvelles données serait en pratique favorable
                                    au romanche. L’administration grisonne étudie toutefois comment
                                    pallier à la renonciation de la Confédération à réunir les données
                                    concernées.)
                                    <br />
                                    Pour plus de détails, voir Jean-Jacques Furer, Le romanche dans les
                                    écoles du canton suisse des Grisons, in: <i>Actes du colloque
                                        international: Quelles politiques linguistiques éducatives pour les
                                        langues régionales ou minoritaires de l’arc alpin, Gap, 9 et 10
                                        juillet 2004</i>, Unioun Prouvençalo, 2006, 61–82 (en tenant compte du
                                    fait que la situation faite au romanche a empiré ces dernières années
                                    dans les écoles de diverses communes, telles que Trin).
                                </p>



                                <p class="annotation"><sup><a href="#fz22" name="fn22">22</a></sup>
                                    Le <i>Pledari grond</i> propose également <i>biopur</i>
                                    pour <i>Biobauer</i>. Par contre,
                                    il traduit <i>Windpark</i> par <i>parc aeroelectric</i> (plus exactement
                                    <i>aeoroelectric</i> – ce qui illustre combien il est parfois difficile de
                                    voir les fautes de frappe).
                                </p>

                                <p class="annotation"><sup><a href="#fz23" name="fn23">23</a></sup>
                                    Et <i>Chinarinde</i> («quinquina») par <i>scorsa chinesa</i> («écorce chinoise»),
                                    ceci toutefois en indiquant également <i>quinquina f</i> en ce qui concerne
                                    le sursilvan; le Dicziunari tudais/ch–rumantsch ladin ne donne,
                                    lui, que <i>scorza chinaisa</i>.
                                </p>


                                <p class="annotation"><sup><a href="#fz24" name="fn24">24</a></sup>
                                    Voir à ce sujet:
                                    <br />
                                    <ul>
                                        <li>
                                            P. Flurin Maissen: <i>Il bien diever dellas preposiziuns</i>, Romania 1962.</li>
                                        <li>Arnold Spescha: <i>Grammatica sursilvana</i>, Cuera 1989. Voir § 508–525 et en particulier § 514 Las
                                            preposiziuns tudestgas auf, aus, an, bei/zu e las preposiziuns
                                            corrispundentas romontschas.</li>
                                    </ul>
                                </p>



                                <p class="annotation"><sup><a href="#fz25" name="fn25">25</a></sup>
                                    Mais le mot consacré pour l’ancien disque 16, 33, 45 ou 78 tours est
                                    quant à lui la <i>platta</i>.
                                </p>

                                <p class="annotation"><sup><a href="#fz26" name="fn26">26</a></sup>
                                    Le <i>Pledari grond</i> a encore une mention isolée d’<i>ordinatur</i> dans un flot
                                    de traductions donnant <i>computer</i> et autres <i>computerisar</i>; de façon
                                    intéressante, et sans doute caractéristique, il donne également
                                    <i>calculatur</i>, mais en relation avec <i>Rechner</i>. Le <i>Niev vocabulari
                                        romontsch sursilvan–tudestg</i> quant à lui donne aussi bien <i>ordinatur</i>
                                    que <i>computer</i> et si, considérant certainement la place des deux mots
                                    dans l’usage romanche actuel, il accorde plus d’espace à l’article
                                    <i>computer</i>, il y mentionne aussi expressément le synonyme <i>ordinatur</i>.
                                </p>



                                <p class="annotation"><sup><a href="#fz27" name="fn27">27</a></sup>
                                    Le français (de Suisse) dit ainsi la «guerre du <i>Sonderbund</i>» là où le
                                    romanche parle de <i>l’uiara della/dalla federaziun separada.</i>
                                </p>



                                <p class="annotation"><sup><a href="#fz28" name="fn28">28</a></sup>
                                    Mais le <i>Pledari grond</i> indique très à propos, pour <i>Jugendstil</i>,
                                    <i>jugendstil</i> et <i>stil floreal</i>.
                                </p>


                                <p class="annotation"><sup><a href="#fz29" name="fn29">29</a></sup>
                                    Je prends soin de signaler, à l’article «avec», que la tournure
                                    (elliptique) française «faire avec» signifie non pas <i>far cun</i>, mais
                                    par exemple <i>s’arranschar cun enzatgei</i>.
                                </p>


                                <p class="annotation"><sup><a href="#fz30" name="fn30">30</a></sup>
                                    En premier lieu de Claudio Vincenz, romaniste, ancien rédacteur au
                                    <i>Dicziunari rumantsch grischun</i> et aujourd’hui professeur de français
                                    à l’École cantonale de Coire.
                                </p>


                                <p class="annotation"><sup><a href="#fz31" name="fn31">31</a></sup>
                                    Mais voir la note ci-dessus à propos de <i>Jugendstil</i>.
                                </p>


                                <p class="annotation"><sup><a href="#fz32" name="fn32">32</a></sup>
                                    J’ajoute également une description ou des précisions dans certains cas
                                    où des mots ou expressions romanches existent, mais sont peu
                                    familières aux Romanches, en eux-mêmes ou quant à leur objet (qui,
                                    par contre, est courant en français si je l’inclus dans le DFR).
                                </p>


                                <p class="annotation"><sup><a href="#fz33" name="fn33">33</a></sup>
                                    Sans en exagérer l’importance, le DFR accorde au vocabulaire romand la
                                    place qui lui est due dans un dictionnaire suisse.
                                </p>


                                <p class="annotation"><sup><a href="#fz34" name="fn34">34</a></sup>
                                    «Apéro» est familier en français, il ne l’est plus «chez nos
                                    Confédérés»; la difficulté, pour le traducteur allemand–français,
                                    est alors, tout d’abord, de ne pas se laisser entraîner à
                                    transformer un événement d’une certaine tenue en un apéro entre
                                    copains, puis, souvent, de convaincre les organisateurs que leur
                                    <i>Apero</i> est un apéritif.
                                    <br />
                                    Depuis les années 1990 (nonante ...), nombre de Romands, lisant et
                                    entendant sans cesse <i>offene Drogenszene</i> ou <i>Tanzszene</i>,
                                    ont oublié ce qu’est un milieu ou un cercle et ont commencé à dire et
                                    écrire «la scène ouverte de la drogue», «la scène de la danse croit
                                    que» etc. Un exemple qui, par ailleurs, doit inciter à faire preuve de
                                    compréhension pour les Romanches, placés comme ils le sont dans une
                                    situation bien plus difficile que des Romands qui, eux, ont pu se
                                    constituer des bases autrement plus solides dans leur langue
                                    maternelle.
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

export default FurerJ;