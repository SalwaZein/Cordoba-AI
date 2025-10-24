"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function MindsetSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-4 relative overflow-hidden">
      {/* Split background concept */}
      <div className="absolute inset-0 flex">
        {/* Left side - Andalusian architecture */}
        <div className="w-1/2 relative">
          <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 400 400">
            {/* Andalusian arch patterns */}
            <path
              d="M 100 200 Q 100 100, 200 100 Q 300 100, 300 200 L 300 400 L 100 400 Z"
              fill="none"
              stroke="#C6A770"
              strokeWidth="2"
            />
            <path
              d="M 120 220 Q 120 140, 200 140 Q 280 140, 280 220"
              fill="none"
              stroke="#C6A770"
              strokeWidth="1"
            />
            {/* Geometric decorations */}
            {[...Array(5)].map((_, i) => (
              <circle
                key={i}
                cx={150 + i * 25}
                cy={180}
                r="3"
                fill="#C6A770"
                opacity="0.5"
              />
            ))}
          </svg>
        </div>

        {/* Right side - Digital mesh */}
        <div className="w-1/2 relative">
          <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 400 400">
            {/* Digital grid/mesh */}
            <defs>
              <pattern id="digital-mesh" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="#34D1BF" />
                <line x1="20" y1="20" x2="40" y2="20" stroke="#34D1BF" strokeWidth="0.5" />
                <line x1="20" y1="20" x2="20" y2="40" stroke="#34D1BF" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="400" height="400" fill="url(#digital-mesh)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-midnight/70 backdrop-blur-xl border border-alabaster/10 rounded-3xl p-12 md:p-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-alabaster leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The <span className="gradient-text">Cordoba Mindset</span>
          </motion.h2>

          <div className="space-y-8 text-2xl md:text-3xl lg:text-4xl font-light">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center gap-4"
            >
              <span className="text-alabaster/70">Where</span>
              <span className="text-brass font-semibold">logic</span>
              <span className="text-alabaster/70">meets</span>
              <span className="text-verdigris font-semibold">art</span>
              <span className="text-alabaster/70">.</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center gap-4"
            >
              <span className="text-alabaster/70">Where</span>
              <span className="text-brass font-semibold">time</span>
              <span className="text-alabaster/70">meets</span>
              <span className="text-verdigris font-semibold">innovation</span>
              <span className="text-alabaster/70">.</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-8"
            >
              <span className="text-alabaster italic">This is the </span>
              <span className="gradient-text font-bold">Cordoba way</span>
              <span className="text-alabaster italic">.</span>
            </motion.div>
          </div>

          {/* Decorative particles */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-verdigris rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 40}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
