import styles from './page.module.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'

export default function Home() {
  const darkMode = true

  return (
    <main className={styles.main}>
      <Navbar
        darkMode={darkMode}
      />
      <Hero darkMode={darkMode} />
      <About />
      <Project />
      <Contact darkMode={darkMode}/>
    </main>
  )
}
