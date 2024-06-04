import { z } from "zod";

export const adminUserFormSchema = z.object({
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
});
