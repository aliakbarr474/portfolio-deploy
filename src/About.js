import React from 'react';
import './about.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-grid">
        
        <div className="about-content">
          <span className="section-tag">Background</span>
          <h2 className="section-title">Bridging design and logic.</h2>
          
          <div className="about-text">
            <p>
              I am a Computer Science student at NUST Balochistan Campus with a deep focus on full-stack web development and software architecture. 
            </p>
            <p>
              I specialize in building end-to-end digital solutions—from crafting intuitive, high-fidelity user interfaces to designing robust database schemas and deploying scalable backends. I enjoy the challenge of turning complex business requirements into seamless, efficient applications.
            </p>
          </div>
        </div>

        <div className="about-skills">
          <h3 className="skills-title">Core Technologies</h3>
          <div className="skills-grid">
            <div className="skill-badge">React.js</div>
            <div className="skill-badge">Node.js</div>
            <div className="skill-badge">Express.js</div>
            <div className="skill-badge">MySQL</div>
            <div className="skill-badge">UI/UX Design</div>
            <div className="skill-badge">Microsoft Azure</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;