"use client";

// ================= ICONS =================
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
  FaAws,
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
  SiNestjs,
  SiVitest,
  SiFastapi,
  SiPnpm,
  SiGithubcopilot,
  SiGraphql,
  SiReactquery,
  SiVite,
} from "react-icons/si";

import { PiFileSqlDuotone } from "react-icons/pi";
import { DiRedis } from "react-icons/di";
import { TbRobot, TbRadar } from "react-icons/tb";

// ================= UI =================
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

/* ================= ABOUT ================= */
const about = {
  title: "About me",
  description:
    "Full Stack Developer with strong focus on scalable systems, performance optimization, and modern web architecture using React, Node.js, and cloud technologies.",
  info: [
    { fieldName: "Name", fieldValue: "Jeeva Saravanan" },
    { fieldName: "Mobile", fieldValue: "+91 90807 04586" },
    { fieldName: "Experience", fieldValue: "5+ Years" },
    { fieldName: "Email", fieldValue: "jeevatamil2000@gmail.com" },
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Expertise", fieldValue: "Full Stack Development" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Tamil" },
  ],
};

/* ================= EXPERIENCE ================= */
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Experience in enterprise applications, BI dashboards, backend APIs, frontend systems, and scalable architectures.",
  items: [
    {
      company: "Incubyte Consulting LLP",
      position: "Software Craftsperson (SDE-2)",
      duration: "Jan 2025 - Present",
    },
    {
      company: "Lumel Technologies Inc.",
      position: "Senior Product Developer",
      duration: "Jan 2024 - Dec 2024",
    },
    {
      company: "Lumel Technologies Inc.",
      position: "Product Developer",
      duration: "Jan 2023 - Dec 2023",
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

/* ================= EDUCATION ================= */
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Bachelor’s degree in Computer Science & Engineering with strong fundamentals in programming and system design.",
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

/* ================= SKILLS ================= */
const skills = {
  title: "My skills",
  description:
    "Complete full-stack engineering stack covering frontend, backend, cloud, testing, DevOps, and AI-assisted development.",

  skillGroups: [
    /* FRONTEND */
    {
      title: "Frontend",
      items: [
        { icon: FaHtml5, name: "HTML5" },
        { icon: FaCss3, name: "CSS3" },
        { icon: SiTailwindcss, name: "Tailwind CSS" },
        { icon: FaSass, name: "SCSS" },
        { icon: FaJs, name: "JavaScript" },
        { icon: SiTypescript, name: "TypeScript" },
        { icon: FaReact, name: "React" },
        { icon: SiNextdotjs, name: "Next.js" },
        { icon: SiRedux, name: "Redux" },
        { icon: SiReactrouter, name: "React Router" },
        { icon: SiReactquery, name: "TanStack Query" },
        { icon: FaReact, name: "Zustand" },
        { icon: FaReact, name: "Framer Motion" },
        { icon: FaReact, name: "ShadCN UI" },
        { icon: FaReact, name: "Radix UI" },
        { icon: FaReact, name: "Material UI" },
      ],
    },

    /* BACKEND */
    {
      title: "Backend",
      items: [
        { icon: FaNodeJs, name: "Node.js" },
        { icon: SiExpress, name: "Express.js" },
        { icon: SiNestjs, name: "NestJS" },
        { icon: FaPython, name: "Python" },
        { icon: SiFastapi, name: "FastAPI" },
        { icon: SiFlask, name: "Flask" },
        { icon: SiGraphql, name: "GraphQL" },
        { icon: PiFileSqlDuotone, name: "SQL" },
        { icon: DiRedis, name: "Redis" },
        { icon: PiFileSqlDuotone, name: "PostgreSQL" },
        { icon: PiFileSqlDuotone, name: "MongoDB" },
        { icon: PiFileSqlDuotone, name: "MySQL" },
        { icon: SiExpress, name: "REST APIs" },
        // drizzle, typeORM
        // bun
      ],
    },

    /* DEVOPS */
    {
      title: "Cloud & DevOps",
      items: [
        { icon: FaDocker, name: "Docker" },
        { icon: FaAws, name: "AWS" },
        { icon: SiVite, name: "Vite" },
        { icon: SiWebpack, name: "Webpack" },
        // turbo pack
        { icon: SiPnpm, name: "pnpm" },
        { icon: FaNpm, name: "npm" },
        { icon: FaGitAlt, name: "GitHub Actions" },
      ],
    },

    /* TESTING */
    {
      title: "Testing",
      items: [
        { icon: SiJest, name: "Jest" },
        { icon: SiVitest, name: "Vitest" },
        { icon: SiCypress, name: "Cypress" },
        { icon: SiStorybook, name: "Storybook" },
        // playright
        // pytest
        // mutation test - stryker
      ],
    },

    /* TOOLS */
    {
      title: "Tools",
      items: [
        { icon: FaGitAlt, name: "Git" },
        { icon: FaGithub, name: "GitHub" },
        { icon: SiPostman, name: "Postman" },
        { icon: SiEslint, name: "ESLint" },
      ],
    },

    /* AI */
    {
      icon: <FaNpm />,
      name: "npm",
    },
  ],
};

/* ================= COMPONENT ================= */
export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-12"
        >
          {/* NAV */}
          <TabsList className="flex flex-col w-full max-w-[300px] gap-4">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          {/* CONTENT */}
          <div className="w-full">
            {/* EXPERIENCE */}
            <TabsContent value="experience">
              <h2 className="text-3xl font-bold">{experience.title}</h2>
              <p className="text-white/60 mt-3">{experience.description}</p>

              <ScrollArea className="h-[400px] mt-6">
                <div className="grid lg:grid-cols-2 gap-4">
                  {experience.items.map((item, i) => (
                    <div key={i} className="bg-[#232329] p-5 rounded-xl">
                      <p className="text-accent">{item.duration}</p>
                      <h3>{item.position}</h3>
                      <p className="text-white/60">{item.company}</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

            {/* EDUCATION */}
            <TabsContent value="education">
              <h2 className="text-3xl font-bold">{education.title}</h2>
              <p className="text-white/60 mt-3">{education.description}</p>

              <div className="mt-6 grid lg:grid-cols-2 gap-4">
                {education.items.map((item, i) => (
                  <div key={i} className="bg-[#232329] p-5 rounded-xl">
                    <p className="text-accent">{item.duration}</p>
                    <h3>{item.degree}</h3>
                    <p className="text-white/60">{item.institution}</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* SKILLS */}
            <TabsContent value="skills">
              <h2 className="text-3xl font-bold">{skills.title}</h2>
              <p className="text-white/60 mt-3">{skills.description}</p>

              <div className="mt-8 space-y-10">
                {skills.skillGroups.map((group, i) => (
                  <div key={i}>
                    <h3 className="text-accent mb-4">{group.title}</h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {group.items.map((skill, idx) => (
                        <TooltipProvider key={idx}>
                          <Tooltip>
                            <TooltipTrigger className="h-[110px] bg-[#232329] flex items-center justify-center rounded-xl">
                              <skill.icon className="text-4xl" />
                            </TooltipTrigger>
                            <TooltipContent>{skill.name}</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* ABOUT */}
            <TabsContent value="about">
              <h2 className="text-3xl font-bold">{about.title}</h2>
              <p className="text-white/60 mt-3">{about.description}</p>

              <div className="grid md:grid-cols-2 gap-3 mt-6">
                {about.info.map((item, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-white/60">{item.fieldName}:</span>
                    <span>{item.fieldValue}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
