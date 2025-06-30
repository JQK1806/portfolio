import './App.css'
import Navbar from './components/Navbar/index'
import Hero from './components/Hero/index'
import About from './components/About/index'
import Experience from './components/Experience/index'
import Projects from './components/Projects/index'

function App() {

  return (
    <>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <About />
      <Experience />
      <Projects />
    </>
  )
}

export default App
