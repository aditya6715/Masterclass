// src/components/Testimonials.tsx
"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Riya Sharma",
      quote: "This masterclass changed how I approach web dev forever!",
    },
    {
      name: "Abhishek Rao",
      quote: "Very practical, straight to the point, and super inspiring.",
    },
    {
      name: "Sneha Jain",
      quote: "Helped me crack my first internship interview. 10/10!",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 text-center">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        What Past Students Say
      </motion.h2>
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            className="bg-gray-100 p-6 rounded-lg shadow-sm"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <p className="italic text-gray-700">"{item.quote}"</p>
            <p className="mt-4 font-semibold text-blue-600">– {item.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
