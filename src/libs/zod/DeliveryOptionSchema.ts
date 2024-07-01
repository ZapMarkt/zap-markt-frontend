import { ZodType, z } from 'zod';

export const deliveryOptionSchema: ZodType = z.object({
  radius: z
    .string()
    .refine((val) => /^[0-9.,]+$/.test(val), {
      message: 'Insira uma distância',
    })
    .transform((val) => parseFloat(val.replace(',', '.')))
    .refine((val) => !isNaN(val) && val >= 0.1, {
      message: 'Mínimo de 100m',
    })
    .refine((val) => !isNaN(val) && val <= 15, {
      message: 'Máximo de 15Km',
    }),
  price: z
    .string()
    .refine((val) => /^[0-9.,]+$/.test(val), {
      message: 'Insira uma taxa',
    })
    .transform((val) => parseFloat(val.replace(',', '.')))
    .refine((val) => !isNaN(val) && val >= 0.01, {
      message: 'Valor mínimo de R$ 0.01',
    })
    .refine((val) => !isNaN(val) && val <= 999, {
      message: 'Valor máximo de R$ 999,00',
    }),
  time: z
    .string()
    .refine((val) => /^[0-9.,]+$/.test(val), {
      message: 'Insira um tempo',
    })
    .transform((val) => parseFloat(val.replace(',', '.')))
    .refine((val) => !isNaN(val) && val >= 10, {
      message: 'Tempo mínimo de 10 min',
    })
    .refine((val) => !isNaN(val) && val <= 300, {
      message: 'Tempo máximo de 3 horas',
    }),
});

export type DeliveryOptionTransformSchema = z.infer<
  typeof deliveryOptionSchema
>;

// Teste de validação
/* const testData = [
  { radius: '0,5', price: '10,00', time: '20' },
  { radius: '10,1', price: '300,50', time: '60' },
];

testData.forEach((data) => {
  try {
    deliveryOptionSchema.parse(data);
    console.log('Validação bem-sucedida para:', data);
  } catch (e: any) {
    console.error('Erro de validação:', e.errors);
  }
}); */
