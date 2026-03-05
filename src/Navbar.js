import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (e, targetId) => {
    e.preventDefault(); 
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="navbar-wrapper">
      <nav className={`navbar-pill ${isScrolled ? 'scrolled' : ''}`}>
        <a href="/" onClick={(e) => scrollToSection(e, 'top')} className="navbar-logo">
          Ali<span className="logo-dot">.</span>
        </a>
        
        <div className="navbar-links desktop-only">
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="nav-link">About</a>
          <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="nav-link">Work</a>
          <a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')} className="nav-link">Testimonials</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="nav-link">Contact</a>
        </div>
        
        <div className="navbar-right desktop-only">
          <a 
            href="/Ali_Akbar_Resume.pdf"
            download="Ali_Akbar_Resume.pdf" 
            className="navbar-cta"
          >
            Resume
          </a>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="mobile-nav-link">About</a>
        <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="mobile-nav-link">Work</a>
        <a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')} className="mobile-nav-link">Testimonials</a>
        <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="mobile-nav-link">Contact</a>
        
        <a 
          href="/Ali_Akbar_Resume.pdf"
          download="Ali_Akbar_Resume.pdf" 
          className="mobile-cta"
          style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;