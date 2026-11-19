import { useState } from "react";

type IconName = "arrow" | "code" | "external" | "menu" | "spark" | "x";

const sitePath = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const paths: Record<IconName, React.ReactNode> = {
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  code: (
    <>
      <path d="m8 9-3 3 3 3" />
      <path d="m16 9 3 3-3 3" />
      <path d="m14 5-4 14" />
    </>
  ),
  external: (
    <>
      <path d="M15 4h5v5" />
      <path d="M10 14 20 4" />
      <path d="M20 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 17h16" />
    </>
  ),
  spark: (
    <path d="m12 3-1.2 4.1a5.4 5.4 0 0 1-3.7 3.7L3 12l4.1 1.2a5.4 5.4 0 0 1 3.7 3.7L12 21l1.2-4.1a5.4 5.4 0 0 1 3.7-3.7L21 12l-4.1-1.2a5.4 5.4 0 0 1-3.7-3.7L12 3Z" />
  ),
  x: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
};

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

type Project = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image?: string;
  href?: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Upcoming project",
    subtitle: "In progress",
    description: "A new project is in development. Check back soon for details.",
    tags: ["Coming soon"],
  },
  {
    number: "02",
    title: "Human Reference Atlas — Organ Visualizations",
    subtitle: "Research · Cyberinfrastructure for Network Science Center",
    description:
      "Updated and validated 4,000+ anatomical structures, adapted the pipeline to generate organ-specific multiscale trees, and built a Python utility for future Atlas releases. Presented the work at IU’s 2025 Summer Poster Symposium and contributed visual content to MIT Press’s Atlas of Macroscopes.",
    tags: ["Python", "Vega", "Jupyter"],
    image: sitePath("legacy/vega_mouth_tree_viz.svg"),
    href: sitePath("legacy/project-human-reference-atlas.html"),
  },
  {
    number: "03",
    title: "Environmental Awareness Bee Game",
    subtitle: "Educational game · C",
    description:
      "A grid-based educational game built in C, using arrays, structs, and file handling to teach environmental decision-making through gameplay.",
    tags: ["C", "Game logic", "Education"],
    image: sitePath("legacy/Bee_game_ss.png"),
    href: sitePath("legacy/project-bee-game.html"),
  },
  {
    number: "04",
    title: "Robot Rescue",
    subtitle: "AI literacy · Educational design",
    description:
      "An educational board game prototype introducing AI literacy and iterative learning to students ages 10–14 through tactile, collaborative play.",
    tags: ["Design", "Robotics", "Teaching"],
    image: sitePath("legacy/robot_rescue_photo.png"),
    href: sitePath("legacy/project-robot-rescue.html"),
  },
  {
    number: "05",
    title: "FTU & VCCF Connection Visualization",
    subtitle: "Scientific visualization · MIT Press",
    description:
      "A scientific visualization showing connections between functional tissue units and the vascular common coordinate framework across anatomical scales.",
    tags: ["Python", "Data viz", "Research"],
    image: sitePath("legacy/large_intestine_vasculature_ftus_vega.svg"),
    href: sitePath("legacy/project-macroscopes.html"),
  },
];

const experience = [
  {
    date: "Jul 2024 — Present",
    role: "Undergraduate Research Assistant",
    org: "Cyberinfrastructure for Network Science Center · Indiana University",
    copy: "Updated and validated 4,000+ anatomical structures, developed organ-specific multiscale visualization pipelines and automation utilities, and presented Atlas work at IU’s 2025 Summer Poster Symposium.",
  },
  {
    date: "2024 — Present",
    role: "VIP Undergraduate Research Assistant",
    org: "Laboratory for Computational Epidemiology and Public Health · Indiana University",
    copy: "Applying bioengineering and quantitative analysis to support infectious disease and mosquito forecasting research.",
  },
  {
    date: "Nov 2025 — Present",
    role: "Teaching Assistant",
    org: "Innovation & Design · Indiana University",
    copy: "Grade assignments, mentor a class of 33, and guide students through engineering and design fundamentals during class and office hours.",
  },
  {
    date: "Present",
    role: "ISE Peer Mentor",
    org: "Intelligent Systems Engineering · Indiana University",
    copy: "Support incoming engineering students through E101 instruction, tutoring, workshops, and mentoring events.",
  },
  {
    date: "Apr 2024 — May 2025",
    role: "Front Cashier & Server",
    org: "Fazoli’s · Bloomington, IN",
    copy: "Strengthened communication, adaptability, and customer service in a fast-moving team environment.",
  },
];

