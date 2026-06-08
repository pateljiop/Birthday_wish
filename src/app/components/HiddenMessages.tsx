import { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, Unlock, Heart } from 'lucide-react';

const messages = [
  {
    locked: "Ek Secret Message...",
    unlocked: "Tumhari muskurahat dekh kar mera din ban jata hai! Har baar jab tum smile karti ho, mera dil khush ho jata hai. 😊💕",
  },
  {
    locked: "Ek Aur Secret...",
    unlocked: "Raat ko tumhari yaad aati hai... sone se pehle tumhare baare mein sochta hoon. Tum ho to neend bhi achi aati hai! 🌙✨",
  },
  {
    locked: "Tumhare Liye Kuch Khaas...",
    unlocked: "Is website mein har ek pixel, har ek word, har ek color tumhare liye socha hai. 634+ commits sirf isliye kiye! 💻❤️",
  },
  {
    locked: "Dil Ki Baat...",
    unlocked: "Tum janti ho? Tumse baat karte waqt time ka pata hi nahi chalta. Ghanton baat kar sakta hoon! 💭💝",
  },
  {
    locked: "Final Secret...",
    unlocked: "Tumhara space mere dil mein hamesha hamesha ke liye reserved hai. Koi aur kabhi nahi le sakta! 👑💖",
  },
];

export function HiddenMessages() {
  const [revealed, setRevealed] = useState<boolean[]>(Array(messages.length).fill(false));

  const toggleReveal = (index: number) => {
    const newRevealed = [...revealed];
    newRevealed[index] = !newRevealed[index];
    setRevealed(newRevealed);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-16 md:py-20 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <Lock className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-6 text-purple-600" />
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
            Hidden Messages 🔐
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 font-semibold">
            Kuch secret messages hain tumhare liye... click karke dekho! 💌
          </p>
        </motion.div>

        {/* Messages */}
        <div className="space-y-6">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleReveal(index)}
                className="w-full text-left bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className={`p-6 md:p-8 ${revealed[index] ? 'bg-gradient-to-r from-pink-50 to-purple-50' : 'bg-white'}`}>
                  <div className="flex items-center gap-4 mb-4">
                    {revealed[index] ? (
                      <Unlock className="w-8 h-8 text-green-500 flex-shrink-0" />
                    ) : (
                      <Lock className="w-8 h-8 text-purple-600 flex-shrink-0" />
                    )}
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900">
                      {revealed[index] ? "Unlocked! 🎉" : message.locked}
                    </h3>
                  </div>

                  {revealed[index] ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.5 }}
                      className="pl-12"
                    >
                      <p className="text-lg md:text-2xl text-gray-700 leading-relaxed font-semibold">
                        {message.unlocked}
                      </p>
                      <div className="flex gap-2 mt-4">
                        <Heart className="w-6 h-6 text-red-500" fill="currentColor" />
                        <Heart className="w-6 h-6 text-pink-500" fill="currentColor" />
                        <Heart className="w-6 h-6 text-purple-500" fill="currentColor" />
                      </div>
                    </motion.div>
                  ) : (
                    <p className="text-base md:text-lg text-gray-500 font-medium pl-12">
                      Click karke unlock karo... 🔓
                    </p>
                  )}
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        {revealed.every(r => r) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center mt-12 bg-white rounded-3xl shadow-xl p-8 md:p-12"
          >
            <Heart className="w-16 h-16 mx-auto mb-4 text-red-500" fill="currentColor" />
            <p className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Sab unlock kar liya! 🎊
            </p>
            <p className="text-xl md:text-2xl text-gray-700 font-semibold">
              Ab tum jaan gayi ki main tumse kitna pyar karta hoon! 💖✨
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
