import React from "react";
import earth from "../images/earth.jpg";

function Hero(props) {
  return (
    <section className="Hero">
      <img src={earth} className="Hero__img" />

      {props.article && (
        <article className="Hero__article">
          <header className="Hero__article__heading">
            <div className="Topic-tag Topic-tag--red">TECHNOLOGY</div>
            <div className="Hero__article__heading__author">
              {props.article.author}
            </div>
            <div className="Hero__article__heading__dot">
              <i class="fa-solid fa-circle"></i>
            </div>
            <div className="Hero__article__heading__date">
              {props.article.date}
            </div>
          </header>
          <h2 className="Hero__article__title">{props.article.title}</h2>
          <footer className="Hero__article__footer">
            {props.article.description}
          </footer>
        </article>
      )}
    </section>
  );
}

export default Hero;
