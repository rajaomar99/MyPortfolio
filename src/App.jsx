import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import ContactForm from './pages/ContactForm'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Projects/:title" element={<ProjectDetails />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
