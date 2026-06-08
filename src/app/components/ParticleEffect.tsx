import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function ParticleEffect() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: (i * 3.33) % 100,
    delay: (i * 0.3) % 5,
    duration: 10 + (i % 5),
    size: 2 + (i % 3),
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{ 
            y: '-20vh', 
            opacity: [0, 0.6, 0.6, 0],
            x: [0, 50, -50, 0, 30, -30, 0]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'linear'
          }}
          style={{ 
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`
          }}
          className="absolute rounded-full bg-pink-300"
        />
      ))}
    </div>
  );
}
