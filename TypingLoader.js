import React, { useEffect, useState } from 'react';


const TypingLoader = () => {
  const [text, setText] = useState('');
  const message = "Welcome to MovieZone...";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(message.substring(0, index + 1));
      index++;
      if (index === message.length) clearInterval(interval);
    }, 100); 
  }, []);

  return (
    <div className="typing-loader-container">
      <h2 className="typing-text">{text}</h2>
    </div>
  );
};

export default TypingLoader;

