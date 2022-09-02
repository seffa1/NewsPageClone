import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="Footer">
      <section className="Footer__statement">
        <Link to="/" className="Navbar__ul__li">
          <i class="fa-solid fa-newspaper Footer__statement__logo"></i>
        </Link>
        <p className="Footer__statement__p">
          The Bureau produces innovative and essential investigative journalism,
          opinions and analysis. Our mission: Truth above all. The world's best
          reporting.
        </p>

        <p className="Footer__statement__phone">+1-613-555-0107</p>
        <p className="Footer__statement__email">info@thebureau.org</p>
        <p className="Footer__statement__tm">
          2022 The Bureau - All Rights Reserved
        </p>
      </section>
      <section className="Footer__links">
        <div className="Footer__links__categories">
          <h4>Categories</h4>
          <Link className="Footer__links__links" to="/technology">
            Technology
          </Link>
          <Link className="Footer__links__links" to="/science">
            Science
          </Link>
          <Link className="Footer__links__links" to="/health">
            Health
          </Link>
          <Link className="Footer__links__links" to="/business">
            Business
          </Link>
          <Link className="Footer__links__links" to="/entertainment">
            Entertainment
          </Link>
          <Link className="Footer__links__links" to="/sports">
            Sports
          </Link>
        </div>
        <div className="Footer__links__about">
          <h4>About</h4>
          <Link className="Footer__links__links" to="/">
            About The Bureau
          </Link>
          <Link className="Footer__links__links" to="/">
            Contact
          </Link>
        </div>
        <div className="Footer__links__follow">
          <h4>Follow Us</h4>
          <Link className="Footer__links__links" to="/">
            Twitter
          </Link>
          <Link className="Footer__links__links" to="/">
            Facebook
          </Link>
          <Link className="Footer__links__links" to="/">
            Instagram
          </Link>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
