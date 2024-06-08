import { AppBar, Toolbar, Typography } from "@mui/material";
import { ProfileStatusWidget } from "./ProfileStatusWidget";

type CustomAppBarProps = {
  title: string;
};

export function CustomAppBar({ title }: CustomAppBarProps) {
  return (
    <AppBar
      color="inherit"
      position="fixed"
      elevation={1}
      sx={{ padding: 3.75, marginBottom: 5, width: `calc(100% - 340px)`, paddingBottom: 1.87 }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h1"
          fontSize={38}
          fontWeight={600}
        >
          {title}
        </Typography>
        <ProfileStatusWidget />
      </Toolbar>
    </AppBar>
  );
}
