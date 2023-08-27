import React, { useState } from "react";
import './MeetBestContainer.css'
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


const MeetBestContainer = () => {
    const styles = {
      cardContainer: {
        display: "flex",
        justifyContent: "center",
        margin: "0 40px",
      },
      titleText: {
        fontFamily: "Neo Robotix",
        fontStyle: "italic",
        fontWeight: 400,
        fontSize: "45px",
        lineHeight: "49px",
        textAlign: "center",
        whiteSpace: "nowrap",
        marginTop: "80px",
        WebkitTextFillColor: "transparent",
        WebkitTextStroke: "1px rgba(255, 255, 255, 0.2)",
      },
      subtitleText: {
        fontFamily: "Neo Robotix",
        fontStyle: "italic",
        fontWeight: 400,
        fontSize: "24px",
        lineHeight: "26px",
        textAlign: "center",
        letterSpacing: "0.02em",
        whiteSpace: "nowrap",
        color: "white",
        marginTop: "-65px",
      },
      label: {
        marginRight: "10px",
        fontFamily: "Neo Robotix",
        fontStyle: "italic",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "18px",
        textAlign: "center",
        letterSpacing: "0.02em",
        whiteSpace: "nowrap",
        color: "white",
        marginTop: "30px",
      },
      pTag: {
        margin: '11vh 0 0 0',
        fontSize: "16px",
        color: "white",
        width: '75%',
        display: 'flex',
        justifyContent: 'flex-end',

      },
    };
  
    const renderCardComponent = (title, subtitle, image, image1, children,opacity) => (
      <CardComponent
        height={360}
        width={500}
        background="#3583FE"
        borderRadius={5}
        opacity={1}
        style={{ zIndex: 5 }}
      >
        <CardComponent
          style={{ zIndex: 5 }}
          height={175}
          width={452}
          background="#FFFFFF"
          borderRadius={5}
          opacity={1}
          marginTop={-10}
          backgroundImage={image1}
        >
          <div
            style={{
              width: "452px",
              height: "237px",
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              zIndex: 1,
            }}
          />
        </CardComponent>
        <h1 style={styles.titleText}>{title}</h1>
        <h3 style={styles.subtitleText}>{subtitle}</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {children}
        </div>
      </CardComponent>
    );
  
    const TeamOfTheWeek = () => (
      <div style={styles.cardContainer}>
        {renderCardComponent(
          "TEAM OF THE WEEK",
          "TEAM OF THE WEEK",
          WeekBestTeam,
          null,
          <>
            <div style={styles.label}>Team:</div>
            <div
              style={{
                width: "228px",
                height: "80px",
                borderRadius: "10px",
                backgroundColor: "white",
                margin: "0 20px",
                backgroundImage: `url(${FNATIC})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </>
        )}
      </div>
    );
  
    const PlayerOfTheWeek = () => (
      <div style={styles.cardContainer}>
        {renderCardComponent(
          "PLAYER OF THE WEEK",
          "PLAYER OF THE WEEK",
          BestPlayer,
          FNATIC,
          <>
            <div style={styles.label}>Team:</div>
            <div
              style={{
                width: "120px",
                height: "50px",
                borderRadius: "10px",
                backgroundColor: "white",
                margin: "0 10px",
                backgroundImage: `url(${FNATIC})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div style={styles.label}>Name:</div>
            <div
              style={{
                width: "120px",
                height: "50px",
                borderRadius: "10px",
                backgroundColor: "#337AEA",
                margin: "0 10px",
              }}
            >
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "21px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  justifyContent: "center",
                  marginTop: "15px",
                }}
              >
                KRiMZ
              </Typography>
            </div>
          </>
        )}
      </div>
    );
  
    return (
      <div className="seventh-container">
          <h1 className="ninth-outline-text">MEET THIS WEEK'S BEST</h1>
          <h3 className="ninth-no-outline-text">MEET THIS WEEK'S BEST</h3>
        
          <p className="meet-this-Week-pTag">
            Stay up-to-date on the best players and teams that are <br />
            leading the charge in Pakistan's CSGO scene.
          </p>
        
        <div
          style={{
            display: "flex",
            zIndex: 1,
          }}
        >
          <TeamOfTheWeek />
          <PlayerOfTheWeek />
        </div>
  
        <img className="knife-image" src={knifeImg} alt="Image" />
        <img className="star-image" src={starImg} alt="Image" />
      </div>
    );
  };

  export default MeetBestContainer;