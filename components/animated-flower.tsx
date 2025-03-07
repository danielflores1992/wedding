"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface AnimatedFlowerProps {
  className?: string
  delay?: number
}

export default function AnimatedFlower({ className = "", delay = 0 }: AnimatedFlowerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 0.8 }}
      transition={{
      duration: 1.5,
      delay,
      ease: [0.34, 1.56, 0.64, 1],
      }}
      className={className}
    >
      <Image
      src="/flores.png"
      alt="Watercolor flowers"
      width={300}
      height={400}
      className="object-contain"
      />
    </motion.div>
  )
}

