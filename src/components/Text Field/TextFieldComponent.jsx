import React from 'react';
import { TextField } from '@mui/material';

const TextFieldComponent = ({ label, variant, type, ...props }) => {
  const styles = {
    textField: {
      marginTop: 2,
      marginBottom: 1,
      '& .MuiOutlinedInput-root': {
        borderRadius: '30px',
        '& fieldset': {
          borderColor: 'white',
        },
      },
      '& .MuiFormLabel-root': {
        color: 'white',
        paddingLeft: '30px',
      },
    },
  };

  return (
    <TextField
      label={label}
      variant={variant}
      type={type}
      fullWidth
      sx={styles.textField}
      {...props}
    />
  );
};

export default TextFieldComponent;