"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 relative overflow-hidden bg-sand/20">
      {/* Andalusian arch pattern background */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <pattern id="arch-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              {/* Simplified arch shapes */}
              <path
                d="M 50 80 Q 30 50, 50 20 Q 70 50, 50 80 Z"
                fill="none"
                stroke="#9BBAB3"
                strokeWidth="0.5"
              />
              <circle cx="50" cy="20" r="15" fill="none" stroke="#C6A770" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="400" height="400" fill="url(#arch-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-charcoal"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Rooted in Heritage,{" "}
              <span className="gradient-text">Powered by AI</span>
            </motion.h2>

            <motion.div
              className="space-y-6 text-base md:text-lg text-warmGray leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>
                Cordoba AI blends{" "}
                <span className="text-charcoal font-semibold">
                  centuries of structured beauty
                </span>{" "}
                with the intelligence of tomorrow.
              </p>
              <p>
                Inspired by Al-Andalus, we craft intelligent systems that combine{" "}
                <span className="text-verdigris font-semibold">logic</span>,{" "}
                <span className="text-brass font-semibold">art</span>, and{" "}
                <span className="text-verdigris font-semibold">speed</span>.
              </p>
              <p>
                Our work celebrates{" "}
                <span className="text-charcoal font-semibold italic">
                  design as knowledge
                </span>{" "}
                — and{" "}
                <span className="text-charcoal font-semibold italic">
                  knowledge as intelligence
                </span>.
              </p>
            </motion.div>

            {/* Decorative line with animated dots */}
            <motion.div
              className="mt-10 flex items-center gap-4"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="h-px bg-gradient-to-r from-verdigris via-brass to-mutedTeal w-32" />
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-brass"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Visual: Split between architecture and AI network */}
          <motion.div
            className="relative h-96 md:h-[500px]"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Ancient architecture side (left) */}
            <div className="absolute left-0 top-0 bottom-0 w-1/2 overflow-hidden rounded-l-2xl bg-gradient-to-r from-sand to-sand/50">
              <svg
                viewBox="0 0 200 400"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid slice"
              >
                {/* Andalusian arched windows */}
                <defs>
                  <linearGradient id="arch-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#C6A770" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#9BBAB3" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Three arched windows */}
                {[80, 200, 320].map((y, i) => (
                  <g key={i}>
                    <motion.path
                      d={`M 60 ${y + 40} Q 40 ${y + 10}, 60 ${y - 20} Q 80 ${y + 10}, 60 ${y + 40} Z`}
                      fill="url(#arch-gradient)"
                      stroke="#C6A770"
                      strokeWidth="2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                      transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
                    />
                    {/* Arch details */}
                    <motion.circle
                      cx="60"
                      cy={y - 20}
                      r="25"
                      fill="none"
                      stroke="#C6A770"
                      strokeWidth="1"
                      opacity="0.4"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.7 + i * 0.2 }}
                    />
                  </g>
                ))}
              </svg>
            </div>

            {/* AI network side (right) */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden rounded-r-2xl bg-gradient-to-l from-ivory to-ivory/50">
              <svg
                viewBox="0 0 200 400"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid slice"
              >
                {/* Network nodes */}
                {[
                  { x: 100, y: 50 },
                  { x: 60, y: 120 },
                  { x: 140, y: 120 },
                  { x: 100, y: 190 },
                  { x: 80, y: 260 },
                  { x: 120, y: 260 },
                  { x: 100, y: 330 },
                ].map((node, i) => (
                  <g key={i}>
                    {/* Connection lines */}
                    {i > 0 && (
                      <motion.line
                        x1={node.x}
                        y1={node.y}
                        x2={[100, 60, 140, 100, 80, 120, 100][Math.floor(i / 2)]}
                        y2={[50, 120, 120, 190, 260, 260, 330][Math.floor(i / 2)]}
                        stroke="#34D1BF"
                        strokeWidth="1"
                        opacity="0.4"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : {}}
                        transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                      />
                    )}
                    {/* Nodes */}
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="4"
                      fill="#34D1BF"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={
                        isInView
                          ? {
                              scale: [0, 1.2, 1],
                              opacity: 1,
                            }
                          : {}
                      }
                      transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                    />
                    {/* Glow effect */}
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="8"
                      fill="none"
                      stroke="#34D1BF"
                      strokeWidth="0.5"
                      opacity="0.3"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.1, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </g>
                ))}
              </svg>
            </div>

            {/* Center divider with gradient */}
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-1 -ml-0.5"
              style={{
                background: "linear-gradient(to bottom, #C6A770, #34D1BF, #C6A770)",
              }}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            />

            {/* Soft shadow */}
            <div className="absolute inset-0 rounded-2xl shadow-2xl shadow-mutedTeal/10 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
