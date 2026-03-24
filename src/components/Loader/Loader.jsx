import { useState, useEffect } from 'react';
import './Loader.css';

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-screen ${!isVisible ? 'hidden' : ''}`}>
      <div className="loader">
        <div className="loader-inner"></div>
        <span className="loader-text">DC</span>
      </div>
    </div>
  );
}
