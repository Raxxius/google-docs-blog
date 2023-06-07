import Navbar from "./components/serverside/Navbar";
import Hero from "./components/serverside/Hero";
import About from "./components/serverside/About";
import Project from "./components/serverside/Project";
import Contact from "./components/serverside/Contact";
import DarkMode from "./assets/clientside/darkmode/darkmode";
import "./app2.css";

export default function Home() {
  let darkMode = <DarkMode />;
  /*
  <Navbar darkMode={darkMode} handleDarkMode={handleDarkMode} />
  */

  return (
    <>
      <div className="main">
        <Hero darkMode={darkMode} />
        <About />
        <Project />
        <Contact darkMode={darkMode} />
      </div>
    </>
  );
}
