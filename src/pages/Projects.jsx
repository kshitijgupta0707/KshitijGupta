import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Layers, Code, Shield, Figma, ChevronDown, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = ({ cursorHandlers }) => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  
  // Project data
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A complete e-commerce solution with product management, cart functionality, and payment integration.",
      image: "/api/placeholder/600/400",
      tags: ["web", "frontend", "backend"],
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 2,
      title: "AI Dashboard",
      description: "Data visualization dashboard for AI metrics with real-time updates and interactive charts.",
      image: "/api/placeholder/600/400",
      tags: ["web", "frontend", "data"],
      tech: ["Vue.js", "D3.js", "GraphQL", "TypeScript"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Cross-platform mobile application for online banking with secure authentication and transaction history.",
      image: "/api/placeholder/600/400",
      tags: ["mobile", "frontend", "backend"],
      tech: ["React Native", "Firebase", "Redux"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Personal portfolio website with dark theme and modern animation effects.",
      image: "/api/placeholder/600/400",
      tags: ["web", "frontend", "design"],
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 5,
      title: "Task Management System",
      description: "Full-stack task management application with user authentication and real-time updates.",
      image: "/api/placeholder/600/400",
      tags: ["web", "frontend", "backend"],
      tech: ["Next.js", "PostgreSQL", "Prisma", "WebSockets"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 6,
      title: "Health Tracker App",
      description: "Mobile app for tracking fitness goals, nutrition, and health metrics with data visualization.",
      image: "/api/placeholder/600/400",
      tags: ["mobile", "frontend", "data"],
      tech: ["Flutter", "Firebase", "Charts.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    }
  ];
  
  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Apps' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'design', label: 'UI/UX Design' },
    { value: 'data', label: 'Data Viz' }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    exit: { 
      y: 20, 
      opacity: 0,
      transition: { duration: 0.2 } 
    }
  };
  
  const IconMap = {
    "web": Layers,
    "mobile": Shield,
    "frontend": Code,
    "backend": Shield,
    "design": Figma,
    "data": Layers
  };
  
  return (
    <div className="relative min-h-screen py-20 z-10 bg-zinc-950 overflow-hidden">
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

      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-12">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm backdrop-blur-sm mb-4"
            {...cursorHandlers}
          >
            <span className="animate-pulse mr-2 w-2 h-2 bg-purple-500 rounded-full"></span>
            My Portfolio
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Creative <span className="relative">
              <span className="px-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Projects</span>
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
          </h1>
          
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto backdrop-blur-sm bg-zinc-900/30 p-4 rounded-lg border border-zinc-800/50">
            Explore my latest work showcasing innovative solutions across web, mobile, 
            and design projects that blend creativity with technical excellence.
          </p>
        </motion.div>
        
        {/* Filter tabs */}
        <motion.div 
          className="flex flex-wrap gap-3 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((item) => (
            <button
              key={item.value}
              onClick={() => setFilter(item.value)}
              className={`px-4 py-2 rounded-full text-sm transition-all backdrop-blur-sm ${
                filter === item.value 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-900/20' 
                  : 'bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:bg-zinc-800'
              }`}
              {...cursorHandlers}
            >
              {item.label}
            </button>
          ))}
        </motion.div>
        
        {/* Projects grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                exit="exit"
                className="bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-zinc-800 overflow-hidden group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/10"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                {...cursorHandlers}
              >
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <div className="flex gap-3">
                      {project.tags.slice(0, 3).map((tag, index) => {
                        const TagIcon = IconMap[tag] || Layers;
                        return (
                          <div key={index} className="flex items-center gap-1 text-xs bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                            <TagIcon size={12} className="text-purple-400" />
                            <span className="capitalize">{tag}</span>
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* View details button on hover */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ 
                        opacity: hoveredProject === project.id ? 1 : 0,
                        scale: hoveredProject === project.id ? 1 : 0.9,
                      }}
                      className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1"
                    >
                      View Details <MoveRight size={12} />
                    </motion.div>
                  </div>
                </div>
                
                {/* Project content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-zinc-400 text-sm mb-5 line-clamp-2">{project.description}</p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-purple-500/10 text-purple-300 px-2 py-1 rounded-md border border-purple-500/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex justify-between items-center">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-zinc-800/70 p-2 rounded-full backdrop-blur-sm
                        transform transition-all duration-300 hover:bg-purple-500/20 
                        hover:shadow-lg hover:shadow-purple-500/10"
                    >
                      <Github size={16} className="text-zinc-400 hover:text-purple-400 transition-colors" />
                    </a>
                    
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-zinc-400 hover:text-purple-400 transition-all group"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={16} className="transform transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-16 bg-zinc-900/30 backdrop-blur-sm rounded-lg border border-zinc-800/50 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: [0.9, 1.1, 1] }}
              transition={{ duration: 0.5 }}
              className="bg-purple-500/20 p-4 rounded-full inline-flex mb-6"
            >
              <Layers size={32} className="text-purple-400" />
            </motion.div>
            <h3 className="text-xl font-bold mb-2">No projects found</h3>
            <p className="text-zinc-400 text-md">No projects match this category. Try a different filter.</p>
          </motion.div>
        )}
        
        {/* Contact CTA */}
        <motion.div 
          className="mt-20 mb-8 text-center max-w-2xl mx-auto py-12 px-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-xl border border-purple-500/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Have a project in mind?</h3>
          <p className="text-zinc-400 mb-8">
            Let's collaborate to bring your ideas to life with innovative solutions and stunning design.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg transition-all shadow-lg shadow-purple-900/20"
            {...cursorHandlers}
          >
            Get in touch <MoveRight size={18} />
          </Link>
        </motion.div>
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
      
      {/* Tech stack tags */}
      <div className="absolute bottom-8 left-12 right-12 overflow-hidden h-10 opacity-40 z-10 hidden md:block">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "GraphQL", "Figma", "UI/UX", "React Native", "Vue.js"].map((tech, index) => (
            <div key={index} className="text-sm flex items-center gap-2 text-zinc-400">
              <span className="w-1 h-1 bg-purple-500 rounded-full"></span> {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;