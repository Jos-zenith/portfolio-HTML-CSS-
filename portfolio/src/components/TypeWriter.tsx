'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypeWriterProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
  className?: string;
}

export default function TypeWriter({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  delayBetween = 2000,
  className = ""
}: TypeWriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (!isDeleting) {
        // Typing
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        } else {
          // Start deleting after delay
          setTimeout(() => setIsDeleting(true), delayBetween);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          // Move to next text
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, speed, deleteSpeed, delayBetween]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <motion.div 
      className={`terminal-font ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-[var(--terminal-success)]">$</span>
      <span className="text-gray-400 ml-2">echo "</span>
      <span className="text-[var(--terminal-accent)]">{currentText}</span>
      <span className="text-gray-400">"</span>
      <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
        █
      </span>
    </motion.div>
  );
}