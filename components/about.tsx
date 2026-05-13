"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

const highlights = [
  "Mais de 10 anos de experiência no mercado",
  "Equipe técnica certificada e especializada",
  "Atendimento personalizado para cada cliente",
  "Compromisso com qualidade e transparência",
  "Garantia em todos os serviços realizados",
  "Estoque completo de peças e componentes",
]

export function About() {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="Carlos Informática"
                fill
                className="object-contain p-8 bg-card"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-bold">10+</div>
              <div className="text-sm opacity-90">Anos de Experiência</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium tracking-wide uppercase">
              Sobre Nós
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Carlos Informática
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-pretty">
              A Carlos Informática nasceu da paixão pela tecnologia e do desejo de
              oferecer soluções de qualidade em assistência técnica. Ao longo de mais
              de uma década, construímos uma reputação sólida baseada em competência,
              honestidade e compromisso com nossos clientes.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
              Nossa equipe de técnicos especializados está preparada para resolver
              qualquer problema, desde manutenções simples até reparos complexos.
              Trabalhamos com transparência, oferecendo orçamentos detalhados e
              garantia em todos os serviços.
            </p>

            <div className="mt-8 space-y-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
