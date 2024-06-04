import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { ProfileUploadButton } from "./ProfileUploadButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useAdminUserFormContainer } from "../hooks/useAdminUserFormContainer";

export function AdminUserForm() {
  const {
    showPassword,
    setShowPassword,
    setRole,
    register,
    handleSubmit,
    errors,
    query,
    mutation,
    onSubmit,
  } = useAdminUserFormContainer();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            marginBottom={3.75}
          >
            <Grid
              item
              xl={6}
            >
              <TextField
                label="Nome"
                variant="outlined"
                fullWidth
                {...register("name")}
                error={!!errors.name}
                color={!!errors.name ? "error" : "primary"}
                helperText={errors.name?.message}
              />
            </Grid>
            <Grid
              item
              xl={6}
            >
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                {...register("email")}
                error={!!errors.email}
                color={!!errors.email ? "error" : "primary"}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid
              item
              xl={6}
            >
              <FormControl
                fullWidth
                variant="outlined"
              >
                <InputLabel>Cargo</InputLabel>
                <Select
                  label="Cargo"
                  onChange={(ev) => setRole(ev.target.value as number)}
                >
                  {query.data?.map((role) => (
                    <MenuItem
                      key={role.id}
                      value={role.id}
                    >
                      {role.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xl={6}
            >
              <TextField
                label="Senha"
                variant="outlined"
                fullWidth
                type={showPassword ? "text" : "password"}
                {...register("password")}
                error={!!errors.password}
                color={!!errors.password ? "error" : "primary"}
                helperText={errors.password?.message}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                      {showPassword ? <VisibilityIcon color="action" /> : <VisibilityOffIcon />}
                    </IconButton>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
          >
            Salvar
          </Button>
        </Box>
      </form>
      <Backdrop
        open={mutation.isPending}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <CircularProgress />
      </Backdrop>
    </>
  );
}
