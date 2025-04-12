import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Smartphone, Mail, MapPin, ChevronDown } from 'lucide-react';

const Contact = ({ cursorHandlers }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setIsSubmitting(true);
    
    // Pretend API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
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
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm backdrop-blur-sm mb-4"
            {...cursorHandlers}
          >
            <span className="animate-pulse mr-2 w-2 h-2 bg-purple-500 rounded-full"></span>
            Get in Touch
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Let's 
            <span className="relative">
              <span className="px-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"> Work Together</span>
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
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-zinc-400 max-w-lg mx-auto backdrop-blur-sm bg-zinc-900/30 p-4 rounded-lg border border-zinc-800/50"
          >
            Have a project in mind or want to discuss potential opportunities? 
            I'd love to hear from you.
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-zinc-400 mb-8 backdrop-blur-sm bg-zinc-900/20 p-4 rounded-lg border border-zinc-800/50">
                Feel free to reach out using any of the contact methods below, 
                or fill out the form to send me a message directly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="bg-zinc-800/70 p-3 rounded-full backdrop-blur-sm 
                    transform transition-all duration-300 group-hover:bg-purple-500/20 
                    group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-purple-500/10">
                    <Smartphone size={22} className="text-zinc-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-zinc-400 text-sm group-hover:text-purple-400 transition-colors">+1 (123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="bg-zinc-800/70 p-3 rounded-full backdrop-blur-sm 
                    transform transition-all duration-300 group-hover:bg-purple-500/20 
                    group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-purple-500/10">
                    <Mail size={22} className="text-zinc-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-zinc-400 text-sm group-hover:text-purple-400 transition-colors">contact@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="bg-zinc-800/70 p-3 rounded-full backdrop-blur-sm 
                    transform transition-all duration-300 group-hover:bg-purple-500/20 
                    group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-purple-500/10">
                    <MapPin size={22} className="text-zinc-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p className="text-zinc-400 text-sm group-hover:text-purple-400 transition-colors">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Availability card */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-purple-400 text-sm font-medium">Currently Available</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Open for Freelance Projects</h3>
              <p className="text-zinc-400 text-sm">
                I'm currently taking on new freelance projects and open to discussing
                full-time opportunities.
              </p>
            </div>
            
            {/* Floating elements */}
            <div className="absolute z-0 overflow-hidden">
              {[...Array(10)].map((_, index) => (
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
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-8 rounded-lg shadow-2xl">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              
              {submitSuccess ? (
                <motion.div 
                  className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 p-4 rounded-lg mb-6 backdrop-blur-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Thank you for your message! I'll get back to you as soon as possible.</span>
                  </div>
                </motion.div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-800/70 backdrop-blur-sm border border-zinc-700 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                    {...cursorHandlers}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-800/70 backdrop-blur-sm border border-zinc-700 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                    {...cursorHandlers}
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-800/70 backdrop-blur-sm border border-zinc-700 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Project Inquiry"
                    {...cursorHandlers}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-zinc-800/70 backdrop-blur-sm border border-zinc-700 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Tell me about your project..."
                    {...cursorHandlers}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg transition-all shadow-lg shadow-purple-900/20 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  {...cursorHandlers}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
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
    </div>
  );
};

export default Contact;