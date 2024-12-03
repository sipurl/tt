import { motion } from 'framer-motion';
import { Mail, Twitter, Github, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: <Twitter />, href: '#', label: 'Twitter' },
  { icon: <Github />, href: '#', label: 'GitHub' },
  { icon: <Linkedin />, href: '#', label: 'LinkedIn' },
  { icon: <Mail />, href: 'mailto:contact@saytts.com', label: 'Email' }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-gray-400 mb-12">
            Have questions or feedback? We'd love to hear from you.
          </p>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}