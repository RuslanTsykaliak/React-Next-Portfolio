"use client"

import React, { useEffect, useState, createContext, useContext } from "react"

// Define theme type
type Theme = "light" | "dark"

// Define props for ThemeContextProvider
type ThemeContextProviderProps = {
  children: React.ReactNode
}

// Define the type for the ThemeContext
type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

// Create the ThemeContext
const ThemeContext = createContext<ThemeContextType | null>(null)

// ThemeContextProvider component
export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light")

  // Toggle theme function
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
      window.localStorage.setItem("theme", "dark")
      document.documentElement.classList.add("dark")
    } else {
      setTheme("light")
      window.localStorage.setItem("theme", "light")
      document.documentElement.classList.remove("dark")
    }
  }

  useEffect(() => {
    // Check for locally stored theme
    const localTheme = window.localStorage.getItem("theme") as Theme | null

    // Set theme based on local storage or system preference
    if (localTheme) {
      setTheme(localTheme)

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark")
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
      document.documentElement.classList.add("dark")
    }
  }, [])

  // Provide the theme context
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext)

  // Ensure the hook is used within a ThemeContextProvider
  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider")
  }

  return context
}
