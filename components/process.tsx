"use client"

import { motion } from "framer-motion"
import { Search, FileText, Wrench, CheckCircle, Truck } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Diagnóstico",
    description: "Análise completa do equipamento para identificar o problema.",
  },
  {
    icon: FileText,
    title: "Orçamento",
    description: "Apresentamos um orçamento detalhado e transparente.",
  },
  {
    icon: Wrench,
    title: "Reparo",
    description: "Execução do serviço com peças de qualidade.",
  },
  {
    icon: CheckCircle,
    title: "Testes",
    description: "Testes rigorosos para garantir o funcionamento.",
  },
  {
    icon: Truck,
    title: "Entrega",
    description: "Devolução do equipamento pronto para uso.",
  },
]

export function Process() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wide uppercase">
            Como Funciona
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Processo de Atendimento
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Um fluxo simples e organizado para resolver seu problema com eficiência.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-border">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="relative z-10 w-16 h-16 mx-auto bg-card border-2 border-primary rounded-full flex items-center justify-center mb-4 shadow-lg shadow-primary/10">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
