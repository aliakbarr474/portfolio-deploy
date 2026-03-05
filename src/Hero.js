import './hero.css';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="hero-container">
      <div className="hero-glow"></div>
      <div className="hero-glow-secondary"></div>

      <div className="hero-grid">
        <div className="hero-text-content">
          <span className="hero-greeting">Hi, I'm Ali</span>
          
          <h1 className="hero-headline">
            Engineering <br />
            <span className="text-gradient">Robust Systems.</span>
          </h1>
          
          <p className="hero-subtitle">
            A full-stack developer specializing in modern web architectures, scalable databases, and intuitive user experiences that drive results.
          </p>
          
          <div className="hero-action-group">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View Selected Work
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glass-editor">
            <div className="editor-header">
              <div className="dot close"></div>
              <div className="dot minimize"></div>
              <div className="dot maximize"></div>
            </div>
            <div className="editor-body">
              <div className="code-line">
                <span className="keyword">const</span> <span className="variable">developer</span> <span className="operator">=</span> <span className="string">"Ali Akbar"</span>;
              </div>
              <div className="code-line">
                <span className="keyword">const</span> <span className="variable">coreStack</span> <span className="operator">=</span> [<span className="string">"React"</span>, <span className="string">"Node.js"</span>, <span className="string">"MySQL"</span>];
              </div>
              <div className="code-line">
                <span className="keyword">let</span> <span className="variable">currentFocus</span> <span className="operator">=</span> <span className="string">"Full-Stack Architecture"</span>;
              </div>
              <br />
              <div className="code-line">
                <span className="keyword">function</span> <span className="function">buildProject</span>() &#123;
              </div>
              <div className="code-line indented">
                <span className="keyword">return</span> <span className="variable">coreStack</span>.join(<span className="string">" + "</span>) <span className="operator">+</span> <span className="string">" = Scalable Solution"</span>;
              </div>
              <div className="code-line">&#125;</div>
            </div>
          </div>
          
          <div className="floating-badge badge-1">React.js</div>
          <div className="floating-badge badge-2">Express</div>
        </div>
      </div>
    </section>
  );
}