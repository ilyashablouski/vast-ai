import { FC, useEffect } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import './App.css';
import { THEMES } from '@/theme/types/enums.ts';
import Layout from '@components/Layout';
import { GlobalProvider } from '@/store';
import { createTheme } from '@/theme';
import useDarkMode from '@/hooks/useDarkMode.ts';
import { initGoogleAnalytics, logPageView } from '@/utils/analytics.ts';

const createMuiTheme = (theme: THEMES) =>
  createTheme({
    direction: 'ltr',
    roundedCorners: true,
    theme,
    locale: 'en',
  });

const App: FC = () => {
  const { isDarkMode } = useDarkMode();
  const theme = createMuiTheme(isDarkMode ? THEMES.DARK : THEMES.LIGHT);

  useEffect(() => {
    const isLocalhost = window.location.hostname === 'localhost';
    const isProduction = process.env.NODE_ENV === 'production';

    if (isProduction && !isLocalhost) {
      initGoogleAnalytics();
      logPageView();
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <GlobalProvider>
        <Layout />
      </GlobalProvider>
    </ThemeProvider>
  );
};

export default App;
