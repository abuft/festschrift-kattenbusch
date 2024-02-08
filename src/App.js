import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/style.css';
import './styles/grid.css';
import Impressum from './compoments/Impressum';
import Geleitwort from './compoments/Geleitwort';
import Start from './compoments/Start';
import Inhalt from './compoments/Inhalt';
import Autoren from './compoments/Autoren';
import Urbano from './compoments/articles/Urbano';
import AngelisVoelker from './compoments/articles/AngelisVoelker';
import Ernst from './compoments/articles/Ernst';
import Schmidt from './compoments/articles/Schmidt';
import Koehler from './compoments/articles/Koehler';
import Klare from './compoments/articles/Klare';
import Chiocchetti from './compoments/articles/Chiocchetti';
import VidesottBernardi from './compoments/articles/VidesottBernardi';
import Perone from './compoments/articles/Perone';
import Tosques from './compoments/articles/Tosques';
import Bauer from './compoments/articles/Bauer';
import Bernhard from './compoments/articles/Bernhard';
import Bock from './compoments/articles/Bock';
import Schaumburg from './compoments/articles/Schaumburg';
import Pichler from './compoments/articles/Pichler';
import FurerJ from './compoments/articles/FurerJ';
import FurerG from './compoments/articles/FurerG';
import Cocco
 from './compoments/articles/Cocco';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/angelisVoelker" element={<AngelisVoelker id="angelis_voelker" author="Barbara De Angelis und Harald Völker" />} />
          <Route path="/autoren" element={<Autoren id="Autorinnen/Autoren" />} />
          <Route path="/bauer" element={<Bauer id="Bauer" author="Roland Bauer" />} />
          <Route path="/bernhard" element={<Bernhard id="Bauer" author="Gerald Bernhard" />} />
          <Route path="/bock" element={<Bock id="Bock" author="Günter Bock" />} />
          <Route path="/chiocchetti" element={<Chiocchetti id="chiocchetti" author="Fabio Chiocchetti" />} />
          <Route path='/cocco' element={<Cocco id="Cocco" author="Giuseppe Cocco" />} />
          <Route path="/ernst" element={<Ernst id="Ernst" author="Gerhard Ernst" />} />
          <Route path="/furerj" element={<FurerJ id="FurerJ" author="Jean-Jacques Furer" />} />
          <Route path="/furerg" element={<FurerG id="FurerG" author="Gianmarco Furer" />} />
          <Route path="/geleitwort" element={<Geleitwort id="Geleitwort" />} />
          <Route path="/impressum" element={<Impressum id="Impressum" />} />
          <Route path="/inhalt" element={<Inhalt id="Inhaltsverzeichnis" />} />
          <Route path="/klare" element={<Klare id="Klare" author="Johannes Klare" />} />
          <Route path="/koehler" element={<Koehler id="Koehler" author="Carola Koehler" />} />
          <Route path="/perone" element={<Perone id="perone" author="Ugo Perone" />} />
          <Route path="/pichler" element={<Pichler id="Pichler" author="Edith Pichler" />} />
          <Route path="/schaumburg" element={<Schaumburg id="Schaumburg" author="Christophe Schaumburg" />} />
          <Route path="/schmidt" element={<Schmidt id="Schmidt" author="Jochen Schmidt" />} />
          <Route path="/tosques" element={<Tosques id="Tosques" author="Fabio Tosques" />} />
          <Route path="/urbano" element={<Urbano id="urbano" author="Amalia Urbano" />} />
          <Route path="/videsottBernardi" element={<VidesottBernardi id="videsott_bernardi" author="Paul Videsott/Rut Bernardi" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
