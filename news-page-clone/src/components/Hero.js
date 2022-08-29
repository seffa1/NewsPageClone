import React from "react";
import earth from "../images/earth.jpg";

function Hero() {
  return (
    <section className="Hero">
      <img src={earth} className="Hero__img" />

      <article className="Hero__article">
        <header className="Hero__article__heading">
          <div className="Topic-tag--red">TECHNOLOGY</div>
          <div className="Hero__article__heading__author">Sam Cooper</div>
          <div className="Hero__article__heading__dot">
            <i class="fa-solid fa-circle"></i>
          </div>
          <div className="Hero__article__heading__date">September 23, 2021</div>
        </header>
        <h2 className="Hero__article__title">
          Canada's cyber agency dismantling fake government coronavirus pandemic
          response websites
        </h2>
        <footer className="Hero__article__footer">
          Canadian intelligence agencies are fighting against attempts to
          exploit the coronavirus pandemic.
        </footer>
      </article>
    </section>
  );
}

export default Hero;
