import { about, site } from "./data";
import Expertise from "./Expertise";
import "../css/About.css";

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <span className="eyebrow">02 — About me</span>
        <h2 className="heading reveal">
          {about.title.before} <em>{about.title.em}</em>
          {about.title.after}
        </h2>

        <div className="about">
          <div className="about__text reveal">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <div className="about__buttons">
              <a href={site.resumeUrl} className="btn btn-primary" download>
                Download CV <span className="arrow">↓</span>
              </a>
              <a href={site.github} className="btn btn-outline" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>

          <div className="about__side reveal">
            <div className="about__facts">
              {about.facts.map((f) => (
                <div className="about__fact" key={f.label}>
                  <span>{f.label}</span>
                  <strong>{f.value}</strong>
                </div>
              ))}
            </div>

            <div className="about__skills">
              <h3>Skills & tools</h3>
              <div className="about__chips">
                {about.skills.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Expertise />
      </div>
    </section>
  );
}

export default About;
