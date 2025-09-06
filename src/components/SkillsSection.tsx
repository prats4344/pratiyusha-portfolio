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
        { name: "HTML", emoji: "🌐" },
        { name: "CSS", emoji: "🎨" },
        { name: "Bootstrap", emoji: "🅱️" },
        { name: "JavaScript", emoji: "⚡" }
      ]
    },
    {
      title: "Core CS",
      skills: [
        { name: "DSA", emoji: "🚀" },
        { name: "Python", emoji: "🐍" },
        { name: "Java", emoji: "☕" },
        { name: "OOPS", emoji: "🔧" }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", emoji: "🗄️" },
        { name: "SQLite", emoji: "💾" },
        { name: "OpenPyXL", emoji: "📊" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", emoji: "🌿" },
        { name: "Docker", emoji: "🐳" },
        { name: "VS Code", emoji: "💻" },
        { name: "Figma", emoji: "🎯" }
      ]
    },
    {
      title: "Machine Learning",
      skills: [
        { name: "Scikit-learn", emoji: "🤖" },
        { name: "Pandas", emoji: "🐼" },
        { name: "Matplotlib", emoji: "📈" },
        { name: "NLP", emoji: "🧠" }
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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    className="flex items-center justify-center p-4 bg-background/50 rounded-lg hover:bg-background/70 smooth-transition group hover:scale-105"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl group-hover:scale-110 smooth-transition">
                        {skill.emoji}
                      </span>
                      <span className="font-medium text-card-foreground group-hover:text-primary smooth-transition">
                        {skill.name}
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
