"use client";

import camArt from "../../assets/images/keith-camart.png";
import "./About.css";

const About = (props) => {
  return (
    <section
      className={props.darkMode ? "about section about-dark" : "about section"}
      id="about"
    >
      <h1 className={props.darkMode ? "about-h1 about-h1-dark" : "about-h1"}>
        Hi!, I'm Keith
      </h1>
      <div className="about-content-wrapper">
        <div
          className={
            props.darkMode
              ? "about-photo-box about-photo-box-dark"
              : "about-photo-box"
          }
        >
          <img
            className="about-photo"
            alt="Photo of Keith with a cam art filter"
            src={camArt.src}
          ></img>
        </div>
        <div className="about-text-wrapper">
          <p className={props.darkMode ? "about-text-dark" : "about-text"}>
            I'm a curious person who enjoys solving problems
          </p>
          <p className={props.darkMode ? "about-text-dark" : "about-text"}>
            I used to do research into Medical devices
          </p>
          <p className={props.darkMode ? "about-text-dark" : "about-text"}>
            I worked on building heart valves
          </p>
          <p className={props.darkMode ? "about-text-dark" : "about-text"}>
            I've worked in technology transfer and medical devices
          </p>
          <h2 className={props.darkMode ? "about-text-dark" : "about-text"}>
            Now as a FullStack Engineer, I enjoy developing innovative solutions
            to complex technical problems
          </h2>
          <p className={props.darkMode ? "about-text-dark" : "about-text"}>
            My tech stack is ever evolving
          </p>
          <p className={props.darkMode ? "about-text-dark" : "about-text"}>
            Currently I work with React, NodeJS, NextJS, Django
          </p>
          <h2 className={props.darkMode ? "about-text-dark" : "about-text"}>
            Outside work I am a keen climber, it's puzzle solving on a verticle
            surface!
          </h2>
        </div>
      </div>
    </section>
  );
};

export default About;
