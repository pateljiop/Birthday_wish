import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type Step = 'waiting' | 'makeWish' | 'blow' | 'celebrate';

export function BirthdayCakeCeremony() {
  const [step, setStep] = useState<Step>('waiting');
  const [candles, setCandles] = useState<boolean[]>(Array(9).fill(true));
  const [isBlowing, setIsBlowing] = useState(false);

  const handleBlow = useCallback(() => {
    if (step !== 'blow' || isBlowing) return;
    setIsBlowing(true);

    candles.forEach((_, index) => {
      setTimeout(() => {
        setCandles(prev => {
          const newCandles = [...prev];
          newCandles[index] = false;
          return newCandles;
        });

        if (index === candles.length - 1) {
          setTimeout(() => {
            setStep('celebrate');
            setIsBlowing(false);
          }, 300);
        }
      }, index * 150);
    });
  }, [step, candles, isBlowing]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 flex items-center justify-center py-12 md:py-20 px-4 md:px-8">
      {/* White content container */}
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl p-6 md:p-12">
        <AnimatePresence mode="wait">
          {/* STEP 1: Waiting */}
          {step === 'waiting' && (
            <motion.div
              key="waiting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center space-y-8"
            >
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
                🎂 Birthday Celebration! 🎂
              </h2>

              <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                Taiyaar ho jao, Bachcha! Cake cutting time! 🎉
              </p>

              <button
                onClick={() => setStep('makeWish')}
                className="px-12 py-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-2xl font-bold rounded-full shadow-xl hover:shadow-2xl transition-all"
              >
                Let's Start! 🎊
              </button>
            </motion.div>
          )}

          {/* STEP 2: Make a Wish */}
          {step === 'makeWish' && (
            <motion.div
              key="makeWish"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center space-y-8"
            >
              <div className="text-8xl">🙏</div>

              <h3 className="text-3xl md:text-5xl font-black text-gray-900">
                Close your eyes, Bachcha...
              </h3>

              <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                Ek special wish maango! ✨
              </p>

              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.5 }}
                onClick={() => setStep('blow')}
                className="px-12 py-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xl md:text-2xl font-bold rounded-full shadow-xl"
              >
                Wish kar li? Candles blow karo! 🕯️
              </motion.button>
            </motion.div>
          )}

          {/* STEP 3: Blow Candles */}
          {step === 'blow' && (
            <motion.div
              key="blow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center space-y-8"
            >
              {/* Candles */}
              <div className="flex justify-center gap-3 mb-6 flex-wrap">
                {candles.map((isLit, i) => (
                  <div key={i} className="relative">
                    <div className="w-4 h-16 bg-gradient-to-b from-pink-300 to-pink-500 rounded-t-full shadow-md">
                      {isLit && (
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-2xl">
                          🔥
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Cake */}
              <div className="space-y-4">
                <div className="w-48 md:w-64 h-20 md:h-24 mx-auto bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl shadow-xl border-4 border-pink-200 flex items-center justify-center">
                  <span className="text-white font-black text-base md:text-xl">Happy Birthday!</span>
                </div>
                <div className="w-56 md:w-80 h-24 md:h-28 mx-auto bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl shadow-xl border-4 border-purple-200" />
                <div className="w-64 md:w-96 h-28 md:h-32 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-xl border-4 border-blue-200" />
              </div>

              <div className="space-y-6 mt-8">
                <h3 className="text-2xl md:text-4xl font-black text-gray-900">
                  Deep breath lo aur blow karo! 💨
                </h3>

                <button
                  onClick={handleBlow}
                  disabled={isBlowing}
                  className="px-16 py-6 bg-gradient-to-r from-green-500 to-blue-500 text-white text-2xl md:text-3xl font-bold rounded-full shadow-xl disabled:opacity-50"
                >
                  {isBlowing ? '💨 Blowing...' : '🌬️ BLOW! 🌬️'}
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 4: Celebration */}
          {step === 'celebrate' && (
            <motion.div
              key="celebrate"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-8"
            >
              <div className="text-9xl">🎉</div>

              <h2 className="text-5xl md:text-8xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                HAPPY BIRTHDAY!
              </h2>

              <p className="text-2xl md:text-4xl font-bold text-gray-800">
                Tumhari saari wishes poori ho, Bachcha! 💖
              </p>

              <div className="flex justify-center gap-6 text-6xl flex-wrap">
                <span>🎈</span>
                <span>🎊</span>
                <span>🎁</span>
                <span>🎂</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
