import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

const shayaris = [
  {
    lines: [
      'Tum mile toh zindagi mein rang aa gaye,',
      'Tumhari muskurahat ne dil ko chhoo liya.',
      'Duniya ki koi baat ab samajh nahi aati,',
      'Kyunki tum hi ho jo mere dil mein bas gayi. 💖',
    ],
    color: 'from-pink-500 to-rose-600',
  },
  {
    lines: [
      'Tumhare bina yeh dil adhura lagta hai,',
      'Har pal tumhari yaad satati hai.',
      'Jo pyar maine tumse kiya hai,',
      'Woh duniya ki sabse sachchi mohabbat hai. 💕',
    ],
    color: 'from-purple-500 to-pink-600',
  },
  {
    lines: [
      'Bulbul ho tum, aur main tumhara aashiq,',
      'Tumhare bina ab kuch bhi nahi lagta theek.',
      'Chahe duniya kuch bhi kahe,',
      'Mere dil mein tumhara naam hamesha rahe. ❤️',
    ],
    color: 'from-red-500 to-pink-600',
  },
  {
    lines: [
      'Raat ko jab neend nahi aati,',
      'Tumhari yaadein saath deti hain.',
      'Tumse baat karne ki chahat,',
      'Dil ko sukoon deti hai. 🌙',
    ],
    color: 'from-indigo-500 to-purple-600',
  },
  {
    lines: [
      '12 September 2024 se lekar aaj tak,',
      'Har din tumhara intezaar raha.',
      'Tumhare saath ka har lamha,',
      'Mere liye sabse khaas raha. ✨',
    ],
    color: 'from-blue-500 to-cyan-600',
  },
  {
    lines: [
      'Bachcha bulata hoon tumhe pyar se,',
      'Kyunki tum ho mere dil ki dhadkan.',
      'Tumhare bina adhuri hai zindagi,',
      'Tum ho toh hai sab kuch haseen. 💝',
    ],
    color: 'from-orange-500 to-pink-600',
  },
];

export function RomanticShayari() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-16 md:py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 bg-white rounded-3xl shadow-xl p-6 md:p-8"
        >
          <Sparkles className="w-12 md:w-16 h-12 md:h-16 mx-auto mb-4 text-pink-600" />
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Dil Ki Baatein 💝
          </h2>
          <p className="text-lg md:text-xl text-gray-700 font-semibold">
            Kuch shayari tumhare naam...
          </p>
        </motion.div>

        {/* Shayaris */}
        <div className="space-y-8">
          {shayaris.map((shayari, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${shayari.color} p-1`}>
                <div className="bg-white rounded-3xl p-8 md:p-12">
                  <div className="flex items-start gap-4 mb-6">
                    <Heart className="w-8 h-8 text-pink-600 flex-shrink-0 mt-2" fill="currentColor" />
                    <div className="space-y-3 flex-1">
                      {shayari.lines.map((line, lineIndex) => (
                        <motion.p
                          key={lineIndex}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + lineIndex * 0.1 }}
                          className="text-xl md:text-2xl text-gray-900 font-semibold leading-relaxed"
                        >
                          {line}
                        </motion.p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 bg-white rounded-3xl shadow-xl p-6 md:p-8"
        >
          <p className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
            Tumhare liye hai yeh saare jazbaat! 💖
          </p>
          <p className="text-lg md:text-xl text-gray-700 font-semibold">
            Dil se likha, dil se padho... ✨
          </p>
        </motion.div>
      </div>
    </div>
  );
}
