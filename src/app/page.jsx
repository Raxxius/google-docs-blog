import Navbar from "./components/clientside/Navbar";
import Hero from "./components/serverside/Hero";
import About from "./components/serverside/About";
import Project from "./components/serverside/Project";
import Contact from "./components/clientside/Contact";
import DarkMode from "./assets/clientside/darkmode/darkmode";
import "./app2.css";

export default function Home() {
  let darkMode = <DarkMode />;

  let handleDarkMode = "Handling darkmode"


  return (
    <>
      <div className="main">
        <Navbar darkMode={darkMode} handleDarkMode={handleDarkMode} />
        <Hero darkMode={darkMode} />
        <About />
        <Project />
        <Contact darkMode={darkMode} />
      </div>
    </>
  );
}
