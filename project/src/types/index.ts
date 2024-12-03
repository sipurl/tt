export interface Voice {
  name: string;
  id: string;
  gender: string;
  language: string;
}

export interface AudioState {
  isPlaying: boolean;
  url: string | null;
  duration: number;
  currentTime: number;
}