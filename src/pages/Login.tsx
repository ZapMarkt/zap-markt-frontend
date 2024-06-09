import { zodResolver } from "@hookform/resolvers/zod";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Box, Button, IconButton, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../../public/logo-dark.png";
import { loginFormSchema } from "../libs/zod/LoginFormSchema";
import { adminService } from "../services/AdminService";
import { LoginFormSchema } from "../types/LoginFormSchema";
import { useUserSessionStore } from "../stores/userSessionStore";
import { useNavigate } from "react-router-dom";
import { Loading } from "../common/components/Loading";

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const setUserSession = useUserSessionStore((state) => state.setUserSession);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  const mutation = useMutation({
    mutationFn: adminService.authenticate,
    onSuccess: (data) => {
      localStorage.setItem("userSession", data.uSession);
      setUserSession(data.uSession);
      navigate("/");
    },
  });

  async function onSubmit(data: LoginFormSchema) {
    await mutation.mutateAsync(data);
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
          variant="outlined"
          fullWidth
          disabled={mutation.isPending}
          {...register("email")}
          error={!!errors.email}
          color={!!errors.email ? "error" : "primary"}
          helperText={errors.email?.message}
        />
        <TextField
          label="Senha"
          variant="outlined"
          fullWidth
          disabled={mutation.isPending}
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
        <Button
          variant="contained"
          color="primary"
          type="submit"
          size="large"
          fullWidth
        >
          {mutation.isPending ? <Loading /> : "Entrar"}
        </Button>
      </Box>
    </Box>
  );
}
