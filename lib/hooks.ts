import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

// Custom hook that tracks whether a section is in the viewport and updates the active section context accordingly.
export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  // Get the reference and inView status using the react-intersection-observer library.
  const { ref, inView } = useInView({
    threshold,
  });

  // Access the active section context and its related functions.
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // Effect that runs when inView or timeOfLastClick changes.
  useEffect(() => {
    // Check if the section is in view and if enough time has passed since the last click.
    if (inView && Date.now() - timeOfLastClick > 1000) {
      // Set the active section in the context.
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  // Return the reference that needs to be attached to the section element.
  return {
    ref, inView // adding "inView"
  };
}

