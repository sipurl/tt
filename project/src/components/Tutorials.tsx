import { motion } from 'framer-motion';
import { Type, Volume2, Download, Settings } from 'lucide-react';

const tutorials = [
  {
    icon: <Type className="w-8 h-8" />,
    title: 'Enter Your Text',
    description: 'Type or paste your text into the input box. You can enter up to 2000 characters.',
    step: 1
  },
  {
    icon: <Volume2 className="w-8 h-8" />,
    title: 'Choose a Voice',
    description: 'Browse our collection of voices and click the preview button to hear samples.',
    step: 2
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: 'Adjust Settings',
    description: 'Filter voices by language and gender to find the perfect match for your content.',
    step: 3
  },
  {
    icon: <Download className="w-8 h-8" />,
    title: 'Generate & Download',
    description: 'Click generate to create your audio, then download or play it directly in the browser.',
    step: 4
  }
];

export default function Tutorials() {
  return (
    <section id="tutorials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">How to Use SayTTS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to create high-quality voice content
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {tutorials.map((tutorial, index) => (
            <motion.div
              key={tutorial.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-gray-50 rounded-xl relative"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
                {tutorial.step}
              </div>
              <div className="mb-4 text-black">{tutorial.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
              <p className="text-gray-600">{tutorial.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}