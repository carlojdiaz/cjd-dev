import Navbar from './components/Navbar.js';
import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fcfcfc'
    },
    secondary: {
      main: '#121212'
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
