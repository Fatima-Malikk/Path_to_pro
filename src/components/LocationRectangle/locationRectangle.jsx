import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Icon } from '@iconify/react';

const Rectangle = ({ icon, text }) => {
  const styles = {
    rectangle: {
      width: 137,
      height: 30,
      borderRadius: 60,
      background: '#3583FE',
      marginLeft: 10,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingLeft: 10,
    },
    smallCircle2: {
      width: 20,
      height: 20,
      marginRight: 5,
      borderRadius: '50%',
      background: '#F0F0F0',
    },
  };

  return (
    <div style={styles.rectangle}>
      <Avatar style={styles.smallCircle2}>
        <Icon icon={icon} color="black" />
      </Avatar>
      <Typography variant="body2" color="white">
        {text}
      </Typography>
    </div>
  );
};

export default Rectangle;