import { IconButton, IconButtonProps, styled } from "@mui/material";
import { forwardRef } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { green, grey } from "@mui/material/colors";
import { VisuallyHiddenInput } from "./VisuallyHiddenInput";

const CustomIconButton = styled(IconButton)(() => ({
  width: 190,
  height: 190,
  background: grey[200],
  border: `2px solid ${green[800]}`,
}));

export const ProfileUploadButton = forwardRef<HTMLInputElement, IconButtonProps>((props, ref) => {
  return (
    <CustomIconButton
      component="label"
      disableRipple
      {...props}
    >
      <PersonIcon sx={{ width: 100, height: 100 }} />
      <VisuallyHiddenInput
        type="file"
        ref={ref}
      />
    </CustomIconButton>
  );
});
