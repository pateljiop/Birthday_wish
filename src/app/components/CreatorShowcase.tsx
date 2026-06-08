import { motion } from 'motion/react';
import { Code, Heart, Coffee, Zap, Sparkles } from 'lucide-react';

export function CreatorShowcase() {
  const stats = [
    { icon: Code, value: '1000+', label: 'Lines of Code' },
    { icon: Heart, value: '∞', label: 'Love & Care' },
    { icon: Coffee, value: '10+', label: 'Cups of Coffee' },
    { icon: Zap, value: '48h', label: 'Development Time' },
  ];

  const techStack = ['React', 'TypeScript', 'Tailwind', 'Motion', 'Canvas', '❤️'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 py-16 md:py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header - SOLID WHITE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 bg-white rounded-3xl shadow-2xl p-6 md:p-8"
        >
          <Sparkles className="w-12 md:w-16 h-12 md:h-16 mx-auto mb-4 text-yellow-500" />
          <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Crafted with Love & Code ❤️
          </h2>
          <p className="text-lg md:text-2xl text-gray-800 font-bold">
            Yeh website ek dost ne apni pyaari Bachcha ke liye banaya hai
          </p>
        </motion.div>

        {/* Stats - SOLID WHITE cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 text-center shadow-xl"
              >
                <Icon className="w-12 h-12 mx-auto mb-3 text-pink-600" />
                <div className="text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-700 font-bold">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Creator Card - SOLID WHITE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-6 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Avatar */}
            <div className="w-24 md:w-32 h-24 md:h-32 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 p-1 flex-shrink-0">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-5xl md:text-6xl">
                👨‍💻
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-2">
                Made by: Tumhara Diwana Developer 💖
              </h3>
              <p className="text-base md:text-xl text-purple-700 mb-4 font-bold">
                Full-Stack Developer | Birthday Gift Specialist
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6 font-medium">
                Agar tumhe bhi apne special someone ke liye aisa birthday gift chahiye,
                toh is developer se zaroor dosti karo! 😊
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                {techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-purple-100 rounded-full text-sm text-purple-900 font-bold border-2 border-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-full shadow-lg text-base">
                  💬 Mujhse Baat Karo!
                </button>
                <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-full shadow-lg text-base">
                  ⭐ Share This Gift
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial - SOLID WHITE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-3xl shadow-xl p-6 md:p-8 text-center"
        >
          <p className="text-xl md:text-3xl text-gray-900 font-bold italic mb-4">
            "Aise creative aur romantic gifts sirf yahi banda bana sakta hai! 🔥"
          </p>
          <p className="text-purple-700 font-black text-lg">
            - Bachcha's future friends (probably) 😄
          </p>
        </motion.div>
      </div>
    </div>
  );
}
