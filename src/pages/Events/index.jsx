import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EventTopImg from '../../assets/eventBg.png'
import { Icon } from '@iconify/react';
import Typography from '@mui/material/Typography';
import ResponsiveAppBar from '../../components/header';
import Pagination from '../../components/Pagination/pagination';
import SmallCircle from '../../components/SmallCircle/smallCircle';
import './index.css';
import EachLatestCard from '../../components/LatestUpdatesContainer/EachLatestCard';
import { LatestUpdatesData } from './data';


const RowContainer = () => {
  const styles = {
    rowContainer: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: '10px',
    },
    smallCircleContainer: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 10,
    },
    iconsContainer: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: '10px',
    },
    icon: {
      color: '#3583FE',
      marginRight: '5px',
      width: '24px',
      height: '24px'
    },
  };

  return (
    <div  style={styles.rowContainer}>
      <div style={styles.smallCircleContainer}>
        <SmallCircle icon="material-symbols:person" color="white" background="#3583fe" />
        <Typography>John Doe</Typography>
      </div>
      <div style={styles.iconsContainer}>
        <Icon icon="ph:heart" style={styles.icon}>
          <Typography variant="body2" color={'white'}>2</Typography>
        </Icon>
        <Icon icon="iconamoon:comment" style={styles.icon}>
          <Typography variant="body2" color={'white'}>3</Typography>
        </Icon>
      </div>
    </div>
  );
};


const Events = () => {
 
  useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])


  return (
    <div className="event-app-container">
      <div className="upper-container">
      <div className="event-gradient-container"></div>
      <div className="event-middle-gradient-container"></div>
        <div className="event-heading-container">
          <img className="event-topHeadingImage" src={EventTopImg} alt="" />
          <div class="gradient-overlay"></div>
          <h1 className="no-outline-text-event">Events</h1>
        </div>
      </div>
      <div className='event-allEventContainer'>
      {LatestUpdatesData.map((element, index)=> {
            return <div className='event-eachInnerEvent'><EachLatestCard name={element.name} likes={element.likes} comments={element.comments} text={element.text} cardImg = {element.cardImg} /></div>
          })}

      </div>
      <div className="pagination-container">
        <Pagination />
      </div>
    </div>

  );
};

export default Events;
