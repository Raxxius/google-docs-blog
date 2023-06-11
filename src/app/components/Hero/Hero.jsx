"use client";
import Loader from "../../assets/loader/Loader";
import Starfield from "../../assets/stars/Starfield";
import Clouds from "../Background/clouds/clouds";
import "./Hero.css";

const Hero = (props) => {
  const heroStyle = {
    color: props.darkMode ? "lightcyan" : "#06283D",
    transition: "background 2s, color 2s",
  };

  return (
    <section className="hero section" id="hero" style={heroStyle}>
      {props.darkMode ? <Starfield /> : ""}
      <div className="hero-cloud-box">
        <Clouds darkMode={props.darkMode} />
      </div>
      <div className="hero-loader-box">
        <Loader darkMode={props.darkMode} />
      </div>
      <div className="hero-title">
        <h1 className="hero-name">Keith Blackwood</h1>
        <h2 className="hero-subtext">Full Stack Developer</h2>
        <h3 className="hero-tagline">Modern React Solutions</h3>
      </div>
    </section>
  );
};

export default Hero;
