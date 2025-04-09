'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-2xl p-10 max-w-md text-center"
      >
        <h1 className="text-3xl font-bold text-blue-700 mb-4">🎉 Thank You!</h1>
        <p className="text-gray-700 mb-6">
          You’ve successfully registered for the Masterclass. We’ll get in touch with you soon!
        </p>

        <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition">
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default ThankYou;
