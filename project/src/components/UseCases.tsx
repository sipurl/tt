import { motion } from 'framer-motion';
import { Youtube, Music, Book, Presentation } from 'lucide-react';

const useCases = [
  {
    icon: <Youtube className="w-8 h-8" />,
    title: 'Content Creation',
    description: 'Perfect for YouTube videos, TikTok content, and social media posts'
  },
  {
    icon: <Music className="w-8 h-8" />,
    title: 'Podcasting',
    description: 'Create engaging podcast intros, outros, and voice-overs'
  },
  {
    icon: <Book className="w-8 h-8" />,
    title: 'E-Learning',
    description: 'Generate audio for educational content and online courses'
  },
  {
    icon: <Presentation className="w-8 h-8" />,
    title: 'Business',
    description: 'Professional voice-overs for presentations and marketing materials'
  }
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Use Cases</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how SayTTS can enhance your projects and content
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-white rounded-xl shadow-sm"
            >
              <div className="mb-4 text-black">{useCase.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
              <p className="text-gray-600">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}