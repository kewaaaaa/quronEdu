import React from "react";
import { Link } from "react-router-dom";
import s from "./homeStyle.module.scss";

const HomePage = () => {
  return (
    <div className={s.home}>
      <div className={s.container}>
          <div className={s.home__quran}>
        <Link to="/quran" style={{ textDecoration: "none", color: "black" }}>
            <img src="/images/homeQuronPic.jpeg" alt="pic" />
            <h1>Quran</h1>
        </Link>
          </div>
          <div className={s.home__times}>
        <Link to="/times" style={{ textDecoration: "none", color: "black" }}>
            <img src="images/homeTimePic.jpg" alt="pic" />
            <h1>Prayer Times</h1>
        </Link>
          </div>
      </div>
    </div>
  );
};

export default HomePage;
