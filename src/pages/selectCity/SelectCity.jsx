import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import s from "./seleCity.module.scss";

const SelectCity = () => {
  const inp = useRef();
  const dispatch = useDispatch();
  function select(params) {
    dispatch({ type: "Change_City", payload: params });
  }
  function onKeyEnter(params) {
    if (params === "Enter") {
      window.location.href = "/city";
      select(inp.current.value);
    }
  }
  return (
    <div className={s.select + " container"}>
      <div className={s.select__box}>
        <h1 className={s.select__title}>Enter the City Name</h1>
        <input
          onKeyDown={(e) => onKeyEnter(e.code)}
          ref={inp}
          type="text"
          placeholder="London"
        />
        <Link to={`/city`}>
          <button onClick={() => select(inp.current.value)}>select</button>
        </Link>
      </div>
    </div>
  );
};

export default SelectCity;
