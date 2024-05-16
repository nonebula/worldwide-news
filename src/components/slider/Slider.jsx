import React, { useState, useEffect } from "react";
import styles from "./Slider.module.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Slider = ({ sliderNews }) => {
  const [current, setCurrent] = useState(0);
  const length = sliderNews ? sliderNews.length : 0;

  useEffect(() => {
    setCurrent(0);
  }, [sliderNews]);

  const nextSlide = () => {
    setCurrent((prevCurrent) =>
      prevCurrent === length - 1 ? 0 : prevCurrent + 1
    );
  };
  const prevSlide = () => {
    setCurrent((prevCurrent) =>
      prevCurrent === 0 ? length - 1 : prevCurrent - 1
    );
  };

  if (!Array.isArray(sliderNews) || sliderNews.length === 0) {
    return null;
  }

  return (
    <div className={styles.slider}>
      <FaArrowAltCircleLeft className={styles.left} onClick={prevSlide} />
      <FaArrowAltCircleRight className={styles.right} onClick={nextSlide} />
      {sliderNews.map((item, index) => (
        <div
          key={index}
          className={index === current ? styles.slideActive : styles.slide}
        >
          <img src={item.urlToImage} alt="img" className={styles.image} />
          <h3>{item.title}</h3>
          <div className={styles.link}>
            <a href={item.url} target="_blank" rel="noreferrer">
              Detail
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
