import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import '@fontsource/lato';
import '@fontsource/zilla-slab';

// Create a theme instance
const theme = createTheme({
  typography: {
    fontFamily: 'Lato, Arial, sans-serif',
    body1: {
      fontFamily: 'Lato, Arial, sans-serif',
      fontWeight: 400,
    },
    h1: {
      fontFamily: 'Zilla Slab, serif',
      fontWeight:"normal"
    },
    h2: {
      fontFamily: 'Zilla Slab, serif',
    },
    h3: {
      fontFamily: 'Zilla Slab, serif',
    },
    h4: {
      fontFamily: 'Zilla Slab, serif',
    },
    h5:{
      fontFamily: 'Zilla Slab, serif',
    },
    p:{
      fontFamily: 'Lato, Arial, sans-serif',
      fontSize: "1.125rem",
      color:"#001D26",
      fontWeight:"400"

    }
  },
  palette: {
    primary: {
      main: '#001D26'
    },
    secondary: {
      main: '#0A0B09'
    },
    green: {
      main: '#1CEAA0'
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
