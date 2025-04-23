import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaGithub } from "react-icons/fa";
import {
  SiMongodb,
  SiFirebase,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";
import { GiSpiderWeb } from "react-icons/gi";

const Tech = () => {
  const techStack = [
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-400" />,
      color: "from-green-900 to-green-700",
    },
    {
      name: "Express",
      icon: <FaNodeJs className="text-gray-300" />,
      color: "from-gray-800 to-gray-600",
    },
    {
      name: "React",
      icon: <FaReact className="text-blue-400" />,
      color: "from-blue-900 to-blue-700",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500" />,
      color: "from-green-800 to-green-600",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-gray-200" />,
      color: "from-gray-900 to-gray-700",
    },
    {
      name: "Framer Motion",
      icon: <GiSpiderWeb className="text-purple-400" />,
      color: "from-purple-900 to-purple-700",
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-orange-400" />,
      color: "from-orange-900 to-orange-700",
    },
    {
      name: "Python",
      icon: <FaPython className="text-blue-300" />,
      color: "from-blue-800 to-blue-600",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-300" />,
      color: "from-yellow-900 to-yellow-700",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-300" />,
      color: "from-cyan-900 to-cyan-700",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
  };

  const joke = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.8,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            The digital tools I wield to craft exceptional experiences
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -8,
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
              }}
              className={`bg-gradient-to-br ${tech.color} rounded-xl p-6 shadow-lg flex flex-col items-center justify-center cursor-default border border-gray-800 hover:border-opacity-50 transition-all duration-300`}
            >
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h3 className="text-lg font-semibold text-gray-100">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={joke}
          initial="hidden"
          animate="visible"
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-gray-800 to-gray-900 px-8 py-5 rounded-xl shadow-2xl border-l-4 border-red-500">
            <p className="text-gray-300 font-medium">
              "Why do programmers prefer dark mode?
              <br />
              <span className="text-red-400 font-bold">
                Because light attracts bugs!
              </span>{" "}
              🐛"
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;
