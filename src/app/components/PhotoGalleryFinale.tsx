import { motion } from 'motion/react';
import { Camera, Heart } from 'lucide-react';

const memories = [
  {
    title: "First Chat",
    date: "12 Sept 2024",
    memory: "College enquiry... aur tumse pehli baar baat hui 💬",
  },
  {
    title: "Late Nights",
    date: "Sept-Nov 2024",
    memory: "2-3 baje tak baatein karte the hum 🌙",
  },
  {
    title: "First Meeting",
    date: "12 Nov 2024",
    memory: "Tumhare area mein pehli baar mile ❤️",
  },
  {
    title: "Special Moments",
    date: "Nov 2024-Mar 2026",
    memory: "Har din ek nayi yaad bani ✨",
  },
  {
    title: "Today",
    date: "9 June 2026",
    memory: "Tumhara birthday - tumhara special din! 🎂",
  },
  {
    title: "Forever",
    date: "Always",
    memory: "Tum mere dil me ek exclusive jagah deserve krti ho  💖",
  },
];

export function PhotoGalleryFinale() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 py-16 md:py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Camera className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-6 text-pink-400" />
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Our Memory Lane 📸
          </h2>
          <p className="text-xl md:text-2xl text-pink-200 font-semibold">
            Kuch moments jo hamesha yaad rahenge...
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Photo Placeholder with Gradient */}
              <div className="relative h-64 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-8xl"
                >
                  {['💬', '🌙', '❤️', '✨', '🎂', '💖'][index]}
                </motion.div>
                
                {/* Date Badge */}
                <div className="absolute top-4 right-4 bg-white px-3 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-bold text-gray-800">{memory.date}</span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  {memory.title}
                </h3>
                <p className="text-base text-gray-700 font-semibold">
                  {memory.memory}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 bg-white/10 backdrop-blur rounded-3xl p-8 md:p-12 border border-white/20"
        >
          <Heart className="w-12 h-12 mx-auto mb-4 text-pink-400" fill="currentColor" />
          <p className="text-3xl md:text-4xl font-black text-white mb-4">
            Yeh sirf shuruat hai! 💫
          </p>
          <p className="text-xl md:text-2xl text-pink-200 font-semibold">
            Aur bhi bahut saari yaadein banaani hain tumhare saath! ✨
          </p>
        </motion.div>
      </div>
    </div>
  );
}
