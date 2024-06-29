import { LocalStorageKey } from "@/common/enums/LocalStorageKey";
import { useError } from "@/common/hooks/useError";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { stone } from "tailwindcss/colors";
import { z } from "zod";
import logo from "../../public/zap-markt-degrad-logo.svg";
import { adminService } from "../services/AdminService";
import { useUserSessionStore } from "../stores/UserSessionStore";

export const schema = z.object({
  email: z
    .string()
    .nonempty({
      message:
        "Este campo é obrigatório. Por favor, preencha-o antes de continuar.",
    })
    .email({ message: "Por favor, insira um endereço de email válido." }),
  password: z.string().nonempty({
    message:
      "Este campo é obrigatório. Por favor, preencha-o antes de continuar.",
  }),
});

type Schema = z.infer<typeof schema>;

export function Login() {
  const { showError } = useError();
  const setUserSession = useUserSessionStore((state) => state.setUserSession);
  const navigate = useNavigate();

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const authenticateMutation = useMutation({
    mutationFn: adminService.authenticate,
    onSuccess: async ({ session }) => {
      localStorage.setItem(LocalStorageKey.UserSession, session);

      setUserSession(session);
      navigate("/");
    },
    onError: (err) => {
      showError(err, alert); //TODO: Substituir alert por toast de erro
    },
  });

  async function onSubmit(data: Schema) {
    await authenticateMutation.mutateAsync(data);
  }

  return (
    <Form {...form}>
      <form
        className="h-screen flex flex-col justify-center items-center gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <img className="w-96 mb-11" src={logo} />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-2/6">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-2/6">
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-2/6" disabled={authenticateMutation.isPending}>
          {authenticateMutation.isPending ? (
            <SyncLoader size={8} color={stone[400]} />
          ) : (
            "Entrar"
          )}
        </Button>
      </form>
    </Form>
  );
}
