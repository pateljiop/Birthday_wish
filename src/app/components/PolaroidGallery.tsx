import { motion } from 'motion/react';
import { Camera, MapPin, Calendar } from 'lucide-react';

const memories = [
  {
    title: 'Pehli Baat',
    date: '12 Sept 2024',
    description: 'College enquiry... aur tumhara voice pehli baar suna',
    emoji: '💬',
    color: 'from-pink-200 to-pink-300',
  },
  {
    title: 'Baatein Shuru Hui',
    date: 'September 2024',
    description: 'Roz raat ko late night tak baatein... neend kho gayi thi',
    emoji: '🌙',
    color: 'from-purple-200 to-purple-300',
  },
  {
    title: 'Pehli Mulaqat',
    date: '12 Nov 2024',
    description: 'Tumhare area mein... dil ki dhadkan tez ho gayi thi',
    emoji: '❤️',
    color: 'from-red-200 to-red-300',
  },
  {
    title: 'Har Din Special',
    date: 'Everyday',
    description: 'Tumhari yaad, tumhari baatein... sab kuch special',
    emoji: '✨',
    color: 'from-blue-200 to-blue-300',
  },
];

export function PolaroidGallery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 py-20 px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 px-4 bg-white rounded-3xl shadow-xl p-6 md:p-8 max-w-3xl mx-auto"
      >
        <Camera className="w-12 md:w-16 h-12 md:h-16 mx-auto mb-4 text-pink-600" />
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
          Memories Ka Album 📸
        </h2>
        <p className="text-base md:text-xl text-gray-700 font-semibold">
          Kuch yaadein jo dil mein hamesha reh jayengi...
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {memories.map((memory, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, rotate: -10 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              rotate: index % 2 === 0 ? 3 : -3,
              y: -10,
              transition: { duration: 0.2 }
            }}
            className="cursor-pointer"
          >
            {/* Polaroid frame */}
            <div className="bg-white p-4 rounded-lg shadow-2xl">
              {/* Photo area */}
              <div className={`bg-gradient-to-br ${memory.color} h-64 rounded flex items-center justify-center mb-4 relative overflow-hidden`}>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                  className="text-8xl"
                >
                  {memory.emoji}
                </motion.div>

                {/* Date badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-gray-600" />
                  <span className="text-xs font-medium text-gray-700">{memory.date}</span>
                </div>
              </div>

              {/* Caption area */}
              <div className="text-center">
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {memory.title}
                </h3>
                <p className="text-sm text-gray-600 italic leading-relaxed">
                  "{memory.description}"
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-16 px-4 bg-white rounded-3xl shadow-xl p-6 md:p-8 max-w-3xl mx-auto"
      >
        <p className="text-xl md:text-2xl text-gray-900 font-black mb-2">
          Aur bhi bahut saari yaadein baaki hain... ✨
        </p>
        <p className="text-base md:text-lg text-gray-700 font-semibold">
          Jo hum aage bhi banaate rahenge! 💕
        </p>
      </motion.div>
    </div>
  );
}
