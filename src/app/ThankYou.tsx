'use client';
import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ThankYouPage() {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black text-center p-6">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🎉 Thank You for Registering!
      </motion.h1>
      <motion.p
        className="text-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        We’ll get back to you shortly with more details. Stay tuned!
      </motion.p>
      <Link
        href="/"
        className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300"
      >
        Go back to Home
      </Link>
    </main>
  );
}
