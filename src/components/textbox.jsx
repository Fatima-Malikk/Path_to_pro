import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({ label }) {
  return (
    <TextField
      label={label}
      variant="outlined"
      sx={{
        position: 'absolute',
        width: '400px',
        height: '55px',
        '& label': { paddingLeft: (theme) => theme.spacing(2) },
        '& input': { paddingLeft: (theme) => theme.spacing(3.5) },
        '& fieldset': {
          paddingLeft: (theme) => theme.spacing(2.5),
          borderRadius: '30px',
          borderColor: '#FFFFFF'
        },
      }}
    />
  );
}
