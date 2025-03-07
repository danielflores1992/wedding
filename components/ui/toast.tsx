"use client"

import type React from "react"

import { X } from "lucide-react"
import { useToast } from "./use-toast"
import { motion, AnimatePresence } from "framer-motion"

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const { toasts, removeToast } = useToast()

  return (
    <>
      {children}
      <div className="fixed bottom-0 right-0 p-4 w-full md:max-w-sm z-50 flex flex-col gap-2">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 flex items-start"
            >
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{toast.title}</h3>
                {toast.description && <p className="text-sm text-gray-500 mt-1">{toast.description}</p>}
              </div>
              <button onClick={() => removeToast(toast.id)} className="ml-4 text-gray-400 hover:text-gray-500">
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  )
}

