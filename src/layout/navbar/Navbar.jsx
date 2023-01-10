import React, { useRef, useState } from "react";
import s from "./navbarStyle.module.scss";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import MenuLineIcon from "remixicon-react/MenuFoldFillIcon";

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
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/quran"
            >
              Quran
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/times"
            >
              Prayer Times
            </Link>
          </li>
        </ul>
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
                Home
            </li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/quran"
                >
                <li>
                Quran
            </li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/times"
                >
                <li>
                Prayer times
            </li>
              </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
