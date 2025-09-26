import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const skillCategories = [
    { title: 'Frontend', skills: portfolioData.about.skills.frontend, className: 'frontend' },
    { title: 'Backend', skills: portfolioData.about.skills.backend, className: 'backend' },
    { title: 'Programs', skills: portfolioData.about.skills.programs, className: 'programs' },
    { title: 'Tools', skills: portfolioData.about.skills.tools, className: 'tools' },
    { title: 'Learning', skills: portfolioData.about.skills.learning, className: 'learning' }
  ];

  const deviconClassMap = {
    React: 'devicon-react-original colored',
    JavaScript: 'devicon-javascript-plain colored',
    HTML5: 'devicon-html5-plain colored',
    CSS3: 'devicon-css3-plain colored',
    'Tailwind CSS': 'devicon-tailwindcss-plain colored',
    'Node.js': 'devicon-nodejs-plain colored',
    Express: 'devicon-express-original',
    MongoDB: 'devicon-mongodb-plain colored',
    Git: 'devicon-git-plain colored',
    'VS Code': 'devicon-vscode-plain colored',
    Figma: 'devicon-figma-plain colored',
    TypeScript: 'devicon-typescript-plain colored',
    'Three.js': 'devicon-threejs-original',
    Java: 'devicon-java-plain colored',
    Python: 'devicon-python-plain colored',
    'C++': 'devicon-cplusplus-plain colored'
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="about-header"
        >
          <h2 className="about-title">About Me</h2>
        </motion.div>

        {/* Description Section - Now at the top */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="about-description-section"
        >
          <motion.div variants={itemVariants} className="about-intro">
            <h3 className="about-name">Hello! I'm Deva Harsheni</h3>
            <p className="about-main-text">{portfolioData.about.description}</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="about-secondary-text">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge with the developer community. I believe in writing clean, maintainable code 
              and creating user experiences that make a difference.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="status-indicator">
            <div className="status-dot"></div>
            <span>Available for opportunities</span>
          </motion.div>
        </motion.div>

        {/* Tech Stacks Section - Now with prominent logos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="tech-stacks-section"
        >
          <motion.h3 variants={itemVariants} className="section-title">Tech Stack</motion.h3>
          
          {skillCategories.map((category, index) => (
            <motion.div key={category.title} variants={itemVariants} className="tech-category">
              <h4 className="category-title">{category.title}</h4>
              <div className="tech-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={`${category.title}-${skillIndex}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`tech-card ${category.className}`}
                  >
                    <div className="tech-icon">
                      <i className={deviconClassMap[skill] || 'devicon-plain'} aria-hidden="true"></i>
                    </div>
                    <span className="tech-name">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Fun Stats */}
          <motion.div variants={itemVariants} className="stats-section">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">5+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">1+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;