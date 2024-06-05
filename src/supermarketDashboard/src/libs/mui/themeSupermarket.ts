import '@fontsource/inter/600.css';
import { createTheme } from '@mui/material';
import { common } from '@mui/material/colors';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    light: true;
    heavy: true;
  }
  interface ButtonPropsSizeOverrides {
    lg: true;
  }
}

const primaryColor = '#F28608';
const primaryColorLight = '#FFBC6E';
const secondaryColor = '#F2790B';
const tertiaryColor = '#FFDDB1';

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: '#110B0A',
      dark: secondaryColor, // altera a cor do hover
    },
    secondary: {
      main: secondaryColor,
      dark: tertiaryColor,
      contrastText: tertiaryColor,
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: secondaryColor,
          padding: '12px 16px',
          fontSize: '14px',
          color: common.white,
          fontFamily: 'Inter, sans-serif',
          fontWeight: 500,
          letterSpacing: '0.05em',
        },
        arrow: {
          color: secondaryColor,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: '#EAECEA',
          boxSizing: 'border-box',
          paddingBottom: '40px',
          overflow: 'hidden',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: '#EFEFEF',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          padding: '17px 16px 17px 12px',
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          background: 'red',
          color: '#909090',
        },
      },
    },
    // Estilização das tabs
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          gap: '16px',
        },
        indicator: {
          background: '#110B0A',
          height: '2px',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter, sans-serif',
          fontSize: '1.5rem',
          fontWeight: 400,
          color: '#909090',
          textTransform: 'initial',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          transition: '0.3s',
          textTransform: 'none',
          boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.05)',
        },
      },
      variants: [
        // Mui button size variants
        {
          props: { size: 'lg' },
          style: {
            padding: '18px 22px',
            fontSize: '18px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '264px',
            maxHeight: '58px',
          },
        },
        {
          props: { variant: 'light' },
          style: {
            color: primaryColor,
            background: primaryColorLight,
            '&: hover': {
              background: primaryColorLight,
              opacity: '75%',
            },
          },
        },
        {
          props: { variant: 'heavy' },
          style: {
            color: '#ffffff',
            background: primaryColor,
            '&: hover': {
              background: primaryColor,
              opacity: '75%',
            },
          },
        },
      ],
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: '24px 24px 0 24px',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          background: tertiaryColor,
          color: secondaryColor,
          borderLeft: '4px solid transparent',
          padding: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: '0.2s',
          boxSizing: 'border-box',
          '&:hover': {
            borderColor: secondaryColor,
            background: tertiaryColor,
          },
          '&:hover .MuiSvgIcon-root': {
            color: secondaryColor,
            transition: 'color 0.1s',
          },
        },
      },
    },
  },
});
