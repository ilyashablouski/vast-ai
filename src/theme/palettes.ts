import { PaletteOptions } from '@mui/material/styles';

export const lightPalette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#7f6bb5',
    light: '#efe6f9',
  },
  secondary: {
    main: '#dccfff',
    contrastText: '#7f6bb5',
    dark: '#afa4bd',
    light: '#f5f1f9',
  },
  background: {
    default: '#f3eff8',
  },
  text: {
    primary: '#000000',
    secondary: 'rgba(0,0,0,0.5)',
  },
  error: {
    main: '#ff3f42',
    light: '#ffe8e8',
  },
  info: {
    main: '#6685d3',
  },
  success: {
    main: '#60b156',
  },
};

export const darkPalette: PaletteOptions = {};
