import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Icon } from '@iconify/react';

const SmallCircle = ({ icon, color, background}) => {
  const styles = {
    smallCircle: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: background,
      marginRight: 5,
    },
    icon: {
      fontSize: 20,
      color: color,
    },
  };

  return (
    <Avatar style={styles.smallCircle}>
      <Icon icon={icon} style={styles.icon} />
    </Avatar>
  );
};

export default SmallCircle;