import { motion } from "framer-motion";

export default function RotatingGlobe() {
  return (
    <div className="relative w-[520px] h-[520px] mx-auto pointer-events-none">
      
      {/* Soft glow */}
      <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-3xl" />

      {/* Rotating globe */}
      <motion.img
        src="/globe.svg"
        alt="Global Network"
        className="relative w-full h-full opacity-70"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 120,   // VERY slow = nanobot feel
          ease: "linear"
        }}
      />

      {/* Overlay grain / depth */}
      <div className="absolute inset-0 rounded-full ring-1 ring-white/10" />
    </div>
  );
}
