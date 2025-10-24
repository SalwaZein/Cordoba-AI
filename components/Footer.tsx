"use client";

import { motion } from "framer-motion";

const footerLinks = {
  main: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Service", href: "#service" },
    { name: "Contact", href: "#cta" },
  ],
  social: [
    { name: "LinkedIn", href: "#", icon: "in" },
    { name: "X", href: "#", icon: "𝕏" },
    { name: "Instagram", href: "#", icon: "ig" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative py-20 px-4 border-t border-alabaster/10">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="1" fill="#34D1BF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and tagline */}
          <div className="md:col-span-2">
            <motion.div
              className="mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Logo */}
              <div className="text-3xl font-bold gradient-text mb-4">
                CORDOBA <span className="text-brass">AI</span>
              </div>
            </motion.div>

            {/* Tagline */}
            <p className="text-lg text-alabaster/70 italic mb-6 max-w-md">
              From Al-Andalus to AI — Turning knowledge into outcomes.
            </p>

            {/* Navigation links */}
            <div className="flex flex-wrap gap-6">
              {footerLinks.main.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-alabaster/60 hover:text-verdigris transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div className="flex flex-col items-start md:items-end">
            <h3 className="text-alabaster font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              {footerLinks.social.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 rounded-full border border-alabaster/20 flex items-center justify-center text-alabaster/60 hover:border-verdigris hover:text-verdigris transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm font-semibold">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-alabaster/20 to-transparent mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-alabaster/50">
          <p>&copy; 2024 Cordoba AI. All rights reserved.</p>
          <div className="flex gap-6">
            <motion.a
              href="#"
              className="hover:text-verdigris transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-verdigris transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-verdigris/5 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-brass/5 rounded-full blur-2xl" />
      </div>
    </footer>
  );
}
