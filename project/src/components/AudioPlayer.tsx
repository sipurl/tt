import { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { Play, Pause, Download } from 'lucide-react';
import { motion } from 'framer-motion';

interface AudioPlayerProps {
  url: string;
  onDownload: () => void;
}

export default function AudioPlayer({ url, onDownload }: AudioPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    wavesurferRef.current = WaveSurfer.create({
      container: containerRef.current,
      waveColor: '#4B5563',
      progressColor: '#000000',
      cursorColor: '#000000',
      barWidth: 2,
      barGap: 3,
      height: 60,
      responsive: true,
    });

    wavesurferRef.current.load(url);

    return () => {
      wavesurferRef.current?.destroy();
    };
  }, [url]);

  const togglePlayPause = () => {
    if (wavesurferRef.current) {
      if (isPlaying) {
        wavesurferRef.current.pause();
      } else {
        wavesurferRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 border border-gray-200 rounded-lg bg-white"
    >
      <div ref={containerRef} className="mb-4" />
      
      <div className="flex justify-between items-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={togglePlayPause}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          {isPlaying ? <Pause /> : <Play />}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onDownload}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <Download />
        </motion.button>
      </div>
    </motion.div>
  );
}