import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/style.css';
import './styles/grid.css';
import './styles/grid-and-style.css';
import './styles/lightbox.css';
import Impressum from './compoments/Impressum';
import Geleitwort from './compoments/Geleitwort';
import Start from './compoments/Start';
import Inhalt from './compoments/Inhalt';
import Autoren from './compoments/Autoren';
import Urbano from './compoments/articles/Urbano';
import AngelisVoelker from './compoments/articles/AngelisVoelker';
import Ernst from './compoments/articles/Ernst';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/geleitwort" element={<Geleitwort />} />
          <Route path="/inhalt" element={<Inhalt />} />
          <Route path="/autoren" element={<Autoren />} />
          <Route path="urbano" element={<Urbano />} />
          <Route path="/angelisVoelker" element={<AngelisVoelker />} />
          <Route path="/ernst" element={<Ernst />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
