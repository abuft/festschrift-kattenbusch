import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/style.css';
import './styles/grid.css';
import './styles/lightbox.css';
import Impressum from './compoments/Impressum';
import Geleitwort from './compoments/Geleitwort';
import Start from './compoments/Start';
import Inhalt from './compoments/Inhalt';
import Autoren from './compoments/Autoren';
import Urbano from './compoments/articles/Urbano';
import AngelisVoelker from './compoments/articles/AngelisVoelker';
import Ernst from './compoments/articles/Ernst';
import Schmidt from './compoments/articles/Schmidt';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/autoren" element={<Autoren id="Autorinnen/Autoren" />} />
          <Route path="/geleitwort" element={<Geleitwort id="Geleitwort" />} />
          <Route path="/impressum" element={<Impressum id="Impressum" />} />
          <Route path="/inhalt" element={<Inhalt id="Inhaltsverzeichnis" />} />
          <Route path="/angelisVoelker" element={<AngelisVoelker id="angelis_voelker" author="Barbara De Angelis und Harald Völker" />} />
          <Route path="/ernst" element={<Ernst id="Ernst" author="Gerhard Ernst" />} />
          <Route path="/schmidt" element={<Schmidt id="Schmidt" author="Jochen Schmidt" />} />
          <Route path="/urbano" element={<Urbano id="urbano" author="Amalia Urbano" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
