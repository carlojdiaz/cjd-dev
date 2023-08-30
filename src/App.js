import Navbar from './components/Navbar.js';
import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#363636'
    },
    secondary: {
      main: '#121212'
    },
  },
  typography: {
    color: '#363636',
    h1: {
      fontSize: 44,
      fontWeight: 200,
      margin: 0,
      padding: 0
    },
    h2: {
      fontSize: 28,
      fontWeight: 200,
      fontStyle: 'normal',
      margin: 0,
      padding: 0
    },
    body1: {
      fontSize: 18,
      fontWeight: 200,
      fontStyle: 'normal',
    },
    fontFamily: 'Outfit, sans-serif'
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Outfit';
          font-style: normal;
          font-display: swap;
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  }
});


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>

      <Navbar />
    </ThemeProvider>
    </>
  );
}

export default App;
