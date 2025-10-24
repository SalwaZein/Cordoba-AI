"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "1",
    title: "Think",
    description: "We understand your concept and goals.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <circle
          cx="32"
          cy="32"
          r="28"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M 20 32 Q 32 20, 44 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="24" cy="28" r="2" fill="currentColor" />
        <circle cx="40" cy="28" r="2" fill="currentColor" />
        <path
          d="M 28 40 L 32 44 L 36 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Build",
    description: "AI designs and assembles the product.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <rect
          x="12"
          y="12"
          width="40"
          height="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M 12 28 L 52 28 M 28 12 L 28 52"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="20" cy="20" r="3" fill="currentColor" />
        <circle cx="44" cy="20" r="3" fill="currentColor" />
        <circle cx="20" cy="44" r="3" fill="currentColor" />
        <circle cx="44" cy="44" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Deliver",
    description: "You launch in weeks, with quality and intelligence built in.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <circle
          cx="32"
          cy="32"
          r="28"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M 20 32 L 28 40 L 44 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 32 8 L 36 16 L 32 12 L 28 16 Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 relative bg-sand/30">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="dots-pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="1" fill="#9BBAB3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-pattern)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-charcoal">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-warmGray max-w-2xl mx-auto">
            Three simple steps from concept to launch
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            >
              {/* Connecting line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-px">
                  <motion.div
                    className="h-full bg-gradient-to-r from-mutedTeal to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
              )}

              {/* Step card */}
              <div className="relative bg-white/70 backdrop-blur-sm border border-mutedTeal/20 rounded-2xl p-8 hover:border-verdigris/40 hover:shadow-xl hover:shadow-verdigris/10 transition-all duration-500">
                {/* Step number badge */}
                <motion.div
                  className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-verdigris to-brass rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: 0.4 + index * 0.15,
                  }}
                >
                  {step.number}
                </motion.div>

                {/* Icon */}
                <motion.div
                  className="w-20 h-20 mx-auto mb-6 text-verdigris"
                  initial={{ scale: 0, rotate: -90 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    delay: 0.5 + index * 0.15,
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {step.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-charcoal text-center group-hover:text-verdigris transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-warmGray text-center leading-relaxed">
                  {step.description}
                </p>

                {/* Decorative elements */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-brass/40"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0.8, 0.4],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-4"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-brass to-transparent w-64" />
        </motion.div>
      </div>
    </section>
  );
}
