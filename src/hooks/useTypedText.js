import { useState, useEffect } from 'react';

export function useTypedText(phrases) {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [phrases]);

  return phrases[phraseIndex];
}
