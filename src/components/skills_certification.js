import React from "react";
import "../styles/skills_certification.css";
import javaIcon from "../assets/button/java.png";
import jsIcon from "../assets/button/js.png";
import reactIcon from "../assets/button/react.png";
import mysqlIcon from "../assets/button/mysql.png";
import nodejsIcon from "../assets/button/nodejs.png";
import pythonIcon from "../assets/button/python.png";
import hackerRankCert from "../assets/hackerrank.jpg";
import tapAcademyCert from "../assets/Tapacademy.jpg";
import HibernateIcon from "../assets/button/Hibernate.png";
import Javascript from "../assets/JavaScript.jpg";
import SpringIcon from "../assets/button/Spring.png";
import githubIcon from "../assets/button/github.png";
import HtmlIcon from "../assets/button/html-5.png";
import CssIcon from "../assets/button/css-3.png";
import MangoIcon from "../assets/button/Mango.png";




const SkillsAndCertifications = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Technical Skill</h2>
      <div className="skills-icons">
        <img src={javaIcon} alt="Java" />
        <img src={jsIcon} alt="JavaScript" />
        <img src={reactIcon} alt="React.js" />
        <img src={nodejsIcon} alt="Node.js" />
        <img src={mysqlIcon} alt="MySQL" />
        <img src={pythonIcon} alt="Python" />
        <img src={HibernateIcon} alt="Hibernate" />
        <img src={SpringIcon} alt="Spring" />
        <img src={githubIcon} alt="github" />
        <img src={HtmlIcon} alt="HTML" />
        <img src={CssIcon} alt="CSS" />
        <img src={MangoIcon} alt="MangoDB" />

      </div>

      <h2 className="certifications-title">Certifications</h2>
      <div className="certifications" id="Skills">
        <div className="cert-card">
          
          <img src={hackerRankCert} alt="HackerRank Java Certification" />
          <p>HackerRank Java Certification</p>

          <img src={tapAcademyCert} alt="Tapacademy fullstack certification" />
          <p>Full Stack Web Developer</p>

          <img src={Javascript} alt="JavaScript certification" />
          <p>JavaScript</p>
        </div>
        
      </div>
        <div className="contact-details">
        <h3>Feel Free to Contact</h3>
        <p>Email: <a href="mailto:jayanthgowda170@gmail.com">jayanthgowda170@gmail.com</a></p>
        <p>Phone: <a href="tel:+917259902175">7259902175</a></p>
      </div>
    </div>

    
  );
};

export default SkillsAndCertifications;
