import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CCBFF', // Mana Itrika accent color
      light: '#e0f7ff',
      dark: '#3a9fb0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#3d4161', // Sidebar mariyu headers ki suitable slate color
    },
    background: {
      default: '#f4f7fe', // App motham clean look kosam light grey/blue tint
      paper: '#ffffff',
    },
    text: {
      primary: '#2b3674',
      secondary: '#a3aed0',
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Roboto", sans-serif', // Inkonchem modern ga untundi
    h4: { fontWeight: 800, color: '#2b3674' },
    h6: { fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: {
    borderRadius: 16, // Cards mariyu buttons inkonchem rounded ga (Modern UI)
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px 24px',
          boxShadow: 'none',
          '&:hover': { boxShadow: '0px 4px 12px rgba(76, 203, 255, 0.3)' },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)', // Soft shadow for professional look
        },
      },
    },
  },
});

export default theme;