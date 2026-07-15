import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [ darkMode, setDarkMode ] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>

      <nav>
        <div className="nav-content">
          <h1>Chengmin Jiang</h1>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </div>
        
      </nav>
      <header>
        <h1>Chengmin Jiang</h1>
        <p>Aspiring Software Engineer | Toronto, ON</p>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p> Hi, I'm Nick. I graduated from the University of Toronto in 2021 with a Computer Science Specialist degree and a major in Mathematics. </p>
          <p> After graduation, I worked for one year as a Customer Application Engineer. While the role helped me develop communication and client-facing skills,
             I realized I wanted to strengthen my core software development abilities. </p>
          <p> After a period of reflection, I decided to actively rebuild my technical foundation.
             I am currently enrolled in the Applied Computer Science program at Concordia University, where I'm focusing on modern software engineering practices and building real projects from scratch. </p>
          <p> My goal is to become a reliable Junior Software Engineer.
             I'm putting consistent effort into shipping clean, well-documented applications and gradually moving toward AI-related roles in the future. </p>
          <p> I'm based in Toronto and excited to contribute and grow in the local tech community. </p>
        </section>
        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">Python</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">React</div>
            <div className="skill-card">HTML & CSS</div>
            <div className="skill-card">Git & GitHub</div>
            <div className="skill-card">SQL Basics</div>
            <div className="skill-card">Vite + Vercel</div>
            <div className="skill-card">Problem Solving</div>
          </div>
        </section>
        <section id="projects">
          <h2>Featured Projects</h2>
          <div className="projects-grid">

            <div className="project-card">
              <h3>Personal Portfolio Website</h3>
              <p>A clean, responsive single-page portfolio built with React and Vite. Includes dark mode, smooth navigation, and mobile-first design.</p>
              <p className="tech">React • Vite • JavaScript • CSS • Vercel</p>
              <div className="project-links">
                <a href="https://github.com/Nick991225/portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://portfolio-kappa-dusky-85.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>

            <div className="project-card">
              <h3>Coming Soon</h3>
              <div className="project-links">
                <span>Coming Soon</span>
              </div>
            </div>

          </div>
        </section>
        <section>
          <h2>Education</h2>
          <div className="entry">
            <h3>University of Toronto</h3>
            <p className="details">
              Computer Science Specialist + Mathematics Major, Toronto, ON
              <span className="years">2017 – 2021</span>
            </p>
          </div>
          <div className="entry">
            <h3>Concordia University</h3>
            <p className="details">
              Applied Computer Science Program, Montreal, QC
              <span className="years">2026 – ???</span>
            </p>
          </div>
        </section>
        <section>
          <h2>Experience</h2>
          <div className="entry">
            <h3>Ivalua Inc</h3>
            <p className="details">
              Customer Application Engineer, Montreal, QC
              <span className="years">2021 – 2022</span>
            </p>
          </div>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>GitHub: <a href="https://github.com/Nick991225">Nick991225</a></p>
          <p>LinkedIn: </p>
          <p>Email: chengmin.jiang@alumni.utoronto.ca</p>
        </section>
          {/* Others */}
      </main>
    </div>
  )
}

export default App
