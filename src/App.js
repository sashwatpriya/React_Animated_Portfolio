import './App.css';
import React, {useEffect} from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Journey from './components/Journey.js';
import Aboutme from './components/Aboutme.js'
import Contact from './components/Contact.js'
import AOS from 'aos'
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    AOS.init();
  },[]);
  return (
    <>
  <Navbar />
  <Home />
  <Skills />
  <Projects />
  <Journey />
  <Aboutme />
  <Contact />
  </>
  );
}

export default App;
