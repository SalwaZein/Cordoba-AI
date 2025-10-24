"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Think",
    description: "Understand your product's intelligence.",
    detail: "We dive deep into your vision, mapping out the intelligence architecture that will power your product."
  },
  {
    number: "02",
    title: "Build",
    description: "AI designs and develops core modules.",
    detail: "Our AI agents work in parallel to design, code, and test each component with precision and speed."
  },
  {
    number: "03",
    title: "Deliver",
    description: "Launch in weeks, refine continuously.",
    detail: "Deploy fast, then optimize. Our systems learn and improve with every interaction."
  }
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-verdigris/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-alabaster">
            How <span className="gradient-text">It Works</span>
          </h2>
          <p className="text-xl text-alabaster/70">
            Three steps to intelligent acceleration
          </p>
        </motion.div>

        {/* Steps container */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-verdigris/30 to-transparent hidden lg:block" />

          {/* Steps grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Step card */}
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-verdigris/20 to-brass/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                  <div className="relative bg-midnight/50 backdrop-blur-sm border border-alabaster/10 rounded-3xl p-8 hover:border-verdigris/30 transition-all duration-500">
                    {/* Step number */}
                    <motion.div
                      className="text-6xl font-bold gradient-text mb-6"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3, type: "spring" }}
                    >
                      {step.number}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-3xl font-bold mb-3 text-alabaster">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-verdigris mb-4 font-semibold">
                      {step.description}
                    </p>

                    {/* Detail */}
                    <p className="text-alabaster/70 leading-relaxed">
                      {step.detail}
                    </p>

                    {/* Animated arrow indicator for flow */}
                    {index < steps.length - 1 && (
                      <motion.div
                        className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block text-verdigris text-2xl"
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Flowing line animation */}
                <motion.div
                  className="absolute top-1/2 left-full w-8 h-px bg-verdigris hidden lg:block"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom decorative element */}
        <motion.div
          className="mt-20 flex justify-center items-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent to-brass" />
          <motion.div
            className="w-3 h-3 rounded-full bg-brass"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="h-px w-32 bg-gradient-to-l from-transparent to-brass" />
        </motion.div>
      </div>
    </section>
  );
}
