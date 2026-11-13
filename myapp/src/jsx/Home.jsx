import { useEffect, useState } from "react";
import { site, hero } from "./data";
import "../css/Home.css";

// Cycles through the roles with a typing effect
function useTyping(words) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let delay = deleting ? 45 : 90;
    if (!deleting && text === word) delay = 1600;
    if (deleting && text === "") delay = 300;

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return text;
}

function Home() {
  const typed = useTyping(hero.roles);

  return (
    <section className="home" id="home">
      <div className="home__glow home__glow--1" aria-hidden="true" />
      <div className="home__glow home__glow--2" aria-hidden="true" />

      <div className="container home__inner">
        <div className="home__text">
          <span className="home__hello">
            <span className="home__wave" aria-hidden="true">👋</span> {hero.greeting}
          </span>

          <h1 className="home__name">
            {site.name.split(" ").slice(0, -1).join(" ")}{" "}
            <em>{site.name.split(" ").slice(-1)}</em>
          </h1>

          <p className="home__role">
            <span className="home__typed">{typed}</span>
            <span className="home__caret" aria-hidden="true" />
          </p>

          <p className="home__tagline">{hero.tagline}</p>

          <div className="home__buttons">
            <a href="#projects" className="btn btn-primary">
              View my projects <span className="arrow">→</span>
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact me
            </a>
          </div>
        </div>

        {/* Code card — a little "about me" written as JavaScript */}
        <div className="home__card" aria-hidden="true">
          <div className="home__card-bar">
            <span />
            <span />
            <span />
            <em>ahmed.js</em>
          </div>
          <pre className="home__code">
            <code>
              <span className="k">const</span> <span className="v">developer</span> = {"{\n"}
              {"  "}name: <span className="s">"{site.name}"</span>,{"\n"}
              {"  "}degree: <span className="s">"BSc Computer Science"</span>,{"\n"}
              {"  "}software: [<span className="s">"React"</span>, <span className="s">"Java"</span>, <span className="s">"Spring"</span>],{"\n"}
              {"  "}hardware: [<span className="s">"CPU"</span>, <span className="s">"GPU"</span>, <span className="s">"RAM"</span>],{"\n"}
              {"  "}building: <span className="s">"Nexus"</span>,{"\n"}
              {"  "}openToWork: <span className="b">true</span>,{"\n"}
              {"};"}
              {"\n\n"}
              <span className="c">// let's make something great</span>
              {"\n"}
              <span className="v">developer</span>.<span className="f">sayHello</span>();
            </code>
          </pre>
        </div>
      </div>

      <a href="#about" className="home__scroll" aria-label="Scroll to About me">
        <span />
      </a>

      {/* Scrolling band of skills */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...hero.marquee, ...hero.marquee].map((word, i) => (
            <span key={i}>
              {word} <i>✦</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
