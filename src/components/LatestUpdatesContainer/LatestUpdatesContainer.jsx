import React, { useState } from "react";
import './LatestUpdatesStyles.css'
import { Typography, Button, Divider } from "@mui/material";
import { BsArrowUpRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../../pages/LandingPageNew/LandingPage.css";

import Buttons from "../button";


import TextFieldComponent from "../Text Field/TextFieldComponent";
import CardComponent from "../Card/CardComponent";
import MiniCard from "../miniCard/miniCard";
import CircleContainer from "../CircleContainer/CircleContainer";
import BasicTable from "../Table/table";
import RowContainer from "../RowContainer/RowContainer";

import knifeImg from "../../assets/WeekBestVector1.webp";
import starImg from "../../assets/starImg.svg";
import homePageKnifeImg from "../../assets/HomeKnife.svg";
import AnimateImage from "../../assets/HomeSoldier.webp";
import TeamTableSoldier from "../../assets/TeamTableSoldier.webp";
import TeamTableSoldier2 from "../../assets/TeamTableSoldier2.webp";
import ArrowIcon from "../../assets/ArrowIcon.webp";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import WeekBestTeam from "../../assets/WeekBestTeam.svg";
import BestPlayer from "../../assets/BestPlayer.svg";
import FNATIC from "../../assets/FNATIC.svg";
import EachLatestCard from "./EachLatestCard";
import { LatestUpdatesData } from "./data";

const LatestUpdatesContainer = ({ bg, op, Heading, ShowButton }) => {
  return (
    <>
      <div className="eigth-container" style={{ backgroundImage: !bg ? 'unset' : null, height: op ? null : 'unset' }}>
        <div className="eigth-inner-container">

          <div style={{ flex: 1 }}>
            <h1 className="ninth-outline-text">{Heading}</h1>
            <h3 className="ninth-no-outline-text">{Heading}</h3>
          </div>
          <div style={{ flex: 1 }}>
            <p
              style={{ opacity: op ? '1' : '0' }}
              className="eigthContainer-sideText"
            >
              Get the latest news on Pathtopro League, Pakistan's premier CS:GO{" "}
              <br />
              organization. Stay informed on the latest team updates, tournament{" "}
              <br />
              schedules, and player profiles in the competitive esports scene. Our
              news <br />
              section has something for everyone, whether you're a dedicated fan or
              just <br />
              getting started. Join us and stay on top of the game with Pathtopro
              League.
            </p>
          </div>
        </div>
        <div className="latest-updates-card-container">
          {LatestUpdatesData.map((element, index) => {
            return <EachLatestCard name={element.name} likes={element.likes} comments={element.comments} text={element.text} cardImg={element.cardImg} />
          })}
        </div>
        {ShowButton ? <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Buttons text="MORE UPDATES" iconUrl={ArrowIcon} alt="Icon" />
        </p> : null}
      </div>

    </>
  );
};

export default LatestUpdatesContainer;