import { useEffect, useRef } from "react";

type Bot = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

export function NanobotSwarm() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const botsRef = useRef<Bot[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const BOT_COUNT = 240;

    botsRef.current = Array.from({ length: BOT_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (const bot of botsRef.current) {
        bot.x += bot.vx;
        bot.y += bot.vy;

        // screen wrap
        if (bot.x < 0) bot.x = width;
        if (bot.x > width) bot.x = 0;
        if (bot.y < 0) bot.y = height;
        if (bot.y > height) bot.y = 0;

        // mouse repulsion
        if (mouseRef.current.active) {
          const dx = bot.x - mouseRef.current.x;
          const dy = bot.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            bot.vx += dx / dist * 0.015;
            bot.vy += dy / dist * 0.015;
          }
        }

        ctx.beginPath();
        ctx.arc(bot.x, bot.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(34,211,238,0.55)";
        ctx.fill();
      }

      requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}
