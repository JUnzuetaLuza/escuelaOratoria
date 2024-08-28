import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import './index.css'
import { Inicio } from './views/Inicio/Inicio.jsx';
import { SobreMi } from './views/SobreMi/SobreMi.jsx';
import { Curso } from './views/Curso/Curso.jsx';
import { Contacto } from './views/Contacto/Contacto.jsx';
import { Podcast } from './views/Podcast/Podcast.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="sobremi" element={<SobreMi />} />
          <Route path="curso" element={<Curso />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="podcast" element={<Podcast />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);