import { useState, useRef } from 'react';

interface StubbornButtonProps {
  onPass: () => void;
}

export function StubbornButton({ onPass }: StubbornButtonProps) {
  const [wrongButtonPos, setWrongButtonPos] = useState({ x: 0, y: 0 });
  const [dodgeCount, setDodgeCount] = useState(0);
  const [showTaunt, setShowTaunt] = useState(false);
  const wrongButtonRef = useRef<HTMLButtonElement>(null);

  const taunts = [
    'Nahi nahi, galat button! 😏',
    'Arre, sacchi mein? 😂',
    'Thoda aur soch lo... 🤔',
    'Ziddi toh tum bilkul nahi ho! 😜',
    'Bachcha knows the answer! 😎'
  ];

  const handleWrongButtonHover = () => {
    const margin = 150;
    const newX = Math.random() * (window.innerWidth - margin * 2) + margin;
    const newY = Math.random() * (window.innerHeight - margin * 2) + margin;
    setWrongButtonPos({ x: newX, y: newY });

    setDodgeCount(prev => prev + 1);
    setShowTaunt(true);
    setTimeout(() => setShowTaunt(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center font-mono">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-[#00ff00]/30 text-sm">
          [SECURITY_PROTOCOL_ACTIVE]
        </div>
        <div className="absolute top-10 right-10 text-[#00ff00]/30 text-sm">
          [AUTH_REQUIRED]
        </div>
      </div>

      <div className="text-center z-10">
        <div className="mb-4 text-[#00ff00]/60 text-sm">
          {'>'} AUTHENTICATION CHECKPOINT
        </div>
        <h2 className="text-[#00ff00] mb-8 px-4 text-2xl" style={{ textShadow: '0 0 20px rgba(0, 255, 0, 0.5)' }}>
          Security Check Required
        </h2>
        <p className="text-[#00ff00] mb-12 px-4 max-w-xl mx-auto leading-relaxed">
          Duniya chahe kuch bhi bole, hum dono ke beech sabse zyaada stubborn (ziddi) kaun hai?
        </p>

        {showTaunt && (
          <div className="mb-6 text-[#ff6b6b] animate-pulse">
            {taunts[Math.min(dodgeCount - 1, taunts.length - 1)]}
          </div>
        )}

        <div className="flex gap-4 justify-center flex-wrap px-4">
          <button
            onClick={onPass}
            className="px-8 py-4 bg-[#00ff00] text-black hover:bg-[#00dd00] transition-all duration-300 font-bold"
            style={{ textShadow: 'none', boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)' }}
          >
            Obviously Me (Bachcha)
          </button>

          <button
            ref={wrongButtonRef}
            onMouseEnter={handleWrongButtonHover}
            onTouchStart={handleWrongButtonHover}
            onClick={(e) => {
              e.preventDefault();
              handleWrongButtonHover();
            }}
            style={{
              position: wrongButtonPos.x === 0 ? 'relative' : 'fixed',
              left: wrongButtonPos.x === 0 ? 'auto' : `${wrongButtonPos.x}px`,
              top: wrongButtonPos.x === 0 ? 'auto' : `${wrongButtonPos.y}px`,
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: wrongButtonPos.x !== 0 ? 'scale(0.95)' : 'scale(1)'
            }}
            className="px-8 py-4 bg-transparent border-2 border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00]/10 cursor-pointer font-bold"
          >
            Tum Ho
          </button>
        </div>

        <div className="mt-8 text-[#00ff00]/40 text-xs">
          Dodge attempts: {dodgeCount}
        </div>
      </div>
    </div>
  );
}
