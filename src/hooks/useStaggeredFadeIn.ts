import { useState, useEffect, useRef } from 'react';

interface UseStaggeredFadeInProps {
  itemCount: number;
  threshold?: number;
  staggerDelay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

export const useStaggeredFadeIn = ({
  itemCount,
  threshold = 0.1,
  staggerDelay = 100,
  duration = 600,
  direction = 'up'
}: UseStaggeredFadeInProps) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false));
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate items with stagger
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev];
                newState[i] = true;
                return newState;
              });
            }, i * staggerDelay);
          }
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [itemCount, threshold, staggerDelay]);

  const getItemStyle = (index: number) => {
    const isVisible = visibleItems[index];
    
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

    return {
      opacity: isVisible ? 1 : 0,
      transform: getTransform(),
      transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    };
  };

  return {
    elementRef,
    getItemStyle,
    visibleItems
  };
};
