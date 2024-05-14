import React from "react";
import styles from "./Categories.module.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import NewsCard from "../../components/newsCard/NewsCard";
const Categories = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const apiKey = "13d62846-468d-4c8a-9a4f-11aed5a844af";
  // const apiKey = process.env.REACT_APP_API_KEY;

  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${state.category}&apiKey=${apiKey}`;

  const filterUrl = `https://newsapi.org/v2/top-headlines?country=${filter}&category=${state.category}&apiKey=${apiKey}`;

  const { state } = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    getNews(filterUrl);
    setFilter("");
  };

  const getNews = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      setNews(data.articles);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };
  useEffect(() => {
    getNews(url);
  }, [url]);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="ex: us, tr, jp, mx.."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <button type="submit">Filter Country</button>
        </form>
      </div>
      <div className={styles.right}>
        {loading && <Spinner />}
        {news.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
