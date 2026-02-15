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
    title: "Full-Stack Developer | Security Team",
    location: "AT&T, Middletown, NJ",
    description: "Design and develop secure systems and applications with a focus on cybersecurity, automation, and SOX compliance. Utilize Perl, Shell scripting, PL/SQL, and PHP to enhance system resilience and streamline security operations.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2025 - Present",
  },
  {
    title: "Java Software Engineer",
    location: "Revature, United States",
    description: "Built RESTful APIs using Java and Spring Boot, employing TDD practices to ensure high code quality. Focused on API performance optimization and robust backend development.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2025 - Jul 2025",
  },
  {
    title: "Full-Stack Developer",
    location: "Freelance, Remote",
    description: "Developed SaaS applications for SMBs using React, Next.js, Node.js, and PHP. Implemented containerized systems with Docker and Kubernetes to enhance scalability and reliability.",
    icon: React.createElement(FaReact),
    date: "May 2022 - Jul 2025",
  },
  {
    title: "Customer Service Specialist | Web Hosting & cPanel/WHM",
    location: "Namecheap, Inc., Ukraine",
    description: "Provided technical support for hosting environments, authored deployment guides, and automated server tasks using Bash. Specialized in troubleshooting WordPress, Django, and server configurations.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2022 - Jun 2024",
  },
  {
    title: "Owner | Technical Lead",
    location: "Self-employed, Ukraine",
    description: "Operated a technology repair business, specializing in diagnostics, automation, and data integrity. Built PHP/MySQL systems to optimize workflows and managed all aspects of the business.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2016 - Mar 2022",
  },
] as const;


// Array of project data
export const projectsData = [
  {
    title: "CorpComment",
    description:
      "As a full stack developer, I contributed to this startup project for 2 years. The platform enables users to provide public feedback to companies, fostering transparency and accountability.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "A job board tailored for remote developer jobs. As the front-end developer, I implemented features like filtering, sorting, and pagination to enhance user experience.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app designed for quick text analytics. It provides insights such as word count, character count, and social media post limits, making it a handy tool for content creators.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

// Array of skills
export const skillsData = [
  "Java",
  "Python",
  "PHP",
  "Perl",
  "Shell",
  "PL/SQL",
  "Docker",
  "Kubernetes",
  "Linux",
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "HTML",
  "CSS",
  "React Native",
  "Expo",
] as const;
