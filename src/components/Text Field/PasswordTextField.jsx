import React, { useState } from 'react';
import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const PasswordTextFieldComponent = ({ label, variant, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const styles = {
    textField: {
      marginTop: 1,
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
      type={showPassword ? 'text' : 'password'}
      fullWidth
      sx={styles.textField}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={togglePasswordVisibility} edge="end">
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default PasswordTextFieldComponent;