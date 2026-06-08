import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Star } from 'lucide-react';

interface Balloon {
  id: number;
  x: number;
  color: string;
  speed: number;
  popped: boolean;
  message: string;
}

const messages = [
  'Tum best ho! 💖',
  'Hamesha khush raho! 😊',
  'Tumhari smile magical hai! ✨',
  'World ki best Bachcha! 🌟',
  'You deserve all the happiness! 🎉',
  'Tumhara dil sabse pyaara hai! 💝',
  'Keep shining, Bulbul! ⭐',
  'Zindagi mein kamyaabi mile! 🏆',
];

export function BalloonPopGame() {
  const [balloons, setBalloons] = useState<Balloon[]>([]);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [showMessage, setShowMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!gameStarted) return;

    const interval = setInterval(() => {
      const colors = ['#ff6b9d', '#c44569', '#f8b500', '#5f27cd', '#00d2d3', '#ff9ff3'];
      const newBalloon: Balloon = {
        id: Date.now() + Math.random(),
        x: Math.random() * 80 + 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 3 + 2,
        popped: false,
        message: messages[Math.floor(Math.random() * messages.length)],
      };
      setBalloons(prev => [...prev, newBalloon]);
    }, 1500);

    return () => clearInterval(interval);
  }, [gameStarted]);

  useEffect(() => {
    if (!gameStarted) return;

    const moveInterval = setInterval(() => {
      setBalloons(prev =>
        prev.filter(balloon => {
          return !balloon.popped;
        })
      );
    }, 50);

    return () => clearInterval(moveInterval);
  }, [gameStarted]);

  const handlePop = (balloon: Balloon) => {
    setBalloons(prev =>
      prev.map(b => (b.id === balloon.id ? { ...b, popped: true } : b))
    );
    setScore(prev => prev + 10);
    setShowMessage(balloon.message);
    setTimeout(() => setShowMessage(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-100 to-purple-100 py-20 px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 px-4">
            🎈 Balloon Pop Game! 🎈
          </h2>
          <p className="text-base md:text-xl text-gray-700 mb-6 px-4 font-medium">
            Balloons ko pop karo aur special messages dekho!
          </p>

          {!gameStarted ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setGameStarted(true)}
              className="px-12 py-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-2xl font-bold rounded-full shadow-2xl"
            >
              🎮 Start Game!
            </motion.button>
          ) : (
            <div className="flex items-center justify-center gap-8">
              <div className="bg-white rounded-full px-6 md:px-8 py-3 md:py-4 shadow-lg flex items-center gap-2 md:gap-3">
                <Star className="w-6 md:w-8 h-6 md:h-8 text-yellow-500" fill="currentColor" />
                <span className="text-2xl md:text-3xl font-bold text-purple-600">{score}</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setGameStarted(false);
                  setBalloons([]);
                  setScore(0);
                }}
                className="px-6 py-3 bg-red-500 text-white font-bold rounded-full"
              >
                Reset
              </motion.button>
            </div>
          )}
        </motion.div>

        {/* Game Area */}
        {gameStarted && (
          <div className="relative h-96 bg-gradient-to-b from-blue-50 to-purple-50 rounded-3xl border-4 border-purple-300 overflow-hidden">
            <AnimatePresence>
              {balloons.map(balloon => (
                <motion.button
                  key={balloon.id}
                  initial={{ y: '100%', x: `${balloon.x}%` }}
                  animate={{ y: balloon.popped ? '100%' : '-120%' }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{
                    duration: balloon.speed,
                    ease: 'linear',
                  }}
                  onClick={() => handlePop(balloon)}
                  className="absolute cursor-pointer"
                  style={{ left: 0, bottom: 0 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0 }}
                >
                  {!balloon.popped ? (
                    <div className="relative">
                      {/* Balloon */}
                      <div
                        className="w-16 h-20 rounded-full shadow-lg"
                        style={{ backgroundColor: balloon.color }}
                      />
                      {/* String */}
                      <div className="w-0.5 h-12 bg-gray-400 mx-auto" />
                    </div>
                  ) : (
                    <motion.div
                      initial={{ scale: 1 }}
                      animate={{ scale: 0 }}
                      className="text-4xl"
                    >
                      💥
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </AnimatePresence>

            {/* Floating message */}
            <AnimatePresence>
              {showMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl px-8 py-4 shadow-2xl border-4 border-pink-300 z-10"
                >
                  <p className="text-2xl font-bold text-purple-600">{showMessage}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {score >= 100 && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12 text-center"
          >
            <Trophy className="w-20 h-20 mx-auto mb-4 text-yellow-500" />
            <h3 className="text-4xl font-bold text-purple-600 mb-2">
              Champion Bachcha! 🏆
            </h3>
            <p className="text-xl text-gray-600">
              Tumne {score} points score kiye! Tum truly special ho! 💖
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
