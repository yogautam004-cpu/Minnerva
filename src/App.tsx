import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Small timeout to allow page layout and framer-motion to settle
    setTimeout(() => {
      if (!hash) {
        window.scrollTo(0, 0);
      } else {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // Nav is ~104px tall. Section has 96px top padding (py-24). 
          // We scroll to SectionTop - 24px so the section's start is slightly ABOVE the nav bottom,
          // allowing the heading inside the section to align perfectly below the nav.
          const navOffset = 24; 
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }, 150);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen selection:bg-gold/30">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
