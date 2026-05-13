"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3, type: "spring" }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Link
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-110 transition-all duration-300"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </Link>
    </motion.div>
  )
}
