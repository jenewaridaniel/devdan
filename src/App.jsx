import React, { useEffect, useState } from "react";
import { FiArrowUp, FiMessageSquare } from "react-icons/fi";
import TrueFocus from "./TrueFocus";
import ProfileImage from "../src/assets/monkey.jpeg";
import github from "../src/assets/github.png";
import whatsapp from "../src/assets/whatsapp.png";
import Tech from "./TechStack/Tech";
import Xp from "./Xp/Xp";
import Work from "./Work/Work";
import { motion, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion";
import CircularText from "./CirculatText";

const App = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Enhanced scroll tracking with Framer Motion
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax effects
  const y = useMotionValue(0);
  const yRange = useTransform(y, [0, 1], [0, -50]);
  const opacityRange = useTransform(y, [0, 0.5, 1], [1, 0.5, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollButton(window.scrollY > 300);
      y.set(window.scrollY / (document.body.scrollHeight - window.innerHeight));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [y]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/2348085997087`, "_blank");
  };

  return (
    <div className="relative overflow-x-hidden">
      {/* Smooth scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-red-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Scroll to top button */}
      {showScrollButton && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-br from-red-500 to-red-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 0 20px rgba(239, 68, 68, 0.5)"
          }}
          whileTap={{ 
            scale: 0.95,
            boxShadow: "0 0 10px rgba(239, 68, 68, 0.3)"
          }}
        >
          <FiArrowUp className="text-white text-xl" />
        </motion.button>
      )}

      {/* Main content with smooth transitions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Hero Section */}
        <motion.div 
          className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4 sm:p-8 relative overflow-hidden"
          style={{ y: yRange }}
        >
          {/* Circular Text Elements */}
          <motion.div 
            className="absolute right-10 top-1/4 opacity-20 hover:opacity-100 transition-opacity duration-500 z-0"
            style={{ y: useTransform(y, [0, 1], [0, -100]) }}
          >
            <CircularText
              text="• TECH TREK • FRONTEND DEV • "
              onHover="speedUp"
              spinDuration={30}
              className="w-40 h-40 md:w-60 md:h-60"
              textClassName="text-red-400 font-mono text-xs tracking-wider"
            />
          </motion.div>

          <motion.div 
            className="absolute left-10 bottom-1/4 opacity-20 hover:opacity-100 transition-opacity duration-500 z-0"
            style={{ y: useTransform(y, [0, 1], [0, 80]) }}
          >
            <CircularText
              text="• REACT • TAILWINDCSS • FIREBASE • MERN "
              onHover="reverse"
              spinDuration={40}
              className="w-32 h-32 md:w-48 md:h-48"
              textClassName="text-gray-400 font-mono text-[10px] tracking-wider"
              reverse
            />
          </motion.div>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-red-500 opacity-5"
                style={{
                  width: Math.random() * 300 + 100,
                  height: Math.random() * 300 + 100,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  x: useTransform(y, [0, 1], [0, Math.sin(i) * 50]),
                  y: useTransform(y, [0, 1], [0, Math.cos(i) * 50]),
                }}
              />
            ))}
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
              {/* Left Column - Text Content */}
              <motion.div 
                className="lg:w-1/2 space-y-6 md:space-y-8"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="space-y-3 md:space-y-6">
                  <h1 className="text-gray-50 text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">
                    Hello, I'm
                  </h1>

                  <div className="relative h-20 sm:h-24 md:h-32">
                    <TrueFocus
                      sentence="Tech Trek"
                      manualMode={false}
                      blurAmount={5}
                      borderColor="rgba(255, 65, 65, 0.8)"
                      glowColor="rgba(255, 65, 65, 0.4)"
                      animationDuration={1.5}
                      pauseBetweenAnimations={0.5}
                    />
                  </div>

                  <p className="text-gray-300 text-lg sm:text-xl md:text-2xl font-medium">
                    Frontend Developer
                  </p>

                  <p className="text-gray-400 text-base md:text-lg max-w-lg">
                    Tch... Just building clean, efficient React interfaces with
                    modern web tech. Nothing too troublesome.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <motion.button
                    className="px-6 py-2.5 sm:px-8 sm:py-3 bg-transparent border border-red-500 text-red-400 rounded-full text-base sm:text-lg font-medium hover:bg-red-500 hover:bg-opacity-10 transition-all duration-300"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View My Work
                    <span
                      className={`ml-2 inline-block transition-transform duration-300 ${
                        isHovering ? "translate-x-1" : ""
                      }`}
                    >
                      →
                    </span>
                  </motion.button>

                  <motion.button
                    onClick={openWhatsApp}
                    className="flex items-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 bg-transparent border border-gray-600 text-gray-300 rounded-full text-base sm:text-lg font-medium hover:bg-gray-800 hover:bg-opacity-50 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiMessageSquare size={18} />
                    Contact Me
                  </motion.button>
                </div>
              </motion.div>

              {/* Right Column - Profile Image */}
              <motion.div 
                className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="relative group">
                  <motion.div 
                    className="relative z-10"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img
                      src={ProfileImage}
                      alt="Tech Trek"
                      className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-gray-800 group-hover:border-red-500 transition-all duration-500 shadow-xl group-hover:shadow-red-500/20"
                    />
                    <div className="absolute inset-0 rounded-full border-2 border-red-500 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
                    <div className="absolute inset-0 rounded-full bg-red-500 mix-blend-screen opacity-0 group-hover:opacity-10 transition-all duration-500 pointer-events-none"></div>
                  </motion.div>

                  {/* Floating tech badges */}
                  <motion.div 
                    className="absolute -bottom-4 -left-4 bg-gray-800 border border-gray-700 rounded-full p-2 shadow-lg"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center">
                      <span className="text-lg">⚛️</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="absolute -top-4 -right-4 bg-gray-800 border border-gray-700 rounded-full p-2 shadow-lg"
                    animate={{
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center">
                      <span className="text-lg">💻</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Social links */}
          <motion.div 
            className="absolute bottom-8 left-0 right-0 flex justify-center gap-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors duration-300"
              aria-label="github"
              whileHover={{ y: -3 }}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300">
                <img src={github} alt="GitHub" className="w-5 h-5" />
              </div>
            </motion.a>

            <motion.button
              onClick={openWhatsApp}
              className="text-gray-400 hover:text-red-400 transition-colors duration-300"
              aria-label="whatsapp"
              whileHover={{ y: -3 }}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300">
                <img src={whatsapp} alt="WhatsApp" className="w-5 h-5" />
              </div>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <Tech />
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", delay: 0.1 }}
        >
          <Xp />
        </motion.div>

        {/* Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
        >
          <Work />
        </motion.div>

        {/* Footer Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 bg-gradient-to-t from-gray-900 to-black relative overflow-hidden"
        >
          <div className="container mx-auto flex flex-col items-center justify-center">
            <motion.div 
              className="mb-12 relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <CircularText
                text="• LET'S MAKE IT HAPPEN • CONTACT ME • "
                onHover="pulse"
                spinDuration={25}
                className="w-64 h-64 md:w-80 md:h-80"
                textClassName="text-red-500 font-mono text-sm font-bold tracking-widest"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  onClick={openWhatsApp}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium shadow-lg"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(239, 68, 68, 0.5)"
                  }}
                  whileTap={{ 
                    scale: 0.98,
                    boxShadow: "0 0 10px rgba(239, 68, 68, 0.3)"
                  }}
                >
                  Let's Work
                </motion.button>
              </div>
            </motion.div>
            <motion.p 
              className="text-gray-400 text-sm mt-8"
              whileHover={{ scale: 1.05 }}
            >
              © {new Date().getFullYear()} Tech Trek. All rights reserved.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default App;