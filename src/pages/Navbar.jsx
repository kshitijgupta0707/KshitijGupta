import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = ({ cursorHandlers }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
  ];
  
  return (
    <>
      <nav className={`fixed w-full px-6 md:px-12 py-4 flex justify-between items-center transition-all duration-300 z-40 ${
        scrollY > 50 ? 'bg-black/80 backdrop-blur-sm border-b border-zinc-800' : 'bg-transparent'
      }`}>
        <Link 
          to="/" 
          className="font-bold text-xl tracking-tight flex items-center"
          {...cursorHandlers}
        >
          <span className="text-purple-500 mr-2 text-2xl">&lt;</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">DevPortfolio</span>
          <span className="text-purple-500 ml-2 text-2xl">/&gt;</span>
        </Link>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`hover:text-purple-400 transition-colors relative group ${
                location.pathname === link.path ? 'text-purple-400' : 'text-zinc-300'
              }`}
              {...cursorHandlers}
            >
              {link.name}
              <motion.span 
                className="absolute -bottom-1 left-0 h-0.5 bg-purple-500"
                initial={{ width: location.pathname === link.path ? "100%" : "0%" }}
                animate={{ width: location.pathname === link.path ? "100%" : "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all"
            {...cursorHandlers}
          >
            Hire Me
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-zinc-400 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile menu */}
      <motion.div 
        className="fixed inset-0 bg-black/95 backdrop-blur-md z-30 md:hidden flex flex-col items-center justify-center gap-10"
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? "0%" : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        {navLinks.map((link) => (
          <Link 
            key={link.path}
            to={link.path} 
            className={`text-2xl font-medium ${
              location.pathname === link.path ? 'text-purple-400' : 'text-zinc-300'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <Link 
          to="/contact" 
          className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all"
          onClick={() => setIsMenuOpen(false)}
        >
          Hire Me
        </Link>
      </motion.div>
    </>
  );
};

export default Navbar;