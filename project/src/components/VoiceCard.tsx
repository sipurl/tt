import { motion } from 'framer-motion';
import { Volume2 } from 'lucide-react';
import type { Voice } from '../types';

interface VoiceCardProps {
  voice: Voice;
  isSelected: boolean;
  onSelect: (voice: Voice) => void;
  onPreview: (voice: Voice) => void;
}

export default function VoiceCard({ voice, isSelected, onSelect, onPreview }: VoiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`p-4 rounded-lg border-2 cursor-pointer ${
        isSelected 
          ? 'border-black bg-black text-white' 
          : 'border-gray-200 hover:border-gray-300'
      }`}
      onClick={() => onSelect(voice)}
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="font-semibold">{voice.name}</h4>
          <p className="text-sm opacity-80">{voice.language}</p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPreview(voice);
          }}
          className={`p-2 rounded-full ${
            isSelected 
              ? 'hover:bg-white/20' 
              : 'hover:bg-gray-100'
          }`}
        >
          <Volume2 className="w-4 h-4" />
        </button>
      </div>
      <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
        {voice.gender}
      </span>
    </motion.div>
  );
}