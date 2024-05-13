import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <ul className={styles.topUl}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <p>Categories</p>
        <ul className={styles.bottomUl}>
          <li
            onClick={() =>
              navigate("/categories", { state: { category: "business" } })
            }
          >
            Business
          </li>
          <li
            onClick={() =>
              navigate("/categories", { state: { category: "entertainment" } })
            }
          >
            Entertainment
          </li>
          <li
            onClick={() =>
              navigate("/categories", { state: { category: "general" } })
            }
          >
            General
          </li>
          <li
            onClick={() =>
              navigate("/categories", { state: { category: "health" } })
            }
          >
            Health
          </li>
          <li
            onClick={() =>
              navigate("/categories", { state: { category: "science" } })
            }
          >
            Science
          </li>
          <li
            onClick={() =>
              navigate("/categories", { state: { category: "sports" } })
            }
          >
            Sports
          </li>
          <li
            onClick={() =>
              navigate("/categories", { state: { category: "technology" } })
            }
          >
            Technology
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Navbar;
