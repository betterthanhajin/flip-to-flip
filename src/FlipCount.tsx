import React, { useState, useEffect } from 'react';

export interface FlipCountProps {
  value: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FlipCount: React.FC<FlipCountProps> = ({ 
  value, 
  duration = 600, 
  className = '', 
  style = {} 
}) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (value !== displayValue) {
      setIsFlipping(true);
      
      setTimeout(() => {
        setDisplayValue(value);
        setTimeout(() => {
          setIsFlipping(false);
        }, duration / 2);
      }, duration / 2);
    }
  }, [value, displayValue, duration]);

  const flipStyle: React.CSSProperties = {
    display: 'inline-block',
    transition: `transform ${duration}ms ease-in-out`,
    transform: isFlipping ? 'rotateX(90deg)' : 'rotateX(0deg)',
    transformStyle: 'preserve-3d',
    transformOrigin: 'center',
    ...style
  };

  return (
    <span 
      className={`flip-count ${className}`} 
      style={flipStyle}
    >
      {displayValue}
    </span>
  );
};

export default FlipCount;