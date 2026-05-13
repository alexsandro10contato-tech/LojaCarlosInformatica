"use client"

import { motion } from "framer-motion"
import {
  Monitor,
  Printer,
  HardDrive,
  RefreshCw,
  Sparkles,
  Wifi,
  Zap,
  Wrench,
} from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Assistência Técnica",
    description: "Diagnóstico completo e reparo de computadores e notebooks de todas as marcas.",
  },
  {
    icon: Printer,
    title: "Impressoras",
    description: "Manutenção preventiva e corretiva em impressoras jato de tinta e laser.",
  },
  {
    icon: HardDrive,
    title: "Upgrade de Hardware",
    description: "Aumente a performance do seu equipamento com upgrades de memória, SSD e mais.",
  },
  {
    icon: RefreshCw,
    title: "Formatação",
    description: "Instalação de sistemas operacionais, drivers e softwares essenciais.",
  },
  {
    icon: Sparkles,
    title: "Limpeza Técnica",
    description: "Limpeza interna completa para evitar superaquecimento e prolongar a vida útil.",
  },
  {
    icon: Wifi,
    title: "Redes e Internet",
    description: "Configuração de redes, roteadores e solução de problemas de conectividade.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Otimização completa do sistema para máxima velocidade e eficiência.",
  },
  {
    icon: Monitor,
    title: "Consultoria",
    description: "Orientação especializada para compra de equipamentos e peças.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wide uppercase">
            Nossos Serviços
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Soluções completas para
            <br />
            <span className="text-primary">sua tecnologia</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Oferecemos uma gama completa de serviços técnicos para manter seus
            equipamentos funcionando perfeitamente.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card h-full p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
