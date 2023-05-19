"use client";

import Cloud from "./cloudLowcpu";
import { useState, useEffect } from "react";

//generates the variables of the cloud based on a randomly generated y coordinate

const cloudStyle = () => {
  const yCoord = Math.floor(Math.random() * 60);
  const width = 500 - yCoord * 3;
  const height = width - 300;
  const time = Math.floor(Math.random() * 10 + 90);
  const key = Math.random();
  return {
    yCoord: `${yCoord}vh`,
    width: width,
    height: height,
    initalTime: time,
    key: key,
    cloudID: key,
  };
};

//adds cloud to state

const addCloud = (state, setState, xCoord) => {
  const style = cloudStyle();
  const time = `${
    style.initalTime * ((140 - parseInt(xCoord.replace(/\D/g, ""))) / 100)
  }s`;
  state.push(
    <Cloud
      {...style}
      time={time}
      xCoord={xCoord}
      handleAnimationEnd={(e) => handleAnimationEnd(e, setState)}
    />
  );
};

//handles onAnimationEnd

const handleAnimationEnd = (e, setState) => {
  setState((clouds) => {
    const target = e.target.id;
    const newCloudState = clouds.filter((cloud) => {
      return cloud.key !== target;
    });
    const xCoord = `0`;
    addCloud(newCloudState, setState, xCoord);
    return newCloudState;
  });
};

const Clouds = (props) => {
  // generate a number clouds based on screen width
  // small/phone = 5
  // medium/tablet = 7
  // large/desktop = 12

  let numberOfClouds = 0;

  const cloudColour = () => {
    const cloudFronts = document.querySelectorAll(".cloud-front");
    cloudFronts.forEach((cloudFront) => {
      cloudFront.style.color = props.darkMode ? "#7f799e" : "#ffff";
      cloudFront.style.transition = "all 2s";
    });
    const cloudMids = document.querySelectorAll(".cloud-mid");
    cloudMids.forEach((cloudMid) => {
      cloudMid.style.color = props.darkMode ? "#383549" : "#C0C0C0";
      cloudMid.style.transition = "all 2s";
    });
    const cloudLowers = document.querySelectorAll(".cloud-back");
    cloudLowers.forEach((cloudLower) => {
      cloudLower.style.color = props.darkMode ? "black" : "#5A5A5A";
      cloudLower.style.transition = "all 2s";
    });
  };

  function initialClouds(numberOfClouds, setClouds) {
    let initialClouds = [];
    for (let i = 0; i < numberOfClouds; i++) {
      // add cloud function
      const xCoord = `${-20 + Math.floor(Math.random() * 110)}vw`;
      addCloud(initialClouds, setClouds, xCoord);
    }
    return initialClouds;
  }

  // generate a number of <Cloud /> based on numberOfClouds
  const [clouds, setClouds] = useState();

  useEffect(() => {
    numberOfClouds =
      window.innerWidth <= 500 ? 1 : window.innerWidth >= 900 ? 7 : 1;
    const IState = initialClouds(numberOfClouds, setClouds);
    setClouds(IState);
  }, []);

  useEffect(() => cloudColour(), [clouds]);

  useEffect(() => {
    cloudColour();
  }, [props.darkMode]);

  return <div className="cloud-bank">{clouds}</div>;
};

export default Clouds;
