import { motion } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How do I use SayTTS?',
    answer: 'Simply enter your text, choose a voice, and click generate. You can then download or play the generated audio.'
  },
  {
    question: 'Is SayTTS free to use?',
    answer: 'Yes, SayTTS is completely free to use with unlimited generations.'
  },
  {
    question: 'What languages are supported?',
    answer: 'We support over 40 languages with multiple voice options for each language.'
  },
  {
    question: 'Can I use the generated audio commercially?',
    answer: 'Yes, all generated audio can be used for commercial purposes.'
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 text-center">FAQ</h2>
          
          <Accordion.Root type="single" collapsible>
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="mt-4"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full justify-between items-center p-4 bg-gray-50 rounded-lg text-left hover:bg-gray-100">
                    <span className="font-semibold">{faq.question}</span>
                    <ChevronDown className="transform transition-transform duration-200" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="p-4 text-gray-600">
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
}