import React from "react";
import Navbar from "./components/Navbar"; // Import Navbar component
import Projects from "./components/Projects";

import Hero from "./components/Hero";

import About from "./components/About";


import SkillsAndCertifications from "./components/skills_certification.js";



function App() {
  return (
    <div>
      <Navbar /> {/* Ensure navbar is placed correctly */}
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
     
      <section id="skills"><SkillsAndCertifications /></section>

    </div>
  );
}


export default App;
