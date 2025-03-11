"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

export default function LocationMap() {
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
          <h2 className="text-3xl md:text-4xl font-light text-[#55104d] mb-4">Ubicación</h2>
          <p className="text-lg text-[#86895d] max-w-2xl mx-auto">
            Te esperamos en este hermoso lugar para celebrar juntos
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-sm overflow-hidden max-w-4xl mx-auto border border-[#e9e4dd]"
        >
          <div className="aspect-video relative">
            {/* Aquí iría el iframe de Google Maps, por ahora usamos un placeholder */}
            <div className="absolute inset-0 bg-[#f5f2ee] flex items-center justify-center">
              <MapPin className="h-16 w-16 text-[#d1c9be]" />
            </div>

            {/* Ejemplo de cómo sería con Google Maps */}
            {/* 
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-99.1234567!3d19.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzM0LjQiTiA5OcKwMDcnMzQuNCJX!5e0!3m2!1ses-419!2smx!4v1234567890!5m2!1ses-419!2smx" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            */}
            </div>
            <div className="p-8 text-center"></div>

          <div className="p-8 text-center">
            <h3 className="text-xl font-light text-[#8a7f71] mb-2">Hacienda Tovares</h3>
            <p className="text-[#86895d] mb-4">Cadereyta, Querétaro</p>

            <a 
              href="https://maps.app.goo.gl/TN16Rme6r4SmaM65A?g_st=com.google.maps.preview.copy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#8a7f71] text-white rounded-full hover:bg-[#776c5f] transition-colors"
            >
              Cómo llegar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

