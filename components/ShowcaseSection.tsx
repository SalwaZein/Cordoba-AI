"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const showcaseItems = [
  {
    title: "Enterprise AI Dashboard",
    description: "Real-time analytics platform with intelligent insights and predictive modeling.",
    category: "Analytics"
  },
  {
    title: "Smart Commerce Platform",
    description: "AI-powered e-commerce system with personalized recommendations and automated inventory.",
    category: "E-Commerce"
  },
  {
    title: "Healthcare Intelligence",
    description: "Patient care optimization system with AI-driven diagnostics and treatment planning.",
    category: "Healthcare"
  },
  {
    title: "Financial Forecasting Tool",
    description: "Advanced prediction engine for market analysis and investment optimization.",
    category: "Finance"
  }
];

export default function ShowcaseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-32 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-verdigris/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brass/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-alabaster">
            A Glimpse of <span className="gradient-text">Intelligence in Action</span>
          </h2>
          <p className="text-xl text-alabaster/70">
            AI-built solutions across industries
          </p>
        </motion.div>

        {/* Showcase grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-verdigris/20 to-brass/20 rounded-3xl blur-xl"
                animate={{
                  opacity: hoveredIndex === index ? 0.6 : 0,
                }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative bg-midnight/60 backdrop-blur-sm border border-alabaster/10 rounded-3xl p-8 h-full hover:border-verdigris/30 transition-all duration-500">
                {/* Category tag */}
                <div className="inline-block px-4 py-1 bg-verdigris/10 border border-verdigris/30 rounded-full text-verdigris text-sm font-semibold mb-6">
                  {item.category}
                </div>

                {/* Mockup visualization */}
                <div className="relative mb-6 h-48 bg-gradient-to-br from-midnight to-midnight/50 rounded-xl border border-alabaster/5 overflow-hidden">
                  {/* Simulated UI elements */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-brass/50" />
                    <div className="w-2 h-2 rounded-full bg-verdigris/50" />
                    <div className="w-2 h-2 rounded-full bg-alabaster/30" />
                  </div>

                  <div className="absolute inset-0 p-6 pt-12">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="h-6 bg-gradient-to-r from-verdigris/20 to-transparent rounded mb-3"
                        initial={{ scaleX: 0 }}
                        animate={hoveredIndex === index ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        style={{ transformOrigin: "left" }}
                      />
                    ))}
                  </div>

                  {/* Animated particles */}
                  {hoveredIndex === index && (
                    <>
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-verdigris rounded-full"
                          initial={{
                            x: Math.random() * 300,
                            y: Math.random() * 200,
                            opacity: 0
                          }}
                          animate={{
                            y: -50,
                            opacity: [0, 1, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-alabaster group-hover:text-verdigris transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-alabaster/70 leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative corner */}
                <motion.div
                  className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-brass/30 rounded-br-xl"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
