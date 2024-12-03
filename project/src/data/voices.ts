// Generated from the provided voice list
export const voices = [
  { name: 'Salma', id: 'ar-EG-SalmaNeural', gender: 'Female', language: 'ar-EG' },
  { name: 'Shakir', id: 'ar-EG-ShakirNeural', gender: 'Male', language: 'ar-EG' },
  { name: 'Zariyah', id: 'ar-SA-ZariyahNeural', gender: 'Female', language: 'ar-SA' },
  { name: 'Hamed', id: 'ar-SA-HamedNeural', gender: 'Male', language: 'ar-SA' },
  { name: 'Kalina', id: 'bg-BG-KalinaNeural', gender: 'Female', language: 'bg-BG' },
  { name: 'Borislav', id: 'bg-BG-BorislavNeural', gender: 'Male', language: 'bg-BG' },
  { name: 'Alba', id: 'ca-ES-AlbaNeural', gender: 'Female', language: 'ca-ES' },
  { name: 'Joanna', id: 'ca-ES-JoanaNeural', gender: 'Female', language: 'ca-ES' },
  { name: 'Enric', id: 'ca-ES-EnricNeural', gender: 'Male', language: 'ca-ES' },
  // ... Add all other voices from the list
];

export const languages = Array.from(new Set(voices.map(voice => voice.language)));
export const genders = Array.from(new Set(voices.map(voice => voice.gender)));