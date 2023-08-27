import React, { useState } from "react";
import { Typography, Button, Divider } from "@mui/material";
import { BsArrowUpRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import './StayConnectedStyles.css'

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
import FooterKnife from '../../assets/FooterKnife.webp'

const StayConnectedContainer = () => {
  return (
    <div className="landing-ninth-container" style={{ display: "flex" }}>
      <img
          src={FooterKnife}
          alt="Image"
          className="image-container-StayConnected"
        />
      <div style={{ flex: 1 }}>

        <h1 className="ninth-outline-text-stayConnected">STAY CONNECTED</h1>
        <h3 className="ninth-no-outline-text-stayConnected">STAY CONNECTED</h3>

        {/* <p
          style={{
            fontSize: "18px",
            color: "white",
            textAlign: "left",
            marginTop: "-80px",
            marginLeft: "70px",
          }}
        >
          Join our community of CS:GO fans and stay connected to the action.
        </p> */}
      </div>
      {/* <div style={{ flex: 1 }}>
        <p
          style={{
            fontSize: "18px",
            color: "white",
            textAlign: "left",
            // marginTop: "-210px",
            marginLeft: "60px",
          }}
        >
          Sign up for the Pathtopro Newsletter and stay up-to-date with
          <br /> Pakistan's premier CS:GO league. Get the latest news, scores,
          and
          <br /> highlights, exclusive content, and insider tips and strategies.
        </p>
        <TextFieldComponent
          label="Email"
          variant="outlined"
          name="email"
          style={{ width: "50%", marginLeft: "60px" }}
        />
        <p className="button" style={{ marginLeft: "430px", top: "190px" }}>
          <Buttons text="SIGN IN" iconUrl={ArrowIcon} alt="Icon" />
        </p>
      </div> */}
      <div className="stayConnected-InnerWrapper">
        <p
          style={{
            fontSize: "18px",
            color: "white",
            textAlign: "left",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
        >
          Join our community of CS:GO fans and stay connected to the action.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p
            style={{
              fontSize: "18px",
              color: "white",
              textAlign: "left",
              // marginTop: "-210px",
              // marginLeft: "60px",

            }}
          >
            Sign up for the Pathtopro Newsletter and stay up-to-date with
            <br /> Pakistan's premier CS:GO league. Get the latest news, scores,
            and
            <br /> highlights, exclusive content, and insider tips and strategies.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 55 }}>
            <TextFieldComponent
              label="Email"
              variant="outlined"
              name="email"
              style={{ width: "50%" }}
            />
            <p className="button">
              <Buttons text="SIGN IN" iconUrl={ArrowIcon} alt="Icon" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayConnectedContainer;