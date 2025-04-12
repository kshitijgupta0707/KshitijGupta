import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Smartphone, Mail, MapPin } from 'lucide-react';

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
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Work Together</span>
          </h1>
          <p className="text-zinc-400 text-lg">
            Have a project in mind or want to discuss potential opportunities? 
            I'd love to hear from you.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-zinc-400 mb-8">
                Feel free to reach out using any of the contact methods below, 
                or fill out the form to send me a message directly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Smartphone size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-zinc-400 text-sm">+1 (123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Mail size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-zinc-400 text-sm">contact@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <MapPin size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p className="text-zinc-400 text-sm">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Availability card */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/10 p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Currently Available</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Open for Freelance Projects</h3>
              <p className="text-zinc-400 text-sm">
                I'm currently taking on new freelance projects and open to discussing
                full-time opportunities.
              </p>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              
              {submitSuccess ? (
                <motion.div 
                  className="bg-green-500/10 border border-green-500/30 text-green-400 p-4 rounded-lg mb-6"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you for your message! I'll get back to you as soon as possible.
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
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
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
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
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
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
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
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Tell me about your project..."
                    {...cursorHandlers}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg transition-all ${
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
    </div>
  );
};

export default Contact;