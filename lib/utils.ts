// Validate if a value is a string and doesn't exceed the given maximum length
export const validateString = (
  value: unknown,         // The value to be validated
  maxLength: number      // The maximum allowed length for the string
): value is string => {   // Type predicate indicating the validated value is a string
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

// Get an error message from an error object or unknown value
export const getErrorMessage = (error: unknown): string => {
  let message: string; // Placeholder for the error message

  if (error instanceof Error) {
    message = error.message; // If error is an instance of Error class, use its message
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message); // If error is an object with a 'message' property, convert it to string
  } else if (typeof error === "string") {
    message = error; // If error is already a string, use it as the message
  } else {
    message = "Something went wrong";
  }

  return message;
};
