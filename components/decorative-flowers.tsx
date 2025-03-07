"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function DecorativeFlowers() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const flowers = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-04%20at%203.39.56%20PM%20%282%29-1s2p6SBRsNSGobRaxuL5q6XMMBsDjs.jpeg",
      top: "10%",
      left: "-5%",
      delay: 0,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-04%20at%203.39.56%20PM%20%282%29-1s2p6SBRsNSGobRaxuL5q6XMMBsDjs.jpeg",
      top: "30%",
      right: "-5%",
      delay: 0.2,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-04%20at%203.39.56%20PM%20%282%29-1s2p6SBRsNSGobRaxuL5q6XMMBsDjs.jpeg",
      top: "50%",
      left: "-5%",
      delay: 0.4,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-04%20at%203.39.56%20PM%20%282%29-1s2p6SBRsNSGobRaxuL5q6XMMBsDjs.jpeg",
      top: "70%",
      right: "-5%",
      delay: 0.6,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-04%20at%203.39.56%20PM%20%282%29-1s2p6SBRsNSGobRaxuL5q6XMMBsDjs.jpeg",
      top: "90%",
      left: "-5%",
      delay: 0.8,
    },
  ]

  return (
    <>
      {flowers.map((flower, index) => (
        <div
          key={index}
          className="fixed pointer-events-none z-10"
          style={{
            top: flower.top,
            left: flower.left,
            right: flower.right,
            opacity: Math.min(1, Math.max(0, (scrollY - window.innerHeight * index * 0.2) / 500)),
            transform: `translateY(${Math.max(0, scrollY * 0.1 - window.innerHeight * index * 0.02)}px)`,
            transition: "opacity 0.5s ease, transform 0.5s ease",
            transitionDelay: `${flower.delay}s`,
          }}
        >
          <Image
            src={flower.src || "/placeholder.svg"}
            alt="Flor decorativa"
            width={150}
            height={150}
            className="object-contain opacity-30"
          />
        </div>
      ))}
    </>
  )
}

