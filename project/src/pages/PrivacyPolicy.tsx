import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-24"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6" />
                Data Protection
              </h2>
              <p className="text-gray-600 mb-4">
                At SayTTS, we take your privacy seriously. This policy outlines how we collect, use, 
                and protect your personal information when you use our text-to-speech service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6" />
                Information We Collect
              </h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Text content submitted for voice generation</li>
                <li>Voice preferences and settings</li>
                <li>Usage statistics and analytics</li>
                <li>Technical information about your device and browser</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6" />
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>To provide and improve our text-to-speech service</li>
                <li>To process your voice generation requests</li>
                <li>To maintain and optimize our service performance</li>
                <li>To communicate important updates and information</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6" />
                Data Storage and Security
              </h2>
              <p className="text-gray-600 mb-4">
                Your data is stored securely using industry-standard encryption. We retain generated 
                audio files only temporarily and automatically delete them after processing.
              </p>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
}