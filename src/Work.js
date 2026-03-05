import { useState } from 'react';
import './work.css';
import erp from './images/erp.png'
import erpVideo from './images/videos/erp-vid.mp4'
import balochiVideo from './images/videos/balochiglam-vid.mp4'
import sarteVideo from './images/videos/sarte-vid.mp4'
import examVideo from './images/videos/exam-vid.mp4'


const Work = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const projects = [
    {
      id: 1,
      title: "ERP System",
      status: "Client Project",
      description: "Engineering a full-stack contract and financial management system. Solving complex data relationships for clients, vendors, and labor tracking while implementing secure PDF invoice generation.",
      techStack: ["React", "Node.js", "Express", "MySQL", "REST APIs"],
      actionText: "View Demo",
      videoUrl: erpVideo,
      image: erp
    },
    {
      id: 2,
      title: "Balochi Apparel E-Commerce",
      status: "In Progress",
      description: "Architecting a headless e-commerce platform. Utilizing Sanity.io to give the client full content control while ensuring a blazing-fast, SEO-optimized frontend tailored for custom orders.",
      techStack: ["React.js", "Sanity CMS", "Express.js", "Node.js", "MySQL"],
      actionText: "View Demo",
      videoUrl: balochiVideo,
      visualType: "blueprint"
    },
    {
      id: 3,
      title: "Construction Portfolio Website",
      status: "Client Project",
      description: "Designing a portfolio website for a construction company with aesthetic UI/UX, presenting it as a reliable and professional business front.",
      techStack: ["React", "Express", "REST APIs"],
      actionText: "View Demo",
      videoUrl: sarteVideo,
      visualType: "terminal"
    },
    {
      id: 4,
      title: "Exam Management System",
      status: "System Design",
      description: "Developing a full-stack exam management system where an institute can add and delete students, while also assigning them seats in an examination hall.",
      techStack: ["React", "Express", "REST APIs", "MySQL"],
      actionText: "View Demo",
      videoUrl: examVideo,
      visualType: "terminal"
    }
  ];

  return (
    <section id="projects" className="work-section">
      <div className="work-container">
        <div className="work-header">
          <span className="work-tag">Engineering Spotlight</span>
          <h2 className="work-title">Active Builds & Architecture.</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              
              <div className={`project-visual-abstract ${project.visualType}`}>
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={`${project.title} preview`} 
                    className="project-image" 
                  />
                )}
                <div className="visual-overlay">
                  <span className="status-badge">{project.status}</span>
                </div>
              </div>
              
              <div className="project-info">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tech">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-pill">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <button 
                    className="project-link primary-link"
                    onClick={() => setActiveVideo(project.videoUrl)}
                  >
                    {project.actionText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div className="video-modal-overlay" onClick={() => setActiveVideo(null)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-video-btn" onClick={() => setActiveVideo(null)}>
              &times;
            </button>
            <video controls autoPlay className="project-video-player">
              <source src={activeVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;