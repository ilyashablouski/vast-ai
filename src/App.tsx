import { FC, useEffect } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import './App.css';
import { THEMES } from '@/theme/types/enums.ts';
import Layout from '@components/Layout';
import { GlobalProvider } from '@/store';
import { createTheme } from '@/theme';
import useDarkMode from '@/hooks/useDarkMode.ts';
import { initGoogleAnalytics, logPageViewGA } from '@/utils/google.analytics.ts';
import { initFacebookPixel, logPageViewFAB } from '@/utils/facebook.pixel.ts';
import { isLocalhost, isProduction } from '@/common/vars.ts';

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
    if (isProduction && !isLocalhost) {
      initGoogleAnalytics();
      logPageViewGA();

      initFacebookPixel();
      logPageViewFAB();
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
