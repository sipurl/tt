const STORAGE_KEY = 'saytts_generated_audio';

export interface GeneratedAudio {
  id: string;
  url: string;
  text: string;
  voiceId: string;
  timestamp: number;
}

export const saveGeneratedAudio = (audio: GeneratedAudio) => {
  const stored = getGeneratedAudios();
  const updated = [audio, ...stored].slice(0, 10); // Keep last 10 items
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const getGeneratedAudios = (): GeneratedAudio[] => {
  const stored = sessionStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const clearGeneratedAudios = () => {
  sessionStorage.removeItem(STORAGE_KEY);
};