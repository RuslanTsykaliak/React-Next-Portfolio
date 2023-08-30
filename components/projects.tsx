"use client"

import React from "react"
import SectionHeading from "./section-heading"
import { projectsData } from "@/lib/data"
import Project from "./project"
import { useSectionInView } from "@/lib/hooks"

// Define the Projects component
export default function Projects() {
  // Use the useSectionInView hook to track section visibility with a threshold of 0.5
  const { ref } = useSectionInView("Projects", 0.5);

  // Render the Projects section
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      {/* Display the section heading */}
      <SectionHeading>My projects</SectionHeading>
      
      {/* Render the list of projects */}
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
