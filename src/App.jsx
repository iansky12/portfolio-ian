import React, { useState } from 'react';
import './App.css';
import ScrollingBackground from './components/ScrollingBackground';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('your.email@example.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'about':
        return (
          <div className="content-section">
            <div className="card-header">
              <h2 className="card-title">About</h2>
              <button className="close-button" onClick={() => setCurrentView('home')}>×</button>
            </div>
            <div className="about-content">
              <p className="about-intro">Hello, I'm Ian, a developer and designer who...</p>
              <ul className="about-list">
                <li>Enjoys designing things that look good to me</li>
                <li>Designs websites and apps</li>
                <li>Learning about various creative processes</li>
                <li>Studies Computer Science and Applied Mathematics</li>
                <li>Studying Japanese (N3)</li>
              </ul>

              <div className="education-section">
                <h3>EDUCATION</h3>
                <div className="education-block">
                  <p className="education-title">Bachelor of Science in Computer Science and Applied Mathematics</p>
                  <p className="education-school">University of California, Merced</p>
                </div>
              </div>

              <div className="interests-section">
                <h3>OTHER INTERESTS</h3>
                <ul className="interests-list">
                  <li>Making Videos for my friends</li>
                  <li>DaVinci Studio</li>
                  <li>Clip Studio Paint</li>
                  <li>Touch Studio (SOON)</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'social':
        return (
          <div className="content-section">
            <div className="card-header">
              <h2 className="card-title">Connect</h2>
              <button className="close-button" onClick={() => setCurrentView('home')}>×</button>
            </div>
            <div className="email-container">
              <span className="email-text">You can get to me at: ianmbarbero@gmail.com</span>
              <button className="copy-button" onClick={copyEmail}>
                <i className="fas fa-copy"></i>
              </button>
              {emailCopied && <span style={{ color: 'var(--accent)' }}>Copied!</span>}
            </div>
            <div className="social-links">
              <a href="www.linkedin.com/in/ianmbarbero" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/iansky12" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="content-section">
            <div className="card-header">
              <h2 className="card-title">Projects</h2>
              <button className="close-button" onClick={() => setCurrentView('home')}>×</button>
            </div>
            <div className="project-card">
              <h3>SASE Front End Intern</h3>
              <p className = "project-description">Working under webmaster to maintain and develop SASE homepage using AWS Amplify</p>
            </div>
            <div className="project-card">
              <h3>UI/UX Certificate - Google on Coursera</h3>
              <p className = "project-description">Completed Google's UI/UX Design Professional Certificate</p>
            </div>
            <div className="project-card">
              <h3>This Website</h3>
              <p className = "project-description">A responsive portfolio website built with React</p>
            </div>
            <div className="project-card">
              <h3>Order of Draw</h3>
              <p className = "project-description">3rd Place Winner of SASE Hackathon. Web app that aids training Phlebotomist learn order of drawing blood.</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="dictionary-card">
            <div className="card-header">
              <span className="logo">Home</span>
            </div>
            <div className="graphic-section">
              <div className="name-section">
                <span className="name">Hi! I'm</span>
                <span className="name-highlight">Ian</span>
              </div>
              <div className="declaration">ianski</div>
              <div className="pronunciation">
                /ee-uhn-skee/  /イエンスキ/
              </div>
            </div>
            <div className="nav-icons">
              <div className="nav-icon" onClick={() => setCurrentView('about')}>
                <i className="fas fa-user"></i>
                <span className="nav-icon-label">About</span>
              </div>
              <div className="nav-icon" onClick={() => setCurrentView('social')}>
                <i className="fas fa-share-alt"></i>
                <span className="nav-icon-label">Contact</span>
              </div>
              <div className="nav-icon" onClick={() => setCurrentView('projects')}>
                <i className="fas fa-code"></i>
                <span className="nav-icon-label">Work</span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="App">
      <ScrollingBackground />
      <main>
        {renderContent()}
      </main>
    </div>
  );
}

export default App; 