import React from 'react';
import { Link, Typography } from '@mui/material';

const LinkComponent = ({ href, children, color }) => {
  return (
    <Typography variant="body1" align="right" color={color}>
      <Link href={href} color="inherit">
        {children}
      </Link>
    </Typography>
  );
};

export default LinkComponent;