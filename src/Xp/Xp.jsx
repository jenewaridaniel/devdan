import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaServer,
  FaCode,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaCloud,
} from "react-icons/fa";

const Xp = () => {
  const [years, setYears] = useState({
    frontend: 0,
    backend: 0,
    database: 0,
    total: 0
  });

  const expertiseAreas = [
    {
      icon: <FaReact className="text-sky-500" size={18} />,
      title: "Frontend Engineering",
      years: 8.5,
      description: "Building responsive, accessible user interfaces with modern frameworks",
      highlights: [
        "React ecosystem",
        "Next.js",
        "State management",
        "Component architecture",
        "Performance optimization",
        "Accessibility",
        "Animation",
        "TypeScript"
      ]
    },
    {
      icon: <FaNodeJs className="text-green-500" size={18} />,
      title: "Backend Development",
      years: 0.5,
      description: "Developing server-side applications and APIs",
      highlights: [
        "Node.js",
        "Express",
        "REST APIs",
        "Authentication",
        "Basic microservices"
      ]
    },
    {
      icon: <FaDatabase className="text-amber-500" size={18} />,
      title: "Database Systems",
      years: 4,
      description: "Designing and optimizing data storage solutions",
      highlights: [
        "Firebase",
        "MongoDB",
        "Data modeling",
        "Query optimization",
        "Real-time updates"
      ]
    }
  ];

  useEffect(() => {
    // Animate the numbers counting up
    const animateValues = () => {
      const targetValues = {
        frontend: 8.5,
        backend: 0.5,
        database: 4,
        total: 9
      };

      const duration = 2000; // 2 seconds total
      const steps = 50;
      const increment = targetValues.total / steps;

      let currentValues = { ...years };
      let step = 0;

      const interval = setInterval(() => {
        step++;
        
        Object.keys(targetValues).forEach(key => {
          if (currentValues[key] < targetValues[key]) {
            currentValues[key] = Math.min(
              currentValues[key] + (targetValues[key] / steps),
              targetValues[key]
            );
          }
        });

        setYears({
          frontend: parseFloat(currentValues.frontend.toFixed(1)),
          backend: parseFloat(currentValues.backend.toFixed(1)),
          database: parseFloat(currentValues.database.toFixed(1)),
          total: Math.floor(currentValues.total)
        });

        if (step >= steps) {
          clearInterval(interval);
        }
      }, duration / steps);

      return () => clearInterval(interval);
    };

    animateValues();
  }, []);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-gray-500 tracking-wider">
            PROFESSIONAL JOURNEY
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            My Development Experience
          </h2>
          <div className="mt-6 h-0.5 w-16 mx-auto bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100" />
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Specialized frontend expertise with full-stack capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Frontend Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-sky-200 transition-colors"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-sky-50 text-sky-600">
                <FaReact size={20} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Frontend</h3>
            </div>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-4xl font-bold text-gray-900">
                {years.frontend}
              </span>
              <span className="text-gray-500 mb-1">years</span>
            </div>
            <p className="text-gray-600 mb-4 text-sm">
              Specialized in React ecosystem and modern web development
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Framer Motion"].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-white text-gray-700 border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Backend Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-green-200 transition-colors"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-green-50 text-green-600">
                <FaNodeJs size={20} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Backend</h3>
            </div>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-4xl font-bold text-gray-900">
                {years.backend}
              </span>
              <span className="text-gray-500 mb-1">years</span>
            </div>
            <p className="text-gray-600 mb-4 text-sm">
              Developing server applications and APIs
            </p>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Express", "REST APIs", "Authentication"].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-white text-gray-700 border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Database Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-amber-200 transition-colors"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-amber-50 text-amber-600">
                <FaDatabase size={20} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Database</h3>
            </div>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-4xl font-bold text-gray-900">
                {years.database}
              </span>
              <span className="text-gray-500 mb-1">years</span>
            </div>
            <p className="text-gray-600 mb-4 text-sm">
              NoSQL and real-time database solutions
            </p>
            <div className="flex flex-wrap gap-2">
              {["Firebase", "MongoDB", "Data Modeling", "Real-time"].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-white text-gray-700 border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Expertise Breakdown
          </h3>

          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="group bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-lg bg-gray-50 text-gray-700 border border-gray-200 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-colors">
                    {area.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {area.title}
                    </h3>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                      {area.years} years experience
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs font-medium px-3 py-1 rounded bg-gray-50 text-gray-600 border border-gray-200"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-xl border border-indigo-100"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Comprehensive Experience
              </h3>
              <p className="text-gray-600 max-w-lg">
                With {years.total} years in web development, I bring deep frontend expertise 
                complemented by growing backend knowledge and database experience.
              </p>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-5xl font-bold text-gray-900">
                {years.total}
              </span>
              <span className="text-xl text-gray-600 mb-1">years</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Xp;