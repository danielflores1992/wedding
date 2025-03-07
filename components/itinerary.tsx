"use client"

import { motion } from "framer-motion"

export default function Itinerary() {
  const events = [
    {
      time: "5:00 P.M.",
      title: "Ceremonia",
      description: "Unión de nuestro amor",
    },
    {
      time: "5:45 P.M. a 6:45 P.M.",
      title: "Cóctel de Bienvenida",
      description: "Brindis y aperitivos",
    },
    {
      time: "6:45 P.M.",
      title: "Recepción",
      description: "Encantados de compartir con ustedes",
    },
    {
      time: "7:00 P.M.",
      title: "Cena",
      description: "Disfrutemos de una deliciosa comida",
    },
    {
      time: "8:45 PM",
      title: "Baile",
      description: "Compartamos un momento de alegría",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-[#8a7f71] mb-4">Itinerario</h2>
          <p className="text-lg text-[#a39a8e] max-w-2xl mx-auto">Acompáñanos en cada momento de nuestra celebración</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {events.map((event, index) => (
            <TimelineEvent
              key={index}
              time={event.time}
              title={event.title}
              description={event.description}
              delay={index * 0.15}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface TimelineEventProps {
  time: string
  title: string
  description: string
  delay: number
  index: number
}

function TimelineEvent({ time, title, description, delay, index }: TimelineEventProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="mb-12 text-center"
    >
      <div className="inline-block bg-[#faf9f6] px-4 py-2 rounded-full border border-[#e9e4dd] mb-3">
        <span className="text-[#8a7f71] font-light">{time}</span>
      </div>
      <h3 className="text-xl md:text-2xl font-light text-[#8a7f71] mb-2">{title}</h3>
      <p className="text-[#a39a8e]">{description}</p>

      {index < 4 && <div className="w-px h-12 bg-[#e9e4dd] mx-auto mt-6"></div>}
    </motion.div>
  )
}

