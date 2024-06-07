import { Box, Button, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { InputHTMLAttributes, forwardRef } from "react";
import { VisuallyHiddenInput } from "./VisuallyHiddenInput";

export const BackgroundUploadButton = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <Button
      component="label"
      variant="dashed"
      fullWidth
      disableRipple
      sx={{
        height: 250,
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={1.5}
      >
        <CloudUploadIcon color="action" />
        <Box textAlign={"center"}>
          <Typography
            variant="caption"
            fontSize={14}
            fontWeight={600}
            display={"block"}
          >
            Clique para fazer um upload
          </Typography>
          <Typography
            variant="caption"
            fontSize={12}
          >
            Arquivos aceitos PNG e JPG (5mb máx)
          </Typography>
        </Box>
      </Box>
      <VisuallyHiddenInput
        type="file"
        ref={ref}
        {...props}
      />
    </Button>
  );
});
