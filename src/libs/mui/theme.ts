import { createTheme } from "@mui/material";
import { green, grey } from "@mui/material/colors";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}

declare module "@mui/material/ListItemIcon" {
  interface ListItemIconPropsVariantOverrides {
    gray: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { variant: "dashed" },
          style: {
            border: `2px dashed ${green[800]}`,
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "filled" &&
            ownerState.color === "success" && {
              backgroundColor: green[50],
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }),
          ...(ownerState.variant === "outlined" && {
            backgroundColor: grey[300],
          }),
        }),
      },
    },
    MuiListItemIcon: {
      variants: [
        {
          props: { color: "gray" },
          style: {
            color: grey[500],
          },
        },
      ],
    },
  },
});
