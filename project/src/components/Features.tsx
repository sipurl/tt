import { motion } from 'framer-motion';
import { Mic2, Globe2, Smartphone, Shield } from 'lucide-react';

const features = [
  {
    icon: <Mic2 className="w-6 h-6" />,
    title: 'Wide Voice Range',
    description: 'Access to over 400+ natural-sounding voices across multiple languages and accents.'
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: 'Multi-Language Support',
    description: 'Generate speech in various languages and dialects with native-speaking voices.'
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Mobile-First Design',
    description: 'Fully responsive interface that works seamlessly on all devices.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Secure Architecture',
    description: 'Enterprise-grade security with encrypted API communications.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience state-of-the-art text-to-speech technology with our comprehensive feature set.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-lg"
            >
              <div className="mb-4 text-purple-400">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}