declare global {
  declare module '@mui/material/styles' {
    interface Palette {
      attention: Palette['primary2'];
      muted: Palette['primary2'];
      elevation: Palette['primary2'];
      tertiary: Palette['primary2'];
    }

    interface PaletteOptions {
      attention: PaletteOptions['primary'];
      muted: PaletteOptions['primary'];
      elevation: PaletteOptions['primary'];
      tertiary: PaletteOptions['primary'];
    }
  }
}
