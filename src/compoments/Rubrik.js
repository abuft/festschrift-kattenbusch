import { useState } from "react";

function Rubrik() {

    const [showContent, setShowContent] = useState(false);

    function toggleContentHandler() {
        setShowContent((isShowing) => !isShowing);
    }

    return (
        <div className="grid_5">
            <nav>
                <h2 className="header"><a href="/" name="index">Startseite</a></h2>
                <h2 className="header"><a href="/inhalt">Inhalt</a></h2>
                <h2 className="header"><a href="/autoren">Autorinnen/Autoren</a></h2>
                <h2 className="header">Rubriken<button onClick={toggleContentHandler}>...</button></h2>
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
                <h2 className="header"><a href="/impressum">Impressum</a></h2>
            </nav>
        </div>
    );
}

export default Rubrik;