import { motion } from 'framer-motion';
import { Wand2, Sparkles } from 'lucide-react';
import GlowingBackground from './GlowingBackground';

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      },
    }),
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GlowingBackground />
      
      <div className="container mx-auto px-4 py-24 md:py-32">
        <motion.div 
          className="relative text-center max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            className="absolute -top-20 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="w-12 h-12 text-black/80" />
          </motion.div>

          <motion.h1 
            custom={0}
            variants={textVariants}
            className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
          >
            Transform Text into
            <br />
            Natural Speech
          </motion.h1>
          
          <motion.p 
            custom={1}
            variants={textVariants}
            className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed"
          >
            Create lifelike voice content with our advanced AI technology.
            <br />
            Choose from over 400+ natural-sounding voices.
          </motion.p>

          <motion.div
            custom={2}
            variants={textVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a 
              href="#generator"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-black text-white rounded-full overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center">
                <Wand2 className="mr-2" />
                Start Creating
              </span>
            </motion.a>

            <motion.a 
              href="#features"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-colors duration-300"
            >
              Explore Features
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}