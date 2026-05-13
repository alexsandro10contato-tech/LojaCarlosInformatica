"use client"

import { motion } from "framer-motion"
import { Instagram as InstagramIcon, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Instagram() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-wide uppercase">
            Redes Sociais
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Siga-nos no Instagram
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Acompanhe nosso dia a dia, dicas de tecnologia e novidades.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card border border-border rounded-3xl p-8 text-center"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
            <InstagramIcon className="w-10 h-10 text-primary-foreground" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">@carlosinformatica</h3>
          <p className="text-muted-foreground mb-6">
            Confira nossos posts, stories e fique por dentro das novidades do mundo tech.
          </p>
          <Link
            href="https://instagram.com/carlosinformatica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <InstagramIcon className="w-5 h-5" />
            Seguir no Instagram
            <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
