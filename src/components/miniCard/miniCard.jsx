import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const MiniCard = ({ width, height, backgroundColor, backgroundImage, children }) => {
  const styles = {
    card: {
      width: width || 312,
      height: height || 221,
      backgroundColor: backgroundColor || '#FFFFFF',
      backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      clipPath: 'polygon(0% 0%, 95% 0%, 100% 15%, 100% 100%, 5% 100%, 0% 85%)',
    },
    cardContent: {
      position: 'relative',
    },
  };

  return (
    <Card style={styles.card}>
      <CardContent style={styles.cardContent}>
        {children}
      </CardContent>
    </Card>
  );
};

export default MiniCard;
