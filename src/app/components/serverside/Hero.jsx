"use client";
import Loader from "../../assets/loader/Loader";
import Starfield from "../../assets/stars/Starfield";
import Clouds from "../clientside/clouds/clouds";
import "./Hero.css";

const Hero = (props) => {
  const heroStyle = {
    background: props.darkMode
      ? "linear-gradient(180deg, rgba(22,21,29,1) 25%, rgba(43,41,56,1) 95%, rgba(51,29,29,0.989233193277311) 100%"
      : "linear-gradient(180deg, rgba(53,135,255,1) 17%, rgba(107,151,251,1) 50%, rgba(119,173,251,1) 100%)",
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
