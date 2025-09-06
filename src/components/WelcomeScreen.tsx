import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WelcomeScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const welcomeTexts = [
    "WELCOME",
    "स्वागतम्",
    "ସ୍ୱାଗତ",
    "স্বাগতম",
    "BIENVENIDO",
    "환영합니다"  
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= welcomeTexts.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 800);
          }, 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 1200); // Slower interval for better readability

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative"
              >
                <h1 className="text-6xl md:text-8xl font-bold gradient-text glow-strong">
                  {welcomeTexts[currentIndex]}
                </h1>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="h-1 bg-gradient-to-r from-primary to-accent-purple mx-auto mt-4"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary rounded-full opacity-10"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                transition={{
                  duration: Math.random() * 4 + 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;

