"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import Link from "next/link"

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    value: "(00) 0000-0000",
    link: "tel:+5500000000000",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "(00) 00000-0000",
    link: "https://wa.me/5500000000000",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "contato@carlosinformatica.com.br",
    link: "mailto:contato@carlosinformatica.com.br",
  },
  {
    icon: MapPin,
    title: "Endereço",
    value: "Rua Exemplo, 123 - Centro, Cidade - UF",
    link: "https://maps.google.com",
  },
]

const hours = [
  { day: "Segunda a Sexta", time: "08:00 - 18:00" },
  { day: "Sábado", time: "08:00 - 12:00" },
  { day: "Domingo", time: "Fechado" },
]

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wide uppercase">
            Fale Conosco
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Entre em Contato
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você. Entre em contato pelos nossos canais.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.value}</p>
                </div>
              </Link>
            ))}
          </motion.div>

          {/* Hours & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-card p-8 rounded-2xl border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Horário de Funcionamento
                </h3>
              </div>
              <div className="space-y-4">
                {hours.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between pb-3 border-b border-border last:border-0 last:pb-0"
                  >
                    <span className="text-foreground">{item.day}</span>
                    <span className="text-muted-foreground font-medium">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-primary text-primary-foreground p-6 rounded-2xl text-center hover:bg-primary/90 transition-colors group"
            >
              <MessageCircle className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-xl font-semibold mb-1">Solicite um Orçamento</h3>
              <p className="text-primary-foreground/80 text-sm">
                Clique aqui para falar conosco pelo WhatsApp
              </p>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
