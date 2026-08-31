import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Experience from './components/Experience'
import About from './components/About'
import Skills from './components/Skills'
import Publication from './components/Publication'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Experience />
        <About />
        <Skills />
        <Publication />
        <Education />
      </main>
      <Contact />
    </>
  )
}

export default App
