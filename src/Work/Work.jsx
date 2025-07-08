import React from "react";
import { motion } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import logo from "../assets/logo.png";
import logos from "../assets/iconsss.jpg";
import car from "../assets/car.png";
import logoss from "../assets/logos.png";
import OrphanAidImage from "../assets/react.svg";
import NotivaImage from "../assets/icon.png";
import coffeeImage from "../assets/coffee.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const Work = () => {
  const projects = [
    {
      title: "Dest Gadgets Edge",
      description:
        "E-commerce platform for premium gadgets with secure payments and inventory management",
      link: "https://destgadgetsedge.ng/",
      tags: ["E-commerce", "React", "Payment Gateway"],
      status: "production",
      image: logo,
    },
    {
      title: "Jaratech Solutions",
      description:
        "Modern tech marketplace with enhanced UI/UX and performance optimizations",
      link: "https://jaratech.netlify.app/",
      tags: ["E-commerce", "React.js", "Tailwind CSS"],
      status: "development",
      image: logos,
    },
    {
      title: "Wheelzy",
      description:
        "Nigerian online showroom showcasing cars for sale",
      link: "https://wheelzy.netlify.app/",
      tags: ["Car Site", "React.js", "Tailwind CSS"],
      status: "development",
      image: car,
    },
    {
      title: "BrewLagos",
      description: "Storytelling coffee brand website celebrating Nigerian coffee culture",
      link: "https://your-coffee-site.netlify.app/",
      tags: ["Coffee Brand", "React.js", "Tailwind CSS"],
      status: "live",
      image: coffeeImage,
    },
    {
      title: "Gabby Hotels",
      description: "Luxury hotel booking platform with room management system",
      link: "https://gabbyshotels.netlify.app/",
      tags: ["Hotel Booking", "React", "Firebase"],
      status: "development",
      image: logoss,
    },
    {
      title: "OrphanAid",
      description:
        "Non-profit platform for orphanage support and donation management",
      link: "https://orphansaid.netlify.app/",
      tags: ["Non-profit", "React", "Donation System"],
      status: "development",
      image: OrphanAidImage,
    },
    {
      title: "Notiva",
      description:
        "Smart PDF summarizer for students to extract key points from documents",
      link: "https://notiva.netlify.app/",
      tags: ["Education", "React", "PDF Summarizer", "Firebase"],
      status: "development",
      image: NotivaImage,
    },
  ];

  const statusColors = {
    production: "bg-emerald-100 text-emerald-800",
    development: "bg-amber-100 text-amber-800",
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
            MY WORK
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Featured Projects
          </h2>
          <div className="mt-6 h-0.5 w-16 mx-auto bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100" />
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            A selection of my recent commercial projects and case studies
          </p>
        </motion.div>

        <div className="relative">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper pb-16"
            breakpoints={{
              640: {
                coverflowEffect: {
                  rotate: 0,
                  stretch: -50,
                  depth: 100,
                  modifier: 1,
                },
              },
              1024: {
                coverflowEffect: {
                  rotate: 0,
                  stretch: -100,
                  depth: 200,
                  modifier: 1,
                },
              },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="max-w-sm">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300 border border-gray-100 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors duration-300"
                      >
                        <FiExternalLink size={16} />
                        View Project
                      </a>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {project.title}
                      </h3>
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                          statusColors[project.status]
                        }`}
                      >
                        {project.status === "production"
                          ? "Live"
                          : "In Development"}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-700"
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
                        className="flex-1 flex items-center justify-center gap-2 text-sm font-medium px-4 py-2 rounded-md bg-gray-900 hover:bg-gray-800 text-white transition-colors duration-300"
                      >
                        <FiExternalLink size={16} />
                        Live Demo
                      </a>
                      <button className="flex-1 flex items-center justify-center gap-2 text-sm font-medium px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50 text-gray-700 transition-colors duration-300">
                        {/* <FiCode size={16} /> */}
                        Case Study
                      </button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation Arrows */}
            <div className="swiper-button-prev !text-gray-700 !w-12 !h-12 !rounded-full !bg-white/80 !backdrop-blur-sm !shadow-lg after:!text-sm">
              <FiChevronLeft className="w-6 h-6" />
            </div>
            <div className="swiper-button-next !text-gray-700 !w-12 !h-12 !rounded-full !bg-white/80 !backdrop-blur-sm !shadow-lg after:!text-sm">
              <FiChevronRight className="w-6 h-6" />
            </div>
          </Swiper>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">Want to explore more projects?</p>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 rounded-md text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <FiGithub size={18} />
            View Full Portfolio on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
