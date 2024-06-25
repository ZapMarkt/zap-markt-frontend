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
import { Modal } from '@/components/ui/modal';
import { useToast } from '@/components/ui/supermarket-toasters/use-toast';
import { EditCategorySchema, categorySchema } from '@/libs/zod/CategorySchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CategoryModal: React.FC<CategoryModalProps> = ({ isOpen, onClose }) => {
  const form = useForm<EditCategorySchema>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: '',
      ordination: 0,
    },
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const onSubmit: SubmitHandler<EditCategorySchema> = async (data) => {
    // TODO: Need add request to create new category

    try {
      console.log(data);
      toast({
        variant: 'sucess',
        description: 'Categoria alterada com sucesso!',
      });
      setLoading(true);
    } catch (error) {
      toast({
        variant: 'destructive',
        description: 'Algo deu errado.',
      });
      console.log(error);
    } finally {
      setLoading(false);
      setTimeout(() => {
        onClose();
      }, 1000);
    }
  };

  return (
    <Modal
      title="Editando categorias"
      decription="Edite as informações da categoria."
      isOpen={isOpen}
      onClose={onClose}
      className="w-[596px] max-w[596px]"
    >
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mb-5">
                  <FormLabel>Nome da categoria</FormLabel>
                  <FormControl>
                    <Input
                      className="px-3 py-[1.0625rem] text-lg font-normal leading-customNormal border-customMkt-gray7 h-[3.5rem]"
                      disabled={loading}
                      placeholder="Insira o nome da categoria"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ordination"
              render={({ field }) => (
                <FormItem className="mb-5">
                  <FormLabel>Ordenação</FormLabel>
                  <FormControl>
                    <Input
                      className="px-3 py-[1.0625rem] text-lg font-normal leading-customNormal border-customMkt-gray7 h-[3.5rem]"
                      disabled={loading}
                      placeholder="Insira a ordem a ser exibida"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="gap-5 flex items-center justify-end w-full">
              <Button
                variant="customSecondary"
                size="customLg"
                disabled={loading}
                onClick={onClose}
              >
                Cancelar
              </Button>
              <Button
                variant="customPrimary"
                size="customLg"
                type="submit"
                disabled={loading}
              >
                Salvar
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </Modal>
  );
};

export default CategoryModal;