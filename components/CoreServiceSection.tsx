"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: "🤖",
    title: "AI-Generated UI & Code",
    description: "Intelligent design systems that create beautiful, functional interfaces automatically."
  },
  {
    icon: "⚙️",
    title: "Smart Workflow Automation",
    description: "Streamlined processes that adapt and optimize as your product evolves."
  },
  {
    icon: "🚀",
    title: "Rapid Deployment",
    description: "From concept to production in weeks, with continuous integration built-in."
  },
  {
    icon: "📊",
    title: "Real-Time Optimization",
    description: "AI-powered analytics that refine performance and user experience on the fly."
  }
];

export default function CoreServiceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-alabaster">
            AI-Powered <span className="gradient-text">Product Acceleration</span>
          </h2>
          <p className="text-xl md:text-2xl text-alabaster/80 max-w-3xl mx-auto mb-4">
            Build your product in <span className="text-verdigris font-semibold">weeks</span>, not months.
          </p>
          <p className="text-lg md:text-xl text-alabaster/70 max-w-3xl mx-auto">
            We use AI agents to design, code, and deploy full digital products faster than traditional development.
            <br />
            <span className="text-brass italic">No endless sprints — just intelligent acceleration.</span>
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Card background with gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-verdigris/20 to-brass/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-midnight/50 backdrop-blur-sm border border-alabaster/10 rounded-2xl p-8 hover:border-verdigris/30 transition-all duration-500">
                {/* Icon */}
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {feature.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-alabaster group-hover:text-verdigris transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-alabaster/70 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative corner accent */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-brass/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual element - Dashboard preview placeholder */}
        <motion.div
          className="mt-20 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-verdigris/20 to-brass/20 blur-3xl" />

            {/* Dashboard mockup */}
            <div className="relative bg-midnight/80 border border-verdigris/30 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-brass" />
                <div className="w-3 h-3 rounded-full bg-verdigris" />
                <div className="w-3 h-3 rounded-full bg-alabaster/50" />
              </div>

              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="h-12 bg-gradient-to-r from-verdigris/10 to-brass/10 rounded-lg"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.7 + i * 0.1 }}
                    style={{ transformOrigin: "left" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
