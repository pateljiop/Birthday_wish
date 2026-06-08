import { motion } from 'motion/react';

const loveNotes = [
  '💕 Bachcha',
  '🌟 Bulbul',
  '💝 Special',
  '✨ Forever',
  '💖 Tumhara',
  '🎀 Diwana',
  '💫 Always',
  '🌸 Pyaar',
];

export function FloatingLoveNotes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {loveNotes.map((note, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl opacity-30"
          initial={{
            x: `${Math.random() * 100}%`,
            y: '110%',
          }}
          animate={{
            y: '-10%',
            x: `${(Math.random() * 100)}%`,
          }}
          transition={{
            duration: Math.random() * 15 + 20,
            repeat: Infinity,
            delay: i * 2,
            ease: 'linear',
          }}
        >
          {note}
        </motion.div>
      ))}
    </div>
  );
}
