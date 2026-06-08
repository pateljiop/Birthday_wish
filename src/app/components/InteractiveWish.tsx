import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gift, Sparkles } from 'lucide-react';

export function InteractiveWish() {
  const [isOpen, setIsOpen] = useState(false);

  const wishes = [
    '🎂 Tumhari saari wishes pure ho',
    '😊 Hamesha khush raho',
    '🌟 Har din naya success mile',
    '💪 Healthy aur strong raho',
    '📚 BTECH mein top karo',
    '🎯 Apne sapne pure karo',
    '👨‍👩‍👧‍👦 Family hamesha khush rahe',
    '💝 Life mein pyaar hi pyaar mile',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center py-20 px-8">
      <div className="text-center max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-12 px-4"
        >
          Mere Wishes Tumhare Liye 🎁
        </motion.h2>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', duration: 0.8 }}
          className="relative inline-block"
        >
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="relative group cursor-pointer"
            type="button"
          >
            <div className="w-48 h-48 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden">
              {/* Animated sparkles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 opacity-30 pointer-events-none"
              >
                <Sparkles className="absolute top-4 left-4 text-white" />
                <Sparkles className="absolute bottom-4 right-4 text-white" />
                <Sparkles className="absolute top-4 right-4 text-yellow-200" />
                <Sparkles className="absolute bottom-4 left-4 text-yellow-200" />
              </motion.div>

              <Gift className="text-white z-10" size={80} />

              {/* Ribbon */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-full bg-gradient-to-b from-yellow-300 to-yellow-500 opacity-80" />
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-12 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-80" />
            </div>

            <motion.p
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-6 text-xl font-semibold text-purple-600"
            >
              {isOpen ? 'Yay! Dekho kya hai 👇' : 'Click karke kholo! 🎁'}
            </motion.p>
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {wishes.map((wish, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl shadow-lg p-6 border-2 border-pink-200"
                >
                  <p className="text-lg text-gray-700 font-medium">{wish}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
