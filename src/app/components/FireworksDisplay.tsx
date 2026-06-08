import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

interface Firework {
  x: number;
  y: number;
  targetY: number;
  vy: number;
  color: string;
  exploded: boolean;
}

export function FireworksDisplay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fireworks: Firework[] = [];
    const particles: Particle[] = [];
    const colors = ['#ff6b9d', '#c44569', '#f8b500', '#5f27cd', '#00d2d3', '#ff9ff3', '#54a0ff'];

    let animationId: number;

    const createFirework = () => {
      fireworks.push({
        x: Math.random() * canvas.width,
        y: canvas.height,
        targetY: Math.random() * canvas.height * 0.5,
        vy: -8,
        color: colors[Math.floor(Math.random() * colors.length)],
        exploded: false,
      });
    };

    const explode = (firework: Firework) => {
      const particleCount = 100;
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = Math.random() * 6 + 2;
        particles.push({
          x: firework.x,
          y: firework.y,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          life: 1,
          maxLife: Math.random() * 60 + 60,
          color: firework.color,
          size: Math.random() * 3 + 1,
        });
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 30, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update fireworks
      fireworks.forEach((firework, index) => {
        if (!firework.exploded) {
          firework.y += firework.vy;

          // Draw rocket
          ctx.fillStyle = firework.color;
          ctx.beginPath();
          ctx.arc(firework.x, firework.y, 3, 0, Math.PI * 2);
          ctx.fill();

          // Draw trail
          ctx.fillStyle = `${firework.color}66`;
          ctx.beginPath();
          ctx.arc(firework.x, firework.y + 10, 2, 0, Math.PI * 2);
          ctx.fill();

          if (firework.y <= firework.targetY) {
            explode(firework);
            firework.exploded = true;
            fireworks.splice(index, 1);
          }
        }
      });

      // Update particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.1; // gravity
        particle.life++;

        const alpha = 1 - particle.life / particle.maxLife;

        if (alpha > 0) {
          ctx.fillStyle = particle.color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();

          // Glow effect
          ctx.shadowBlur = 10;
          ctx.shadowColor = particle.color;
        } else {
          particles.splice(index, 1);
        }
      });

      ctx.shadowBlur = 0;

      // Random fireworks
      if (Math.random() < 0.05) {
        createFirework();
      }

      animationId = requestAnimationFrame(animate);
    };

    // Initial fireworks
    for (let i = 0; i < 3; i++) {
      setTimeout(() => createFirework(), i * 500);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10" />;
}
