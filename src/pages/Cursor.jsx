import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = ({ mousePosition, cursorVariant }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Only show custom cursor on desktop
    const handleResize = () => {
      setIsVisible(window.innerWidth >= 768);
    };
    
    // Check on mount and on resize
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  if (!isVisible) return null;
  
  const variants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      width: 24,
      height: 24,
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      width: 40,
      height: 40,
    }
  };
  
  return (
    <motion.div
      className="fixed rounded-full bg-purple-500/30 pointer-events-none z-50 backdrop-blur-sm hidden md:block"
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }}
    />
  );
};

export default Cursor;