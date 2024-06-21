import { ProductForm } from '@/types/Products';
import { ZodType, z } from 'zod';

const MAX_FILE_SIZE = 2 ** 20 * 3;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

export const newProductSchema: ZodType<ProductForm> = z
  .object({
    barCode: z
      .string()
      .min(8, { message: 'Deve conter pelo menos 1 caractere(s)' })
      .max(13, { message: 'Deve conter no máximo 13 caractere(s)' })
      .refine((val) => /^[0-9]+$/.test(val), {
        message: 'Deve conter apenas números',
      }),
    measureId: z.string().min(1, { message: 'Deve conter pelo menos 1 opção' }),
    name: z
      .string()
      .min(3, { message: 'Deve conter pelo menos 3 caractere(s)' })
      .max(70, { message: 'Deve conter no máximo 70 caractere(s)' }),
    image: z
      .instanceof(FileList, { message: 'Deve conter uma imagem' })
      .refine((val) => val.length)
      .transform((val) => val.item(0) as NonNullable<File>)
      .refine((val) => val.size <= MAX_FILE_SIZE, {
        message: 'Tamanho maximo permitido 3mb',
      })
      .refine((val) => ACCEPTED_IMAGE_TYPES.includes(val.type), {
        message: 'Tipo de arquivo inválido',
      }),
    price: z.coerce
      .number()
      .min(0.01, { message: 'Valor minimo de R$ 0.01' })
      .max(99999, { message: 'Valor máximo de R$ 99.999' }),
    isOnPromotion: z.boolean().default(false).optional(),
    promotionalPrice: z.coerce.number().optional(),
    description: z.string().max(100).optional(),
    categoryId: z
      .string()
      .min(1, { message: 'Deve conter pelo menos 1 opção' }),
    stock: z
      .string()
      .min(1)
      .refine((val) => /^[0-9]+$/.test(val), {
        message: 'Deve conter apenas números',
      }),
    pdvCode: z
      .string()
      .min(1)
      .refine((val) => /^[0-9]+$/.test(val), {
        message: 'Deve conter apenas números',
      }),
  })
  .refine(
    (data) =>
      !(
        data.isOnPromotion &&
        (!data.promotionalPrice || data.promotionalPrice >= data.price)
      ),
    {
      message:
        'Valor deve ser maior que R$ 0.01, e menor que o preço original do produto',
      path: ['promotionalPrice'],
    },
  );

type NewProductSchema = z.infer<typeof newProductSchema>;

export type { NewProductSchema };
