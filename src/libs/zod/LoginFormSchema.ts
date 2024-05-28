import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Este campo é obrigatório. Por favor, preencha-o antes de continuar." })
    .email({ message: "Por favor, insira um endereço de email válido." }),
  password: z
    .string()
    .nonempty({ message: "Este campo é obrigatório. Por favor, preencha-o antes de continuar." }),
});
