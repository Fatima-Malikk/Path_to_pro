import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ExperienceContainer.css";
import Buttons from "../../components/button";
import AnimateImage from "../../assets/HomeSoldier.webp";
import ArrowIcon from "../../assets/ArrowIcon.webp";
import homePageKnifeImg from "../../assets/HomeKnife.svg";
import LastMatchesContainer from "../LastMatchesContainer/LastMatchesContainer";



const ExperienceContainer = ({ loggedIn }) => {
  const navigate = useNavigate();

  const onClickHandle = () => {
    navigate("/login");
  };

  return (
    <div className="app-container-experience">
      <h1 className="experience-text">EXPERIENCE</h1>
      <div className="the-thrill-container-outer">
        <div className="the-thrill-container-inner">
          <h1 className="the-text">The</h1>
          <div className="animated-image-container">
            <img
              className="animated-image"
              src={AnimateImage}
              alt="Animated Image"
            />
          </div>
          <h1 className="thrill-text">THRILL</h1>
        </div>
        {/* <h1 className="thrill-text">THRILL</h1>
      <div className="animated-image-container">
      <img
      className="animated-image"
      src={AnimateImage}
      alt="Animated Image"
      />
      </div>
    <h1 className="the-text">THE</h1> */}
        {/* <h1 className="victory-text">OF VICTORY</h1>
      <p className="text">
      Join the Path to Pro League and compete against the Asia’s best CS:GO
      players. Sign up now and showcase your skills!
      </p>
      <p
      className="button"
      onClick={onClickHandle}
      style={{ marginLeft: "750px", top: "490px" }}
      >
      <Buttons text="GET STARTED" iconUrl={ArrowIcon} alt="Icon" />
    </p> */}
        <div className="experience-extraStuff-container">
          <img className="knifeImage" src={homePageKnifeImg} alt="KnifeImg" />
          <div className="experience-ofVictory-text">
            <h1 className="victory-text">OF VICTORY</h1>
            <p className="text">
              Join the Path to Pro League and compete against the Asia’s best CS:GO
              players. Sign up now and showcase your skills!
            </p>
            <p
              className="button-GetStarted"
              onClick={onClickHandle}
            >
              <Buttons text="GET STARTED" iconUrl={ArrowIcon} alt="Icon" />
            </p>
          </div>

        </div>
      <LastMatchesContainer/>
      </div>
    </div>
  );
};

export default ExperienceContainer;