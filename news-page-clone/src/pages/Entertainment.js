import React from "react";
import Articles from "../components/Articles";
import Hero from "../components/Hero";
import { useState, useEffect } from "react";
import axios from "axios";

function newsApiParser(article) {
  // date formatting
  let date = new Date(article.publishedAt).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return { ...article, date: date };
}

function Entertainment(props) {
  const API_KEY = props.API_KEY;

  const [articles, setArticles] = useState([]);

  // Get top 4 stories
  useEffect(() => {
    if (!API_KEY) {
      console.log("NO API KEY DEFINED");
      return;
    }
    // GET request using axios inside useEffect React hook
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?apiKey=${props.API_KEY}&pageSize=20&category=entertainment&country=us`
      )
      .then((response) => {
        setArticles(
          response.data.articles.map((article) => newsApiParser(article))
        );
        // console.log(response.data.articles);
      })

      .catch((error) => console.log(error));
  }, []);

  // Render page
  return (
    <section>
      <h1 className="Articles__title">Entertainment</h1>
      <Hero article={articles[0]} />
      <Articles articles={articles} />
    </section>
  );
}

export default Entertainment;
