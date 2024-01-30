declare global {
  declare module '@mui/material/styles' {
    interface Palette {
      attention: Palette['primary'];
      muted: Palette['primary'];
      elevation: Palette['primary'];
      tertiary: Palette['primary'];
    }

    interface PaletteOptions {
      attention: PaletteOptions['primary'];
      muted: PaletteOptions['primary'];
      elevation: PaletteOptions['primary'];
      tertiary: PaletteOptions['primary'];
    }
  }
}
