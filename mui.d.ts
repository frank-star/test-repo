declare global {
  declare module '@mui/material/styles' {
    interface Palette {
      attention: Palette['primary3'];
      muted: Palette['primary2'];
      elevation: Palette['primary2'];
      tertiary: Palette['primary2'];
    }
  }
}
