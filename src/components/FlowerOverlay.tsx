
import React, { useEffect, useState } from 'react';
import { Flower } from "lucide-react";

interface FlowerOverlayProps {
  visible: boolean;
}

const FlowerOverlay: React.FC<FlowerOverlayProps> = ({ visible }) => {
  const [flowers, setFlowers] = useState<{ id: number; x: number; y: number; size: number; delay: number; rotation: number }[]>([]);

  useEffect(() => {
    if (visible) {
      const flowerCount = 50;
      const newFlowers = Array.from({ length: flowerCount }).map((_, index) => ({
        id: index,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 20 + Math.random() * 40,
        delay: Math.random() * 3,
        rotation: Math.random() * 360
      }));
      setFlowers(newFlowers);
    } else {
      setFlowers([]);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="flower"
          style={{
            left: `${flower.x}%`,
            top: `${flower.y}%`,
            animationDelay: `${flower.delay}s`,
            transform: `rotate(${flower.rotation}deg)`,
          }}
        >
          <Flower
            size={flower.size}
            color="#FF85A2"
            strokeWidth={1.5}
            className="drop-shadow-md"
          />
        </div>
      ))}
    </div>
  );
};

export default FlowerOverlay;
