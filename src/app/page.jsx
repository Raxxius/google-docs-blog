"use client";

import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import "./app2.css";
import { useState } from "react";

export default function Home() {
  let [darkMode, setDarkMode] = useState(false);

  return (
    <div className="wrapper">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="main">
        <div className="main-content">
          <Hero darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Project darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </div>
        <div className="main-background">
          <Background darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}
