import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lightbulb, Music, Sparkles, ArrowRight } from 'lucide-react';

export function CelebrationSetup() {
  const [lightsOn, setLightsOn] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [balloonsReleased, setBalloonsReleased] = useState(false);
  const [showContinue, setShowContinue] = useState(false);

  const handleLights = () => {
    setLightsOn(true);
  };

  const handleMusic = () => {
    setMusicOn(true);
  };

  const handleBalloons = () => {
    setBalloonsReleased(true);
    setTimeout(() => setShowContinue(true), 2000);
  };

  const allDone = lightsOn && musicOn && balloonsReleased;

  return (
    <div className={`min-h-screen py-16 md:py-20 px-6 md:px-8 flex items-center justify-center transition-all duration-1000 ${
      lightsOn 
        ? 'bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100' 
        : 'bg-gradient-to-br from-gray-800 via-gray-900 to-black'
    }`}>
      <div className="max-w-4xl w-full relative">
        {/* Floating Balloons */}
        {balloonsReleased && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: '100vh', x: `${(i * 5) % 100}%`, opacity: 0 }}
                animate={{ 
                  y: '-100vh', 
                  x: [`${(i * 5) % 100}%`, `${((i * 5) + 20) % 100}%`, `${(i * 5) % 100}%`],
                  opacity: [0, 1, 1, 0],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 6 + (i % 3), 
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className="absolute text-4xl"
              >
                {['🎈', '🎉', '🎊', '🎁'][i % 4]}
              </motion.div>
            ))}
          </div>
        )}

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative z-10"
        >
          <motion.div
            animate={lightsOn ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-center mb-8"
          >
            <Sparkles className={`w-16 md:w-20 h-16 md:h-20 mx-auto mb-6 ${
              lightsOn ? 'text-yellow-500' : 'text-gray-400'
            }`} />
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
              Set The Celebration! 🎉
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 font-semibold">
              Taiyaar karo apni party, Bachcha! 
            </p>
          </motion.div>

          <div className="space-y-6">
            {/* Step 1: Lights */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <button
                onClick={handleLights}
                disabled={lightsOn}
                className={`w-full p-6 md:p-8 rounded-2xl font-bold text-xl md:text-2xl transition-all flex items-center justify-between ${
                  lightsOn
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white scale-105'
                    : 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 hover:from-yellow-200 hover:to-orange-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <Lightbulb className="w-8 h-8" />
                  <span>Turn On Lights</span>
                </div>
                {lightsOn && <span className="text-3xl">✓</span>}
              </button>
            </motion.div>

            {/* Step 2: Music */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <button
                onClick={handleMusic}
                disabled={!lightsOn || musicOn}
                className={`w-full p-6 md:p-8 rounded-2xl font-bold text-xl md:text-2xl transition-all flex items-center justify-between ${
                  musicOn
                    ? 'bg-gradient-to-r from-pink-400 to-purple-500 text-white scale-105'
                    : lightsOn
                    ? 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 hover:from-pink-200 hover:to-purple-200'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                <div className="flex items-center gap-4">
                  <Music className="w-8 h-8" />
                  <span>Start Music</span>
                </div>
                {musicOn && <span className="text-3xl">✓</span>}
              </button>
            </motion.div>

            {/* Step 3: Balloons */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <button
                onClick={handleBalloons}
                disabled={!musicOn || balloonsReleased}
                className={`w-full p-6 md:p-8 rounded-2xl font-bold text-xl md:text-2xl transition-all flex items-center justify-between ${
                  balloonsReleased
                    ? 'bg-gradient-to-r from-blue-400 to-cyan-500 text-white scale-105'
                    : musicOn
                    ? 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 hover:from-blue-200 hover:to-cyan-200'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">🎈</span>
                  <span>Release Balloons</span>
                </div>
                {balloonsReleased && <span className="text-3xl">✓</span>}
              </button>
            </motion.div>
          </div>

          {/* Continue Button */}
          <AnimatePresence>
            {showContinue && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 text-center"
              >
                <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6 border-2 border-pink-300">
                  <p className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                    Perfect! Sab ready hai! 🎊
                  </p>
                  <p className="text-lg md:text-xl text-gray-700 font-semibold flex items-center justify-center gap-2">
                    Scroll down for more surprises
                    <ArrowRight className="w-6 h-6 animate-bounce" />
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
