import { Delivery } from '@/types/delivery';
import { ZodType, z } from 'zod';

export const deliveryOptionSchema: ZodType<Delivery> = z.object({
  radius: z.coerce
    .number({ message: 'Insira uma distância' })
    .min(0.1, { message: 'Distância minima de 0.1' }),
  price: z.coerce
    .number({ message: 'Insira um valor válido' })
    .min(0.01, { message: 'Valor minimo de R$ 0.01' })
    .max(20, { message: 'Valor máximo de R$ 20' }),
  time: z.coerce
    .number({ message: 'Insira um tempo válido' })
    .min(10, { message: 'Tempo minimo de 10 min' }),
});

type DeliveryOptionSchema = z.infer<typeof deliveryOptionSchema>;

export type { DeliveryOptionSchema };
