"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import CountdownTimer from "./countdown-timer"

interface HeroSectionProps {
  weddingDate: Date
}

export default function HeroSection({ weddingDate }: HeroSectionProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Fondo con efecto parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          transform: `translateY(${scrollY * 0.5}px)`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      </div>

      <div className="container relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-light text-white mb-2">¡Nos casamos!</h2>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">Lauri & Saúl</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto italic">
            Hay momentos en la vida que son muy especiales por sí solos, pero al compartirlos con personas tan
            especiales como tú se convierten en momentos imposibles de olvidar
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8"
        >
          <CountdownTimer targetDate={weddingDate} />
        </motion.div>
      </div>
    </section>
  )
}

