import { useRef } from 'react';
import { useParticles } from '../../hooks/useParticles';

export default function ParticlesCanvas() {
  const canvasRef = useRef(null);
  useParticles(canvasRef);

  return (
    <canvas
      ref={canvasRef}
      id="particles-canvas"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}
    />
  );
}
