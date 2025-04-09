"use client";
import { motion } from "framer-motion";

export default function InfoSection() {
  return (
    <section className="p-6 md:p-10 text-center bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-2">Date & Time</h2>
        <p className="text-lg text-gray-700 mb-6">April 10, 2025 | 7 PM - 9 PM IST</p>

        <h2 className="text-2xl font-semibold mb-2">Meet Your Mentor</h2>
        <p className="text-lg text-gray-700">John Doe, Head of UX at DesignCorp</p>
      </motion.div>
    </section>
  );
}
