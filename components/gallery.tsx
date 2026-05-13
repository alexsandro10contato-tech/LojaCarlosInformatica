"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ZoomIn } from "lucide-react"
import Image from "next/image"

const galleryItems = [
  {
    id: 1,
    title: "Manutenção de Notebook",
    category: "Manutenção",
    image: "/images/gallery/maintenance.jpg",
  },
  {
    id: 2,
    title: "Upgrade de Hardware",
    category: "Upgrade",
    image: "/images/gallery/upgrade.jpg",
  },
  {
    id: 3,
    title: "Reparo de Impressora",
    category: "Impressoras",
    image: "/images/gallery/printer.jpg",
  },
  {
    id: 4,
    title: "Bancada Técnica",
    category: "Estrutura",
    image: "/images/gallery/workbench.jpg",
  },
  {
    id: 5,
    title: "Antes e Depois",
    category: "Resultados",
    image: "/images/gallery/before-after.jpg",
  },
  {
    id: 6,
    title: "Limpeza Interna",
    category: "Manutenção",
    image: "/images/gallery/cleaning.jpg",
  },
]

const categories = ["Todos", "Manutenção", "Upgrade", "Impressoras", "Estrutura", "Resultados"]

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null)

  const filteredItems =
    selectedCategory === "Todos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-wide uppercase">
            Nosso Trabalho
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Galeria de Serviços
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos realizados com dedicação e qualidade.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-10 h-10 text-primary-foreground" />
                </div>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-primary-foreground/80 font-medium">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-semibold text-primary-foreground">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-card rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent">
                <span className="text-sm text-primary-foreground/80">
                  {selectedImage.category}
                </span>
                <h3 className="text-2xl font-bold text-primary-foreground">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
