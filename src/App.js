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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/angelisVoelker" element={<AngelisVoelker id="angelis_voelker" author="Barbara De Angelis und Harald Völker" />} />
          <Route path="/autoren" element={<Autoren id="Autorinnen/Autoren" />} />
          <Route path="/bauer" element={<Bauer id="Bauer" author="Roland Bauer" />} />
          <Route path="/chiocchetti" element={<Chiocchetti id="chiocchetti" author="Fabio Chiocchetti" />} />
          <Route path="/ernst" element={<Ernst id="Ernst" author="Gerhard Ernst" />} />
          <Route path="/geleitwort" element={<Geleitwort id="Geleitwort" />} />
          <Route path="/impressum" element={<Impressum id="Impressum" />} />
          <Route path="/inhalt" element={<Inhalt id="Inhaltsverzeichnis" />} />
          <Route path="/klare" element={<Klare id="Klare" author="Johannes Klare" />} />
          <Route path="/koehler" element={<Koehler id="Koehler" author="Carola Koehler" />} />
          <Route path="/perone" element={<Perone id="perone" author="Ugo Perone" />} />
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
