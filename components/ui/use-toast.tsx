"use client"

import { useState, useEffect } from "react"

interface Toast {
  id: string
  title: string
  description?: string
  duration?: number
}

interface ToastOptions {
  title: string
  description?: string
  duration?: number
}

export function toast(options: ToastOptions) {
  const event = new CustomEvent("toast", { detail: options })
  document.dispatchEvent(event)
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (options: ToastOptions) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = { id, ...options }
    setToasts((prev) => [...prev, newToast])

    if (options.duration !== Number.POSITIVE_INFINITY) {
      setTimeout(() => {
        removeToast(id)
      }, options.duration || 3000)
    }
  }

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  useEffect(() => {
    const handleToast = (event: Event) => {
      const customEvent = event as CustomEvent<ToastOptions>
      addToast(customEvent.detail)
    }

    document.addEventListener("toast", handleToast)
    return () => document.removeEventListener("toast", handleToast)
  }, [])

  return { toasts, addToast, removeToast }
}

