import React, { useEffect, useRef } from 'react';

interface Symbol {
  x: number;
  y: number;
  text: string;
  size: number;
  color: string;
  alpha: number;
  rotation: number;
}

const EDU_SYMBOLS = ['🎓', '📚', '📜', 'BSc', 'TSU', 'Course', 'Cert', 'Diplomado', 'Uni', 'Study', 'Math', 'Code', 'Ingeniero', 'Tech'];
const MONOKAI_COLORS = ['#C74182', '#1A8CFF', '#E58A00', '#6B9E00', '#A54181', '#0098B1'];

const EducationBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      draw();
    };

    window.addEventListener('resize', handleResize);

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      const symbolCount = Math.min(Math.floor(width / 40), 50);
      const symbols: Symbol[] = [];

      // Fixed seed for pseudo-random but consistent look per resize
      let seed = 42;
      const random = () => {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
      };

      for (let i = 0; i < symbolCount; i++) {
        symbols.push({
          x: random() * width,
          y: random() * height,
          text: EDU_SYMBOLS[Math.floor(random() * EDU_SYMBOLS.length)],
          size: Math.floor(random() * 15) + 18,
          color: MONOKAI_COLORS[Math.floor(random() * MONOKAI_COLORS.length)],
          alpha: random() * 0.2 + 0.1,
          rotation: (random() - 0.5) * 0.5,
        });
      }

      // Draw subtle connecting lines
      for (let i = 0; i < symbols.length; i++) {
        for (let j = i + 1; j < symbols.length; j++) {
          const dx = symbols[i].x - symbols[j].x;
          const dy = symbols[i].y - symbols[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 200) {
            ctx.beginPath();
            ctx.strokeStyle = '#8F8B8B';
            ctx.globalAlpha = (1 - dist / 200) * 0.1;
            ctx.lineWidth = 0.5;
            ctx.moveTo(symbols[i].x, symbols[i].y);
            ctx.lineTo(symbols[j].x, symbols[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw symbols
      symbols.forEach((s) => {
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rotation);
        ctx.font = `${s.size}px monospace`;
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.alpha;
        ctx.fillText(s.text, 0, 0);
        ctx.restore();
      });

      ctx.globalAlpha = 1;
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60"
    />
  );
};

export default EducationBackground;
