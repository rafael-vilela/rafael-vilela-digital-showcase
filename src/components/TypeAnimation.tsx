
import { useState, useEffect } from 'react';

interface TypeAnimationProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenPhrases?: number;
  className?: string;
}

const TypeAnimation = ({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenPhrases = 1000,
  className = '',
}: TypeAnimationProps) => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delayBetweenPhrases);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      // Deleting text
      if (text.length === 0) {
        setIsDeleting(false);
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      } else {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, deletingSpeed);
      }
    } else {
      // Typing text
      if (text.length === currentPhrase.length) {
        setIsWaiting(true);
      } else {
        timeout = setTimeout(() => {
          setText(currentPhrase.slice(0, text.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phraseIndex, isDeleting, isWaiting, phrases, typingSpeed, deletingSpeed, delayBetweenPhrases]);

  return <span className={className}>{text}<span className="animate-pulse">|</span></span>;
};

export default TypeAnimation;
