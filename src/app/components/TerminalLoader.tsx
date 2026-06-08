import { useState, useEffect } from 'react';

interface TerminalLoaderProps {
  onComplete: () => void;
}

export function TerminalLoader({ onComplete }: TerminalLoaderProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const terminalLines = [
    { text: '> Initializing connection...', delay: 400 },
    { text: '> Connecting to origin/pehli_mohabbat...', delay: 500 },
    { text: '> [████████████████████] 100%', delay: 300 },
    { text: '> Status: AUTHORIZED ✓', delay: 400 },
    { text: '> Fetching coordinates...', delay: 500 },
    { text: '> Route: mera_ghar -> tumhara_area', delay: 400 },
    { text: '> Distance: 12.5 km (but feels like infinity)', delay: 600 },
    { text: '> Loading profile data...', delay: 400 },
    { text: '> Decrypting: Bachcha.profile', delay: 500 },
    { text: '> Loading: College_Enquiry_Chat.log [12 Sept 2024]', delay: 400 },
    { text: '> Loading: Bina_Propose_Wala_Pyaar.conf', delay: 400 },
    { text: '> Loading: Tumhare_Area_Mein_Milna.mp4 [12 Nov 2024]', delay: 500 },
    { text: '> Compiling memories: 1,248 commits', delay: 600 },
    { text: '> System ready. ✓', delay: 400 },
    { text: '> Launching birthday protocol for Bulbul...', delay: 800 },
  ];

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentIndex < terminalLines.length) {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, terminalLines[currentIndex].text]);
        setCurrentIndex(prev => prev + 1);
      }, terminalLines[currentIndex].delay);
      return () => clearTimeout(timer);
    } else {
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(completeTimer);
    }
  }, [currentIndex]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center font-mono">
      <div className="w-full max-w-3xl p-8">
        <div className="mb-6 text-[#00ff00] border border-[#00ff00] p-4">
          <pre className="text-sm">
{`  ____             _         _
 | __ )  __ _  ___| |__   ___| |__   __ _
 |  _ \\ / _\` |/ __| '_ \\ / __| '_ \\ / _\` |
 | |_) | (_| | (__| | | | (__| | | | (_| |
 |____/ \\__,_|\\___|_| |_|\\___|_| |_|\\__,_|

 Birthday.sys v2024.06.09`}
          </pre>
        </div>
        {lines.map((line, i) => (
          <div
            key={i}
            className="text-[#00ff00] mb-2 transition-opacity duration-200"
            style={{
              textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
              opacity: i === lines.length - 1 ? 1 : 0.7
            }}
          >
            {line}
          </div>
        ))}
        {currentIndex < terminalLines.length && (
          <div className="text-[#00ff00] inline-block" style={{ opacity: showCursor ? 1 : 0 }}>
            █
          </div>
        )}
      </div>
    </div>
  );
}
