import { TypographyOptions } from '@mui/material/styles/createTypography';

const typography: TypographyOptions = {
  fontFamily:
    '"Roboto Flex",-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
  fontWeightLight: 100,
  fontWeightRegular: 300,
  fontWeightMedium: 400,
  fontWeightBold: 700,
  fontWeightExtraBold: 900,
  h1: {
    fontSize: '2rem',
    fontWeight: 700,
    lineHeight: 1.17,
  },
  h2: {
    fontSize: '1.5rem',
    fontWeight: 700,
    lineHeight: 1.17,
  },
  h3: {
    fontSize: '1rem',
    fontWeight: 700,
    lineHeight: 1.17,
  },
  body1: {
    fontSize: '0.8rem',
    fontWeight: 400,
    lineHeight: 1.17,
  },
  body2: {
    fontSize: '0.7rem',
    fontWeight: 500,
    lineHeight: 1.17,
  },
};

export default typography;
