import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Mail } from 'lucide-react';

export function CurtainReveal() {
  const [curtainOpen, setCurtainOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 py-16 md:py-20 px-6 md:px-8 flex items-center justify-center relative overflow-hidden">
      {/* Stage Lights Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          className="absolute top-0 right-1/4 w-96 h-96 bg-pink-300 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl w-full relative z-10">
        {!curtainOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            {/* Curtain */}
            <div className="relative mb-8">
              <motion.div className="flex justify-center gap-2 mb-8">
                <motion.div
                  animate={{ scaleY: [1, 0.98, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-32 md:h-40 bg-gradient-to-b from-yellow-600 to-yellow-800 rounded-full"
                />
                <motion.div
                  animate={{ scaleY: [1, 0.98, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  className="w-2 h-32 md:h-40 bg-gradient-to-b from-yellow-600 to-yellow-800 rounded-full"
                />
                <motion.div
                  animate={{ scaleY: [1, 0.98, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  className="w-2 h-32 md:h-40 bg-gradient-to-b from-yellow-600 to-yellow-800 rounded-full"
                />
              </motion.div>

              <div className="relative h-96 bg-gradient-to-b from-red-800 to-red-900 rounded-3xl overflow-hidden shadow-2xl border-8 border-yellow-700">
                <motion.div
                  animate={{ x: [0, -5, 0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 flex"
                >
                  {/* Left Curtain */}
                  <div className="w-1/2 bg-gradient-to-r from-red-700 via-red-600 to-red-700 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute top-0 bottom-0 bg-red-800/30"
                        style={{ 
                          left: `${i * 12.5}%`, 
                          width: '2px' 
                        }}
                      />
                    ))}
                  </div>
                  {/* Right Curtain */}
                  <div className="w-1/2 bg-gradient-to-r from-red-700 via-red-600 to-red-700 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute top-0 bottom-0 bg-red-800/30"
                        style={{ 
                          left: `${i * 12.5}%`, 
                          width: '2px' 
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Mail className="w-20 h-20 md:w-24 md:h-24 text-yellow-300" />
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
                Final Surprise! 🎭
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-4">
                Parde ke peeche kuch khaas hai...
              </p>
              <p className="text-lg md:text-xl text-gray-600 font-medium">
                Ready ho? 💝
              </p>
            </div>

            <button
              onClick={() => setCurtainOpen(true)}
              className="px-16 py-8 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white text-3xl font-black rounded-full shadow-2xl hover:scale-110 transition-all"
            >
              Curtain Kholo! 🎪
            </button>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative"
            >
              {/* Opening Curtains */}
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: '-100%' }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-red-700 via-red-600 to-red-700 z-20"
              />
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-r from-red-700 via-red-600 to-red-700 z-20"
              />

              {/* Revealed Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative"
              >
                <div className="absolute top-4 right-4">
                  <Heart className="w-10 h-10 text-red-500" fill="currentColor" />
                </div>

                <div className="text-center mb-8">
                  <Mail className="w-16 h-16 mx-auto mb-4 text-pink-600" />
                  <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                    Dil Ki Baat... 💌
                  </h3>
                </div>

                <div className="space-y-6 text-gray-900 leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="text-lg md:text-2xl font-semibold"
                  >
                    Bachcha,
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.7 }}
                    className="text-base md:text-xl font-medium"
                  >
                    Yeh website banane mein bahut waqt laga, par har second worth it tha. Kyunki yeh sab tumhare liye hai.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.9 }}
                    className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border-l-4 border-pink-500"
                  >
                    <p className="text-xl md:text-3xl text-purple-700 font-black italic">
                      "Tum mere dil mein ho,<br />
                      Tum mere khayalon mein ho,<br />
                      Tum hi meri duniya ho,<br />
                      Kyunki tum sabse special ho!" 💖
                    </p>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.1 }}
                    className="text-base md:text-xl font-medium"
                  >
                    634+ commits, infinite love, aur countless hours - sab sirf tumhare liye.
                    Is birthday par yahi dua hai ki tum hamesha khush raho! 🎂
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.3 }}
                    className="text-center pt-6 border-t-2 border-pink-200"
                  >
                    <p className="text-3xl md:text-4xl font-black text-pink-600 mb-2">
                      Happy Birthday! 🎉
                    </p>
                    <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                      Hamesha tumhara,
                    </p>
                    <p className="text-2xl md:text-3xl font-black text-purple-600 mt-2">
                      Bachcha 👨‍💻💝
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
