import React, { ReactNode, useState, useEffect } from 'react';

interface MagnifierProps {
  children: ReactNode;
  isEnabled: boolean;
}

interface Position {
  x: number;
  y: number;
}

const Magnifier: React.FC<MagnifierProps> = ({ children, isEnabled }) => {
  const [mousePosition, setMousePosition] = useState<Position | null>(null);
  const scale = 1.5;
  const radius = 100;

  useEffect(() => {
    // Reset the mouse position when magnifier is disabled
    if (!isEnabled) {
      setMousePosition(null);
    }
  }, [isEnabled]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isEnabled) {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    }
  };

  const handleMouseLeave = () => {
    if (isEnabled) {
      setMousePosition(null);
    }
  };

  return (
    <div
      className="relative w-full h-full"
      onMouseMove={isEnabled ? handleMouseMove : undefined}
      onMouseLeave={isEnabled ? handleMouseLeave : undefined}
    >
      {children}
      {isEnabled && mousePosition && (
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{
            clipPath: `circle(${radius}px at ${mousePosition.x}px ${mousePosition.y}px)`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
            }}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Magnifier;
