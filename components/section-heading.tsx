import React from "react";

// Define props for SectionHeading
type SectionHeadingProps = {
  children: React.ReactNode;
};

// Define the SectionHeading component
export default function SectionHeading({ children }: SectionHeadingProps) {
  // Render the section heading
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {children}
    </h2>
  );
}
