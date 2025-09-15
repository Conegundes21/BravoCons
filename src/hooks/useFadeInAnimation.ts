import { useState, useEffect, useRef } from 'react';

interface UseFadeInAnimationProps {
  threshold?: number;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

export const useFadeInAnimation = ({
  threshold = 0.1,
  delay = 0,
  duration = 600,
  direction = 'up'
}: UseFadeInAnimationProps = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible, threshold, delay]);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return 'translateY(30px)';
        case 'down': return 'translateY(-30px)';
        case 'left': return 'translateX(30px)';
        case 'right': return 'translateX(-30px)';
        case 'fade': return 'translateY(0)';
        default: return 'translateY(30px)';
      }
    }
    return 'translateY(0)';
  };

  const getTransition = () => {
    return `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
  };

  return {
    elementRef,
    isVisible,
    style: {
      opacity: isVisible ? 1 : 0,
      transform: getTransform(),
      transition: getTransition(),
    }
  };
};
