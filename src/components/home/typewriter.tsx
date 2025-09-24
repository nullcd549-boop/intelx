'use client';
import { useState, useEffect, useRef } from 'react';

interface TypewriterProps {
  words: string[];
  delay?: number;
}

const Typewriter = ({ words, delay = 2000 }: TypewriterProps) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const loopTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const loop = () => {
      const fullWord = words[wordIndex % words.length];
      const newText = isDeleting
        ? fullWord.substring(0, text.length - 1)
        : fullWord.substring(0, text.length + 1);

      setText(newText);

      if (!isDeleting && newText === fullWord) {
        loopTimeout.current = setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && newText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
        loopTimeout.current = setTimeout(loop, 500);
      } else {
        const typeSpeed = isDeleting ? 75 : 120;
        loopTimeout.current = setTimeout(loop, typeSpeed);
      }
    };

    loopTimeout.current = setTimeout(loop, 120);

    return () => {
      if (loopTimeout.current) {
        clearTimeout(loopTimeout.current);
      }
    };
  }, [text, isDeleting, wordIndex, words, delay]);

  return (
    <span>
      {text}
      <span className="animate-ping">|</span>
    </span>
  );
};

export default Typewriter;
