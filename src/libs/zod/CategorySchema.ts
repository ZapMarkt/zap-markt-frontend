import { Category } from '@/types/category';
import { ZodType, z } from 'zod';

export const categorySchema: ZodType<Category> = z.object({
  name: z
    .string()
    .min(4, { message: 'Deve conter no mínimo 4 caracteres' })
    .refine((val) => /^[A-Za-z\s]+$/.test(val), {
      message: 'Deve conter apenas letras',
    }),
  ordination: z.coerce.number().min(2, { message: 'Deve ser maior que 1' }),
});

type EditCategorySchema = z.infer<typeof categorySchema>;
type CreateCategorySchema = z.infer<typeof categorySchema>;

export type { CreateCategorySchema, EditCategorySchema };
