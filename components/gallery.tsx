"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Imágenes de ejemplo (reemplazar con las reales)
  const images = [
    "/img/img1.jpg?height=600&width=800",
    "/img/img2.jpg?height=600&width=800",
    "/img/img3.jpg?height=600&width=800",    
    "/img/img5.jpg?height=600&width=800",        
    "/img/img8.jpg?height=600&width=800",
    "/img/img9.jpg?height=600&width=800",
    "/img/img10.jpg?height=600&width=800",
    "/img/img11.jpg?height=600&width=800",
    "/img/img12.jpg?height=600&width=800",
    "/img/img13.jpg?height=600&width=800",
    "/img/img14.jpg?height=600&width=800",
    "/img/img15.jpg?height=600&width=800",
    "/img/img16.jpg?height=600&width=800",
    "/img/img17.jpg?height=600&width=800",
    "/img/img18.jpg?height=600&width=800",
    "/img/img19.jpg?height=600&width=800",
  ]


  return (
    <section className="py-20 bg-[#faf9f6]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light text-[#55104d] mb-4">Galería de Fotos</h2>          
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {images.map((src, index) => (
            <GalleryItem
              key={index}
              src={src}
              index={index}
              delay={index * 0.1}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>
      </div>

      {/* Modal para ver imagen ampliada */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <button className="absolute top-4 right-4 text-white" onClick={() => setSelectedImage(null)}>
            <X className="h-8 w-8" />
          </button>

          <div className="relative w-full max-w-4xl max-h-[80vh]">
            <Image
              src={images[selectedImage] || "/placeholder.svg"}
              alt={`Foto ${selectedImage + 1}`}
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}

interface GalleryItemProps {
  src: string
  index: number
  delay: number
  onClick: () => void
}

function GalleryItem({ src, index, delay, onClick }: GalleryItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-300 border border-[#e9e4dd]"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={src || "/placeholder.svg"}
          alt={`Foto ${index + 1}`}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </motion.div>
  )
}

