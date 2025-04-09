'use client'; // Ensure it's client-side in Next.js

import React from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const ConfettiExplosion = () => {
  const { width, height } = useWindowSize();

  return <Confetti width={width} height={height} numberOfPieces={200} />;
};

export default ConfettiExplosion;
