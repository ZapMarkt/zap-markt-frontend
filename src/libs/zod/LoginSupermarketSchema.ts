import { Login } from '@/types/supermarket/Login';
import { ZodType, z } from 'zod';

export const loginSchema: ZodType<Login> = z.object({
  email: z
    .string({ message: 'Insira um email válido' })
    .email({ message: 'Insira um email válido' }),
  password: z.string().min(8).max(15),
});

type LoginSchema = z.infer<typeof loginSchema>;

export type { LoginSchema };
