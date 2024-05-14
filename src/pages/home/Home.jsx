import React, { useContext, useEffect, useState } from "react";
import styles from "./Home.module.css";
import Slider from "../../components/slider/Slider";
import Spinner from "../../components/spinner/Spinner";
import axios from "axios";
import NewsCard from "../../components/newsCard/NewsCard";
import { ThemeContext } from "../../context/ThemeContext";
import ChangeTheme from "../../components/theme/ChangeTheme";
const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const theme = useContext(ThemeContext);

  const darkMode = theme.state.darkMode;

  const apiKey = "13d62846-468d-4c8a-9a4f-11aed5a844af";
  // const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  const getNews = async () => {
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
    getNews();
  }, []); // Add an empty argument here

  const sliderNews = news?.splice(0, 3);

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: darkMode ? "orange" : "white" }}
    >
      <ChangeTheme />
      <div className={styles.slider}>
        <Slider sliderNews={sliderNews} />{" "}
      </div>
      <div className={styles.news}>
        {" "}
        {loading && <Spinner />}
        {news?.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
