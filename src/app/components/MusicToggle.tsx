import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element (you can replace this with actual music URL)
    // For now, using a placeholder
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // In production, you would set audioRef.current.src to actual music file
      // audioRef.current.play().catch(err => console.log('Audio play failed:', err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed top-6 right-6 z-50 p-3 bg-[#00ff00]/10 border-2 border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00]/20 transition-all duration-300 group"
      style={{ boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)' }}
      aria-label={isPlaying ? 'Mute music' : 'Play music'}
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
      ) : (
        <VolumeX className="w-5 h-5 group-hover:scale-110 transition-transform" />
      )}
      <span className="absolute top-full right-0 mt-2 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {isPlaying ? 'Music On' : 'Music Off'}
      </span>
    </button>
  );
}