const skills = [
  { label: "Languages", items: ["Python", "C", "R"] },
  { label: "AI & development", items: ["Codex", "Git / GitHub", "Linux"] },
  { label: "Libraries & visualization", items: ["Pandas", "NetworkX", "NumPy", "Matplotlib", "Vega", "Jupyter", "Gephi"] },
  { label: "Design & creative", items: ["Photoshop", "Illustrator", "Premiere Pro", "Lightroom", "InDesign", "Fusion 360", "PrusaSlicer"] },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      className="site-shell"
      onScroll={(event) => setScrolled(event.currentTarget.scrollTop > 20)}
    >
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Zeynep S. Amac, home">
          <span>ZA</span>
          <strong>Zeynep S. Amac</strong>
        </a>
        <nav className={menuOpen ? "is-open" : ""} aria-label="Main navigation">
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#work" onClick={closeMenu}>
            Work
          </a>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
          <a href="#involvement" onClick={closeMenu}>
            Involvement
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <Icon name={menuOpen ? "x" : "menu"} />
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" />
          <div className="hero-copy">
            <div className="eyebrow"><span /> Portfolio · Bloomington, Indiana</div>
            <h1>Zeynep S. Amac</h1>
            <p>Intelligent Systems Engineering student at Indiana University, building visualization pipelines for the Human Reference Atlas.</p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                Explore my work <Icon name="arrow" size={17} />
              </a>
              <a className="button text-button" href={sitePath("legacy/Zeynep_S_Amac_CV.pdf")} target="_blank" rel="noreferrer">
                View resume (PDF) <Icon name="external" size={16} />
              </a>
            </div>
          </div>
          <div className="hero-foot">
            <span>Based in Bloomington, Indiana</span>
            <span className="scroll-label">
              Scroll to explore <i />
            </span>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading">
            <div>
              <div className="kicker">01 / Work</div>
              <h2>Selected work</h2>
            </div>
            <p>
              Research, education, and visualization projects designed to make technical ideas
              easier to understand.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-visual">
                  <span className="project-number">{project.number}</span>
                  {project.image && project.href ? (
                    <a className="project-image-link" href={project.href} aria-label={`Read more about ${project.title}`}>
                      <img src={project.image} alt={project.title} />
                    </a>
                  ) : (
                    <div className="project-placeholder"><span>Upcoming project</span></div>
                  )}
                  {project.href && <a className="project-arrow" href={project.href} aria-label={`Read more about ${project.title}`}><Icon name="external" size={18} /></a>}
                </div>
                <div className="project-content">
                  <p>{project.subtitle}</p>
                  <h3>{project.href ? <a href={project.href}>{project.title}</a> : project.title}</h3>
                  <div className="project-description">{project.description}</div>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-heading">
            <div>
              <div className="kicker">02 / Experience</div>
              <h2>
                Learning by <em>doing.</em>
              </h2>
            </div>
            <p>
              From research labs to classrooms, I bring analytical thinking, curiosity, and care to
              every role.
            </p>
          </div>
          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item" key={item.role}>
                <div className="timeline-index">0{index + 1}</div>
                <time>{item.date}</time>
                <div>
                  <h3>{item.role}</h3>
                  <h4>{item.org}</h4>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section involvement-section">
          <div className="section-heading compact">
            <div>
              <div className="kicker">03 / Community</div>
              <h2>Involvement</h2>
            </div>
          </div>
          <div className="involvement-grid">
            <article>
              <span>Leadership</span>
              <h3>Director of Marketing & Communications</h3>
              <p>ColorStack at IU</p>
              <small>
                Managing chapter branding, social media, promotional content, and communications for an inclusive computing community.
              </small>
            </article>
            <article>
              <span>Community</span>
              <h3>Member</h3>
              <p>Turkish Student Association at IU</p>
              <small>
                Supporting cultural events and a welcoming community; the association organizes annual events for 300+ attendees.
              </small>
            </article>
            <article>
              <span>Recognition</span>
              <h3>Hackathon Participant</h3>
              <p>HRA &amp; Whole Person Physiome Hackathon · Aug 2026</p>
              <small>
                Collaborated across institutions to advance AI-ready biomedical data, visualization methods, and computational tools integrating anatomical and physiological data.
              </small>
            </article>
            <article>
              <span>Conference</span>
              <h3>Grace Hopper Celebration</h3>
              <p>Chicago, IL · Nov 2025</p>
              <small>Selected as one of 40 students from more than 200 applicants.</small>
            </article>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-panel">
            <div className="about-copy">
              <div className="kicker light">04 / About me</div>
              <h2>About me</h2>
              <img className="about-photo" src={sitePath("legacy/assets/portrait.jpg")} alt="Portrait of Zeynep S. Amac" />
              <p className="about-bio">
                I’m an Intelligent Systems Engineering student at Indiana University, graduating in May 2029 with a bioengineering concentration. I’m a Hutton Honors Scholar, Provost Scholar, and Groups Scholar. My interests bring biology, data visualization, and design together.
              </p>
              <a className="about-ethics-link" href={sitePath("legacy/engineering-ethics.html")}>Read my engineering ethics page <Icon name="external" size={16} /></a>
            </div>
            <div className="skills-card about-skills">
              <div className="skills-header">
                <Icon name="spark" size={18} />
                <span>Technical toolkit</span>
              </div>
              {skills.map((group, index) => (
                <div className="skill-row" key={group.label}>
                  <span>0{index + 1}</span>
                  <strong>{group.label}</strong>
                  <div>
                    {group.items.map((item) => (
                      <i key={item}>{item}</i>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-intro">
            <div className="kicker light">05 / Get in touch</div>
            <h2>
              Let’s build something <em>meaningful.</em>
            </h2>
            <p>
              I’m open to research collaborations, internships, and interesting visualization problems.
            </p>
          </div>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/zeynep-amac/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/zeynepamac01" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#home">
          <span>ZA</span>
          <strong>Zeynep S. Amac</strong>
        </a>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}
