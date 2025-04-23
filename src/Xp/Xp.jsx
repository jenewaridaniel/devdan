import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaServer,
  FaCode,
} from "react-icons/fa";

const Xp = () => {
  const [backendYears, setBackendYears] = useState(0);
  const [totalYears, setTotalYears] = useState(0);

  const experiences = [
    {
      icon: <FaNodeJs className="text-emerald-500" size={20} />,
      title: "Backend Architecture",
      years: 8,
      description:
        "Designing scalable microservices and RESTful APIs with Node.js and Express",
      tools: "Express.js, Firebase",
    },
    {
      icon: <FaReact className="text-sky-400" size={20} />,
      title: "Frontend Engineering",
      years: 6,
      description:
        "Building responsive, accessible interfaces with React ecosystem",
      tools: "React, Tailwind CSS, Framer Motion",
    },
    {
      icon: <FaDatabase className="text-amber-400" size={20} />,
      title: "Database Systems",
      years: 7,
      description: "Optimizing data storage and retrieval solutions",
      tools: "MongoDB, Firebase, Prisma, DynamoDB",
    },
    {
      icon: <FaServer className="text-violet-500" size={20} />,
      title: "DevOps & Cloud",
      years: 5,
      description: "Implementing CI/CD pipelines and cloud infrastructure",
      tools: "GitHub Actions",
    },
    // {
    //   icon: <FaCode className="text-red-400" size={20} />,
    //   title: "Technical Leadership",
    //   years: 4,
    //   description: "Mentoring teams and driving technical decisions",
    //   tools: "Code reviews, system design, architecture patterns",
    // },
  ];

  useEffect(() => {
    const backendTimer = setInterval(() => {
      setBackendYears((prev) => (prev < 8 ? prev + 1 : prev));
    }, 120);

    const totalTimer = setInterval(() => {
      setTotalYears((prev) => (prev < 8 ? prev + 1 : prev));
    }, 150);

    return () => {
      clearInterval(backendTimer);
      clearInterval(totalTimer);
    };
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 to-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-gray-500 tracking-widest">
            PROFESSIONAL JOURNEY
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Engineering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              Expertise
            </span>
          </h2>
          <div className="mt-6 h-px w-20 mx-auto bg-gradient-to-r from-red-900 via-red-500 to-red-900" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-red-900/50 transition-colors duration-500"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-emerald-900/50 to-emerald-900 border border-emerald-800/50">
                <FaNodeJs className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-200">
                Backend Mastery
              </h3>
            </div>
            <div className="flex items-end gap-3 mb-6">
              <span className="text-5xl font-bold bg-gradient-to-br from-emerald-400 to-emerald-600 text-transparent bg-clip-text">
                {backendYears}
              </span>
              <span className="text-xl text-gray-400 mb-1">years</span>
              <span className="text-lg text-emerald-400 font-medium mb-1">
                +
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Specialized in high-performance backend systems handling complex
              business logic and heavy traffic loads.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Express.js",
                "API Design",
                "WebSockets",
                "Authentication",
                "Rate Limiting",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-gray-800 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-blue-900/50 transition-colors duration-500"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-900/50 to-blue-900 border border-blue-800/50">
                <FaCode className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-200">
                Total Experience
              </h3>
            </div>
            <div className="flex items-end gap-3 mb-6">
              <span className="text-5xl font-bold bg-gradient-to-br from-blue-400 to-blue-600 text-transparent bg-clip-text">
                {totalYears}
              </span>
              <span className="text-xl text-gray-400 mb-1">years</span>
              <span className="text-lg text-blue-400 font-medium mb-1">+</span>
            </div>
            <p className="text-gray-400 mb-4">
              Comprehensive full-stack development experience across startups,
              agencies, and enterprise environments.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Full Stack",
                "System Design",
                "Mentoring",
                "Code Review",
                "Technical Debt",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-gray-800 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3 }}
              className="group bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-800 group-hover:border-gray-700 transition-colors duration-300">
                    {exp.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-gray-200">
                      {exp.title}
                    </h3>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r from-red-900/50 to-red-900/30 text-red-400 border border-red-900/50">
                      {exp.years}+ years
                    </span>
                  </div>
                  <p className="text-gray-400 mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tools.split(", ").map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-medium px-2.5 py-1 rounded bg-gray-800/50 text-gray-400 border border-gray-800"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Xp;
