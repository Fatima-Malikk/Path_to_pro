import React from 'react';
import Rectangle from '../LocationRectangle/locationRectangle';
import SmallCircle from '../SmallCircle/smallCircle';

const RowContainer = ({ rectangleText }) => {
  const styles = {
    rowContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: '10px',
    },
    smallCircleContainer: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 10,
    },
  };

  return (
    <div style={styles.rowContainer}>
      <div style={styles.smallCircleContainer}>
        <SmallCircle icon="mdi:facebook" color="#3583fe" />
        <SmallCircle icon="mdi:twitch" color="#3583fe" />
        <SmallCircle icon="mdi:youtube" color="#3583fe" />
        <Rectangle icon="mdi:map-marker" text={rectangleText} />
      </div>
    </div>
  );
};

export default RowContainer;