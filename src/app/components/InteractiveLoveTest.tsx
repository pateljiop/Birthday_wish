import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, Award } from 'lucide-react';

const questions = [
  {
    question: "Tumhe lagta hai main tumse kitna pyar karta hoon?",
    options: ["Thoda", "Bahut", "Unlimited"],
    correct: 2,
  },
  {
    question: "Mere dil mein tumhara space kaisa hai?",
    options: ["Normal", "Special", "Exclusive & Permanent"],
    correct: 2,
  },
  {
    question: "Is website ko banane mein kitna time laga?",
    options: ["2-3 hours", "1 din", "48+ hours with 634+ commits"],
    correct: 2,
  },
];

export function InteractiveLoveTest() {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    if (index === questions[currentQ].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ(currentQ + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setStarted(false);
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 py-16 md:py-20 px-6 md:px-8 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <AnimatePresence mode="wait">
          {!started && !showResult && (
            <motion.div
              key="start"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mb-8"
              >
                <Sparkles className="w-24 md:w-32 h-24 md:h-32 mx-auto text-purple-600" />
              </motion.div>

              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
                  Love Test! 💕
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-6">
                  Chalo test karte hain... tumhe kitna pata hai mere baare mein! 😊
                </p>
                <p className="text-lg md:text-xl text-gray-600 font-medium">
                  3 simple questions hain... ready ho?
                </p>
              </div>

              <button
                onClick={() => setStarted(true)}
                className="px-16 py-8 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-3xl font-black rounded-full shadow-2xl hover:scale-110 transition-all"
              >
                Start Test! 🚀
              </button>
            </motion.div>
          )}

          {started && !showResult && (
            <motion.div
              key={`question-${currentQ}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
            >
              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between text-sm md:text-base text-gray-600 font-semibold mb-2">
                  <span>Question {currentQ + 1} of {questions.length}</span>
                  <span>Score: {score}/{currentQ}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-pink-500 to-purple-500 h-3 rounded-full transition-all"
                    style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 text-center">
                {questions[currentQ].question}
              </h3>

              {/* Options */}
              <div className="space-y-4">
                {questions[currentQ].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full p-6 md:p-8 rounded-2xl text-lg md:text-2xl font-bold transition-all ${
                      selectedAnswer === null
                        ? 'bg-gradient-to-r from-pink-100 to-purple-100 hover:from-pink-200 hover:to-purple-200 text-gray-900 hover:scale-105'
                        : selectedAnswer === index
                        ? index === questions[currentQ].correct
                          ? 'bg-gradient-to-r from-green-500 to-green-600 text-white scale-105'
                          : 'bg-gradient-to-r from-red-500 to-red-600 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {showResult && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                transition={{ duration: 1 }}
                className="mb-8"
              >
                <Award className="w-32 md:w-40 h-32 md:h-40 mx-auto text-yellow-500" />
              </motion.div>

              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
                  Test Complete! 🎉
                </h2>
                
                <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 mb-6 border-4 border-pink-300">
                  <p className="text-5xl md:text-7xl font-black text-pink-600 mb-4">
                    {score}/{questions.length}
                  </p>
                  <p className="text-2xl md:text-3xl font-black text-gray-900">
                    {score === questions.length ? "Perfect Score! 💯" : "Achha kiya! 👏"}
                  </p>
                </div>

                <div className="space-y-4 text-lg md:text-2xl text-gray-700 font-semibold">
                  {score === questions.length ? (
                    <>
                      <p>Wow Bachcha! Tumhe sab pata hai! 😍</p>
                      <p className="text-pink-600 font-black">
                        Tumhe pata hai main tumse unlimited pyar karta hoon! 💖
                      </p>
                    </>
                  ) : (
                    <>
                      <p>Koi nahi Bachcha, ab pata chal gaya! 😊</p>
                      <p className="text-pink-600 font-black">
                        Main tumse UNLIMITED pyar karta hoon! 💖
                      </p>
                    </>
                  )}
                </div>
              </div>

              <button
                onClick={resetQuiz}
                className="px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-2xl font-black rounded-full shadow-xl hover:scale-110 transition-all"
              >
                Dubara Try Karo! 🔄
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
