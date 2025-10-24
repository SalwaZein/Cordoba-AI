"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 relative overflow-hidden bg-gradient-to-b from-sand/40 via-ivory to-sand/40">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(52, 209, 191, 0.06) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(198, 167, 112, 0.06) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(52, 209, 191, 0.06) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-30 andalusian-lattice" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-verdigris/10 to-brass/10 blur-3xl rounded-full"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative bg-white/80 backdrop-blur-xl border-2 border-mutedTeal/20 rounded-3xl p-10 md:p-16 shadow-2xl shadow-brass/10">
            {/* Small logo or icon */}
            <motion.div
              className="mb-8 inline-block"
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-verdigris to-brass flex items-center justify-center shadow-lg">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <span className="gradient-text text-2xl font-bold">C</span>
                </div>
              </div>
            </motion.div>

            {/* Headline - from brief */}
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to bring your{" "}
              <span className="gradient-text">vision to life</span>?
            </motion.h2>

            {/* Description - from brief */}
            <motion.p
              className="text-lg md:text-xl text-warmGray mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Let&apos;s build your product —{" "}
              <span className="text-verdigris font-semibold">fast</span>,{" "}
              <span className="text-brass font-semibold">beautifully</span>, and
              powered by{" "}
              <span className="text-charcoal font-semibold">intelligence</span>.
            </motion.p>

            {/* CTA Buttons - from brief */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="px-10 py-5 bg-gradient-to-r from-verdigris to-verdigris/90 text-white font-bold rounded-xl text-lg shadow-lg shadow-verdigris/20 min-w-[200px]"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(52, 209, 191, 0.35)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                Start Project
              </motion.button>
              <motion.button
                className="px-10 py-5 border-2 border-brass text-brass font-bold rounded-xl text-lg hover:bg-brass/10 min-w-[200px] transition-colors"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(198, 167, 112, 0.08)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Us
              </motion.button>
            </motion.div>

            {/* Decorative corners - Andalusian style */}
            <svg className="absolute top-4 left-4 w-10 h-10 opacity-40" viewBox="0 0 40 40">
              <path
                d="M 0 10 Q 0 0, 10 0 L 0 0 Z"
                fill="none"
                stroke="url(#corner-grad-1)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient id="corner-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#34D1BF" />
                  <stop offset="100%" stopColor="#C6A770" />
                </linearGradient>
              </defs>
            </svg>

            <svg className="absolute top-4 right-4 w-10 h-10 opacity-40" viewBox="0 0 40 40">
              <path
                d="M 30 0 Q 40 0, 40 10 L 40 0 Z"
                fill="none"
                stroke="url(#corner-grad-2)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient id="corner-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C6A770" />
                  <stop offset="100%" stopColor="#34D1BF" />
                </linearGradient>
              </defs>
            </svg>

            <svg className="absolute bottom-4 left-4 w-10 h-10 opacity-40" viewBox="0 0 40 40">
              <path
                d="M 0 30 Q 0 40, 10 40 L 0 40 Z"
                fill="none"
                stroke="url(#corner-grad-3)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient id="corner-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C6A770" />
                  <stop offset="100%" stopColor="#34D1BF" />
                </linearGradient>
              </defs>
            </svg>

            <svg className="absolute bottom-4 right-4 w-10 h-10 opacity-40" viewBox="0 0 40 40">
              <path
                d="M 30 40 Q 40 40, 40 30 L 40 40 Z"
                fill="none"
                stroke="url(#corner-grad-4)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient id="corner-grad-4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#34D1BF" />
                  <stop offset="100%" stopColor="#C6A770" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Orbiting particles - light mode */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: "50%",
                top: "50%",
                background: i % 2 === 0 ? "#34D1BF" : "#C6A770",
              }}
              animate={{
                x: [0, 160 * Math.cos((i * Math.PI) / 3), 0],
                y: [0, 160 * Math.sin((i * Math.PI) / 3), 0],
                opacity: [0, 0.6, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
