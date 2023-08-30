"use client"

import React from "react"
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"
import { sendEmail } from "@/actions/sendEmail"
import SubmitBtn from "./submit-btn"
import toast from "react-hot-toast"

// Contact component
export default function Contact() {
  // Use the useSectionInView hook to track if the section is in view
  const { ref } = useSectionInView("Contact");

  return (
    // Framer-motion animation for the contact section
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      {/* Display the section heading */}
      <SectionHeading>Contact me</SectionHeading>

      {/* Contact information */}
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:ruslan.tsykaliak@gmail.com">
          ruslan.tsykaliak@gmail.com
        </a>{' '}
        or through this form.
      </p>

      {/* Email form */}
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          // Display error toast if there's an issue with sending the email
          if (error) {
            toast.error(error);
            return;
          }

          // Display success toast if the email is sent successfully
          toast.success("Email sent successfully!");
        }}
      >
        {/* Email input */}
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        
        {/* Message textarea */}
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        
        {/* Submit button */}
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
