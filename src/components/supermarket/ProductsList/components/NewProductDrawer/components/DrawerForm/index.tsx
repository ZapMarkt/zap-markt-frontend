import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Measure } from '@/types/measure';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaBarcode } from 'react-icons/fa';
import { IoMdCloudUpload } from 'react-icons/io';
import * as z from 'zod';

interface ProductFormProps {
  measures: Measure[];
}

const MAX_FILE_SIZE = 3000000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

const formSchema = z.object({
  barCode: z
    .string()
    .min(8, { message: 'Deve conter pelo menos 1 caractere(s)' })
    .max(13, { message: 'Deve conter no máximo 13 caractere(s)' }),
  measureId: z.string().min(1, { message: 'Deve conter pelo menos 1 opção' }),
  name: z.string().min(1, { message: 'Deve conter pelo menos 1 caractere(s)' }),
  image: z
    .any()
    .refine((file) => file instanceof File, { message: 'Imagem é requerida' })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: 'Apenas .jpeg, .jpg, .png e .webp são aceitos',
    })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: 'Tamanho máximo é 3MB.',
    }),
  price: z.coerce.number().min(1),
  isOnPromotion: z.boolean().default(false).optional(),
  promotionPrice: z.coerce.number().min(1),
  description: z.string().min(1),
  categoryId: z.string().min(1),
  stock: z.string().min(1),
  pdvCode: z.string().min(1),
});

type ProductFormValue = z.infer<typeof formSchema>;

const ProductForm: React.FC<ProductFormProps> = ({ measures }) => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const form = useForm<ProductFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      barCode: '',
      measureId: '',
      image: null,
      name: '',
      price: 0,
      isOnPromotion: false,
      description: '',
      categoryId: '',
      stock: '',
    },
  });

  const onFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files?.[0] || null;
      if (
        (selectedFile && selectedFile.type === 'jpeg') ||
        (selectedFile && selectedFile.type === 'jpg') ||
        (selectedFile && selectedFile.type === 'png') ||
        (selectedFile && selectedFile.type === 'webp')
      ) {
      }
      form.setValue('image', selectedFile);
      setFile(selectedFile);
    },
    [form],
  );

  const onSubmit = (data: ProductFormValue) => {
    // TODO: Need add request to create new product

    try {
      setLoading(true);
      alert('Foi seu produto');
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-[30px] mb-[22px]">
          <FormField
            control={form.control}
            name="barCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Código de barras</FormLabel>
                <FormControl className=" space-y-1">
                  <div className="flex items-center gap-4 max-h-[56px] p-3 rounded-[5px] border border-customMkt-gray7 focus-within:border-customMkt-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-customMkt-primary transition-all group space-y-reverse space-y-0">
                    <FaBarcode className="fill-customMkt-gray6 h-6 w-6 transition group-focus-within:fill-customMkt-primary" />
                    <Input
                      disabled={loading}
                      placeholder="Pesquisar código de barras"
                      {...field}
                      className="p-0 text-lg font-normal leading-5 placeholder:text-customMkt-gray6 focus-visible:ring-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-offset-inherit border-0"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="measureId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Medida</FormLabel>
                <Select
                  disabled={loading}
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="px-3 py-[17px] text-lg font-normal leading-customNormal border-customMkt-gray7 h-[56px] focus-within:border-customMkt-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-customMkt-primary focus:right-0 focus:ring-offset-0 focus:ring-customMkt-primary">
                      <SelectValue
                        defaultValue={field.value}
                        placeholder="Selecione uma medida"
                        className="border-none outline-none"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {measures.map((measure) => (
                      <SelectItem key={measure.type} value={measure.type}>
                        {measure.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="image"
          render={() => (
            <FormItem>
              <div className="w-full h-[440px] outline-dashed outline-1 outline-customMkt-gray7 rounded-[5px] relative">
                {file ? (
                  <div>
                    <img
                      src={URL.createObjectURL(file)}
                      alt="Imagem do Produto"
                      className="absolute justify-center items-center h-full w-full gap-3 rounded-[5px]"
                    />
                  </div>
                ) : (
                  <div className="absolute justify-center items-center h-full w-full gap-3 rounded-[5px]">
                    <div className="p-[10px] rounded-[8px] border border-customMkt-gray1 bg-white text-center group-hover:border-customMkt-primary transition">
                      <IoMdCloudUpload className="w-[18px] h-[18px] fill-customMkt-gray6 group-hover:fill-customMkt-primary" />
                    </div>
                  </div>
                )}

                <Input
                  type="file"
                  disabled={loading}
                  placeholder="Pesquisar código de barras"
                  onChange={onFileChange}
                  className="w-full h-full opacity-0"
                />
              </div>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={loading} className="ml-auto" type="submit">
          Salvar
        </Button>
      </form>
    </Form>
  );
};

export default ProductForm;
