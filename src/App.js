import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from "react-router-dom";


import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ArtistShowcase from './components/ArtistShowcase';
import MusicShowcase from './components/MusicShowcase';
import Album from './components/Album';
import Albums from './components/Albums';

// pages
import Home from './pages/Home';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="main-page-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            {/* <Route path='/services' element={<ServicesPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/careers' element={<CareersPage />} /> */}
          </Routes>
        </div>
        {/* <ScrollToTop /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
