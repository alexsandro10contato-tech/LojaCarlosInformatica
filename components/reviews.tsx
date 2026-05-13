"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Empresária",
    rating: 5,
    text: "Excelente atendimento! Meu notebook voltou a funcionar perfeitamente. Recomendo a todos.",
    avatar: "MS",
  },
  {
    id: 2,
    name: "João Santos",
    role: "Contador",
    rating: 5,
    text: "Profissionais competentes e preços justos. O upgrade no meu PC ficou incrível!",
    avatar: "JS",
  },
  {
    id: 3,
    name: "Ana Costa",
    role: "Designer",
    rating: 5,
    text: "Rápido, eficiente e com garantia. A Carlos Informática é minha referência em assistência técnica.",
    avatar: "AC",
  },
  {
    id: 4,
    name: "Pedro Oliveira",
    role: "Advogado",
    rating: 5,
    text: "Atendimento impecável do início ao fim. Resolveram o problema da minha impressora em poucas horas.",
    avatar: "PO",
  },
  {
    id: 5,
    name: "Carla Mendes",
    role: "Médica",
    rating: 5,
    text: "Equipe muito atenciosa e competente. Sempre que preciso, é aqui que trago meus equipamentos.",
    avatar: "CM",
  },
  {
    id: 6,
    name: "Roberto Lima",
    role: "Engenheiro",
    rating: 5,
    text: "Trabalho de qualidade e transparência no orçamento. Super recomendo!",
    avatar: "RL",
  },
]

export function Reviews() {
  return (
    <section id="avaliacoes" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wide uppercase">
            Depoimentos
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            O que nossos clientes dizem
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold">{review.avatar}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
                <Quote className="w-8 h-8 text-primary/20" />
              </div>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">{review.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
