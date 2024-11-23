import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { FaReact } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"
import corpcommentImg from "@/public/corpcomment.png"
import rmtdevImg from "@/public/rmtdev.png"
import wordanalyticsImg from "@/public/wordanalytics.png"

// Array of navigation links
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
  {
    name: "Blog",
    hash: "https://next-js-14-news-blog.vercel.app",
  }
] as const

// Array of experience data
export const experiencesData = [
  {
    title: "freeCodeCamp",
    location: "Remote",
    description: "Completed many a full-stack web development courses, where I learned the fundamentals of JavaScript, HTML, CSS, React, Node.js, and more.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Front-End Developer",
    location: "Remote",
    description: "Developed and maintained user-facing web applications using React, Redux, and Next.js.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Lviv, Ukraine",
    description: "Currently working as a full-stack developer, where I am responsible for the entire development lifecycle of web applications. I have experience with all aspects of web development, including front-end, back-end.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;


// Array of project data
export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

// Array of skills
export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "PHP",
  "Symnfony",
  "Framer Motion",
  "React Native",
  "Expo",
] as const;
