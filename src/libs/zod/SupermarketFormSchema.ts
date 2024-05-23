import { z } from "zod";
import { validateCnpj } from "../../utils/validateCnpj";

export const supermarketFormSchema = z.object({
  profile: z.any(),
  backdrop: z.any().refine((file: File) => {
    if (file.size > 1) {
      return false;
    }
    return true;
  }),
  stablishmentName: z
    .string()
    .min(4, {
      message:
        "Este campo deve conter no mínimo 4 caracteres. Por favor, adicione mais caracteres.",
    })
    .max(36, {
      message:
        "O campo deve conter no máximo 36 caracteres. Por favor, verifique e tente novamente.",
    })
    .regex(
      /^[A-Za-z]+$/i,
      "Este campo deve conter apenas letras. Por favor, remova números e caracteres especiais."
    ),
  cnpj: z
    .string()
    .length(18, {
      message:
        "O campo deve conter exatamente 14 caracteres. Por favor, verifique e tente novamente.",
    })
    .refine((val) => validateCnpj(val), { message: "CNPJ inválido" }),
  stateRegistration: z
    .string()
    .min(4, {
      message:
        "Este campo deve conter no mínimo 4 caracteres. Por favor, adicione mais caracteres.",
    })
    .max(14, {
      message:
        "O campo deve conter no máximo 14 caracteres. Por favor, verifique e tente novamente.",
    }),
  cellPhone: z
    .string()
    .nonempty({ message: "Este campo é obrigatório. Por favor, preencha-o antes de continuar." }),
  telephone: z
    .string()
    .nonempty({ message: "Este campo é obrigatório. Por favor, preencha-o antes de continuar." }),
  email: z
    .string()
    .nonempty({ message: "Este campo é obrigatório. Por favor, preencha-o antes de continuar." })
    .email({
      message:
        "O endereço de e-mail inserido é inválido. Por favor, insira um endereço de e-mail válido.",
    }),
  cep: z
    .string()
    .nonempty({ message: "Este campo é obrigatório. Por favor, preencha-o antes de continuar." })
    .length(9, {
      message:
        "O campo deve conter exatamente 8 caracteres. Por favor, verifique e tente novamente.",
    }),
  street: z
    .string()
    .nonempty({ message: "Este campo é obrigatório. Por favor, preencha-o antes de continuar." })
    .min(4, {
      message:
        "Este campo deve conter no mínimo 4 caracteres. Por favor, adicione mais caracteres.",
    })
    .max(30, {
      message:
        "O campo deve conter no máximo 30 caracteres. Por favor, verifique e tente novamente.",
    }),
  number: z
    .string()
    .nonempty({ message: "Este campo é obrigatório. Por favor, preencha-o antes de continuar." })
    .min(1, {
      message:
        "Este campo deve conter no mínimo 1 caracteres. Por favor, adicione mais caracteres.",
    })
    .max(6, {
      message:
        "O campo deve conter no máximo 6 caracteres. Por favor, verifique e tente novamente.",
    })
    .regex(/^[0-9]+$/i, {
      message:
        "Este campo deve conter apenas números. Por favor, remova números e caracteres especiais.",
    }),
  neighborhood: z
    .string()
    .nonempty({ message: "Este campo é obrigatório. Por favor, preencha-o antes de continuar." })
    .min(6, {
      message:
        "Este campo deve conter no mínimo 1 caracteres. Por favor, adicione mais caracteres.",
    })
    .max(30, {
      message:
        "O campo deve conter no máximo 30 caracteres. Por favor, verifique e tente novamente.",
    }),
  city: z
    .string()
    .nonempty({ message: "Este campo é obrigatório. Por favor, preencha-o antes de continuar." })
    .min(4, {
      message:
        "Este campo deve conter no mínimo 1 caracteres. Por favor, adicione mais caracteres.",
    })
    .max(30, {
      message:
        "O campo deve conter no máximo 30 caracteres. Por favor, verifique e tente novamente.",
    }),
  state: z
    .string()
    .nonempty({ message: "Este campo é obrigatório. Por favor, preencha-o antes de continuar." })
    .length(2, {
      message:
        "O campo deve conter exatamente 2 caracteres. Por favor, verifique e tente novamente.",
    }),
  password: z
    .string()
    .nonempty({ message: "Este campo é obrigatório. Por favor, preencha-o antes de continuar." })
    .min(8, {
      message:
        "Este campo deve conter no mínimo 8 caracteres. Por favor, adicione mais caracteres.",
    }),
  confirmationPassword: z.string(),
});
