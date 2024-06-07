import { Box, Button, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import logo from "../../public/logo-dark.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "../libs/zod/LoginFormSchema";
import { LoginFormSchema } from "../types/LoginFormSchema";

export function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  function onSubmit(inputData: LoginFormSchema) {
    console.log(inputData);
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "100%",
        height: "98dvh",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          width: "642px",
        }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={1.5}
      >
        <Box marginBottom={5.75}>
          <img
            src={logo}
            loading="lazy"
            width="500px"
          />
        </Box>
        <TextField
          label="Email"
          variant="filled"
          fullWidth
          size="small"
          {...register("email")}
          error={!!errors.email}
          color={!!errors.email ? "error" : "success"}
          helperText={errors.email?.message}
        />
        <TextField
          label="Senha"
          variant="filled"
          fullWidth
          type={showPassword ? "text" : "password"}
          size="small"
          {...register("password")}
          error={!!errors.password}
          color={!!errors.password ? "error" : "success"}
          helperText={errors.password?.message}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <VisibilityIcon color="action" /> : <VisibilityOffIcon />}
              </IconButton>
            ),
          }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
        >
          Entrar
        </Button>
      </Box>
    </Box>
  );
}
