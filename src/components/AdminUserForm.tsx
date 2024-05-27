import {
  Box,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { PhoneMask } from "../libs/imask/PhoneMask";
import { ProfileUploadButton } from "./ProfileUploadButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

export function AdminUserForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmationPassword, setShowConfirmationPassword] = useState(false);

  return (
    <form>
      <Box
        marginBottom={3.75}
        marginTop={12.5}
      >
        <Typography
          variant="h2"
          fontSize={24}
          fontWeight={600}
          marginBottom={3.25}
        >
          Dados do usuário
        </Typography>
        <Box
          display={"flex"}
          justifyContent={"center"}
          marginBottom={3.75}
        >
          <ProfileUploadButton />
        </Box>
        <Grid
          container
          rowSpacing={2.5}
          columnSpacing={5}
        >
          <Grid
            item
            xl={6}
          >
            <TextField
              label="Nome"
              variant="filled"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid
            item
            xl={6}
          >
            <TextField
              label="Celular"
              variant="filled"
              size="small"
              fullWidth
              InputProps={{
                inputComponent: PhoneMask as any,
              }}
            />
          </Grid>
          <Grid
            item
            xl={6}
          >
            <TextField
              label="Email"
              variant="filled"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid
            item
            xl={6}
          >
            <FormControl
              fullWidth
              size="small"
              variant="filled"
            >
              <InputLabel>Cargo</InputLabel>
              <Select>
                <MenuItem value="administrador">Administrador</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            item
            xl={6}
          >
            <TextField
              label="Senha"
              variant="filled"
              size="small"
              fullWidth
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? <VisibilityIcon color="action" /> : <VisibilityOffIcon />}
                  </IconButton>
                ),
              }}
            />
          </Grid>
          <Grid
            item
            xl={6}
          >
            <TextField
              label="Senha"
              variant="filled"
              size="small"
              fullWidth
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={() => setShowConfirmationPassword((prev) => !prev)}>
                    {showConfirmationPassword ? (
                      <VisibilityIcon color="action" />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
}
