import { useState } from "react";
import { site } from "./data";
import "../css/Contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // No server needed: opens the visitor's email app with the message filled in.
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Hello from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact">
        <div className="contact__intro reveal">
          <span className="eyebrow">05 — Contact me</span>
          <h2 className="heading">
            Let's build something <em>together</em>.
          </h2>
          <p className="contact__lead">
            Hiring for a developer or IT role, need help with a project, or want a PC built or upgraded? Get in touch.
          </p>

          <a href={`mailto:${site.email}`} className="contact__email">
            {site.email} <span className="arrow">→</span>
          </a>

          {site.phone && (
            <p className="contact__phone">
              or call <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            </p>
          )}

          <div className="contact__socials">
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <form className="contact__form reveal" onSubmit={handleSubmit}>
          <div className="field">
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={update}
              placeholder=" "
              required
            />
            <label htmlFor="name">Your name</label>
          </div>

          <div className="field">
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={update}
              placeholder=" "
              required
            />
            <label htmlFor="email">Your email</label>
          </div>

          <div className="field">
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={update}
              placeholder=" "
              required
            />
            <label htmlFor="message">Your message</label>
          </div>

          <button type="submit" className="btn btn-primary contact__submit">
            Send message <span className="arrow">→</span>
          </button>

          {sent && <p className="contact__sent">Thanks! Your email app should open now.</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
