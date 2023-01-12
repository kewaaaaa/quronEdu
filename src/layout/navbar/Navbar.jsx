import React, { useRef, useState } from "react";
import s from "./navbarStyle.module.scss";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import MenuLineIcon from "remixicon-react/MenuLineIcon";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const menuBtn = useRef();
  const menuBack = useRef();
  const menuList = useRef();
  const langDiv = useRef();
  const langEn = useRef();
  const langRu = useRef();
  const langUz = useRef();

  const [menuState, setMenuState] = useState(0);

  function MenuClick() {
    if (menuState) {
      setMenuState(0);
      menuList.current.style.right = "-200%";
      menuBack.current.style.display = "none";
    } else {
      setMenuState(1);
      menuList.current.style.right = "0";
      menuBack.current.style.display = "block";
    }
  }
  function langFunc(params) {
    langDiv.current.style.display = "flex";
  }

  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang);
  function Lang(params) {
    dispatch({ type: "Change_Lang", payload: params.target.innerHTML });
    langEn.current.style.order = "2";
    langRu.current.style.order = "2";
    langUz.current.style.order = "2";
    params.target.style.order = "1";
    langDiv.current.style.display = "none";
  }

  return (
    <div className={s.navbar}>
      <div className={s.container}>
        <div className={s.navbar__logo}>
          <Link to="/">
            <img src={logo} alt="png" />
          </Link>
        </div>
        <ul className={s.navbar__list}>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              {lang === "EN" ? (
                <>Home</>
              ) : lang === "RU" ? (
                <>Домой</>
              ) : lang === "UZ" ? (
                <>Uyga</>
              ) : (
                <></>
              )}
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/quran"
            >
              {lang === "EN" ? (
                <>Quran</>
              ) : lang === "RU" ? (
                <>Коран</>
              ) : lang === "UZ" ? (
                <>Qur`on</>
              ) : (
                <></>
              )}
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/times"
            >
              {lang === "EN" ? (
                <>Prayer Times</>
              ) : lang === "RU" ? (
                <>Время Намаза</>
              ) : lang === "UZ" ? (
                <>Namoz Vaqtlari</>
              ) : (
                <></>
              )}
            </Link>
          </li>
        </ul>
        <div className={s.navbar__right}>
          <div className={s.navbar__lang}>
            <button onClick={langFunc}>{lang}</button>
            <div ref={langDiv} className={s.navbar__langDiv}>
              <button ref={langEn} onClick={(e) => Lang(e)}>
                EN
              </button>
              <button ref={langRu} onClick={(e) => Lang(e)}>
                RU
              </button>
              <button ref={langUz} onClick={(e) => Lang(e)}>
                UZ
              </button>
            </div>
          </div>
          <div className={s.navbar__menu}>
            <button ref={menuBtn} onClick={() => MenuClick()}>
              <MenuLineIcon />
            </button>
            <div
              ref={menuBack}
              className={s.navbar__menuBack}
              onClick={() => MenuClick()}
            ></div>
            <ul ref={menuList} className={s.navbar__menuList}>
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                <li onClick={() => MenuClick()}>
                  {lang === "EN" ? (
                    <>Home</>
                  ) : lang === "RU" ? (
                    <>Домой</>
                  ) : lang === "UZ" ? (
                    <>Uyga</>
                  ) : (
                    <></>
                  )}
                </li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/quran"
              >
                <li onClick={() => MenuClick()}>
                  {" "}
                  {lang === "EN" ? (
                    <>Quran</>
                  ) : lang === "RU" ? (
                    <>Коран</>
                  ) : lang === "UZ" ? (
                    <>Qur`on</>
                  ) : (
                    <></>
                  )}
                </li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/times"
              >
                <li onClick={() => MenuClick()}>
                  {lang === "EN" ? (
                    <>Prayer Times</>
                  ) : lang === "RU" ? (
                    <>Время Намаза</>
                  ) : lang === "UZ" ? (
                    <>Namoz Vaqtlari</>
                  ) : (
                    <></>
                  )}
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
