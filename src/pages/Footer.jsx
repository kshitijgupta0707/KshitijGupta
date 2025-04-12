import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = ({ cursorHandlers }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-zinc-900/50 border-t border-zinc-800 py-10 px-6 md:px-12 z-10 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-bold text-xl tracking-tight flex items-center">
              <span className="text-purple-500 mr-2 text-2xl">&lt;</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">DevPortfolio</span>
              <span className="text-purple-500 ml-2 text-2xl">/&gt;</span>
            </div>
            <p className="text-zinc-400 text-sm max-w-xs">
              Creating elegant digital experiences with a focus on performance, accessibility, and aesthetics.
            </p>
            <div className="flex items-center gap-5">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-purple-400 transition-all"
                {...cursorHandlers}
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-purple-400 transition-all"
                {...cursorHandlers}
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="text-zinc-400 hover:text-purple-400 transition-all"
                {...cursorHandlers}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link 
                to="/" 
                className="text-zinc-400 hover:text-purple-400 transition-colors text-sm"
                {...cursorHandlers}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-zinc-400 hover:text-purple-400 transition-colors text-sm"
                {...cursorHandlers}
              >
                About
              </Link>
              <Link 
                to="/projects" 
                className="text-zinc-400 hover:text-purple-400 transition-colors text-sm"
                {...cursorHandlers}
              >
                Projects
              </Link>
              <Link 
                to="/contact" 
                className="text-zinc-400 hover:text-purple-400 transition-colors text-sm"
                {...cursorHandlers}
              >
                Contact
              </Link>
            </div>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get in Touch</h3>
            <p className="text-zinc-400 text-sm">
              Interested in working together? Feel free to reach out.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all"
              {...cursorHandlers}
            >
              Contact Me
            </Link>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 pt-6 border-t border-zinc-800">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} DevPortfolio. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-zinc-800 hover:bg-zinc-700 p-2 rounded-full text-zinc-400 hover:text-white transition-colors"
            {...cursorHandlers}
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;