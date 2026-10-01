import { useEffect, useState } from "react";

const NAV = [
  { id: "about", label: "ABOUT" },
  { id: "education", label: "EDUCATION" },
  { id: "skills", label: "SKILLS" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
];

const SOCIAL = [
  { label: "GitHub", href: "https://github.com/mdmoazzam7" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mdmoazzam04" },
  { label: "Email", href: "mailto:mdmoazzam2004d@gmail.com" },
];

const SKILLS = [
  "JavaScript", "React", "Node.js", "Express.js", "MongoDB",
  "Java", "DSA", "HTML", "CSS", "SQL", "Git", "GitHub",
];

const PROJECTS = [
  {
    title: "AgriSense",
    text: "Crop recommendation and plant disease detection using machine learning, served through a Flask app.",
    tech: ["Python", "Machine Learning", "Flask"],
    href: "https://github.com/mdmoazzam7/AgriSense",
  },
  {
    title: "DSA in Java",
    text: "My data structures and algorithms practice in Java, organised by topic and tracked with Git.",
    tech: ["Java", "DSA", "Git"],
    href: "https://github.com/mdmoazzam7/DSA",
  },
];

function App() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    document.querySelectorAll("main section").forEach((s) => io.observe(s));

    const move = (e) => {
      document.documentElement.style.setProperty("--mx", e.clientX + "px");
      document.documentElement.style.setProperty("--my", e.clientY + "px");
    };
    window.addEventListener("mousemove", move);

    return () => {
      io.disconnect();
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div className="layout">
      <header className="side">
        <div>
          <img className="photo" src="/profile.jpg" alt="Md Moazzam" />
          <h1>Md Moazzam</h1>
          <h2 className="role">Aspiring Full Stack Developer</h2>
          <p className="tagline">
            B.Tech CSE student who builds web apps and solves problems with
            Java and DSA.
          </p>
          <nav aria-label="Sections">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={"#" + n.id}
                className={active === n.id ? "on" : ""}
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
        <ul className="social">
          {SOCIAL.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </header>

      <main>
        <section id="about">
          <h3>About</h3>
          <p>
            I'm a B.Tech Computer Science student who likes turning ideas into
            working software. I'm currently focused on{" "}
            <b>Data Structures and Algorithms in Java</b> and{" "}
            <b>full stack web development</b>.
          </p>
          <p>
            I've learned full stack development with the MERN stack: MongoDB,
            Express, React and Node.js. I enjoy building clean, responsive
            interfaces and connecting them to working backends. I'm looking
            for a software developer job where I can ship real features and
            learn from a strong team.
          </p>
        </section>

        <section id="education">
          <h3>Education</h3>
          <div className="item">
            <div className="when">7th semester</div>
            <div>
              <h4>B.Tech, Computer Science and Engineering</h4>
              <p className="sub">
                Maulana Abul Kalam Azad University of Technology, West Bengal
              </p>
              <p>
                Core coursework in data structures, algorithms, databases and
                object-oriented programming.
              </p>
            </div>
          </div>
        </section>

        <section id="skills">
          <h3>Skills</h3>
          <ul className="chips">
            {SKILLS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <section id="projects">
          <h3>Projects</h3>
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              className="item"
              href={p.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="when">GitHub</div>
              <div>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
                <ul className="chips">
                  {p.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </section>

        <section id="contact">
          <h3>Contact</h3>
          <p>
            I'm currently looking for a software developer role where I can
            build reliable, user-focused products. If you have an opening, or
            a project you'd like to discuss, reach me at{" "}
            <a className="link" href="mailto:mdmoazzam2004d@gmail.com">
              mdmoazzam2004d@gmail.com
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;