import { useEffect, useState } from 'react';

export function ConfettiEffect() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const loadConfetti = async () => {
      try {
        const confetti = (await import('canvas-confetti')).default;

        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;

        const randomInRange = (min: number, max: number) => {
          return Math.random() * (max - min) + min;
        };

        const interval = setInterval(() => {
          const timeLeft = animationEnd - Date.now();

          if (timeLeft <= 0) {
            clearInterval(interval);
            return;
          }

          const particleCount = Math.floor(50 * (timeLeft / duration));

          confetti({
            particleCount,
            startVelocity: 30,
            spread: 360,
            origin: {
              x: randomInRange(0.1, 0.9),
              y: Math.random() - 0.2,
            },
            colors: ['#ff6b9d', '#c44569', '#f8b500', '#5f27cd', '#00d2d3'],
          });
        }, 250);

        return () => clearInterval(interval);
      } catch (error) {
        // Silently fail if confetti not available
      }
    };

    loadConfetti();
  }, [mounted]);

  return null;
}
