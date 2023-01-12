import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import s from "./singleStyle.module.scss";
import Laoding from "../../components/laoding/Laoding";
import { useSelector } from "react-redux";

const SinglePage = () => {
  const [laoding, setLaoding] = useState(true);
  const [surah, setSurah] = useState([{ name: "Name" }]);
  const [surahLang, setSurahLang] = useState([{ name: "name" }]);
  const lang = useSelector((state) => state.lang);
  const { number } = useParams();
  function Play(params) {
    const audio = new Audio(params);
    audio.play();
  }
  useEffect(() => {
    axios.get(`https://api.alquran.cloud/v1/quran/ar.alafasy`).then((res) => {
      const data = res.data.data.surahs;
      setSurah({ ...data });
      setLaoding(false);
    });
  }, []);

  useEffect(() => {
    setLaoding(true);
    axios
      .get(`https://api.alquran.cloud/v1/surah/${number}/${lang === "UZ" ? "uz.sodik" : lang === "RU" ? "ru.kuliev" : lang === "EN" ? "en.ahmedali" : "ar.muyassar"}`)
      .then((res) => {
        const data = res.data.data;
        setSurahLang({ data });
        setLaoding(false);
      });
  }, [lang, number]);
  let a = 0;

  return (
    <div className={s.card + " container"}>
      {laoding ? (
        <Laoding />
      ) : (
        <>
          <h1 className={s.card__title}>
            {surah[number - 1]?.englishName} --- {surah[number - 1]?.name}
          </h1>
          <div className={s.card__content}>
            {
            surah[number - 1]?.ayahs?.map((el) => (
              <div className={s.card__surah} onClick={() => Play(el.audio)}>
                <div>
                  <span>{el.number}</span>
                </div>
                <div style={{fontSize: "32px"}}>
                  {surahLang.data.ayahs[a].text}
                  <span style={{display: "none"}}>{a++}</span>
                </div>
                <div className={s.arabic}>{el.text}</div>
                <div>
                  <img
                    className={s.nois}
                    src="/images/soundIcon.png"
                    alt="pic"
                  />
                </div>
                <div>
                  <img src="/images/ayahEnd.webp" alt="icon" />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SinglePage;
