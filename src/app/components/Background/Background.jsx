"use client";

import Starfield from "./stars/Starfield"
import Clouds from "./clouds/clouds"
import "./background.css";

const Background = (props) => {
  return (
    <div
      className={props.darkMode ? "background background-dark" : "background"}
    >
      {props.darkMode ? <Starfield /> : ""}
      <div className="hero-cloud-box">
        <Clouds darkMode={props.darkMode} />
      </div>
    </div>
  );
};

export default Background;
