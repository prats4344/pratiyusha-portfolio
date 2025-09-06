import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Brain, Rocket, Star } from 'lucide-react';
import { useParallaxEffect } from '@/hooks/useScrollEffects';
import developerBg from '@/assets/developer-hero-bg.jpg';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const parallaxOffset = useParallaxEffect(0.3);

  const features = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Proficient in both frontend and backend technologies"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Specialized in AIML with hands-on project experience"
    },
    {
      icon: Rocket,
      title: "Innovation Focused",
      description: "Always exploring cutting-edge technologies and solutions"
    },
    {
      icon: Star,
      title: "Quality Driven",
      description: "Committed to delivering high-quality, scalable solutions"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background with parallax */}
      <motion.div 
        className="absolute inset-0 opacity-5 will-change-transform"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
        }}
      >
        <img 
          src={developerBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-purple mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="text-lg leading-relaxed text-muted-foreground">
              <p className="mb-6">
                I am a dedicated <span className="text-primary font-semibold">B.Tech Computer Science Engineering (AIML)</span> student 
                with a passion for creating innovative technological solutions. My journey in software development 
                spans across multiple domains, from web development to machine learning applications.
              </p>
              
              <p className="mb-6">
                With a strong foundation in both <span className="text-primary font-semibold">frontend and backend technologies</span>, 
                I enjoy building full-stack applications that solve real-world problems. My expertise in 
                <span className="gradient-text font-semibold"> artificial intelligence and machine learning</span> allows 
                me to create intelligent systems that make a meaningful impact.
              </p>
              
              <p>
                I'm always eager to learn new technologies, take on challenging projects, and collaborate with 
                like-minded individuals to bring innovative ideas to life. My goal is to contribute to the 
                tech industry by developing solutions that push the boundaries of what's possible.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="skill-card text-center group"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 smooth-transition">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
