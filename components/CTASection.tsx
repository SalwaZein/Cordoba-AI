"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-4 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(52, 209, 191, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(198, 167, 112, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(52, 209, 191, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-verdigris/20 to-brass/20 blur-3xl rounded-full"
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

          <div className="relative bg-midnight/60 backdrop-blur-xl border border-alabaster/10 rounded-3xl p-12 md:p-16">
            {/* Small logo or icon */}
            <motion.div
              className="mb-8 inline-block"
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-verdigris to-brass flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-midnight flex items-center justify-center text-verdigris text-2xl font-bold">
                  C
                </div>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-alabaster"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your product. <span className="gradient-text">Reimagined by AI</span>.
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-xl md:text-2xl text-alabaster/80 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Let&apos;s turn your idea into a product — <span className="text-verdigris font-semibold">faster</span>,{" "}
              <span className="text-brass font-semibold">smarter</span>, and beautifully crafted.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="px-10 py-5 bg-gradient-to-r from-verdigris to-verdigris/80 text-midnight font-bold rounded-xl text-lg shadow-lg shadow-verdigris/20 min-w-[200px]"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(52, 209, 191, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Start Project
              </motion.button>
              <motion.button
                className="px-10 py-5 border-2 border-brass text-brass font-bold rounded-xl text-lg hover:bg-brass/10 min-w-[200px]"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(198, 167, 112, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </motion.div>

            {/* Decorative corners */}
            <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-verdigris/30 rounded-tl-lg" />
            <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-brass/30 rounded-tr-lg" />
            <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-brass/30 rounded-bl-lg" />
            <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-verdigris/30 rounded-br-lg" />
          </div>

          {/* Orbiting particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-verdigris rounded-full"
              style={{
                left: "50%",
                top: "50%",
              }}
              animate={{
                x: [0, 150 * Math.cos((i * Math.PI) / 3), 0],
                y: [0, 150 * Math.sin((i * Math.PI) / 3), 0],
                opacity: [0, 0.8, 0],
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
