import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiFramer,
} from "react-icons/si";

const TechStack = () => {
  const techCategories = [
    {
      title: "Frontend Expertise",
      items: [
        {
          name: "React",
          icon: <FaReact className="text-blue-500" />,
          color: "text-blue-500",
        },
        
       
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" />,
          color: "text-yellow-400",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-400" />,
          color: "text-cyan-400",
        },
        {
          name: "Framer Motion",
          icon: <SiFramer className="text-purple-500" />,
          color: "text-purple-500",
        },
      ],
    },
    {
      title: "Backend & Database",
      items: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-500" />,
          color: "text-green-500",
        },
        { name: "Express", icon: <SiExpress />, color: "text-gray-800" },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-400" />,
          color: "text-green-400",
        },
        {
          name: "Firebase",
          icon: <SiFirebase className="text-orange-400" />,
          color: "text-orange-400",
        },
      ],
    },
    {
      title: "Tools & Workflow",
      items: [
        {
          name: "Git",
          icon: <FaGitAlt className="text-orange-600" />,
          color: "text-orange-600",
        },
        {
          name: "VS Code",
          icon: <span className="text-blue-500 font-bold">{"</>"}</span>,
          color: "text-blue-500",
        },
        {
          name: "Jira",
          icon: <span className="text-blue-600">J</span>,
          color: "text-blue-600",
        },
        {
          name: "Figma",
          icon: <span className="text-purple-500">F</span>,
          color: "text-purple-500",
        },
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-4">
            TECHNOLOGIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Development</span> Toolkit
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            The technologies I use daily to build robust, scalable applications
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all"
            >
              <div className="p-6 border-b border-gray-100 bg-gray-50">
                <h3 className="text-xl font-semibold text-gray-800">
                  {category.title}
                </h3>
              </div>
              <div className="p-6 grid grid-cols-2 gap-4">
                {category.items.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    whileHover={{ y: -4 }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div
                      className={`p-2 rounded-lg ${tech.color} bg-opacity-10`}
                    >
                      {tech.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-8 md:p-10 text-center">
            <h3 className="text-xl font-semibold text-white mb-3">
              Continuously Expanding My Skills
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I'm always learning new technologies and best practices to stay at
              the forefront of web development.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[, "Supabase", "Nextjs"].map((tech, index) => (
                <span
                  key={index}
                  className="text-sm font-medium px-4 py-2 rounded-full bg-white/10 text-white backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
