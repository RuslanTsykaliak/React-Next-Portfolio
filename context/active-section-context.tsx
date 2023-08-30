"use client";

import type { SectionName } from "@/lib/types";
import React, { useState, createContext, useContext } from "react";

// Define props for ActiveSectionContextProvider
type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

// Define the type for the ActiveSectionContext
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

// Create the ActiveSectionContext
export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

// ActiveSectionContextProvider component
export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // We need to keep track of this to disable the observer temporarily when user clicks on a link

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

// Custom hook to use the active section context
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  // Ensure the hook is used within an ActiveSectionContextProvider
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
