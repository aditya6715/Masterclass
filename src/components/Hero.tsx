// src/components/Hero.tsx
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-16 text-center max-w-3xl mx-auto px-4 sm:px-6">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Join the Ultimate Web Dev Masterclass
      </motion.h1>
      <motion.p
        className="text-gray-600 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Learn full-stack development from scratch. Build real-world projects. Level up fast!
      </motion.p>
      <motion.img
        src="/hero-image.png"
        alt="Hero"
        className="w-full max-w-md mx-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      />
    </section>
  );
}
