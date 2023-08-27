import React from 'react';
import cardLogo from '../../assets/cardLogo.webp';

const LogoComponent = () => {
  const styles = {
    logo: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: 'auto',
      backgroundImage: `url(${cardLogo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  };

  return <div style={styles.logo} />;
};

export default LogoComponent;
