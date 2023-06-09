"use client";

import Moon from "../../assets/icons/moon.jsx";
import Sun from "../../assets/icons/sun.jsx";
import Hamburger from "../../assets/icons/Hamburger.jsx";
import "@/app/components/clientside/Navbar.css";
import { useState } from "react";

const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const navbarstyle = {
    color: props.darkMode ? "lightcyan" : "black",
  };
  const linksStyle = {
    backgroundColor: props.darkMode ? "black" : "grey",
    color: props.darkMode ? "aliceblue" : "black",
  };

  /* Button activity */
  const handleShowList = (e) => {
    e.preventDefault();
    setShowMenu(!showMenu);
  };
  const handleCloseList = () => {
    setShowMenu(false);
  };

  const DarkModeButton = (props) => {
    return (
      <button className="darkMode-btn" onClick={props.handleDarkmode}>
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
    );
  };

  /* Core return */
  return (
    <div className={props.darkMode ? "navbar nav-dark" : "navbar"}>
      <div
        className={props.darkMode ? "navbar-fill nav-fill-dark" : "navbar-fill"}
      ></div>
      <button className="menu-btn" onClick={handleShowList}>
        <Hamburger fill={props.darkMode ? "lightcyan" : "black"} />
      </button>
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
      <DarkModeButton
        darkMode={props.darkMode}
        setDarkMode={props.setDarkMode}
        handleDarkmode={props.handleDar}
      />
    </div>
  );
};

export default Navbar;
