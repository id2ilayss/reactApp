import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <h1 className="footer-subscription-heading">
          Subscribe Now And Join Us !
        </h1>
        <p className="footer-subscription-text">
          Get the latest news from the clinique!
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <img
              alt="footer"
              src="http://medico-call.com/wp-content/uploads/2021/09/logo-final_white_270px_90px.png"
            />
          </div>
          <small className="website-rights">Medico Call © 2022</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="https://web.facebook.com/Medicocall?_rdc=1&_rdr"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
