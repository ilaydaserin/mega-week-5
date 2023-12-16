// TypeWriter.js
import React, { useState, useEffect } from 'react';

const TypeWriter = () => {
  const [text, setText] = useState('');
  const phrases = ['Developer', 'Designer', 'Freelancer'];
  const speed = 1000; // milisaniye cinsinden hız
  const pauseTime = 1000;

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex < phrases.length) {
        currentText = phrases[currentIndex].slice(0, currentText.length + 1);
        setText(currentText);
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [phrases, speed]);

  useEffect(() => {
    console.log(text);
  }, [text]);

  return (
    <span>
      {text}
    </span>
  );
};

export default TypeWriter;
