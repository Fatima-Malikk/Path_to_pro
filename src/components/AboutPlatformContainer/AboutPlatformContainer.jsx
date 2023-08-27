import React, { useState } from "react";

import "./AboutPlatformContainer.css";

import Buttons from "../../components/button";

import ArrowIcon from "../../assets/ArrowIcon.webp";


const AboutPlatformContainer = () => {
  return (
    <div className="landing-about-container">
      <h5>ABOUT PLATFORM</h5>
      <h1 className="outline-text">WHERE SKILL MEETS COMPETITION</h1>
      <h3 className="no-outline-text">WHERE SKILL MEETS COMPETITION</h3>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <p>
          Pathtopro League is Pakistan's premier CS:GO league, providing a
          platform for players to showcase their skills and compete against the
          best in the country. Join us in the ultimate destination for competitive
          CS:GO players in Pakistan.
        </p>
        <p className="button-AboutPlatform">
          <Buttons text="DISCOVER MORE" iconUrl={ArrowIcon} alt="Icon" />
        </p>
      </div>
    </div>
  );
};

export default AboutPlatformContainer;