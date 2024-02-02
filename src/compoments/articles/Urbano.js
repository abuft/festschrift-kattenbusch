import { useState } from 'react';

import upArrow from '../../images/layout/up-arrow.png';
import urbanoPortrait from '../../images/aurbano/aurbano-portrait.jpg';
import plurilinguistici from '../../images/aurbano/auguri-plurilinguistici.jpg';

import urbanoWebm from '../../videos/aurbano/urbano-beitrag-video.webm';
import urbanoOgv from '../../videos/aurbano/urbano-beitrag-video.ogv';
import urbanoMp4 from '../../videos/aurbano/urbano-beitrag-video.mp4';

function Urbano() {

  const [showContent, setShowContent] = useState(false);

  function toggleContentHandler() {
    setShowContent((isShowing) => !isShowing);
  }

  return (
    <div>
      <header id="page_header">
        <h1 id="header"><a href="/inhalt">(Das) diskrete Tatenbuch</a> {">"} Dialekte/Varietäten {">"}
          Amalia Urbano</h1>
        <hr />
      </header>
      <div id="Wrapper" className="container_14">

        <div id="Header">

          <div className="grid_9">
            <h1 id="main_title"><i>Lu Destine</i> di Modesto Della Porta</h1>
            <p id="author">Amalia Urbano, Berlin</p>
          </div>

          <div className="grid_5">
            <nav>
              <h2 className="header"><a href="/" name="index">Startseite</a></h2>
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
            {/* <!-- erster Abschnitt hier einfuegen --> */}
            <p>
              Caro Dieter, non è stato facile trovare qualcosa che potesse
              sorprenderti. E così ho pensato alle mie radici abruzzesi e
              al tuo progetto VIVALDI. E ho scelto una poesia di Modesto
              Della Porta che è un poeta abruzzese, nato nel 1885 a Guardiagrele in provincia di Chieti che ora reciterò in
              vernacolo.
            </p>

            <div align="center">
              <video poster={plurilinguistici} width="700" height="500" loop="loop"
                controls="controls">
                <source src={urbanoOgv} type="video/ogg" />
                <source src={urbanoMp4} type="video/mp4" />
                <source src={urbanoWebm} type="video/webm" />
                <p>Your browser does not support the video tag.</p>
              </video>
            </div>

            <div><canvas id="fft" width="512" height="200"></canvas></div>

          </div>
          <div className="grid_5">

            <div className="abouttheauthor">
              {/*  <!-- Authorbild --> */}
              <img src={urbanoPortrait} width="100" height="90" alt="Amalia Urbano - Portrait" />
              <div className="abouttheauthorfont"><br /><br />
                {/* <!-- Authorbeschreibung (Text) --> */}
                <b>Amalia Urbana</b>, Dott.ssa, Lettrice di ruolo del
                Ministero Affari Esteri della Repubblica italiana
                all’Istituto di Filologia Romanza della
                Humboldt-Universität di Berlino.
              </div>
              <div className="clearfloat"></div>
            </div>
          </div>
        </div>

        <div id="Main">
          <div id="Articles" className="grid_14">
            <section id="posts">
              <article className="post">
                {/*<!-- Content of the article --> */}

              </article>
            </section>
          </div>
        </div>


        <div align="right">
          <a href="#index"><img src={upArrow} alt="Up Array" /></a>
        </div>

        <div className="grid_5 prefix_5">
          <footer id="page_footer">
            <p>&copy; 2012 Institut f&uuml;r Romanistik, HU</p>
            <p>
              <script type="text/javascript" src="js/statistics.js">
              </script>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Urbano;