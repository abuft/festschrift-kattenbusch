import React, { useState } from "react";

export default function Impressum() {

    const [showContent, setShowContent] = useState(false);

    function toggleContentHandler() {
        setShowContent((isShowing) => !isShowing);
    }

    return (
        <div>
            <div id="Wrapper" className="container_14">
                <header id="page_header">
                    <h1 id="header"><a href="/">(Das) diskrete Tatenbuch</a> {">"} Impressum</h1>
                    <hr />
                </header>
                <div id="Header">

                    <div className="grid_9">
                        <h1 id="main_title">Impressum</h1>
                    </div>

                    <div className="grid_5">
                        <nav>
                            <h2 className="header"><a href="/">Startseite</a></h2>
                            <h2 className="header"><a href="/inhalt">Inhalt</a></h2>
                            <h2 className="header"><a href="/autoren">Autorinnen/Autoren</a></h2>
                            <h2 className="header">Rubriken<button onClick={toggleContentHandler}>...</button></h2>
                            {showContent && (
                                <ul>
                                    <li><a href="/inhalt#kat1">Dialekte/Varietäten</a></li>
                                    <li><a href="/inhalt#kat2">Kulturgeschichte</a></li>
                                    <li><a href="/inhalt#kat3">Ladinisch/Rätoromanisch</a></li>
                                    <li><a href="/inhalt#kat4">Literaturwissenschaft</a></li>
                                    <li><a href="/inhalt#kat5">Mehrsprachigkeit</a></li>
                                    <li><a href="/inhalt#kat6">Reisen</a></li>
                                    <li><a href="/inhalt#kat7">Rumänisch</a></li>
                                    <li><a href="/inhalt#kat8">Sport</a></li>
                                    <li><a href="/inhalt#kat9">VIVALDI</a></li>
                                    <li><a href="/inhalt#kat10">Varia</a></li>
                                </ul>
                            )}
                            <h2 className="header"><a href="/impressum">Impressum</a></h2>
                        </nav>
                    </div>
                </div>

                <div id="Teasers" className="clearfix">
                    <div className="grid_9">

                        <h3>Herausgeber</h3>
                        <p>
                            Carola Köhler<br />
                            <a href="mailto:info@ck-lektorat.de">info@ck-lektorat.de</a>
                        </p>
                        <p>
                            <a href="http://www.romanistik.hu-berlin.de/personal/tosques">
                                Fabio Tosques</a><br />
                            <a href="mailto:ftosques@gmail.com">ftosques@gmail.com</a>
                        </p>
                        <p>
                            Humboldt-Universität zu Berlin<br />
                            Institut für Romanistik<br />
                            Dorotheenstr. 65<br />
                            D-10099 Berlin<br />
                            Tel. +49-30-2093 5115
                        </p>

                        <h3>Zitierweise</h3>

                        <p>
                            Carola Köhler/Fabio Tosques (Hg.):
                            (Das) diskrete Tatenbuch. Digitale
                            Festschrift für Dieter Kattenbusch zu
                            seinem 60. Geburtstag, Berlin:
                            Humboldt-Universität, Institut für
                            Romanistik, 2012
                        </p>

                        <h3>Konzeption und Realisierung der CD</h3>
                        <p>Carola Köhler/Fabio Tosques
                        </p>

                        <br /> <br />
                        <p>
                            Bezug der CD über die oben genannten Kontaktmöglichkeiten.
                        </p>

                        <p>
                            Die Rechte der Beiträge verbleiben bei den Autorinnen und Autoren. Die
                            Rechte für Fotos und Abbildungen liegen ebenfalls, so nicht anders
                            gekennzeichnet, bei den Autorinnen und Autoren.

                        </p>
                        <p>
                            Bibliographische Information der Deutschen Nationalbibliothek Die
                            Deutsche Nationalbibliothek verzeichnet diese Publikation in der
                            Deutschen Nationalbibliographie; detaillierte bibliographische Angaben
                            sind im Internet unter
                            <a href="http://dnb.d-nb.de"
                                target="_blank"
                                rel="noreferrer">http://dnb.d-nb.de</a>
                            abrufbar.
                        </p>

                    </div>
                </div>

                <div className="grid_5 prefix_5">
                    <footer id="page_footer">
                        <p>&copy; 2012 Institut f&uuml;r Romanistik, HU</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}