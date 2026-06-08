import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gift, Sparkles, Heart } from 'lucide-react';

export function SpecialWish() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center py-16 md:py-20 px-6 md:px-8">
      <div className="max-w-4xl w-full">
        {!isRevealed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              animate={{ 
                rotate: [0, -10, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-8"
            >
              <Gift className="w-32 md:w-40 h-32 md:h-40 mx-auto text-purple-600" />
            </motion.div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
                Ek Special Gift Tumhare Liye! 🎁
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-8">
                Yeh gift kisi store se nahi mila...
                <br />
                Yeh dil se aaya hai, Bachcha! 💝
              </p>
            </div>

            <button
              onClick={() => setIsRevealed(true)}
              className="px-16 py-8 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white text-3xl font-black rounded-full shadow-2xl hover:shadow-purple-300 hover:scale-110 transition-all"
            >
              Gift Kholo! 🎀
            </button>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden"
            >
              {/* Confetti effect */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                {Array.from({ length: 30 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                      x: Math.cos((i * 360) / 30) * 200,
                      y: Math.sin((i * 360) / 30) * 200,
                    }}
                    transition={{ duration: 2, delay: i * 0.05 }}
                    className="absolute"
                  >
                    <Sparkles className="text-pink-400" />
                  </motion.div>
                ))}
              </div>

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="mb-8"
                >
                  <Heart className="w-24 h-24 mx-auto text-red-500" fill="currentColor" />
                </motion.div>

                <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 text-center">
                  Mera Pyar, Mera Waqt, Meri Mehnat...
                </h3>

                <div className="space-y-6 text-lg md:text-2xl text-gray-800 leading-relaxed font-semibold">
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    ✨ <span className="text-pink-600 font-black">634+ Commits</span> sirf tumhare liye
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                  >
                    💻 <span className="text-purple-600 font-black">Raat-raat bhar coding</span> ki tumhe khush karne ke liye
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    ❤️ <span className="text-red-600 font-black">Har line of code</span> mein mera pyar hai
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 }}
                  >
                    🎨 <span className="text-blue-600 font-black">Har color, har animation</span> tumhare liye chuna
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.8 }}
                    className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-6 md:p-8 mt-8 border-4 border-pink-300"
                  >
                    <p className="text-2xl md:text-4xl font-black text-gray-900 italic">
                      "Yeh website nahi hai, Bachcha...
                      <br />
                      Yeh mere dil ki awaaz hai!" 💖
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 }}
                  className="text-center mt-8"
                >
                  <p className="text-3xl md:text-4xl font-black text-pink-600">
                    Happy Birthday, Meri Jaan! 🎂✨
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
