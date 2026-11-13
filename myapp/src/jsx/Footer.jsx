import { site } from "./data";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__big">
          {site.firstName}
          <em>.</em>
        </p>
        <div className="footer__row">
          <span>
            © {new Date().getFullYear()} {site.name}. Built with React.
          </span>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
