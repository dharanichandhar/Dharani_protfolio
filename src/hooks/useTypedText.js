import { useState, useEffect, useRef } from 'react';

export function useTypedText(phrases) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout;

    const type = () => {
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
        if (text.length === currentPhrase.length) {
          timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else {
          timeout = setTimeout(type, 100);
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          timeout = setTimeout(type, 500);
        } else {
          timeout = setTimeout(type, 50);
        }
      }
    };

    timeout = setTimeout(type, 2000);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases]);

  return text;
}
