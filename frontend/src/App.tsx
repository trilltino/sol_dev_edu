import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import {
  LandingPage,
  AboutMePage,
  RoadmapPage,
  WsAndHPage,
  WhatPage,
  WhenPage,
  WherePage,
  WhereAndWhoPage,
  WhyPage,
  HowPage,
  BeginnerPage,
  IntermediatePage,
  AdvancedPage,
  WalkthroughPage,
  TinosRustLabPage,
  SuperteamLearnIDEExtensionPage,
  SuperteamLearnAppPage,
  ReasoningPage,
  LevelsPage
} from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <main className="main-content">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutMePage />} />
              <Route path="/roadmap" element={<RoadmapPage />} />
              <Route path="/5ws-and-h" element={<WsAndHPage />} />
              <Route path="/what" element={<WhatPage />} />
              <Route path="/when" element={<WhenPage />} />
              <Route path="/where" element={<WherePage />} />
              <Route path="/where-and-who" element={<WhereAndWhoPage />} />
              <Route path="/why" element={<WhyPage />} />
              <Route path="/how" element={<HowPage />} />
              <Route path="/beginner" element={<BeginnerPage />} />
              <Route path="/intermediate" element={<IntermediatePage />} />
              <Route path="/advanced" element={<AdvancedPage />} />
              <Route path="/walkthrough" element={<WalkthroughPage />} />
              <Route path="/tinos-rust-lab" element={<TinosRustLabPage />} />
              <Route path="/super-team-learn-ide" element={<SuperteamLearnIDEExtensionPage />} />
              <Route path="/superteamlearn-app" element={<SuperteamLearnAppPage />} />
              <Route path="/reasoning" element={<ReasoningPage />} />
              <Route path="/levels" element={<LevelsPage />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  );
}

export default App;
