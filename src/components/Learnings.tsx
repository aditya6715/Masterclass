"use client";
import { motion } from "framer-motion";

export default function Learnings() {
  return (
    <section className="p-6 md:p-10 bg-[#121212] text-white">
      <motion.h2
        className="text-3xl font-semibold mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        What You'll Learn
      </motion.h2>
      <motion.ul
        className="space-y-4 max-w-xl mx-auto text-left text-gray-800"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {[
          "✅ Design frameworks for business growth",
          "✅ Creating user-centered wireframes",
          "✅ Real-world UX case studies",
        ].map((item, i) => (
          <motion.li
            key={i}
            className="text-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
