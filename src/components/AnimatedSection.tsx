import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  threshold?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-1000 ease-out';
    
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return `${baseClasses} transform translate-y-10 opacity-0`;
        case 'down':
          return `${baseClasses} transform -translate-y-10 opacity-0`;
        case 'left':
          return `${baseClasses} transform translate-x-10 opacity-0`;
        case 'right':
          return `${baseClasses} transform -translate-x-10 opacity-0`;
        case 'fade':
          return `${baseClasses} opacity-0`;
        default:
          return `${baseClasses} transform translate-y-10 opacity-0`;
      }
    }
    
    return `${baseClasses} transform translate-y-0 translate-x-0 opacity-100`;
  };

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;
