"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface AnimatedFlowerRightProps {
  className?: string
  delay?: number
}


export default function AnimatedFlowerRight({ className = "", delay = 0 }: AnimatedFlowerRightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 0.7 }}
      transition={{
      duration: 1.5,
      delay,
      ease: [0.34, 1.56, 0.64, 1],
      }}
      className={className}
    >
      <Image
      src="/flores-right.png"
      alt="Watercolor flowers"
      width={300}
      height={400}
      className="object-contain"
      />
    </motion.div>
  )
}

