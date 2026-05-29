import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import { ROUTES } from './constants/routes';

const Menu = lazy(() => import('./pages/Menu/Menu'));
const About = lazy(() => import('./pages/About/About'));
const Skills = lazy(() => import('./pages/Skills/Skills'));
const Projects = lazy(() => import('./pages/Projects/Projects'));
const Socials = lazy(() => import('./pages/Socials/Socials'));

function LoadingFallback(): React.JSX.Element {
  return <div style={{ background: '#000', width: '100vw', height: '100vh' }} />;
}

export default function App(): React.JSX.Element {
  const location = useLocation();

  return (
    <Suspense fallback={<LoadingFallback />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path={ROUTES.menu} element={<Menu />} />
          <Route path={ROUTES.about} element={<About />} />
          <Route path={ROUTES.skills} element={<Skills />} />
          <Route path={ROUTES.projects} element={<Projects />} />
          <Route path={ROUTES.socials} element={<Socials />} />
        </Routes>
      </AnimatePresence>
      <Analytics />
    </Suspense>
  );
}
