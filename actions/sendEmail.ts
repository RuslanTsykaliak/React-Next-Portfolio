"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

// Initialize Resend with the provided API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Function to send an email using Resend
export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // Simple server-side validation for senderEmail and message
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    // Use the Resend API to send an email
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "ruslan.tsykaliak@gmail.com",  // Your https://resend.com/ email
      subject: "Message from contact form",
      // text: "Hello world!"
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    // Handle errors and return an error message
    return {
      error: getErrorMessage(error),
    };
  }

  // Return the sent email data
  return {
    data,
  };
};