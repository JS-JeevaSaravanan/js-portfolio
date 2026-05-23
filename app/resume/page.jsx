"use client";

import { motion } from "framer-motion";

// UI
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

/* ================= ICONS ================= */
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaNpm,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiReactrouter,
  SiReactquery,
  SiExpress,
  SiNestjs,
  SiFlask,
  SiFastapi,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiJest,
  SiVitest,
  SiCypress,
  SiStorybook,
  SiPostman,
  SiEslint,
  SiWebpack,
  SiVite,
  SiPnpm,
  SiGithubcopilot,
} from "react-icons/si";

import { PiFileSqlDuotone } from "react-icons/pi";
import { TbRobot, TbRadar } from "react-icons/tb";

/* ================= DATA ================= */

const about = {
  title: "About Me",
  description: `
Full Stack Developer with 5+ years of experience building scalable, high-performance applications.

I specialize in React, Next.js, Node.js, and Python, with strong expertise in system design, performance optimization, and modern cloud architectures.

I enjoy solving complex problems and crafting seamless user experiences.
  `,
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
      fieldValue: "5+ Years",
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

const highlights = [
  "5+ years in product-based companies",
  "Built scalable BI & analytics platforms",
  "Strong in system design & performance optimization",
  "Experience with cloud & DevOps practices",
];

const experience = [
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
];

const education = [
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
];

const skills = [
  {
    title: "Frontend",
    items: [
      { icon: FaHtml5, name: "HTML5" },
      { icon: FaCss3, name: "CSS3" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: FaJs, name: "JavaScript" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: FaReact, name: "React.js" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiRedux, name: "Redux" },
      { icon: SiReactrouter, name: "React Router" },
      { icon: SiReactquery, name: "React Query" },
      { icon: FaReact, name: "Zustand" },
      { icon: FaReact, name: "Framer Motion" },
      { icon: FaReact, name: "ShadCN UI" },
      { icon: FaReact, name: "Radix UI" },
      { icon: FaReact, name: "Material UI" },
    ],
  },
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
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiMysql, name: "MySQL" },
      { icon: SiRedis, name: "Redis" },
    ],
  },
  {
    title: "DevOps & Cloud",
    items: [
      { icon: FaDocker, name: "Docker" },
      { icon: FaAws, name: "AWS" },
      { icon: SiVite, name: "Vite" },
      { icon: SiWebpack, name: "Webpack" },
      { icon: SiPnpm, name: "pnpm" },
      { icon: FaNpm, name: "npm" },
      { icon: FaGitAlt, name: "GitHub Actions" },
    ],
  },
  {
    title: "Testing",
    items: [
      { icon: SiJest, name: "Jest" },
      { icon: SiVitest, name: "Vitest" },
      { icon: SiCypress, name: "Cypress" },
      { icon: SiStorybook, name: "Storybook" },
    ],
  },
  {
    title: "Tools",
    items: [
      { icon: FaGitAlt, name: "Git" },
      { icon: FaGithub, name: "GitHub" },
      { icon: SiPostman, name: "Postman" },
      { icon: SiEslint, name: "ESLint" },
    ],
  },
  {
    title: "AI & Observability",
    items: [
      { icon: SiGithubcopilot, name: "GitHub Copilot" },
      { icon: TbRobot, name: "Claude AI" },
      { icon: TbRadar, name: "Datadog" },
    ],
  },
];

/* ================= COMPONENT ================= */

export default function ResumePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-10"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Jeeva Saravanan</h1>
          <p className="text-accent mt-2">
            Full Stack Engineer | React • Node • Scalable Systems
          </p>
        </div>

        <Tabs defaultValue="about" className="flex flex-col lg:flex-row gap-10">
          <TabsList className="flex flex-col w-full max-w-[260px] gap-4">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          <div className="w-full">
            <TabsContent value="about">
              <h2 className="text-3xl font-bold">{about.title}</h2>
              <p className="text-white/60 mt-4 max-w-2xl">
                {about.description}
              </p>

              <ul className="mt-6 space-y-2">
                {highlights.map((h, i) => (
                  <li key={i} className="text-accent">
                    ✔ {h}
                  </li>
                ))}
              </ul>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                {about.info.map((item, i) => (
                  <div key={i}>
                    <span className="text-white/50">{item.label}: </span>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="experience">
              <h2 className="text-3xl font-bold">Experience</h2>

              <ScrollArea className="h-[400px] mt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {experience.map((item, i) => (
                    <div key={i} className="bg-[#232329] p-5 rounded-xl">
                      <p className="text-accent">{item.duration}</p>
                      <h3>{item.position}</h3>
                      <p className="text-white/60">{item.company}</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="skills">
              <h2 className="text-3xl font-bold">Skills</h2>

              <div className="mt-8 space-y-10">
                {skills.map((group, i) => (
                  <div key={i}>
                    <h3 className="text-accent mb-3">{group.title}</h3>

                    <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                      {group.items.map((skill, idx) => (
                        <TooltipProvider key={idx}>
                          <Tooltip>
                            <TooltipTrigger className="h-[100px] bg-[#232329] flex items-center justify-center rounded-xl">
                              <skill.icon className="text-3xl" />
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

            <TabsContent value="education">
              <h2 className="text-3xl font-bold">Education</h2>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                {education.map((item, i) => (
                  <div key={i} className="bg-[#232329] p-5 rounded-xl">
                    <p className="text-accent">{item.duration}</p>
                    <h3>{item.degree}</h3>
                    <p className="text-white/60">{item.institution}</p>
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
