import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiCode } from "react-icons/fi";

const Work = () => {
  const projects = [
    {
      title: "Dest Gadgets Edge",
      description:
        "E-commerce platform for premium gadgets with secure payments and inventory management",
      link: "https://destgadgetsedge.ng/",
      tags: ["E-commerce", "React", "Payment Gateway"],
      status: "production",
    },
    {
      title: "Jaratech Solutions",
      description:
        "Modern tech marketplace with enhanced UI/UX and performance optimizations",
      link: "https://jaratech.netlify.app/",
      tags: ["E-commerce", "Next.js", "Tailwind CSS"],
      status: "production",
    },
    {
      title: "Gabby Hotels",
      description:
        "Luxury hotel booking platform with room management system (In Development)",
      link: "https://gabbyshotels.netlify.app/",
      tags: ["Hotel Booking", "React", "Firebase"],
      status: "development",
    },
    {
      title: "OrphanAid",
      description:
        "Non-profit platform for orphanage support and donation management",
      link: "https://orphansaid.netlify.app/",
      tags: ["Non-profit", "React", "Donation System"],
      status: "production",
    },
  ];

  const statusColors = {
    production: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    development: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 to-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-gray-500 tracking-widest">
            PORTFOLIO
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Selected{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              Projects
            </span>
          </h2>
          <div className="mt-6 h-px w-20 mx-auto bg-gradient-to-r from-red-900 via-red-500 to-red-900" />
          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            Commercial and passion projects built with modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-gray-700 overflow-hidden transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg text-white hover:bg-red-500 hover:border-red-500 transition-colors duration-300"
                    >
                      <FiExternalLink size={18} />
                      Visit Live Site
                    </a>
                  </div>
                  <div className="text-4xl font-bold text-gray-700">
                    {project.title
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-200">
                    {project.title}
                  </h3>
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      statusColors[project.status]
                    } border`}
                  >
                    {project.status === "production"
                      ? "Live"
                      : "In Development"}
                  </span>
                </div>

                <p className="text-gray-400 mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2.5 py-1 rounded bg-gray-800/50 text-gray-400 border border-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors duration-300"
                  >
                    <FiExternalLink size={16} />
                    Demo
                  </a>
                  <button className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors duration-300">
                    <FiCode size={16} />
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 rounded-lg border border-gray-800 text-gray-300 font-medium transition-all duration-300"
          >
            <FiGithub size={18} />
            View GitHub Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
