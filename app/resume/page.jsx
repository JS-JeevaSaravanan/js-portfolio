"use client";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaSass,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiExpress,
  SiPostman,
  SiEslint,
  SiWebpack,
  SiStorybook,
  SiReactrouter,
  SiJest,
  SiCypress,
  SiFlask,
  SiTypeorm,
} from "react-icons/si";

import { PiFileSqlDuotone, PiPackage } from "react-icons/pi";

import { DiRedis } from "react-icons/di";

// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

// animation
import { motion } from "framer-motion";

// about data
const about = {
  title: "About me",
  description: `I am a dedicated Full Stack Developer with a passion for crafting seamless, scalable applications. With a strong foundation in both frontend and backend technologies, I bring a holistic approach to problem-solving and project execution. I thrive on tackling complex challenges, optimizing performance, and ensuring high-quality code. My experience spans developing interactive UIs, managing efficient data flow, and implementing modern development practices. I'm driven by continuous learning and contributing innovative solutions to make impactful software.`,
  info: [
    {
      filedName: "Name",
      fieldValue: "Jeeva Saravanan",
    },
    {
      filedName: "Mobile",
      fieldValue: "(+91) 9080704586",
    },
    {
      filedName: "Experience",
      fieldValue: "4+ Years",
    },
    {
      filedName: "Email",
      fieldValue: "jeevatamil2000@gmail.com",
    },
    {
      filedName: "Nationality",
      fieldValue: "Indian",
    },
    {
      filedName: "Expertise",
      fieldValue: "Fullstack",
    },
    {
      filedName: "Freelance",
      fieldValue: "Available",
    },
    {
      filedName: "Languages",
      fieldValue: "English, Tamil",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: `Full Stack Developer with extensive experience in building scalable web applications using React, Next.js, Node.js, and Python. Proficient in performance optimization, state management, microservices, Docker, and CI/CD practices. Strong background in creating interactive UI components and tackling complex backend challenges.`,
  items: [
    {
      company: "Lumel Technologies Inc.",
      position: "Senior Product Developer",
      duration: "Jan2024 - Present",
    },
    {
      company: "Lumel Technologies Inc.",
      position: "Product Developer",
      duration: "Jan2023 - Dec2023",
    },
    {
      company: "Lumel Technologies Inc.",
      position: "Associate Product Developer",
      duration: "Jan2022 - Dec2022",
    },
    {
      company: "Lumel Technologies Inc.",
      position: "BI Developer Trainee",
      duration: "Aug2021 - Dec2021",
    },
    {
      company: "Visual BI Solutions Inc.",
      position: "BI Developer Trainee",
      duration: "May2021 - Aug2021",
    },
    {
      company: "Visual BI Solutions Inc.",
      position: "BI Developer Intern",
      duration: "Mar2021 - May2021",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: `I hold a Bachelor's in Computer Science & Engineering, with expertise in programming, algorithms, and system design. Through coding competitions, workshops, and team projects, I applied my knowledge to real-world challenges and developed strong problem-solving, leadership, and teamwork skills.`,
  items: [
    {
      institution: "Government College of Engineering (GCE), Erode",
      degree: "Bachelors in Computer Science & Engineering",
      duration: "May2017 - Apr2021",
    },
    {
      institution: "S.V.B Higher Secondary School, Tiruchengode",
      degree: "Higher Secondary Education (HSC)",
      duration: "Apr2015 - Mar2017",
    },
    {
      institution: "S.R.V Boys Higher Secondary School, Rasipuram",
      degree: "Secondary Education (SSLC)",
      duration: "Jun2013 - Mar2015",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description: `I am a versatile Full Stack Developer with a rich skill set covering a broad range of technologies and tools. Below is a snapshot of the key skills that enable me to design, develop, and maintain robust, high-performance applications efficiently.`,
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },

    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },

    {
      icon: <FaSass />,
      name: "sass",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiExpress />,
      name: "express.js",
    },

    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiReactrouter />,
      name: "reactrouter",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiFlask />,
      name: "Flask",
    },
    {
      icon: <PiFileSqlDuotone />,
      name: "Sql",
    },
    {
      icon: <DiRedis />,
      name: "Redis",
    },
    {
      icon: <SiTypeorm />,
      name: "TypeORM",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <FaGithub />,
      name: "Github",
    },
    {
      icon: <SiStorybook />,
      name: "storybook",
    },
    {
      icon: <SiJest />,
      name: "jest",
    },
    {
      icon: <SiCypress />,
      name: "cypress",
    },
    {
      icon: <SiPostman />,
      name: "api",
    },
    {
      icon: <SiEslint />,
      name: "eslint",
    },
    {
      icon: <SiWebpack />,
      name: "webpack",
    },
    {
      icon: <PiPackage />,
      name: "pip",
    },
    {
      icon: <FaNpm />,
      name: "npm",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content  */}

          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>

                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>

                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid gird-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.filedName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
