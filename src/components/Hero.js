import React, { useState } from "react";
import "../styles/hero.css";
import profileImage from "../assets/profile1.jpg"; // Ensure correct import
import Lottie from "lottie-react";
import buttonAnimation from "../assets/button/Animation.json"; // Import Lottie animation

const Hero = () => {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        {/* Profile Section */}
        <div className="profile-container">
          <div className="rotating-border"></div> {/* Rotating Border */}
          <img src={profileImage} alt="Profile" className="profile-pic" /> {/* Static Profile Image */}
        </div>
        <h2 className="profile-name">Hello I'm JAYANTH</h2>
        <h1 className="SubHeading">Full Stack Web Developer</h1>
        <p className="hero-subtext">
          <i>Master of Computer Applications (MCA) graduate <br /> with comprehensive Full Stack Development training from Tap Academy.</i>
        </p>
      </div>

      {/* Floating Contact Button with Lottie Animation */}
      <div
        className="contact-button"
        onMouseEnter={() => setShowContacts(true)}
        onMouseLeave={() => setShowContacts(false)}
      >
        <Lottie animationData={buttonAnimation} loop={true} className="lottie-button" />
        <p className="contact-text">Contact details</p> {/* Added text under button */}
        {showContacts && (
          
          <div className="contact-options">
            <a href="https://github.com/jayanth175" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/jayanth-s" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:jayanthgowda170@gmail.com">Gmail</a>
            
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
