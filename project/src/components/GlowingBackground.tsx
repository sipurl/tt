import { motion } from 'framer-motion';

export default function GlowingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-pink-500/20 to-indigo-500/20 blur-3xl"
      />
    </div>
  );
}