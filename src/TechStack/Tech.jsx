import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaGithub } from "react-icons/fa";
import {
  SiMongodb,
  SiFirebase,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const Tech = () => {
  const techCategories = [
    {
      title: "Frontend",
      items: [
        {
          name: "React",
          icon: <FaReact className="text-blue-500" size={24} />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" size={24} />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-400" size={24} />,
        },
        {
          name: "Framer Motion",
          icon: <TbBrandFramerMotion className="text-purple-500" size={24} />,
        },
      ],
    },
    {
      title: "Backend",
      items: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-500" size={24} />,
        },
        {
          name: "Express",
          icon: <SiExpress className="text-gray-300" size={24} />,
        },
        {
          name: "Python",
          icon: <FaPython className="text-blue-400" size={24} />,
        },
      ],
    },
    {
      title: "Database & Infrastructure",
      items: [
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-400" size={24} />,
        },
        {
          name: "Firebase",
          icon: <SiFirebase className="text-orange-400" size={24} />,
        },
        {
          name: "GitHub",
          icon: <FaGithub className="text-gray-800" size={24} />,
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
        delayChildren: 0.3,
      },
    },
  };

  const categoryVariant = {
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

  const itemVariant = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
      },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-gray-500 tracking-wider">
            TECHNOLOGIES
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            My Tech Stack
          </h2>
          <div className="mt-6 h-0.5 w-16 mx-auto bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100" />
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Tools and technologies I use to build high-quality applications
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={categoryVariant}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    variants={itemVariant}
                    whileHover={{ y: -4 }}
                    className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all"
                  >
                    <div className="mb-3">{tech.icon}</div>
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-100"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Always Learning
            </h3>
            <p className="text-gray-600 mb-6">
              I'm continuously expanding my skill set to stay current with
              industry trends and deliver cutting-edge solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["TypeScript", "Next.js"].map(
                (tech, index) => (
                  <span
                    key={index}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-white text-gray-700 border border-gray-200"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tech;
