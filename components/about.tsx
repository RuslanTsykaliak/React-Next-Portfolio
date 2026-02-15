"use client"

import React from "react"
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"

// About component
export default function About() {
  // Use the useSectionInView hook to track if the section is in view
  const { ref } = useSectionInView("About")

  return (
    // Animate the section using framer-motion
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      {/* Display the section heading */}
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        I am a <span className="font-medium">lifelong learner</span> with a strong
        <span className="font-medium"> obsession over quality</span>. I value delivering
        <span className="font-medium"> high-quality work</span> and take pride in solving complex problems with precision and care.
      </p>

      <p className="mb-3">
        My technical expertise spans a diverse stack, including
        <span className="font-medium"> Java, TypeScript, React, Next.js, Node.js, Python, Perl, PHP, Shell scripting</span>, and
        <span className="font-medium"> Linux/Unix systems</span>. I specialize in building secure, scalable, and cloud-native applications, with a focus on
        <span className="italic"> cybersecurity and automation</span>.
      </p>

      <p>
        <span className="italic">Outside of work</span>, I enjoy
        <span className="font-medium">reading, watching YouTube, exercising</span>, and
        <span className="font-medium"> helping others</span>. These activities keep me grounded and motivated to continuously grow both personally and professionally.
      </p>
    </motion.section>
  )
}
