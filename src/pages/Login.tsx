import { zodResolver } from "@hookform/resolvers/zod";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Box, IconButton } from "@mui/material";
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
import { Button, TextField } from "../components";

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
          placeholder="Email"
          disabled={mutation.isPending}
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          placeholder="Senha"
          disabled={mutation.isPending}
          type={showPassword ? "text" : "password"}
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button>{mutation.isPending ? <Loading /> : "Entrar"}</Button>
      </Box>
    </Box>
  );
}
