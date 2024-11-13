import { CssBaseline, ThemeProvider } from '@mui/material';

import './App.css';
import { THEMES } from '@/theme/types/enums.ts';
import Layout from '@components/Layout';
import { GlobalProvider } from '@/store';
import { createTheme } from '@/theme';
import useDarkMode from '@/hooks/useDarkMode.ts';

const createMuiTheme = (theme: THEMES) =>
  createTheme({
    direction: 'ltr',
    roundedCorners: true,
    theme,
    locale: 'en',
  });

function App() {
  const { isDarkMode } = useDarkMode();
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
