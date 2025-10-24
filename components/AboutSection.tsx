"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-4 relative overflow-hidden">
      {/* Background geometric pattern */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-5">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          {/* Andalusian-inspired geometric pattern */}
          <defs>
            <pattern id="andalusian" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M50 0 L100 50 L50 100 L0 50 Z M25 25 L75 25 L75 75 L25 75 Z"
                fill="none"
                stroke="#34D1BF"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="400" height="400" fill="url(#andalusian)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-alabaster"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Where Heritage <span className="gradient-text">Meets Intelligence</span>.
          </motion.h2>

          <motion.div
            className="space-y-6 text-lg md:text-xl text-alabaster/80 leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>
              At Cordoba AI, we bridge centuries of wisdom with the intelligence of tomorrow.
            </p>
            <p>
              Inspired by <span className="text-brass font-semibold">Al-Andalus</span> — where knowledge met art — we design AI-driven systems that think, adapt, and deliver <span className="text-verdigris">measurable impact</span>.
            </p>
          </motion.div>

          {/* Decorative line with animated dots */}
          <motion.div
            className="mt-12 flex items-center gap-4"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="h-px bg-gradient-to-r from-verdigris to-brass flex-grow" />
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-verdigris"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
