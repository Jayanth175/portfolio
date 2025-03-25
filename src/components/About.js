// Fixed About.js - Education Details Now Toggle Correctly
import React, { useState } from "react";
import "../styles/about.css";
import Lottie from "react-lottie";
import educationAnimation from "../assets/button/Eduaction.json";
import trainingAnimation from "../assets/button/Training.json";

const About = () => {
  const [showEducation, setShowEducation] = useState(false);
  const [showTraining, setShowTraining] = useState(false);

  const educationOptions = {
    loop: true,
    autoplay: true,
    animationData: educationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const trainingOptions = {
    loop: true,
    autoplay: true,
    animationData: trainingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="about-container">
      <h1>About Me</h1>
      
      <section className="education">
        <div className="education-header" onClick={() => setShowEducation(!showEducation)}>
          <div className="education-button-container">
            <Lottie options={educationOptions} height={80} width={80} />
            <span className="education-text">Education</span>
          </div>
        </div>
        {showEducation && (
          <div className="education-details">
            <div className="education-line"></div>
            <div className="education-content">
              <div className="left">
                <h3>MCA</h3>
                <p>Completed Master's Degree in JSS College of Arts, Commerce, and Science, Mysuru in the year of 2024.</p>
                <span>CGPA: 8.47</span>
              </div>
              <div className="right">
                <h3>BCA</h3>
                <p>Completed bachelor's Degree in Yuvaraja’s College, Mysuru in the year of 2022</p>
                <span>CGPA: 7.44</span>
              </div>
            </div>
          </div>
        )}
      </section>
      
      <section className="training">
        <div className="training-header" onClick={() => setShowTraining(!showTraining)}>
          <div className="training-button-container">
            <Lottie options={trainingOptions} height={80} width={80} />
            <span className="training-text">Training</span>
          </div>
        </div>
        {showTraining && (
          <ul className="training-details">
            <li style={{ animation: "fadeIn 0.5s ease-in-out forwards" }}>Completed Java Full Stack Web Development Training int TAP Academy</li>
            <li style={{ animation: "fadeIn 1.5s ease-in-out forwards" }}>Date of completion 01-03-2025</li>
            <li style={{ animation: "fadeIn 2s ease-in-out forwards" }}>Mastered Core Java, JEE, JDBC, Servlets and HTML and CSS.</li>
            <li style={{ animation: "fadeIn 2.5s ease-in-out forwards" }}>Acquired advanced skills in SQL and problem-solving.</li>
          </ul>
        )}
      </section>
    </div>
  );
};

export default About;
