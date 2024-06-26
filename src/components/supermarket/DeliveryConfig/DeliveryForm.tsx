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
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/components/ui/supermarket-toasters/use-toast';
import {
  DeliveryOptionSchema,
  deliveryOptionSchema,
} from '@/libs/zod/DeliveryOptionSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { FaRegTrashAlt } from 'react-icons/fa';
import { z } from 'zod';

const DeliveryForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<{
    deliveryAreas: DeliveryOptionSchema[];
  }>({
    resolver: zodResolver(
      z.object({
        deliveryAreas: z.array(deliveryOptionSchema),
      }),
    ),
    defaultValues: {
      deliveryAreas: [{ radius: 0, price: 0, time: 0 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'deliveryAreas',
  });

  const onSubmit: SubmitHandler<{ deliveryAreas: DeliveryOptionSchema[] }> = (
    data,
  ) => {
    // TODO: add request to create delivery options

    if (data.deliveryAreas.length === 0) return null;
    try {
      setLoading(true);
      console.log(data.deliveryAreas);
      toast({
        variant: 'sucess',
        description: 'Áreas de entrega cadastradas com sucesso!',
      });
    } catch (error) {
      alert('Não foi possível cadastrar as áreas de entrega.');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <ScrollArea className="h-[450px]">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="flex gap-[17px] px-[10px] py-[14px] border-b border-customMkt-gray4"
            >
              <div className="grid grid-cols-3 gap-[17px]">
                <FormField
                  control={form.control}
                  name={`deliveryAreas.${index}.radius`}
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel>Tamanho do raio</FormLabel>
                      <FormControl>
                        <div className="flex items-center gap-4 max-h-[3.5rem] p-3 rounded-[.3125rem] border border-customMkt-gray7 focus-within:border-customMkt-primary focus-within:outline-none focus-within:ring-2 focus-visible:ring-offset-0 focus-within:ring-customMkt-primary transition-all group space-y-reverse space-y-0">
                          <Input
                            disabled={loading}
                            placeholder="1"
                            type="number"
                            {...field}
                            className="p-0 text-lg font-normal leading-customNormal placeholder:text-customMkt-gray6 focus-visible:ring-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-offset-inherit border-0"
                          />
                          <p className="text-customMkt-gray6 transition group-focus-within:text-customMkt-primary font-medium">
                            Km
                          </p>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`deliveryAreas.${index}.price`}
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel>Taxa de entrega</FormLabel>
                      <FormControl>
                        <div className="flex items-center gap-4 max-h-[3.5rem] p-3 rounded-[.3125rem] border border-customMkt-gray7 focus-within:border-customMkt-primary focus-within:outline-none focus-within:ring-2 focus-visible:ring-offset-0 focus-within:ring-customMkt-primary transition-all group space-y-reverse space-y-0">
                          <Input
                            disabled={loading}
                            placeholder="1,00"
                            type="number"
                            {...field}
                            className="p-0 text-lg font-normal leading-customNormal placeholder:text-customMkt-gray6 focus-visible:ring-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-offset-inherit border-0"
                          />
                          <p className="text-customMkt-gray6 transition group-focus-within:text-customMkt-primary font-medium">
                            R$
                          </p>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`deliveryAreas.${index}.time`}
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel>Tempo de espera</FormLabel>
                      <FormControl>
                        <div className="flex items-center gap-4 max-h-[3.5rem] p-3 rounded-[.3125rem] border border-customMkt-gray7 focus-within:border-customMkt-primary focus-within:outline-none focus-within:ring-2 focus-visible:ring-offset-0 focus-within:ring-customMkt-primary transition-all group space-y-reverse space-y-0">
                          <Input
                            disabled={loading}
                            placeholder="60"
                            type="number"
                            {...field}
                            className="p-0 text-lg font-normal leading-customNormal placeholder:text-customMkt-gray6 focus-visible:ring-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-offset-inherit border-0"
                          />
                          <p className="text-customMkt-gray6 transition group-focus-within:text-customMkt-primary font-medium">
                            min
                          </p>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center first:hidden">
                {index !== 0 ? (
                  <FaRegTrashAlt
                    className="h-6 w-6 fill-customMkt-error cursor-pointer"
                    onClick={() => remove(index)}
                  />
                ) : (
                  <div className="h-6 w-6 bg-transparent" />
                )}
              </div>
            </div>
          ))}
        </ScrollArea>
        <Button
          className="p-[18px] text-xl bg-white font-medium flex items-center justify-center leading-customNormal w-full text-customMkt-primary rounded-[10px] mb-[18px] border hover:border-customMkt-primary transition mt-5"
          onClick={() => append({ radius: 0, price: 0, time: 0 })}
        >
          Adicionar mais área de entrega
        </Button>
        <Button
          disabled={loading}
          size="customLg"
          variant="customPrimary"
          type="submit"
        >
          Salvar
        </Button>
      </form>
    </Form>
  );
};

export default DeliveryForm;
