import React, { useEffect } from 'react';
import CircleContainer from '../../components/CircleContainer/CircleContainer';
import RowContainer from '../../components/RowContainer/RowContainer';
import MiniCard from '../../components/miniCard/miniCard';
import { Typography } from "@mui/material";
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';

const MatchRoom = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}, [])
  const matchesData = [
    {
      id: 1,
      images: [img1, img2],
      matchDate: '21/10/1999',
      matchLocation: 'Location A',
    },
    {
      id: 2,
      images: [img1, img2],
      matchDate: '21/10/1999',
      matchLocation: 'Location B',
    },
    {
      id: 3,
      images: [img1, img2],
      matchDate: '21/10/1999',
      matchLocation: 'Location C',
    },
    {
      id: 4,
      images: [img1, img2],
      matchDate: '22/10/1999',
      matchLocation: 'Location D',
    },
    {
      id: 5,
      images: [img1, img2],
      matchDate: '22/10/1999',
      matchLocation: 'Location E',
    },
    {
      id: 6,
      images: [img1, img2],
      matchDate: '22/10/1999',
      matchLocation: 'Location F',
    },
  ];
  const styles = {
    miniCardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '10px',
      marginTop: '-100px',
      margin: '0 80px',
    },
    viewMatchText: {
      fontFamily: 'Poppins',
      fontSize: '15px',
      fontWeight: 400,
      letterSpacing: '0.02em',
    },
    blueText: {
      color: '#3583FE',
      fontSize: 36,
      fontWeight: 'bold',
      marginTop: '10px',
      marginLeft: '50px',
      marginRight: '50px',
      fontFamily: 'Poppins',
    },
    data: {
      fontSize: 14,
      fontFamily: 'Poppins',
    },
    titleContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  };

  return (
    <div style={styles.miniCardContainer}>
      {matchesData.map((match) => (
        <MiniCard key={match.id} width={300} height={200} backgroundColor="#FFFFFF">
          <div style={styles.titleContainer}>
            <Typography variant="body2" component="div" style={styles.ptpLeagueText}>
              Grand Final
            </Typography>
            <div style={styles.viewMatchContainer}>
              <Typography variant="body2" component="div" style={styles.viewMatchText}>
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
};

export default MatchRoom;
