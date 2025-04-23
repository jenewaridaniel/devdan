import React, { useEffect, useState } from "react";
import { FiArrowUp, FiMessageSquare } from "react-icons/fi";
import TrueFocus from "./TrueFocus";
import ProfileImage from "../src/assets/monkey.jpeg";
import github from "../src/assets/github.png";
import whatsapp from "../src/assets/whatsapp.png";
import Tech from "./TechStack/Tech";
import Xp from "./Xp/Xp";
import Work from "./Work/Work";
import { motion } from "framer-motion";
import CircularText from "./CirculatText";

const App = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/234818219533`, "_blank");
  };

  return (
    <div className="relative overflow-x-hidden">
      {/* Scroll to top button */}
      {showScrollButton && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-br from-red-500 to-red-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <FiArrowUp className="text-white text-xl" />
        </motion.button>
      )}

      {/* Main content */}
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
        {/* Circular Text Element - Floating in background */}
        <div className="absolute right-10 top-1/4 opacity-20 hover:opacity-100 transition-opacity duration-500 z-0">
          <CircularText
            text="• TECH TREK • FRONTEND DEV • "
            onHover="speedUp"
            spinDuration={30}
            className="w-40 h-40 md:w-60 md:h-60"
            textClassName="text-red-400 font-mono text-xs tracking-wider"
          />
        </div>

        {/* Another Circular Text Element - Bottom left */}
        <div className="absolute left-10 bottom-1/4 opacity-20 hover:opacity-100 transition-opacity duration-500 z-0">
          <CircularText
            text="• REACT • TAILWINDCSS • FIREBASE • "
            onHover="reverse"
            spinDuration={40}
            className="w-32 h-32 md:w-48 md:h-48"
            textClassName="text-gray-400 font-mono text-[10px] tracking-wider"
            reverse
          />
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-red-500 opacity-5"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translate(${
                  Math.sin(scrollY * 0.002 + i) * 20
                }px, ${Math.cos(scrollY * 0.002 + i) * 20}px)`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            {/* Left Column - Text Content */}
            <div className="lg:w-1/2 space-y-6 md:space-y-8">
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
                <button
                  className="px-6 py-2.5 sm:px-8 sm:py-3 bg-transparent border border-red-500 text-red-400 rounded-full text-base sm:text-lg font-medium hover:bg-red-500 hover:bg-opacity-10 transition-all duration-300 hover:scale-105 active:scale-95"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  View My Work
                  <span
                    className={`ml-2 inline-block transition-transform duration-300 ${
                      isHovering ? "translate-x-1" : ""
                    }`}
                  >
                    →
                  </span>
                </button>

                <button
                  onClick={openWhatsApp}
                  className="flex items-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 bg-transparent border border-gray-600 text-gray-300 rounded-full text-base sm:text-lg font-medium hover:bg-gray-800 hover:bg-opacity-50 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <FiMessageSquare size={18} />
                  Contact Me
                </button>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative group">
                <div className="relative z-10">
                  <img
                    src={ProfileImage}
                    alt="Tech Trek"
                    className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-gray-800 group-hover:border-red-500 transition-all duration-500 shadow-xl group-hover:shadow-red-500/20"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-red-500 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
                  <div className="absolute inset-0 rounded-full bg-red-500 mix-blend-screen opacity-0 group-hover:opacity-10 transition-all duration-500 pointer-events-none"></div>
                </div>

                {/* Floating tech badges */}
                <div className="absolute -bottom-4 -left-4 bg-gray-800 border border-gray-700 rounded-full p-2 shadow-lg animate-float">
                  <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center">
                    <span className="text-lg">⚛️</span>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-gray-800 border border-gray-700 rounded-full p-2 shadow-lg animate-float animation-delay-2000">
                  <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center">
                    <span className="text-lg">💻</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-400 transition-colors duration-300"
            aria-label="github"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300">
              <img src={github} alt="GitHub" className="w-5 h-5" />
            </div>
          </a>

          <button
            onClick={openWhatsApp}
            className="text-gray-400 hover:text-red-400 transition-colors duration-300"
            aria-label="whatsapp"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300">
              <img src={whatsapp} alt="WhatsApp" className="w-5 h-5" />
            </div>
          </button>
        </div>
      </div>

      <div>
        <Tech />
      </div>

      <div>
        <Xp />
      </div>

      <div>
        <Work />
      </div>

      {/* Circular Text Footer Element */}
      <div className="py-16 bg-gradient-to-t from-gray-900 to-black relative overflow-hidden">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <div className="mb-12 relative">
            <CircularText
              text="• LET'S MAKE IT HAPPEN • CONTACT ME • "
              onHover="pulse"
              spinDuration={25}
              className="w-64 h-64 md:w-80 md:h-80"
              textClassName="text-red-500 font-mono text-sm font-bold tracking-widest"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={openWhatsApp}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/30"
              >
                Let's Work
              </button>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-8">
            © {new Date().getFullYear()} Tech Trek. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
