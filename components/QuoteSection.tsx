"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function QuoteSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-4 relative overflow-hidden">
      {/* Particle effects */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-verdigris/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
        >
          {/* Opening quote mark */}
          <motion.div
            className="text-8xl text-brass/30 font-serif leading-none mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            &ldquo;
          </motion.div>

          {/* Quote text */}
          <motion.p
            className="text-3xl md:text-4xl lg:text-5xl font-light text-alabaster leading-relaxed mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Technology becomes <span className="gradient-text font-semibold">art</span> when it understands{" "}
            <span className="text-brass font-semibold">purpose</span>.
          </motion.p>

          {/* Closing quote mark */}
          <motion.div
            className="text-8xl text-brass/30 font-serif leading-none flex justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            &rdquo;
          </motion.div>

          {/* Decorative line */}
          <motion.div
            className="mt-12 flex items-center justify-center gap-4"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-verdigris" />
            <motion.div
              className="w-3 h-3 rounded-full bg-verdigris"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-verdigris" />
          </motion.div>

          {/* Geometric spark particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${25 + i * 20}%`,
                  top: "50%",
                }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: [0, 1, 0] } : {}}
                transition={{
                  duration: 2,
                  delay: 1 + i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <polygon
                    points="10,0 12,8 20,10 12,12 10,20 8,12 0,10 8,8"
                    fill="#34D1BF"
                    opacity="0.5"
                  />
                </svg>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
