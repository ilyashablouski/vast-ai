import { useMediaQuery } from '@mui/material';
import { THEMES } from '@/theme';

const useDarkMode = (): { isDarkMode: boolean } => {
  const isDarkMode = useMediaQuery(`(prefers-color-scheme: ${THEMES.DARK})`);

  return { isDarkMode };
};

export default useDarkMode;
