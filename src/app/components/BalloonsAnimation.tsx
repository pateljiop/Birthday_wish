import { useEffect, useRef } from 'react';

interface Balloon {
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
  wobbleOffset: number;
  wobbleSpeed: number;
}

export function BalloonsAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const balloons: Balloon[] = [];
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];

    for (let i = 0; i < 30; i++) {
      balloons.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 200,
        size: Math.random() * 30 + 20,
        speed: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        wobbleOffset: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.05 + 0.02,
      });
    }

    let animationId: number;
    let frame = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      balloons.forEach(balloon => {
        balloon.y -= balloon.speed;

        const wobble = Math.sin(frame * balloon.wobbleSpeed + balloon.wobbleOffset) * 20;

        // Draw balloon
        ctx.fillStyle = balloon.color;
        ctx.beginPath();
        ctx.ellipse(
          balloon.x + wobble,
          balloon.y,
          balloon.size * 0.8,
          balloon.size,
          0,
          0,
          Math.PI * 2
        );
        ctx.fill();

        // Draw balloon string
        ctx.strokeStyle = '#666';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(balloon.x + wobble, balloon.y + balloon.size);
        ctx.lineTo(balloon.x + wobble, balloon.y + balloon.size + 40);
        ctx.stroke();

        // Reset balloon if it goes off screen
        if (balloon.y < -balloon.size) {
          balloon.y = canvas.height + balloon.size;
          balloon.x = Math.random() * canvas.width;
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10" />;
}
