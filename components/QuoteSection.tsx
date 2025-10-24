"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function QuoteSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 relative overflow-hidden bg-ivory">
      {/* Subtle particle effects - light mode */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brass/20 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
        >
          {/* Andalusian Arch Frame */}
          <div className="relative">
            {/* Soft light glow behind arch */}
            <motion.div
              className="absolute inset-0 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(198, 167, 112, 0.15) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Andalusian Arch SVG */}
            <svg
              viewBox="0 0 600 500"
              className="w-full h-auto max-w-4xl mx-auto"
              style={{ filter: "drop-shadow(0 4px 20px rgba(155, 186, 179, 0.15))" }}
            >
              <defs>
                <linearGradient id="arch-gradient-gold" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#C6A770" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#9BBAB3" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="glow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#34D1BF" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#C6A770" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#34D1BF" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Main horseshoe arch */}
              <motion.path
                d="M 150 450 L 150 250 Q 150 150, 200 100 Q 250 50, 300 50 Q 350 50, 400 100 Q 450 150, 450 250 L 450 450"
                fill="none"
                stroke="url(#arch-gradient-gold)"
                strokeWidth="3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 2, ease: "easeInOut" }}
              />

              {/* Inner arch detail */}
              <motion.path
                d="M 170 440 L 170 250 Q 170 160, 210 115 Q 250 70, 300 70 Q 350 70, 390 115 Q 430 160, 430 250 L 430 440"
                fill="none"
                stroke="url(#glow-gradient)"
                strokeWidth="1"
                opacity="0.6"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 2.5, delay: 0.3, ease: "easeInOut" }}
              />

              {/* Decorative muqarnas-style patterns at the arch top */}
              {[0, 1, 2, 3, 4].map((i) => {
                const angle = -90 + i * 45;
                const x = 300 + 100 * Math.cos((angle * Math.PI) / 180);
                const y = 150 + 100 * Math.sin((angle * Math.PI) / 180);
                return (
                  <motion.circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="3"
                    fill="#C6A770"
                    opacity="0.5"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                  />
                );
              })}

              {/* Geometric star patterns */}
              <motion.g
                initial={{ opacity: 0, rotate: -180 }}
                animate={isInView ? { opacity: 1, rotate: 0 } : {}}
                transition={{ duration: 1.5, delay: 0.8 }}
              >
                <path
                  d="M 300 30 L 305 45 L 320 45 L 308 54 L 313 69 L 300 60 L 287 69 L 292 54 L 280 45 L 295 45 Z"
                  fill="#34D1BF"
                  opacity="0.4"
                />
              </motion.g>

              {/* Quote text inside the arch */}
              <foreignObject x="180" y="200" width="240" height="200">
                <motion.div
                  className="flex items-center justify-center h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: 1.2 }}
                >
                  <p className="text-center text-xl md:text-2xl font-light text-charcoal leading-relaxed px-4">
                    <span className="text-brass text-4xl font-serif leading-none">&ldquo;</span>
                    <br />
                    <span className="font-semibold gradient-text">
                      The structure of knowledge
                    </span>{" "}
                    is the{" "}
                    <span className="font-semibold text-brass">
                      architecture of intelligence
                    </span>
                    .
                    <br />
                    <span className="text-brass text-4xl font-serif leading-none">&rdquo;</span>
                  </p>
                </motion.div>
              </foreignObject>

              {/* Base decorative elements */}
              <motion.line
                x1="150"
                y1="450"
                x2="450"
                y2="450"
                stroke="#9BBAB3"
                strokeWidth="2"
                opacity="0.5"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ transformOrigin: "center" }}
              />
            </svg>

            {/* Floating light particles around the arch */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-verdigris/30 rounded-full blur-sm"
                style={{
                  left: `${30 + i * 10}%`,
                  top: `${40 + (i % 2) * 20}%`,
                }}
                animate={{
                  y: [0, -15, 0],
                  x: [0, Math.sin(i) * 10, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  delay: 1.5 + i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Decorative line below */}
          <motion.div
            className="mt-12 flex items-center justify-center gap-4"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-brass" />
            <motion.div
              className="w-2 h-2 rounded-full bg-brass"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-brass" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
