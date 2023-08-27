import React from 'react';
import { Divider } from '@mui/material';

const HorizontalLine = () => {
  const lineStyle = {
    width: '244px',
    height: '0.5px',
    position: 'absolute',
    top: '635px',
    left: '445px',
    border: 'none',
    color: "white"
  };

  return <Divider sx={lineStyle} />;
};

export default HorizontalLine;