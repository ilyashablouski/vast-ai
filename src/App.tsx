// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

import { Button, createTheme, CssBaseline, ThemeProvider, Typography, useMediaQuery } from '@mui/material';

import './App.css';
import { ThemeMode } from './theme/types/enums.ts';

const muiTypography = {
  fontFamily: '"Roboto Flex", sans-serif',
  fontWeightLight: 100,
  fontWeightRegular: 300,
  fontWeightMedium: 400,
  fontWeightBold: 700,
  fontWeightExtraBold: 900,
};

const lightTheme = createTheme({
  typography: muiTypography,
  palette: {
    mode: ThemeMode.LIGHT,
    background: {
      default: '#F3EFF8',
      paper: '#f4f4f4',
    },
    text: {
      primary: '#000000',
    },
  },
});

const darkTheme = createTheme({
  typography: muiTypography,
  palette: {
    mode: ThemeMode.DARK,
    background: {
      default: '#151218',
      paper: '#1d1d1d',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

function App() {
  const isDarkMode = useMediaQuery(`(prefers-color-scheme: ${ThemeMode.DARK})`);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography variant="h1" sx={{ fontWeight: 'fontWeightExtraBold' }}>
        Vast AI
      </Typography>

      <Button
        type="button"
        sx={{ background: '#7F6BB5', borderRadius: 0 }}
        variant="contained"
        onClick={() => console.log('btn click')}
      >
        Click me
      </Button>
    </ThemeProvider>
  );
}

export default App;
