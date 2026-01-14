import { useEffect, useRef } from "react";

type Bot = {
  theta: number;
  phi: number;
  radius: number;
};

export function NanobotGlobe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const botsRef = useRef<Bot[]>([]);
  const rotationRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const CENTER_X = () => width / 2;
    const CENTER_Y = () => height / 2;
    const GLOBE_RADIUS = Math.min(width, height) * 0.28;

    const BOT_COUNT = 520;

    botsRef.current = Array.from({ length: BOT_COUNT }, () => ({
      theta: Math.acos(2 * Math.random() - 1),
      phi: Math.random() * Math.PI * 2,
      radius: GLOBE_RADIUS,
    }));

    const project = (theta: number, phi: number) => {
      const x =
        Math.sin(theta) * Math.cos(phi + rotationRef.current) * GLOBE_RADIUS;
      const y = Math.cos(theta) * GLOBE_RADIUS;
      const z =
        Math.sin(theta) * Math.sin(phi + rotationRef.current) * GLOBE_RADIUS;

      return { x, y, z };
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      rotationRef.current += 0.0006; // slow planetary rotation

      for (const bot of botsRef.current) {
        const { x, y, z } = project(bot.theta, bot.phi);

        // Perspective
        const depth = (z + GLOBE_RADIUS) / (2 * GLOBE_RADIUS);
        const scale = 0.6 + depth * 0.9;
        const alpha = 0.25 + depth * 0.6;

        const screenX = CENTER_X() + x;
        const screenY = CENTER_Y() + y;

        // Mouse interaction
        if (mouseRef.current.active) {
          const dx = screenX - mouseRef.current.x;
          const dy = screenY - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            bot.theta += (Math.random() - 0.5) * 0.015;
            bot.phi += (Math.random() - 0.5) * 0.015;
          }
        }

        ctx.beginPath();
        ctx.arc(screenX, screenY, scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34,211,238,${alpha})`;
        ctx.fill();
      }

      requestAnimationFrame(render);
    };

    render();

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const mouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };

    const mouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseleave", mouseLeave);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}
