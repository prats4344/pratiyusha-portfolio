import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WelcomeScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [currentLanguage, setCurrentLanguage] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const welcomeTexts = [
    { text: "WELCOME", lang: "English" },
    { text: "स्वागतम्", lang: "Hindi" },
    { text: "ସ୍ୱାଗତ", lang: "Odia" },
    { text: "স্বাগতম", lang: "Bengali" },
    { text: "BIENVENIDO", lang: "Spanish" },
    { text: "BIENVENUE", lang: "French" },
    { text: "WILLKOMMEN", lang: "German" },
    { text: "BENVENUTO", lang: "Italian" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguage((prev) => {
        if (prev >= welcomeTexts.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 1000);
          }, 1500);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [onComplete, welcomeTexts.length]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentLanguage}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 1.2 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative"
              >
                <h1 className="text-6xl md:text-8xl font-bold gradient-text glow-strong">
                  {welcomeTexts[currentLanguage].text}
                </h1>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-1 bg-gradient-to-r from-primary to-accent-purple mx-auto mt-4"
                />
                <p className="text-muted-foreground mt-4 text-lg">
                  {welcomeTexts[currentLanguage].lang}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary rounded-full opacity-20"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
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