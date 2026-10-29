import Image from "next/image";
import Link from "next/link";
import {
  education,
  personalInfo,
  projects,
  skillGroups,
  socialLinks,
} from "@/data/portfolio";

export default function Home() {
  return (
    <main>
      <section id="home" className="hero section">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">HELLO, I AM</p>

            <h1>{personalInfo.name}</h1>

            <p className="hero-designation">
              {personalInfo.designation}
            </p>

            <p className="hero-description">
              {personalInfo.introduction}
            </p>

            <div className="button-group">
              {/* Replace this link with /resume.pdf when it is ready. */}
              <a href="/resume.pdf" download className="button button-primary">
  Download Resume
</a>

              <a href="#projects" className="button button-outline">
                View Projects ↗
              </a>
            </div>

           
            <div className="social-links" aria-label="Social profiles">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.name} ↗
                </a>
              ))}
            </div>
          </div>

          <div className="portrait-frame">
            <Image
              src={personalInfo.photo}
              alt="Md Asraful Islam"
              width={425}
              height={543}
              priority
              sizes="(max-width: 760px) 85vw, 380px"
              className="portrait"
            />
          </div>
        </div>
      </section>

      <section id="about" className="section section-muted">
        <div className="container about-grid">
          <div>
            <p className="eyebrow">ABOUT ME</p>
            <h2>Learning, building, and growing.</h2>
          </div>

          <div className="about-text">
            {personalInfo.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <p className="eyebrow">MY SKILLS</p>
          <h2>Technologies I work with.</h2>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="panel" key={group.category}>
                <h3>{group.category}</h3>

                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <div className="skill-item" key={skill.name}>
                      {/* External skill icons use a standard image element. */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://skillicons.dev/icons?i=${skill.icon}`}
                        alt=""
                        width={40}
                        height={40}
                        loading="lazy"
                      />

                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section section-muted">
        <div className="container">
          <p className="eyebrow">EDUCATION</p>
          <h2>My academic journey.</h2>

          <div className="education-grid">
            {education.map((item) => (
              <article className="panel" key={item.qualification}>
                <span className="status-badge">{item.status}</span>

                <h3>{item.qualification}</h3>
                <p className="institution">{item.institution}</p>

                {item.period && (
                  <p className="education-period">{item.period}</p>
                )}

                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <p className="eyebrow">SELECTED PROJECTS</p>
          <h2>Some things I have built.</h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={`View ${project.name} details`}
                  className="project-image-link"
                >
                  <Image
                    src={project.image}
                    alt={`${project.name} homepage screenshot`}
                    width={1200}
                    height={650}
                    sizes="(max-width: 760px) 100vw, (max-width: 1050px) 50vw, 33vw"
                    className="project-image"
                  />
                </Link>

                <div className="project-content">
                  <span className="project-number">
                    0{index + 1}
                  </span>

                  <h3>{project.name}</h3>
                  <p>{project.description}</p>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-link"
                  >
                    View Details ↗
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section section-muted">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">CONTACT</p>
            <h2>Let&apos;s get in touch.</h2>
            <p>
              Feel free to contact me to discuss a project or connect.
            </p>
          </div>

          <div className="contact-links">
            <a href={`mailto:${personalInfo.email}`}>
              <span>Email</span>
              <strong>{personalInfo.email}</strong>
            </a>

            <a href={`tel:${personalInfo.phoneLink}`}>
              <span>Phone</span>
              <strong>{personalInfo.phone}</strong>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}