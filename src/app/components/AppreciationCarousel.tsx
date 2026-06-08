import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const messages = [
  {
    title: "Tumhari Muskurahat",
    message: "Bachcha, tumhari smile dekh kar mera poora din ban jata hai. Jab tum hasti ho, duniya ki saari problems choti lag jati hain. Keep smiling! 😊",
    emoji: "😊",
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Tumhara Dil",
    message: "Tumhara dil kitna saaf hai, Bachcha. Tum sabka itna khayal rakhti ho. Tumhari caring nature se main impressed hoon hamesha! 💖",
    emoji: "💖",
    color: "from-pink-400 to-red-500",
  },
  {
    title: "Tumhari Vibes",
    message: "Tumhari positive vibes se har jagah achhi energy aati hai. Tumhare saath time spend karna hamesha special lagta hai! ✨",
    emoji: "✨",
    color: "from-purple-400 to-pink-500",
  },
  {
    title: "Tumhari Soul",
    message: "Tumhari soul beautiful hai, Bachcha. Inside out tum perfect ho. Tumhari simplicity aur genuineness sabse alag hai! 🌸",
    emoji: "🌸",
    color: "from-green-400 to-teal-500",
  },
  {
    title: "Tumhari Khushi",
    message: "Tumhari khushi meri khushi hai. Jab tum excited hoti ho, mujhe bhi wo energy feel hoti hai. Hamesha khush raho! 🎉",
    emoji: "🎉",
    color: "from-blue-400 to-cyan-500",
  },
  {
    title: "Tumhari Uniqueness",
    message: "Tum ek unique person ho, Bachcha. Tumhari har baat, har habit special hai. Tumhare jaisa koi nahi hai! 👑",
    emoji: "👑",
    color: "from-yellow-500 to-amber-600",
  },
  {
    title: "Tumhari Strength",
    message: "Tum kitni strong ho! Mushkil waqt mein bhi tum haar nahi manti. Tumhari yeh strength inspiring hai! 💪",
    emoji: "💪",
    color: "from-red-400 to-orange-500",
  },
  {
    title: "Tumhari Kindness",
    message: "Tumhari kindness se duniya better jagah lagti hai. Tum sabke saath kitne achhe se baat karti ho! 🤗",
    emoji: "🤗",
    color: "from-pink-300 to-rose-400",
  },
  {
    title: "Tumhare Sapne",
    message: "Tumhare dreams aur goals mujhe motivate karte hain. Main chahta hoon tumhare saare sapne pure hon! 🌟",
    emoji: "🌟",
    color: "from-indigo-400 to-purple-500",
  },
  {
    title: "Humara Bond",
    message: "Jo bond humara hai, wo special hai. 12 September 2024 se ab tak ka safar amazing raha hai! 🤝",
    emoji: "🤝",
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "Forever Promise",
    message: "Tumhara space mere dil mein hamesha rahega. Chahe kuch bhi ho, yeh promise hamesha rahega! 💝",
    emoji: "💝",
    color: "from-rose-400 to-pink-600",
  },
];

export function AppreciationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, autoplay]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % messages.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + messages.length) % messages.length);
    setAutoplay(false);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setAutoplay(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-16 md:py-20 px-6 md:px-8 flex items-center justify-center">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <Heart className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-6 text-pink-600" fill="currentColor" />
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
            Your Journey 💫
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 font-semibold">
            11 cheezein jo main tumhare baare mein appreciate karta hoon...
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative min-h-[450px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 300 : -300, rotateY: 90 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: direction < 0 ? 300 : -300, rotateY: -90 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full max-w-3xl"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Emoji Section */}
                <div className={`bg-gradient-to-br ${messages[currentIndex].color} p-12 md:p-16 text-center relative`}>
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-8xl md:text-9xl mb-6"
                  >
                    {messages[currentIndex].emoji}
                  </motion.div>
                  
                  {/* Counter Badge */}
                  <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg">
                    <span className="text-lg md:text-xl font-black text-gray-900">
                      {currentIndex + 1}/{messages.length}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 bg-white">
                  <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 text-center">
                    {messages[currentIndex].title}
                  </h3>
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center font-semibold">
                    {messages[currentIndex].message}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={() => { handlePrev(); }}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white p-4 md:p-5 rounded-full shadow-2xl hover:bg-gray-100 hover:scale-110 transition-all z-20"
          >
            <ChevronLeft className="w-8 h-8 text-gray-900" />
          </button>
          <button
            onClick={() => { handleNext(); setAutoplay(false); }}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white p-4 md:p-5 rounded-full shadow-2xl hover:bg-gray-100 hover:scale-110 transition-all z-20"
          >
            <ChevronRight className="w-8 h-8 text-gray-900" />
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-12 flex-wrap">
          {messages.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all rounded-full ${
                index === currentIndex
                  ? 'bg-pink-600 w-10 h-3'
                  : 'bg-gray-400 w-3 h-3 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
