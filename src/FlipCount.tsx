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
  const [displayValue, setDisplayValue] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 초기 애니메이션 실행
    setIsMounted(true);
    setIsFlipping(true);
    
    const timer = setTimeout(() => {
      setDisplayValue(value);
      setIsFlipping(false);
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // 이후 value 변경 시에만 애니메이션 실행
    if (isMounted && value !== displayValue) {
      setIsFlipping(true);
      
      const timer = setTimeout(() => {
        setDisplayValue(value);
        setIsFlipping(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [value, displayValue, duration, isMounted]);

  const containerStyle: React.CSSProperties = {
    display: 'inline-block',
    position: 'relative',
    perspective: '1000px',
    ...style
  };

  const flipStyle: React.CSSProperties = {
    display: 'inline-block',
    transition: `all ${duration}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
    transformStyle: 'preserve-3d',
    transformOrigin: 'center center',
    transform: isFlipping 
      ? 'rotateY(90deg) scale(0.8)' 
      : 'rotateY(0deg) scale(1)',
    opacity: isFlipping ? 0.3 : 1,
    filter: isFlipping ? 'blur(1px)' : 'blur(0px)',
  };

  return (
    <span 
      className={`flip-count ${className}`} 
      style={containerStyle}
    >
      <span style={flipStyle}>
        {displayValue}
      </span>
    </span>
  );
};

export default FlipCount;