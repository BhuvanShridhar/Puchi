
import React, { useState, useEffect } from 'react';
import { Progress } from "@/components/ui/progress";
import FlowerOverlay from './FlowerOverlay';

interface LoveAnimationProps {
  visible: boolean;
  onComplete: () => void;
}

const LoveAnimation: React.FC<LoveAnimationProps> = ({ visible, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  useEffect(() => {
    if (!visible) {
      setProgress(0);
      setShowFinalMessage(false);
      return;
    }

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setShowFinalMessage(true);
            }, 500);
            return 100;
          }
          return prevProgress + 1;
        });
      }, 30);

      return () => clearInterval(interval);
    }, 1500); // Delay before starting progress

    return () => clearTimeout(timer);
  }, [visible]);

  useEffect(() => {
    if (showFinalMessage) {
      const timer = setTimeout(() => {
        onComplete();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showFinalMessage, onComplete]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-pink-50 bg-opacity-90 z-20">
      <FlowerOverlay visible={visible} />
      
      <div className="text-center z-30 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-love mb-8 animate-fade-in">
          My love for you is loading...
        </h2>
        
        <div className="w-full max-w-md mx-auto mb-8">
          <Progress value={progress} className="h-4 bg-pink-100" />
          <p className="text-xl mt-2 text-love-dark font-semibold">{progress}%</p>
        </div>
        
        {showFinalMessage && (
          <div className="mt-8 animate-scale-in">
            <h1 className="text-4xl md:text-6xl font-bold text-love-dark mb-4 animate-pulse-scale">
              100% INFINITE LOVE
            </h1>
            <p className="text-xl md:text-2xl text-love">
              For my Pucchii, forever and always ❤️
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoveAnimation;
