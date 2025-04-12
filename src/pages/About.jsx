import { motion } from 'framer-motion';
import { CheckCircle, Download, ExternalLink } from 'lucide-react';

const About = ({ cursorHandlers }) => {
  const skills = [
    { name: "Web Development", level: 90 },
    { name: "UI/UX Design", level: 85 },
    { name: "React & React Native", level: 95 },
    { name: "Node.js & Backend", level: 80 },
    { name: "Database Management", level: 75 },
    { name: "DevOps & Deployment", level: 70 },
  ];
  
  // Timeline data
  const experiences = [
    {
      period: "2023 - Present",
      role: "Senior Frontend Developer",
      company: "Tech Innovators Inc.",
      description: "Leading the frontend team in developing cutting-edge web applications using React, NextJS, and modern frontend technologies."
    },
    {
      period: "2021 - 2023",
      role: "Frontend Developer",
      company: "Digital Solutions LLC",
      description: "Developed responsive web applications and implemented UI/UX designs using React, Redux, and CSS frameworks."
    },
    {
      period: "2019 - 2021",
      role: "UI/UX Designer",
      company: "Creative Studios",
      description: "Designed intuitive user interfaces and experiences for web and mobile applications using Figma and Adobe Creative Suite."
    }
  ];
  
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
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };
  
  return (
    <div className="pt-24 pb-16 px-6 md:px-12 relative z-10 bg-zinc-950 min-h-screen overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute inset-0 z-0">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950"></div>
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-purple-900/20 blur-3xl"
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
          className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-pink-900/20 blur-3xl"
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
          className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-indigo-900/20 blur-3xl"
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
      
      {/* Floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(15)].map((_, index) => (
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

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm text-purple-400 text-sm">
            <span className="animate-pulse mr-2 inline-block w-2 h-2 bg-purple-500 rounded-full"></span>
            About Me
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Passionate about creating{" "}
            <span className="relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">impactful digital experiences</span>
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
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto backdrop-blur-sm bg-zinc-900/30 p-4 rounded-lg border border-zinc-800/50">
            I'm a frontend developer and designer with 5+ years of experience building elegant, 
            responsive, and high-performance web applications.
          </p>
        </motion.div>
        
        {/* About grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          {/* Profile image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/10 backdrop-blur-sm overflow-hidden relative shadow-xl shadow-purple-900/10">
              {/* You can replace this with an actual image */}
              <div className="absolute inset-0 flex items-center justify-center text-zinc-600 text-lg">
                Your Profile Image
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center backdrop-blur-sm">
                <ExternalLink size={20} className="text-purple-400" />
              </div>
              
              <div className="absolute bottom-8 right-8 px-3 py-1 rounded-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 text-xs text-zinc-400">
                Available for Work
              </div>
              
              <div className="absolute -bottom-3 -left-3 w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl z-[-1]"></div>
          </motion.div>
          
          {/* About content */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold">
              I build things for the web and beyond.
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-zinc-400 backdrop-blur-sm bg-zinc-900/30 p-4 rounded-lg border border-zinc-800/50">
              Hello! I'm [Your Name], a passionate developer and designer focused on creating 
              elegant solutions to complex problems. With expertise in modern frontend technologies 
              and a keen eye for design, I bring ideas to life with code.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-zinc-400 backdrop-blur-sm bg-zinc-900/30 p-4 rounded-lg border border-zinc-800/50">
              My journey in tech began when I built my first website at 15, and since then I've 
              been fascinated by the intersection of technology, design, and human experience.
            </motion.p>
            
            <motion.div 
              variants={itemVariants} 
              className="grid grid-cols-2 gap-3 backdrop-blur-sm bg-zinc-900/30 p-4 rounded-lg border border-zinc-800/50"
            >
              {["JavaScript", "React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS"].map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-purple-500" />
                  <span className="text-zinc-300 text-sm">{skill}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <a 
                href="/resume.pdf" 
                className="inline-flex items-center gap-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 hover:bg-zinc-800 px-6 py-3 rounded-lg transition-all text-sm font-medium mt-4"
                {...cursorHandlers}
              >
                <Download size={16} />
                Download My Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Skills section */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">My Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-6 rounded-lg hover:border-purple-500/30 transition-all shadow-lg shadow-purple-900/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                {...cursorHandlers}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium">{skill.name}</h3>
                  <span className="text-sm text-purple-400">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + (0.1 * index) }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Experience Timeline */}
        <motion.div 
          className="mb-16 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Work Experience</span>
          </h2>
          
          {/* Decorative gradient line */}
          <div className="absolute left-1/2 top-24 bottom-0 w-px bg-gradient-to-b from-purple-500 to-pink-500/20 hidden md:block"></div>
          
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className={`mb-12 relative md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:mr-auto md:pl-0 md:pr-8' : 'md:ml-auto md:pl-8 md:pr-0'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                {/* Timeline dot */}
                <div className="absolute md:left-auto top-6 md:top-0 -left-3 md:-translate-y-0 md:translate-x-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/20 z-10 flex items-center justify-center border-2 border-zinc-900 
                  md:right-0
                  md:left-0
                  md:mx-auto
                ">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                
                <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-6 rounded-lg shadow-lg hover:border-purple-500/20 transition-all">
                  <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs mb-3">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-purple-400 mb-3">{exp.company}</p>
                  <p className="text-zinc-400 text-sm">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;