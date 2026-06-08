import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote } from 'lucide-react';

const quotes = [
  {
    text: 'Tumhare bina yeh dil adhura hai, Bachcha',
    author: 'Mere Dil Se',
  },
  {
    text: 'Har subah tumhari yaad se shuru hoti hai',
    author: 'Meri Subah',
  },
  {
    text: 'Tumhari hansi sunke hi din ban jaata hai',
    author: 'Tumhari Hansi',
  },
  {
    text: 'Bina kuch kahe bhi tum samajh jaati ho',
    author: 'Tumhari Samajh',
  },
  {
    text: 'Tumhara space mere dil mein exclusive hai',
    author: 'Dil Ka Database',
  },
];

export function LoveQuotes() {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center py-20 px-8">
      <div className="max-w-3xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-indigo-500 to-pink-600 bg-clip-text text-transparent mb-16 px-4"
        >
          Dil Ki Baatein 💭
        </motion.h2>

        <div className="relative h-64 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 relative mx-4">
                <Quote className="absolute top-4 left-4 text-pink-200" size={30} />
                <Quote className="absolute bottom-4 right-4 text-purple-200 transform rotate-180" size={30} />

                <p className="text-lg md:text-3xl text-gray-800 font-serif italic text-center mb-6 relative z-10 px-2">
                  "{quotes[currentQuote].text}"
                </p>
                <p className="text-right text-purple-600 font-semibold text-sm md:text-base px-2">
                  - {quotes[currentQuote].author}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-12">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuote(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentQuote
                  ? 'bg-pink-500 w-8'
                  : 'bg-gray-300 hover:bg-pink-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
