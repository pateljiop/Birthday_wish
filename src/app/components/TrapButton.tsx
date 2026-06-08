import { useState } from 'react';

interface TrapButtonProps {
  onComplete: () => void;
}

export function TrapButton({ onComplete }: TrapButtonProps) {
  const [clickCount, setClickCount] = useState(0);
  const [buttonPos, setButtonPos] = useState({ x: 50, y: 50 });
  const [isShaking, setIsShaking] = useState(false);

  const messages = [
    'Komal, ek baat suno na...',
    'Arre pakdo na mujhe! 😜',
    'Pakad ke dikhao? 😜',
    'Bahut tej ho gayi ho! 😂',
    'Bas thoda sa aur door... 😂',
    'Acha baba, ab serious baat karte hain...',
  ];

  const handleClick = () => {
    if (clickCount < 5) {
      // Shake animation before moving
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
        const newX = Math.random() * 70 + 15;
        const newY = Math.random() * 70 + 15;
        setButtonPos({ x: newX, y: newY });
        setClickCount(prev => prev + 1);
      }, 200);
    } else {
      onComplete();
    }
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute top-4 left-4 text-[#00ff00]/40 text-xs font-mono z-10">
        [TRAP_PROTOCOL_ACTIVE] Attempts: {clickCount}/6
      </div>

      <button
        onClick={handleClick}
        style={{
          position: 'absolute',
          left: `${buttonPos.x}%`,
          top: `${buttonPos.y}%`,
          transform: 'translate(-50%, -50%)',
          transition: clickCount > 0 && !isShaking ? 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
          boxShadow: '0 0 30px rgba(0, 255, 0, 0.4)',
        }}
        className={`px-8 py-4 bg-[#00ff00] text-black font-mono hover:bg-[#00dd00] whitespace-nowrap z-20 font-bold ${
          isShaking ? 'animate-shake' : ''
        }`}
      >
        {messages[clickCount]}
      </button>

      {clickCount > 0 && clickCount < 5 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#00ff00]/60 text-sm font-mono animate-pulse">
          Click karo... agar pakad sako toh! 😏
        </div>
      )}

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
          25% { transform: translate(-50%, -50%) rotate(-5deg); }
          75% { transform: translate(-50%, -50%) rotate(5deg); }
        }
        .animate-shake {
          animation: shake 0.2s ease-in-out;
        }
      `}</style>
    </div>
  );
}
