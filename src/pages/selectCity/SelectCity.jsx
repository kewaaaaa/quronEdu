import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import s from "./seleCity.module.scss";

const SelectCity = () => {
  const inp = useRef();
  const dispatch = useDispatch();
  const city = useSelector(state=>state.city)
  function select(params) {
    dispatch({ type: "Change_City", payload: params });
  }
  return (
    <div className={s.select}>
      <div className={s.select__box + " container"}>
        <h1 className={s.select__title}>Enter the City Name</h1>
        <input ref={inp} type="text" placeholder="London" />
        <Link to={`/citys/city`}>
          <button onClick={() => select(inp.current.value)}>select</button>
        </Link>
      </div>
    </div>
  );
};

export default SelectCity;
