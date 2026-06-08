import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';

interface HeartType {
  id: number;
  x: number;
  y: number;
}

export function HeartClickEffect() {
  const [hearts, setHearts] = useState<HeartType[]>([]);
  const [heartCount, setHeartCount] = useState(0);

  const handleClick = (e: React.MouseEvent) => {
    // Don't trigger on button/link clicks
    const target = e.target as HTMLElement;
    if (target.closest('button, a, input, select, textarea')) {
      return;
    }

    const newHeart = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
    };

    setHearts((prev) => [...prev, newHeart]);
    setHeartCount((prev) => prev + 1);

    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id));
    }, 2000);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="fixed inset-0 z-0 pointer-events-auto"
      />

      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 1, scale: 0, x: heart.x, y: heart.y }}
            animate={{
              opacity: 0,
              scale: 2,
              y: heart.y - 100,
              rotate: [0, 15, -15, 0]
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="fixed pointer-events-none z-50"
            style={{ left: 0, top: 0 }}
          >
            <Heart className="text-pink-500" fill="currentColor" size={30} />
          </motion.div>
        ))}
      </AnimatePresence>

      {heartCount > 10 && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-8 right-8 bg-white rounded-full px-6 py-3 shadow-2xl z-50 border-4 border-pink-300"
        >
          <p className="text-pink-600 font-bold flex items-center gap-2">
            <Heart className="w-5 h-5" fill="currentColor" />
            {heartCount} Hearts for Bachcha! 💕
          </p>
        </motion.div>
      )}
    </>
  );
}
