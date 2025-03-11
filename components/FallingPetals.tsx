"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface Petal {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  opacity: number
  speed: number
}

interface FallingPetalsProps {
  color?: string
  quantity?: number
}

const FallingPetals: React.FC<FallingPetalsProps> = ({ color = "#FFB7C5", quantity = 20 }) => {
  const [petals, setPetals] = useState<Petal[]>([])
  const animationRef = useRef<number>()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const createPetal = (): Petal => ({
      id: Math.random(),
      x: Math.random() * (containerRef.current?.clientWidth || window.innerWidth),
      y: -20,
      size: Math.random() * 15 + 5,
      rotation: Math.random() * 360,
      opacity: Math.random() * 0.5 + 0.3,
      speed: Math.random() * 2 + 1,
    })

    const initialPetals = Array.from({ length: quantity }, createPetal)
    setPetals(initialPetals)

    const animatePetals = () => {
      setPetals((prevPetals) =>
        prevPetals.map((petal) => {
          petal.y += petal.speed
          petal.rotation += 0.5
          if (petal.y > (containerRef.current?.clientHeight || window.innerHeight)) {
            return createPetal()
          }
          return petal
        }),
      )
      animationRef.current = requestAnimationFrame(animatePetals)
    }

    animationRef.current = requestAnimationFrame(animatePetals)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [quantity])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-10" style={{ overflow: "hidden" }}>
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            width: petal.size,
            height: petal.size,
            backgroundColor: color,
            borderRadius: "50% 0 50% 50%",
            top: petal.y,
            left: petal.x,
            opacity: petal.opacity,
            rotate: petal.rotation,
          }}
          animate={{
            y: petal.y,
            rotate: petal.rotation,
          }}
          transition={{
            type: "tween",
            duration: 0.1,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

export default FallingPetals

