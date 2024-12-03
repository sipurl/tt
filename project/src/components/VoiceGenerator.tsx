import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Voice } from '../types';
import VoiceCard from './VoiceCard';
import TextInput from './TextInput';
import VoiceFilters from './VoiceFilters';
import AudioPlayer from './AudioPlayer';
import { voices, languages, genders } from '../data/voices';

export default function VoiceGenerator() {
  const [text, setText] = useState('');
  const [selectedVoice, setSelectedVoice] = useState<Voice | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [generatedAudios, setGeneratedAudios] = useState<Array<{ url: string; timestamp: number }>>([]);
  const maxChars = 2000;

  const filteredVoices = voices.filter((voice) => {
    const matchesSearch = voice.name.toLowerCase().includes(search.toLowerCase()) ||
                         voice.language.toLowerCase().includes(search.toLowerCase());
    const matchesLanguage = !selectedLanguage || voice.language === selectedLanguage;
    const matchesGender = !selectedGender || voice.gender === selectedGender;
    return matchesSearch && matchesLanguage && matchesGender;
  });

  const handleGenerate = async () => {
    if (!text || !selectedVoice) return;
    
    setIsGenerating(true);
    try {
      // Simulated API call - replace with actual API integration
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulated response - replace with actual API response
      const audioUrl = 'https://example.com/sample.mp3';
      setGeneratedAudios(prev => [...prev, { url: audioUrl, timestamp: Date.now() }]);
    } catch (error) {
      console.error('Error generating audio:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePreviewVoice = async (voice: Voice) => {
    // Implement voice preview logic here
    console.log('Preview voice:', voice.name);
  };

  const handleDownload = (url: string) => {
    // Implement download logic here
    console.log('Downloading:', url);
  };

  return (
    <section id="generator" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8"
        >
          <h2 className="text-2xl font-bold mb-6">Text to Speech Generator</h2>
          
          <TextInput
            value={text}
            onChange={setText}
            maxChars={maxChars}
          />

          <VoiceFilters
            search={search}
            onSearchChange={setSearch}
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
            selectedGender={selectedGender}
            onGenderChange={setSelectedGender}
            languages={languages}
            genders={genders}
          />

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Select Voice</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
              {filteredVoices.map((voice) => (
                <VoiceCard
                  key={voice.id}
                  voice={voice}
                  isSelected={selectedVoice?.id === voice.id}
                  onSelect={setSelectedVoice}
                  onPreview={handlePreviewVoice}
                />
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGenerate}
            disabled={!text || !selectedVoice || isGenerating}
            className={`w-full py-3 rounded-lg font-semibold ${
              isGenerating 
                ? 'bg-gray-200 text-gray-500' 
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            {isGenerating ? 'Generating...' : 'Generate Audio'}
          </motion.button>

          {generatedAudios.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Generated Audio</h3>
              <div className="space-y-4">
                {generatedAudios.map((audio, index) => (
                  <AudioPlayer
                    key={audio.timestamp}
                    url={audio.url}
                    onDownload={() => handleDownload(audio.url)}
                  />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}