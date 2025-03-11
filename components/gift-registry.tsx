"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, Check } from "lucide-react"

export default function GiftRegistry() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light text-[#55104d] mb-4">Mesa de Regalos</h2>
          <p className="text-lg text-[#86895d] max-w-2xl mx-auto">
            Tu presencia es nuestro mejor regalo, pero si deseas obsequiarnos algo más, aquí te dejamos algunas opciones
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <BankCard
            bank="Banco Nacional"
            accountNumber="1234 5678 9012 3456"
            clabe="012 345 678 901 234 567"
            beneficiary="Lauri & Saúl"
            delay={0.2}
          />

          <BankCard
            bank="Banco Internacional"
            accountNumber="9876 5432 1098 7654"
            clabe="987 654 321 098 765 432"
            beneficiary="Lauri & Saúl"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  )
}

interface BankCardProps {
  bank: string
  accountNumber: string
  clabe: string
  beneficiary: string
  delay: number
}

function BankCard({ bank, accountNumber, clabe, beneficiary, delay }: BankCardProps) {
  const [copiedAccount, setCopiedAccount] = useState(false)
  const [copiedClabe, setCopiedClabe] = useState(false)

  const copyToClipboard = (text: string, type: "account" | "clabe") => {
    navigator.clipboard.writeText(text)
    if (type === "account") {
      setCopiedAccount(true)
      setTimeout(() => setCopiedAccount(false), 2000)
    } else {
      setCopiedClabe(true)
      setTimeout(() => setCopiedClabe(false), 2000)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-[#faf9f6] p-8 rounded-lg shadow-sm border border-[#e9e4dd]"
    >
      <h3 className="text-xl font-light text-[#8a7f71] mb-6 text-center">{bank}</h3>

      <div className="space-y-6">
        <div>
          <p className="text-sm text-[#86895d] mb-2">Número de Cuenta:</p>
          <div className="flex items-center justify-between">
            <p className="text-[#8a7f71]">{accountNumber}</p>
            <button
              onClick={() => copyToClipboard(accountNumber, "account")}
              className="text-[#8a7f71] hover:text-[#86895d] transition-colors"
            >
              {copiedAccount ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div>
          <p className="text-sm text-[#86895d] mb-2">CLABE:</p>
          <div className="flex items-center justify-between">
            <p className="text-[#8a7f71]">{clabe}</p>
            <button
              onClick={() => copyToClipboard(clabe, "clabe")}
              className="text-[#8a7f71] hover:text-[#86895d] transition-colors"
            >
              {copiedClabe ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div>
          <p className="text-sm text-[#86895d] mb-2">Beneficiario:</p>
          <p className="text-[#8a7f71]">{beneficiary}</p>
        </div>
      </div>
    </motion.div>
  )
}

