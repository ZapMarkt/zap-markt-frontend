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
import {
  CreateCategorySchema,
  categorySchema,
} from '@/libs/zod/CategorySchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface CreateCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateCategoryModal: React.FC<CreateCategoryModalProps> = ({
  isOpen,
  onClose,
}) => {
  const form = useForm<CreateCategorySchema>({
    resolver: zodResolver(categorySchema),
    reValidateMode: 'onSubmit',
    mode: 'onTouched',
    defaultValues: {
      name: ' ',
      ordination: 0,
    },
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const onSubmit: SubmitHandler<CreateCategorySchema> = async (data) => {
    // TODO: Need add request to create new category

    try {
      console.log(data);
      toast({
        variant: 'sucess',
        description: 'Categoria criada com sucesso!',
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
        form.reset();
        onClose();
      }, 1000);
    }
  };

  const handleClose = () => {
    onClose();
    form.clearErrors();
    form.reset();
  };

  useEffect(() => {
    if (!isOpen) {
      form.reset();
      form.clearErrors(['name', 'ordination']);
    }
  }, [isOpen]);

  return (
    <Modal
      title="Criando categorias"
      decription="Dê um nome para sua nova categoria."
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
                onClick={handleClose}
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

export default CreateCategoryModal;
