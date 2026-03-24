import { useState, useEffect } from 'react';

export function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let start = 0;
            const increment = target / 50;
            const stepTime = duration / 50;

            const timer = setInterval(() => {
              start += increment;
              if (start >= target) {
                setCount(target);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, stepTime);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.querySelector(`[data-count="${target}"]`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return count;
}
