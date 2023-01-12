import React, { useEffect, useState } from "react";
import Laoding from "../../components/laoding/Laoding";
import axios from "axios";
import { useSelector } from "react-redux";
import s from "./timesStyle.module.scss";

const Times = () => {
  const [laoding, setLaoding] = useState(true);
  const [cityName, setCityName] = useState([{ name: "Name" }]);
  const city = useSelector((state) => state.city);
  const lang = useSelector((state) => state.lang);
  useEffect(() => {
    axios
      .get(`https://dailyprayer.abdulrcs.repl.co/api/${city}`)
      .then((res) => {
        const data = res.data;
        setCityName({ ...data });
        setLaoding(false);
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
        window.location.href = "errorPage.html";
      });
  }, [city]);

  return (
    <div>
      {laoding ? (
        <Laoding />
      ) : (
        <div className={s.times + " container"}>
          <div className={s.times__box}>
            <h1 className={s.times__title}>
              {lang === "EN" ? (
                <>Prayer times in</>
              ) : lang === "RU" ? (
                <>Время намаза в</>
              ) : lang === "UZ" ? (
                <>Namoz vaqtlari</>
              ) : (
                <></>
              )}{" "}
              <span>{cityName?.city}</span>
            </h1>
            <div className={s.times__date}>{cityName?.date}</div>
            <h5 className={s.times__title2}>
              {lang === "EN" ? (
                <>Prayer times for today</>
              ) : lang === "RU" ? (
                <>Время намаза на сегодня</>
              ) : lang === "UZ" ? (
                <>Bugun uchun namoz vaqtlari</>
              ) : (
                <></>
              )}
            </h5>
            <table>
              <tbody>
                <tr className={s.times__tableHead}>
                  {lang === "EN" ? (
                    <>
                      <td>Fajr</td>
                      <td>Sunrise</td>
                      <td>Dhuhr</td>
                      <td>Asr</td>
                      <td>Maghrib</td>
                      <td>Isha'a</td>
                    </>
                  ) : lang === "RU" ? (
                    <>
                      <td>Фаджр</td>
                      <td>Шурук</td>
                      <td>Зухр</td>
                      <td>Аср</td>
                      <td>Магриб</td>
                      <td>Иша</td>
                    </>
                  ) : lang === "UZ" ? (
                    <>
                      <td>Tong</td>
                      <td>Quyosh</td>
                      <td>Peshin</td>
                      <td>Asr</td>
                      <td>Shom</td>
                      <td>Xufton</td>
                    </>
                  ) : (
                    <></>
                  )}
                </tr>
                <tr className={s.times__tableBody}>
                  <td>{cityName?.today?.Fajr}</td>
                  <td>{cityName?.today?.Sunrise}</td>
                  <td>{cityName?.today?.Dhuhr}</td>
                  <td>{cityName?.today?.Asr}</td>
                  <td>{cityName?.today?.Maghrib}</td>
                  <td>{cityName?.today?.["Isha'a"]}</td>
                </tr>
              </tbody>
            </table>
            <h5 className={s.times__title2}>
              {lang === "EN" ? (
                <>Prayer times for tomorrow</>
              ) : lang === "RU" ? (
                <>Время намаза на завтра</>
              ) : lang === "UZ" ? (
                <>Ertangi kun uchun namoz vaqtlari</>
              ) : (
                <></>
              )}
            </h5>
            <table>
              <tbody>
                <tr className={s.times__tableHead}>
                  {lang === "EN" ? (
                    <>
                      <td>Fajr</td>
                      <td>Sunrise</td>
                      <td>Dhuhr</td>
                      <td>Asr</td>
                      <td>Maghrib</td>
                      <td>Isha'a</td>
                    </>
                  ) : lang === "RU" ? (
                    <>
                      <td>Фаджр</td>
                      <td>Шурук</td>
                      <td>Зухр</td>
                      <td>Аср</td>
                      <td>Магриб</td>
                      <td>Иша</td>
                    </>
                  ) : lang === "UZ" ? (
                    <>
                      <td>Tong</td>
                      <td>Quyosh</td>
                      <td>Peshin</td>
                      <td>Asr</td>
                      <td>Shom</td>
                      <td>Xufton</td>
                    </>
                  ) : (
                    <></>
                  )}
                </tr>
                <tr className={s.times__tableBody}>
                  <td>{cityName?.tomorrow?.Fajr}</td>
                  <td>{cityName?.tomorrow?.Sunrise}</td>
                  <td>{cityName?.tomorrow?.Dhuhr}</td>
                  <td>{cityName?.tomorrow?.Asr}</td>
                  <td>{cityName?.tomorrow?.Maghrib}</td>
                  <td>{cityName?.tomorrow?.["Isha'a"]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Times;
