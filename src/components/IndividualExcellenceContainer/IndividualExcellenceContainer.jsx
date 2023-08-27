import React, { useState } from "react";
import './IndividualExcellenceContainerStyles.css';
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
import bgImage from "../../assets/bg-lines.webp";

const IndividualExcellenceContainer = () => {
    const headers = ["#", "Player", "K/D", "R"];
    const rows = Array.from({ length: 10 }, (_, index) => ({
      "#": index + 1,
      Player: `Player ${index + 1}`,
      "K/D": Math.floor(Math.random() * 10),
      R: Math.floor(Math.random() * 10),
    }));
  
    const styles = {
      container: {
        position: "relative",
        height: "1100px",
        zIndex: 0,
        //border: '2px solid red', //reference line
        top: "10px",
      },
      blueRectangle: {
        width: "163px",
        height: "30px",
        borderRadius: "60px",
        opacity: "0.2",
        position: "absolute",
        top: "20px",
        left: "100px",
        background: "#FFFFFF",
      },
      blueRectangleText: {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontWeight: "800",
        lineHeight: "21px",
        letterSpacing: "0em",
        textAlign: "center",
        justifyContent: "center",
        color: "#000000",
        marginLeft: "30px",
      },
      headingContent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "left",
        alignItems: "left",
        flex: 1,
      },
      table: {
        marginTop: "20px",
      },
      imageContainer: {
        position: "absolute",
        top: "0",
        right: "19vw",
        overflow: "overlay",
      },
      image: {
        width: "350px",
        position: "relative",
        zIndex: 2,
      },
      typographyContainer: {
        width: "638px",
        height: "42px",
        display: "flex",
        alignItems: "center",
        marginTop: "150px",
      },
      typography: {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontWeight: "400",
        letterSpacing: "0em",
        textAlign: "left",
        color: "#FFFFFF",
      },
      rowContainer: {
        display: "flex",
        alignItems: "center",
        marginTop: "20px",
      },
      rowTypography: {
        fontFamily: "Poppins",
        fontSize: "12px",
        fontWeight: "400",
        letterSpacing: "0em",
        textAlign: "left",
        color: "#FFFFFF",
        marginRight: "40px",
        justifyContent: "space-between",
        gap: "60px",
      },
      buttonStyle: {
        width: "220px",
        height: "55px",
        borderRadius: "60px",
        background: "linear-gradient(180deg, #FFFFFF 0%, #ACCCFF 100%)",
        color: "black",
      },
      arrowIcon: {
        width: "25px",
        height: "30px",
        padding: "2px",
        color: "#3583FE",
        transform: "rotate(-45deg)",
      },
      ptpSeasonText: {
        fontFamily: "Neo Robotix",
        fontSize: "32px",
        fontStyle: "italic",
        fontWeight: "400",
        lineHeight: "35px",
        letterSpacing: "0.02em",
        textAlign: "left",
        color: "#FFFFFF",
        marginRight: "40px",
      },
      lastUpdateText: {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "21px",
        letterSpacing: "0em",
        textAlign: "left",
        color: "#FFFFFF",
        marginRight: "40px",
      },
    };
  
    return (
      <div className="fifth-container">
        <div className="background-lines" style={{backgroundImage: `url(${bgImage})`}}></div>
        <div className="imageContainer-IndividualExcellence" >
          <img className="image-IndividualExcellence" src={TeamTableSoldier2} alt="Your Image" />
        </div>
        <div style={styles.container}>
          <CardComponent
            width="1140px"
            height="1000px"
            borderRadius="10px"
            background="linear-gradient(180deg, #3583FE 0%, rgba(53, 131, 254, 0) 100%)"
          >
            <div style={styles.blueRectangle}>
              <span style={styles.blueRectangleText}>Players Standings</span>
            </div>
            <div style={styles.headingContent}>
              <h1 className="ninth-outline-text" style={{ marginLeft: "250px" }}>
                Individual Excellence
              </h1>
              <h3
                className="ninth-no-outline-text"
                style={{ marginLeft: "100px" }}
              >
                Individual Excellence
              </h3>
            </div>
            <div style={styles.typographyContainer}>
              <Typography style={styles.typography}>
                Stay up-to-date on the top-performing players in the league with
                our Player Standings feature. Get real-time updates and detailed
                statistics, and see who's dominating the competition.
              </Typography>
            </div>
            <div style={styles.rowContainer}>
              <Typography style={styles.ptpSeasonText}>Ptp - Season 2</Typography>
              <Typography style={styles.lastUpdateText}>
                Last Update: Wednesday 24th, 2023
              </Typography>
              <Button style={styles.buttonStyle}>
                Match Center <ArrowForwardIcon style={styles.arrowIcon} />
              </Button>
            </div>
            <div style={styles.table}>
              <BasicTable headers={headers} data={rows} />
            </div>
          </CardComponent>
        </div>
      </div>
    );
  };

  export default IndividualExcellenceContainer;