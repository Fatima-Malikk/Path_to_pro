import React, { useState } from "react";
import { Typography, Button, Divider } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./LastMatchesContainer.css";
import CardComponent from "../../components/Card/CardComponent";
import MiniCard from "../../components/miniCard/miniCard";
import CircleContainer from "../../components/CircleContainer/CircleContainer";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";

const LastMatchesContainer = () => {
  // Mock data for images, date, and score numbers
  const matchesData = [
    {
      id: 1,
      images: [img1, img2], //path defined in the import statement above
      date: "21/10/1999",
      scoreA: 4,
      scoreB: 8,
    },
    {
      id: 2,
      images: [img1, img2],
      date: "21/10/1999",
      scoreA: 4,
      scoreB: 8,
    },
    {
      id: 3,
      images: [img1, img2],
      date: "21/10/1999",
      scoreA: 4,
      scoreB: 8,
    },
  ];

  return (
    <div className="gradient-container">
      <div className="cardContainer">
        <CardComponent width="1140px" height="300px" background="#3583FE" justifyContent={"flex-start"}>
          <div className="headingContainer">
            <div className="headingContent-lastMatch">
              <h1
                className="ninth-outline-text"
                style={{ margin: "30px 0 0 150px" }}
              >
                Last Matches
              </h1>
              <h3
                className="ninth-no-outline-text"
                style={{ margin: "30px 0 0 100px" }}
              >
                Last Matches
              </h3>
            </div>
            <Button className="buttonStyle">
              Match Center <ArrowForwardIcon className="arrowIcon" />
            </Button>
          </div>
        </CardComponent>

        <div className="miniCardContainer">
          {matchesData.map((match) => (
            <MiniCard
              key={match.id}
              width={312}
              height={251}
              backgroundColor="#FFFFFF"
            >
              <div className="titleContainer">
                <Typography
                  variant="body2"
                  component="div"
                  className="ptpLeagueText"
                >
                  PTP League
                </Typography>
                <div className="viewMatchContainer">
                  <Typography
                    variant="body2"
                    component="div"
                    className="viewMatchText"
                  >
                    View Match
                  </Typography>
                  <ArrowForwardIcon className="arrowIcon" />
                </div>
              </div>
              <CircleContainer images={match.images} />
              <div style={{ textAlign: "center" }}>
                <Typography variant="body2" component="div" className="data-last-matches">
                  {match.date}
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  variant="body2"
                  component="div"
                  className="blueText"
                >
                  {match.scoreA}
                </Typography>
                <div style={{ marginLeft: "30px" }} />
                <Typography
                  variant="body2"
                  component="div"
                  className="blueText"
                >
                  {match.scoreB}
                </Typography>
              </div>
            </MiniCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastMatchesContainer;
