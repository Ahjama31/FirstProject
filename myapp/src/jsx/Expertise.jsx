import { expertise } from "./data";
import "../css/Expertise.css";

// Simple line icons for each area
const icons = {
  Hardware: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="6" width="12" height="12" rx="1.5" />
      <rect x="9.5" y="9.5" width="5" height="5" />
      <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
    </svg>
  ),
  Software: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
    </svg>
  ),
  Infrastructure: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  ),
  Theory: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 8l10-5 10 5-10 5z" />
      <path d="M6 10v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 8v6" />
    </svg>
  ),
};

function Expertise() {
  return (
    <div className="expertise">
      <div className="expertise__head reveal">
        <h3>What I specialise in</h3>
        <p>
          Computer Science is a deep field. Here's where I go deep — from the silicon inside the
          case to the code running on it.
        </p>
      </div>

      <div className="expertise__grid">
        {expertise.map((area) => (
          <article
            key={area.title}
            className={`area reveal ${area.featured ? "area--featured" : ""}`}
          >
            <div className="area__top">
              <span className="area__icon" aria-hidden="true">
                {icons[area.tag]}
              </span>
              <span className="area__tag">{area.tag}</span>
            </div>
            <h4 className="area__title">{area.title}</h4>
            <p className="area__intro">{area.intro}</p>
            <ul className="area__points">
              {area.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Expertise;
