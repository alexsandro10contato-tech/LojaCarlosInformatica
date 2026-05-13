"use client"

import { motion } from "framer-motion"
import { Clock, Users, Shield, Package } from "lucide-react"

const differentials = [
  {
    icon: Clock,
    title: "Atendimento Rápido",
    description: "Diagnóstico em até 24 horas e prioridade para urgências.",
    number: "01",
  },
  {
    icon: Users,
    title: "Técnicos Especializados",
    description: "Equipe certificada com anos de experiência no mercado.",
    number: "02",
  },
  {
    icon: Shield,
    title: "Garantia nos Serviços",
    description: "Todos os serviços possuem garantia de 90 dias.",
    number: "03",
  },
  {
    icon: Package,
    title: "Peças à Pronta Entrega",
    description: "Estoque completo de peças para reparo imediato.",
    number: "04",
  },
]

export function Differentials() {
  return (
    <section id="diferenciais" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wide uppercase">
            Por que nos escolher
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Nossos Diferenciais
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Compromisso com qualidade e satisfação do cliente em cada atendimento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <span className="text-5xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                    {item.number}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
