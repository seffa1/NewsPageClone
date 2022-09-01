import React, { useState, useEffect } from "react";
import Summary from "./Summary";
import map from "../images/map.jpeg";
import axios from "axios";
import { Link } from "react-router-dom";

function newsApiParser(article) {
  // date formatting
  let date = new Date(article.publishedAt).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return { ...article, date: date };
}

function Topic(props) {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    if (!props.API_KEY) {
      console.log("NO API KEY DEFINED");
      return;
    }
    // GET request using axios inside useEffect React hook
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?apiKey=${props.API_KEY}&pageSize=1&category=${props.title}&country=us
        `
      )
      .then((response) => {
        setArticles(
          response.data.articles.map((article) => newsApiParser(article))
        );
        // console.log(response.data.articles);
      })

      .catch((error) => console.log(error));
  }, []);

  // console.log(articles);

  return (
    <section className="Topic">
      <div className="Topic__title-container">
        <h1 className="Topic__title">{props.title}</h1>
        <div className="Topic__link-container">
          <Link to={props.title.toLowerCase()} className="Topic__link">
            SEE ALL
          </Link>
          <i class="Topic__link__arrow fa-solid fa-arrow-down"></i>
        </div>
      </div>
      {articles[0] && (
        <section className="Topic__information">
          <Summary
            title={articles[0].title}
            summary={articles[0].description}
            link={articles[0].url}
          />
          <img className="Topic__img" src={articles[0].urlToImage} />
        </section>
      )}
    </section>
  );
}

export default Topic;
