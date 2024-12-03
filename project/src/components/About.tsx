import { motion } from 'framer-motion';
import { Mic2, Sparkles, Globe2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">About SayTTS</h2>
          <p className="text-xl text-gray-600 mb-12">
            Transform your text into natural-sounding speech with our cutting-edge AI technology.
            Perfect for content creators, educators, and businesses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-gray-50"
            >
              <Mic2 className="w-8 h-8 mb-4 mx-auto text-black" />
              <h3 className="text-xl font-semibold mb-2">Free & Unlimited</h3>
              <p className="text-gray-600">Generate unlimited audio with our extensive voice collection</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-gray-50"
            >
              <Sparkles className="w-8 h-8 mb-4 mx-auto text-black" />
              <h3 className="text-xl font-semibold mb-2">High Quality</h3>
              <p className="text-gray-600">Crystal clear audio with natural intonation and emphasis</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-gray-50"
            >
              <Globe2 className="w-8 h-8 mb-4 mx-auto text-black" />
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">Support for multiple languages and regional accents</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}