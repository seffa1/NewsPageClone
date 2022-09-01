import React from "react";
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import Topic from "../components/Topic";
import Subscribe from "../components/Subscribe";
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

function Home(props) {
  // https://newsapi.org/docs/endpoints/top-headlines
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
        `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}&pageSize=4`
      )
      .then((response) => {
        setArticles(
          response.data.articles.map((article) => newsApiParser(article))
        );
        // console.log(response.data.articles);
      })

      .catch((error) => console.log(error));
  }, []);

  // Render Page
  return (
    <>
      <Hero article={articles[0]} />
      <div className="container">
        <Popular
          article1={articles[1]}
          article2={articles[2]}
          article3={articles[3]}
        />
        <Topic API_KEY={API_KEY} title={"Technology"} link={"1"} />
        <Topic API_KEY={API_KEY} title={"Science"} link={"1"} />
        <Topic API_KEY={API_KEY} title={"Health"} link={"1"} />
      </div>
      <Subscribe />
    </>
  );
}

export default Home;
