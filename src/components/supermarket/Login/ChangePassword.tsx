import Logo from '@/assets/logo.svg';
import LogoText from '@/assets/logo_completa.svg';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { PasswordInput } from '@/components/ui/input-password';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

const changePasswordSchema = z
  .object({
    password: z.coerce.string(),
    confirm: z.coerce.string(),
  })
  .refine((data) => data.password === data.password, {
    message: 'Senha não são iguals',
    path: ['confirm'],
  });

type ChangePasswordSchema = z.infer<typeof changePasswordSchema>;

const ChangePassword = () => {
  const form = useForm<ChangePasswordSchema>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      password: '',
      confirm: '',
    },
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ChangePasswordSchema> = (data) => {
    // TODO: Validate recovery password

    try {
      console.log(data);
      setLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      navigate('/login-supermarket');
    }
  };

  return (
    <div className="bg-[url('./src/assets/bg-login-page-supermarket.png')] bg-cover h-screen w-screen flex justify-center items-center">
      <div className="w-[480px] bg-white rounded-[10px] pt-[26px]">
        <div>
          <div className="flex items-center justify-center gap-1 mb-[46px]">
            <img src={Logo} alt="Logo" className="w-[85px] h-[77px]" />
            <img
              src={LogoText}
              alt="Logo with text"
              className="w-[210px] h-[46px]"
            />
          </div>
          <div className="px-[25px] mb-[30px] flex flex-col gap-[14px]">
            <h1 className="text-[22px] font-semibold leading-[22px]">
              Criando nova senha
            </h1>
            <p className="text-lg font-normal leading-customNormal text-customMkt-gray8">
              Agora digite 2 vezes uma nova senha nos campo abaixo:
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="px-[25px]">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="mb-5">
                    <FormLabel className="text-sm font-medium leading-customNormal text-customMkt-primary">
                      Nova senha
                    </FormLabel>
                    <FormControl>
                      <PasswordInput
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
                name="confirm"
                render={({ field }) => (
                  <FormItem className="mb-5">
                    <FormLabel className="text-sm font-medium leading-customNormal text-customMkt-primary">
                      Repita a senha
                    </FormLabel>
                    <FormControl>
                      <PasswordInput
                        disabled={loading}
                        {...field}
                        className="rounded-[5px] py-[17px] px-3 h-[56px] text-lg font-normal leading-customNormal focus-visible:border-customMkt-primary focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                variant="customPrimary"
                size="customLg"
                className="mt-[30px] mb-[26px]"
                type="submit"
                disabled={loading}
              >
                Confirmar
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
