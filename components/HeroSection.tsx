"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ivory">
      {/* Subtle Andalusian lattice pattern background */}
      <div className="absolute inset-0 andalusian-lattice opacity-50" />

      {/* Animated mosaic pattern (slow parallax) */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(52, 209, 191, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(198, 167, 112, 0.1) 0%, transparent 50%)
          `,
          backgroundSize: "200% 200%",
        }}
      />

      {/* Geometric SVG pattern - Andalusian inspired */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="andalusian-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="30" fill="none" stroke="#9BBAB3" strokeWidth="0.5" />
              <path d="M 40 10 L 40 70 M 10 40 L 70 40" stroke="#C6A770" strokeWidth="0.5" />
              <path d="M 20 20 L 60 20 L 60 60 L 20 60 Z" fill="none" stroke="#34D1BF" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#andalusian-grid)" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Animated Logo */}
        <motion.div
          className="mb-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Light rays radiating from logo center */}
            {mounted && (
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <svg className="w-full h-full" style={{ transform: "scale(2)" }}>
                  {[...Array(12)].map((_, i) => {
                    const angle = (i * 360) / 12;
                    const x1 = 50;
                    const y1 = 50;
                    const x2 = 50 + 45 * Math.cos((angle * Math.PI) / 180);
                    const y2 = 50 + 45 * Math.sin((angle * Math.PI) / 180);
                    return (
                      <motion.line
                        key={i}
                        x1={`${x1}%`}
                        y1={`${y1}%`}
                        x2={`${x2}%`}
                        y2={`${y2}%`}
                        stroke="url(#ray-gradient)"
                        strokeWidth="1"
                        opacity="0.4"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                          pathLength: [0, 1, 0.8],
                          opacity: [0, 0.6, 0.3]
                        }}
                        transition={{
                          duration: 3,
                          delay: i * 0.1,
                          repeat: Infinity,
                          repeatDelay: 2,
                          ease: "easeInOut",
                        }}
                      />
                    );
                  })}
                  <defs>
                    <linearGradient id="ray-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#34D1BF" />
                      <stop offset="100%" stopColor="#C6A770" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            )}

            {/* Glow effect behind logo - soft golden light */}
            <motion.div
              className="absolute inset-0 rounded-full blur-3xl"
              style={{
                background: "radial-gradient(circle, rgba(198, 167, 112, 0.2) 0%, transparent 70%)",
              }}
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

            {/* Logo - Using placeholder until actual logo is provided */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
              {/* TODO: Replace with actual Final Logo.png when provided */}
              <div className="text-center">
                <div className="text-5xl md:text-7xl font-bold gradient-text">
                  CORDOBA
                </div>
                <div className="text-2xl md:text-3xl mt-2 text-brass font-semibold">AI</div>
              </div>

              {/* Uncomment when logo is added to /public folder:
              <Image
                src="/Final Logo.png"
                alt="Cordoba AI Logo"
                width={256}
                height={256}
                className="object-contain"
                priority
              />
              */}
            </div>

            {/* Andalusian geometry lines dissolving into AI pattern */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ transform: "scale(1.8)" }}>
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                const x2 = 50 + 35 * Math.cos((angle * Math.PI) / 180);
                const y2 = 50 + 35 * Math.sin((angle * Math.PI) / 180);
                return (
                  <g key={i}>
                    <motion.circle
                      cx={`${x2}%`}
                      cy={`${y2}%`}
                      r="2"
                      fill="#34D1BF"
                      opacity="0.4"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1, 0] }}
                      transition={{
                        duration: 3,
                        delay: 1 + i * 0.15,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    />
                  </g>
                );
              })}
            </svg>
          </div>
        </motion.div>

        {/* Headline - from brief */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-charcoal leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Building intelligence with{" "}
          <span className="gradient-text">elegance</span>.
        </motion.h1>

        {/* Subheadline - from brief */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-warmGray mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          From Al-Andalus to AI — we turn ideas into digital products,{" "}
          <span className="text-verdigris font-semibold">faster than ever</span>.
        </motion.p>

        {/* CTA Buttons - from brief */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#cta"
            className="px-10 py-4 bg-gradient-to-r from-verdigris to-verdigris/90 text-white font-semibold rounded-lg text-lg shadow-lg shadow-verdigris/20 hover:shadow-verdigris/30 transition-shadow"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(52, 209, 191, 0.25)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            Start Building
          </motion.a>
          <motion.a
            href="#service"
            className="px-10 py-4 border-2 border-brass text-brass font-semibold rounded-lg text-lg hover:bg-brass/5 transition-colors relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Our Process</span>
            {/* Gold underline slide animation */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-brass"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-mutedTeal rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 bg-verdigris rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
