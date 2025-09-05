import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, Database, Settings, Palette, 
  Brain, BarChart3, GitBranch, Monitor,
  Server, Smartphone, FileText, Figma
} from 'lucide-react';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: Code2, level: 90 },
        { name: "CSS", icon: Palette, level: 85 },
        { name: "Bootstrap", icon: Smartphone, level: 80 },
        { name: "JavaScript", icon: Code2, level: 85 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Express.js", icon: Server, level: 75 },
        { name: "Python", icon: Code2, level: 90 },
        { name: "Java", icon: Code2, level: 85 },
        { name: "OOP", icon: Settings, level: 88 }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: Database, level: 80 },
        { name: "SQLite", icon: Database, level: 85 },
        { name: "OpenPyXL", icon: FileText, level: 75 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: GitBranch, level: 85 },
        { name: "Docker", icon: Settings, level: 70 },
        { name: "VS Code", icon: Monitor, level: 95 },
        { name: "Figma", icon: Figma, level: 75 }
      ]
    },
    {
      title: "Machine Learning",
      skills: [
        { name: "Scikit-learn", icon: Brain, level: 85 },
        { name: "Pandas", icon: BarChart3, level: 90 },
        { name: "NumPy", icon: BarChart3, level: 85 },
        { name: "Matplotlib", icon: BarChart3, level: 80 },
        { name: "NLP", icon: Brain, level: 75 }
      ]
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
            A comprehensive toolkit spanning frontend, backend, databases, and cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="skill-card"
            >
              <h3 className="text-xl font-bold text-card-foreground mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    className="flex items-center justify-between p-3 bg-background/50 rounded-lg hover:bg-background/70 smooth-transition group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 smooth-transition">
                        <skill.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium text-card-foreground">{skill.name}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-border rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.5 
                          }}
                          className="h-full bg-gradient-to-r from-primary to-accent-purple rounded-full"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground w-8 text-right">
                        {skill.level}%
                      </span>
                    </div>
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