import { motion } from 'motion/react';
import { Calendar, MapPin, Heart, MessageCircle } from 'lucide-react';

const memories = [
  {
    date: '12 September 2024',
    title: 'Pehli Baat',
    description: 'College enquiry chat se shuru hui humari kahani... tumne hi pehli baar mere dil ki ghanti bajayi thi.',
    icon: MessageCircle,
    color: 'from-pink-400 to-pink-600',
  },
  {
    date: '12 November 2024',
    title: 'Pehli Mulaqat',
    description: 'Tumhare area mein pehli baar mile the... woh din, woh lamhe, sab kuch aaj bhi yaad hai.',
    icon: MapPin,
    color: 'from-purple-400 to-purple-600',
  },
  {
    date: 'Har Din',
    title: 'Tumhari Yaadein',
    description: 'Bina propose kiye bhi jo pyaar hua, woh sab se special hai. Tumhara space mere dil mein hamesha exclusive rahega.',
    icon: Heart,
    color: 'from-red-400 to-red-600',
  },
  {
    date: '09 June 2026',
    title: 'Aaj - Tumhara Birthday!',
    description: 'Is special din par, I just want to say - I miss you a lot, Bulbul. More than words can say. Happy Birthday! 🎂',
    icon: Calendar,
    color: 'from-blue-400 to-blue-600',
  },
];

export function MemoryTimeline() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-20 px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
          Humari Kahani 📖
        </h2>
        <p className="text-xl text-gray-600">
          Kuch special lamhe jo hamesha yaad rahenge...
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-300 via-purple-300 to-blue-300 hidden md:block pointer-events-none" />

        {memories.map((memory, index) => {
          const Icon = memory.icon;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-16 ${isEven ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'}`}
            >
              <div className={`md:w-1/2 ${isEven ? '' : 'md:ml-auto'}`}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl shadow-xl p-6 relative"
                >
                  {/* Icon badge */}
                  <div className={`absolute ${isEven ? 'md:right-0 md:transform md:translate-x-1/2' : 'md:left-0 md:transform md:-translate-x-1/2'} -top-4 md:top-1/2 md:-translate-y-1/2 left-1/2 transform -translate-x-1/2 md:translate-x-0`}>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${memory.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="text-white" size={28} />
                    </div>
                  </div>

                  <div className="pt-8 md:pt-0">
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-3">
                      <p className="text-sm font-semibold text-purple-700">{memory.date}</p>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{memory.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{memory.description}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
