"use client"

import { motion } from "motion/react"

type Section = {
  id: string
  title: string
  content: string
  bgColor: string
  textColor: string
}

type SlideSectionProps = {
  section: Section
  index: number
  totalSections: number
}

export function SlideSection({ section, index, totalSections }: SlideSectionProps) {
  return (
    <div
      className={`homeWorkSlide mediaBackground ${section.bgColor} ${section.textColor}`}
      style={{
        position: "sticky",
        top: 0,
        display: "block",
        width: "100%",
        height: "100svh",
        zIndex: totalSections + index, // Higher z-index for later sections to slide in front
        overflow: "hidden",
      }}
    >
      <div className="h-full flex items-center justify-center">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {section.title}
          </motion.h1>

          <motion.p
            className="text-xl md:text-3xl leading-relaxed opacity-90 font-light max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {section.content}
          </motion.p>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-full text-lg font-medium hover:bg-white/20 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl">
              Explore Further
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-3">
            {Array.from({ length: totalSections }).map((_, i) => (
              <motion.div
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === index ? "bg-white w-8" : "bg-white/30 w-3"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>

        {index === 0 && (
          <motion.div
            className="absolute bottom-8 right-8 text-white/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm font-light tracking-wider">SCROLL</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-px h-8 bg-white/40"
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
