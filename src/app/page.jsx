import Navbar from './components/serverside/Navbar'
import Hero from './components/serverside/Hero'
import About from './components/serverside/About'
import Project from './components/serverside/Project'
import Contact from './components/serverside/Contact'
import DarkMode from './assets/clientside/darkmode/darkmode'
import "./App.css"

export default function Home() {
  let darkMode=   <DarkMode />

  let handleDarkMode = {}


  return (
    <main className="main">
      <Navbar
        darkMode={darkMode}
        handleDarkMode={handleDarkMode}
      />
      <Hero darkMode={darkMode} />
      <About />
      <Project />
      <Contact darkMode={darkMode}/>
    </main>
  )
}
