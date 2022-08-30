import "./App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Popular from "./components/Popular";
import Topic from "./components/Topic";
import { useState, useEffect } from "react";
import axios from "axios";

// TODO: Populate data with API:
// https://jasonwatmore.com/post/2020/07/17/react-axios-http-get-request-examples

function newsApiParser(article) {
  // date formatting
  let date = new Date(article.publishedAt).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return { ...article, date: date };
}

function App() {
  const API_KEY = "";
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
      .then((response) =>
        setArticles(
          response.data.articles.map((article) => newsApiParser(article))
        )
      )
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero article={articles[0]} />
      <div className="container">
        <Popular />
        <Topic title={"Investigations"} link={"1"} />
        <Topic title={"Geopolitics & Finance"} link={"1"} />
        <Topic title={"Health"} link={"1"} />
      </div>
    </div>
  );
}

export default App;
