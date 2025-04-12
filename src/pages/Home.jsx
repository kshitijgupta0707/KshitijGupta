import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MoveRight, Github, Linkedin, Mail, ChevronDown, ExternalLink } from 'lucide-react';

const Home = ({ cursorHandlers }) => {
  const [activeProject, setActiveProject] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject(prev => (prev + 1) % 3);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const projects = [
    { title: "E-commerce Platform", tech: "React, Next.js, Tailwind" },
    { title: "AI Dashboard", tech: "Vue, TypeScript, D3.js" },
    { title: "Mobile Banking App", tech: "React Native, Redux, Firebase" }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };
  
  return (
    <div className="relative min-h-screen flex flex-col justify-center py-20 z-10 bg-zinc-950 overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute inset-0 z-0">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950"></div>
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-purple-900/20 blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div 
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-pink-900/20 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div 
          className="absolute top-1/3 -right-32 w-64 h-64 rounded-full bg-indigo-900/20 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgtMXYxaDF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0yIDBoMXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptMi0yaDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgtMXYxaDF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0yIDBoMXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm backdrop-blur-sm"
              {...cursorHandlers}
            >
              <span className="animate-pulse mr-2 w-2 h-2 bg-purple-500 rounded-full"></span>
              Available for work
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                Creative 
                <span className="relative">
                  <span className="px-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Developer</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 300 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 7C81.3333 3 157.667 3 295 7" stroke="url(#paint0_linear)" strokeWidth="5" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="paint0_linear" x1="3" y1="7" x2="295" y2="7" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#A855F7"/>
                        <stop offset="1" stopColor="#EC4899"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <br />& Designer
              </h1>
              <p className="text-xl text-zinc-400 max-w-lg backdrop-blur-sm bg-zinc-900/30 p-4 rounded-lg border border-zinc-800/50">
                I craft exceptional digital experiences that live at the intersection of art, 
                innovation, and cutting-edge technology.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link 
                to="/projects"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg transition-all shadow-lg shadow-purple-900/20"
                {...cursorHandlers}
              >
                Explore my work <MoveRight size={18} />
              </Link>
              <Link 
                to="/contact"
                className="flex items-center gap-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 hover:bg-zinc-800 px-8 py-4 rounded-lg transition-all"
                {...cursorHandlers}
              >
                Get in touch
              </Link>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p className="text-zinc-500 mb-3">Find me on</p>
              <div className="flex items-center gap-8">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                  {...cursorHandlers}
                >
                  <div className="bg-zinc-800/70 p-3 rounded-full backdrop-blur-sm mb-2 
                    transform transition-all duration-300 group-hover:bg-purple-500/20 
                    group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-purple-500/10">
                    <Github size={22} className="text-zinc-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <span className="text-xs text-zinc-500 group-hover:text-purple-400 transition-colors">GitHub</span>
                </a>
                
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                  {...cursorHandlers}
                >
                  <div className="bg-zinc-800/70 p-3 rounded-full backdrop-blur-sm mb-2 
                    transform transition-all duration-300 group-hover:bg-purple-500/20 
                    group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-purple-500/10">
                    <Linkedin size={22} className="text-zinc-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <span className="text-xs text-zinc-500 group-hover:text-purple-400 transition-colors">LinkedIn</span>
                </a>
                
                <a 
                  href="mailto:contact@example.com"
                  className="flex flex-col items-center group"
                  {...cursorHandlers}
                >
                  <div className="bg-zinc-800/70 p-3 rounded-full backdrop-blur-sm mb-2 
                    transform transition-all duration-300 group-hover:bg-purple-500/20 
                    group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-purple-500/10">
                    <Mail size={22} className="text-zinc-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <span className="text-xs text-zinc-500 group-hover:text-purple-400 transition-colors">Email</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Animated preview of recent projects */}
            <div className="relative w-full max-w-md aspect-[4/5] bg-zinc-900/80 backdrop-blur-md rounded-lg border border-zinc-800 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-8 bg-zinc-800 flex items-center px-3 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="w-48 mx-auto h-5 rounded-full bg-zinc-700"></div>
              </div>
              
              <div className="pt-12 p-4 relative h-full">
                {/* Project previews */}
                {projects.map((project, index) => (
                  <motion.div 
                    key={index} 
                    className="absolute inset-x-4 top-12 bottom-16 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-md border border-zinc-700 flex flex-col justify-end p-6"
                    initial={{ opacity: 0, y: -8, rotate: -3, scale: 0.95 }}
                    animate={{ 
                      opacity: activeProject === index ? 1 : 0,
                      y: activeProject === index ? 0 : -8,
                      rotate: activeProject === index ? 0 : -3,
                      scale: activeProject === index ? 1 : 0.95,
                      zIndex: activeProject === index ? 10 : 0
                    }}
                    transition={{ duration: 0.7 }}
                  >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center backdrop-blur-sm">
                      <ExternalLink size={32} className="text-purple-400" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-sm text-zinc-400">{project.tech}</p>
                    </div>
                  </motion.div>
                ))}
                
                {/* Project selection dots */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {projects.map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => setActiveProject(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        activeProject === index ? 'bg-purple-500 w-6' : 'bg-zinc-600'
                      }`}
                      {...cursorHandlers}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        whileHover={{ y: 5 }}
        {...cursorHandlers}
      >
        <div className="text-zinc-500 text-sm mb-2">Scroll</div>
        <ChevronDown size={20} className="text-purple-500 animate-bounce" />
      </motion.div>
      
      {/* Tech stack tags */}
      <div className="absolute bottom-20 left-12 right-12 overflow-hidden h-10 opacity-40 z-10 hidden md:block">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "GraphQL", "Figma", "UI/UX", "React Native", "Vue.js"].map((tech, index) => (
            <div key={index} className="text-sm flex items-center gap-2 text-zinc-400">
              <span className="w-1 h-1 bg-purple-500 rounded-full"></span> {tech}
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 rounded-full bg-purple-500/30"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%", 
              opacity: Math.random() * 0.5 + 0.3
            }}
            animate={{ 
              y: [null, "-20%", null],
              opacity: [null, Math.random() * 0.5 + 0.5, null] 
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;