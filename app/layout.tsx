import type React from "react"
import type { Metadata } from "next"
import { Inter, Bubblegum_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const bubblegum = Bubblegum_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bubblegum",
})

export const metadata: Metadata = {
  title: "HIGH Preschool",
  description: "Where little minds soar to new heights",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bubblegum.variable} font-sans`}>
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-100 to-blue-50">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}



import './globals.css'