import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function FloatingHearts() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: (i * 7.14) % 100,
    delay: (i * 0.5) % 3,
    duration: 8 + (i % 4),
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{ 
            y: '-20vh', 
            opacity: [0, 1, 1, 0],
            x: [0, 30, -30, 0]
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: 'linear'
          }}
          style={{ left: `${heart.left}%` }}
          className="absolute"
        >
          <Heart 
            className="text-pink-400" 
            fill="currentColor" 
            size={20 + (heart.id % 3) * 10} 
          />
        </motion.div>
      ))}
    </div>
  );
}
