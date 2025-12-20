import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// ✅ Load Google Fonts with next/font for performance
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "Aryaman Prasad - Full-Stack Developer",
  description:
    "Intern | Full-Stack Developer | MERN | Next.js - Portfolio showcasing innovative web applications and AI-integrated solutions",
  generator: "Next.js",
}

// ✅ Root Layout Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable}`}
      suppressHydrationWarning // ✅ Prevent hydration mismatch warnings
    >
      <body className="font-sans antialiased">
        {/* ✅ ThemeProvider handles dark/light mode dynamically */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
