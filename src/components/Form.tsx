'use client';

import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const Form = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        toast.success('🎉 Registration Successful!');
        setShowConfetti(true);

        // Optional: Clear form fields
        form.reset();

        // Hide confetti after 5 seconds
        setTimeout(() => setShowConfetti(false), 5000);
      } else {
        toast.error('Something went wrong.');
      }
    } catch (err) {
      toast.error('Error submitting form!');
    }
  };

  return (
    <div className="relative">
      <Toaster position="top-right" reverseOrder={false} />
      {showConfetti && <Confetti width={width} height={height} numberOfPieces={200} />}

      <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white rounded-xl shadow-md max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4 text-center">Register for the Masterclass</h2>

        <input
          name="name"
          type="text"
          required
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
