import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const useNews = (initialCategory = "", initialCountry = "us") => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [country, setCountry] = useState(initialCountry);

  const apiKey = process.env.REACT_APP_API_KEY;
  
  const theme = useContext(ThemeContext);
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

  const filterUrl = `https://newsapi.org/v2/top-headlines?country=${filter}&category=${category}&apiKey=${apiKey}`;

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
  }, [url, theme.state.darkMode]);
  return {};

  useEffect(() => {
    setCategory(initialCategory);
    setCountry(initialCountry);
  }, [initialCategory, initialCountry]);
  return {
    news,
    loading,
    filter,
    theme,
    category,
    country,
    setFilter,
    setCountry,
    setCategory,
    handleSubmit,
  };
};

export default useNews;
