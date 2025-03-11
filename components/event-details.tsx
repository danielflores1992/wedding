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
      



      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-[#55104d] mb-4">Detalles del Evento</h2>
          <p className="text-lg text-[#86895d] max-w-2xl mx-auto">
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
            <h3 className="text-2xl font-light text-[#55104d] mb-4 text-center">Ceremonia</h3>
            <div className="flex items-center space-x-4">
              <Image
              src="/elegant-floral-3.png"
              alt="Elegant floral element"
              width={128}
              height={256}
              className="object-contain"
              />
              <div className="space-y-4 text-left">
              <p className="text-[#86895d]">23 de Agosto, 2025</p>
              <p className="text-[#86895d]">5:00 PM</p>
              <p className="text-[#86895d]">Hacienda Tovares</p>
              <p className="text-[#86895d]">Cadereyta, Querétaro</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-sm border border-[#e9e4dd]"
          >
            <h3 className="text-2xl font-light text-[#55104d] mb-4 text-center">Recepción</h3>
            <div className="space-y-4 text-center">
              <p className="text-[#86895d]">23 de Agosto, 2025</p>
              <p className="text-[#86895d]">6:00 PM</p>
              <p className="text-[#86895d]">Hacienda Tovares</p>
              <p className="text-[#86895d]">Cadereyta, Querétaro</p>
              <a
                href="https://drive.google.com/file/d/10AUg41hy-olS3NexM-oDtocb26j2FafP/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-1 bg-[#55104d] text-white rounded-lg shadow-md hover:bg-[#7a6f64] transition-colors duration-300 mr-4"
              >
                ¡Conoce los paquetes!
              </a>
              <a
                href="tel:+524411391996"
                className="inline-block mt-4 px-4 py-1 bg-[#55104d] text-white rounded-lg shadow-md hover:bg-[#7a6f64] transition-colors duration-300"
              >
                ¡Reserva tu lugar!
              </a>


            </div>
          </motion.div>

          <motion.div
            custom={1.3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-base md:text-lg text-[#8b9b8b] mt-15 text-center bg-white p-8 rounded-lg shadow-sm border border-[#e9e4dd]"
          >
            <p className="text-2xl font-light text-[#55104d] mb-4 text-center">DRESS CODE: FORMAL</p>
            <p className="text-center text-[#8a7f71]"><strong>SÓLO ADULTOS</strong></p>
            <Image
              src="/dresscode.png"
              alt="Dress code formal"
              width={200}
              height={200}
              className="mx-auto mt-4"
            />

          </motion.div>
          
        </div>
      </div>
    </section>
  )
}

