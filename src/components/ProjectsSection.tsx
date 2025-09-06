import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, TrendingUp, Package, CreditCard, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: "Smart Fintech Risk Assessment System",
      description: "Full-stack ML web application for credit risk assessment at individual and portfolio levels. Features manual prediction forms, CSV batch processing, and comprehensive analytics dashboards with model evaluation metrics.",
      tech: ["Python", "Flask", "Scikit-learn", "Pandas", "Matplotlib"],
      icon: TrendingUp,
      github: "https://github.com/prats4344/smart-fintech-risk-app",
      live: "https://smart-fintech-risk-app-1.onrender.com",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "InventoryPal",
      description: "Smart inventory management system with real-time barcode scanning using device camera, secure authentication, and dynamic analytics dashboard with live charts for comprehensive stock analysis.",
      tech: ["Flask", "SQLite", "JavaScript", "Bootstrap", "ZXing"],
      icon: Package,
      github: "https://github.com/prats4344/InventoryPal",
      live: "https://inventorypal.onrender.com",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "FinWise",
      description: "Personal finance tracker with intuitive expense categorization, investment tracking, and interactive trend visualization. Features responsive design and comprehensive financial summaries.",
      tech: ["Flask", "SQLAlchemy", "Chart.js", "HTML", "CSS"],
      icon: CreditCard,
      github: "https://github.com/prats4344/finwise-finance-tracker",
      live: "https://finwise-app.onrender.com",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Customer Churn Prediction",
      description: "End-to-end MLOps solution with XGBoost modeling, automated hyperparameter tuning using Optuna, MLflow experiment tracking, and SHAP explainability for telecom churn analysis.",
      tech: ["XGBoost", "Optuna", "MLflow", "SHAP", "FastAPI", "Streamlit"],
      icon: Users,
      github: "https://github.com/prats4344/churn-prediction-project",
      live: "https://customer-churn-frontend.onrender.com",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-purple mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work spanning responsive web applications and AI/ML projects, highlighting my passion for building impactful solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="project-card group"
            >
              {/* Header with Icon */}
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary smooth-transition">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  asChild
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
