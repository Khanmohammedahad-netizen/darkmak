import { motion } from "framer-motion";

export function RotatingGlobe() {
  return (
    <div className="relative w-[520px] h-[520px] pointer-events-none">
      <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-3xl" />

      <motion.img
        src="/globe.svg"
        alt="Global Network"
        className="relative w-full h-full opacity-60"
        animate={{ rotate: 360 }}
        transition={{
          duration: 160,
          ease: "linear",
          repeat: Infinity
        }}
      />

      <div className="absolute inset-0 rounded-full ring-1 ring-white/10" />
    </div>
  );
}
