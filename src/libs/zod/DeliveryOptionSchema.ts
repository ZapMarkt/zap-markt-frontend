import { ZodType, z } from 'zod';

export const deliveryOptionSchema: ZodType = z.object({
  radius: z
    .string()
    .refine((val) => /^[0-9.,]+$/.test(val), {
      message: 'Insira uma distância',
    })
    .transform((val) => parseFloat(val.replace(',', '.')))
    .refine((val) => !isNaN(val) && val >= 0.1, {
      message: 'Distância mínima de 0.1',
    }),
  price: z
    .string()
    .refine((val) => /^[0-9.,]+$/.test(val), {
      message: 'Insira uma taxa',
    })
    .transform((val) => parseFloat(val.replace(',', '.')))
    .refine((val) => !isNaN(val) && val >= 0.01 && val <= 20, {
      message: 'Valor mínimo de R$ 0.01 e máximo de R$ 20',
    }),
  time: z
    .string()
    .refine((val) => /^[0-9.,]+$/.test(val), {
      message: 'Insira um tempo',
    })
    .transform((val) => parseFloat(val.replace(',', '.')))
    .refine((val) => !isNaN(val) && val >= 10, {
      message: 'Tempo mínimo de 10 min',
    }),
});

export type DeliveryOptionTransformSchema = z.infer<
  typeof deliveryOptionSchema
>;
