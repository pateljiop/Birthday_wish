import { useState } from 'react';
import { MatrixBackground } from './MatrixBackground';
import { BalloonsAnimation } from './BalloonsAnimation';
import { TrapButton } from './TrapButton';
import { ContributionGraph } from './ContributionGraph';
import { TypingShayari } from './TypingShayari';
import { MusicToggle } from './MusicToggle';

export function Dashboard() {
  const [showBalloons, setShowBalloons] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleTrapComplete = () => {
    setShowBalloons(true);
    setTimeout(() => {
      setShowContent(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black overflow-auto">
      <MusicToggle />

      {!showBalloons && <MatrixBackground />}
      {showBalloons && <BalloonsAnimation />}

      {!showContent && (
        <div className="relative z-10 min-h-screen">
          <TrapButton onComplete={handleTrapComplete} />
        </div>
      )}

      {showContent && (
        <div className="relative z-20 min-h-screen flex flex-col items-center justify-center gap-8 p-8 py-20">
          <div className="text-center mb-4 animate-fadeIn">
            <div className="mb-4 text-[#00ff00]/40 text-sm font-mono">
              {'>'} BIRTHDAY_PROTOCOL.exe
            </div>
            <h1 className="text-[#00ff00] font-mono mb-2 text-4xl" style={{ textShadow: '0 0 30px rgba(0, 255, 0, 0.5)' }}>
              Happy Birthday Komal! 🎉
            </h1>
            <p className="text-[#00ff00]/70 font-mono text-lg">09 June 2026</p>
            <p className="text-[#00ff00]/50 font-mono text-sm mt-2">
              A special compilation by Your Fav
            </p>
          </div>

          <ContributionGraph />

          <TypingShayari />

          <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
            <div className="p-6 border-2 border-[#00ff00]/30 bg-black/70 backdrop-blur font-mono">
              <div className="flex items-center gap-2 mb-4 text-[#00ff00]">
                <span className="text-xl">📁</span>
                <p className="font-bold">System Logs</p>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-[#00ff00]/80 hover:text-[#00ff00] transition-colors cursor-pointer">
                  ✓ College_Enquiry_Chat.log <span className="text-xs opacity-50">[12 Sept 2024]</span>
                </p>
                <p className="text-[#00ff00]/80 hover:text-[#00ff00] transition-colors cursor-pointer">
                  ✓ Bina_Propose_Wala_Pyaar.conf <span className="text-xs opacity-50">[Ongoing]</span>
                </p>
                <p className="text-[#00ff00]/80 hover:text-[#00ff00] transition-colors cursor-pointer">
                  ✓ Tumhare_Area_Mein_Milna.mp4 <span className="text-xs opacity-50">[12 Nov 2024]</span>
                </p>
              </div>
            </div>

            <div className="p-6 border-2 border-[#00ff00]/30 bg-black/70 backdrop-blur font-mono">
              <div className="flex items-center gap-2 mb-4 text-[#00ff00]">
                <span className="text-xl">💚</span>
                <p className="font-bold">Memory Stats</p>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-[#00ff00]/80">
                  First Contact: <span className="text-[#00ff00]">12 Sept 2024</span>
                </p>
                <p className="text-[#00ff00]/80">
                  First Meet: <span className="text-[#00ff00]">12 Nov 2024</span>
                </p>
                <p className="text-[#00ff00]/80">
                  Days Connected: <span className="text-[#00ff00]">634 days</span>
                </p>
                <p className="text-[#00ff00]/80">
                  Status: <span className="text-[#00ff00] animate-pulse">Forever Exclusive</span>
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 text-[#00ff00]/40 font-mono text-xs">
            <p>Crafted with ❤️ and countless hours of coding</p>
            <p className="mt-1">© 2026 Bachcha | All memories reserved</p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
}
