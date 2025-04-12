import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './pages/Navbar';
import Cursor from './pages/Cursor';
import Footer from './pages/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Function to handle cursor state changes
  const handleCursorEnter = () => setCursorVariant("hover");
  const handleCursorLeave = () => setCursorVariant("default");

  // Create a context object with these functions
  const cursorHandlers = {
    onMouseEnter: handleCursorEnter,
    onMouseLeave: handleCursorLeave
  };

  return (
    <Router>
      {/* Background elements */}
      <BackgroundElements />
      
      {/* Custom cursor for desktop */}
      <Cursor mousePosition={mousePosition} cursorVariant={cursorVariant} />
      
      {/* Navigation */}
      <Navbar cursorHandlers={cursorHandlers} />
      
      {/* Main content */}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home cursorHandlers={cursorHandlers} />} />
          <Route path="/about" element={<About cursorHandlers={cursorHandlers} />} />
          <Route path="/projects" element={<Projects cursorHandlers={cursorHandlers} />} />
          <Route path="/contact" element={<Contact cursorHandlers={cursorHandlers} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      {/* Footer */}
      <Footer cursorHandlers={cursorHandlers} />
    </Router>
  );
}

// Background visual elements component
const BackgroundElements = () => (
  <>
    {/* Animated gradient background */}
    <div className="fixed inset-0 bg-black z-0">
      <div className="absolute top-0 left-0 w-full h-screen overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-700 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-pink-700 rounded-full filter blur-3xl animate-pulse-slow"></div>
      </div>
      
      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E")' }}></div>
    </div>
    
    {/* Grid lines */}
    <div className="fixed inset-0 flex justify-between z-0 opacity-20">
      <div className="w-px h-full bg-gradient-to-b from-transparent via-zinc-700 to-transparent"></div>
      <div className="w-px h-full bg-gradient-to-b from-transparent via-zinc-700 to-transparent"></div>
      <div className="w-px h-full bg-gradient-to-b from-transparent via-zinc-700 to-transparent"></div>
      <div className="w-px h-full bg-gradient-to-b from-transparent via-zinc-700 to-transparent"></div>
      <div className="w-px h-full bg-gradient-to-b from-transparent via-zinc-700 to-transparent"></div>
    </div>
  </>
);

export default App;