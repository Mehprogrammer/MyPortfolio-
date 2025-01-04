import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className={`relative w-full h-[90vh] bg-primary`}>
      {/* Main Hero Content */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Left Decorative Column */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#04d9ff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        {/* Profile + Text */}
        <div className="flex items-center gap-6">
          {/* Text */}
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#04d9ff]'>Junaid</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                           <p>
                I Have a passion for CyberSecurity
                <br />
                and Networks
              </p> <br className='sm:block hidden' />
            </p>
          </div>
          
          {/* Clickable Profile Picture (with modal) */}
          <motion.div 
            className="relative w-40 h-40 ml-4 cursor-pointer z-10"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.6 
            }}
            onClick={openModal}
          >
            {/* Outer glow (ignore pointer events) */}
            <div className="absolute -inset-2 rounded-full bg-[#04d9ff] blur-xl opacity-30 pointer-events-none"></div>
            
            {/* Inner glow (ignore pointer events) */}
            <div className="absolute -inset-1 rounded-full bg-[#04d9ff] blur-md opacity-40 pointer-events-none"></div>
            
            {/* Border container (ignore pointer events) */}
            <div className="absolute inset-0 rounded-full border-4 border-[#04d9ff] opacity-80 pointer-events-none"></div>
            
            {/* Rotating border effect (ignore pointer events) */}
            <motion.div 
              className="absolute -inset-2 rounded-full border-2 border-[#04d9ff] opacity-50 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Actual Image */}
            <img 
              src="/IMG_6732 (1).jpg"
              alt="Junaid"
              className="relative w-full h-full rounded-full object-cover shadow-2xl"
              style={{
                boxShadow: '0 0 25px rgba(4, 217, 255, 0.3)'
              }}
            /> 
          </motion.div>
        </div>
      </div>

      {/* 3D Canvas (If desired) */}
      <ComputersCanvas />

      {/* Scroll Indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

      {/*
        NEW - Social Media Bubble Section 
        * Positioned absolutely on the right
        * Bigger icons (w-16 h-16)
        * Stacked vertically
      */}
      <div 
        className="absolute top-1/4 right-10 flex flex-col gap-6 items-center
                   w-20 h-80 rounded-full bg-black bg-opacity-30 
                   hover:bg-opacity-40 transition duration-300 z-50
                   backdrop-blur-sm shadow-xl"
      >
        {/* Email Link */}
        <a 
          href="mailto:Jay.memon985@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
          title="Email me"
        >
          <img
            src="/gmail.png"
            alt="Gmail"
            className="w-16 h-16 hover:scale-110 transition duration-200"
          />
        </a>

        {/* GitHub Link */}
        <a 
          href="https://github.com/Mehprogrammer" 
          target="_blank" 
          rel="noopener noreferrer"
          title="My GitHub"
        >
          <img
            src="/github.png"
            alt="GitHub"
            className="w-16 h-16 hover:scale-110 transition duration-200"
          />
        </a>

        {/* LinkedIn Link */}
        <a 
          href="https://www.linkedin.com/in/junaid-memon1/" 
          target="_blank" 
          rel="noopener noreferrer"
          title="My LinkedIn"
        >
          <img
            src="/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.webp"
            alt="LinkedIn"
            className="w-16 h-16 hover:scale-110 transition duration-200"
          />
        </a>
      </div>

      {/* Modal for Expanded Profile Image */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            {/* Prevent closing if click is within the image */}
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Optional close button */}
              <button 
                onClick={closeModal}
                className="absolute -top-8 -right-8 text-white bg-[#04d9ff] p-2 rounded-full hover:bg-[#02a5c6] transition-colors"
              >
                X
              </button>

              {/* Expanded Image */}
              <img
                src="/IMG_6732 (1).jpg"
                alt="Junaid expanded"
                className="w-[90vw] max-w-[600px] rounded-xl shadow-2xl"
                style={{
                  boxShadow: '0 0 30px rgba(4, 217, 255, 0.5)',
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
