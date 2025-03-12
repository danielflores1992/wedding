"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Check } from "lucide-react"
import Image from "next/image"

export default function RSVPSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission process
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Open Google Forms in a new tab
      window.open("https://forms.gle/RjxbM91EXFzYLo3i8", "_blank")

      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
        setName("")
        setEmail("")
      }, 3000)
    }, 1000)
  }

  return (
    <section className="py-20 bg-[#faf9f6] relative overflow-hidden">
      {/* Elegant floral element */}
      <div className="absolute left-0 top-1/3 w-32 h-64 opacity-50 pointer-events-none">
        <Image
          src="/elegant-floral-3.png"
          alt="Elegant floral element"
          width={128}
          height={256}
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light text-[#55104d] mb-4">Confirma tu Asistencia</h2>
          <p className="text-lg text-[#a39a8e] max-w-2xl mx-auto">
            Nos encantaría contar con tu presencia en nuestro día especial
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto bg-white rounded-lg shadow-sm overflow-hidden border border-[#e9e4dd]"
        >
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">            
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full flex items-center justify-center px-6 py-3 rounded-full transition-colors ${
                  isSuccess ? "bg-[#8b9b8b] text-white" : "bg-[#55104d] text-white hover:bg-[#776c5f]"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Enviando...
                  </span>
                ) : isSuccess ? (
                  <span className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    ¡Enviado!
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Confirmar Asistencia
                  </span>
                )}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-[#a39a8e]">
              <p>
                Al hacer clic en "Confirmar Asistencia", serás redirigido a un formulario para completar tu
                confirmación.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

