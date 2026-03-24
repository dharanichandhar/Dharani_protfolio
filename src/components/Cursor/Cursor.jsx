import { useState, useEffect, useRef } from 'react';
import './Cursor.css';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPos, setFollowerPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  const mousePos = useRef({ x: 0, y: 0 });
  const followerRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const animateFollower = () => {
      followerRef.current.x += (mousePos.current.x - followerRef.current.x) * 0.15;
      followerRef.current.y += (mousePos.current.y - followerRef.current.y) * 0.15;
      setFollowerPos({ 
        x: followerRef.current.x, 
        y: followerRef.current.y 
      });
      animationRef.current = requestAnimationFrame(animateFollower);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .skill-card, .project-card, .dot, [role="button"]')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, .skill-card, .project-card, .dot, [role="button"]')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);
    animationRef.current = requestAnimationFrame(animateFollower);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        className="cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`
        }}
      />
      <div
        className="cursor-follower"
        style={{
          left: `${followerPos.x}px`,
          top: `${followerPos.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.8 : 1})`
        }}
      />
    </>
  );
}
