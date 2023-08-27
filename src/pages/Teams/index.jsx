import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import Footer from '../../components/Footer';
import TextFieldComponent from '../../components/Text Field/TextFieldComponent';
import Buttons from '../../components/button';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowIcon from "../../assets/ArrowIcon.webp";
import Pagination from '../../components/Pagination/pagination';
import ResponsiveAppBar from '../../components/header';
import MiniCard from '../../components/miniCard/miniCard';
import CircleContainer from '../../components/CircleContainer/CircleContainer';
import CardComponent from '../../components/Card/CardComponent';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import './index.css';

const TeamCards = ({ teamsData, activePage, cardsPerPage }) => {
  const startIndex = (activePage - 1) * cardsPerPage;
  const displayedTeams = teamsData.slice(startIndex, startIndex + cardsPerPage);

  const styles = {
    arrowIcon: {
      width: '25px',
      height: '30px',
      padding: '2px',
      color: '#3583FE',
      transform: 'rotate(-45deg)',
    },
    miniCardContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: '20px',
    },
    viewMatchContainer: {
      position: 'absolute',
      top: '0',
      right: '0',
      display: 'flex',
      alignItems: 'flex-end',
      padding: '8px',
    },
  };

  return (
    <div style={styles.miniCardContainer}>
      {displayedTeams.map(({ id, logo }) => (
        <MiniCard key={id} width={300} height={200} backgroundColor="#FFFFFF">
          <div style={styles.viewMatchContainer}>
            <Typography variant="body2" component="div">
              <a href="#">Join Now</a>
            </Typography>
            <ArrowForwardIcon style={styles.arrowIcon} />
          </div>
          <CircleContainer images={logo} />
        </MiniCard>
      ))}
    </div>
  );
};

const StayConnectedContainer = () => {
  return (
    <div className="teams-footer-container" style={{ display: 'flex' }}>
      <img src="src/assets/FooterKnife.webp" alt="Image" className="image-container" />
      <div style={{ flex: 1 }}>
        <h1 className="ninth-outline-text">STAY CONNECTED</h1>
        <h3 className="ninth-no-outline-text">STAY CONNECTED</h3>
        <p
          style={{
            fontSize: '18px',
            color: 'white',
            textAlign: 'left',
            marginTop: '-80px',
            marginLeft: '70px',
          }}
        >
          Join our community of CS:GO fans and stay connected to the action.
        </p>
      </div>
      <div style={{ flex: 1 }}>
        <p
          style={{
            fontSize: '18px',
            color: 'white',
            textAlign: 'left',
            marginTop: '-210px',
            marginLeft: '60px',
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
          style={{ width: '50%', marginLeft: '60px' }}
        />
        <p className="button" style={{ marginLeft: '430px', top: '190px' }}>
          <Buttons text="SIGN IN" iconUrl={ArrowIcon} alt="Icon" />
        </p>
      </div>
    </div>
  );
};

const Teams = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])
  const teamsData = [
    {
      id: 1,
      logo: img1,
      name: 'Fnatic',
    },
    {
      id: 2,
      logo: img2,
      name: 'Cloud 9',
    },
    {
      id: 3,
      logo: img1,
      name: 'Fnatic',
    },
    {
      id: 4,
      logo: img1,
      name: 'Fnatic',
    },
    {
      id: 5,
      logo: img2,
      name: 'Cloud 9',
    },
    {
      id: 6,
      logo: img1,
      name: 'Fnatic',
    },
    {
      id: 7,
      logo: img1,
      name: 'Fnatic',
    },
    {
      id: 8,
      logo: img2,
      name: 'Cloud 9',
    },
    {
      id: 9,
      logo: img1,
      name: 'Fnatic',
    },
    {
      id: 10,
      logo: img1,
      name: 'Fnatic',
    },
    {
      id: 11,
      logo: img2,
      name: 'Cloud 9',
    },
    {
      id: 12,
      logo: img1,
      name: 'Fnatic',
    },
  ];
  const [activePage, setActivePage] = useState(1);
  const cardsPerPage = 12;
  const totalPages = Math.ceil(teamsData.length / cardsPerPage);

  const handlePageChange = (newPage) => {
    setActivePage(newPage);
  };
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    buttonStyle: {
      width: '220px',
      height: '55px',
      borderRadius: '60px',
      background: 'linear-gradient(180deg, #FFFFFF 0%, #ACCCFF 100%)',
      color: 'black',
    },
    arrowIcon: {
      width: '25px',
      height: '30px',
      padding: '2px',
      color: '#3583FE',
      transform: 'rotate(-45deg)',
    },
    textFieldContainer: {
      marginRight: '10px',
    },
  };
  return (
    <div className="teams-app-container">
      <ResponsiveAppBar />
      <div className="teams-gradient-container"></div>
      <div className="teams-middle-gradient-container"></div>
      <h1 className="main-text">Teams</h1>
      <div className="teams-fullBG-container"></div>
      <CardComponent
        width={1140}
        height={311}
        borderRadius="10px"
        background="linear-gradient(180deg, #3583FE 0%, rgba(53, 131, 254, 0) 100%)"
      >
        <div style={styles.container}>
          <div style={styles.textFieldContainer}>
            <TextFieldComponent
              label="Search For Team Name"
              variant="outlined"
              name="email"
              placeholder="Search For Team Name"
              style={{ width: '700px' }}
            />
          </div>
          <Button style={styles.buttonStyle}>
            Search For Team <ArrowForwardIcon style={styles.arrowIcon} />
          </Button>
        </div>
      </CardComponent>
      <TeamCards teamsData={teamsData} activePage={activePage} cardsPerPage={cardsPerPage} />
      <Pagination totalPages={totalPages} activePage={activePage} onPageChange={handlePageChange} />
      <StayConnectedContainer />
      <Footer top={'440vh'} />
    </div>
  );
};

export default Teams;
