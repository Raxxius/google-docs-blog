import camArt from "../../assets/images/keith-camart.png";

const About = () => {
  return (
    <div className="About">
      <h1 className="about-h1">Hi!, I'm Keith</h1>
      <div className="about-photo-box">
        <img
          className="about-photo"
          alt="Photo of Keith with a cam art filter"
          src={camArt.src}
        ></img>
      </div>
      <p className="about-text">
        I'm a curious person who enjoys solving problems
      </p>
      <p className="about-text">I used to do research into Medical devices</p>
      <p className="about-text">I worked on building heart valves</p>
      <p className="about-text">
        I've worked in technology transfer and medical devices
      </p>
      <h2 className="about-text">
        Now as a FullStack Engineer, I enjoy developing innovative solutions to
        complex technical problems
      </h2>
      <p className="about-text">My tech stack is ever evolving</p>
      <p className="about-text">Currently I work with React, NodeJS, NextJS, Django</p>
      <h2>Outside work I am a keen climber, it's puzzle solving on a verticle surface!</h2>
    </div>
  );
};

export default About;
