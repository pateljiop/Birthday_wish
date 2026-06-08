import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function FinalMessage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center py-16 md:py-20 px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center"
      >
        {/* Heart */}
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mb-8"
        >
          <Heart className="w-20 md:w-24 h-20 md:h-24 mx-auto text-pink-600" fill="currentColor" />
        </motion.div>

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">
          Komal,
        </h2>

        {/* Content */}
        <div className="space-y-6 text-lg md:text-2xl text-gray-800 leading-relaxed font-medium mb-12">
          <p>
            Yeh website sirf ek chhoti si koshish hai tumhe wish karne ki, Bachcha.
          </p>
          <p>
            Maine socha ki is baar kuch alag karu, kuch aisa jo tumhe hamesha yaad rahe... 💝
          </p>
          <p>
            634+ commits, countless hours, aur infinite pyar - sab tumhare liye.
            Har pixel, har word, har animation mein mera dil hai.
          </p>

          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 md:p-8 border-4 border-pink-200 my-8">
            <p className="font-black text-purple-700 text-2xl md:text-4xl italic">
              "Duniya chahe kuch bhi kahe,
              <br />
              mere dil mein tumhara space hamesha special rahega.
              <br />
              Tum ho meri Bulbul, meri Bachcha...
              <br />
              Aur hamesha rahogi!" 👑💖
            </p>
          </div>

          <p className="text-xl md:text-3xl font-black text-pink-600">
            Tumhari khushi = Meri khushi ✨
          </p>
        </div>

        {/* Birthday Card */}
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-8 md:p-12 border-4 border-pink-300 shadow-xl mb-8">
          <p className="text-3xl md:text-5xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Once Again,
          </p>
          <p className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
            Happy Birthday! 🎉
          </p>
          <p className="text-gray-900 text-lg md:text-xl font-bold">
            Tumhari khushi ke liye 634 commits 😄
          </p>
        </div>

        {/* Footer */}
        <div className="text-gray-700 space-y-2">
          <p className="font-black text-lg">Made with 💖 by Your fav</p>
          <p className="text-base font-semibold text-gray-600">© 2026 | All memories reserved forever</p>
        </div>
      </motion.div>
    </div>
  );
}
