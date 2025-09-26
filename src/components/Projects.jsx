import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, X } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="projects-header"
        >
          <h2 className="projects-title">Featured Projects</h2>
          <p className="about-description">
            Here are some of my recent projects that showcase my skills and passion for creating great user experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="projects-grid"
        >
          {portfolioData.projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                <div className="project-image-placeholder">Project Image</div>
                <div className={`project-status ${project.status === 'Completed' ? 'completed' : 'progress'}`}>
                  {project.status}
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="tech-tag">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                <div className="project-links">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="project-link github"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="modal-overlay"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header">
                  <h3 className="modal-title">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="modal-close"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="modal-body">
                  <div className="modal-image">
                    <div className="modal-image-placeholder">Project Screenshot</div>
                  </div>

                  <p className="modal-description">{selectedProject.description}</p>

                  <div className="features-section">
                    <h4>Key Features</h4>
                    <ul className="features-list">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>
                          <div className="feature-dot"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="tech-section">
                    <h4>Technologies Used</h4>
                    <div className="modal-tech">
                      {selectedProject.tech.map((tech) => (
                        <span key={tech} className="modal-tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="modal-actions">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <Github size={20} />
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;