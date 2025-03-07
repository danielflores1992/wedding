"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import AnimatedFlower from "./animated-flower"

interface CountdownTimerProps {
  targetDate: Date
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <AnimatedFlower
        className="absolute left-0 top-1/2 -translate-y-1/2 w-32 opacity-50 pointer-events-none"
        delay={0.2}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-light text-[#d88c6a] mb-8">
            Contando los días para celebrar juntos
          </h2>
        </motion.div>

        <div className="flex justify-center gap-4 md:gap-8 text-center">
          <TimeUnit value={timeLeft.days} label="Días" delay={0.2} />
          <TimeUnit value={timeLeft.hours} label="Horas" delay={0.4} />
          <TimeUnit value={timeLeft.minutes} label="Minutos" delay={0.6} />
          <TimeUnit value={timeLeft.seconds} label="Segundos" delay={0.8} />
        </div>
      </div>
    </section>
  )
}

function TimeUnit({ value, label, delay }: { value: number; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <div className="w-16 md:w-24 h-16 md:h-24 flex items-center justify-center bg-[#fff9f2] border border-[#f3d5b5] rounded-lg mb-2">
        <span className="text-2xl md:text-4xl font-light text-[#e6a55e]">{value}</span>
      </div>
      <span className="text-sm md:text-base text-[#8b9b8b]">{label}</span>
    </motion.div>
  )
}

