import React from "react";
import ResponsiveAppBar from "../../components/header";
import NavBarBg from "../../assets/NavBarBg.png";
import NavBarFooter from "../../assets/navbarFooter.svg";
import TextFieldComponent from "../../components/Text Field/TextFieldComponent";
import "./index.css";
import { useNavigate } from "react-router-dom";
import LinkRow from "./LinkRow";
import ButtonComp from "./ButtonComp";
import IconsContainer from "./IconsContainer";
import { ABOUT, BLOGINNER, BLOGS, LEAGUE, TEAMS, EVENTS, PROFILE } from "../../constants";
import KnifeIcon from "../../assets/navbarFooterKnife.svg"

const NavBar = ({ toggle, handleOpenNavMenu }) => {
  const navigate = useNavigate();
  const handleClick = (link) => {
    navigate(link);
  }
  const styles = {
    container: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "#000B1C",
      zIndex: -1,
      height: "100vh", // Set the height to 100vh to fill the entire viewport
      overflow: "hidden", // Disable scrolling
    },
    backgroundImage: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.4,
      backgroundImage: `url(${NavBarBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      zIndex: -1,
    },
    topContainer: {
      width: "100%",
      height: "400px",
      background:
        "linear-gradient(180deg, rgba(0, 11, 28, 0) 0%, #000B1C 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    bottomContainer: {
      width: "100%",
      height: "300px",
      position: "relative",
      justifyContent: "space-between",
      paddingLeft: "50px",
      paddingRight: "50px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      paddingTop: "20px",
    },
    navbarOutlineText: {
      position: "absolute",
      width: "907px",
      height: "153px",
      left: "calc(50% - 907px / 2 - 400px)",
      fontFamily: "Neo Robotix",
      fontStyle: "italic",
      fontWeight: "400",
      fontSize: "100px",
      lineHeight: "100px",
      textAlign: "center",
      top: "25px",
      whiteSpace: "nowrap",
      WebkitTextFillColor: "transparent",
      WebkitTextStroke: "1px rgba(255, 255, 255, 0.2)",
    },
    navbarNoOutlineText: {
      position: "absolute",
      width: "500px",
      height: "153px",
      left: "calc(50% - 907px / 2 - 230px)",
      fontFamily: "Neo Robotix",
      fontStyle: "italic",
      fontWeight: "400",
      fontSize: "65px",
      lineHeight: "100px",
      textAlign: "center",
      letterSpacing: "0.065rem",
      top: "30px",
      whiteSpace: "nowrap",
      color: "white",
    },
    textfieldContainer: {
      display: "flex",
      alignItems: "center",
      marginTop: "230px",
      marginLeft: "90px",
      marginBottom: "20px", // Add margin-bottom for the gap
    },
    buttonIconContainer: {
      display: "flex",
      alignItems: "center",
      marginTop: "20px",
    },
    linksContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: "-120px",
    },
    flexContainer: {
      display: "flex",
      alignItems: "center",
      // marginBottom: "10px", // Add margin-bottom for the gap
      width: screen.width > 1300 ? '75%' : null,
      margin: 'auto',
    },
    linkRowsContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center", // Align the link texts and separators to the left
      marginTop: "10px",
      zIndex: 1,
    },

    bottomContianerBG: {
      // backgroundImage: `url(${NavBarFooter})`,
      marginLeft: "-55px",
      width: "120%",
      height: "60vh", // Adjust the height to fill the remaining space
      top: "0px", // Adjust the top position to align with the topContainer height
      position: "relative",
    },
    BottomImg: {
      height: "280px",
      width: "280px",
      marginLeft: "auto",
      marginRight: "140px",
      marginTop: "-80px",
      marginBottom: "-200px",
    },
  };

  const linkRows = [
    [
      {
        name: "home",
        url: `/`,
      },
      {
        name: "blogs",
        url: `${BLOGS}`,
      },
      {
        name: "league",
        url: `${LEAGUE}`,
      },
      {
        name: "profile",
        url: `${PROFILE}`,
      },
    ],
    [
      {
        name: "about",
        url: `${ABOUT}`,
      },
      {
        name: "teams",
        url: `${TEAMS}`,
      },
      {
        name: "events",
        url: `${EVENTS}`,
      },
      {
        name: "support",
        url: `/`,
      },
    ]
  ]


  const getLinkUrl = (link) => {
    switch (link) {
      case "home":
        return "/";
      case "blogs":
        return "/blog";
      case "league":
        return "/league";
      case "profile":
        return "/profile";
      case "about":
        return "/about";
      case "teams":
        return "/teams";
      case "events":
        return "/events";
      case "support":
        return "/support";
      default:
        return "/";
    }
  };

  return (
    <>
      {toggle ? (
        <div>
          <div style={styles.linkRowsContainer}>
            {linkRows.slice(0, 4).map((links, index) => (
              <LinkRow key={index} links={links} handleOpenNavMenu={handleOpenNavMenu} />
            ))}
          </div>
          <div style={styles.linkRowsContainer}>
            {linkRows.slice(4).map((links, index) => (
              <LinkRow key={index} links={links} handleOpenNavMenu={handleOpenNavMenu} />
            ))}
          </div>
          <div style={styles.container} />
          <div style={styles.backgroundImage} />
          {/* <div style={styles.topContainer}>
            <ResponsiveAppBar />
          </div> */}

          {/* <div style={styles.linksContainer}>
            <div style={styles.linkRowsContainer}>
              {linkRows.slice(0, 4).map((links, index) => (
                <LinkRow key={index} links={links} onClick = {() => {handleClick(getLinkUrl(links))}}/>
              ))}
            </div>
            <div style={styles.linkRowsContainer}>
              {linkRows.slice(4).map((links, index) => (
                <LinkRow key={index} links={links}  onClick = {() => {handleClick(getLinkUrl(links))}} />
              ))}
            </div>
          </div> */}

          <div style={styles.bottomContianerBG}>
            <div style={styles.flexContainer}>
              <h1 style={styles.navbarOutlineText}>STAY CONNECTED</h1>
              <h3 style={styles.navbarNoOutlineText}>STAY CONNECTED</h3>
              <img
                src={KnifeIcon}
                alt="Image"
                style={styles.BottomImg}
              />
            </div>
            <div style={styles.flexContainer}>
              <div style={styles.textfieldContainer}>
                <TextFieldComponent
                  label="Email"
                  variant="outlined"
                  name="email"
                  style={{
                    width: "342px",
                    height: "55px",
                    marginRight: "20px",
                  }}
                />
                <ButtonComp />
              </div>
              <IconsContainer />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NavBar;
