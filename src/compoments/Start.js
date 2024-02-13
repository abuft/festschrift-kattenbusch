import React, { useState } from "react";
import titlePic from "../images/titel/titelbild.jpg";
import titleAudio from "../videos/titel/titelfilm_silent.mp4"
import Footer from "./Footer";
import classes from "./Rubrik.module.css";
import FestschriftPdf from "../pdf/(Das)_diskrete_Tatenbuch_-_Festschrift_Dieter_Kattenbusch.pdf";

function Start() {

    const [showContent, setShowContent] = useState(false);

    function toggleContentHandler() {
        setShowContent((isShowing) => !isShowing);
    }

    return (
        <div id="Wrapper" className="container_14">
            <div className="grid_9">
                <a href="/inhalt">
                    <img src={titlePic}
                        width="600"
                        height="544"
                        alt="Title" />
                </a>
            </div>

            <div id="Header">
                <div className="grid_5">
                    <br /> <br /> <br />
                    <nav>
                        <h2 className="header"><a href="/geleitwort">Zum Geleit</a></h2>
                        <h2 className="header"><a href="/inhalt">Inhalt</a></h2>
                        <h2 className="header"><a href="/autoren">Autorinnen/Autoren</a></h2>
                        <h2 className="header">Rubriken
                            <button className={classes.button}
                                onClick={toggleContentHandler}>...
                            </button>
                        </h2>
                        {showContent && (
                            <ul className="rubrik">
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
                        <h2 className="header">
                            <a href="/impressum">Impressum</a>
                        </h2>
                        <h2 className="header">
                            <a href={titleAudio}>Warum</a>
                            (Das) diskrete Tatenbuch?
                        </h2>
                        <h2 className="header">
                            Das Buch als <a href={FestschriftPdf}>PDF zum download</a>
                        </h2>
                    </nav>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Start;