import { useMediaQuery, useTheme } from '@mui/material';

const useMediaQueries = (): { isMobile: boolean; isTablet: boolean; isLaptop: boolean } => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLaptop = useMediaQuery(theme.breakpoints.up('md'));

  return { isMobile, isTablet, isLaptop };
};

export default useMediaQueries;
