import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Chengmin Jiang</h1>
        <p>Aspiring Software Engineer | Toronto, ON</p>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>Hi, I'm Nick. UofT CS Specialist & Math Major '21. Currently in Concordia's Applied CS program(2026-2028). Building skills and projects to get back into software engineering roles.</p>
          {/* Comments Section */}
        </section>
        <section>
        <h2>Skills</h2>
        <ul>
          <li>Python</li>
          <li>JavaScript / React basics</li>
          <li>Git & GitHub</li>
          <li>SQL / Databases</li>
        </ul>
      </section>
      <section>
        <h2>Projects</h2>
        <p>Coming soon — watch this space!</p>
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
      <section>
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
