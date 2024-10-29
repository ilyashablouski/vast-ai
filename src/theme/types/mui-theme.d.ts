import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    fontWeightExtraBold: number;
  }

  interface TypographyVariantsOptions {
    fontWeightExtraBold?: number;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    fontWeightExtraBold: true;
  }
}
