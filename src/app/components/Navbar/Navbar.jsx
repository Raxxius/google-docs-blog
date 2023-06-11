"use client";
import Moon from "../../assets/icons/moon.jsx";
import Sun from "../../assets/icons/sun.jsx";
import Hamburger from "../../assets/icons/Hamburger.jsx";
import "./Navbar.css";
import { useState } from "react";

const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  /* Button activity */
  const handleShowList = (e) => {
    setShowMenu(!showMenu);
  };
  const handleCloseList = () => {
    setShowMenu(false);
  };

  const Menu = (props) => {
    return (
      <>
        <div className="menu-btn" onClick={handleShowList}>
          <Hamburger fill={props.darkMode ? "lightcyan" : "black"} />
        </div>
        <div
          className={showMenu ? "links-closer" : "hidden"}
          onClick={handleCloseList}
        ></div>
        <div className="links-list">
          <a
            href="#hero"
            className={
              showMenu
                ? props.darkMode
                  ? "link-item link-item-dark"
                  : "link-item"
                : props.darkMode
                ? "link-item link-item-dark hidden"
                : "link-item hidden"
            }
          >
            Home
          </a>
          <a
            href="#about"
            className={
              showMenu
                ? props.darkMode
                  ? "link-item link-item-dark"
                  : "link-item"
                : props.darkMode
                ? "link-item link-item-dark hidden"
                : "link-item hidden"
            }
          >
            About
          </a>
          <a
            href="#project"
            className={
              showMenu
                ? props.darkMode
                  ? "link-item link-item-dark"
                  : "link-item"
                : props.darkMode
                ? "link-item link-item-dark hidden"
                : "link-item hidden"
            }
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className={
              showMenu
                ? props.darkMode
                  ? "link-item link-item-dark"
                  : "link-item"
                : props.darkMode
                ? "link-item link-item-dark hidden"
                : "link-item hidden"
            }
          >
            Contact
          </a>
          <a
            href="#blog"
            className={
              showMenu
                ? props.darkMode
                  ? "link-item link-item-dark link-item-bottom"
                  : "link-item"
                : props.darkMode
                ? "link-item link-item-dark hidden link-item-bottom"
                : "link-item hidden"
            }
          >
            Blog
          </a>
        </div>
      </>
    );
  };

  const DarkModeButton = (props) => {
    return (
      <button className="darkMode-btn" onClick={() => props.setDarkMode(!props.darkMode)}>
      {props.darkMode ? (
        <Sun
          style={{
            fill: "#fbac13",
            animation: "fadeIn 2s",
          }}
        />
      ) : (
        <Moon style={{ fill: "#F5F3CE", animation: "fadeIn 2s" }} />
      )}
    </button>
    )
  }

  /* Core return */
  return (
    <div className={props.darkMode ? "navbar nav-dark" : "navbar"}>
      <div
        className={props.darkMode ? "nav-fill nav-fill-dark" : "nav-fill"}
      ></div>
      <Menu darkMode={props.darkMode} setDarkMode={props.setDarkMode}/>
      <DarkModeButton darkMode={props.darkMode} setDarkMode={props.setDarkMode}/>
    </div>
  );
};

export default Navbar;
