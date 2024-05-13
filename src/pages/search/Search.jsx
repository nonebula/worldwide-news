import React, { useEffect } from "react";
import styles from "./Search.module.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import NewsCard from "../../components/newsCard/NewsCard";
const Search = () => {
  const [news, setNews] = useState("");
  const { state } = useLocation();

  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://newsapi.org/v2/everything?q=${state}&apiKey=${apiKey}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNews(data.articles))
      .catch(error);
  }, [url]);

  return (
    <div className={styles.searchPage}>
      <h1>
        News About: <span>{state.toUpperCase()}</span>
      </h1>
      <div className={styles.searchNews}>
        {!news && (
          <h1>The searched word did not match any relevant articles</h1>
        )}

        {news && news.map((item, index) => <NewsCard key={index} {...item} />)}
      </div>
    </div>
  );
};

export default Search;
