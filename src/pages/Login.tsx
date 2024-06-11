import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { adminService } from "../services/AdminService";
import { useUserSessionStore } from "../stores/UserSessionStore";
import { useNavigate } from "react-router-dom";
import { Loading } from "../common/components/Loading";
import { rolesService } from "@/services/RolesServices";
import { useCurrentUserStore } from "@/stores/CurrentUserStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import logo from "../../public/zap-markt-degrad-logo.svg";

export const schema = z.object({
  email: z
    .string()
    .nonempty({ message: "Este campo é obrigatório. Por favor, preencha-o antes de continuar." })
    .email({ message: "Por favor, insira um endereço de email válido." }),
  password: z
    .string()
    .nonempty({ message: "Este campo é obrigatório. Por favor, preencha-o antes de continuar." }),
});

type Schema = z.infer<typeof schema>;

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const setUserSession = useUserSessionStore((state) => state.setUserSession);
  const setCurrentUser = useCurrentUserStore((state) => state.setCurrentUser);
  const navigate = useNavigate();

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const mutation = useMutation({
    mutationFn: adminService.authenticate,
    onSuccess: async (data) => {
      localStorage.setItem("userSession", data.uSession);
      setUserSession(data.uSession);
      navigate("/");
      const currentUser = await rolesService.getMyInfo();
      setCurrentUser(currentUser);
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    },
  });

  async function onSubmit(data: Schema) {
    await mutation.mutateAsync(data);
  }

  return (
    <Form {...form}>
      <form
        className="h-screen flex flex-col justify-center items-center gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <img
          className="w-96 mb-11"
          src={logo}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => {
            return (
              <FormItem className="w-2/6">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            return (
              <FormItem className="w-2/6">
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button className="w-2/6">{mutation.isPending ? <Loading /> : "Entrar"}</Button>
      </form>
    </Form>
  );
}
