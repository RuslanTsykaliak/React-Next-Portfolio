"use client"

import React from "react"
import SectionHeading from "./section-heading"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { experiencesData } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"
import { useTheme } from "@/context/theme-context"

// Experience component
export default function Experience() {
  // Use the useSectionInView hook to track if the section is in view
  const { ref, inView } = useSectionInView("Experience")

  // Use the useTheme hook to access the current theme
  const { theme } = useTheme()

  // Make experience visible
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  return (
    // Experience section
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      {/* Display the section heading */}
      <SectionHeading>My experience</SectionHeading>

      {/* Vertical timeline for displaying experiences */}
      <VerticalTimeline lineColor="">
        {/* Map through experiencesData array and create timeline elements */}
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            {/* Individual timeline element */}
            <VerticalTimelineElement
            visible={isVisible} // add to make visible with next.js 14
              contentStyle={{
                // Set content background color based on theme
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                // Set content arrow color based on theme
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                // Set icon background color and font size based on theme
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              {/* Display experience details */}
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}
