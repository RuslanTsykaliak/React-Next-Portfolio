import Header from "@/components/header"
import "./globals.css"
import { Inter } from "next/font/google"
import ActiveSectionContextProvider from "@/context/active-section-context"
import Footer from "@/components/footer"
import ThemeSwitch from "@/components/theme-switch"
import ThemeContextProvider from "@/context/theme-context"
import { Toaster } from "react-hot-toast"

// Initialize the Inter font with the specified subsets
const inter = Inter({ subsets: ["latin"] })

// Metadata for the page
export const metadata = {
  title: "Ruslan Tsykaliak | Personal Portfolio",
  description: "Ruslan Tsykaliak is a full stack developer.",
}

// The main layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // HTML root element with language set to English and class for smooth scrolling
    <html lang="en" className="!scroll-smooth">
      <body
        // Body element with background and text color classes, including dynamic dark mode classes
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* Background circle for a decorative effect */}
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>

        {/* Another background circle */}
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        {/* Theme and active section context providers */}
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {/* Header component */}
            <Header />

            {/* Render the main content */}
            {children}

            {/* Footer component */}
            <Footer />

            {/* Toastr notifications at the top right */}
            <Toaster position="top-right" />

            {/* Theme switcher */}
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
