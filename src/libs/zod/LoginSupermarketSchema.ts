import { Login } from '@/types/supermarket/Login';
import { ZodType, z } from 'zod';

export const loginSchema: ZodType<Login> = z.object({
  email: z.coerce
    .string()
    .email({ message: 'Por favor, insira um endereço de email válido.' }),
  password: z.coerce
    .string()
    .min(8, {
      message: 'Deve conter pelo menos 8 caracteres',
    })
    .max(15),
});

type LoginSchema = z.infer<typeof loginSchema>;

export type { LoginSchema };
