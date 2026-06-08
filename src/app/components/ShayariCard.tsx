import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export function ShayariCard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center py-20 px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full"
      >
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full filter blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-200 to-pink-200 rounded-full filter blur-3xl opacity-50" />

          <div className="relative z-10">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="flex justify-center mb-6"
            >
              <Quote className="text-pink-400" size={48} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 2 }}
              className="text-center px-2"
            >
              <p className="text-lg md:text-3xl text-gray-800 leading-relaxed mb-8 font-serif italic">
                "Tumne hi mere dil ki ghanti pehli baar bajayi thi, Bachcha...
                aur woh aawaaz aaj bhi kahin na kahin mere andar goonjti hai.
                <br /><br />
                Is dil ke poore database mein tumhara space hamesha exclusive rahega.
                <br /><br />
                I miss you a lot, more than this code can ever render."
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="text-center"
              >
                <p className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-2">
                  Happy Birthday, Bulbul! 💕
                </p>
                <p className="text-gray-500 italic">- Tumhara Bachcha</p>
              </motion.div>
            </motion.div>

            <motion.div
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="flex justify-center mt-6"
            >
              <Quote className="text-purple-400 transform rotate-180" size={48} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
