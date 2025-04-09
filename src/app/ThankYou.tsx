// app/thankyou/page.tsx (or wherever your routing points)
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ConfettiExplosion from "react-confetti-explosion";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col justify-center items-center px-6 text-center text-white">
      <ConfettiExplosion />

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        🎉 Thank You for Registering!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-lg md:text-xl max-w-xl mb-6 text-gray-300"
      >
        You’ve successfully registered for the UX Design Masterclass. <br />
        Check your email for further updates!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Link href="/">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
            Back to Home
          </button>
        </Link>
      </motion.div>
    </main>
  );
}
