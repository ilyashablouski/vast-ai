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
          fontSize: '0.875rem',
          fontWeight: '900',
          lineHeight: '16.41px',
          textTransform: 'none',
          fontStyle: 'normal',
          boxSizing: 'border-box',
        },
        sizeSmall: {
          height: '32px',
        },
        sizeMedium: {
          height: '40px',
          minWidth: '96px',
        },
        sizeLarge: {
          height: '56px',
        },
      },
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
          color: theme.palette.text.secondary,
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
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          textAlign: 'right',
          marginRight: 0,
          marginTop: '4px',
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
            backgroundColor:
              theme.palette.mode === 'dark'
                ? darken(theme.palette.secondary.light, 0.04)
                : darken(theme.palette.secondary.contrastText, 0.04),
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
    MuiBackdrop: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(21, 18, 24, 0.72)' : 'rgba(243,239,248,0.72)',
          backdropFilter: 'blur(16px)',
        }),
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: () => ({
          '& .MuiSnackbarContent-root': {
            padding: '0px',
            display: 'flex',
            minWidth: '100%',
            boxShadow: 'none',
          },
        }),
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(0, 2),
          },
          [theme.breakpoints.up('md')]: {
            padding: theme.spacing(0, 3),
          },
        }),
      },
    },
  },
  shadows: Array(25).fill('none') as Shadows,
  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 768,
      lg: 1080,
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

  return theme;
};
