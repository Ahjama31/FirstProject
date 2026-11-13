import { experience } from "./data";
import "../css/Experience.css";

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <span className="eyebrow">03 — Experience</span>
        <h2 className="heading reveal">
          Where I've been <em>learning</em> & working.
        </h2>

        <ol className="timeline">
          {experience.map((item) => (
            <li className="timeline__item reveal" key={item.title}>
              <span className="timeline__dot" aria-hidden="true" />
              <div className="timeline__period">
                <span>{item.period}</span>
                <span className={`timeline__badge timeline__badge--${item.type}`}>
                  {item.type === "education" ? "Education" : "Work"}
                </span>
              </div>
              <div className="timeline__card">
                <h3>{item.title}</h3>
                <span className="timeline__place">{item.place}</span>
                <ul>
                  {item.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
