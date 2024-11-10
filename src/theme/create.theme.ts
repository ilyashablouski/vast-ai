import merge from 'lodash/merge';
import {
  createTheme as createThemeMUI,
  darken,
  responsiveFontSizes,
  ThemeOptions,
} from '@mui/material/styles';
import type { Direction, Theme } from '@mui/material';
import { enUS, ruRU } from '@mui/material/locale';
import { Shadows } from '@mui/material/styles/shadows';

import { THEMES } from './types/enums';
import { darkPalette, lightPalette } from '@/theme/palettes.ts';
import typography from '@/theme/typography.ts';
import { addResponsiveThemeStyles } from '@/theme/helpers.ts';

interface ThemeConfig {
  theme: THEMES;
  direction?: Direction;
  responsiveFontSizes?: boolean;
  roundedCorners?: boolean;
  locale?: string;
}

const baseOptions: ThemeOptions = {
  direction: 'ltr',
  typography,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontStyle: 'normal',
          boxSizing: 'border-box',
        },
        sizeSmall: {
          lineHeight: '16.41px',
          fontSize: '0.875rem',
          fontWeight: '900',
          height: '32px',
        },
        sizeMedium: {
          lineHeight: '16.41px',
          fontSize: '0.875rem',
          fontWeight: '900',
          height: '40px',
        },
        sizeLarge: {
          lineHeight: '16.41px',
          fontSize: '0.875rem',
          fontWeight: '900',
          height: '56px',
        },
      },
      variants: [
        {
          props: { variant: 'stroke', color: 'info' },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.info.main,
            color: theme.palette.secondary.contrastText,
            '.MuiLoadingButton-loadingIndicatorStart': {
              left: '14px',
            },
            borderColor: theme.palette.info.main,
            '.MuiSvgIcon-root': {
              color: theme.palette.primary.main,
            },
            '&:hover': {
              backgroundColor: theme.palette.info.dark,
              borderColor: theme.palette.primary.main,
            },
          }),
        },
        {
          props: { variant: 'outlined' },
          style: () => {
            return {
              '.MuiLoadingButton-loadingIndicatorStart': {
                left: '14px',
              },
            };
          },
        },
        {
          props: { variant: 'contained', color: 'primary' },
          style: ({ theme }) => {
            return {
              boxShadow: '0px 0px 4px rgba(92, 86, 218, 0.3)',
              '.MuiLoadingButton-loadingIndicatorStart': {
                left: '14px',
              },
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
                boxShadow: '0px 0px 4px rgba(63, 60, 147, 0.3)',
              },
              '&:disabled': {
                backgroundColor: theme.palette.primary.light,
                borderColor: theme.palette.primary.light,
                color: theme.palette.primary.contrastText,
                boxShadow: '0px 0px 4px rgba(214, 212, 246, 0.3)',
              },
            };
          },
        },
      ],
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          height: '1.4375rem',
          paddingTop: '13.5px',
          paddingBottom: '13.5px',
        },
        inputSizeSmall: {
          height: '1.4375rem',
          paddingTop: '8.5px',
          paddingBottom: '8.5px',
        },
        notchedOutline: {
          legend: {
            fontSize: '0.85em',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.secondary.main,
          fontWeight: 400,
          fontSize: '0.875rem',
          lineHeight: '19px',
        }),
        outlined: {
          transform: 'translate(14px, 15px) scale(1)',
          '&.MuiInputLabel-sizeSmall': {
            transform: 'translate(14px, 11px) scale(1)',
          },
          '&.MuiInputLabel-shrink': {
            transform: 'translate(14px, -9px) scale(0.85)',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          fontSize: '0.875rem',
          lineHeight: '19px',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: '1px solid',
          padding: theme.spacing(1, 2),
          '.MuiAlert-icon': {
            margin: 'auto',
            paddingRight: theme.spacing(1),
          },
          '.MuiAlert-message': {
            display: 'flex',
            alignItems: 'center',
            fontWeight: '600',
          },
        }),
      },
      variants: [
        {
          props: { severity: 'error' },
          style: ({ theme }) => ({
            color: theme.palette.error.main,
            backgroundColor: theme.palette.error.light,
            '.MuiSvgIcon-root': {
              color: theme.palette.error.main,
            },
          }),
        },
        {
          props: { severity: 'success' },
          style: ({ theme }) => ({
            color: theme.palette.success.main,
            backgroundColor: theme.palette.success.light,
            '.MuiSvgIcon-root': {
              color: theme.palette.success.main,
            },
          }),
        },
      ],
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: () => ({
          fontSize: '0.875rem',
          fontWeight: '700',
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&:hover': {
            backgroundColor: darken(theme.palette.primary.contrastText, 0.04),
          },
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ ownerState, theme }) => {
          if (ownerState.color) {
            return null;
          }
          if (ownerState.variant && ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(ownerState.variant)) {
            return {
              color: theme.palette.text.primary,
            };
          }
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: 'inherit',
          width: 'initial',
          height: 'initial',
        },
      },
    },
  },
  shadows: Array(25).fill('none') as Shadows,
  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 768,
      lg: 1032,
      xl: 1440,
    },
  },
};

const themesOptions: Record<THEMES, ThemeOptions> = {
  [THEMES.LIGHT]: {
    palette: lightPalette,
  },
  [THEMES.DARK]: {
    palette: darkPalette,
  },
};

export const createTheme = (config: ThemeConfig = { theme: THEMES.LIGHT }): Theme => {
  let themeOptions = themesOptions[config.theme];

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    themeOptions = themesOptions[THEMES.LIGHT];
  }

  let theme = createThemeMUI(
    merge(
      {},
      baseOptions,
      themeOptions,
      {
        ...(config.roundedCorners && {
          shape: {
            borderRadius: 2,
          },
        }),
      },
      {
        direction: config.direction,
      },
      config.locale === 'ru' ? ruRU : enUS,
    ),
  );

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  addResponsiveThemeStyles(theme);

  return theme;
};
