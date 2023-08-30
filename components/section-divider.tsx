"use client";

import React from "react";
import { motion } from "framer-motion";

// Define the SectionDivider component
export default function SectionDivider() {
  // Render the section divider
  return (
    <motion.div
      className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }} // Initial animation properties
      animate={{ opacity: 1, y: 0 }} // Animation properties
      transition={{ delay: 0.125 }} // Transition properties
    ></motion.div>
  );
}
