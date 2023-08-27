import React, { useState } from "react";
import { Typography, Button, Divider } from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./RiseToTheTopContainer.css";

import CardComponent from "../Card/CardComponent";

import BasicTable from "../Table/table";

import TeamTableSoldier from "../../assets/TeamTableSoldier.webp";

import bgImage from "../../assets/bg-lines.webp";



const RiseToTheTopContainer = () => {
    const headers = ["#", "Terms", "Win", "Lose"];
    const rows = Array.from({ length: 10 }, (_, index) => ({
      "#": index + 1,
      Terms: `Term ${index + 1}`,
      Win: Math.floor(Math.random() * 10),
      Lose: Math.floor(Math.random() * 10),
    }));
  
   
  
    return (
      <div className="fourth-container">
        <div className="background-lines" style={{backgroundImage: `url(${bgImage})`}}></div>
        <div className="imageContainer">
          <img src={TeamTableSoldier} alt="Your Image" className="image-riseToTheTop" />
        </div>
        <div className="container">
          <CardComponent
            width="1140px"
            height="1000px"
            borderRadius="10px"
            background="linear-gradient(180deg, #3583FE 0%, rgba(53, 131, 254, 0) 100%)"
          >
            <div className="blueRectangle">
              <span className="blueRectangleText">Team Standings</span>
            </div>
            <div className="headingContent">
              <h1 className="ninth-outline-text" style={{ marginLeft: "150px" }}>
                RISE TO THE TOP
              </h1>
              <h3
                className="ninth-no-outline-text"
                style={{ marginLeft: "100px" }}
              >
                RISE TO THE TOP
              </h3>
            </div>
            <div className="typographyContainer">
              <Typography className="typography">
                Keep track of the top-performing teams in the league with our Team
                Standings feature. Follow their journey and see who will rise to
                the top as they compete in thrilling matches.
              </Typography>
            </div>
            <div className="rowContainer">
              <Typography className="ptpSeasonText">Ptp - Season 2</Typography>
              <Typography className="lastUpdateText">
                Last Update: Wednesday 24th, 2023
              </Typography>
              <Button className="buttonStyle" >
                Match Center <ArrowForwardIcon className="arrowIcon" />
              </Button>
            </div>
            <div className="table">
              <BasicTable headers={headers} data={rows} />
            </div>
          </CardComponent>
        </div>
      </div>
    );
  };
  
  export default RiseToTheTopContainer;