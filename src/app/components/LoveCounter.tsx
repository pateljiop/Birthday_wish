import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Calendar, Clock, Sparkles } from 'lucide-react';

export function LoveCounter() {
  const [counts, setCounts] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const firstMeet = new Date('2024-09-12');

    const updateCounter = () => {
      const now = new Date();
      const diff = now.getTime() - firstMeet.getTime();

      setCounts({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  const counters = [
    { value: counts.days, label: 'Days', icon: Calendar, color: 'from-pink-500 to-pink-600' },
    { value: counts.hours, label: 'Hours', icon: Clock, color: 'from-purple-500 to-purple-600' },
    { value: counts.minutes, label: 'Minutes', icon: Sparkles, color: 'from-blue-500 to-blue-600' },
    { value: counts.seconds, label: 'Seconds', icon: Heart, color: 'from-rose-500 to-rose-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 to-purple-100 py-16 md:py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 bg-white rounded-3xl shadow-xl p-6 md:p-8"
        >
          <Heart className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 text-pink-600" fill="currentColor" />
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Humari Kahani Shuru Hui...
          </h2>
          <p className="text-lg md:text-xl font-bold text-gray-700">
            12 September 2024 se ab tak
          </p>
        </motion.div>

        {/* Counter Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {counters.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
              >
                <div className={`bg-gradient-to-br ${item.color} p-6 md:p-8 text-white`}>
                  <Icon className="w-10 md:w-12 h-10 md:h-12 mx-auto mb-3" />
                  <div className="text-5xl md:text-6xl font-black mb-2">
                    {item.value}
                  </div>
                  <div className="text-sm md:text-base uppercase font-bold tracking-wider">
                    {item.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center bg-white rounded-3xl shadow-xl p-6 md:p-8"
        >
          <p className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
            Har second tumhare saath special hai! 💖
          </p>
          <p className="text-lg md:text-xl text-gray-700 font-semibold">
            Aur yeh silsila chalta rahega... forever! ✨
          </p>
        </motion.div>
      </div>
    </div>
  );
}
