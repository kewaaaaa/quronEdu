import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import s from "./homeStyle.module.scss";

const HomePage = () => {

  const lang = useSelector(state => state.lang)
  return (
    <div className={s.home}>
      <div className={s.container}>
          <div className={s.home__quran}>
        <Link to="/quran" style={{ textDecoration: "none", color: "black" }}>
            <img src="/images/homeQuronPic.jpeg" alt="pic" />
              {lang === "EN" ? <h1>Quran</h1> : (lang === "RU" ? <h1>Куран</h1> : (lang === "UZ" ? <h1>Qur`on</h1> : <></>))}
        </Link>
          </div>
          <div className={s.home__times}>
        <Link to="/times" style={{ textDecoration: "none", color: "black" }}>
            <img src="images/homeTimePic.jpg" alt="pic" />
            {lang === "EN" ? <h1>Prayer Times</h1> : (lang === "RU" ? <h1>Время Намаза</h1> : (lang === "UZ" ? <h1>Namoz Vaqtlari</h1> : <></>))}
        </Link>
          </div>
      </div>
    </div>
  );
};

export default HomePage;
