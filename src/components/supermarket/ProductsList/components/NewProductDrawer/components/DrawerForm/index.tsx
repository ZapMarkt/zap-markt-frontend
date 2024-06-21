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
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { ProductSchema, newProductSchema } from '@/libs/zod/NewProductSchema';
import { Category } from '@/types/category';
import { Measure } from '@/types/measure';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaBarcode } from 'react-icons/fa';
import { IoMdCloudUpload } from 'react-icons/io';

interface ProductFormProps {
  measures: Measure[];
  categories: Category[];
  onClose: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({
  measures,
  onClose,
  categories,
}) => {
  const form = useForm<ProductSchema>({
    resolver: zodResolver(newProductSchema),
    defaultValues: {
      barCode: '',
      measureId: '',
      name: '',
      price: 0,
      description: '',
      categoryId: '',
      stock: '',
      pdvCode: '',
      isOnPromotion: false,
      promotionalPrice: 0,
    },
  });

  const [loading, setLoading] = useState(false);

  // Control if product is on promotion
  const [promotion, setPromotion] = useState(false);

  useEffect(() => {
    form.setValue('isOnPromotion', promotion);
  }, [promotion, form]);

  // Control input image file
  const [selectedFile, setSelectedFile] = useState<File | undefined>();

  const onSubmit: SubmitHandler<ProductSchema> = (data) => {
    // TODO: Need add request to create new product
    if (!promotion) {
      delete data.promotionalPrice;
    }

    try {
      setLoading(true);
      console.log(data);
    } catch (error) {
      alert('Nao Passou');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Control of label color in selects
  const [measureValue, setMeasureValue] = useState('Selecione uma medida');
  const [categoryValue, setCategoryValue] = useState('Selecione uma categoria');
  const measureIdValue = form.watch('measureId');
  const categoryIdValue = form.watch('categoryId');

  useEffect(() => {
    setMeasureValue(measureIdValue || 'Selecione uma medida');
    setCategoryValue(categoryIdValue || 'Selecione uma categoria');
  }, [measureIdValue, categoryIdValue]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="barCode"
          render={({ field }) => (
            <FormItem className="mb-5">
              <FormLabel className="font-medium text-customMkt-gray6 ">
                Código de barras
              </FormLabel>
              <FormControl className=" space-y-1">
                <div className="flex items-center gap-4 max-h-[3.5rem] p-3 rounded-[.3125rem] border border-customMkt-gray7 focus-within:border-customMkt-primary focus-within:outline-none focus-within:ring-2 focus-visible:ring-offset-0 focus-within:ring-customMkt-primary transition-all group space-y-reverse space-y-0">
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
          name="image"
          render={({ field }) => (
            <FormItem className="mb-5">
              <div className="w-full h-[27.5rem] outline-dashed outline-1 outline-customMkt-gray7 rounded-[.3125rem] relative">
                {selectedFile ? (
                  <div>
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      alt="Imagem do Produto"
                      className="absolute justify-center items-center h-full w-full gap-3 rounded-[.3125rem] object-contain"
                    />
                  </div>
                ) : (
                  <div className="absolute flex justify-center items-center h-full w-full gap-3 rounded-[.3125rem]">
                    <div className="p-[.625rem] rounded-[.5rem] border border-customMkt-gray1 bg-white text-center group-hover:border-customMkt-primary transition h-[2.375rem] w-[2.375rem]">
                      <IoMdCloudUpload className="w-[1.125rem] h-[1.125rem] fill-customMkt-gray6 group-hover:fill-customMkt-primary" />
                    </div>
                    <div className="flex items-center justify-center flex-col">
                      <p className=" text-sm font-semibold text-customMkt-primary leading-[1.25rem]">
                        Arraste uma foto ou clique para subir
                      </p>
                      <span className="text-xs font-normal leading-6">
                        Arquivos aceitos PNG, JPG, e WEBP (3mb máx)
                      </span>
                    </div>
                  </div>
                )}
                <input
                  {...form.register('image')}
                  type="file"
                  accept=".png, .jpeg, .jpg, .webp"
                  disabled={loading}
                  onChange={(event) => {
                    field.onChange(event.target.files);
                    setSelectedFile(event.target.files?.[0]);
                  }}
                  className="w-full h-full opacity-0 "
                />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mb-5">
              <FormLabel>Nome do produto</FormLabel>
              <FormControl>
                <Input
                  className="px-3 py-[1.0625rem] text-lg font-normal leading-customNormal border-customMkt-gray7 h-[3.5rem]"
                  disabled={loading}
                  placeholder="Insira o nome do produto"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-[1.875rem] mb-5">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preço</FormLabel>
                <FormControl className=" space-y-1">
                  <div className="flex items-center gap-4 max-h-[3.5rem] p-3 rounded-[.3125rem] border border-customMkt-gray7 focus-within:border-customMkt-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-customMkt-primary transition-all group space-y-0 mt-0">
                    <p className="text-lg font-normal fill-customMkt-gray6 h-6 w-6 transition group-focus-within:text-customMkt-primary group-focus-within:stroke-customMkt-primary">
                      R$
                    </p>
                    <Input
                      type="number"
                      disabled={loading}
                      placeholder="0,00"
                      {...field}
                      className="p-0 text-lg font-normal leading-5 placeholder:text-customMkt-gray6 focus-visible:ring-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-offset-inherit border-0 "
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="promotionalPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preço promocional</FormLabel>
                <FormControl className=" space-y-1">
                  <div className="flex items-center gap-4 max-h-[3.5rem] p-3 rounded-[.3125rem] border border-customMkt-gray7 focus-within:border-customMkt-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-customMkt-primary transition-all group space-y-0 mb-0">
                    <p className="text-lg font-normal fill-customMkt-gray6 h-6 w-6 transition group-focus-within:text-customMkt-primary group-focus-within:stroke-customMkt-primary">
                      R$
                    </p>
                    <Input
                      type="number"
                      disabled={loading || !promotion}
                      placeholder="0,00"
                      {...field}
                      className="p-0 text-lg font-normal leading-5 placeholder:text-customMkt-gray6 focus-visible:ring-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-offset-inherit border-0"
                      style={{ marginBottom: '0px !important' }}
                    />
                    <Switch
                      className=" data-[state=checked]:bg-customMkt-primary data-[state=unchecked]:bg-input"
                      onCheckedChange={() => setPromotion((prev) => !prev)}
                      {...form.register('isOnPromotion')}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-[1.875rem] mb-5">
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categoria</FormLabel>
                <Select
                  disabled={loading}
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger
                      className={cn(
                        'px-3 py-[1.0625rem] text-lg font-normal leading-customNormal border-customMkt-gray7 h-[3.5rem] focus-within:border-customMkt-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-customMkt-primary focus:right-0 focus:ring-offset-0 focus:ring-customMkt-primary placeholder-select',
                        categoryValue === 'Selecione uma categoria' &&
                          '[&>span]:text-customMkt-gray6',
                      )}
                    >
                      <SelectValue
                        onChange={() => setCategoryValue(field.value)}
                        defaultValue={field.value}
                        placeholder="Selecione uma categoria"
                        className="border-none outline-none"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="p-0">
                    {categories.map((category) => (
                      <SelectItem
                        key={category.uuid}
                        value={category.uuid}
                        className="border-b border-customMkt-whiteF0 text-lg font-normal last:border-b-0 rounded-b-0"
                      >
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
                    <SelectTrigger
                      className={cn(
                        'px-3 py-[1.0625rem] text-lg font-normal leading-customNormal border-customMkt-gray7 h-[3.5rem] focus-within:border-customMkt-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-customMkt-primary focus:right-0 focus:ring-offset-0 focus:ring-customMkt-primary placeholder-select',
                        measureValue === 'Selecione uma medida' &&
                          '[&>span]:text-customMkt-gray6',
                      )}
                    >
                      <SelectValue
                        onChange={() => setMeasureValue(field.value)}
                        defaultValue={field.value}
                        placeholder="Selecione uma medida"
                        className="border-none outline-none"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="p-0">
                    {measures.map((measure) => (
                      <SelectItem
                        key={measure.name}
                        value={String(measure.id)}
                        className="border-b border-customMkt-whiteF0 text-lg font-normal last:border-b-0 rounded-b-0"
                      >
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
        <div className="grid grid-cols-2 gap-[1.875rem] mb-5">
          <FormField
            control={form.control}
            name="stock"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estoque</FormLabel>
                <FormControl>
                  <Input
                    className="px-3 py-[1.0625rem] text-lg font-normal leading-customNormal border-customMkt-gray7 h-[3.5rem]"
                    disabled={loading}
                    placeholder="Insira o estoque do seu produto"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pdvCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Código PDV</FormLabel>
                <FormControl>
                  <Input
                    className="px-3 py-[1.0625rem] text-lg font-normal leading-customNormal border-customMkt-gray7 h-[3.5rem]"
                    disabled={loading}
                    placeholder="Insira o codigo PDV do seu produto"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="mb-5">
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Textarea
                  className="px-3 py-[1.0625rem] text-lg font-normal leading-customNormal border-customMkt-gray7 h-[200px]"
                  disabled={loading}
                  placeholder="Insira a descrição do produto"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end items-center gap-6">
          <Button
            size="customLg"
            variant="customSecondary"
            disabled={loading}
            className="max-w-[264px]"
            onClick={onClose}
          >
            Cancelar
          </Button>
          <Button
            size="customLg"
            variant="customPrimary"
            disabled={loading}
            className="max-w-[264px]"
            type="submit"
          >
            Salvar
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProductForm;
