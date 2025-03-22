import { createTheme } from '@mui/material/styles';

const warmColors = {
  primary: '#f5a623', // Warm Amber
  secondary: '#ff6f61', // Warm Coral
  background: '#fff0e6', // Light beige background
  surface: '#ffe4c4', // Creamy surface color
  textPrimary: '#3a3a3a', // Dark gray text
  textSecondary: '#7f7f7f', // Light gray for secondary text
  accent: '#ffb74d', // Soft orange accent
  error: '#e57373', // Light red for errors
  success: '#81c784', // Soft green for success
  hoverEffect: 'rgba(255, 255, 255, 0.2)', // Cozy hover effect
};

const warmTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: warmColors.background,
      paper: warmColors.surface,
    },
    primary: {
      main: warmColors.primary,
    },
    secondary: {
      main: warmColors.secondary,
    },
    text: {
      primary: warmColors.textPrimary,
      secondary: warmColors.textSecondary,
    },
    error: {
      main: warmColors.error,
    },
    success: {
      main: warmColors.success,
    },
  },
  typography: {
    fontFamily: 'Georgia, serif',
    h1: {
      fontFamily: 'Merriweather, serif',
      fontSize: '3rem',
      fontWeight: 600,
      color: warmColors.primary,
    },
    h2: {
      fontFamily: 'Merriweather, serif',
      fontSize: '2.5rem',
      fontWeight: 500,
      color: warmColors.secondary,
    },
    body1: {
      fontSize: '1rem',
      color: warmColors.textPrimary,
    },
    body2: {
      fontSize: '0.875rem',
      color: warmColors.textSecondary,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          background: ${warmColors.background};
          color: ${warmColors.textPrimary};
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 'bold',
          borderRadius: '12px',
          color: warmColors.textPrimary,
          backgroundColor: warmColors.primary,
          padding: '10px 20px',
          '&:hover': {
            backgroundColor: warmColors.secondary,
            boxShadow: `0px 4px 8px ${warmColors.accent}`,
          },
        },
      },
    },
  },
});

export default warmTheme;
