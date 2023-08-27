import React, { useState } from "react";
import './MatchesScheduleStyles.css'
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

const MatchesScheduleContainer = () => {
  const matchesData = [
    {
      id: 1,
      images: [img1, img2],
      matchDate: "21/10/1999",
      matchLocation: "Location A",
    },
    {
      id: 2,
      images: [img1, img2],
      matchDate: "21/10/1999",
      matchLocation: "Location B",
    },
    {
      id: 3,
      images: [img1, img2],
      matchDate: "21/10/1999",
      matchLocation: "Location C",
    },
    {
      id: 4,
      images: [img1, img2],
      matchDate: "22/10/1999",
      matchLocation: "Location D",
    },
    {
      id: 5,
      images: [img1, img2],
      matchDate: "22/10/1999",
      matchLocation: "Location E",
    },
    {
      id: 6,
      images: [img1, img2],
      matchDate: "22/10/1999",
      matchLocation: "Location F",
    },
  ];
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: 'flex-start',
      paddingTop: '7vh'
    },
    headings: {
      marginBottom: "0px",
    },
    upcomingMatches: {
      margin: 0,
      height: "100%",
      fontSize: "16px",
      color: "white",
      textAlign: "left",
      whiteSpace: "nowrap",
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: '4vh',
      // marginLeft: "100px",
      // marginTop: "-100px",
      // marginBottom: "2px",
    },
    matchesSchedule: {
      fontSize: "90px",
      fontWeight: "normal",
      fontFamily: "Neo Robotix",
      color: "#3583FE",
      marginTop: "68px",
      marginLeft: "40px",
    },
    description: {
      fontSize: "16px",
      color: "white",
      // textAlign: "left",
      // marginLeft: "850px",
      // marginTop: "30px",
    },
    miniCardContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "10px",
      // margin: "0 80px",
      // marginTop: "-100px",
    },
    viewMatchText: {
      fontFamily: "Poppins",
      fontSize: "15px",
      fontWeight: 400,
      letterSpacing: "0.02em",
    },
    blueText: {
      color: "#3583FE",
      fontSize: 36,
      fontWeight: "bold",
      marginTop: "10px",
      marginLeft: "50px",
      marginRight: "50px",
      fontFamily: "Poppins",
    },
    data: {
      fontSize: 14,
      fontFamily: "Poppins",
    },
    titleContainer: {
      display: "flex",
      justifyContent: "space-between",
    },
  };

  const MatchCards = () => {
    const matchRows = [];
    for (let i = 0; i < matchesData.length; i += 3) {
      const rowMatches = matchesData.slice(i, i + 3);
      const matchRow = (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "50px",
            gap: "100px",
          }}
        >
          {rowMatches.map((match) => (
            <MiniCard
              key={match.id}
              width={300}
              height={200}
              backgroundColor="#FFFFFF"
            >
              <div style={styles.titleContainer}>
                <Typography
                  variant="body2"
                  component="div"
                  style={styles.ptpLeagueText}
                >
                  Grand Final
                </Typography>
                <div style={styles.viewMatchContainer}>
                  <Typography
                    variant="body2"
                    component="div"
                    style={styles.viewMatchText}
                  >
                    {match.matchDate}
                  </Typography>
                </div>
              </div>
              <CircleContainer images={match.images} />
              <RowContainer rectangleText={match.matchLocation} />
            </MiniCard>
          ))}
        </div>
      );
      matchRows.push(matchRow);
    }

    return <div style={styles.miniCardContainer}>{matchRows}</div>;
  };

  return (
    <div className="sixth-container" style={styles.container}>
      <div style={styles.headings}>
        <h1 className="ninth-outline-text-matchSchedule" style={styles.matchesSchedule}>
          MATCHES SCHEDULE
        </h1>
        <h3 className="ninth-no-outline-text-matchSchedule">MATCHES SCHEDULE</h3>
      </div>
      <div className="matcheschedule-sidecontainer" >
        <p style={styles.upcomingMatches}>UPCOMING MATCHES</p>
        <p style={styles.description}>
          Don't miss out on the excitement – check upcoming <br /> matches now and
          be ready to cheer on your favorite teams.
        </p>
      </div>
      <div style={{ marginTop: '8vh' }}>
        <MatchCards />
        <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Buttons text="View All" iconUrl={ArrowIcon} alt="Icon" />
        </p>
      </div>
    </div>
  );
};

export default MatchesScheduleContainer;