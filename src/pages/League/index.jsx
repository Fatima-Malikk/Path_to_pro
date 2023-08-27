import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import ResponsiveAppBar from "../../components/header";
import TextFieldComponent from "../../components/Text Field/TextFieldComponent";
import Buttons from "../../components/button";
import ArrowIcon from "../../assets/ArrowIcon.webp";
import "./index.css";
import leagueData from './league.json';

const League = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])

  function loadmorerecent(){
    alert("code here");
  }
  function loadmorelast(){
    alert("code here");
  }
  function viewmatch(matchid){
    alert("code here " + matchid)
  }

  return (
    <>
      <div className="league-app-container">
        <h1 className="header-text">Leagues</h1>
        <ResponsiveAppBar />
      </div>
      <div className="league-gradient-container"></div>
      <div className="league-middle-gradient-container"></div>
      <main className="league-main league-fullBG-container">
        <div>
          <h1 className="outline-text-league">Recent Matches</h1>
          <h3 className="no-outline-text-league" >Recent Matches</h3>
        </div>
        <div id="recent-matches">
          {leagueData.recent_matches.map((match, index) => (
            <div key={index} className="result_card">
              <div className="titleContainer">
                <div className="ptpLeagueText">{match.league_name}</div>
                <button className="viewMatchContainer viewmatchbtn" onClick={() => viewmatch(match.league_name)}>
                  <div className="MuiTypography-root MuiTypography-body2 viewMatchText css-e784if-MuiTypography-root">View Match</div>
                  <svg className="arrowIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowForwardIcon">
                    <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                  </svg>
                </button>
              </div>
              <div className="verses_container">
                <div className="score_number" style={{ backgroundImage: `url(${match.team1_img_url})` }}></div>
                <h1 className="verses">V</h1>
                <div className="score_number" style={{ backgroundImage: `url(${match.team2_img_url})` }}></div>
              </div>
              <div className="score_container">
                <div className="blueText">{match.score_team1}</div>
                <div className="data-last-matches">{match.match_date}</div>
                <div className="blueText">{match.score_team2}</div>
              </div>
            </div>
          ))}
        </div>
        <button className="blue-btn" onClick={() => loadmorerecent()}>
          Load More
          <svg className="arrowIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowForwardIcon">
            <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
          </svg>
        </button>
        <div>
          <h1 className="outline-text-league">Last Matches</h1>
          <h3 className="no-outline-text-league">Last Matches</h3>
        </div>
        <div id="recent-matches">
          {leagueData.last_matches.map((match, index) => (
            <div key={index} className="result_card" >
              <div className="titleContainer">
                <div className="ptpLeagueText">{match.league_name}</div>
                <button className="viewMatchContainer viewmatchbtn" onClick={() => viewmatch(match.league_name)}>
                  <div className="MuiTypography-root MuiTypography-body2 viewMatchText css-e784if-MuiTypography-root">View Match</div>
                  <svg className="arrowIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowForwardIcon">
                    <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                  </svg>
                </button>
              </div>
              <div className="verses_container">
                <div className="score_number" style={{ backgroundImage: `url(${match.team1_img_url})` }}></div>
                <h1 className="verses">V</h1>
                <div className="score_number" style={{ backgroundImage: `url(${match.team2_img_url})` }}></div>
              </div>
              <div className="score_container">
                <div className="blueText">{match.score_team1}</div>
                <div className="data-last-matches">{match.match_date}</div>
                <div className="blueText">{match.score_team2}</div>
              </div>
            </div>
          ))}
        </div>
        <button className="blue-btn" onClick={() => loadmorelast()}>
          Load More
          <svg className="arrowIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowForwardIcon">
            <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
          </svg>
        </button>
      </main>
    </>
  );
};

export default League;
