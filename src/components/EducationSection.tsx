import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, BookOpen, ExternalLink } from 'lucide-react';

const EducationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const education = [
    {
      degree: "B.Tech Computer Science and Engineering (AIML)",
      institution: "Institute of Technical Education and Research (ITER), SOA University",
      location: "Bhubaneswar",
      duration: "2023 – 2027",
      grade: "CGPA: 8.12",
      type: "completed"
    },
    {
      degree: "Higher Secondary (12th CBSE)",
      institution: "DAV Public School",
      location: "Cuttack",
      duration: "2021 – 2023",
      grade: "Percentage: 77.8%",
      type: "completed"
    },
    {
      degree: "Secondary (10th CBSE)",
      institution: "DAV Public School",
      location: "Cuttack",
      duration: "2021",
      grade: "Percentage: 91.4%",
      type: "completed"
    }
  ];

  const certifications = [
    {
      title: "AWS Cloud Virtual Experience Program",
      issuer: "Forage",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_aCLeM3ZiGNd9xRiuz_1751296774040_completion_certificate.pdf"
    },
    {
      title: "Mastering Generative AI and ChatGPT",
      issuer: "GeeksforGeeks",
      link: "https://media.geeksforgeeks.org/courses/certificates/3b0094079ceed7010d4ec98c97a23fd1.pdf"
    },
    {
      title: "Artificial Intelligence",
      issuer: "IIT Guwahati (Alcheringa)",
      link: "https://cert.diceid.com/cid/o5cRR1fcaL"
    },
    {
      title: "Database For Developers: Foundation",
      issuer: "Oracle",
      link: "https://drive.google.com/file/d/1KsTmvzIFoGl3moTNSOi5sCneQvoOA3Eg/view"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-purple mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              Academic Background
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="skill-card relative overflow-hidden"
                >
                  {edu.type === 'current' && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                        Current
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-bold text-card-foreground mb-1">{edu.degree}</h4>
                      <p className="text-primary font-medium mb-1">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground mb-2">{edu.location}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{edu.duration}</span>
                        <span className="text-sm font-semibold text-primary">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="w-8 h-8 text-primary" />
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="skill-card block group hover:scale-102 smooth-transition"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-3">
                      <BookOpen className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-card-foreground group-hover:text-primary smooth-transition">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary smooth-transition" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
