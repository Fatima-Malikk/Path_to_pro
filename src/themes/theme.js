import { createTheme, ThemeProvider } from '@mui/material/styles';
import './fonts.css';

const theme = createTheme({
    palette: {
      primary: {
        main: '#2196f3',
      },
      secondary: {
        main: '#f50057',
      },
    },
    typography: {
      fontFamily: 'Neo Robotix', 
    },
  });
  
  export default theme;
  

