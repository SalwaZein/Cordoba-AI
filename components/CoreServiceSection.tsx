"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: "🤖",
    title: "AI-Generated Architecture",
    description:
      "Intelligent system design that structures your product with optimal patterns and scalability built-in.",
  },
  {
    icon: "⚙️",
    title: "Automated Design & Development",
    description:
      "From wireframes to working code — our AI handles the heavy lifting so you can focus on strategy.",
  },
  {
    icon: "🚀",
    title: "Rapid Testing & Deployment",
    description:
      "Continuous integration and deployment pipelines that get your product live faster and safer.",
  },
  {
    icon: "💬",
    title: "Continuous AI Learning & Optimization",
    description:
      "Systems that learn from usage, adapt to feedback, and continuously improve performance.",
  },
];

export default function CoreServiceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 relative bg-ivory">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30 andalusian-lattice" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-2 bg-verdigris/10 text-verdigris rounded-full text-sm font-semibold">
              Core Service
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal">
            AI-Powered{" "}
            <span className="gradient-text">Product Acceleration</span>
          </h2>
          <p className="text-xl md:text-2xl text-charcoal font-semibold max-w-3xl mx-auto mb-4">
            We build your product in weeks, not months.
          </p>
          <p className="text-base md:text-lg text-warmGray max-w-3xl mx-auto leading-relaxed">
            Using advanced AI agents, Cordoba AI transforms ideas into fully
            functional digital products — designing, coding, and deploying{" "}
            <span className="text-verdigris font-semibold">intelligently</span>{" "}
            and{" "}
            <span className="text-brass font-semibold">efficiently</span>.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              {/* Card background with subtle shadow */}
              <div className="absolute inset-0 bg-gradient-to-br from-verdigris/5 to-brass/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-white/80 backdrop-blur-sm border border-mutedTeal/20 rounded-2xl p-6 md:p-8 hover:border-verdigris/40 hover:shadow-xl hover:shadow-verdigris/10 transition-all duration-500">
                {/* Icon with light pulse animation */}
                <motion.div
                  className="text-4xl md:text-5xl mb-4"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: 0.3 + index * 0.1,
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {feature.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-charcoal group-hover:text-verdigris transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-warmGray leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative corner accent */}
                <div className="absolute top-4 right-4 w-6 h-6 md:w-8 md:h-8">
                  <svg
                    viewBox="0 0 32 32"
                    className="w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <path
                      d="M 0 8 L 0 0 L 8 0"
                      fill="none"
                      stroke="url(#corner-gradient)"
                      strokeWidth="2"
                    />
                    <defs>
                      <linearGradient
                        id="corner-gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#34D1BF" />
                        <stop offset="100%" stopColor="#C6A770" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Illustration: App interface forming from geometric patterns */}
        <motion.div
          className="mt-12 md:mt-20 relative max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-verdigris/10 via-brass/10 to-verdigris/10 blur-3xl" />

            {/* App interface mockup */}
            <div className="relative bg-white/90 backdrop-blur-sm border-2 border-mutedTeal/20 rounded-3xl p-6 md:p-10 shadow-2xl shadow-brass/10">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-mutedTeal/20">
                <div className="w-3 h-3 rounded-full bg-brass" />
                <div className="w-3 h-3 rounded-full bg-verdigris" />
                <div className="w-3 h-3 rounded-full bg-mutedTeal" />
              </div>

              {/* Interface elements forming from geometric patterns */}
              <div className="space-y-4">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="relative h-12 md:h-16 rounded-xl overflow-hidden"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={
                      isInView ? { scaleX: 1, opacity: 1 } : {}
                    }
                    transition={{
                      duration: 0.8,
                      delay: 0.8 + i * 0.15,
                      ease: "easeOut",
                    }}
                    style={{ transformOrigin: "left" }}
                  >
                    {/* Geometric pattern dissolving into solid interface */}
                    <div className="absolute inset-0 bg-gradient-to-r from-verdigris/20 via-brass/20 to-sand/30" />

                    {/* Light rays */}
                    <svg
                      className="absolute inset-0 w-full h-full"
                      style={{ mixBlendMode: "overlay" }}
                    >
                      <motion.line
                        x1="0"
                        y1="50%"
                        x2="100%"
                        y2="50%"
                        stroke="#34D1BF"
                        strokeWidth="1"
                        opacity="0.3"
                        initial={{ pathLength: 0 }}
                        animate={
                          isInView ? { pathLength: 1 } : {}
                        }
                        transition={{
                          duration: 1,
                          delay: 0.8 + i * 0.15,
                        }}
                      />
                    </svg>

                    {/* Pattern forming */}
                    <motion.div
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8"
                      initial={{ rotate: 0, scale: 0 }}
                      animate={
                        isInView ? { rotate: 360, scale: 1 } : {}
                      }
                      transition={{
                        duration: 0.6,
                        delay: 1 + i * 0.15,
                      }}
                    >
                      <svg viewBox="0 0 32 32">
                        <circle
                          cx="16"
                          cy="16"
                          r="12"
                          fill="none"
                          stroke="#34D1BF"
                          strokeWidth="2"
                        />
                        <path
                          d="M 16 4 L 16 28 M 4 16 L 28 16"
                          stroke="#C6A770"
                          strokeWidth="1"
                        />
                      </svg>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Floating geometric particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2"
                  style={{
                    left: `${20 + i * 10}%`,
                    top: `${30 + (i % 3) * 20}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    delay: 1.2 + i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-full h-full bg-verdigris rounded-full blur-sm" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
