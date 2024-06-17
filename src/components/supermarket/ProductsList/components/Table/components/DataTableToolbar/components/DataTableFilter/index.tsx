import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Command } from '@/components/ui/command';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { products } from '@/data/productList';
import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

const FormSchema = z.object({
  category: z.string().optional(),
  unity: z.string().optional(),
});

const DataTableFilter = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const [data, setData] = useState('');

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (data.category !== '' || data.unity !== '') {
      setData(data.category || data.unity || '');
      console.log(data);
    } else {
      console.log('Tá vazio');
    }
  }

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            size="customMd"
            variant="customOutiline"
            className="gap-[10px] transition max-w-[109px]"
          >
            <FaFilter className="fill-customMkt-gray6 group-hover:fill-customMkt-primary/80 w-6 h-6" />
            Filtrar
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-6 w-[453px]">
          <h1 className="font-semibold text-2xl leading-customNormal mb-6">
            Filtrar produtos
          </h1>
          <Command></Command>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-[18px]"
            >
              <FormField
                control={form.control}
                name="category"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-sm text-customMkt-gray6">
                      Categoria
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue=""
                    >
                      <FormControl>
                        <SelectTrigger className="px-3 py-[17px] rounded-[5px] border-customMkt-gray7 text-lg mb-[18px]">
                          <SelectValue placeholder="Selecione uma categoria" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[
                          ...new Set(
                            products.map((product) => product.category),
                          ),
                        ].map((category) => (
                          <SelectItem
                            key={category}
                            className="text-lg"
                            value={category.toLocaleLowerCase()}
                          >
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldState.error && (
                      <FormMessage>{fieldState.error.message}</FormMessage>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="unity"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-sm text-customMkt-gray6">
                      Medida
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue=""
                    >
                      <FormControl>
                        <SelectTrigger className="px-3 py-[17px] rounded-[5px] border-customMkt-gray7 text-lg ">
                          <SelectValue placeholder="Selecione uma unidade" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[
                          ...new Set(products.map((product) => product.unity)),
                        ].map((product) => (
                          <SelectItem
                            key={product}
                            className="text-lg"
                            value={product.toLocaleLowerCase()}
                          >
                            {product}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldState.error && (
                      <FormMessage>{fieldState.error.message}</FormMessage>
                    )}
                  </FormItem>
                )}
              />
              {form.formState.errors && form.formState.errors.root && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.root.message}
                </p>
              )}
              <div className="flex mb-6 gap-5 mt-[6px]">
                <Button
                  onClick={() => form.reset({ category: '', unity: '' })}
                  size="customLg"
                  variant="customSecondary"
                  type="button"
                >
                  Limpar filtros
                </Button>
                <Button size="customLg" variant="customPrimary" type="submit">
                  Filtrar
                </Button>
              </div>
            </form>
          </Form>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DataTableFilter;
