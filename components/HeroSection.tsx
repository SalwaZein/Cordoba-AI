"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden geometric-pattern">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-verdigris rounded-full opacity-30"
            initial={{
              x: 0,
              y: 0,
            }}
            animate={{
              x: mousePosition.x + (Math.random() - 0.5) * 200,
              y: mousePosition.y + (Math.random() - 0.5) * 200,
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              ease: "easeOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#34D1BF" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Animated Logo */}
        <motion.div
          className="mb-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Glow effect behind logo */}
            <motion.div
              className="absolute inset-0 bg-verdigris blur-3xl opacity-30 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Logo placeholder - replace with actual logo */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
              {/* If logo exists, use Image component, otherwise show placeholder */}
              <div className="text-verdigris text-6xl md:text-8xl font-bold gradient-text">
                CORDOBA
                <div className="text-2xl md:text-3xl mt-2 text-brass">AI</div>
              </div>
            </div>

            {/* Network lines radiating from logo */}
            <svg className="absolute inset-0 w-full h-full" style={{ transform: 'scale(1.5)' }}>
              {[...Array(8)].map((_, i) => {
                const angle = (i * 360) / 8;
                const x2 = 50 + 40 * Math.cos((angle * Math.PI) / 180);
                const y2 = 50 + 40 * Math.sin((angle * Math.PI) / 180);
                return (
                  <motion.line
                    key={i}
                    x1="50%"
                    y1="50%"
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="#34D1BF"
                    strokeWidth="1"
                    opacity="0.3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 2,
                      delay: i * 0.1,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  />
                );
              })}
            </svg>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-alabaster"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Intelligence, <span className="gradient-text">beautifully built</span>.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-alabaster/80 mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          From Al-Andalus to AI — we turn ideas into intelligent digital products, <span className="text-verdigris">fast</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-verdigris to-verdigris/80 text-midnight font-semibold rounded-lg text-lg shadow-lg shadow-verdigris/20"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(52, 209, 191, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Build With Us
          </motion.button>
          <motion.button
            className="px-8 py-4 border-2 border-brass text-brass font-semibold rounded-lg text-lg hover:bg-brass/10"
            whileHover={{ scale: 1.05, borderColor: "#C6A770" }}
            whileTap={{ scale: 0.95 }}
          >
            See How It Works
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-verdigris rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 bg-verdigris rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
