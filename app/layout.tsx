import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Cormorant_Garamond, Montserrat } from "next/font/google"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-cormorant",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Lauri & Saúl - Invitación de Boda",
  description: "Te invitamos a celebrar nuestro día especial"   
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${cormorant.variable} ${montserrat.variable} font-serif`}>{children}</body>
    </html>
  )
}



import './globals.css'