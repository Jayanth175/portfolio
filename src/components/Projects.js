import React, { useState } from "react";
import "../styles/projects.css";
import projectIcon from "../assets/button/Project.png";
import auctionImage from "../assets/PlayerAuction.jpg";
import authImage from "../assets/AouthAuthentication.jpg";
import javaIcon from "../assets/button/java.png";
import jsIcon from "../assets/button/js.png";
import reactIcon from "../assets/button/react.png";
import mysqlIcon from "../assets/button/mysql.png";
import nodejsIcon from "../assets/button/nodejs.png";
import htmlIcon from "../assets/button/html-5.png";
import cssIcon from "../assets/button/css-3.png"
import Googleicon from "../assets/button/google.png"
import APIicon from "../assets/button/api.png"


const Projects = () => {
  const [showProjects, setShowProjects] = useState(false);

  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };

  return (
    <div className="projects-container" id="projects">

      <div className="projects-header" onClick={toggleProjects}>
        <img src={projectIcon} alt="Project Icon" className="project-icon" />
        <h2 className="projects-title">My Projects</h2>
      </div>

      <div className={`projects-display ${showProjects ? "show" : ""}`}>
        {/* Player Auction System */}
        <div className="project-card">
          <img src={auctionImage} alt="Player Auction System" className="project-image" />
          <h3 className="project-title">Player Auction System</h3>
          <p className="project-details">
            • Developed a real-time auction platform for sports teams using React.js (frontend), Node.js (backend), and MongoDB.
            • Implemented Socket.io for seamless communication between participants during live bidding.
          </p>
          <div className="technologies">
            <h3>Technologies</h3>
            <div className="tech-icons">
            <img src={javaIcon} alt="Java" />
              <img src={reactIcon} alt="React.js" />
              <img src={nodejsIcon} alt="Node.js" />
              <img src={jsIcon} alt="JavaScript" />
              <img src={mysqlIcon} alt="MongoDB" />
            </div>
          </div>
        </div>

        {/* OAuth Authentication System */}
        <div className="project-card">
          <img src={authImage} alt="OAuth Authentication System" className="project-image" />
          <h3 className="project-title">OAuth Authentication System</h3>
          <p className="project-details">
            • Built a secure OAuth 2.0 authentication system with Node.js and MySQL, handling user login and API access management.<br></br>
            • Focused on security compliance and integration with third-party providers like Google and GitHub.
          </p>
          <div className="technologies">
            <h3>Technologies</h3>
            <div className="tech-icons">
            <img src={htmlIcon} alt="Html" />
            <img src={cssIcon} alt="Css" />
            <img src={Googleicon} alt="google" />
            <img src={mysqlIcon} alt="MySQL" />
            <img src={APIicon} alt="API" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
