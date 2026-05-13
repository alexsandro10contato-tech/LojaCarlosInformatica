"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const quickLinks = [
  { name: "Início", href: "#inicio" },
  { name: "Serviços", href: "#servicos" },
  { name: "Diferenciais", href: "#diferenciais" },
  { name: "Galeria", href: "#galeria" },
  { name: "Avaliações", href: "#avaliacoes" },
  { name: "Sobre", href: "#sobre" },
  { name: "Contato", href: "#contato" },
]

const services = [
  "Assistência Técnica",
  "Manutenção de Impressoras",
  "Upgrade de Hardware",
  "Formatação",
  "Limpeza Técnica",
  "Redes e Internet",
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Image
              src="/images/logo.png"
              alt="Carlos Informática"
              width={160}
              height={50}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Soluções completas em assistência técnica e manutenção de computadores,
              notebooks e impressoras.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://instagram.com/carlosinformatica"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://facebook.com/carlosinformatica"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-background/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                (00) 0000-0000
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                contato@carlosinformatica.com.br
              </li>
              <li className="flex items-start gap-3 text-background/70 text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                Rua Exemplo, 123 - Centro, Cidade - UF
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Carlos Informática. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
