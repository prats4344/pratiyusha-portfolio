import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, ArrowDown } from 'lucide-react';
import { useParallaxEffect } from '@/hooks/useScrollEffects';
import developerBg from '@/assets/developer-hero-bg.jpg';

const HeroSection = () => {
  const parallaxOffset = useParallaxEffect(0.5);
  
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 parallax-bg opacity-30 will-change-transform"
        style={{ 
          backgroundImage: `url(${developerBg})`,
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60" />
      
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent-purple/10"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-40"
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

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi, I'm{' '}
            <span className="gradient-text animate-glow-pulse">
              Pratiyusha Kanungo
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A passionate <span className="text-primary font-semibold">Developer</span> and{' '}
            <span className="text-primary font-semibold">B.Tech CSE AIML</span> student ready to create{' '}
            <span className="gradient-text">innovative solutions</span> and learn{' '}
            <span className="gradient-text">cutting-edge technologies</span>.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold glow-effect hover:glow-strong smooth-transition group"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold smooth-transition"
            >
              <a 
                href="https://drive.google.com/file/d/1yYRZ7rMUGqcB4SAgXXk4312Yg5aayTNh/view" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;