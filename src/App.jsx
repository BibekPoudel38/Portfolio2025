import React from 'react';
import { ClinicalTranslationPage } from './pages/ClinicalTranslationPage.jsx';
import { EesaPage } from './pages/EesaPage.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { MstPaperPage } from './pages/MstPaperPage.jsx';
import { ResearchPage } from './pages/ResearchPage.jsx';

const ROUTES = {
  '/': HomePage,
  '/eesa': EesaPage,
  '/research': ResearchPage,
  '/research/mst': MstPaperPage,
  '/research/clinical-translation': ClinicalTranslationPage,
};

const normalizePath = (path) => {
  const normalized = path.replace(/\/+$/, '');
  return normalized || '/';
};

const App = () => {
  const Page = ROUTES[normalizePath(window.location.pathname)] || HomePage;
  return <Page />;
};

export default App;
