import { useState, useEffect } from 'react';
import { MoveRight, Github, Linkedin, Mail, Moon } from 'lucide-react';

export  const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      {/* Navbar */}
      <nav className={`fixed w-full px-6 py-4 flex justify-between items-center transition-all duration-300 z-50 ${
        scrollY > 50 ? 'bg-zinc-900/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="font-bold text-xl tracking-tight">Portfolio<span className="text-purple-500">.</span></div>
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
          <a href="#work" className="hover:text-purple-400 transition-colors">Work</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          <button className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors">
            <Moon size={18} />
          </button>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="relative h-screen flex items-center">
        {/* Background particles/gradient effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 z-10">
          <div className="max-w-3xl">
            <h2 className="text-purple-400 font-medium mb-2">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Kshitij Gupta</h1>
            <h2 className="text-3xl md:text-4xl text-zinc-400 font-medium mb-6">Frontend Developer & UI Designer</h2>
            <p className="text-lg text-zinc-300 mb-8">
              I build exceptional digital experiences with modern technologies.
              Focused on creating beautiful, functional and accessible web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all">
                View My Work <MoveRight size={18} />
              </button>
              <button className="flex items-center gap-2 border border-zinc-600 hover:border-zinc-400 px-6 py-3 rounded-lg transition-all">
                Download CV
              </button>
            </div>
            
            <div className="flex items-center gap-6 mt-12">
              <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <div className="text-zinc-500 text-sm mb-2">Scroll</div>
          <div className="h-12 w-0.5 bg-zinc-700"></div>
        </div>
      </div>
    </div>
  );
}