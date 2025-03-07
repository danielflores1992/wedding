"use client"

import { motion } from "framer-motion"
import AnimatedFlower from "./animated-flower"

interface InvitationMainProps {
  weddingDate: Date
}

export default function InvitationMain({ weddingDate }: InvitationMainProps) {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.34, 1.56, 0.64, 1],
      },
    }),
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-4xl w-full mx-auto relative">
        {/* Decorative flowers */}
        <AnimatedFlower
          className="absolute -left-20 top-0 w-48 opacity-70 -rotate-12 pointer-events-none"
          delay={0.5}
        />
        <AnimatedFlower
          className="absolute -right-20 bottom-0 w-48 opacity-70 rotate-12 scale-x-[-1] pointer-events-none"
          delay={0.8}
        />

        {/* Main content */}
        <div className="text-center relative z-10">
          <motion.h1
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-5xl md:text-7xl font-light text-[#e6a55e] mb-4 tracking-wider"
          >
            LAURI
            <span className="block text-3xl md:text-4xl my-2 text-[#d88c6a]">&</span>
            SAÚL
          </motion.h1>

          <motion.h2
            custom={0.3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-2xl md:text-3xl font-light text-[#d88c6a] mt-12 mb-4"
          >
            ¡NOS CASAMOS!
          </motion.h2>

          <motion.p
            custom={0.5}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-lg md:text-xl text-[#8b9b8b] max-w-xl mx-auto my-8"
          >
            Y nos encantaría celebrar este día tan especial junto a ti!
          </motion.p>

          <motion.div
            custom={0.7}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-4xl md:text-5xl font-light text-[#e6a55e] my-12 flex justify-center items-center gap-4"
          >
            <span>23</span>
            <span className="text-2xl text-[#d88c6a]">|</span>
            <span>08</span>
            <span className="text-2xl text-[#d88c6a]">|</span>
            <span>2025</span>
          </motion.div>

          <motion.div
            custom={0.9}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-xl md:text-2xl text-[#8b9b8b] mt-8"
          >
            {/* <p className="mb-2">CEREMONIA: 5:00 P.M.</p>
            <p>RECEPCIÓN: 6:45 P.M.</p> */}
          </motion.div>

          <motion.div
            custom={1.1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-lg md:text-xl text-[#8b9b8b] mt-8"
          >
            {/* <p className="mb-1">HACIENDA TOVARES</p>
            <p>CADEREYTA, QUERÉTARO</p> */}
          </motion.div>

        
        </div>
      </div>
    </section>
  )
}

