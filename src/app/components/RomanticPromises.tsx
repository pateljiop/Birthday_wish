import { motion } from 'motion/react';
import { Heart, Star, Sparkles, Sun, Moon, Coffee } from 'lucide-react';

const promises = [
  {
    icon: Heart,
    title: 'Hamesha Tumhara Saath',
    description: 'Chahe duniya kuch bhi kahe, main hamesha tumhare saath hoon',
    color: 'from-red-500 to-pink-600',
    bgColor: 'from-red-50 to-pink-50',
  },
  {
    icon: Star,
    title: 'Tumhari Khushi',
    description: 'Tumhari muskurahat hi meri sabse badi khushi hai',
    color: 'from-yellow-500 to-orange-600',
    bgColor: 'from-yellow-50 to-orange-50',
  },
  {
    icon: Sparkles,
    title: 'Special Treatment',
    description: 'Tumhara space mere dil mein hamesha exclusive rahega',
    color: 'from-purple-500 to-pink-600',
    bgColor: 'from-purple-50 to-pink-50',
  },
  {
    icon: Sun,
    title: 'Roz Nayi Subah',
    description: 'Har din tumhe smile dene ki koshish karunga',
    color: 'from-orange-500 to-red-600',
    bgColor: 'from-orange-50 to-red-50',
  },
  {
    icon: Moon,
    title: 'Raat Bhar Yaad',
    description: 'Tumhari yaad aati hai har pal, har waqt',
    color: 'from-indigo-500 to-purple-600',
    bgColor: 'from-indigo-50 to-purple-50',
  },
  {
    icon: Coffee,
    title: 'Tumhare Liye Kuch Bhi',
    description: 'Tumhari khushi ke liye main kuch bhi kar sakta hoon',
    color: 'from-brown-500 to-amber-600',
    bgColor: 'from-amber-50 to-orange-50',
  },
];

export function RomanticPromises() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-16 md:py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <Heart className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-6 text-red-500" fill="currentColor" />
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
            Mera Vaada Tumse 💝
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 font-semibold">
            Kuch promises jo main tumse karta hoon...
          </p>
        </motion.div>

        {/* Promises Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {promises.map((promise, index) => {
            const Icon = promise.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
              >
                <div className={`bg-gradient-to-br ${promise.bgColor} p-6 md:p-8 border-b-4 border-pink-200`}>
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${promise.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-4">
                    {promise.title}
                  </h3>
                  
                  <p className="text-base md:text-lg text-gray-700 text-center font-semibold leading-relaxed">
                    "{promise.description}"
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <p className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Yeh saare waade dil se hain! 💖
          </p>
          <p className="text-xl md:text-2xl text-gray-700 font-semibold">
            Aur main hamesha inhein nibhaunga, Bachcha! ✨
          </p>
        </motion.div>
      </div>
    </div>
  );
}
