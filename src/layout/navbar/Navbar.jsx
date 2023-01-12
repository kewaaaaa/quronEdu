import React, { useRef, useState } from "react";
import s from "./navbarStyle.module.scss";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import MenuLineIcon from "remixicon-react/MenuFoldFillIcon";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const menuBtn = useRef();
  const menuBack = useRef();
  const menuList = useRef();

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

  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang);
  function Lang(params) {
    dispatch({ type: "Change_Lang", payload: params.target.innerHTML });
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
                <>Куран</>
              ) : lang === "UZ" ? (
                <>Quron</>
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
            <button>{lang}</button>
            <div>
              <button onClick={(e) => Lang(e)}>EN</button>
              <button onClick={(e) => Lang(e)}>RU</button>
              <button onClick={(e) => Lang(e)}>UZ</button>
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
                <li>
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
                <li>
                  {" "}
                  {lang === "EN" ? (
                    <>Quran</>
                  ) : lang === "RU" ? (
                    <>Куран</>
                  ) : lang === "UZ" ? (
                    <>Quron</>
                  ) : (
                    <></>
                  )}
                </li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/times"
              >
                <li>
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
