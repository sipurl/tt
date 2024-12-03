import { motion } from 'framer-motion';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  maxChars: number;
}

export default function TextInput({ value, onChange, maxChars }: TextInputProps) {
  return (
    <div className="mb-6">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value.slice(0, maxChars))}
        placeholder="Enter your text here (max 2000 characters)..."
        className="w-full h-40 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent resize-none"
        maxLength={maxChars}
      />
      <motion.div 
        className="text-right text-sm"
        animate={{
          color: value.length >= maxChars ? '#EF4444' : '#6B7280'
        }}
      >
        {value.length}/{maxChars} characters
      </motion.div>
    </div>
  );
}