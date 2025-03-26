import { HashRouter as Router } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar"; // Import Navbar component
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillsAndCertifications from "./components/skills_certification";

function App() {
  return (
    <Router> {/* Wrap entire app inside Router */}
      <div>
        <Navbar />
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><SkillsAndCertifications /></section>
      </div>
    </Router>
  );
}

export default App;
