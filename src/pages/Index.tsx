import { useState } from 'react';
import WelcomeScreen from '@/components/WelcomeScreen';
import Navigation from '@/components/Navigation';
import ScrollProgress from '@/components/ScrollProgress';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  return (
    <>
      {showWelcome && <WelcomeScreen onComplete={handleWelcomeComplete} />}
      
      {!showWelcome && (
        <div className="min-h-screen bg-background">
          <ScrollProgress />
          <Navigation />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
          
          {/* Footer */}
          <footer className="py-8 border-t border-border bg-card">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <p className="text-muted-foreground">
                © 2025 Pratiyusha Kanungo. Built with ❤️
              </p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default Index;
