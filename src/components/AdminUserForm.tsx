import {
  Backdrop,
  Box,
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { ProfileUploadButton } from "./ProfileUploadButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useAdminUserFormContainer } from "../hooks/useAdminUserFormContainer";
import { TextField } from "./TextField";
import { Button } from "./Button";

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
                placeholder="Nome"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </Grid>
            <Grid
              item
              xl={6}
            >
              <TextField
                placeholder="Email"
                {...register("email")}
                error={!!errors.email}
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
                placeholder="Senha"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </Grid>
          </Grid>
          <Button>Salvar</Button>
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
