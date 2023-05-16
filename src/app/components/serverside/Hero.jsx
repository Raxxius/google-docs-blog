import Loader from "../../assets/loader/Loader";
import Starfield from "../../assets/stars/Starfield";
import Clouds from "../clientside/clouds";

const Hero = (props) => {
  const heroStyle = {
    backgroundColor: props.darkMode ? "#16151d" : "skyblue",
    color: props.darkMode ? "lightcyan" : "#140c10",
    transition: "background-color 2s, color 2s",
  };

  return (
    <div className="hero" style={heroStyle}>
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
    </div>
  );
};

export default Hero;