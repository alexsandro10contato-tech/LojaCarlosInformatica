"use client"

import { motion } from "framer-motion"
import { MapPin, Navigation } from "lucide-react"
import Link from "next/link"

export function Location() {
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
            Localização
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Onde Estamos
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Visite nossa loja e conheça nossa estrutura de atendimento.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-3xl overflow-hidden border border-border"
        >
          <div className="grid lg:grid-cols-3">
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Nosso Endereço</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Rua Exemplo, 123
                <br />
                Centro - Cidade - UF
                <br />
                CEP: 00000-000
              </p>
              <Link
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                <Navigation className="w-4 h-4" />
                Abrir no Google Maps
              </Link>
            </div>
            <div className="lg:col-span-2 h-80 lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976055762897!2d-46.65390908502172!3d-23.56117798468098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Carlos Informática"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
