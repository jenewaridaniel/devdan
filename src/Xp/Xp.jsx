import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaServer,
  FaCode,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaCloud,
  FaMobile,
  FaPalette,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
} from "react-icons/si";

const ExperienceSection = () => {
  const [years, setYears] = useState({
    frontend: 0,
    backend: 0,
    total: 0,
  });

  const expertiseAreas = [
    {
      icon: <FaReact className="text-blue-500" size={20} />,
      title: "Frontend Engineering",
      years: 8,
      description:
        "Architecting high-performance, scalable user interfaces with cutting-edge technologies",
      highlights: [
        "React & Next.js",
        "State Management",
        "Micro Frontends",
        "Performance Optimization",
        "Accessibility (a11y)",
        "Responsive Design",
        "Design Systems",
      ],
      tools: [
        { name: "React", icon: <FaReact className="text-blue-500" /> },
      
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
      ],
    },
    {
      icon: <FaCloud className="text-green-500" size={20} />,
      title: "Backend & BaaS",
      years: 1,
      description:
        "Implementing serverless architectures and backend solutions",
      highlights: [
        "Firebase Services",
        "Cloud Functions",
        "Authentication",
        "API Integration",
        "Serverless Architecture",
        "NoSQL Databases",
        "Real-time Data",
      ],
      tools: [
        { name: "Firebase", icon: <SiFirebase className="text-amber-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      ],
    },
  ];

  useEffect(() => {
    const animateValues = () => {
      const targetValues = {
        frontend: 8,
        backend: 1,
        total: 8,
      };

      const duration = 2000;
      const steps = 50;
      const increment = targetValues.total / steps;

      let currentValues = { ...years };
      let step = 0;

      const interval = setInterval(() => {
        step++;

        Object.keys(targetValues).forEach((key) => {
          if (currentValues[key] < targetValues[key]) {
            currentValues[key] = Math.min(
              currentValues[key] + targetValues[key] / steps,
              targetValues[key]
            );
          }
        });

        setYears({
          frontend: Math.floor(currentValues.frontend),
          backend: parseFloat(currentValues.backend.toFixed(1)),
          total: Math.floor(currentValues.total),
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
    <section className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase">
            Professional Expertise
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Crafting Digital Excellence
          </h2>
          <div className="mt-5 h-1 w-20 mx-auto bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Specialized in frontend architecture with 8 years of experience,
            complemented by modern backend solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Frontend Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-5 mb-6">
              <div className="p-4 rounded-xl bg-blue-50 text-blue-600">
                <FaReact size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Frontend Development
                </h3>
                <p className="text-blue-600 font-medium">Specialization</p>
              </div>
            </div>
            <div className="flex items-end gap-3 mb-6">
              <span className="text-5xl font-bold text-gray-900">
                {years.frontend}
              </span>
              <span className="text-xl text-gray-500 mb-1">Years</span>
            </div>
            <p className="text-gray-600 mb-6">
              Extensive experience building complex, performant web applications
              with modern JavaScript frameworks
            </p>
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Core Technologies
              </h4>
              <div className="flex gap-3">
                {expertiseAreas[0].tools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    {tool.icon}
                    <span className="text-sm font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Key Capabilities
              </h4>
              <div className="flex flex-wrap gap-2">
                {expertiseAreas[0].highlights.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-white text-gray-700 border border-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Backend Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-5 mb-6">
              <div className="p-4 rounded-xl bg-green-50 text-green-600">
                <FaCloud size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Backend & BaaS
                </h3>
                <p className="text-green-600 font-medium">
                  Complementary Skills
                </p>
              </div>
            </div>
            <div className="flex items-end gap-3 mb-6">
              <span className="text-5xl font-bold text-gray-900">
                {years.backend}
              </span>
              <span className="text-xl text-gray-500 mb-1">Years</span>
            </div>
            <p className="text-gray-600 mb-6">
              Implementing modern backend solutions with serverless
              architectures and BaaS platforms
            </p>
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Core Technologies
              </h4>
              <div className="flex gap-3">
                {expertiseAreas[1].tools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    {tool.icon}
                    <span className="text-sm font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Key Capabilities
              </h4>
              <div className="flex flex-wrap gap-2">
                {expertiseAreas[1].highlights.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-white text-gray-700 border border-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Expertise Breakdown
          </h3>
          <p className="text-gray-600 max-w-3xl">
            Detailed overview of my technical capabilities and professional
            experience across different domains.
          </p>

          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="p-5 rounded-xl bg-gray-50 text-gray-700 border border-gray-200 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors">
                    {area.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {area.title}
                      </h3>
                      <p className="text-gray-500">{area.description}</p>
                    </div>
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                      {area.years}+ years experience
                    </span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Key Highlights
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {area.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {area.tools.map((tool, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200"
                        >
                          <span className="text-blue-600">{tool.icon}</span>
                          <span className="text-sm font-medium">
                            {tool.name}
                          </span>
                        </div>
                      ))}
                    </div>
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
          className="mt-16 bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-xl shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h3 className="text-xl font-semibold mb-3">
                Total Professional Experience
              </h3>
              <p className="max-w-lg opacity-90">
                With {years.total} years in web development, I combine deep
                frontend expertise with modern backend solutions to deliver
                exceptional digital products.
              </p>
            </div>
            <div className="flex items-end gap-3">
              <span className="text-6xl font-bold text-white">
                {years.total}
              </span>
              <span className="text-2xl text-white opacity-90 mb-1">Years</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
