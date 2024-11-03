// colors.ts
export const colors = {
  primary: {
    50: '#f1f6f3',
    100: '#e1ebe4',
    200: '#c5d7cc',
    300: '#9fc0ae',
    400: '#7ca48f',
    500: '#5f8873',
    600: '#4c6e5c',
    700: '#405a4c',
    800: '#364a3f',
    900: '#2d3d34',
  },
  accent: {
    50: '#fdf4f0',
    100: '#f9e5d9',
    200: '#f3c7b1',
    300: '#eba282',
    400: '#e37a52',
    500: '#d85a2c',
    600: '#bc4621',
    700: '#9c391d',
    800: '#82311d',
    900: '#6c2b1b',
  }
} as const;

// Semantic color assignments
export const theme = {
  // Background colors
  background: {
    primary: colors.primary[50],
    secondary: colors.primary[100],
    tertiary: colors.primary[200],
  },
  
  // Text colors
  text: {
    primary: colors.primary[900],
    secondary: colors.primary[700],
    tertiary: colors.primary[600],
    onDark: colors.primary[50],
  },
  
  // Interactive elements
  button: {
    primary: colors.accent[500],
    primaryHover: colors.accent[600],
    secondary: colors.primary[600],
    secondaryHover: colors.primary[700],
  },
  
  // Borders and dividers
  border: {
    light: colors.primary[200],
    default: colors.primary[300],
    dark: colors.primary[400],
  },
  
  // Status colors
  status: {
    success: '#2E8B57',  // Forest green
    error: colors.accent[600],
    warning: colors.accent[400],
    info: colors.primary[400],
  }
} as const;

// Type definitions for better TypeScript support
type ColorScale = typeof colors.primary;
type ThemeConfig = typeof theme;

export type {
  ColorScale,
  ThemeConfig,
};
