import { PaletteOptions } from '@mui/material/styles';

const commonPalette: PaletteOptions = {
  primary: {
    main: '#7f6bb5',
    light: '#efe6f9',
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

export const lightPalette: PaletteOptions = {
  mode: 'light',
  secondary: {
    main: '#dccfff',
    contrastText: '#7f6bb5',
    dark: '#afa4bd',
    light: '#f5f1f9',
  },
  background: {
    default: '#f3eff8',
    paper: '#ffffff',
  },
  text: {
    primary: '#000000',
    secondary: 'rgba(0,0,0,0.5)',
  },
  ...commonPalette,
};

export const darkPalette: PaletteOptions = {
  mode: 'dark',
  secondary: {
    main: '#150d1e',
    contrastText: '#dccfff',
    dark: '#231735',
    light: '#28222e',
  },
  background: {
    default: '#151218',
    paper: '#1b1521',
  },
  text: {
    primary: '#ffffff',
    secondary: 'rgba(255,255,255,0.5)',
  },
  ...commonPalette,
};
