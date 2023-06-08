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
    <div className="navbar" style={navbarstyle}>
      <div className="navbar-fill" style={linksStyle}></div>
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
          className={showMenu ? "link-item" : "link-item hidden"}
          style={linksStyle}
        >
          Home
        </a>
        <a
          href="#about"
          className={showMenu ? "link-item" : "link-item hidden"}
          style={linksStyle}
        >
          About
        </a>
        <a
          href="#project"
          className={showMenu ? "link-item" : "link-item hidden"}
          style={linksStyle}
        >
          Portfolio
        </a>
        <a
          href="#contact"
          className={showMenu ? "link-item" : "link-item hidden"}
          style={linksStyle}
        >
          Contact
        </a>
        <a
          href="#blog"
          className={
            showMenu
              ? "link-item link-item-bottom"
              : "link-item link-item-bottom hidden"
          }
          style={linksStyle}
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
