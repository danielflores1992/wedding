"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function EventDetails() {
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
    <section className="py-20 bg-[#faf9f6] relative">
      {/* Elegant floral element */}
      <div className="absolute left-0 top-1/4 w-32 h-64 opacity-50 pointer-events-none">
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-[#8a7f71] mb-4">Detalles del Evento</h2>
          <p className="text-lg text-[#a39a8e] max-w-2xl mx-auto">
            Nos encantaría que nos acompañes en este día tan especial para nosotros
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-sm border border-[#e9e4dd]"
          >
            <h3 className="text-2xl font-light text-[#8a7f71] mb-4 text-center">Ceremonia</h3>
            <div className="space-y-4 text-center">
              <p className="text-[#a39a8e]">23 de Agosto, 2025</p>
              <p className="text-[#a39a8e]">5:00 PM</p>
              <p className="text-[#a39a8e]">Hacienda Tovares</p>
              <p className="text-[#a39a8e]">Cadereyta, Querétaro</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-sm border border-[#e9e4dd]"
          >
            <h3 className="text-2xl font-light text-[#8a7f71] mb-4 text-center">Recepción</h3>
            <div className="space-y-4 text-center">
              <p className="text-[#a39a8e]">23 de Agosto, 2025</p>
              <p className="text-[#a39a8e]">6:00 PM</p>
              <p className="text-[#a39a8e]">Hacienda Tovares</p>
              <p className="text-[#a39a8e]">Cadereyta, Querétaro</p>
            </div>
          </motion.div>

            <motion.div
            custom={1.3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-base md:text-lg text-[#8b9b8b] mt-12 text-center"
            >
            <p className="mb-1">DRESS CODE: FORMAL</p>
            <p><strong>SÓLO ADULTOS</strong></p>
            </motion.div>
        </div>
      </div>
    </section>
  )
}

