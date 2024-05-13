import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../navbar/Navbar";
import styles from "./Header.module.css";

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    navigate("/search", { state: search });
    setSearch("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>Worldwide News</h1>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.search}
            type="text"
            placeholder="Search the news"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
