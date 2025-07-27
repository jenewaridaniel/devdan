import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
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
import "swiper/css/autoplay";

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
      github: "#",
    },
    {
      title: "Jaratech Solutions",
      description:
        "Modern tech marketplace with enhanced UI/UX and performance optimizations",
      link: "https://jaratech.netlify.app/",
      tags: ["E-commerce", "React.js", "Tailwind CSS"],
      status: "development",
      image: logos,
      github: "#",
    },
    {
      title: "Wheelzy",
      description: "Nigerian online showroom showcasing cars for sale",
      link: "https://wheelzy.netlify.app/",
      tags: ["Car Site", "React.js", "Tailwind CSS"],
      status: "development",
      image: car,
      github: "#",
    },
    {
      title: "BrewLagos",
      description:
        "Storytelling coffee brand website celebrating Nigerian coffee culture",
      link: "https://your-coffee-site.netlify.app/",
      tags: ["Coffee Brand", "React.js", "Tailwind CSS"],
      status: "live",
      image: coffeeImage,
      github: "#",
    },
    {
      title: "Gabby Hotels",
      description: "Luxury hotel booking platform with room management system",
      link: "https://gabbyshotels.netlify.app/",
      tags: ["Hotel Booking", "React", "Firebase"],
      status: "development",
      image: logoss,
      github: "#",
    },
    {
      title: "OrphanAid",
      description:
        "Non-profit platform for orphanage support and donation management",
      link: "https://orphansaid.netlify.app/",
      tags: ["Non-profit", "React", "Donation System"],
      status: "development",
      image: OrphanAidImage,
      github: "#",
    },
    {
      title: "Notiva",
      description:
        "Smart PDF summarizer for students to extract key points from documents",
      link: "https://notiva.netlify.app/",
      tags: ["Education", "React", "PDF Summarizer", "Firebase"],
      status: "development",
      image: NotivaImage,
      github: "#",
    },
  ];

  const statusColors = {
    production: "bg-emerald-500/10 text-emerald-600",
    development: "bg-amber-500/10 text-amber-600",
    live: "bg-blue-500/10 text-blue-600",
  };

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-blue-600 px-3 py-1 rounded-full bg-blue-50 mb-4">
            PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A curated collection of my professional work and personal projects
          </p>
        </motion.div>

        <div className="relative">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
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
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="mySwiper pb-20"
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
              <SwiperSlide key={index} className="max-w-sm bg-transparent">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300 border border-gray-100 h-full flex flex-col"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="flex gap-3 w-full">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition-colors duration-300 font-medium"
                        >
                          <FiExternalLink size={16} />
                          Live Demo
                        </a>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium"
                          >
                            <FiGithub size={16} />
                            Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {project.title}
                      </h3>
                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-full ${
                          statusColors[project.status]
                        }`}
                      >
                        {project.status === "production"
                          ? "Live"
                          : project.status === "development"
                          ? "In Development"
                          : "Live"}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-300 group/link"
                    >
                      View project details
                      <FiArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation Arrows */}
            <div className="swiper-button-prev !text-gray-700 !w-12 !h-12 !rounded-full !bg-white !shadow-xl !border !border-gray-200 hover:!bg-gray-50 after:!text-sm">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
            <div className="swiper-button-next !text-gray-700 !w-12 !h-12 !rounded-full !bg-white !shadow-xl !border !border-gray-200 hover:!bg-gray-50 after:!text-sm">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Swiper>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-8"
        >
          <a
            href="https://github.com/jenewaridaniel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FiGithub size={20} />
            Explore Full Portfolio on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
