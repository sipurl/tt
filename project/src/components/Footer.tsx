import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">SayTTS</h3>
            <p className="text-gray-600">
              Transform text into natural speech with AI technology
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-600 hover:text-black">Features</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-black">About</a></li>
              <li><a href="#use-cases" className="text-gray-600 hover:text-black">Use Cases</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-black">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-gray-600 hover:text-black">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-600 hover:text-black">Terms of Service</a></li>
              <li><a href="/cookies" className="text-gray-600 hover:text-black">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#contact" className="text-gray-600 hover:text-black">Contact</a></li>
              <li><a href="https://twitter.com/saytts" className="text-gray-600 hover:text-black">Twitter</a></li>
              <li><a href="https://github.com/saytts" className="text-gray-600 hover:text-black">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; {currentYear} SayTTS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}