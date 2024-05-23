import { IconButton, IconButtonProps } from "@mui/material";
import { forwardRef } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { green, grey } from "@mui/material/colors";
import { VisuallyHiddenInput } from "./VisuallyHiddenInput";

export const ProfileUploadButton = forwardRef<HTMLInputElement, IconButtonProps>((props, ref) => {
  return (
    <IconButton
      sx={{
        position: "absolute",
        width: 190,
        height: 190,
        bottom: -94,
        right: 648,
        background: grey[200],
        border: `2px solid ${green[800]}`,
      }}
      component="label"
      disableRipple
      {...props}
    >
      <PersonIcon sx={{ width: 100, height: 100 }} />
      <VisuallyHiddenInput
        type="file"
        ref={ref}
      />
    </IconButton>
  );
});
