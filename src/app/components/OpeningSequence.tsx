import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gift, Heart } from 'lucide-react';

export function OpeningSequence() {
  const [showOpening, setShowOpening] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 1500);
    const timer2 = setTimeout(() => setStep(2), 3000);
    const timer3 = setTimeout(() => setShowOpening(false), 5000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  if (!showOpening) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 flex items-center justify-center"
    >
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step1"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Gift className="w-32 h-32 mx-auto text-white" />
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="step2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Heart className="w-32 h-32 mx-auto text-white" fill="currentColor" />
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step3"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-6"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
              Welcome, Komal! 🎉
            </h1>
            <p className="text-2xl md:text-3xl text-pink-100 font-bold">
              Tumhare liye kuch khaas... 💝
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
