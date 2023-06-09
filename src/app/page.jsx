"use client";

import Navbar from "./components/clientside/Navbar";
import Hero from "./components/serverside/Hero";
import About from "./components/serverside/About";
import Project from "./components/serverside/Project";
import Contact from "./components/clientside/Contact";
import "./app2.css";
import { useState } from "react";

export default function Home() {
  let [darkMode, setDarkMode] = useState(false);


  return (
    <>
      <div className="main">
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <Hero darkMode={darkMode} />
        {/* 
        <About />
        <Project />*/}
        <Contact darkMode={darkMode} />
      </div>
    </>
  );
}
