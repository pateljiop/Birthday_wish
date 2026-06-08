import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="flex flex-col items-center gap-2"
      >
        <span className="text-white font-bold text-sm md:text-base bg-black/50 backdrop-blur px-4 py-2 rounded-full">
          Scroll to begin
        </span>
        <ChevronDown className="w-8 h-8 text-white drop-shadow-lg" strokeWidth={3} />
      </motion.div>
    </motion.div>
  );
}
