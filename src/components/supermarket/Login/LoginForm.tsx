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
import { PasswordInput } from '@/components/ui/input-password';
import { LoginSchema, loginSchema } from '@/libs/zod/LoginSupermarketSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<LoginSchema> = (data) => {
    // TODO: Validate login

    try {
      console.log(data);
      setLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="px-[25px]">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-5">
              <FormLabel className="text-sm font-medium leading-customNormal text-customMkt-primary">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="seuemail@email.com.br"
                  disabled={loading}
                  {...field}
                  className="rounded-[5px] py-[17px] px-3 h-[56px] text-lg font-normal leading-customNormal focus-visible:border-customMkt-primary focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mb-5">
              <FormLabel className="text-sm font-medium text-customMkt-primary">
                Senha
              </FormLabel>
              <FormControl>
                <PasswordInput
                  placeholder="Sua senha"
                  disabled={loading}
                  {...field}
                  className="rounded-[5px] py-[17px] px-3 h-[56px] text-lg font-normal leading-customNormal focus-visible:border-customMkt-primary focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Link
          className="block text-right text-lg font-medium leading-customNormal text-customMkt-primary hover:underline transition"
          to="/"
        >
          Esqueci minha senha
        </Link>
        <Button
          variant="customPrimary"
          size="customLg"
          className="my-[30px]"
          type="submit"
          disabled={loading}
        >
          Entrar
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
