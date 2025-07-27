import React, { useEffect, useState } from "react";
import { FiArrowUp, FiMessageSquare, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import TrueFocus from "./TrueFocus";
import ProfileImage from "../src/assets/monkey.jpeg";
import Tech from "./TechStack/Tech";
import Xp from "./Xp/Xp";
import Work from "./Work/Work";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  AnimatePresence
} from "framer-motion";
import CircularText from "./CirculatText";

const App = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Enhanced scroll tracking with Framer Motion
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax effects
  const y = useMotionValue(0);
  const yRange = useTransform(y, [0, 1], [0, -20]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollButton(window.scrollY > 300);
      y.set(window.scrollY / (document.body.scrollHeight - window.innerHeight));
      
      // Update active section based on scroll position
      const sections = ['home', 'tech', 'experience', 'work'];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [y]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/2348085997087`, "_blank");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative overflow-x-hidden bg-gray-50 text-gray-800">
      {/* Smooth scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gray-300 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm z-40">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            className="text-xl font-medium text-gray-800"
            whileHover={{ scale: 1.05 }}
          >
            Tech Trek
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'tech', 'experience', 'work'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                  activeSection === section ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <motion.div 
                    layoutId="navUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-800"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
          
          <motion.button
            onClick={openWhatsApp}
            className="hidden md:flex items-center gap-2 p-3.5 px-3 bg-gray-800 text-white rounded-md text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMessageSquare size={16} />
            Contact
          </motion.button>
        </div>
      </nav>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-gray-800 text-white rounded-full shadow-lg"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <FiArrowUp className="text-xl" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Hero Section */}
        <motion.section
          id="home"
          className="min-h-screen bg-white flex items-center justify-center pt-20 px-4 sm:px-8 relative overflow-hidden"
          style={{ y: yRange }}
        >
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
              {/* Left Column - Text Content */}
              <motion.div
                className="lg:w-1/2 space-y-6 md:space-y-8"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="space-y-4 md:space-y-6">
                  <h1 className="text-gray-800 text-3xl sm:text-4xl md:text-5xl font-light">
                    Hello, I'm
                  </h1>

                  <div className="relative text-gray-950/90 h-20 sm:h-24 md:h-32">
                    <TrueFocus
                      sentence="Tech Trek"
                      manualMode={false}
                      blurAmount={5}
                      borderColor="rgba(75, 85, 99, 0.8)"
                      glowColor="rgba(75, 85, 99, 0.4)"
                      animationDuration={1.5}
                      pauseBetweenAnimations={0.5}
                    />
                  </div>

                  <h2 className="text-gray-600 text-xl sm:text-2xl md:text-3xl font-medium">
                    Frontend Developer & UI Specialist
                  </h2>

                  <p className="text-gray-500 text-base md:text-lg max-w-lg leading-relaxed">
                    I craft pixel-perfect, responsive interfaces with React and modern web technologies. 
                    Focused on creating seamless user experiences with clean, efficient code.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <motion.button
                    onClick={() => scrollToSection('work')}
                    className="px-6 py-2.5 sm:px-8 sm:py-3 bg-gray-800 text-white rounded-md text-base sm:text-lg font-medium hover:bg-gray-700 transition-all duration-300 flex items-center"
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
                    className="flex items-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 bg-transparent border border-gray-300 text-gray-700 rounded-md text-base sm:text-lg font-medium hover:bg-gray-50 transition-all duration-300"
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
                    <div className="relative overflow-hidden rounded-lg shadow-xl">
                      <img
                        src={ProfileImage}
                        alt="Tech Trek"
                        className="w-full max-w-md rounded-lg object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </motion.div>

                  {/* Floating tech badges */}
                  <motion.div
                    className="absolute -bottom-4 -left-4 bg-white border border-gray-200 rounded-full p-2 shadow-lg"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-lg">⚛️</span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -top-4 -right-4 bg-white border border-gray-200 rounded-full p-2 shadow-lg"
                    animate={{
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
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
              href="https://github.com/jenewaridaniel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 transition-colors duration-300"
              aria-label="github"
              whileHover={{ y: -3 }}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300">
                <FiGithub className="w-5 h-5" />
              </div>
            </motion.a>

          

            <motion.button
              onClick={openWhatsApp}
              className="text-gray-500 hover:text-gray-800 transition-colors duration-300"
              aria-label="whatsapp"
              whileHover={{ y: -3 }}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300">
                <FiMail className="w-5 h-5" />
              </div>
            </motion.button>
          </motion.div>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section
          id="tech"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
          className="py-20 bg-gray-100"
        >
          <Tech />
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", delay: 0.1 }}
          className="py-20 bg-white"
        >
          <Xp />
        </motion.section>

        {/* Work Section */}
        <motion.section
          id="work"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
          className="py-20 bg-gray-50"
        >
          <Work />
        </motion.section>

        {/* Footer Section */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 bg-gray-800 text-white relative overflow-hidden"
        >
          <div className="container mx-auto flex flex-col items-center justify-center">
            <motion.div
              className="mb-12 relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <CircularText
                text=" LET'S COLLABORATE • GET IN TOUCH • "
                onHover="pulse"
                spinDuration={25}
                className="w-64 h-64 md:w-80 md:h-80"
                textClassName="text-white font-mono text-sm font-medium tracking-widest"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  onClick={openWhatsApp}
                  className="px-5 py-3 bg-white text-gray-800 rounded-md font-medium shadow-lg hover:bg-gray-100 transition-colors"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                >
                  Let's Work
                </motion.button>
              </div>
            </motion.div>
            
            <div className="flex gap-6 mb-8">
              <motion.a 
                href="https://github.com/" 
                target="_blank"
                whileHover={{ y: -3 }}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FiGithub className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/" 
                target="_blank"
                whileHover={{ y: -3 }}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FiLinkedin className="w-6 h-6" />
              </motion.a>
              <motion.button 
                onClick={openWhatsApp}
                whileHover={{ y: -3 }}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FiMail className="w-6 h-6" />
              </motion.button>
            </div>
            
            <motion.p
              className="text-gray-400 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              © {new Date().getFullYear()} Tech Trek. All rights reserved.
            </motion.p>
          </div>
        </motion.footer>
      </motion.div>
    </div>
  );
};

export default App;