import React from 'react';
import { Card, CardContent } from '@mui/material';

const CardComponent = ({ children, height, width, background, marginBottom, marginTop, borderRadius, opacity, backgroundImage, Top, MinHeight, MinWidth, justifyContent }) => {
  const styles = {
    card: {
      width: width,
      height: height,
      minHeight: MinHeight,
      minWidth: MinWidth,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: justifyContent?justifyContent:'center',
      opacity: opacity !== undefined ? opacity : 0.9, // Set opacity if provided, otherwise default to 1
      background: background,
      padding: 2,
      position: 'relative',
      top: Top !== undefined ?Top:'75px',
      marginTop: marginTop,
      marginBottom: marginBottom,
      borderRadius: borderRadius,
      ...(backgroundImage && {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }),
    },
  };

  return (
    <Card sx={styles.card}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default CardComponent;
