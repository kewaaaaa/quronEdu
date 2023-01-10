import React, { useEffect, useState } from "react";
import Laoding from "../../components/laoding/Laoding";
import axios from "axios";
import { useSelector } from "react-redux";
import s from "./timesStyle.module.scss";

const Times = () => {
  const [laoding, setLaoding] = useState(false);
  const [cityName, setCityName] = useState([{ name: "Name" }]);
  const city = useSelector((state) => state.city);
  useEffect(() => {
    setLaoding(true);
    axios
      .get(`https://dailyprayer.abdulrcs.repl.co/api/${city}`)
      .then((res) => {
        const data = res.data;
        setCityName({ ...data });
        setLaoding(false);
      });
  }, [city]);

  return (
    <div>
      {laoding ? (
        <Laoding />
      ) : (
        <div className={s.times + " container"}>
          <h1 className={s.times__title}>Prayer times in {cityName?.city}</h1>
          <div className={s.times__date}>{cityName?.date}</div>
          <h5 className={s.times__title2}>Prayer times for today</h5>
          <table>
            <tbody>
              <tr className={s.times__tableHead}>
                <td>Fajr</td>
                <td>Sunrise</td>
                <td>Dhuhr</td>
                <td>Asr</td>
                <td>Maghrib</td>
              </tr>
              <tr className={s.times__tableBody}>
                <td>{cityName?.today?.Fajr}</td>
                <td>{cityName?.today?.Sunrise}</td>
                <td>{cityName?.today?.Dhuhr}</td>
                <td>{cityName?.today?.Asr}</td>
                <td>{cityName?.today?.Maghrib}</td>
              </tr>
            </tbody>
          </table>
          <h5 className={s.times__title2}>Prayer times for tomorrow</h5>
          <table>
            <tbody>
              <tr className={s.times__tableHead}>
                <td>Fajr</td>
                <td>Sunrise</td>
                <td>Dhuhr</td>
                <td>Asr</td>
                <td>Maghrib</td>
              </tr>
              <tr className={s.times__tableBody}>
                <td>{cityName?.tomorrow?.Fajr}</td>
                <td>{cityName?.tomorrow?.Sunrise}</td>
                <td>{cityName?.tomorrow?.Dhuhr}</td>
                <td>{cityName?.tomorrow?.Asr}</td>
                <td>{cityName?.tomorrow?.Maghrib}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Times;
