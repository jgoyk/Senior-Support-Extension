import React, { ReactNode, useState } from 'react';

interface MagnifierProps {
  children: ReactNode;
}

interface Position {
  x: number;
  y: number;
}

const Magnifier: React.FC<MagnifierProps> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState<Position | null>(null);
  const scale = 1.5;
  const radius = 100;
  
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseLeave = () => {
    setMousePosition(null);
  };

  const adjustedX = mousePosition ? mousePosition.x - mousePosition.x * scale : 0;
    const adjustedY = mousePosition ? mousePosition.y - mousePosition.y * scale : 0;


  return (
    <div
      className="relative w-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {mousePosition && (
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{
            clipPath: `circle(${radius}px at ${mousePosition.x}px ${mousePosition.y}px)`,
          }}
        >
          <div className="absolute inset-0" style={{
            transform: `scale(${scale})`,
            transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
            left: `${adjustedX}px`,
            top: `${adjustedY}px`,
          }}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Magnifier;
