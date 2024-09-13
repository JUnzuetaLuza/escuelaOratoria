import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './index.css'
import { Inicio } from './views/Inicio/Inicio.jsx';
import { SobreMi } from './views/SobreMi/SobreMi.jsx';
import { Curso } from './views/Curso/Curso.jsx';
import { Contacto } from './views/Contacto/Contacto.jsx';
import { Podcast } from './views/Podcast/Podcast.jsx';
import { ScrollToTop } from './others/ScrollToTop.jsx';

function App() {
  const location = useLocation();

  return (
    <>
    <ScrollToTop/>
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
      >
        <Routes location={location}>
          <Route path="/" element={<Inicio />} />
          <Route path="sobremi" element={<SobreMi />} />
          <Route path="curso" element={<Curso />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="podcast" element={<Podcast />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);