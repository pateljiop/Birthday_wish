import { useState, useEffect } from 'react';

const shayari = `Tumne hi mere dil ki ghanti pehli baar bajayi thi, Bachcha... aur woh aawaaz aaj bhi kahin na kahin mere andar goonjti hai. Is dil ke poore database mein tumhara space hamesha exclusive rahega. I miss you a lot, more than this code can ever render. Happy Birthday, Bulbul.`;

export function TypingShayari() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < shayari.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + shayari[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <div className="border-2 border-[#00ff00] p-8 bg-black/50 backdrop-blur max-w-3xl">
      <p className="text-[#00ff00] font-mono leading-relaxed whitespace-pre-wrap">
        {displayedText}
        {currentIndex < shayari.length && <span className="animate-pulse">_</span>}
      </p>
    </div>
  );
}
