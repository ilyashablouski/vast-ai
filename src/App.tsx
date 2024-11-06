import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';

import './App.css';
import { THEMES } from '@/theme/types/enums.ts';
import Layout from '@components/Layout';
import { GlobalProvider } from '@/store';
import { createTheme } from '@/theme';

const createMuiTheme = (theme: THEMES) =>
  createTheme({
    direction: 'ltr',
    responsiveFontSizes: true,
    roundedCorners: true,
    theme,
    locale: 'en',
  });

function App() {
  const isDarkMode = useMediaQuery(`(prefers-color-scheme: ${THEMES.DARK})`);
  const theme = createMuiTheme(isDarkMode ? THEMES.DARK : THEMES.LIGHT);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <GlobalProvider>
        <Layout />
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
