import React from "react";
import Summary from "./Summary";

function Articles(props) {
  // Takes in an array of article objets,
  // and displays them all on the page, as many as is given
  const summaries = props.articles.map((article) => {
    return (
      <Summary
        title={article.title}
        summary={article.description}
        link={article.url}
      />
    );
  });

  return (
    <div className="container">
      <section className="Articles">{summaries}</section>
    </div>
  );
}

export default Articles;
