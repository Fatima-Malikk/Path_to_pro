import React from 'react';
import { Typography } from "@mui/material";

const CircleComponent = ({ image }) => {
  const styles = {
    circle: {
      width: 80,
      height: 80,
      borderRadius: '50%',
      marginLeft: '20px',
      marginRight: '30px',
      boxShadow: '0px 4px 10px 0px #00000026',
      backgroundColor: '#F0F0F0',
      backgroundImage: image ? `url(${image})` : 'none',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
  };

  return <div style={styles.circle} />;
};

const CircleContainer = ({ images }) => {
  const styles = {
    circleContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 10,
      marginBottom: '20px',
    },
    blueText: {
      color: '#3583FE',
      fontSize: 40,
      fontWeight: 'bold',
      marginTop: '20px',
    },
    textContainer: {
      display: 'flex',
      alignItems: 'center',
    },
  };

  return (
    <div style={styles.circleContainer}>
      {images.length === 1 && (
        <React.Fragment>
          <CircleComponent image={images[0]} />
          <div style={styles.textContainer}>
            <Typography variant="h1" style={styles.blueText}>
              Text Container
            </Typography>
          </div>
        </React.Fragment>
      )}
      {images.length === 2 && (
        <React.Fragment>
          <CircleComponent image={images[0]} />
          <Typography variant="h1" style={styles.blueText}>
            V
          </Typography>
          <CircleComponent image={images[1]} />
        </React.Fragment>
      )}
    </div>
  );
};

export default CircleContainer;