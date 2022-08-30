import React from "react";

// Displays a summary of a news article including title, short summary, topic-tag (optional), image (optional), and link to the article
function Summary(props) {
  return (
    <article className="Summary">
      <section className="Summary__words">
        {props.tag && (
          <span className="Summary__tag Topic-tag Topic-tag--blue">
            {props.tag}
          </span>
        )}
        <h3 className="Summary__title">{props.title}</h3>
        <p className="Summary__summary">{props.summary}</p>
        {props.link && (
          <div className="Summary__link-container">
            <a href={props.link} className="link" target="_blank">
              READ ARTICLE
            </a>
            <i class="link__arrow fa-solid fa-arrow-down"></i>
          </div>
        )}
      </section>
    </article>
  );
}

export default Summary;
