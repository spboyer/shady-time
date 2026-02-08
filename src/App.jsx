import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Episodes from './pages/Episodes';
import EpisodeDetail from './pages/EpisodeDetail';
import Guests from './pages/Guests';
import GuestDetail from './pages/GuestDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:slug" element={<EpisodeDetail />} />
        <Route path="/guests" element={<Guests />} />
        <Route path="/guests/:slug" element={<GuestDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
