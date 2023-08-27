import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import Typography from "@mui/material/Typography";
import MiniCard from "../../components/miniCard/miniCard";
import ResponsiveAppBar from "../../components/header";
import Pagination from "../../components/Pagination/pagination";
import SmallCircle from "../../components/SmallCircle/smallCircle";
import Footer from "../../components/Footer";
import TextFieldComponent from "../../components/Text Field/TextFieldComponent";
import Buttons from "../../components/button";
import ArrowIcon from "../../assets/ArrowIcon.webp";
import "./index.css";

const StayConnectedContainer = () => {
  return (
    <div className="about-footer-container" style={{ display: "flex" }}>
      <img
        src="src/assets/FooterKnife.webp"
        alt="Image"
        className="image-container"
      />
      <div style={{ flex: 1 }}>
        <h1 className="ninth-outline-text">STAY CONNECTED</h1>
        <h3 className="ninth-no-outline-text">STAY CONNECTED</h3>
        <p
          style={{
            fontSize: "18px",
            color: "white",
            textAlign: "left",
            marginTop: "-80px",
            marginLeft: "70px",
          }}
        >
          Join our community of CS:GO fans and stay connected to the action.
        </p>
      </div>
      <div style={{ flex: 1 }}>
        <p
          style={{
            fontSize: "18px",
            color: "white",
            textAlign: "left",
            marginTop: "-210px",
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
      </div>
    </div>
  );
};

const AboutPlatformContainer = () => {
  return (
    <div className="about-about-container">
      <h5>ABOUT PLATFORM</h5>
      <h1 className="outline-text">WHERE SKILL MEETS COMPETITION</h1>
      <h3 className="no-outline-text">WHERE SKILL MEETS COMPETITION</h3>
      <p>
        Pathtopro League is Pakistan's premier CS:GO league, providing a
        platform for players to <br />
        showcase their skills and compete against the best in the country. Join
        us in the ultimate <br /> destination for competitive CS:GO players in
        Pakistan.
      </p>
    </div>
  );
};

const RoundedCards = ({
  backgroundColor,
  backgroundImage,
  children,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}) => {
  const containerStyle = {
    backgroundColor: backgroundColor || "transparent",
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
    borderRadius: "10px",
    padding: "20px",
    width: "530px",
    height: "270px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    backgroundPosition: "center",
    backgroundSize: "cover",
    marginTop: marginTop || 0,
    marginBottom: marginBottom || 0,
    marginLeft: marginLeft || 0,
    marginRight: marginRight || 0,
    position: "absolute",
  };

  return (
    <div className="rounded-container" style={containerStyle}>
      {children}
    </div>
  );
};

const About = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])
  return (
    <div className="about-app-container">
      <ResponsiveAppBar />
      <div className="about-gradient-container"></div>
      <div className="about-middle-gradient-container"></div>
      <h1 className="main-text">About Us</h1>
      <div className="about-fullBG-container"></div>

      <div className="two-column-container">
        <div className="column">
          <img src="src/assets/MaskGroup.svg" alt="image" className="picture" />
        </div>
        <div className="column">
          <h3 className="card-heading">Who are we</h3>
          <p className="card-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia <br />
            <br />
            dolor sit amet, consectetur, adipisci velit, sed quia non numquam
            eius modi tempora incidunt ut labore et dolore magnam aliquam
            quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
            ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui
            in ea voluptate velit esse quam nihil molestiae consequatur, vel
            illum qui dolorem eum fugiat quo voluptas nulla pariatur
          </p>
        </div>
      </div>

      <AboutPlatformContainer />

      <div className="mission-container">
        <div className="rounded-card">
          <RoundedCards
            backgroundImage="src/assets/mission.svg"
            marginTop="10px"
            marginBottom="20px"
            marginLeft="100px"
            marginRight="10px"
          ></RoundedCards>
        </div>

        <div className="rounded-card">
          <RoundedCards
            backgroundColor="#1976d2"
            marginTop="60px"
            marginBottom="20px"
            marginLeft="10px"
            marginRight="430px"
          >
            <h3 className="card-heading" style={{ marginLeft: '-320px' }}>Our Mission</h3>
            <p className="card-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
          </RoundedCards>
        </div>
      </div>

      <div className="vision-container">
        <div className="rounded-card">
          <RoundedCards
            backgroundImage="src/assets/vision.svg"
            marginTop="0"
            marginBottom="20px"
            marginLeft="10px"
            marginRight="430px"
          />
        </div>
        <div className="rounded-card">
          <RoundedCards
            backgroundColor="#1976d2"
            marginTop="50px"
            marginBottom="20px"
            marginLeft="100px"
            marginRight="10px"
          >
            <h3 className="card-heading" style={{ marginLeft: '-320px' }}>Our Vision</h3>
            <p className="card-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
          </RoundedCards>
        </div>
      </div>

      <StayConnectedContainer />

      <Footer top={"440vh"} />
    </div>
  );
};

export default About;
