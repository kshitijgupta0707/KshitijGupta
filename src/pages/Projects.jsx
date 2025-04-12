import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Layers, Code, Shield, Figma } from 'lucide-react';

const Projects = ({ cursorHandlers }) => {
  const [filter, setFilter] = useState('all');
  
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
    <div className="pt-24 pb-16 px-6 md:px-12 relative z-10">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm">
            My Projects
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Recent <span className="text-gradient">Work & Projects</span>
          </h1>
          <p className="text-zinc-400 text-lg">
            Explore my latest projects and creative endeavors in web development, 
            mobile applications, and UI/UX design.
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
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                filter === item.value 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
              }`}
              {...cursorHandlers}
            >
              {item.label}
            </button>
          ))}
        </motion.div>
        
        {/* Projects grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                className="bg-zinc-900/50 rounded-xl border border-zinc-800 overflow-hidden group"
                {...cursorHandlers}
              >
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <div className="flex gap-3">
                      {project.tags.slice(0, 2).map((tag, index) => {
                        const TagIcon = IconMap[tag] || Layers;
                        return (
                          <div key={index} className="flex items-center gap-1 text-xs bg-black/50 px-2 py-1 rounded-full backdrop-blur-sm">
                            <TagIcon size={12} className="text-purple-400" />
                            <span className="capitalize">{tag}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                
                {/* Project content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="text-xs bg-purple-500/10 text-purple-300 px-2 py-1 rounded-md">
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
                      className="flex items-center gap-1 text-sm text-zinc-400 hover:text-purple-400 transition-colors"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-zinc-400 hover:text-purple-400 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={16} />
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
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-zinc-400 text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;