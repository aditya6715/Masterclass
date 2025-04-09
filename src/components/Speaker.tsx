// src/components/Speaker.tsx
"use client";

import { motion } from "framer-motion";

export default function Speaker() {
  return (
    <section className="bg-gray-50 py-16 px-6 text-center">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Meet Your Mentor
      </motion.h2>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img
          src="https://miro.medium.com/v2/resize:fit:1020/1*boFrsen4m1A8s4--WsqEKg.png"
          alt="Mentor"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-600"
        />
        <div className="text-left max-w-md">
          <h3 className="text-xl font-semibold">Shreya</h3>
          <p className="text-gray-700">
            Full-Stack Developer 
          </p>
          <p className="mt-2 text-gray-600 text-sm">
            Shreya has taught 1000+ students how to master web development with practical,
            industry-focused projects.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
