import { projects } from "./data";
import "../css/Projects.css";

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <span className="eyebrow">04 — Projects</span>
        <h2 className="heading reveal">
          Things I've <em>made</em>.
        </h2>

        <div className="projects">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`project reveal ${p.featured ? "project--featured" : ""}`}
            >
              <div className="project__top">
                <span className="project__num">0{i + 1}</span>
                <span className="project__type">{p.type}</span>
              </div>

              <h3 className="project__title">{p.title}</h3>
              <p className="project__desc">{p.description}</p>

              {p.highlights && (
                <ul className="project__highlights">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}

              <div className="project__tags">
                {p.tags.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="project__links">
                {p.code && (
                  <a href={p.code} target="_blank" rel="noreferrer">
                    View<span className="arrow">↗</span>
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer">
                    Live site <span className="arrow">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
