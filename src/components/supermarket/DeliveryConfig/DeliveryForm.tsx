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
import { useToast } from '@/components/ui/supermarket-toasters/use-toast';
import {
  DeliveryOptionSchema,
  deliveryOptionSchema,
} from '@/libs/zod/DeliveryOptionSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaRegTrashAlt } from 'react-icons/fa';

const DeliveryForm = () => {
  const form = useForm<DeliveryOptionSchema>({
    resolver: zodResolver(deliveryOptionSchema),
    defaultValues: {},
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const onSubmit: SubmitHandler<DeliveryOptionSchema> = (data) => {
    // TODO: Need add request to add new delvery option

    try {
      setLoading(true);
      console.log(data);
      toast({
        variant: 'sucess',
        description: 'Áreas de entrega cadastradas com sucesso!',
      });
    } catch (error) {
      alert('Nao Passou');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex gap-[17px] px-[10px] py-[14px] border-b border-customMkt-gray4 mb-5">
          <div className="grid grid-cols-3 gap-[17px]">
            <FormField
              control={form.control}
              name="radius"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tamanho do raio</FormLabel>
                  <FormControl className="space-y-1">
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
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Taxa de entrega</FormLabel>
                  <FormControl className="space-y-1">
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
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tempo de espera</FormLabel>
                  <FormControl className="space-y-1">
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
          <div className="flex items-center">
            <FaRegTrashAlt className="mt-8 h-6 w-6 fill-customMkt-error cursor-pointer" />
          </div>
        </div>
        <Button className="p-[18px] text-xl bg-white font-medium flex items-center justify-center leading-customNormal w-full text-customMkt-primary rounded-[10px] mb-[18px] border hover:border-customMkt-primary transition">
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
