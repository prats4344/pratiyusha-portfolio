import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: "Machine Learning",
      skills: ["Scikit-learn", "TensorFlow", "Matplotlib", "NLP"]
    },
    {
      title: "Core Computer Science",
      skills: ["DSA", "Python", "Java", "OOPS"]
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript"]
    },
    {
      title: "Databases",
      skills: ["SQLite", "MySQL", "OpenPyXL"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "VS Code", "Figma"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-purple mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning AIML, frontend, databases, and cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className="bg-background/50 p-6 rounded-2xl shadow-glow hover:shadow-glow-strong smooth-transition"
            >
              <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    className="p-4 bg-background rounded-md text-center font-medium text-card-foreground hover:bg-background/70 smooth-transition group shadow-sm hover:shadow-md hover:shadow-primary/50"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

