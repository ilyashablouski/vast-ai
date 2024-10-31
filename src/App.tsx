import { createTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';

import './App.css';
import { ThemeMode } from '@/theme/types/enums.ts';
import Layout from '@components/Layout';

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
      <Layout />
    </ThemeProvider>
  );
}

export default App;
