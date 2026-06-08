import { useState } from 'react';

export function ContributionGraph() {
  const weeks = 52;
  const days = 7;
  const [hoveredDay, setHoveredDay] = useState<{ week: number; day: number; count: number } | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const getRandomIntensity = () => {
    const rand = Math.random();
    if (rand > 0.7) return 4;
    if (rand > 0.5) return 3;
    if (rand > 0.3) return 2;
    if (rand > 0.15) return 1;
    return 0;
  };

  const getContributionCount = (intensity: number) => {
    const counts = [0, 3, 7, 12, 18];
    return counts[intensity];
  };

  return (
    <div className="border-2 border-[#00ff00] p-6 bg-black/80 backdrop-blur relative" style={{ boxShadow: '0 0 40px rgba(0, 255, 0, 0.2)' }}>
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#00ff00] font-mono flex items-center gap-2">
              <span className="text-xl">📊</span> Lifetime Contributions
            </h3>
            <div className="text-[#00ff00]/60 text-xs font-mono">
              Sept 2024 - June 2026
            </div>
          </div>

          <div className="relative">
            <div className="flex gap-1 overflow-x-auto pb-2 scrollbar-thin">
              {Array.from({ length: weeks }).map((_, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {Array.from({ length: days }).map((_, dayIndex) => {
                    const intensity = getRandomIntensity();
                    const colors = ['#0d1117', '#0e4429', '#006d32', '#26a641', '#39d353'];
                    const count = getContributionCount(intensity);
                    return (
                      <div
                        key={dayIndex}
                        className="w-3 h-3 rounded-sm cursor-pointer transition-transform hover:scale-125"
                        style={{
                          backgroundColor: colors[intensity],
                          border: hoveredDay?.week === weekIndex && hoveredDay?.day === dayIndex ? '1px solid #00ff00' : 'none'
                        }}
                        onMouseEnter={(e) => {
                          setHoveredDay({ week: weekIndex, day: dayIndex, count });
                          setMousePos({ x: e.clientX, y: e.clientY });
                        }}
                        onMouseLeave={() => setHoveredDay(null)}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {hoveredDay && (
            <div
              className="fixed z-50 bg-[#00ff00] text-black px-3 py-2 rounded text-xs font-mono pointer-events-none"
              style={{
                left: mousePos.x + 10,
                top: mousePos.y - 30,
                boxShadow: '0 4px 12px rgba(0, 255, 0, 0.4)'
              }}
            >
              {hoveredDay.count} memories yahan banaye
            </div>
          )}

          <div className="mt-4 flex items-center gap-6 flex-wrap">
            <div className="text-[#00ff00] font-mono flex items-center gap-2">
              <span className="text-2xl font-bold">1,248</span>
              <span className="opacity-80">commits made in pehli_mohabbat</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#00ff00]/60">Less</span>
              <div className="flex gap-1">
                {['#0d1117', '#0e4429', '#006d32', '#26a641', '#39d353'].map((color, i) => (
                  <div key={i} className="w-3 h-3 rounded-sm" style={{ backgroundColor: color }} />
                ))}
              </div>
              <span className="text-[#00ff00]/60">More</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-[#00ff00]/30">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-[#00ff00] font-mono flex items-center gap-2">
              <span>🔐</span> Verified System Log Certificate
            </p>
            <p className="text-[#00ff00]/60 font-mono mt-1 text-sm">AUTH_ID: 09-JUNE-KOMAL-BACHCHA</p>
            <p className="text-[#00ff00]/40 font-mono mt-1 text-xs">Issued: 12 Sept 2024 | Valid: Forever</p>
          </div>
          <div className="text-[#00ff00] font-mono border-2 border-[#00ff00] px-4 py-2 animate-pulse" style={{ boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)' }}>
            ✓ VERIFIED
          </div>
        </div>
      </div>
    </div>
  );
}
