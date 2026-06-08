import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Heart } from 'lucide-react';

export function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-pink-100 to-purple-100 flex items-center justify-center py-16 md:py-20 px-6 md:px-8">
      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Tumhare Liye Ek Khat... 💌
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 font-semibold">
            Dil se likha hai, dil se padho...
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', duration: 0.8 }}
          className="relative"
        >
          <AnimatePresence>
            {!isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="relative"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mb-8"
                >
                  <Mail className="w-24 md:w-32 h-24 md:h-32 mx-auto text-pink-600" />
                </motion.div>

                <button
                  onClick={() => setIsOpen(true)}
                  className="px-12 py-6 bg-gradient-to-r from-pink-600 to-red-600 text-white text-2xl font-black rounded-full shadow-2xl hover:shadow-pink-300 hover:scale-105 transition-all"
                >
                  Khat Kholo 💝
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-pink-200"
                style={{
                  background: 'linear-gradient(to bottom, #fffbf0, #fff)',
                }}
              >
                <div className="absolute top-4 right-4">
                  <Heart className="w-8 h-8 text-red-500" fill="currentColor" />
                </div>

                {/* Letter header */}
                <div className="border-b-2 border-pink-200 pb-6 mb-6">
                  <p className="text-right text-gray-600 font-semibold text-sm md:text-base">9 June 2026</p>
                  <h3 className="text-3xl md:text-4xl font-black text-pink-600 text-center mt-4">
                    Meri Pyaari Bulbul ko,
                  </h3>
                </div>

                {/* Letter content */}
                <div className="space-y-6 text-gray-900 leading-relaxed">
                  <p className="text-base md:text-xl font-medium">
                    Bachcha, aaj tumhara din hai. Aur main chahta hoon ki yeh din tumhare liye sabse khaas ho.
                  </p>

                  <p className="text-base md:text-xl font-medium">
                    Jab se tum mili ho, zindagi mein rang aa gaye hain. Har din tumhare saath special lagta hai.
                    Tumhari muskurahat dekh kar dil khush ho jata hai. 💖
                  </p>

                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border-l-4 border-pink-500">
                    <p className="text-lg md:text-2xl text-purple-700 font-black italic">
                      "Duniya mein kitni bhi ladkiya ho,<br />
                      Meri nazar mein sirf tum ho.<br />
                      Tumhare bina zindagi adhoori hai,<br />
                      Kyunki tum hi meri poori duniya ho." 🌍💕
                    </p>
                  </div>

                  <p className="text-base md:text-xl font-medium">
                    Is website ko banane mein maine apna pura dil lagaya hai. Har line of code, har color,
                    har animation - sab kuch tumhare liye hai. Kyunki tum special ho, Bachcha.
                  </p>

                  <p className="text-base md:text-xl font-medium">
                    Maine <span className="font-black text-pink-600">634+ commits</span> kiye, raat-raat bhar jagkar socha ki kaise tumhe smile aa sakti hai.
                    Aur agar tumhe yeh website pasand aayi, toh meri saari mehnat safal ho gayi. 😊
                  </p>

                  <p className="text-base md:text-xl font-medium">
                    12 September 2024 se ab tak ka safar... har moment precious raha hai.
                    Tumhare bina kuch bhi complete nahi lagta.
                  </p>

                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-l-4 border-orange-500">
                    <p className="text-lg md:text-2xl text-orange-700 font-black">
                      Tumhara space mere dil mein hamesha exclusive hai aur rahega! 👑💖
                    </p>
                  </div>
                </div>

                {/* Letter footer */}
                <div className="border-t-2 border-pink-200 pt-8 mt-8 text-center">
                  <p className="text-3xl md:text-4xl font-black text-pink-600 mb-4">
                    Happy Birthday, Meri Jaan! 🎂🎉
                  </p>
                  <p className="text-lg md:text-xl text-gray-700 font-semibold mb-2">
                    Hamesha tumhara fav
                  </p>
                  <p className="text-2xl md:text-3xl font-black text-purple-600">
                     (Your Developer) 👨‍💻💝
                  </p>
                </div>

                {/* Decorative hearts */}
                <div className="flex justify-center gap-2 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    >
                      <Heart className="w-4 h-4 text-pink-400" fill="currentColor" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
