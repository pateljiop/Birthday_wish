import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const reasons = [
  {
    number: 1,
    reason: "Tumhari Muskurahat",
    description: "Jab tum muskurati ho, puri duniya roshni se bhar jati hai. Tumhari smile dekh kar din ban jata hai! 😊",
    emoji: "😊",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    number: 2,
    reason: "Tumhari Awaaz",
    description: "Tumhari awaaz sunke dil ko sukoon milta hai. Ghanton baat kar sakta hoon tumse! 🎵",
    emoji: "🎵",
    gradient: "from-pink-400 to-rose-500",
  },
  {
    number: 3,
    reason: "Tumhari Simplicity",
    description: "Tum jitni simple ho, utni hi khoobsurat ho. Tumhari natural beauty sabse alag hai! 🌸",
    emoji: "🌸",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    number: 4,
    reason: "Tumhara Caring Nature",
    description: "Tum sabka itna khayal rakhti ho. Tumhara yeh pyar aur caring nature amazing hai! 💝",
    emoji: "💝",
    gradient: "from-red-400 to-pink-500",
  },
  {
    number: 5,
    reason: "Tumhari Baatein",
    description: "Tumse baat karte waqt time ka pata hi nahi chalta. Har baat special lagti hai! 💭",
    emoji: "💭",
    gradient: "from-blue-400 to-purple-500",
  },
  {
    number: 6,
    reason: "Tumhari Presence",
    description: "Tumhari presence se hi sab kuch beautiful ban jata hai. Tum ho to sab hai! ✨",
    emoji: "✨",
    gradient: "from-indigo-400 to-purple-500",
  },
  {
    number: 7,
    reason: "Tumhara Understanding",
    description: "Tum mujhe samajhti ho bilkul. Yeh understanding sabse precious hai! 🤝",
    emoji: "🤝",
    gradient: "from-green-400 to-teal-500",
  },
  {
    number: 8,
    reason: "Tumhari Har Choti Baat",
    description: "Tumhari har choti se choti baat bhi mujhe pasand hai. Sab kuch perfect hai tumhare baare mein! 💖",
    emoji: "💖",
    gradient: "from-pink-500 to-red-500",
  },
  {
    number: 9,
    reason: "Tum... Bas Tum!",
    description: "Kyunki tum HO! Aur tumhara hona hi kaafi hai mere liye. I love everything about you! 👑",
    emoji: "👑",
    gradient: "from-purple-500 to-pink-600",
  },
];

export function ReasonsILoveYou() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reasons.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reasons.length) % reasons.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 py-16 md:py-20 px-6 md:px-8 flex items-center justify-center">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <Heart className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-6 text-red-500" fill="currentColor" />
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
            9 Reasons I Love You 💕
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 font-semibold">
            (Actually, there are infinite reasons... yeh sirf top 9 hain!)
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative min-h-[500px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 300 : -300, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction < 0 ? 300 : -300, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full max-w-3xl"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Number Badge */}
                <div className={`bg-gradient-to-r ${reasons[currentIndex].gradient} p-8 md:p-12 text-center relative`}>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-8xl md:text-9xl mb-6"
                  >
                    {reasons[currentIndex].emoji}
                  </motion.div>
                  
                  <div className="absolute top-4 left-4 bg-white rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-lg">
                    <span className="text-3xl md:text-4xl font-black text-gray-900">
                      {reasons[currentIndex].number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 bg-white">
                  <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 text-center">
                    {reasons[currentIndex].reason}
                  </h3>
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center font-semibold">
                    {reasons[currentIndex].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white p-4 md:p-5 rounded-full shadow-2xl hover:bg-gray-100 transition-all z-20 hover:scale-110"
          >
            <ChevronLeft className="w-8 h-8 text-gray-900" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white p-4 md:p-5 rounded-full shadow-2xl hover:bg-gray-100 transition-all z-20 hover:scale-110"
          >
            <ChevronRight className="w-8 h-8 text-gray-900" />
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {reasons.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`transition-all rounded-full ${
                index === currentIndex
                  ? 'bg-pink-600 w-12 h-4'
                  : 'bg-gray-400 w-4 h-4 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 bg-white rounded-3xl shadow-xl p-6 md:p-8"
        >
          <p className="text-2xl md:text-3xl font-black text-gray-900">
            Aur bhi bahut saari reasons hain... 💖
          </p>
          <p className="text-lg md:text-xl text-gray-700 font-semibold mt-2">
            Par sabse badi reason - TUM HO! ✨
          </p>
        </motion.div>
      </div>
    </div>
  );
}
