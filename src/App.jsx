function App() {
  return (
    <>
      {/* Navbar */}
      <nav>
        <h2>Md Moazzam</h2>

        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <img
          src="/profile.jpg"
          alt="Md Moazzam"
          className="profile-photo"
        />

        <p className="availability">
          🟢 Open to opportunities
        </p>

        <h1>Hi, I'm Md Moazzam 👋</h1>

        <h2>
          B.Tech CSE Student | Aspiring Full Stack Developer
        </h2>

        <p>
          I build web applications and practice Data Structures &
          Algorithms in Java.
        </p>

        <button
          type="button"
          onClick={() => {
            document.getElementById("projects").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          View My Projects
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>

        <p>
          I'm Md Moazzam, a B.Tech Computer Science student passionate
          about software development, problem solving and building
          practical applications.
        </p>

        <p>
          Currently, I'm focusing on Data Structures & Algorithms in Java
          and Full Stack Web Development. I also work on Machine Learning
          projects and enjoy learning new technologies.
        </p>

        <div className="about-info">
          <div>
            <h3>🎓 Education</h3>
            <p>B.Tech in Computer Science & Engineering</p>
          </div>

          <div>
            <h3>💻 Goal</h3>
            <p>Full Stack Software Developer</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>Skills</h2>

        <div className="skill-list">
          <span>Java</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>Python</span>
          <span>SQL</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>DSA</span>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>

        <div className="project-list">

          {/* AgriSense */}
          <div className="project-card">
            <h3>🌱 AgriSense</h3>

            <p>
              Crop Recommendation & Disease Detection project using
              Machine Learning.
            </p>

            <p className="tech-stack">
              Python • Machine Learning • Flask
            </p>

            <div className="project-buttons">
              <a
                href="https://github.com/mdmoazzam7/AgriSense"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* DSA */}
          <div className="project-card">
            <h3>💻 DSA in Java</h3>

            <p>
              My Data Structures & Algorithms practice and
              problem-solving journey using Java.
            </p>

            <p className="tech-stack">
              Java • DSA • Git
            </p>

            <div className="project-buttons">
              <a
                href="https://github.com/mdmoazzam7/DSA"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Let's Connect</h2>

        <p>
          I'm always open to discussing projects, opportunities and
          new ideas.
        </p>

        <div className="contact-links">
          <a
            href="https://github.com/mdmoazzam7"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mdmoazzam04"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:mdmoazzam2004d@gmail.com">
            Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Md Moazzam. Built with React.</p>
      </footer>
    </>
  );
}

export default App;