import React from "react";
import styles from "./NewsCard.module.css";
// add random.png news image
const NewsCard = ({ title, url, urlToImage, content }) => {
  return (
    <div className={styles.card}>
      <img src={urlToImage ? urlToImage : random} alt="News Article" />
      <div className={styles.cardDetail}>
        <h3>{title}</h3>
        <p>{content}</p>
        <div className={styles.a}>
          <a href={url} rel="noreferrer" target="blank" className={styles.link}>
            Detail
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
