"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub, BsCardImage } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

// components
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "web app",
    title: "torrent - web",
    description: `Torrent Power is a web app that lets users download and stream torrents directly in the browser. It supports magnetic links, real-time video streaming, and offers simple download management. Built with React.js, Node.js, and WebTorrent, it provides a lightweight, platform-independent torrenting experience.`,
    stack: [
      {
        name: "React",
      },
      {
        name: "Material UI",
      },
      {
        name: "Node.js",
      },
      {
        name: "MongoDB",
      },
    ],
    image: "/assets/work/torrent-web-shot.jpeg",
    live: "/assets/work/TorrentWebClient.docx",
    github: "https://github.com/JS-JeevaSaravanan/torrent_web",
  },
  {
    num: "02",
    category: "website",
    title: "Fish Market",
    description:
      "Aazhi Fishes Market is an online platform that recreates the traditional fish market experience. Users can browse, learn about, and shop for fresh seafood with detailed product pages, nutritional information, and interactive galleries. The responsive, user-friendly design ensures a convenient and informative shopping experience.",
    stack: [
      {
        name: "Bootstrap",
      },
      {
        name: "JQuery",
      },
      {
        name: "Express.js",
      },
      {
        name: "MySql",
      },
      {
        name: "AWS",
      },
    ],
    image: "/assets/work/fish-market-shot.png",
    live: "http://aazhifishes.com/",
    github: "https://github.com/JS-JeevaSaravanan/torrent_web",
  },
  {
    num: "03",
    category: "hybrid app",
    title: "expense split",
    description: `The Expense Tracker and Split App is a hybrid tool for managing personal finances and splitting group expenses. It tracks income, expenses, and budgets, while simplifying cost splitting for shared transactions. Ideal for both individual and group use, it offers a seamless, user-friendly experience.`,
    stack: [
      {
        name: "React Native",
      },
      {
        name: "Mobx",
      },
      {
        name: "Firebase",
      },
      {
        name: "Expo",
      },
    ],
    image: "/assets/work/expense-tracker.png",
    live: "/assets/work/Split-easy",
    github: "https://github.com/JS-JeevaSaravanan/ProjectY",
  },
  {
    num: "04",
    category: "frontend",
    title: "Portfolio",
    description:
      "Jeeva Saravanan's Portfolio is a web app showcasing my skills, projects, and professional growth. With an intuitive design, smooth animations, and detailed case studies, it highlights my expertise in software development and offers a way to connect and explore my work.",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "Tailwind.css",
      },
      {
        name: "Framer-motion",
      },
    ],
    image: "/assets/work/portfolio-shot.png",
    live: "https://js-jeevasaravanan-portfolio.vercel.app",
    github: "https://github.com/JS-JeevaSaravanan/js-portfolio",
  },
  {
    num: "05",
    category: "Tasks",
    title: "Task Manager",
    description:
      "Task Manager is a simple and intuitive to-do list app built to help users manage their daily tasks. It allows users to add, edit, and delete tasks, with an option to mark tasks as complete. Built with modern frontend technologies, it features a clean, responsive UI and provides an excellent user experience.",
    stack: [
      { name: "React.js" },
      { name: "Redux" },
      { name: "LocalStorage" },
      { name: "Framer Motion" },
    ],
    image: "/assets/work/task-manager-shot.jpeg",
    live: "",
    github: "https://github.com/JS-JeevaSaravanan/Task-Manager-app",
  },
  {
    num: "06",
    category: "Blogger",
    title: "Blog Platform",
    description:
      "Blog Platform is a full-stack application where users can create, read, update, and delete blog posts. It includes features such as user authentication, Markdown support, and real-time commenting. The app provides a smooth, interactive interface for both authors and readers.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "JWT" },
    ],
    image: "/assets/work/blog-platform.png",
    live: "",
    github: "https://github.com/JS-JeevaSaravanan/NextJs-14-Blog-App",
  },
  {
    num: "07",
    category: "Weather Site",
    title: "Weather App",
    description:
      "Weather App provides users with real-time weather information based on their location or a selected city. It integrates with a weather API to provide data such as temperature, humidity, wind speed, and weather conditions. The app has an elegant, user-friendly interface designed for both desktop and mobile devices.",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "OpenWeather API" },
    ],
    image: "/assets/work/weather-app.png",
    live: "",
    github: "https://github.com/JS-JeevaSaravanan/Simple-Weather-App",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,

        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>

              {/* project description  */}
              <p className="text-white/60">{project.description}</p>

              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma  */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* border  */}
              <div className="border border-white/20"> </div>

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button  */}
                {project.live && (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {/* github project button  */}
                {project.github && (
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {/* Image Button */}
                {project.image && (
                  <Link href={project.image} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsCardImage className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View Image</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay  */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      {/* image  */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* slide buttons  */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
