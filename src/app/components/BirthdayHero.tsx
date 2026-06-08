import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Cake, Sparkles, ChevronDown } from 'lucide-react';

export function BirthdayHero() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600 flex flex-col items-center justify-center relative overflow-hidden p-6">
      {/* Main content with SOLID white background */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', duration: 1 }}
        className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl w-full text-center"
      >
        {/* Cake icon */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 10, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 3 }}
          className="inline-block mb-6"
        >
          <Cake size={80} className="text-pink-600" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
        >
          Happy Birthday
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-6xl font-black text-pink-600 mb-4"
        >
          Komal! 🎉
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="text-3xl md:text-4xl font-black text-purple-700 mb-6"
        >
          Meri Pyaari Bulbul! 💕
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-4 md:p-6 border-2 border-pink-300 mb-6"
        >
          <p className="text-lg md:text-2xl font-black text-gray-900">
            634+ Commits • ∞ Love • 48+ Hours
          </p>
          <p className="text-base md:text-xl text-gray-700 font-semibold mt-2">
            Sab tumhare liye, Bachcha! 💖
          </p>
        </motion.div>

        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-xl md:text-2xl text-gray-800 font-semibold">
              Aaj ka din sirf tumhara hai, Bachcha! ✨
            </p>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center justify-center gap-2 text-purple-700 font-semibold text-lg"
            >
              <Sparkles className="text-yellow-500" size={24} />
              <span>Scroll down for surprises</span>
              <Sparkles className="text-yellow-500" size={24} />
            </motion.div>
          </motion.div>
        )}

        {/* Decorative border */}
        <div className="absolute inset-0 rounded-3xl border-4 border-pink-400 opacity-50 pointer-events-none" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-12 h-12 text-white" strokeWidth={3} />
      </motion.div>

      {/* Decorative emojis */}
      <div className="absolute top-10 left-10 text-5xl md:text-6xl">🎈</div>
      <div className="absolute top-20 right-20 text-5xl md:text-6xl">🎈</div>
      <div className="absolute bottom-20 left-20 text-5xl md:text-6xl">🎁</div>
      <div className="absolute bottom-10 right-10 text-5xl md:text-6xl">🎉</div>
    </div>
  );
}
