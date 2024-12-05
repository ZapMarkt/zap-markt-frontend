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
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';

const recoveryPasswordSchema = z.object({
  email: z.coerce
    .string()
    .email({ message: 'Por favor, insira um endereço de email válido.' }),
});

type RecoveryPasswordSchema = z.infer<typeof recoveryPasswordSchema>;

const RecoveryPassword = () => {
  const form = useForm<RecoveryPasswordSchema>({
    resolver: zodResolver(recoveryPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RecoveryPasswordSchema> = (data) => {
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
              Esqueci minha senha
            </h1>
            <p className="text-lg font-normal leading-customNormal text-customMkt-gray8">
              Enviaremos um link ao e-mail abaixo, com instruções para você
              redefinir sua senha:
            </p>
          </div>

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
              <Button
                variant="customPrimary"
                size="customLg"
                className="my-[30px]"
                type="submit"
                disabled={loading}
              >
                Enviar link
              </Button>
            </form>
          </Form>
          <div className="flex justify-center items-center py-[26px] px-10 border-t border-customMkt-gray4">
            <Link
              to="/login-supermarket"
              className="text-right text-lg font-medium leading-customNormal text-customMkt-primary  hover:underline transition"
            >
              Voltar para o login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecoveryPassword;
