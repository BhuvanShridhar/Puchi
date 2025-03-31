
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import LoveAnimation from '@/components/LoveAnimation';

const Index = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handleClick = () => {
    setShowAnimation(true);
    setShowButton(false);
  };

  const handleAnimationComplete = () => {
    // Reset everything after the animation is complete
    setTimeout(() => {
      setShowAnimation(false);
      setShowButton(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-white p-4">
      {showButton && (
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-love mb-8">
            For Pucchii ❤️
          </h1>
          <Button 
            onClick={handleClick} 
            className="bg-love hover:bg-love-dark text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all hover:scale-105"
          >
            <Heart className="mr-2 h-6 w-6" />
            Click Me
          </Button>
        </div>
      )}

      <LoveAnimation 
        visible={showAnimation} 
        onComplete={handleAnimationComplete} 
      />
    </div>
  );
};

export default Index;
