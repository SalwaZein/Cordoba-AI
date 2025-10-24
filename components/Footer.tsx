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
    { name: "LinkedIn", href: "https://linkedin.com", icon: "in" },
    { name: "Instagram", href: "https://instagram.com", icon: "ig" },
    { name: "X", href: "https://x.com", icon: "𝕏" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative py-16 md:py-20 px-4 bg-sand/20 border-t-2 border-mutedTeal/20">
      {/* Geometric border pattern at top */}
      <div className="absolute top-0 left-0 right-0 h-1">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="border-pattern" x="0" y="0" width="40" height="4" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="20" height="2" fill="#34D1BF" opacity="0.3" />
              <rect x="20" y="0" width="20" height="2" fill="#C6A770" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#border-pattern)" />
        </svg>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="#9BBAB3" />
              <path d="M 15 30 L 45 30 M 30 15 L 30 45" stroke="#C6A770" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Logo and tagline */}
          <div className="md:col-span-2">
            <motion.div
              className="mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Small Logo */}
              <div className="flex items-center gap-3 mb-4">
                {/* Logo placeholder - will be replaced with actual logo */}
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-verdigris to-brass flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <div className="text-2xl font-bold">
                  <span className="gradient-text">CORDOBA</span>{" "}
                  <span className="text-brass">AI</span>
                </div>
              </div>
            </motion.div>

            {/* Tagline - from brief */}
            <p className="text-base text-warmGray italic mb-6 max-w-md">
              From Al-Andalus to AI — Turning knowledge into outcomes.
            </p>

            {/* Navigation links */}
            <div className="flex flex-wrap gap-6">
              {footerLinks.main.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-warmGray hover:text-verdigris transition-colors duration-300 font-medium"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social links - from brief */}
          <div className="flex flex-col items-start md:items-end">
            <h3 className="text-charcoal font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              {footerLinks.social.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border-2 border-mutedTeal/30 flex items-center justify-center text-warmGray hover:border-verdigris hover:text-verdigris hover:bg-verdigris/5 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.name}
                >
                  <span className="text-sm font-semibold">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-mutedTeal/30 to-transparent mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-warmGray">
          <p>&copy; {new Date().getFullYear()} Cordoba AI. All rights reserved.</p>
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
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-verdigris/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-brass/5 rounded-full blur-2xl pointer-events-none" />
      </div>

      {/* Geometric border pattern at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 opacity-30">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <pattern id="bottom-border" x="0" y="0" width="60" height="8" patternUnits="userSpaceOnUse">
            <circle cx="15" cy="4" r="2" fill="#34D1BF" opacity="0.4" />
            <circle cx="45" cy="4" r="2" fill="#C6A770" opacity="0.4" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#bottom-border)" />
        </svg>
      </div>
    </footer>
  );
}
