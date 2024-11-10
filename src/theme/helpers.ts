import type { Theme } from '@mui/material';
import { Breakpoint } from '@mui/system/createBreakpoints/createBreakpoints';
import { MEDIA } from '@/theme/types/enums.ts';

export const getMediaQueries = (theme: Theme) => ({
  up: (breakpoint: Breakpoint) => theme.breakpoints.up(breakpoint),
  down: (breakpoint: Breakpoint) => theme.breakpoints.down(breakpoint),
});

export const addResponsiveThemeStyles = (theme: Theme) => {
  const { up } = getMediaQueries(theme);
  theme.typography.h1 = {
    [up(MEDIA.XS)]: {
      fontSize: '2rem',
    },
  };
  theme.typography.h2 = {
    [up(MEDIA.XS)]: {
      fontSize: '1.5rem',
    },
  };
};
