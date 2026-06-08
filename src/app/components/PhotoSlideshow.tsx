import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const photos = [
  {
    title: 'Our First Chat 💬',
    date: '12 September 2024',
    description: 'College enquiry ke bahane pehli baar tumse baat hui... tumhari awaaz sunke dil ko ek alag hi feeling aayi. Us din se sab change ho gaya.',
    emoji: '💬',
    bgColor: 'from-pink-400 to-rose-500',
  },
  {
    title: 'Baatein Shuru Hui 📱',
    date: 'Mid September 2024',
    description: 'Dhire dhire baatein badhne lagi. Tumse baat karne mein waqt ka pata hi nahi chalta tha. Har message ka intezaar rehta tha.',
    emoji: '📱',
    bgColor: 'from-blue-400 to-cyan-500',
  },
  {
    title: 'Late Night Talks 🌙',
    date: 'September - November 2024',
    description: 'Raat 2-3 baje tak baatein... neend bhi bhul jaate the. Tumhare saath baat karne mein jo maza tha, wo kisi aur cheez mein nahi tha.',
    emoji: '🌙',
    bgColor: 'from-purple-400 to-indigo-500',
  },
  {
    title: 'First Meeting ❤️',
    date: '12 November 2024',
    description: 'Tumhare area mein pehli baar mile... dil ki dhadkan itni tez thi ki control karna mushkil tha. Tumhe dekhke sabkuch perfect lag raha tha!',
    emoji: '❤️',
    bgColor: 'from-red-400 to-pink-500',
  },
  {
    title: 'Connection Badha 💞',
    date: 'November 2024 - March 2026',
    description: 'Har din ka ek nayi yaad... tumhare saath ki har choti baat special thi. Tumhare bina kuch bhi complete nahi lagta tha.',
    emoji: '💞',
    bgColor: 'from-pink-400 to-purple-500',
  },
  {
    title: 'Every Single Day 💫',
    date: 'March 2026 - Present',
    description: 'Roz tumhari yaad aati hai... har pal tumhare saath (dil mein) rehta hoon. Tumhara space mere dil mein permanent hai!',
    emoji: '✨',
    bgColor: 'from-indigo-400 to-purple-500',
  },
  {
    title: 'Today - Your Birthday! 🎂',
    date: '9 June 2026',
    description: 'Aaj tumhara special din hai! Is website ke through tumhe wish kar raha hoon. 634+ commits, infinite love, aur countless hours - sab tumhare liye! Happy Birthday Bachcha! 🎉💖',
    emoji: '🎂',
    bgColor: 'from-yellow-400 to-orange-500',
  },
];

export function PhotoSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex(prev => (prev + 1) % photos.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex(prev => (prev - 1 + photos.length) % photos.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex(prev => (prev + 1) % photos.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-gray-200 py-16 md:py-20 px-6 md:px-8 flex items-center justify-center">
      <div className="max-w-5xl w-full">
        {/* Header - SOLID background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 bg-white rounded-3xl shadow-xl p-6 md:p-8"
        >
          <Camera className="w-12 md:w-16 h-12 md:h-16 mx-auto mb-4 text-pink-600" />
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Our Story in Pictures 📸
          </h2>
          <p className="text-lg md:text-xl text-gray-700 font-semibold">
            Swipe through our beautiful memories...
          </p>
        </motion.div>

        {/* Slideshow */}
        <div className="relative h-[550px] md:h-[600px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction < 0 ? 300 : -300 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full max-w-2xl"
            >
              {/* SOLID WHITE card */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Photo area with gradient */}
                <div className={`h-80 bg-gradient-to-br ${photos[currentIndex].bgColor} flex items-center justify-center relative`}>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-9xl"
                  >
                    {photos[currentIndex].emoji}
                  </motion.div>
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                    <span className="text-sm font-bold text-gray-800">{photos[currentIndex].date}</span>
                  </div>
                </div>

                {/* Caption - SOLID WHITE */}
                <div className="p-6 md:p-8 bg-white">
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                    {photos[currentIndex].title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-semibold">
                    "{photos[currentIndex].description}"
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={handlePrevious}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 md:p-4 rounded-full hover:bg-gray-100 transition-all z-10 shadow-xl"
          >
            <ChevronLeft className="w-6 md:w-8 h-6 md:h-8 text-gray-900" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 md:p-4 rounded-full hover:bg-gray-100 transition-all z-10 shadow-xl"
          >
            <ChevronRight className="w-6 md:w-8 h-6 md:h-6 md:h-8 text-gray-900" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-pink-600 w-8' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
