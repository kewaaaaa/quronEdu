import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import s from "./seleCity.module.scss";

const SelectCity = () => {
  const inp = useRef();
  const dispatch = useDispatch();
  const [state, setState] = useState("nu")
  function select(params) {
    dispatch({ type: "Change_City", payload: params });
  }
  function onKeyEnter(params) {
    if (true) {
      // window.location.href = "/city";
      // select(inp.current.value);
      setState(params)
    }
  }
  const lang = useSelector((state) => state.lang);
  return (
    <div className={s.select + " container"}>
      <div className={s.select__box}>
        <h1 className={s.select__title}>
          {lang === "EN" ? (
            <>Enter the City Name</>
          ) : lang === "RU" ? (
            <>Ввидите Назание Города</>
          ) : lang === "UZ" ? (
            <>Shahar Nomini Kiriting</>
          ) : (
            <></>
          )}
        </h1>
        <div>{state}</div>
        <input
          onKeyDown={(e) => onKeyEnter(e.code)}
          ref={inp}
          type="text"
          placeholder="London"
        />
          <button onClick={() => select(inp.current.value)}>
        <Link style={{color: "inherit", textDecoration: "none"}} to={`/city`}>
            {lang === "EN" ? (
              <>select</>
            ) : lang === "RU" ? (
              <>Выбрать</>
            ) : lang === "UZ" ? (
              <>Tanlash</>
            ) : (
              <></>
            )}
        </Link>
          </button>
      </div>
    </div>
  );
};

export default SelectCity;
