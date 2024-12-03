import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

interface VoiceFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  selectedGender: string;
  onGenderChange: (gender: string) => void;
  languages: string[];
  genders: string[];
}

export default function VoiceFilters({
  search,
  onSearchChange,
  selectedLanguage,
  onLanguageChange,
  selectedGender,
  onGenderChange,
  languages,
  genders,
}: VoiceFiltersProps) {
  return (
    <div className="mb-6 space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search voices..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <select
          value={selectedLanguage}
          onChange={(e) => onLanguageChange(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
        >
          <option value="">All Languages</option>
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>

        <select
          value={selectedGender}
          onChange={(e) => onGenderChange(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
        >
          <option value="">All Genders</option>
          {genders.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}