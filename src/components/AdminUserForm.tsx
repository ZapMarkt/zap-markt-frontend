import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { adminUserService } from "@/services/AdminUserService";
import { useState } from "react";
import { rolesService } from "@/services/RolesServices";
import { z } from "zod";
import { useForm } from "react-hook-form";

export const schema = z.object({
  name: z
    .string()
    .nonempty({ message: "Este campo é obrigatório. Por favor, preencha-o antes de continuar." }),
  email: z
    .string()
    .nonempty({ message: "Este campo é obrigatório. Por favor, preencha-o antes de continuar." })
    .email({ message: "Por favor, insira um endereço de email válido." }),
  password: z
    .string()
    .min(12, { message: "A senha deve conter pelo menos 12 caracteres" })
    .max(22, { message: "A senha deve conter no máximo 22 caracteres" }),
  roleId: z.string({ required_error: "role is required" }),
});

type Schema = z.infer<typeof schema>;

export function AdminUserForm() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      roleId: "1",
    },
  });

  const query = useQuery({ queryKey: ["roles"], queryFn: rolesService.getAll });

  const mutation = useMutation({
    mutationFn: adminUserService.createAdminUser,
    onSuccess: () => navigate("/configuracoes"),
  });

  function onSubmit(data: Schema) {
    mutation.mutate({ ...data, roleId: +data.roleId });
  }

  return (
    <Form {...form}>
      <form
        className="p-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <strong className="block text-2xl mb-8 text-stone-900">Dados do usuário</strong>
        <div className="flex items-start gap-10 mb-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => {
              return (
                <FormItem className="flex-1">
                  <FormLabel>Nome</FormLabel>
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
            name="email"
            render={({ field }) => {
              return (
                <FormItem className="flex-1">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
        <div className="flex items-start gap-10 mb-5">
          <FormField
            control={form.control}
            name="roleId"
            render={({ field }) => {
              return (
                <FormItem className="flex-1">
                  <FormLabel>Cargo</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Cargo" />
                      </SelectTrigger>
                      <SelectContent>
                        {query.data?.map((role) => (
                          <SelectItem
                            key={role.id}
                            value={role.id.toString()}
                          >
                            {role.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
                <FormItem className="flex-1">
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
        <Button>Salvar</Button>
      </form>
    </Form>
  );
}
