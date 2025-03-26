import React from "react";
import "../styles/navbar.css";
import homeIcon from "../assets/button/home-button.png";
import aboutIcon from "../assets/button/about-icon.png";
import skillsIcon from "../assets/button/skills.png";
import resumeIcon from "../assets/button/resume.png";
import trainingIcon from "../assets/button/certificate.png";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    window.scrollTo({ top: section.offsetTop - 50, behavior: "smooth" });
  }
};

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-item" onClick={() => scrollToSection("home")}>
        <img src={homeIcon} alt="Home" />
        <span className="tooltip">Home</span>
      </div>
      <div className="nav-item" onClick={() => scrollToSection("about")}>
        <img src={aboutIcon} alt="About" />
        <span className="tooltip">About</span>
      </div>
      <div className="nav-item" onClick={() => scrollToSection("projects")}>
        <img src={skillsIcon} alt="Projects" />
        <span className="tooltip">Project</span>
      </div>
      <div className="nav-item" onClick={() => scrollToSection("Skills")}>
        <img src={trainingIcon} alt="Training" />
        <span className="tooltip">Skills and Certificates</span>
      </div>
      <div className="nav-item" onClick={() => window.open(process.env.PUBLIC_URL + "/Jayanth_Resume.pdf", "_blank")}>

  <img src={resumeIcon} alt="Resume" />
  <span className="tooltip">Resume</span>
</div>

    </div>
  );
};

export default Navbar;
