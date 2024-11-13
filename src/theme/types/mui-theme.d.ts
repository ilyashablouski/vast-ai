import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    fontWeightExtraBold: number;
  }

  interface TypographyVariantsOptions {
    fontWeightExtraBold?: number;
  }

  interface Palette {
    border?: PaletteColorOptions;
  }
  interface PaletteOptions {
    border?: PaletteColorOptions;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    fontWeightExtraBold: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    stroke: true;
  }
}
